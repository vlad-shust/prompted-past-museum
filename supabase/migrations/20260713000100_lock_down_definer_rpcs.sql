-- Lock down the SECURITY DEFINER RPCs that accept a caller-supplied user id.
--
-- try_begin_forge(p_user, …) and member_daily_limit(p_user) trust their
-- p_user argument and run as the function owner, bypassing RLS. They are
-- only ever meant to be called by the forge-submit edge function with the
-- service role (which already resolves the real user from their JWT first).
-- Left executable by anon/authenticated, any holder of the public anon key
-- could drain another user's forge quota or probe their membership status.
--
-- The service_role bypasses these grants, so the edge function is unaffected.
-- member_daily_limit is still callable from inside try_begin_forge because a
-- definer function runs as its owner, not as the (revoked) caller.
-- count_forges_used_today keys off auth.uid() and only reads the caller's own
-- rows, so it stays executable by clients.

revoke execute on function public.try_begin_forge(uuid, text, text) from public, anon, authenticated;
revoke execute on function public.member_daily_limit(uuid) from public, anon, authenticated;
