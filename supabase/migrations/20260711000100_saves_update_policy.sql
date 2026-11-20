-- Saves are toggled with upsert() (INSERT ... ON CONFLICT DO UPDATE), but the
-- original policy set only granted insert/select/delete. Any conflict path hit
-- the missing UPDATE policy and failed with 42501, rolling back the optimistic
-- toggle. Grant owners update on their own saves rows.

create policy "update own saves"
  on public.saves for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);
