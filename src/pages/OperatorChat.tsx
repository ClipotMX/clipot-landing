import AdminLayout from "@/components/admin/AdminLayout";
import { useEffect, useMemo, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, MessageSquare, Clock, Send } from "lucide-react";

type SessionInfo = { sessionId: string; lastTs: string; lastText: string; count: number };
type ChatMsg = { text: string; isUser: boolean; ts?: string };

const OperatorChat = () => {
  const [sessions, setSessions] = useState<SessionInfo[]>([]);
  const [active, setActive] = useState<string>("");
  const [messages, setMessages] = useState<ChatMsg[]>([]);
  const [text, setText] = useState("");
  const socketRef = useRef<Socket | null>(null);
  const [token, setToken] = useState<string>(() => localStorage.getItem("userToken") || localStorage.getItem("adminToken") || "");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const baseUrl = useMemo(() => "http://localhost:3001", []);

  useEffect(() => {
    if (!token) return;
    const socket = io(baseUrl, { withCredentials: true, transports: ["websocket"], auth: { token } });
    socket.on("message", (entry: ChatMsg & { sessionId: string }) => {
      if (!active || entry.sessionId !== active) return;
      setMessages((prev) => [...prev, { text: entry.text, isUser: entry.isUser, ts: entry.ts }]);
    });
    socket.on("session:update", (s: { sessionId: string; lastTs: string; lastText: string; count: number }) => {
      setSessions((prev) => {
        const idx = prev.findIndex((p) => p.sessionId === s.sessionId);
        if (idx >= 0) {
          const next = [...prev];
          next[idx] = s;
          return next;
        }
        return [s, ...prev];
      });
    });
    socketRef.current = socket;
    if (active) {
      socket.emit("join", { sessionId: active });
    }
    return () => {
      socket.disconnect();
      socketRef.current = null;
    };
  }, [baseUrl, active, token]);

  async function loadSessions() {
    if (!token) return;
    const res = await fetch(`${baseUrl}/api/chat/sessions?minutes=120`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    if (data?.ok) setSessions(Array.isArray(data.sessions) ? data.sessions : []);
    else setSessions([]);
  }

  async function joinSession(id: string) {
    setActive(id);
    try {
      const res = await fetch(`${baseUrl}/api/chat/${id}`, {
        headers: token ? { Authorization: `Bearer ${token}` } : undefined,
      });
      const data = await res.json();
      if (data?.ok) setMessages(Array.isArray(data.messages) ? data.messages : []);
      else setMessages([]);
    } catch {
      setMessages([]);
    }
  }

  function send() {
    const v = text.trim();
    if (!v || !active) return;
    setText("");
    setMessages([...messages, { text: v, isUser: false }]);
    socketRef.current?.emit("message", { sessionId: active, text: v, meta: { isUser: false } });
  }

  useEffect(() => {
    loadSessions();
    const t = setInterval(loadSessions, 5000);
    return () => clearInterval(t);
  }, []);

  async function doLogin() {
    setLoading(true);
    try {
      const res = await fetch(`${baseUrl}/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (data?.ok && data.token) {
        localStorage.setItem("adminToken", data.token);
        setToken(data.token);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <AdminLayout>
      <h1 className="font-display text-2xl font-bold mb-4">Panel de Chat</h1>
      <p className="text-muted-foreground mb-6">Chatea en tiempo real con visitantes.</p>
      {!token ? (
        <div className="max-w-md bg-background rounded-2xl shadow-sm ring-1 ring-border p-6">
          <p className="text-sm mb-3">Ingresa la clave de administrador.</p>
          <div className="flex gap-2">
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <Button onClick={doLogin} disabled={loading}>
              Acceder
            </Button>
          </div>
        </div>
      ) : (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-background rounded-2xl shadow-sm ring-1 ring-border p-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-semibold flex items-center gap-2"><MessageSquare size={18} /> Sesiones</h2>
            <Button variant="outline" size="sm" onClick={loadSessions}>Actualizar</Button>
          </div>
          <div className="space-y-2 mt-2">
            {sessions.map(s => (
              <button
                key={s.sessionId}
                onClick={() => joinSession(s.sessionId)}
                className={`w-full text-left p-3 rounded-xl border ${active === s.sessionId ? "border-primary" : "border-border"} hover:bg-muted transition`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs">{s.sessionId}</span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground"><Clock size={14} /> {new Date(s.lastTs).toLocaleTimeString()}</span>
                </div>
                <p className="text-sm line-clamp-1 text-muted-foreground">{s.lastText}</p>
                <p className="text-[11px] text-muted-foreground mt-1">Mensajes: {s.count}</p>
              </button>
            ))}
            {sessions.length === 0 && (
              <p className="text-sm text-muted-foreground">Sin sesiones por ahora.</p>
            )}
          </div>
        </div>
        <div className="lg:col-span-2 bg-background rounded-2xl shadow-sm ring-1 ring-border p-4">
          {active ? (
            <>
              <div className="h-[420px] overflow-y-auto space-y-3 mb-4">
                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.isUser ? "justify-start" : "justify-end"}`}>
                    <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${m.isUser ? "bg-muted text-foreground rounded-bl-md" : "bg-primary text-primary-foreground rounded-br-md"}`}>
                      {m.text}
                    </div>
                  </div>
                ))}
                {messages.length === 0 && (
                  <p className="text-sm text-muted-foreground">Sin mensajes aún.</p>
                )}
              </div>
              <div className="flex gap-2">
                <Input value={text} onChange={(e) => setText(e.target.value)} placeholder="Escribe tu respuesta..." />
                <Button onClick={send}>
                  Enviar
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </>
          ) : (
            <p className="text-sm text-muted-foreground">Selecciona una sesión para empezar a chatear.</p>
          )}
        </div>
      </div>
      )}
    </AdminLayout>
  );
};

export default OperatorChat;
