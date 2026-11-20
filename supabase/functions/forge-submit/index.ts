// The forge's brain. Auth'd users submit { era_id, description }; this
// function atomically consumes quota, has Claude validate + expand the
// commission into a house-style prompt, and queues FLUX generation on
// fal.ai with a webhook back to forge-webhook.
//
// Secrets: ANTHROPIC_API_KEY, FAL_KEY, FORGE_WEBHOOK_SECRET
// Optional: CLAUDE_MODEL, FAL_MODEL, FAL_LORA_URL, FAL_LORA_SCALE, HOUSE_STYLE_PROMPT

import { createClient } from 'npm:@supabase/supabase-js@2';
import { corsHeaders, json, requireEnv } from '../_shared/http.ts';

const DEFAULT_CLAUDE_MODEL = 'claude-haiku-4-5-20251001';
const DEFAULT_FAL_MODEL = 'fal-ai/flux-2/lora';
const DEFAULT_HOUSE_STYLE =
  'Cinematic historical scene in the prompted.past Molten style: painterly chiaroscuro, ' +
  'ember-lit palette of deep umber, burnt orange and gold leaf against near-black shadow, ' +
  'volumetric smoke and firelight, dramatic single-moment composition, textured oil-painting ' +
  'surface, subtle film grain. No text, no borders, no watermarks.';

const REJECTION_FALLBACK = 'The forge only shapes the past. Choose a moment history could have witnessed.';

// Treatment vocabularies. Keys mirror the client's ForgeLight/ForgeMood/ForgeEye
// unions; values are the only fragments that ever reach the prompt, so an
// unknown or tampered value is simply ignored.
const LIGHT_NOTES: Record<string, string> = {
  dawn: 'lit by the first pale gold of dawn, long cool shadows',
  'golden-hour': 'bathed in low golden-hour sun, warm light rimming every edge',
  candlelight: 'lit only by candle flame, small pools of warmth against deep darkness',
  moonlight: 'under cold blue moonlight, silvered edges and deep night shadow',
  'storm-light': 'under bruised storm-light, a dark sky broken by pale shafts of sun',
  fog: 'wrapped in dense fog, shapes dissolving into pale distance',
};

const MOOD_NOTES: Record<string, string> = {
  serene: 'quiet and serene, a held breath of stillness',
  ominous: 'ominous and foreboding, something about to go wrong',
  triumphant: 'triumphant and grand, hard-won victory in the air',
  melancholy: 'melancholy and wistful, beauty tinged with loss',
  wondrous: 'wide-eyed wonder at something never seen before',
  tense: 'taut with tension, the instant before action',
};

const EYE_NOTES: Record<string, string> = {
  'up-close': 'an intimate close-up, faces and hands filling the frame',
  'wide-vista': 'a sweeping wide vista, figures small against the immensity',
  'from-above': 'seen from high above, the scene laid out below',
  'from-the-ground': 'seen from low to the ground looking up, monumental and towering',
};

interface ForgeBody {
  era_id?: string;
  description?: string;
  light?: string | null;
  mood?: string | null;
  eye?: string | null;
}

function treatmentNotes(body: ForgeBody): string[] {
  const notes: string[] = [];
  const light = body.light ? LIGHT_NOTES[body.light] : undefined;
  const mood = body.mood ? MOOD_NOTES[body.mood] : undefined;
  const eye = body.eye ? EYE_NOTES[body.eye] : undefined;
  if (light) notes.push(`the light: ${light}`);
  if (mood) notes.push(`the mood: ${mood}`);
  if (eye) notes.push(`the eye: ${eye}`);
  return notes;
}

interface ClaudeVerdict {
  valid: boolean;
  reason?: string;
  title?: string;
  prompt?: string;
}

async function askClaude(
  eraName: string,
  eraYears: string,
  eraGuidance: string,
  description: string,
  notes: string[],
): Promise<ClaudeVerdict> {
  const apiKey = requireEnv('ANTHROPIC_API_KEY');
  const model = Deno.env.get('CLAUDE_MODEL') ?? DEFAULT_CLAUDE_MODEL;
  const houseStyle = Deno.env.get('HOUSE_STYLE_PROMPT') ?? DEFAULT_HOUSE_STYLE;

  const system = [
    'You are the forge of prompted.past, a museum app that renders scenes from history.',
    `The visitor has chosen the era "${eraName}" (${eraYears}).`,
    `Era guidance: ${eraGuidance}`,
    'Judge their scene description:',
    '- REJECT anything anachronistic for the era, off-topic, sexual, gory beyond battlefield reality, hateful, or depicting real living people.',
    '- Rejections must be one short, warm, in-brand sentence (the app shows it verbatim).',
    '- Otherwise ACCEPT: give the scene a short evocative title (max 6 words, no quotes) and expand the description into a single image-generation prompt.',
    `- The prompt MUST begin with this exact style block: "${houseStyle}"`,
    '- After the style block, add the scene: era-accurate clothing, architecture, objects and light, one clear focal moment, composition language (foreground/midground/background). Never mention artists by name. Keep it under 180 words.',
    ...(notes.length > 0
      ? [
          `- The visitor also set the treatment. Weave each note faithfully into the scene: ${notes.join('; ')}.`,
        ]
      : []),
  ].join('\n');

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model,
      max_tokens: 1200,
      system,
      messages: [{ role: 'user', content: description }],
      tools: [
        {
          name: 'render_verdict',
          description: 'Return the forge verdict for the commission.',
          input_schema: {
            type: 'object',
            properties: {
              valid: { type: 'boolean' },
              reason: { type: 'string', description: 'Required when valid=false. One in-brand sentence.' },
              title: { type: 'string', description: 'Required when valid=true.' },
              prompt: { type: 'string', description: 'Required when valid=true. Full image prompt.' },
            },
            required: ['valid'],
          },
        },
      ],
      tool_choice: { type: 'tool', name: 'render_verdict' },
    }),
  });

  if (!response.ok) {
    throw new Error(`Claude API ${response.status}: ${await response.text()}`);
  }
  const data = (await response.json()) as {
    stop_reason?: string;
    content: Array<{ type: string; input?: ClaudeVerdict }>;
  };
  // A truncated tool call yields half-parsed JSON that can read as
  // valid=false (a false rejection) or valid=true with no prompt (an empty
  // generation). Treat truncation as an infrastructure failure to retry.
  if (data.stop_reason === 'max_tokens') {
    throw new Error('Claude verdict truncated (max_tokens)');
  }
  const toolUse = data.content.find((block) => block.type === 'tool_use');
  if (!toolUse?.input) throw new Error('Claude returned no verdict');
  return toolUse.input;
}

async function queueFalGeneration(prompt: string, forgeId: string): Promise<string> {
  const falKey = requireEnv('FAL_KEY');
  const webhookSecret = requireEnv('FORGE_WEBHOOK_SECRET');
  const supabaseUrl = requireEnv('SUPABASE_URL');
  const falModel = Deno.env.get('FAL_MODEL') ?? DEFAULT_FAL_MODEL;
  const loraUrl = Deno.env.get('FAL_LORA_URL');
  const loraScale = Number(Deno.env.get('FAL_LORA_SCALE') ?? '1');

  const webhookUrl = `${supabaseUrl}/functions/v1/forge-webhook?token=${webhookSecret}&forge_id=${forgeId}`;
  const endpoint = `https://queue.fal.run/${falModel}?fal_webhook=${encodeURIComponent(webhookUrl)}`;

  const body: Record<string, unknown> = {
    prompt,
    image_size: 'portrait_4_3',
    num_images: 1,
    output_format: 'jpeg',
    guidance_scale: 2.5,
    num_inference_steps: 28,
  };
  if (loraUrl) body.loras = [{ path: loraUrl, scale: loraScale }];

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { Authorization: `Key ${falKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    throw new Error(`fal.ai queue ${response.status}: ${await response.text()}`);
  }
  const data = (await response.json()) as { request_id: string };
  return data.request_id;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (req.method !== 'POST') return json({ error: 'method_not_allowed' }, 405);

  const admin = createClient(requireEnv('SUPABASE_URL'), requireEnv('SUPABASE_SERVICE_ROLE_KEY'));

  // Resolve the caller from their JWT (function runs with verify_jwt on).
  const authHeader = req.headers.get('Authorization') ?? '';
  const token = authHeader.replace(/^Bearer\s+/i, '');
  const { data: userData, error: userError } = await admin.auth.getUser(token);
  if (userError || !userData.user) return json({ error: 'unauthorized' }, 401);
  const userId = userData.user.id;

  let body: ForgeBody;
  try {
    body = (await req.json()) as ForgeBody;
  } catch {
    return json({ error: 'invalid_json' }, 400);
  }
  const eraId = body.era_id?.trim() ?? '';
  const description = body.description?.trim() ?? '';
  if (!eraId || description.length < 8 || description.length > 300) {
    return json({ error: 'invalid_commission' }, 400);
  }

  const { data: era, error: eraError } = await admin.from('eras').select('*').eq('id', eraId).maybeSingle();
  if (eraError || !era) return json({ error: 'unknown_era' }, 400);

  // Atomic quota consume + row creation.
  const { data: forge, error: beginError } = await admin.rpc('try_begin_forge', {
    p_user: userId,
    p_era: eraId,
    p_description: description,
  });
  if (beginError) {
    if (beginError.message.includes('quota_exhausted')) return json({ error: 'quota_exhausted' }, 429);
    return json({ error: `begin_failed: ${beginError.message}` }, 500);
  }

  try {
    const years = `${era.start_year < 0 ? `${-era.start_year} BC` : era.start_year}–${
      era.end_year < 0 ? `${-era.end_year} BC` : era.end_year
    }`;
    const verdict = await askClaude(era.name, years, era.forge_guidance, description, treatmentNotes(body));

    if (!verdict.valid) {
      const { data: rejected } = await admin
        .from('forges')
        .update({ status: 'rejected', rejection_reason: verdict.reason ?? REJECTION_FALLBACK })
        .eq('id', forge.id)
        .select()
        .single();
      return json({ forge: rejected });
    }

    // An acceptance with no prompt/title is a malformed verdict, not a real
    // commission — queueing it would burn quota on a house-style-less image.
    const prompt = verdict.prompt?.trim();
    const title = verdict.title?.trim();
    if (!prompt || !title) {
      throw new Error('verdict_incomplete: accepted commission missing prompt or title');
    }

    const falRequestId = await queueFalGeneration(prompt, forge.id);
    const { data: generating } = await admin
      .from('forges')
      .update({
        status: 'generating',
        title,
        expanded_prompt: prompt,
        fal_request_id: falRequestId,
      })
      .eq('id', forge.id)
      .select()
      .single();
    return json({ forge: generating });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    const { data: failed } = await admin
      .from('forges')
      .update({ status: 'failed', error: message })
      .eq('id', forge.id)
      .select()
      .single();
    return json({ forge: failed, error: message }, 500);
  }
});
