-- RevenueCat delivery is at-least-once with no ordering guarantee, so a
-- retried older event (e.g. a late RENEWAL after EXPIRATION) could re-grant
-- membership with no future event to correct it. The webhook records each
-- event's timestamp here and ignores any event older than the last processed.

alter table public.entitlements
  add column last_event_timestamp_ms bigint;
