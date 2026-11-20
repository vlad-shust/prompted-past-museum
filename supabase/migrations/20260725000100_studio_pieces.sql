-- The studio: visitors upload a painting and Grok Imagine wakes it.
-- Pieces are user-owned rows; the still lives in the private `studio`
-- bucket and the finished clip URL lands on the row.

create table public.studio_pieces (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  image_path text not null,
  image_url text not null,
  status text not null default 'pending'
    check (status in ('pending', 'inspecting', 'animating', 'complete', 'rejected', 'failed')),
  rejection_reason text,
  video_url text,
  error text,
  watermarked boolean not null default true,
  created_at timestamptz not null default now(),
  completed_at timestamptz
);

alter table public.studio_pieces enable row level security;

create policy "studio_pieces_select_own"
  on public.studio_pieces for select
  using (auth.uid() = user_id);

-- Inserts and updates flow only through the studio-animate edge function
-- (service role), which enforces quota atomically; clients never write.

create index studio_pieces_user_created_idx
  on public.studio_pieces (user_id, created_at desc);

-- Private bucket for uploaded stills; the edge function writes with the
-- service role and hands back signed/public URLs on the row.
insert into storage.buckets (id, name, public)
values ('studio', 'studio', false)
on conflict (id) do nothing;
