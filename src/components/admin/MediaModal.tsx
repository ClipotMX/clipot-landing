import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Props = {
  open: boolean;
  onClose: () => void;
  onSelect: (url: string) => void;
};

export default function MediaModal({ open, onClose, onSelect }: Props) {
  const [items, setItems] = useState<{ name: string; url: string }[]>([]);
  const [q, setQ] = useState("");
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const url = (import.meta as any).env?.VITE_SUPABASE_URL;
  const anon = (import.meta as any).env?.VITE_SUPABASE_ANON_KEY;
  const supabase = (url && anon) ? createClient(url, anon) : null;

  async function load() {
    if (!supabase) return;
    setLoading(true);
    const limit = 20;
    const offset = page * limit;
    const res = await supabase.storage.from("media").list("", { limit, offset });
    if (!res.error) {
      const base = supabase.storage.from("media");
      const mapped = (res.data || []).map((f) => {
        const pu = base.getPublicUrl(f.name);
        return { name: f.name, url: pu.data.publicUrl };
      });
      setItems(mapped);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (!open) return;
    load();
  }, [open, page]);

  const filtered = items.filter((i) => i.name.toLowerCase().includes(q.toLowerCase()));

  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[1000] flex items-center justify-center">
      <div className="bg-background w-[92%] max-w-3xl rounded-2xl ring-1 ring-border p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold">Galería</h3>
          <Button variant="outline" size="sm" onClick={onClose}>Cerrar</Button>
        </div>
        <div className="flex gap-2 mb-3">
          <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar por nombre" />
          <Button variant="outline" size="sm" onClick={load} disabled={loading}>Actualizar</Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-h-[420px] overflow-y-auto">
          {filtered.map((i) => (
            <button key={i.name} onClick={() => onSelect(i.url)} className="p-2 rounded-xl border border-border hover:bg-muted transition">
              <img src={i.url} alt={i.name} className="w-full h-24 object-cover rounded-md" />
              <div className="text-[11px] mt-1 line-clamp-1">{i.name}</div>
            </button>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-4 text-center text-muted-foreground">Sin resultados</div>
          )}
        </div>
        <div className="flex items-center justify-between mt-3">
          <Button variant="outline" size="sm" onClick={() => setPage(Math.max(0, page - 1))} disabled={page === 0}>Anterior</Button>
          <div className="text-xs text-muted-foreground">Página {page + 1}</div>
          <Button variant="outline" size="sm" onClick={() => setPage(page + 1)}>Siguiente</Button>
        </div>
      </div>
    </div>
  );
}
