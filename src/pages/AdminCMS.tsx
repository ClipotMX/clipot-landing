import AdminLayout from "@/components/admin/AdminLayout";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { createClient } from "@supabase/supabase-js";

type Post = { id: string; title: string; content: string; status: string; publishAt?: string; ts: string };
type Media = { id: string; url: string; alt?: string; ts: string };

const AdminCMS = () => {
  const token = localStorage.getItem("userToken") || "";
  const [posts, setPosts] = useState<Post[]>([]);
  const [media, setMedia] = useState<Media[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("draft");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [readTime, setReadTime] = useState("");
  const [publishAt, setPublishAt] = useState("");
  const [url, setUrl] = useState("");
  const [alt, setAlt] = useState("");
  const [postImageFile, setPostImageFile] = useState<File | null>(null);
  const [postImagePreview, setPostImagePreview] = useState<string>("");
  const [postImageProgress, setPostImageProgress] = useState<number>(0);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");
  const [progress, setProgress] = useState<number>(0);
  const supabaseUrl = (import.meta as any).env?.VITE_SUPABASE_URL;
  const supabaseAnon = (import.meta as any).env?.VITE_SUPABASE_ANON_KEY;
  const supabase = (supabaseUrl && supabaseAnon) ? createClient(supabaseUrl, supabaseAnon) : null;

  async function load() {
    const p = await fetch("http://localhost:3001/api/cms/posts", { headers: { Authorization: `Bearer ${token}` } }).then(r => r.json());
    const m = await fetch("http://localhost:3001/api/cms/media", { headers: { Authorization: `Bearer ${token}` } }).then(r => r.json());
    setPosts(p.items || []);
    setMedia(m.items || []);
  }

  async function addPost() {
    if (!title.trim()) return;
    const rt = readTime || `${Math.max(1, Math.round(String(content).split(/\s+/).length / 200))} min`;
    const res = await fetch("http://localhost:3001/api/cms/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ title, content, status, image, category, readTime: rt, publishAt }),
    }).then(r => r.json());
    if (res?.ok) {
      setPosts([res.item, ...posts]);
      setTitle("");
      setContent("");
      setStatus("draft");
      setCategory("");
      setImage("");
      setReadTime("");
      setPublishAt("");
    }
  }

  async function addMedia() {
    if (supabase && file) {
      const path = `${Date.now()}_${file.name}`;
      setProgress(10);
      const up = await supabase.storage.from("media").upload(path, file, { upsert: true });
      if (!up.error) {
        const pu = supabase.storage.from("media").getPublicUrl(path);
        setUrl(pu.data.publicUrl);
        setProgress(100);
      }
    }
    if (!url.trim()) return;
    const res = await fetch("http://localhost:3001/api/cms/media", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ url, alt }),
    }).then(r => r.json());
    if (res?.ok) {
      setMedia([res.item, ...media]);
      setUrl("");
      setAlt("");
      setFile(null);
      setPreview("");
      setProgress(0);
    }
  }

  useEffect(() => { if (token) load(); }, []);

  return (
    <AdminLayout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-background rounded-2xl shadow-sm ring-1 ring-border p-4">
          <h2 className="font-semibold mb-3">Nuevo Post</h2>
          <div className="space-y-3">
            <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título" />
            <ReactQuill theme="snow" value={content} onChange={setContent} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <select className="border rounded-md px-2 py-2 text-sm w-full" value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="draft">Borrador</option>
                <option value="published">Publicado</option>
              </select>
              <Input type="datetime-local" value={publishAt} onChange={(e) => setPublishAt(e.target.value)} placeholder="Programación" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <select className="border rounded-md px-2 py-2 text-sm w-full" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecciona categoría</option>
                <option value="Gestión de Leads">Gestión de Leads</option>
                <option value="Paid Media">Paid Media</option>
                <option value="Estrategia">Estrategia</option>
                <option value="Automatización">Automatización</option>
                <option value="Content">Content</option>
                <option value="Herramientas">Herramientas</option>
              </select>
              <Input value={readTime} onChange={(e) => setReadTime(e.target.value)} placeholder="Tiempo de lectura (ej. 5 min)" />
            </div>
            <div className="space-y-2">
              <div
                className="border-2 border-dashed rounded-xl p-4 text-center cursor-pointer"
                onDragOver={(e) => { e.preventDefault(); }}
                onDrop={async (e) => {
                  e.preventDefault();
                  const f = e.dataTransfer.files?.[0];
                  if (f && supabase) {
                    setPostImageFile(f);
                    setPostImagePreview(URL.createObjectURL(f));
                    setPostImageProgress(10);
                    const path = `posts/${Date.now()}_${f.name}`;
                    const up = await supabase.storage.from("media").upload(path, f, { upsert: true });
                    if (!up.error) {
                      const pu = supabase.storage.from("media").getPublicUrl(path);
                      setImage(pu.data.publicUrl);
                      setPostImageProgress(100);
                    } else {
                      setPostImageProgress(0);
                    }
                  }
                }}
                onClick={() => {
                  const input = document.getElementById("post-image-input") as HTMLInputElement | null;
                  input?.click();
                }}
              >
                <p className="text-sm text-muted-foreground">Imagen destacada: arrastra o haz clic para subir</p>
                {postImagePreview && <img src={postImagePreview} alt="preview" className="mt-3 mx-auto h-24 object-cover rounded-md" />}
                {postImageProgress > 0 && (
                  <div className="mt-3 w-full h-2 bg-muted rounded">
                    <div className="h-2 bg-primary rounded" style={{ width: `${postImageProgress}%` }} />
                  </div>
                )}
              </div>
              <Input id="post-image-input" type="file" className="hidden" onChange={async (e) => {
                const f = e.target.files?.[0] || null;
                if (f && supabase) {
                  setPostImageFile(f);
                  setPostImagePreview(URL.createObjectURL(f));
                  setPostImageProgress(10);
                  const path = `posts/${Date.now()}_${f.name}`;
                  const up = await supabase.storage.from("media").upload(path, f, { upsert: true });
                  if (!up.error) {
                    const pu = supabase.storage.from("media").getPublicUrl(path);
                    setImage(pu.data.publicUrl);
                    setPostImageProgress(100);
                  } else {
                    setPostImageProgress(0);
                  }
                }
              }} />
              <Input value={image} onChange={(e) => setImage(e.target.value)} placeholder="o pega una URL" />
            </div>
            <Button onClick={addPost} className="w-full">Publicar</Button>
          </div>
        </div>
        <div className="lg:col-span-2 bg-background rounded-2xl shadow-sm ring-1 ring-border p-4">
          <h2 className="font-semibold mb-3">Posts</h2>
          <div className="space-y-2">
            <div className="flex justify-end mb-2">
              <Button variant="outline" onClick={() => window.location.href = "/admin/cms/post/new"}>Nuevo Post</Button>
            </div>
            {posts.map((p) => (
              <div key={p.id} className="p-3 rounded-xl border border-border">
                <div className="flex items-start gap-3">
                  {p.image && <img src={p.image} alt={p.title} className="w-20 h-20 object-cover rounded-md" />}
                  <div className="flex-1">
                    <div className="font-medium">{p.title}</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-2 mt-1">
                      {p.category && <span className="px-2 py-0.5 rounded-full ring-1 ring-border">{p.category}</span>}
                      <span className="px-2 py-0.5 rounded-full ring-1 ring-border">{p.readTime || "5 min"}</span>
                      <select
                        className="border rounded-md px-2 py-1 text-xs"
                        value={p.status}
                        onChange={async (e) => {
                          const newStatus = e.target.value;
                          await fetch(`http://localhost:3001/api/cms/posts/${p.id}`, {
                            method: "PUT",
                            headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
                            body: JSON.stringify({ status: newStatus }),
                          }).then(r => r.json());
                          setPosts(posts.map(x => x.id === p.id ? { ...x, status: newStatus } : x));
                        }}
                      >
                        <option value="draft">Borrador</option>
                        <option value="published">Publicado</option>
                      </select>
                    </div>
                    <div className="text-sm mt-2 line-clamp-2">{String(p.content || "").replace(/<[^>]+>/g, "")}</div>
                    <div className="mt-2">
                      <Button variant="outline" size="sm" onClick={() => window.location.href = `/admin/cms/post/${p.id}`}>Editar</Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {posts.length === 0 && <p className="text-sm text-muted-foreground">Sin posts aún.</p>}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <div className="bg-background rounded-2xl shadow-sm ring-1 ring-border p-4">
          <h2 className="font-semibold mb-3">Nueva Media</h2>
          <div className="space-y-2">
            <div
              className="border-2 border-dashed rounded-xl p-6 text-center cursor-pointer"
              onDragOver={(e) => { e.preventDefault(); }}
              onDrop={(e) => {
                e.preventDefault();
                const f = e.dataTransfer.files?.[0];
                if (f) {
                  setFile(f);
                  setPreview(URL.createObjectURL(f));
                }
              }}
              onClick={() => {
                const input = document.getElementById("file-input") as HTMLInputElement | null;
                input?.click();
              }}
            >
              <p className="text-sm text-muted-foreground">Arrastra aquí tu imagen o haz clic para seleccionar</p>
              {preview && <img src={preview} alt="preview" className="mt-3 mx-auto h-24 object-cover rounded-md" />}
              {progress > 0 && (
                <div className="mt-3 w-full h-2 bg-muted rounded">
                  <div className="h-2 bg-primary rounded" style={{ width: `${progress}%` }} />
                </div>
              )}
            </div>
            <Input id="file-input" type="file" className="hidden" onChange={(e) => {
              const f = e.target.files?.[0] || null;
              setFile(f);
              setPreview(f ? URL.createObjectURL(f) : "");
            }} />
            <Input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="URL de imagen" />
            <Input value={alt} onChange={(e) => setAlt(e.target.value)} placeholder="Alt" />
            <Button onClick={addMedia}>Agregar</Button>
          </div>
        </div>
        <div className="lg:col-span-2 bg-background rounded-2xl shadow-sm ring-1 ring-border p-4">
          <h2 className="font-semibold mb-3">Media</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {media.map((m) => (
              <div key={m.id} className="p-3 rounded-xl border border-border">
                <img src={m.url} alt={m.alt} className="w-full h-24 object-cover rounded-md" />
                <div className="text-xs mt-1">{m.alt}</div>
              </div>
            ))}
            {media.length === 0 && <p className="text-sm text-muted-foreground">Sin media aún.</p>}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminCMS;
