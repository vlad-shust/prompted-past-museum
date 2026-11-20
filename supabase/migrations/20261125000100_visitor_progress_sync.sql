-- Visitor progress sync.
--
-- The walk through the museum (which paintings were stepped into, when,
-- the era being walked) and the onboarding era picks used to live only in
-- the device's persisted stores, so a reinstall or a second phone started
-- from nothing and the recommender (src/utils/recommend.ts) lost every
-- signal. These tables mirror that state per auth user; the app merges its
-- local copy with them through sync_visitor_progress() below.
--
-- Merge model: every piece of state merges the same way whatever the order
-- and however many times it is applied, so retries, offline edits and
-- several devices all settle on the same answer:
--   * completed scenes, visit days  — grow-only sets (union)
--   * day -> scene                  — first recorded painting for a day is kept
--   * per-era progress              — greatest days_done / last_completed_on
--   * active era, era interests     — last write wins on the device's clock,
--                                     clamped to the server's now() so a
--                                     skewed clock can't pin a value forever
-- The client mirrors these rules in src/utils/progress-sync.ts; keep the two
-- in step.
--
-- Ids are text, not foreign keys: scene ids are a bundled work's slug or a
-- scenes-row uuid (see src/utils/lessons.ts), and era ids come from the
-- app's bundled taxonomy, which can ship ahead of public.eras. A FK would
-- make one unknown id fail the whole sync.

-- ---- registers on the profile ---------------------------------------------

-- profiles.era_interests already exists (initial schema) but was never
-- written; it now holds the onboarding picks.
alter table public.profiles
  add column if not exists era_interests_set_at timestamptz,
  add column if not exists active_era_id text
    check (active_era_id is null or char_length(active_era_id) between 1 and 100),
  add column if not exists active_era_set_at timestamptz;

-- ---- per-era walk summary -------------------------------------------------

create table public.era_progress (
  user_id uuid not null references auth.users (id) on delete cascade,
  era_id text not null check (char_length(era_id) between 1 and 100),
  -- Legacy lesson counter, kept so old installs round-trip; not read for
  -- progress (completions are the source of truth).
  days_done integer not null default 0 check (days_done >= 0),
  -- Device-local calendar day the last lesson in this era was finished.
  last_completed_on date,
  updated_at timestamptz not null default now(),
  primary key (user_id, era_id)
);

-- ---- every painting stepped into -------------------------------------------

create table public.scene_completions (
  user_id uuid not null references auth.users (id) on delete cascade,
  scene_id text not null check (char_length(scene_id) between 1 and 200),
  -- Insertion order. The app reads completions oldest-first (the most
  -- recently hung work in an era is the last one), so this keeps order
  -- stable across devices.
  seq bigint generated always as identity,
  created_at timestamptz not null default now(),
  primary key (user_id, scene_id)
);

create index scene_completions_user_seq_idx on public.scene_completions (user_id, seq);

-- ---- the painting stepped into on each day ---------------------------------

create table public.day_scenes (
  user_id uuid not null references auth.users (id) on delete cascade,
  day date not null,
  scene_id text not null check (char_length(scene_id) between 1 and 200),
  created_at timestamptz not null default now(),
  primary key (user_id, day)
);

-- ---- days the museum was opened --------------------------------------------

create table public.visit_days (
  user_id uuid not null references auth.users (id) on delete cascade,
  day date not null,
  primary key (user_id, day)
);

-- ---- RLS: owners read; writes only through sync_visitor_progress ----------

alter table public.era_progress enable row level security;
alter table public.scene_completions enable row level security;
alter table public.day_scenes enable row level security;
alter table public.visit_days enable row level security;

create policy "read own era progress"
  on public.era_progress for select
  to authenticated
  using ((select auth.uid()) = user_id);

create policy "read own scene completions"
  on public.scene_completions for select
  to authenticated
  using ((select auth.uid()) = user_id);

create policy "read own day scenes"
  on public.day_scenes for select
  to authenticated
  using ((select auth.uid()) = user_id);

create policy "read own visit days"
  on public.visit_days for select
  to authenticated
  using ((select auth.uid()) = user_id);

-- ---- the sync RPC ---------------------------------------------------------

-- 'YYYY-MM-DD' as a date, or null for anything else (including impossible
-- days like 2024-02-30): one malformed entry must not fail a whole sync.
create or replace function public.iso_day_or_null(p_value text)
returns date
language plpgsql
immutable
set search_path = ''
as $$
declare
  v_day date;
begin
  if p_value is null or p_value !~ '^\d{4}-\d{2}-\d{2}$' then
    return null;
  end if;
  v_day := p_value::date;
  return case when to_char(v_day, 'YYYY-MM-DD') = p_value then v_day end;
exception
  when others then
    return null;
end;
$$;

revoke all on function public.iso_day_or_null(text) from public, anon, authenticated;

-- Merges the caller's device state into their stored progress and returns
-- the merged whole, in one round trip. Always keyed on auth.uid(); there is
-- no user argument to spoof (see 20260713000100 for why that matters on a
-- SECURITY DEFINER function).
--
-- The device sends its full state every time. Payloads are small (hundreds
-- of ids at most) and the merge is idempotent, so that needs no outbox.
--
-- Returns:
--   { activeEraId, activeEraSetAtMs, eraInterests, eraInterestsSetAtMs,
--     eraProgress: { [eraId]: { daysDone, lastCompletedOn } },
--     completedSceneIds: [...] (oldest first),
--     dayScenes: { [YYYY-MM-DD]: sceneId },
--     visitDays: [...] (ascending, most recent 366 — the app's own cap) }
create or replace function public.sync_visitor_progress(
  p_active_era_id text default null,
  p_active_era_set_at_ms bigint default null,
  p_era_interests text[] default null,
  p_era_interests_set_at_ms bigint default null,
  p_era_progress jsonb default '{}'::jsonb,
  p_completed_scene_ids text[] default '{}',
  p_day_scenes jsonb default '{}'::jsonb,
  p_visit_days text[] default '{}'
)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_user uuid := auth.uid();
  v_now timestamptz := now();
  v_active_at timestamptz;
  v_interests_at timestamptz;
  v_result jsonb;
begin
  if v_user is null then
    raise exception 'not_authenticated' using errcode = '42501';
  end if;

  -- Bounds: a real visitor sits far below these (the whole catalogue is a
  -- few hundred works; the app keeps 366 visit days).
  if coalesce(cardinality(p_completed_scene_ids), 0) > 5000
     or coalesce(cardinality(p_visit_days), 0) > 2000
     or coalesce(cardinality(p_era_interests), 0) > 20 then
    raise exception 'payload_too_large' using errcode = '22023';
  end if;
  if jsonb_typeof(coalesce(p_era_progress, '{}'::jsonb)) <> 'object'
     or jsonb_typeof(coalesce(p_day_scenes, '{}'::jsonb)) <> 'object' then
    raise exception 'invalid_payload' using errcode = '22023';
  end if;
  if (select count(*) from jsonb_object_keys(coalesce(p_era_progress, '{}'::jsonb))) > 500
     or (select count(*) from jsonb_object_keys(coalesce(p_day_scenes, '{}'::jsonb))) > 5000 then
    raise exception 'payload_too_large' using errcode = '22023';
  end if;

  -- One sync per visitor at a time, so the returned snapshot is consistent.
  perform pg_advisory_xact_lock(hashtext('visitor-progress:' || v_user::text));

  -- Accounts created before the profile trigger may have no row yet.
  insert into public.profiles (id) values (v_user) on conflict (id) do nothing;

  -- Last-write-wins registers. Ties keep the stored value. Set-at times are
  -- epoch ms from the device; the upper bound (year 3000) only keeps
  -- to_timestamp() in range, the clamp to now() does the real work.
  if p_active_era_id is not null
     and char_length(p_active_era_id) between 1 and 100
     and p_active_era_set_at_ms between 0 and 32503680000000 then
    v_active_at := least(to_timestamp(p_active_era_set_at_ms / 1000.0), v_now);
    update public.profiles
       set active_era_id = p_active_era_id,
           active_era_set_at = v_active_at
     where id = v_user
       and (active_era_set_at is null or active_era_set_at < v_active_at);
  end if;

  -- An empty pick means "skipped", not "clear what I picked elsewhere"; the
  -- client sends null for it, and an empty array is ignored the same way.
  if coalesce(cardinality(p_era_interests), 0) > 0
     and p_era_interests_set_at_ms between 0 and 32503680000000 then
    v_interests_at := least(to_timestamp(p_era_interests_set_at_ms / 1000.0), v_now);
    update public.profiles
       set era_interests = (
             select coalesce(array_agg(i.id order by i.ord), '{}')
               from (
                 select distinct on (e.id) e.id, e.ord
                   from unnest(p_era_interests) with ordinality as e(id, ord)
                  where e.id is not null and char_length(e.id) between 1 and 100
                  order by e.id, e.ord
               ) i
           ),
           era_interests_set_at = v_interests_at
     where id = v_user
       and (era_interests_set_at is null or era_interests_set_at < v_interests_at);
  end if;

  insert into public.era_progress as ep (user_id, era_id, days_done, last_completed_on)
  select v_user,
         e.key,
         case
           when jsonb_typeof(e.value -> 'daysDone') = 'number'
             then least(greatest(floor((e.value ->> 'daysDone')::numeric), 0), 100000)::integer
           else 0
         end,
         public.iso_day_or_null(e.value ->> 'lastCompletedOn')
    from jsonb_each(coalesce(p_era_progress, '{}'::jsonb)) as e
   where char_length(e.key) between 1 and 100
     and jsonb_typeof(e.value) = 'object'
  on conflict (user_id, era_id) do update
    set days_done = greatest(ep.days_done, excluded.days_done),
        last_completed_on = greatest(ep.last_completed_on, excluded.last_completed_on),
        updated_at = v_now
    where excluded.days_done > ep.days_done
       or excluded.last_completed_on > ep.last_completed_on
       or (ep.last_completed_on is null and excluded.last_completed_on is not null);

  -- Ordered so a first upload keeps the device's own completion order.
  insert into public.scene_completions (user_id, scene_id)
  select v_user, s.id
    from unnest(p_completed_scene_ids) with ordinality as s(id, ord)
   where s.id is not null and char_length(s.id) between 1 and 200
   order by s.ord
  on conflict (user_id, scene_id) do nothing;

  insert into public.day_scenes (user_id, day, scene_id)
  select v_user, public.iso_day_or_null(d.key), d.value
    from jsonb_each_text(coalesce(p_day_scenes, '{}'::jsonb)) as d
   where public.iso_day_or_null(d.key) is not null
     and d.value is not null
     and char_length(d.value) between 1 and 200
  on conflict (user_id, day) do nothing;

  insert into public.visit_days (user_id, day)
  select distinct v_user, public.iso_day_or_null(v.day)
    from unnest(p_visit_days) as v(day)
   where public.iso_day_or_null(v.day) is not null
  on conflict (user_id, day) do nothing;

  select jsonb_build_object(
           'activeEraId', p.active_era_id,
           'activeEraSetAtMs',
             case when p.active_era_set_at is not null
               then round(extract(epoch from p.active_era_set_at) * 1000)::bigint end,
           'eraInterests', to_jsonb(p.era_interests),
           'eraInterestsSetAtMs',
             case when p.era_interests_set_at is not null
               then round(extract(epoch from p.era_interests_set_at) * 1000)::bigint end,
           'eraProgress', coalesce((
             select jsonb_object_agg(
                      ep.era_id,
                      jsonb_build_object(
                        'daysDone', ep.days_done,
                        'lastCompletedOn', to_char(ep.last_completed_on, 'YYYY-MM-DD')))
               from public.era_progress ep
              where ep.user_id = v_user), '{}'::jsonb),
           'completedSceneIds', coalesce((
             select jsonb_agg(sc.scene_id order by sc.seq)
               from public.scene_completions sc
              where sc.user_id = v_user), '[]'::jsonb),
           'dayScenes', coalesce((
             select jsonb_object_agg(to_char(ds.day, 'YYYY-MM-DD'), ds.scene_id)
               from public.day_scenes ds
              where ds.user_id = v_user), '{}'::jsonb),
           'visitDays', coalesce((
             select jsonb_agg(to_char(recent.day, 'YYYY-MM-DD') order by recent.day)
               from (
                 select vd.day
                   from public.visit_days vd
                  where vd.user_id = v_user
                  order by vd.day desc
                  limit 366
               ) recent), '[]'::jsonb)
         )
    into v_result
    from public.profiles p
   where p.id = v_user;

  return v_result;
end;
$$;

revoke all on function public.sync_visitor_progress(text, bigint, text[], bigint, jsonb, text[], jsonb, text[])
  from public, anon;
grant execute on function public.sync_visitor_progress(text, bigint, text[], bigint, jsonb, text[], jsonb, text[])
  to authenticated;
