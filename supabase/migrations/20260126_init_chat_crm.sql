create table if not exists public.chat_messages (
  id uuid primary key default gen_random_uuid(),
  session_id text not null,
  text text not null,
  is_user boolean not null default true,
  ts timestamptz not null default now()
);

create index if not exists chat_messages_session_id_idx on public.chat_messages(session_id);
create index if not exists chat_messages_ts_idx on public.chat_messages(ts desc);

create table if not exists public.crm_clients (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid,
  name text not null,
  contact text,
  company text,
  notes text,
  ts timestamptz not null default now()
);

create index if not exists crm_clients_owner_idx on public.crm_clients(owner_id);
create index if not exists crm_clients_ts_idx on public.crm_clients(ts desc);
