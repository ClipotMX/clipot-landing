import AdminLayout from "@/components/admin/AdminLayout";
import { useEffect, useRef, useState } from "react";
import grapesjs from "grapesjs";
import { Button } from "@/components/ui/button";

const AdminEmailEditor = () => {
  const editorRef = useRef<grapesjs.Editor | null>(null);
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");

  useEffect(() => {
    const editor = grapesjs.init({
      container: "#gjs",
      height: "500px",
      fromElement: false,
      storageManager: { type: null },
      plugins: [],
    });
    editorRef.current = editor;
    return () => {
      editor.destroy();
      editorRef.current = null;
    };
  }, []);

  function exportCode() {
    if (!editorRef.current) return;
    setHtml(editorRef.current.getHtml());
    setCss(editorRef.current.getCss());
  }

  return (
    <AdminLayout>
      <h1 className="font-display text-2xl font-bold mb-4">Editor de Emails</h1>
      <div id="gjs" className="bg-background rounded-2xl shadow-sm ring-1 ring-border mb-4" />
      <Button onClick={exportCode}>Exportar</Button>
      {html && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="p-4 rounded-2xl ring-1 ring-border">
            <h2 className="font-semibold mb-2">HTML</h2>
            <pre className="text-xs whitespace-pre-wrap">{html}</pre>
          </div>
          <div className="p-4 rounded-2xl ring-1 ring-border">
            <h2 className="font-semibold mb-2">CSS</h2>
            <pre className="text-xs whitespace-pre-wrap">{css}</pre>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminEmailEditor;
