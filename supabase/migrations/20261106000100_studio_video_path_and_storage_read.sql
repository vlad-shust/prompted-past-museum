-- Persist studio clips in the private studio bucket and let the owner
-- mint a fresh signed URL so playback does not depend on an expiring
-- third-party link.

alter table public.studio_pieces
  add column if not exists video_path text;

drop policy if exists "studio_objects_select_own" on storage.objects;
create policy "studio_objects_select_own"
on storage.objects
for select
to authenticated
using (
  bucket_id = 'studio'
  and split_part(name, '/', 1) = auth.uid()::text
);
