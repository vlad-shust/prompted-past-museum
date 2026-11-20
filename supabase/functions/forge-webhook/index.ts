// fal.ai completion webhook (verify_jwt = false in config.toml).
// Authenticated by the shared-secret token in the URL that forge-submit
// constructed. Idempotent on forge id; fal retries up to 10 times over 2h.
//
// Hardening step: verify fal's ED25519
// signature headers against https://rest.alpha.fal.ai/.well-known/jwks.json.
//
// Secrets: FORGE_WEBHOOK_SECRET (+ standard SUPABASE_* injected)

import { createClient } from 'npm:@supabase/supabase-js@2';
import { json, requireEnv } from '../_shared/http.ts';

interface FalWebhookPayload {
  request_id?: string;
  status?: 'OK' | 'ERROR';
  payload?: { images?: Array<{ url?: string }> };
  error?: string;
  payload_error?: string;
}

// The image URL in the payload is attacker-influenceable (the shared secret
// rides in the webhook query string and leaks into logs), so only fetch from
// fal's own result hosts — otherwise a replayed webhook is a blind SSRF into
// whatever host it names.
const ALLOWED_IMAGE_HOSTS = /(^|\.)fal\.(ai|run|media)$/i;

function isAllowedImageUrl(raw: string): boolean {
  let parsed: URL;
  try {
    parsed = new URL(raw);
  } catch {
    return false;
  }
  return parsed.protocol === 'https:' && ALLOWED_IMAGE_HOSTS.test(parsed.hostname);
}

Deno.serve(async (req) => {
  if (req.method !== 'POST') return json({ error: 'method_not_allowed' }, 405);

  const url = new URL(req.url);
  if (url.searchParams.get('token') !== requireEnv('FORGE_WEBHOOK_SECRET')) {
    return json({ error: 'unauthorized' }, 401);
  }
  const forgeId = url.searchParams.get('forge_id');
  if (!forgeId) return json({ error: 'missing_forge_id' }, 400);

  const admin = createClient(requireEnv('SUPABASE_URL'), requireEnv('SUPABASE_SERVICE_ROLE_KEY'));

  const { data: forge, error: forgeError } = await admin
    .from('forges')
    .select('*')
    .eq('id', forgeId)
    .maybeSingle();
  if (forgeError || !forge) return json({ error: 'forge_not_found' }, 404);
  if (forge.status === 'complete' || forge.status === 'failed') return json({ ok: true, idempotent: true });

  let body: FalWebhookPayload;
  try {
    body = (await req.json()) as FalWebhookPayload;
  } catch {
    return json({ error: 'invalid_json' }, 400);
  }

  if (body.status !== 'OK') {
    await admin
      .from('forges')
      .update({ status: 'failed', error: body.error ?? body.payload_error ?? 'generation_failed' })
      .eq('id', forgeId);
    return json({ ok: true });
  }

  const sourceUrl = body.payload?.images?.[0]?.url;
  if (!sourceUrl) {
    await admin.from('forges').update({ status: 'failed', error: 'no_image_in_payload' }).eq('id', forgeId);
    return json({ ok: true });
  }
  if (!isAllowedImageUrl(sourceUrl)) {
    await admin.from('forges').update({ status: 'failed', error: 'image_host_not_allowed' }).eq('id', forgeId);
    return json({ error: 'image_host_not_allowed' }, 400);
  }

  // Copy the image out of fal's temporary storage into ours.
  const imageResponse = await fetch(sourceUrl);
  if (!imageResponse.ok) {
    await admin
      .from('forges')
      .update({ status: 'failed', error: `image_download_${imageResponse.status}` })
      .eq('id', forgeId);
    return json({ ok: true });
  }
  const imageBytes = new Uint8Array(await imageResponse.arrayBuffer());
  const storagePath = `${forge.user_id}/${forgeId}.jpg`;

  const { error: uploadError } = await admin.storage
    .from('forges')
    .upload(storagePath, imageBytes, { contentType: 'image/jpeg', upsert: true });
  if (uploadError) {
    await admin
      .from('forges')
      .update({ status: 'failed', error: `upload_failed: ${uploadError.message}` })
      .eq('id', forgeId);
    return json({ ok: true });
  }

  const { data: publicUrl } = admin.storage.from('forges').getPublicUrl(storagePath);
  await admin
    .from('forges')
    .update({
      status: 'complete',
      image_url: publicUrl.publicUrl,
      completed_at: new Date().toISOString(),
    })
    .eq('id', forgeId);

  return json({ ok: true });
});
