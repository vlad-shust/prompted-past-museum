// Daily notification fan-out (verify_jwt = false; guarded by CRON_SECRET).
// Schedule via Supabase Dashboard → Integrations → Cron (or pg_cron + pg_net):
// call this function daily shortly after the new scene's scheduled_for date
// begins. The app also schedules a local daily notification, so this server
// push matters once notification content should name the actual scene.
//
// Secrets: CRON_SECRET (+ standard SUPABASE_* injected)

import { createClient } from 'npm:@supabase/supabase-js@2';
import { json, requireEnv } from '../_shared/http.ts';

const EXPO_PUSH_URL = 'https://exp.host/--/api/v2/push/send';
const CHUNK_SIZE = 100;

Deno.serve(async (req) => {
  if (req.method !== 'POST') return json({ error: 'method_not_allowed' }, 405);
  const auth = req.headers.get('Authorization') ?? '';
  if (auth !== `Bearer ${requireEnv('CRON_SECRET')}`) return json({ error: 'unauthorized' }, 401);

  const admin = createClient(requireEnv('SUPABASE_URL'), requireEnv('SUPABASE_SERVICE_ROLE_KEY'));

  const { data: scene } = await admin
    .from('scenes')
    .select('id, title')
    .eq('status', 'published')
    .lte('scheduled_for', new Date().toISOString().slice(0, 10))
    .order('scheduled_for', { ascending: false })
    .limit(1)
    .maybeSingle();
  if (!scene) return json({ ok: true, sent: 0, note: 'no_published_scene' });

  const { data: profiles, error } = await admin
    .from('profiles')
    .select('expo_push_token')
    .not('expo_push_token', 'is', null);
  if (error) return json({ error: error.message }, 500);

  const tokens = (profiles ?? [])
    .map((profile) => profile.expo_push_token as string)
    .filter((token) => token.startsWith('ExponentPushToken'));

  let sent = 0;
  const deadTokens: string[] = [];
  for (let i = 0; i < tokens.length; i += CHUNK_SIZE) {
    const chunkTokens = tokens.slice(i, i + CHUNK_SIZE);
    const chunk = chunkTokens.map((to) => ({
      to,
      title: 'Today’s scene is hung in the gallery.',
      body: scene.title,
      data: { sceneId: scene.id },
    }));
    const response = await fetch(EXPO_PUSH_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(chunk),
    });
    if (!response.ok) continue;

    // Expo returns 200 with a per-ticket status array; a transport 200 does
    // not mean every push landed. Count real successes and collect tokens the
    // device store has invalidated so they don't get retried every day.
    const tickets = (await response.json().catch(() => null)) as
      | { data?: Array<{ status?: string; details?: { error?: string } }> }
      | null;
    const data = tickets?.data ?? [];
    data.forEach((ticket, index) => {
      if (ticket.status === 'ok') {
        sent += 1;
      } else if (ticket.details?.error === 'DeviceNotRegistered') {
        deadTokens.push(chunkTokens[index]);
      }
    });
  }

  if (deadTokens.length > 0) {
    await admin.from('profiles').update({ expo_push_token: null }).in('expo_push_token', deadTokens);
  }

  return json({ ok: true, sent, of: tokens.length, pruned: deadTokens.length });
});
