-- The painting's own title, shown under the lesson title in the scene header.
alter table public.scenes add column if not exists art_title text;
