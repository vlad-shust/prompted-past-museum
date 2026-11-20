-- Atomic commission ledger operations. Every write to commission_ledgers goes
-- through one of these service-role-only functions so concurrent webhook
-- grants, spends and refunds can never lose or duplicate credits, and a
-- RevenueCat event is marked processed only in the same transaction that
-- applies it.

-- Grant a consumable purchase. Returns the new balance, or null when the
-- event was already processed.
create or replace function public.grant_commission_event(
  p_event_id text, p_user uuid, p_product text, p_count integer
) returns integer
language plpgsql security definer set search_path = public as $$
declare
  v_available integer;
begin
  insert into revenuecat_processed_events (event_id, user_id, kind, product_id)
  values (p_event_id, p_user, 'commission_grant', p_product)
  on conflict (event_id) do nothing;
  if not found then return null; end if;

  insert into commission_ledgers (user_id, available, updated_at)
  values (p_user, p_count, now())
  on conflict (user_id) do update
    set available = commission_ledgers.available + excluded.available, updated_at = now()
  returning available into v_available;
  return v_available;
end;
$$;

-- Take back a refunded purchase (floored at 0). Returns the new balance, or
-- null when the event was already processed.
create or replace function public.revoke_commission_event(
  p_event_id text, p_user uuid, p_product text, p_count integer
) returns integer
language plpgsql security definer set search_path = public as $$
declare
  v_available integer;
begin
  insert into revenuecat_processed_events (event_id, user_id, kind, product_id)
  values (p_event_id, p_user, 'commission_revoke', p_product)
  on conflict (event_id) do nothing;
  if not found then return null; end if;

  update commission_ledgers
    set available = greatest(available - p_count, 0), updated_at = now()
    where user_id = p_user
  returning available into v_available;
  return coalesce(v_available, 0);
end;
$$;

-- Spend one commission, adding the member's monthly grant first when due.
-- Returns true when a commission was spent.
create or replace function public.spend_commission(
  p_user uuid, p_is_member boolean, p_month text
) returns boolean
language plpgsql security definer set search_path = public as $$
begin
  insert into commission_ledgers (user_id, available) values (p_user, 0)
  on conflict (user_id) do nothing;

  update commission_ledgers
    set available = available
          + case when p_is_member and last_grant_month is distinct from p_month then 1 else 0 end
          - 1,
        last_grant_month = case when p_is_member then p_month else last_grant_month end,
        updated_at = now()
    where user_id = p_user
      and available
          + case when p_is_member and last_grant_month is distinct from p_month then 1 else 0 end >= 1;
  return found;
end;
$$;

-- Return one spent commission. Leaves last_grant_month untouched.
create or replace function public.refund_commission(p_user uuid) returns integer
language plpgsql security definer set search_path = public as $$
declare
  v_available integer;
begin
  insert into commission_ledgers (user_id, available, updated_at)
  values (p_user, 1, now())
  on conflict (user_id) do update
    set available = commission_ledgers.available + 1, updated_at = now()
  returning available into v_available;
  return v_available;
end;
$$;

revoke all on function public.grant_commission_event(text, uuid, text, integer) from public, anon, authenticated;
revoke all on function public.revoke_commission_event(text, uuid, text, integer) from public, anon, authenticated;
revoke all on function public.spend_commission(uuid, boolean, text) from public, anon, authenticated;
revoke all on function public.refund_commission(uuid) from public, anon, authenticated;
grant execute on function public.grant_commission_event(text, uuid, text, integer) to service_role;
grant execute on function public.revoke_commission_event(text, uuid, text, integer) to service_role;
grant execute on function public.spend_commission(uuid, boolean, text) to service_role;
grant execute on function public.refund_commission(uuid) to service_role;
