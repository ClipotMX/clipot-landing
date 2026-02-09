import AdminLayout from "@/components/admin/AdminLayout";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Item = { id: string; name: string };

const AdminTaxonomies = () => {
  const token = localStorage.getItem("userToken") || localStorage.getItem("adminToken") || "";
  const [categories, setCategories] = useState<Item[]>([]);
  const [tags, setTags] = useState<Item[]>([]);
  const [catName, setCatName] = useState("");
  const [tagName, setTagName] = useState("");

  async function load() {
    const c = await fetch("http://localhost:3001/api/cms/categories", { headers: { Authorization: `Bearer ${token}` } }).then(r => r.json());
    const t = await fetch("http://localhost:3001/api/cms/tags", { headers: { Authorization: `Bearer ${token}` } }).then(r => r.json());
    setCategories(c.items || []);
    setTags(t.items || []);
  }

  async function addCategory() {
    if (!catName.trim()) return;
    const res = await fetch("http://localhost:3001/api/cms/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ name: catName }),
    }).then(r => r.json());
    if (res?.ok) {
      setCategories([res.item, ...categories]);
      setCatName("");
    }
  }

  async function addTag() {
    if (!tagName.trim()) return;
    const res = await fetch("http://localhost:3001/api/cms/tags", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ name: tagName }),
    }).then(r => r.json());
    if (res?.ok) {
      setTags([res.item, ...tags]);
      setTagName("");
    }
  }

  async function removeCategory(id: string) {
    const res = await fetch(`http://localhost:3001/api/cms/categories/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    }).then(r => r.json());
    if (res?.ok) setCategories(categories.filter((x) => x.id !== id));
  }

  async function removeTag(id: string) {
    const res = await fetch(`http://localhost:3001/api/cms/tags/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    }).then(r => r.json());
    if (res?.ok) setTags(tags.filter((x) => x.id !== id));
  }

  useEffect(() => { load(); }, []);

  return (
    <AdminLayout>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-background rounded-2xl shadow-sm ring-1 ring-border p-4">
          <h2 className="font-semibold mb-3">Categorías</h2>
          <div className="flex gap-2 mb-3">
            <Input value={catName} onChange={(e) => setCatName(e.target.value)} placeholder="Nueva categoría" />
            <Button variant="outline" onClick={addCategory}>Agregar</Button>
          </div>
          <div className="space-y-2">
            {categories.map((c) => (
              <div key={c.id} className="p-2 rounded-lg border border-border flex items-center justify-between">
                <span>{c.name}</span>
                <Button variant="destructive" size="sm" onClick={() => removeCategory(c.id)}>Eliminar</Button>
              </div>
            ))}
            {categories.length === 0 && <p className="text-sm text-muted-foreground">Sin categorías.</p>}
          </div>
        </div>
        <div className="bg-background rounded-2xl shadow-sm ring-1 ring-border p-4">
          <h2 className="font-semibold mb-3">Tags</h2>
          <div className="flex gap-2 mb-3">
            <Input value={tagName} onChange={(e) => setTagName(e.target.value)} placeholder="Nuevo tag" />
            <Button variant="outline" onClick={addTag}>Agregar</Button>
          </div>
          <div className="space-y-2">
            {tags.map((t) => (
              <div key={t.id} className="p-2 rounded-lg border border-border flex items-center justify-between">
                <span>{t.name}</span>
                <Button variant="destructive" size="sm" onClick={() => removeTag(t.id)}>Eliminar</Button>
              </div>
            ))}
            {tags.length === 0 && <p className="text-sm text-muted-foreground">Sin tags.</p>}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminTaxonomies;
