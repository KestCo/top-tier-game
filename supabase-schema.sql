create table if not exists public.top_tier_drafts (
  draft_id text primary key,
  source_game_id text not null,
  week integer not null,
  day integer not null,
  label text not null,
  status text not null default 'draft',
  editor_name text,
  news_organization text,
  draft jsonb not null,
  updated_at timestamptz not null default now(),
  submitted_at timestamptz
);

alter table public.top_tier_drafts enable row level security;

-- Early workflow policies for a private editor portal.
-- Before broad public sharing, replace these with authenticated editor roles.
drop policy if exists "top_tier_drafts_select" on public.top_tier_drafts;
drop policy if exists "top_tier_drafts_insert" on public.top_tier_drafts;
drop policy if exists "top_tier_drafts_update" on public.top_tier_drafts;

create policy "top_tier_drafts_select"
  on public.top_tier_drafts
  for select
  using (true);

create policy "top_tier_drafts_insert"
  on public.top_tier_drafts
  for insert
  with check (true);

create policy "top_tier_drafts_update"
  on public.top_tier_drafts
  for update
  using (true)
  with check (true);

grant select, insert, update on public.top_tier_drafts to anon, authenticated;
