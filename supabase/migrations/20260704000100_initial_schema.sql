-- prompted.past — core schema
-- Eras are a locked taxonomy; scenes are editorial; forges are user commissions.

create table public.eras (
  id text primary key,
  name text not null,
  short_name text not null,
  start_year int not null,
  end_year int not null,
  mood text not null default '',
  sort int not null,
  -- Era-specific historical-accuracy guidance injected into the forge brain's system prompt.
  forge_guidance text not null default ''
);

create table public.scenes (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  dek text not null default '',
  story text not null,
  era_id text not null references public.eras(id),
  historical_date_label text not null,
  historical_year int not null,
  -- The calendar day this scene is (or was) the daily scene.
  scheduled_for date unique not null,
  image_url text not null,
  thumb_url text not null,
  art_credit text,
  blurhash text,
  audio_url text,
  audio_duration_seconds int,
  on_this_day boolean not null default false,
  status text not null default 'draft' check (status in ('draft', 'scheduled', 'published')),
  created_at timestamptz not null default now()
);

create index scenes_published_idx on public.scenes (status, scheduled_for desc);

create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  onboarded_at timestamptz,
  era_interests text[] not null default '{}',
  expo_push_token text,
  notification_hour int not null default 8 check (notification_hour between 0 and 23),
  created_at timestamptz not null default now()
);

-- Mirror of RevenueCat entitlement state, maintained by the revenuecat-webhook function.
create table public.entitlements (
  user_id uuid primary key references auth.users (id) on delete cascade,
  is_member boolean not null default false,
  product_id text,
  period_type text,
  expires_at timestamptz,
  revenuecat_customer_id text,
  last_event_id text,
  updated_at timestamptz not null default now()
);

create table public.forges (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  era_id text not null references public.eras(id),
  description text not null check (char_length(description) between 1 and 300),
  title text,
  expanded_prompt text,
  status text not null default 'pending'
    check (status in ('pending', 'validating', 'generating', 'complete', 'rejected', 'failed')),
  rejection_reason text,
  image_url text,
  fal_request_id text unique,
  error text,
  created_at timestamptz not null default now(),
  completed_at timestamptz
);

create index forges_user_idx on public.forges (user_id, created_at desc);

create table public.saves (
  user_id uuid not null references auth.users (id) on delete cascade,
  scene_id uuid not null references public.scenes (id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (user_id, scene_id)
);

-- Every new (anonymous) auth user gets a profile row.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id) values (new.id) on conflict do nothing;
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Storage buckets: public read, service-role write. Forge paths contain
-- unguessable uuids; server-side signed access is a documented hardening step.
insert into storage.buckets (id, name, public)
values ('scenes', 'scenes', true), ('forges', 'forges', true)
on conflict (id) do nothing;
