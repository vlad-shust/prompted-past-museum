-- Quota + membership helpers. "Today" is the UTC day server-side (documented
-- v1 simplification; per-user timezone quota is a later refinement).

-- App-facing: how many forges has the current user spent today?
-- Rejected commissions cost nothing; neither do infrastructure failures.
create or replace function public.count_forges_used_today()
returns integer
language sql
stable
as $$
  select count(*)::int
  from public.forges
  where user_id = (select auth.uid())
    and status not in ('rejected', 'failed')
    and created_at >= date_trunc('day', now());
$$;

-- 3 a day for members, 1 for visitors. Must match MEMBER_DAILY_FORGES /
-- FREE_DAILY_FORGES in src/utils/access.ts.
create or replace function public.member_daily_limit(p_user uuid)
returns integer
language sql
stable
security definer
set search_path = public
as $$
  select case
    when exists (
      select 1 from public.entitlements e
      where e.user_id = p_user
        and e.is_member
        and (e.expires_at is null or e.expires_at > now())
    ) then 3
    else 1
  end;
$$;

-- Atomic quota check + forge row creation, called by the forge-submit edge
-- function with the service role. The advisory lock serializes concurrent
-- submissions per user so the quota can't be raced.
create or replace function public.try_begin_forge(
  p_user uuid,
  p_era text,
  p_description text
)
returns public.forges
language plpgsql
security definer
set search_path = public
as $$
declare
  v_limit int;
  v_used int;
  v_forge public.forges;
begin
  perform pg_advisory_xact_lock(hashtext('forge:' || p_user::text));

  v_limit := public.member_daily_limit(p_user);
  select count(*) into v_used
  from public.forges
  where user_id = p_user
    and status not in ('rejected', 'failed')
    and created_at >= date_trunc('day', now());

  if v_used >= v_limit then
    raise exception 'quota_exhausted';
  end if;

  insert into public.forges (user_id, era_id, description, status)
  values (p_user, p_era, p_description, 'validating')
  returning * into v_forge;

  return v_forge;
end;
$$;
