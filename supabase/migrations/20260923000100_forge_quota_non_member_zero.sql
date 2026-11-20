-- Align forge daily limit with the client: members get 3, non-members get 0.
-- Client source of product intent: forgeDailyLimit / MEMBER_DAILY_FORGES in
-- src/utils/access.ts (FREE_DAILY_FORGES was removed; visitors do not forge).
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
    else 0
  end;
$$;
