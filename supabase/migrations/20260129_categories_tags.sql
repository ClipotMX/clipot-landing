create table if not exists public.blog_categories (
  id uuid primary key default gen_random_uuid(),
  name text not null unique
);

create table if not exists public.blog_tags (
  id uuid primary key default gen_random_uuid(),
  name text not null unique
);

alter table public.blog_categories enable row level security;
alter table public.blog_tags enable row level security;

create policy categories_select_all on public.blog_categories for select using (true);
create policy categories_insert_admin on public.blog_categories for insert with check (coalesce((auth.jwt() -> 'app_metadata' ->> 'role'), '') = 'admin');
create policy categories_delete_admin on public.blog_categories for delete using (coalesce((auth.jwt() -> 'app_metadata' ->> 'role'), '') = 'admin');

create policy tags_select_all on public.blog_tags for select using (true);
create policy tags_insert_admin on public.blog_tags for insert with check (coalesce((auth.jwt() -> 'app_metadata' ->> 'role'), '') = 'admin');
create policy tags_delete_admin on public.blog_tags for delete using (coalesce((auth.jwt() -> 'app_metadata' ->> 'role'), '') = 'admin');
