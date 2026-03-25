import AdminLayout from "@/components/admin/AdminLayout";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { createClient } from "@supabase/supabase-js";
import MediaModal from "@/components/admin/MediaModal";

const categories = ["Gestión de Leads","Paid Media","Estrategia","Automatización","Content","Herramientas"];

const AdminPostEditor = () => {
  const token = localStorage.getItem("userToken") || "";
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [status, setStatus] = useState("draft");
  const [publishAt, setPublishAt] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);

  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseAnon = import.meta.env.VITE_SUPABASE_ANON_KEY;
  const supabase = (supabaseUrl && supabaseAnon) ? createClient(supabaseUrl, supabaseAnon) : null;

  async function load() {
    if (!id) return;
    const res = await fetch(`http://localhost:3001/api/cms/posts/${id}`, { headers: { Authorization: `Bearer ${token}` } }).then(r => r.json());
    if (res?.ok && res.item) {
      setTitle(res.item.title || "");
      setSlug(res.item.slug || "");
      setContent(res.item.content || "");
      setExcerpt(res.item.excerpt || "");
      setStatus(res.item.status || "draft");
      setPublishAt(res.item.publishAt || "");
      setCategory(res.item.category || "");
      setTags(Array.isArray(res.item.tags) ? res.item.tags : []);
      setImage(res.item.image || "");
      setImagePreview(res.item.image || "");
    }
  }

  useEffect(() => { load(); }, [id]);

  async function saveDraft() {
    setLoading(true);
    const body = { title, slug, content, excerpt, status: "draft", publishAt, category, tags, image };
    if (id) {
      await fetch(`http://localhost:3001/api/cms/posts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(body),
      });
    } else {
      const res = await fetch("http://localhost:3001/api/cms/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(body),
      }).then(r => r.json());
      if (res?.ok) navigate(`/admin/cms/post/${res.item.id}`);
    }
    setLoading(false);
  }

  async function publish() {
    setLoading(true);
    const body = { title, slug, content, excerpt, status: "published", publishAt, category, tags, image };
    if (id) {
      await fetch(`http://localhost:3001/api/cms/posts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(body),
      });
    } else {
      const res = await fetch("http://localhost:3001/api/cms/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(body),
      }).then(r => r.json());
      if (res?.ok) navigate(`/admin/cms/post/${res.item.id}`);
    }
    setLoading(false);
  }

  async function uploadImageFile(f: File) {
    if (!supabase) return;
    setProgress(10);
    const path = `posts/${Date.now()}_${f.name}`;
    const up = await supabase.storage.from("media").upload(path, f, { upsert: true });
    if (!up.error) {
      const pu = supabase.storage.from("media").getPublicUrl(path);
      setImage(pu.data.publicUrl);
      setImagePreview(pu.data.publicUrl);
      setProgress(100);
    } else {
      setProgress(0);
    }
  }

  function addTag() {
    const t = tagInput.trim();
    if (!t) return;
    if (!tags.includes(t)) setTags([...tags, t]);
    setTagInput("");
  }

  function removeTag(t: string) {
    setTags(tags.filter(x => x !== t));
  }

  return (
    <AdminLayout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-background rounded-2xl shadow-sm ring-1 ring-border p-4">
          <div className="space-y-3">
            <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título" />
            <Input value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="Slug" />
            <ReactQuill theme="snow" value={content} onChange={setContent} />
            <div className="space-y-1">
              <span className="text-xs text-muted-foreground">Extracto</span>
              <Input value={excerpt} onChange={(e) => setExcerpt(e.target.value)} placeholder="Resumen corto" />
            </div>
          </div>
        </div>
        <div className="bg-background rounded-2xl shadow-sm ring-1 ring-border p-4">
          <div className="space-y-3">
            <div className="space-y-1">
              <span className="text-xs text-muted-foreground">Estado</span>
              <select className="border rounded-md px-2 py-2 text-sm w-full" value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="draft">Borrador</option>
                <option value="published">Publicado</option>
              </select>
            </div>
            <div className="space-y-1">
              <span className="text-xs text-muted-foreground">Programación</span>
              <Input type="datetime-local" value={publishAt} onChange={(e) => setPublishAt(e.target.value)} />
            </div>
            <div className="space-y-1">
              <span className="text-xs text-muted-foreground">Categoría</span>
              <select className="border rounded-md px-2 py-2 text-sm w-full" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecciona</option>
                {categories.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div className="space-y-2">
              <span className="text-xs text-muted-foreground">Tags</span>
              <div className="flex gap-2">
                <Input value={tagInput} onChange={(e) => setTagInput(e.target.value)} placeholder="Nuevo tag" />
                <Button variant="outline" onClick={addTag}>Agregar</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map(t => (
                  <span key={t} className="px-2 py-1 text-xs rounded-full ring-1 ring-border">
                    {t}
                    <button className="ml-2 text-muted-foreground" onClick={() => removeTag(t)}>×</button>
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <span className="text-xs text-muted-foreground">Imagen destacada</span>
              <div
                className="border-2 border-dashed rounded-xl p-4 text-center cursor-pointer"
                onDragOver={(e) => { e.preventDefault(); }}
                onDrop={(e) => {
                  e.preventDefault();
                  const f = e.dataTransfer.files?.[0];
                  if (f) {
                    setImagePreview(URL.createObjectURL(f));
                    uploadImageFile(f);
                  }
                }}
                onClick={() => {
                  const input = document.getElementById("featured-image-input") as HTMLInputElement | null;
                  input?.click();
                }}
              >
                <p className="text-sm text-muted-foreground">Arrastra o haz clic para subir imagen</p>
                {imagePreview && <img src={imagePreview} alt="preview" className="mt-3 mx-auto h-24 object-cover rounded-md" />}
                {progress > 0 && (
                  <div className="mt-3 w-full h-2 bg-muted rounded">
                    <div className="h-2 bg-primary rounded" style={{ width: `${progress}%` }} />
                  </div>
                )}
              </div>
              <Input id="featured-image-input" type="file" className="hidden" onChange={(e) => {
                const f = e.target.files?.[0] || null;
                if (f) {
                  setImagePreview(URL.createObjectURL(f));
                  uploadImageFile(f);
                }
              }} />
              <Input value={image} onChange={(e) => setImage(e.target.value)} placeholder="o pega una URL" />
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setGalleryOpen(true)}>Abrir galería</Button>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={saveDraft} disabled={loading}>Guardar borrador</Button>
              <Button onClick={publish} disabled={loading}>{id ? "Actualizar" : "Publicar"}</Button>
            </div>
          </div>
        </div>
      </div>
      <MediaModal open={galleryOpen} onClose={() => setGalleryOpen(false)} onSelect={(url) => { setImage(url); setGalleryOpen(false); }} />
    </AdminLayout>
  );
};

export default AdminPostEditor;
