import { config } from 'dotenv';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

import type { EditorialEnv, SceneDraft } from './editorial.types';

export const WORK_DIR = join(import.meta.dirname, '../../editorial-work');

export const HOUSE_STYLE =
  process.env.HOUSE_STYLE_PROMPT ??
  'Cinematic historical scene in the prompted.past Molten style: painterly chiaroscuro, ' +
    'ember-lit palette of deep umber, burnt orange and gold leaf against near-black shadow, ' +
    'volumetric smoke and firelight, dramatic single-moment composition, textured oil-painting ' +
    'surface, subtle film grain. No text, no borders, no watermarks.';

export function loadEnv(argv: string[]): EditorialEnv {
  config({ path: join(import.meta.dirname, '.env'), quiet: true });
  const dryRun = argv.includes('--dry-run');
  return {
    anthropicKey: process.env.ANTHROPIC_API_KEY ?? null,
    falKey: process.env.FAL_KEY ?? null,
    elevenLabsKey: process.env.ELEVENLABS_API_KEY ?? null,
    elevenLabsVoiceId: process.env.ELEVENLABS_VOICE_ID ?? null,
    supabaseUrl: process.env.SUPABASE_URL ?? null,
    supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY ?? null,
    dryRun,
  };
}

export function requireKey(value: string | null, name: string, dryRun: boolean): string {
  if (dryRun) return `dry-run-${name}`;
  if (!value) {
    console.error(`✗ Missing ${name}. Add it to scripts/editorial/.env or pass --dry-run to preview.`);
    process.exit(1);
  }
  return value;
}

export function flagValue(argv: string[], flag: string): string | null {
  const index = argv.indexOf(flag);
  if (index === -1 || index === argv.length - 1) return null;
  return argv[index + 1];
}

export function draftDir(slug: string): string {
  return join(WORK_DIR, slug);
}

export function saveDraft(draft: SceneDraft): string {
  const dir = draftDir(draft.slug);
  mkdirSync(dir, { recursive: true });
  const file = join(dir, 'draft.json');
  writeFileSync(file, JSON.stringify(draft, null, 2));
  return file;
}

export function loadDraft(slug: string): SceneDraft {
  const file = join(draftDir(slug), 'draft.json');
  if (!existsSync(file)) {
    console.error(`✗ No draft found at ${file}. Run: npm run editorial -- draft "<event>" first.`);
    process.exit(1);
  }
  return JSON.parse(readFileSync(file, 'utf8')) as SceneDraft;
}

export function estimateNarrationSeconds(story: string): number {
  const words = story.split(/\s+/).length;
  return Math.round((words / 168) * 60) + 4;
}

const MONTH_NAMES = [
  'january', 'february', 'march', 'april', 'may', 'june',
  'july', 'august', 'september', 'october', 'november', 'december',
];

/**
 * "24 August, AD 79" / "14 July 1789" / "August 24" → "08-24" / "07-14".
 * Null when the label has no exact day ("A morning in 1455", "August, 480 BC") —
 * a day number must sit directly beside the month word, so years never match.
 */
export function monthDayFromLabel(label: string): string | null {
  const lower = label.toLowerCase();
  for (const [index, name] of MONTH_NAMES.entries()) {
    const at = lower.indexOf(name);
    if (at === -1) continue;
    const before = lower.slice(0, at).match(/(\d{1,2})\s*$/);
    const after = lower.slice(at + name.length).match(/^\s+(\d{1,2})(?!\d)/);
    const day = before ? Number(before[1]) : after ? Number(after[1]) : null;
    if (day === null || day < 1 || day > 31) return null;
    return `${String(index + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  }
  return null;
}

/** "07-14" → "July 14" for prose prompts. */
export function monthDayToProse(monthDay: string): string {
  const [month, day] = monthDay.split('-').map(Number);
  const name = MONTH_NAMES[month - 1];
  return `${name.charAt(0).toUpperCase()}${name.slice(1)} ${day}`;
}

const FAL_MODEL = process.env.FAL_MODEL ?? 'fal-ai/flux-2/lora';

interface FalQueueSubmission {
  request_id: string;
  status_url: string;
  response_url: string;
}

export async function falGenerate(
  falKey: string,
  prompt: string,
  seedOffset: number,
): Promise<{ url: string } | null> {
  const loraUrl = process.env.FAL_LORA_URL;
  const body: Record<string, unknown> = {
    prompt,
    image_size: 'portrait_4_3',
    num_images: 1,
    output_format: 'jpeg',
    guidance_scale: 2.5,
    num_inference_steps: 28,
    seed: 1000 + seedOffset,
  };
  if (loraUrl) body.loras = [{ path: loraUrl, scale: Number(process.env.FAL_LORA_SCALE ?? '1') }];

  const submit = await fetch(`https://queue.fal.run/${FAL_MODEL}`, {
    method: 'POST',
    headers: { Authorization: `Key ${falKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!submit.ok) {
    console.error(`  fal submit failed: ${submit.status} ${await submit.text()}`);
    return null;
  }
  const queued = (await submit.json()) as FalQueueSubmission;

  for (let attempt = 0; attempt < 60; attempt += 1) {
    await new Promise((resolve) => setTimeout(resolve, 2_000));
    const statusResponse = await fetch(queued.status_url, {
      headers: { Authorization: `Key ${falKey}` },
    });
    const status = (await statusResponse.json()) as { status: string };
    if (status.status === 'COMPLETED') break;
    if (status.status === 'FAILED') {
      console.error('  fal generation failed');
      return null;
    }
  }

  const result = await fetch(queued.response_url, { headers: { Authorization: `Key ${falKey}` } });
  if (!result.ok) return null;
  const payload = (await result.json()) as { images?: Array<{ url: string }> };
  const url = payload.images?.[0]?.url;
  return url ? { url } : null;
}
