-- Night Wing: each daily scene may carry "tonight's telling" — a 500–800
-- word slower narration of the same moment, the membership anchor feature.
--
-- v1 gating is client-side: these columns ride the published-scenes RLS
-- policy, so night content is technically readable by free users who go
-- looking. Hardening path (before any paid-marketing push): move night
-- audio to a private bucket served by a signed-URL edge function that
-- checks entitlements, or split night columns into a member-gated table.

alter table public.scenes add column night_story text;
alter table public.scenes add column night_audio_url text;
alter table public.scenes add column night_audio_duration_seconds int;
