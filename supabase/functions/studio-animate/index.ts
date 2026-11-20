// The studio's brain. Auth'd users submit { image_base64, origin }; this
// function spends a commission (a purchase, or the member's monthly
// included one), runs the artwork gate (paintings and
// drawings only — no photographs of people), stores the still, and asks
// Grok Imagine for a subtle-motion clip: composition, detail and style
// untouched, only time added. One motion prompt for every painting; the
// model reads the picture and moves what is already there.
//
// Request/poll shapes verified against the live API on 2026-08-23:
// POST /v1/videos/generations -> { request_id }, then GET /v1/videos/{id}
// until status done|failed|expired. A moderation rejection replaces the
// poll body with { code: 'imagine:content-moderated' } (status never turns
// 'failed') and is still billed by xAI, so those pieces are marked
// 'rejected' and the spent commission is returned: consume-on-success.
//
// Secrets: XAI_API_KEY
// Optional: XAI_VIDEO_MODEL, XAI_VIDEO_RESOLUTION, REVENUECAT_SECRET_KEY
//           (server-side member check when the webhook lags),
//           STUDIO_GATE_MODEL (Claude vision gate, needs ANTHROPIC_API_KEY)

import { createClient } from 'npm:@supabase/supabase-js@2';
import { corsHeaders, json, requireEnv } from '../_shared/http.ts';

const DEFAULT_VIDEO_MODEL = 'grok-imagine-video-1.5';
const DEFAULT_VIDEO_RESOLUTION = '1080p';
const VIDEO_DURATION_SECONDS = 6;
const XAI_BASE = 'https://api.x.ai/v1';
const POLL_INTERVAL_MS = 5_000;
const POLL_DEADLINE_MS = 5 * 60 * 1000;
const SIGNED_URL_TTL_SEC = 60 * 60 * 24 * 365 * 10;

const REJECTION_MESSAGE =
  'The studio hangs only artworks. Choose a painting or a drawing, not a photograph of a person.';

const MODERATION_MESSAGE =
  "The studio couldn't wake this one. Nothing was taken from your month.";

/**
 * The one motion prompt every painting gets. Constraints, not directions:
 * naming motions ("candle and fire flicker") made the model invent objects,
 * and "moving as it naturally would" alone let it play the scene forward
 * (Goya's firing squad fired). The moment must hold; only the air moves.
 */
const MOTION_PROMPT =
  'Bring this painting to life with gentle, believable ambient motion. The painted moment holds still in time: ' +
  'no action begins, proceeds, or completes, and every figure keeps exactly the pose the painter gave them. ' +
  'Move only what the air would move: cloth, hair, foliage, water, smoke, the breathing of light. ' +
  'Add nothing: no new objects, no new figures, no new flames or lights, nothing entering from outside the frame. ' +
  'Keep the camera still. Composition, framing, palette, brushwork and every painted detail stay exactly as in the source image.';

async function persistStudioVideo(
  admin: ReturnType<typeof createClient>,
  userId: string,
  pieceId: string,
  remoteUrl: string,
): Promise<{ path: string; url: string }> {
  const videoRes = await fetch(remoteUrl);
  if (!videoRes.ok) throw new Error(`persist_${videoRes.status}`);
  const bytes = new Uint8Array(await videoRes.arrayBuffer());
  const path = `${userId}/${pieceId}.mp4`;
  const { error: uploadError } = await admin.storage.from('studio').upload(path, bytes, {
    contentType: 'video/mp4',
    upsert: true,
  });
  if (uploadError) throw new Error(`persist_upload: ${uploadError.message}`);
  const { data: signed, error: signError } = await admin.storage
    .from('studio')
    .createSignedUrl(path, SIGNED_URL_TTL_SEC);
  if (signError || !signed?.signedUrl) throw new Error('persist_sign');
  return { path, url: signed.signedUrl };
}

/** Membership drops one commission into the ledger each month; purchased
 * ones land via the RevenueCat webhook (consumable grant). */
const MEMBER_MONTHLY_COMMISSIONS = 1;

/** Server-side membership check against RevenueCat (REVENUECAT_SECRET_KEY,
 * optional). Without the key this returns false: the DB mirror decides. */
async function revenueCatSaysMember(userId: string): Promise<boolean> {
  const key = Deno.env.get('REVENUECAT_SECRET_KEY');
  if (!key) return false;
  try {
    const response = await fetch(
      `https://api.revenuecat.com/v1/subscribers/${encodeURIComponent(userId)}`,
      { headers: { Authorization: `Bearer ${key}` } },
    );
    if (!response.ok) return false;
    const data = (await response.json()) as {
      subscriber?: { entitlements?: Record<string, { expires_date?: string | null }> };
    };
    const member = data.subscriber?.entitlements?.member;
    if (!member) return false;
    return member.expires_date == null || Date.parse(member.expires_date) > Date.now();
  } catch {
    return false;
  }
}

interface StudioBody {
  image_base64?: unknown;
  origin?: unknown;
}

interface VideoCreatePayload {
  request_id?: string;
}

interface VideoPollPayload {
  status?: string;
  code?: string;
  error?: string;
  video?: { url?: string; respect_moderation?: boolean };
}

Deno.serve(async (request) => {
  if (request.method === 'OPTIONS') return new Response(null, { headers: corsHeaders });
  if (request.method !== 'POST') return json({ error: 'method_not_allowed' }, 405);

  const supabaseUrl = requireEnv('SUPABASE_URL');
  const serviceKey = requireEnv('SUPABASE_SERVICE_ROLE_KEY');
  const xaiKey = requireEnv('XAI_API_KEY');
  const videoModel = Deno.env.get('XAI_VIDEO_MODEL') ?? DEFAULT_VIDEO_MODEL;
  const videoResolution = Deno.env.get('XAI_VIDEO_RESOLUTION') ?? DEFAULT_VIDEO_RESOLUTION;

  const authHeader = request.headers.get('Authorization') ?? '';
  const admin = createClient(supabaseUrl, serviceKey);
  const { data: userData, error: userError } = await createClient(supabaseUrl, requireEnv('SUPABASE_ANON_KEY'), {
    global: { headers: { Authorization: authHeader } },
  }).auth.getUser();
  if (userError || !userData.user) return json({ error: 'unauthorized' }, 401);
  const userId = userData.user.id;

  const body = (await request.json().catch(() => ({}))) as StudioBody;
  const imageBase64 = typeof body.image_base64 === 'string' ? body.image_base64 : '';
  if (!imageBase64) return json({ error: 'bad_request' }, 400);
  // Unknown origin defaults to 'upload': the paid path, never a free ride.
  const origin = body.origin === 'collection' ? 'collection' : 'upload';
  // TODO(collection-metering): the visitor's single free collection wake is
  // client-enforced only until studio_pieces learns an origin column.

  // Entitlements mirror RevenueCat; membership decides the watermark and
  // the monthly included commission.
  const { data: entitlement } = await admin
    .from('entitlements')
    .select('is_member')
    .eq('user_id', userId)
    .maybeSingle();
  let isMember = entitlement?.is_member === true;
  // The webhook can lag a fresh subscription. Never trust the client: ask
  // RevenueCat directly when a secret key is configured.
  if (!isMember) isMember = await revenueCatSaysMember(userId);

  let spent = false;
  if (origin === 'upload') {
    const monthKey = new Date().toISOString().slice(0, 7);
    const { data: ok, error: spendError } = await admin.rpc('spend_commission', {
      p_user: userId,
      p_is_member: isMember,
      p_month: monthKey,
    });
    if (spendError) return json({ error: 'ledger_failed' }, 500);
    if (ok !== true) return json({ error: 'commission_required' }, 402);
    spent = true;
  }

  // Consume-on-success: any path that ends without a delivered clip puts
  // the spent commission back (atomically; last_grant_month untouched).
  const refundCommission = async () => {
    if (!spent) return;
    spent = false;
    const { error } = await admin.rpc('refund_commission', { p_user: userId });
    if (error) console.error('[studio-animate] refund failed:', error.message);
  };

  // Store the still in the private studio bucket.
  const imageBytes = Uint8Array.from(atob(imageBase64), (char) => char.charCodeAt(0));
  const imagePath = `${userId}/${crypto.randomUUID()}.jpg`;
  const { error: uploadError } = await admin.storage
    .from('studio')
    .upload(imagePath, imageBytes, { contentType: 'image/jpeg' });
  if (uploadError) {
    await refundCommission();
    return json({ error: 'upload_failed' }, 500);
  }
  const { data: signed } = await admin.storage.from('studio').createSignedUrl(imagePath, SIGNED_URL_TTL_SEC);
  const imageUrl = signed?.signedUrl ?? '';

  // TODO(connect-apis): artwork gate. A cheap Claude vision call classifies
  // the upload as artwork vs photograph-of-a-person before any generation
  // spend. Until wired, uploads pass and the reject path stays dormant.

  const { data: inserted, error: insertError } = await admin
    .from('studio_pieces')
    .insert({
      user_id: userId,
      image_path: imagePath,
      image_url: imageUrl,
      status: 'animating',
      watermarked: !isMember,
    })
    .select('*')
    .single();
  if (insertError || !inserted) {
    await refundCommission();
    return json({ error: 'insert_failed' }, 500);
  }

  // Ask Grok Imagine for the clip and finish the row in the background so
  // the client gets its pending piece immediately and polls the table.
  const finish = (async () => {
    try {
      // The signed URL keeps the xAI request small; fresh uploads fall back
      // to the data URI in the unlikely case signing failed.
      const imageRef = imageUrl ? imageUrl : `data:image/jpeg;base64,${imageBase64}`;
      const generation = await fetch(`${XAI_BASE}/videos/generations`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${xaiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: videoModel,
          prompt: MOTION_PROMPT,
          image: { url: imageRef },
          duration: VIDEO_DURATION_SECONDS,
          resolution: videoResolution,
        }),
      });
      if (!generation.ok) throw new Error(`xai_${generation.status}`);
      const created = (await generation.json()) as VideoCreatePayload;
      if (!created.request_id) throw new Error('xai_no_request_id');

      const deadline = Date.now() + POLL_DEADLINE_MS;
      let payload: VideoPollPayload = {};
      while (Date.now() < deadline) {
        await new Promise((resolve) => setTimeout(resolve, POLL_INTERVAL_MS));
        const poll = await fetch(`${XAI_BASE}/videos/${created.request_id}`, {
          headers: { Authorization: `Bearer ${xaiKey}` },
        });
        payload = (await poll.json()) as VideoPollPayload;
        if (payload.code === 'imagine:content-moderated') {
          // Billed by xAI but never delivered; the commission goes back.
          await admin
            .from('studio_pieces')
            .update({ status: 'rejected', rejection_reason: MODERATION_MESSAGE })
            .eq('id', inserted.id);
          await refundCommission();
          return;
        }
        if (payload.status === 'done' || payload.status === 'failed' || payload.status === 'expired') break;
      }
      const videoUrl = payload.status === 'done' ? payload.video?.url : undefined;
      if (!videoUrl) throw new Error(payload.error ?? `xai_${payload.status ?? 'timeout'}`);
      const persisted = await persistStudioVideo(admin, userId, inserted.id, videoUrl);
      await admin
        .from('studio_pieces')
        .update({
          status: 'complete',
          video_url: persisted.url,
          video_path: persisted.path,
          completed_at: new Date().toISOString(),
        })
        .eq('id', inserted.id);
    } catch (error) {
      await admin
        .from('studio_pieces')
        .update({
          status: 'failed',
          error: error instanceof Error ? error.message : 'unknown',
        })
        .eq('id', inserted.id);
      await refundCommission();
    }
  })();
  // Deno Deploy keeps the isolate alive for waitUntil'd work.
  // deno-lint-ignore no-explicit-any
  (globalThis as any).EdgeRuntime?.waitUntil?.(finish);

  return json({ piece: inserted }, 200);
});

export { REJECTION_MESSAGE };
