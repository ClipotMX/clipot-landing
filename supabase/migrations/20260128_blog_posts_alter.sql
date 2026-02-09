alter table public.blog_posts
  add column if not exists excerpt text,
  add column if not exists tags text[],
  add column if not exists updated_at timestamptz default now();
