/**
 * prompted.past editorial pipeline — the weekly ritual.
 *
 *   npm run editorial -- draft "Napoleon watches Moscow burn" --era revolutionary-age \
 *       --year 1812 --date-label "14 September 1812" [--month-day 09-14] [--on-this-day] \
 *       [--commissioned-by "<name>"] [--dry-run]
 *   npm run editorial -- render <slug> [--count 4] [--dry-run]
 *   npm run editorial -- publish <slug> --pick 2 --date 2026-07-12 [--dry-run]
 *   npm run editorial -- status
 *   npm run editorial -- suggest --date 07-14 [--dry-run]
 *   npm run editorial -- season set 2026-08 viking-age --title "The Viking Age" [--dry-run]
 *
 * Workflow: draft → render 4 candidates → look at editorial-work/<slug>/ →
 * publish the pick with a schedule date. Everything supports --dry-run.
 */
import { createClient } from '@supabase/supabase-js';
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

import { ERAS } from '../../src/content/eras';
import {
  draftDir,
  estimateNarrationSeconds,
  falGenerate,
  flagValue,
  HOUSE_STYLE,
  loadDraft,
  loadEnv,
  monthDayFromLabel,
  monthDayToProse,
  requireKey,
  saveDraft,
} from './lib';
import type { SceneDraft, SceneSuggestion } from './editorial.types';

const argv = process.argv.slice(2);
const command = argv[0];
const env = loadEnv(argv);

const EDITORIAL_MODEL = process.env.CLAUDE_EDITORIAL_MODEL ?? 'claude-sonnet-4-6';

const MONTH_DAY_PATTERN = /^(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

/** Soft guardrail: note when a draft's era drifts from this month's season. */
async function warnOnSeasonMismatch(eraId: string): Promise<void> {
  if (env.dryRun || !env.supabaseUrl || !env.supabaseServiceRoleKey) return;
  try {
    const admin = createClient(env.supabaseUrl, env.supabaseServiceRoleKey);
    const now = new Date();
    const { data } = await admin
      .from('seasons')
      .select('era_id, title')
      .eq('year', now.getFullYear())
      .eq('month', now.getMonth() + 1)
      .maybeSingle();
    if (data && data.era_id !== eraId) {
      console.warn(`⚠ This month's season is "${data.title}" (${data.era_id}); drafting ${eraId} anyway.`);
    }
  } catch {
    // The season check is advisory — never block a draft on it.
  }
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 60);
}

async function draftCommand(): Promise<void> {
  const event = argv[1];
  const eraId = flagValue(argv, '--era');
  const year = Number(flagValue(argv, '--year'));
  const dateLabel = flagValue(argv, '--date-label');
  if (!event || !eraId || !dateLabel || Number.isNaN(year)) {
    console.error(
      'Usage: draft "<event>" --era <era-id> --year <n> --date-label "<label>" ' +
        '[--month-day MM-DD] [--on-this-day] [--commissioned-by "<name>"]',
    );
    process.exit(1);
  }

  const monthDayFlag = flagValue(argv, '--month-day');
  if (monthDayFlag && !MONTH_DAY_PATTERN.test(monthDayFlag)) {
    console.error(`✗ --month-day must be MM-DD, got "${monthDayFlag}"`);
    process.exit(1);
  }
  const monthDay = monthDayFlag ?? monthDayFromLabel(dateLabel);
  if (argv.includes('--on-this-day') && !monthDay) {
    console.error('✗ Anniversary scenes need an exact day; pass --month-day MM-DD.');
    process.exit(1);
  }
  await warnOnSeasonMismatch(eraId);

  const system = [
    'You are the editorial voice of prompted.past, a museum that paints one moment from history each day.',
    'Given a historical event, produce:',
    '- title: evocative, max 5 words, never a textbook name ("The Last Tuesday of Rome", not "Fall of Constantinople").',
    '- dek: one line, present tense, concrete.',
    '- story: 600–750 words in 3–5 paragraphs separated by blank lines (a 3–4 minute read). Present tense, sensory, factually grounded, "you are standing there" energy without addressing the reader. Each paragraph earns its place: open inside the scene, widen to how the moment was built, then let the day turn; close on a hard fact or image, never a moral. Prefer verifiable specifics (prices, counts, named minor people, what something smelled or cost) over atmosphere. End on a resonant line. No purple prose, no rhetorical questions, and never an em dash: use commas, colons, or periods instead.',
    '- image_prompt: a single image-generation prompt that MUST begin with this exact style block:',
    `"${HOUSE_STYLE}"`,
    'then the scene: era-accurate clothing, architecture, objects, light; one clear focal moment; composition language. Under 180 words.',
    'Numbers: write quantities as digits (481 feet, 2.3 million blocks, 615,000 men), never spelled out. Words only for small counts carried by rhythm. Never open a sentence with a digit under 1,000. Never stack more than two figures in one sentence.',
    'The painting: when the scene hangs a real work, one paragraph must carry a verified fact about the picture itself, not the event: who modelled for it, what the painter changed or got wrong, what it cost, where it hung, what the x-rays found. Name names. Skip it rather than invent it.',
  ].join('\n');

  if (env.dryRun) {
    console.log('── dry run: would send to Claude ──');
    console.log(`month-day: ${monthDay ?? '(none — not an exact-day scene)'}`);
    console.log(`model: ${EDITORIAL_MODEL}\n\nsystem:\n${system}\n\nuser:\n${event}`);
    return;
  }

  const apiKey = requireKey(env.anthropicKey, 'ANTHROPIC_API_KEY', env.dryRun);
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'x-api-key': apiKey, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
    body: JSON.stringify({
      model: EDITORIAL_MODEL,
      max_tokens: 2600,
      system,
      messages: [{ role: 'user', content: event }],
      tools: [
        {
          name: 'submit_scene',
          description: 'Submit the drafted scene.',
          input_schema: {
            type: 'object',
            properties: {
              title: { type: 'string' },
              dek: { type: 'string' },
              story: { type: 'string' },
              image_prompt: { type: 'string' },
            },
            required: ['title', 'dek', 'story', 'image_prompt'],
          },
        },
      ],
      tool_choice: { type: 'tool', name: 'submit_scene' },
    }),
  });
  if (!response.ok) {
    console.error(`✗ Claude API ${response.status}: ${await response.text()}`);
    process.exit(1);
  }
  const data = (await response.json()) as {
    content: Array<{ type: string; input?: { title: string; dek: string; story: string; image_prompt: string } }>;
  };
  const scene = data.content.find((block) => block.type === 'tool_use')?.input;
  if (!scene) {
    console.error('✗ Claude returned no scene');
    process.exit(1);
  }

  const draft: SceneDraft = {
    slug: slugify(scene.title),
    title: scene.title,
    dek: scene.dek,
    story: scene.story,
    eraId,
    historicalDateLabel: dateLabel,
    historicalYear: year,
    onThisDay: argv.includes('--on-this-day'),
    historicalMonthDay: monthDay,
    commissionedBy: flagValue(argv, '--commissioned-by'),
    imagePrompt: scene.image_prompt,
    sourceEvent: event,
    draftedAt: new Date().toISOString(),
  };
  const file = saveDraft(draft);
  console.log(`✓ Draft saved: ${file}`);
  console.log(`\n${draft.title}\n${draft.dek}\n\n${draft.story}\n`);
  console.log(`Next: npm run editorial -- render ${draft.slug}`);
}

async function renderCommand(): Promise<void> {
  const slug = argv[1];
  if (!slug) {
    console.error('Usage: render <slug> [--count 4]');
    process.exit(1);
  }
  const draft = loadDraft(slug);
  const count = Number(flagValue(argv, '--count') ?? '4');

  if (env.dryRun) {
    console.log(`── dry run: would render ${count} candidates on fal.ai (${process.env.FAL_MODEL ?? 'fal-ai/flux-2/lora'}) ──`);
    console.log(draft.imagePrompt);
    return;
  }

  const falKey = requireKey(env.falKey, 'FAL_KEY', env.dryRun);
  console.log(`Rendering ${count} candidates for "${draft.title}"…`);
  const results = await Promise.all(
    Array.from({ length: count }, (_, index) => falGenerate(falKey, draft.imagePrompt, index)),
  );
  let saved = 0;
  for (const [index, result] of results.entries()) {
    if (!result) continue;
    // undici types report a union here; at runtime this is always an ArrayBuffer.
    const bytes = Buffer.from((await fetch(result.url).then((r) => r.arrayBuffer())) as ArrayBuffer);
    const file = join(draftDir(slug), `${index + 1}.jpg`);
    writeFileSync(file, bytes);
    saved += 1;
    console.log(`  ✓ candidate ${index + 1}: ${file}`);
  }
  console.log(`\n${saved}/${count} candidates saved. Look at them, then:`);
  console.log(`npm run editorial -- publish ${slug} --pick <n> --date YYYY-MM-DD`);
}

async function publishCommand(): Promise<void> {
  const slug = argv[1];
  const pick = Number(flagValue(argv, '--pick'));
  const date = flagValue(argv, '--date');
  if (!slug || Number.isNaN(pick) || !date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    console.error('Usage: publish <slug> --pick <n> --date YYYY-MM-DD');
    process.exit(1);
  }
  const draft = loadDraft(slug);
  const imageFile = join(draftDir(slug), `${pick}.jpg`);

  if (env.dryRun) {
    console.log('── dry run: would publish ──');
    console.log(`  narrate ~${estimateNarrationSeconds(draft.story)}s via ElevenLabs`);
    console.log(`  upload ${imageFile} → storage scenes/${slug}.jpg`);
    console.log(`  upload narration → storage scenes/${slug}.mp3`);
    console.log(`  insert scenes row scheduled_for=${date} status=published`);
    return;
  }

  const elevenKey = requireKey(env.elevenLabsKey, 'ELEVENLABS_API_KEY', env.dryRun);
  const voiceId = requireKey(env.elevenLabsVoiceId, 'ELEVENLABS_VOICE_ID', env.dryRun);
  const supabaseUrl = requireKey(env.supabaseUrl, 'SUPABASE_URL', env.dryRun);
  const serviceKey = requireKey(env.supabaseServiceRoleKey, 'SUPABASE_SERVICE_ROLE_KEY', env.dryRun);
  const admin = createClient(supabaseUrl, serviceKey);

  console.log('Narrating…');
  const narration = `${draft.title}. ${draft.historicalDateLabel}. ... ${draft.story}`;
  const ttsResponse = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
    method: 'POST',
    headers: { 'xi-api-key': elevenKey, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      text: narration,
      model_id: process.env.ELEVENLABS_MODEL_ID ?? 'eleven_multilingual_v2',
      voice_settings: { stability: 0.55, similarity_boost: 0.75 },
    }),
  });
  if (!ttsResponse.ok) {
    console.error(`✗ ElevenLabs ${ttsResponse.status}: ${await ttsResponse.text()}`);
    process.exit(1);
  }
  // undici types report a union here; at runtime this is always an ArrayBuffer.
  const audioBytes = Buffer.from((await ttsResponse.arrayBuffer()) as ArrayBuffer);

  console.log('Uploading…');
  const imageBytes = readFileSync(imageFile);
  const imageUpload = await admin.storage
    .from('scenes')
    .upload(`${slug}.jpg`, imageBytes, { contentType: 'image/jpeg', upsert: true });
  if (imageUpload.error) {
    console.error(`✗ image upload: ${imageUpload.error.message}`);
    process.exit(1);
  }
  const audioUpload = await admin.storage
    .from('scenes')
    .upload(`${slug}.mp3`, audioBytes, { contentType: 'audio/mpeg', upsert: true });
  if (audioUpload.error) {
    console.error(`✗ audio upload: ${audioUpload.error.message}`);
    process.exit(1);
  }
  const imageUrl = admin.storage.from('scenes').getPublicUrl(`${slug}.jpg`).data.publicUrl;
  const audioUrl = admin.storage.from('scenes').getPublicUrl(`${slug}.mp3`).data.publicUrl;

  const { error: insertError } = await admin.from('scenes').upsert(
    {
      slug: draft.slug,
      title: draft.title,
      dek: draft.dek,
      story: draft.story,
      era_id: draft.eraId,
      historical_date_label: draft.historicalDateLabel,
      historical_year: draft.historicalYear,
      scheduled_for: date,
      image_url: imageUrl,
      thumb_url: imageUrl,
      audio_url: audioUrl,
      audio_duration_seconds: estimateNarrationSeconds(draft.story),
      on_this_day: draft.onThisDay,
      historical_month_day: draft.historicalMonthDay ?? null,
      commissioned_by: draft.commissionedBy ?? null,
      status: 'published',
    },
    { onConflict: 'slug' },
  );
  if (insertError) {
    console.error(`✗ scenes insert: ${insertError.message}`);
    process.exit(1);
  }
  console.log(`✓ "${draft.title}" scheduled for ${date}.`);
}

async function statusCommand(): Promise<void> {
  const supabaseUrl = requireKey(env.supabaseUrl, 'SUPABASE_URL', env.dryRun);
  const serviceKey = requireKey(env.supabaseServiceRoleKey, 'SUPABASE_SERVICE_ROLE_KEY', env.dryRun);
  if (env.dryRun) {
    console.log('── dry run: would list the scene schedule ──');
    return;
  }
  const admin = createClient(supabaseUrl, serviceKey);
  const { data, error } = await admin
    .from('scenes')
    .select('scheduled_for, title, status, historical_month_day')
    .order('scheduled_for', { ascending: false })
    .limit(21);
  if (error) {
    console.error(`✗ ${error.message}`);
    process.exit(1);
  }
  const today = new Date().toISOString().slice(0, 10);
  for (const row of data ?? []) {
    const marker = row.scheduled_for === today ? '→' : row.scheduled_for > today ? '·' : ' ';
    console.log(`${marker} ${row.scheduled_for}  [${row.status}]  ${row.title}`);
  }
  const upcoming = (data ?? []).filter((row) => row.scheduled_for > today).length;
  console.log(`\n${upcoming} scene(s) queued ahead. The plan asks for 7–14.`);

  // Anniversary coverage: does each of the next 14 days run on its own date?
  const bySchedule = new Map<string, string | null>(
    (data ?? []).map((row) => [row.scheduled_for as string, row.historical_month_day as string | null]),
  );
  console.log('\nAnniversary coverage, next 14 days:');
  let firstGap: string | null = null;
  for (let offset = 0; offset < 14; offset += 1) {
    const day = new Date();
    day.setDate(day.getDate() + offset);
    const iso = day.toISOString().slice(0, 10);
    const monthDay = iso.slice(5);
    if (!bySchedule.has(iso)) {
      console.log(`! ${iso}  empty slot`);
      firstGap ??= monthDay;
    } else if (bySchedule.get(iso) === monthDay) {
      console.log(`★ ${iso}  anniversary match`);
    } else {
      console.log(`· ${iso}  no anniversary`);
      firstGap ??= monthDay;
    }
  }
  if (firstGap) {
    console.log(`\ntry: npm run editorial -- suggest --date ${firstGap}`);
  }
}

async function suggestCommand(): Promise<void> {
  const monthDay = flagValue(argv, '--date');
  if (!monthDay || !MONTH_DAY_PATTERN.test(monthDay)) {
    console.error('Usage: suggest --date MM-DD');
    process.exit(1);
  }
  const prose = monthDayToProse(monthDay);
  const eraIds = ERAS.map((era) => String(era.id));

  const system = [
    'You are the editorial researcher for prompted.past, a museum that paints one moment from history each day.',
    `Propose exactly five events that happened on ${prose} (any year), spread across different eras of this taxonomy: ${eraIds.join(', ')}.`,
    'Favor sensory, single-moment scenes over abstract milestones: a person somewhere at a particular hour, not "a treaty was signed".',
    'Only propose events whose calendar date is well-attested; skip legends and approximate datings.',
    'event: one vivid line, ready to hand to the scene writer. date_label: house-style prose date like "14 July 1789". hook: one line on why it sings as a daily scene.',
  ].join('\n');
  const user = `Five moments for ${prose}.`;

  if (env.dryRun) {
    console.log('── dry run: would send to Claude ──');
    console.log(`model: ${EDITORIAL_MODEL}\n\nsystem:\n${system}\n\nuser:\n${user}`);
    return;
  }

  const apiKey = requireKey(env.anthropicKey, 'ANTHROPIC_API_KEY', env.dryRun);
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'x-api-key': apiKey, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
    body: JSON.stringify({
      model: EDITORIAL_MODEL,
      max_tokens: 1600,
      system,
      messages: [{ role: 'user', content: user }],
      tools: [
        {
          name: 'submit_suggestions',
          description: 'Submit the five candidate events.',
          input_schema: {
            type: 'object',
            properties: {
              suggestions: {
                type: 'array',
                minItems: 5,
                maxItems: 5,
                items: {
                  type: 'object',
                  properties: {
                    event: { type: 'string' },
                    era_id: { type: 'string', enum: eraIds },
                    year: { type: 'number' },
                    date_label: { type: 'string' },
                    hook: { type: 'string' },
                  },
                  required: ['event', 'era_id', 'year', 'date_label', 'hook'],
                },
              },
            },
            required: ['suggestions'],
          },
        },
      ],
      tool_choice: { type: 'tool', name: 'submit_suggestions' },
    }),
  });
  if (!response.ok) {
    console.error(`✗ Claude API ${response.status}: ${await response.text()}`);
    process.exit(1);
  }
  const data = (await response.json()) as {
    content: Array<{ type: string; input?: { suggestions: SceneSuggestion[] } }>;
  };
  const suggestions = data.content.find((block) => block.type === 'tool_use')?.input?.suggestions;
  if (!suggestions) {
    console.error('✗ Claude returned no suggestions');
    process.exit(1);
  }

  console.log(`Moments for ${prose}:\n`);
  for (const [index, s] of suggestions.entries()) {
    console.log(`${index + 1}. ${s.event}`);
    console.log(`   ${s.era_id} · ${s.date_label} · ${s.hook}`);
    console.log(
      `   npm run editorial -- draft "${s.event}" --era ${s.era_id} --year ${s.year} ` +
        `--date-label "${s.date_label}" --month-day ${monthDay} --on-this-day\n`,
    );
  }
}

async function seasonCommand(): Promise<void> {
  const action = argv[1];
  const yearMonth = argv[2];
  const eraId = argv[3];
  const title = flagValue(argv, '--title');
  if (action !== 'set' || !yearMonth || !/^\d{4}-(0[1-9]|1[0-2])$/.test(yearMonth) || !eraId || !title) {
    console.error('Usage: season set YYYY-MM <era-id> --title "<title>"');
    process.exit(1);
  }
  if (!ERAS.some((era) => String(era.id) === eraId)) {
    console.error(`✗ Unknown era "${eraId}". Known: ${ERAS.map((era) => String(era.id)).join(', ')}`);
    process.exit(1);
  }
  const [year, month] = yearMonth.split('-').map(Number);

  if (env.dryRun) {
    console.log(`── dry run: would upsert season ${yearMonth} → ${eraId} ("${title}") ──`);
    return;
  }

  const supabaseUrl = requireKey(env.supabaseUrl, 'SUPABASE_URL', env.dryRun);
  const serviceKey = requireKey(env.supabaseServiceRoleKey, 'SUPABASE_SERVICE_ROLE_KEY', env.dryRun);
  const admin = createClient(supabaseUrl, serviceKey);
  const { error } = await admin
    .from('seasons')
    .upsert({ year, month, era_id: eraId, title }, { onConflict: 'year,month' });
  if (error) {
    console.error(`✗ seasons upsert: ${error.message}`);
    process.exit(1);
  }
  console.log(`✓ Season set: ${yearMonth} → ${title}`);
}

async function main(): Promise<void> {
  switch (command) {
    case 'draft':
      await draftCommand();
      break;
    case 'render':
      await renderCommand();
      break;
    case 'publish':
      await publishCommand();
      break;
    case 'status':
      await statusCommand();
      break;
    case 'suggest':
      await suggestCommand();
      break;
    case 'season':
      await seasonCommand();
      break;
    default:
      console.log('Commands: draft · render · publish · status · suggest · season (all accept --dry-run)');
      console.log('See scripts/editorial/README.md for the weekly ritual.');
  }
}

void main();
