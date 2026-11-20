-- The Night Wing feature ("tonight's telling" — a slower 500–800 word
-- bedtime narration of the day's scene) has been dropped from the product.
-- Remove its columns so the schema matches the app, which no longer reads
-- or writes them. Any <slug>-night.mp3 objects left in the scenes bucket
-- are orphans and can be deleted from storage at leisure.

alter table public.scenes drop column if exists night_story;
alter table public.scenes drop column if exists night_audio_url;
alter table public.scenes drop column if exists night_audio_duration_seconds;
