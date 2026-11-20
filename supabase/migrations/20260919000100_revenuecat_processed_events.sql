-- Dedupes RevenueCat webhook deliveries for consumable commission grants.
-- Membership entitlement events keep using entitlements.last_event_id.

create table public.revenuecat_processed_events (
  event_id text primary key,
  user_id uuid not null references auth.users (id) on delete cascade,
  kind text not null,
  product_id text,
  created_at timestamptz not null default now()
);

create index revenuecat_processed_events_user_id_idx
  on public.revenuecat_processed_events (user_id);

alter table public.revenuecat_processed_events enable row level security;
-- No client policies: service-role webhook only.
