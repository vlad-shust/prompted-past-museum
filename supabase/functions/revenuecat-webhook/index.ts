// RevenueCat entitlement + commission webhook (verify_jwt = false in config.toml).
// Dashboard config: URL = .../functions/v1/revenuecat-webhook, Authorization
// header = the value of REVENUECAT_WEBHOOK_AUTH. Delivery is at-least-once,
// so events are deduped on event.id.
//
// Secrets: REVENUECAT_WEBHOOK_AUTH (+ standard SUPABASE_* injected)

import { createClient } from 'npm:@supabase/supabase-js@2';
import { json, requireEnv } from '../_shared/http.ts';

/** Consumable store product id → commissions granted. Keep in sync with
 * src/content/membership.ts COMMISSION_PACKS productId values. */
const COMMISSION_GRANTS: Record<string, number> = {
  commission: 1,
  commission_5: 5,
  commission_15: 15,
};

const MEMBER_EVENTS = new Set([
  'INITIAL_PURCHASE',
  'RENEWAL',
  'UNCANCELLATION',
  'PRODUCT_CHANGE',
]);

interface RevenueCatEvent {
  id?: string;
  type?: string;
  app_user_id?: string;
  original_app_user_id?: string;
  product_id?: string;
  period_type?: string;
  expiration_at_ms?: number;
  event_timestamp_ms?: number;
  transferred_to?: string[];
  transferred_from?: string[];
  environment?: string;
}

function isUuid(value: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value);
}

Deno.serve(async (req) => {
  if (req.method !== 'POST') return json({ error: 'method_not_allowed' }, 405);
  if (req.headers.get('Authorization') !== requireEnv('REVENUECAT_WEBHOOK_AUTH')) {
    return json({ error: 'unauthorized' }, 401);
  }

  let body: { event?: RevenueCatEvent };
  try {
    body = (await req.json()) as { event?: RevenueCatEvent };
  } catch {
    return json({ error: 'invalid_json' }, 400);
  }
  const event = body.event;
  if (!event?.type) return json({ error: 'no_event' }, 400);
  if (event.type === 'TEST') return json({ ok: true });

  // TRANSFER events carry no app_user_id — membership follows the receiver.
  const targetUserId =
    event.type === 'TRANSFER' ? event.transferred_to?.[0] : (event.app_user_id ?? event.original_app_user_id);
  if (!targetUserId || !isUuid(targetUserId)) {
    // Anonymous RevenueCat ids ($RCAnonymousID:...) can't be mapped to a
    // Supabase user; the app calls Purchases.logIn(supabaseUserId) to prevent this.
    return json({ ok: true, skipped: 'unmapped_user' });
  }

  const admin = createClient(requireEnv('SUPABASE_URL'), requireEnv('SUPABASE_SERVICE_ROLE_KEY'));
  const productId = event.product_id ?? '';
  const commissionGrant = COMMISSION_GRANTS[productId];

  // Consumable commission packs: grant ledger credits atomically with the
  // dedupe row (one transaction); never flip membership.
  if (
    commissionGrant &&
    (event.type === 'NON_RENEWING_PURCHASE' || event.type === 'INITIAL_PURCHASE')
  ) {
    if (!event.id) return json({ error: 'missing_event_id' }, 400);
    const { data: balance, error: grantError } = await admin.rpc('grant_commission_event', {
      p_event_id: event.id,
      p_user: targetUserId,
      p_product: productId,
      p_count: commissionGrant,
    });
    if (grantError) return json({ error: grantError.message }, 500);
    if (balance === null) return json({ ok: true, deduped: true });
    return json({ ok: true, granted: commissionGrant });
  }

  // A refunded consumable arrives as CANCELLATION: take the credits back
  // (floored at 0), once per event.
  if (commissionGrant && event.type === 'CANCELLATION') {
    if (!event.id) return json({ error: 'missing_event_id' }, 400);
    const { data: balance, error: revokeError } = await admin.rpc('revoke_commission_event', {
      p_event_id: event.id,
      p_user: targetUserId,
      p_product: productId,
      p_count: commissionGrant,
    });
    if (revokeError) return json({ error: revokeError.message }, 500);
    if (balance === null) return json({ ok: true, deduped: true });
    return json({ ok: true, revoked: commissionGrant });
  }
  if (commissionGrant) return json({ ok: true, ignored: event.type });

  // Dedupe on event id, and guard against out-of-order delivery. Delivery is
  // at-least-once with no ordering promise, so a retried older event (e.g. a
  // late RENEWAL arriving after EXPIRATION) must not overwrite the newer state.
  const { data: existing } = await admin
    .from('entitlements')
    .select('last_event_id, last_event_timestamp_ms')
    .eq('user_id', targetUserId)
    .maybeSingle();
  if (event.id && existing?.last_event_id === event.id) return json({ ok: true, deduped: true });
  if (
    typeof event.event_timestamp_ms === 'number' &&
    typeof existing?.last_event_timestamp_ms === 'number' &&
    event.event_timestamp_ms < existing.last_event_timestamp_ms
  ) {
    return json({ ok: true, stale: true });
  }

  const expiresAt = event.expiration_at_ms ? new Date(event.expiration_at_ms).toISOString() : null;
  const now = new Date().toISOString();

  let isMemberValue: boolean;
  if (MEMBER_EVENTS.has(event.type) || event.type === 'TRANSFER') {
    isMemberValue = true;
  } else if (event.type === 'EXPIRATION') {
    isMemberValue = false;
  } else if (event.type === 'CANCELLATION' || event.type === 'BILLING_ISSUE' || event.type === 'SUBSCRIPTION_PAUSED') {
    // Access persists until EXPIRATION arrives.
    isMemberValue = true;
  } else if (event.type === 'NON_RENEWING_PURCHASE') {
    // Non-commission consumables / lifetime products are not membership.
    return json({ ok: true, ignored: 'non_renewing_non_commission' });
  } else {
    return json({ ok: true, ignored: event.type });
  }

  const { error } = await admin.from('entitlements').upsert({
    user_id: targetUserId,
    is_member: isMemberValue,
    product_id: event.product_id ?? null,
    period_type: event.period_type ?? null,
    expires_at: expiresAt,
    revenuecat_customer_id: event.app_user_id ?? null,
    last_event_id: event.id ?? null,
    last_event_timestamp_ms: event.event_timestamp_ms ?? null,
    updated_at: now,
  });
  if (error) return json({ error: error.message }, 500);

  // A TRANSFER moves the subscription to transferred_to; the source accounts
  // lose it. Without this they keep is_member=true (and the member forge quota)
  // indefinitely, since no future event ever targets them.
  if (event.type === 'TRANSFER') {
    const revokeIds = (event.transferred_from ?? []).filter(isUuid);
    if (revokeIds.length > 0) {
      const { error: revokeError } = await admin
        .from('entitlements')
        .update({
          is_member: false,
          product_id: null,
          period_type: null,
          expires_at: null,
          last_event_id: event.id ?? null,
          last_event_timestamp_ms: event.event_timestamp_ms ?? null,
          updated_at: now,
        })
        .in('user_id', revokeIds);
      if (revokeError) return json({ error: revokeError.message }, 500);
    }
  }

  return json({ ok: true });
});
