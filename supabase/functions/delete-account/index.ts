import { createClient } from 'npm:@supabase/supabase-js@2';

import { corsHeaders, json, requireEnv } from '../_shared/http.ts';

const BUCKETS = ['studio', 'forges'] as const;

async function removeUserPrefix(
  admin: ReturnType<typeof createClient>,
  bucket: (typeof BUCKETS)[number],
  userId: string,
): Promise<void> {
  const { data: objects, error } = await admin.storage.from(bucket).list(userId, { limit: 1000 });
  if (error) {
    console.error(`[delete-account] list ${bucket} failed:`, error.message);
    return;
  }
  if (!objects?.length) return;
  const paths = objects.map((object) => `${userId}/${object.name}`);
  const { error: removeError } = await admin.storage.from(bucket).remove(paths);
  if (removeError) {
    console.error(`[delete-account] remove ${bucket} failed:`, removeError.message);
  }
}

Deno.serve(async (request) => {
  if (request.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (request.method !== 'POST') return json({ error: 'method_not_allowed' }, 405);

  try {
    const authHeader = request.headers.get('Authorization');
    if (!authHeader) return json({ error: 'missing_authorization' }, 401);

    const url = requireEnv('SUPABASE_URL');
    const anonKey = requireEnv('SUPABASE_ANON_KEY');
    const serviceKey = requireEnv('SUPABASE_SERVICE_ROLE_KEY');

    const userClient = createClient(url, anonKey, {
      global: { headers: { Authorization: authHeader } },
    });
    const { data: userData, error: userError } = await userClient.auth.getUser();
    if (userError || !userData.user) return json({ error: 'unauthorized' }, 401);
    const userId = userData.user.id;

    const admin = createClient(url, serviceKey);
    for (const bucket of BUCKETS) {
      await removeUserPrefix(admin, bucket, userId);
    }

    const { error: deleteError } = await admin.auth.admin.deleteUser(userId);
    if (deleteError) {
      console.error('[delete-account] deleteUser failed:', deleteError.message);
      return json({ error: 'delete_failed' }, 500);
    }

    return json({ ok: true });
  } catch (error) {
    console.error('[delete-account] crashed:', error);
    return json({ error: 'server_error' }, 500);
  }
});
