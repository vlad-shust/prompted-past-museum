-- Row-level security. Editorial writes and forge state transitions happen
-- only through the service role (editorial scripts + edge functions).

alter table public.eras enable row level security;
alter table public.scenes enable row level security;
alter table public.profiles enable row level security;
alter table public.entitlements enable row level security;
alter table public.forges enable row level security;
alter table public.saves enable row level security;

-- Eras: public taxonomy.
create policy "eras are readable by everyone"
  on public.eras for select
  to anon, authenticated
  using (true);

-- Scenes: only published, only once their day has arrived. Metadata for
-- locked scenes is intentionally readable — the archive shows teases.
create policy "published scenes are readable"
  on public.scenes for select
  to anon, authenticated
  using (status = 'published' and scheduled_for <= current_date);

-- Profiles: owners only.
create policy "read own profile"
  on public.profiles for select
  to authenticated
  using ((select auth.uid()) = id);

create policy "update own profile"
  on public.profiles for update
  to authenticated
  using ((select auth.uid()) = id)
  with check ((select auth.uid()) = id);

-- Entitlements: owner reads; only the service role writes.
create policy "read own entitlement"
  on public.entitlements for select
  to authenticated
  using ((select auth.uid()) = user_id);

-- Forges: owner reads. No client insert/update — quota enforcement lives in
-- the forge-submit edge function (service role via try_begin_forge).
create policy "read own forges"
  on public.forges for select
  to authenticated
  using ((select auth.uid()) = user_id);

-- Saves: owners manage their own.
create policy "read own saves"
  on public.saves for select
  to authenticated
  using ((select auth.uid()) = user_id);

create policy "insert own saves"
  on public.saves for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

create policy "delete own saves"
  on public.saves for delete
  to authenticated
  using ((select auth.uid()) = user_id);
