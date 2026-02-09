create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid,
  title text not null,
  slug text not null unique,
  content text,
  status text not null default 'draft',
  publish_at timestamptz,
  image text,
  category text,
  read_time text,
  ts timestamptz not null default now()
);

create index if not exists blog_posts_ts_idx on public.blog_posts(ts desc);
create index if not exists blog_posts_status_idx on public.blog_posts(status);

alter table public.blog_posts enable row level security;

create policy blog_select_owner_or_admin_or_operator
  on public.blog_posts for select
  using (
    auth.uid() = owner_id
    or coalesce((auth.jwt() -> 'app_metadata' ->> 'role'), '') in ('admin','operator')
  );

create policy blog_insert_owner_or_admin
  on public.blog_posts for insert
  with check (
    owner_id = auth.uid()
    or coalesce((auth.jwt() -> 'app_metadata' ->> 'role'), '') = 'admin'
  );

create policy blog_update_owner_or_admin
  on public.blog_posts for update
  using (
    auth.uid() = owner_id
    or coalesce((auth.jwt() -> 'app_metadata' ->> 'role'), '') = 'admin'
  )
  with check (
    auth.uid() = owner_id
    or coalesce((auth.jwt() -> 'app_metadata' ->> 'role'), '') = 'admin'
  );

create policy blog_delete_owner_or_admin
  on public.blog_posts for delete
  using (
    auth.uid() = owner_id
    or coalesce((auth.jwt() -> 'app_metadata' ->> 'role'), '') = 'admin'
  );

create policy blog_select_public_published
  on public.blog_posts for select
  using (
    status = 'published'
    and (publish_at is null or publish_at <= now())
  );
