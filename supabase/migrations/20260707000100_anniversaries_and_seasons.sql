-- On-this-day anniversaries + monthly era seasons + commission credits.

alter table public.scenes add column historical_month_day text
  check (
    historical_month_day is null
    or historical_month_day ~ '^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$'
  );

alter table public.scenes add column commissioned_by text;

create index scenes_month_day_idx on public.scenes (historical_month_day)
  where historical_month_day is not null;

-- One era per calendar month. Written by the editorial CLI (service role);
-- readable by everyone, like eras.
create table public.seasons (
  year int not null,
  month int not null check (month between 1 and 12),
  era_id text not null references public.eras (id),
  title text not null,
  created_at timestamptz not null default now(),
  primary key (year, month)
);

alter table public.seasons enable row level security;

create policy "seasons are readable by everyone"
  on public.seasons for select
  to anon, authenticated
  using (true);
