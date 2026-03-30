import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Copy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { io, Socket } from "socket.io-client";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<{ text: string; isUser: boolean; ts?: string }[]>([
    { text: "Hola. ¿Quieres agendar una demostración de Negocio Core? Cuéntanos tu objetivo y tu industria.", isUser: false },
  ]);
  const socketRef = useRef<Socket | null>(null);
  const sessionIdRef = useRef<string>("");
  const [sessionId, setSessionId] = useState<string>("");

  useEffect(() => {
    const sid = (typeof window !== "undefined" && window.crypto?.randomUUID)
      ? window.crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    sessionIdRef.current = sid;
    setSessionId(sid);
    const socket = io("http://localhost:3001", { withCredentials: true, transports: ["websocket"] });
    socket.on("connect", () => {
      socket.emit("join", { sessionId: sid });
    });
    socket.on("message", (entry) => {
      setMessages((prev) => [...prev, { text: entry.text, isUser: entry.isUser, ts: entry.ts }]);
    });
    socketRef.current = socket;
    return () => {
      socket.disconnect();
      socketRef.current = null;
    };
  }, []);

  const handleSend = () => {
    if (!message.trim()) return;
    const text = message;
    setMessages([...messages, { text, isUser: true }]);
    setMessage("");
    socketRef.current?.emit("message", {
      sessionId: sessionIdRef.current,
      text,
      meta: { isUser: true },
    });
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
          onClick={() => {
            setIsOpen((v) => !v);
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </motion.button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-background rounded-2xl shadow-2xl ring-1 ring-border overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary text-primary-foreground p-4">
              <h3 className="font-display font-semibold">Chat con Clipot</h3>
              <p className="text-sm opacity-90">Respondemos en menos de 5 min</p>
            </div>
            <div className="flex items-center justify-between px-4 py-2 text-xs text-muted-foreground bg-muted">
              <span className="truncate">ID: {sessionId}</span>
              <button
                className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-background hover:bg-muted transition-colors"
                onClick={() => navigator.clipboard?.writeText(sessionId)}
              >
                <Copy size={14} />
                Copiar
              </button>
            </div>

            {/* Messages */}
            <div className="h-72 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.isUser
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-muted text-foreground rounded-bl-md"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex gap-2"
              >
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Escribe tu mensaje..."
                  className="flex-1"
                />
                <Button type="submit" size="icon">
                  <Send size={18} />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
