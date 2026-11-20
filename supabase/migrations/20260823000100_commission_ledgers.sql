-- The studio's pay-per-piece currency. One commission wakes one uploaded
-- painting; membership drops one in each month (stamped by
-- last_grant_month) and purchases land via the RevenueCat webhook
-- (consumable grant, to wire). Rows are written only by service-role
-- functions; clients read their own.

create table public.commission_ledgers (
  user_id uuid primary key references auth.users (id) on delete cascade,
  available integer not null default 0 check (available >= 0),
  last_grant_month text,
  updated_at timestamptz not null default now()
);

alter table public.commission_ledgers enable row level security;

create policy "commission_ledgers_select_own"
  on public.commission_ledgers for select
  using (auth.uid() = user_id);
