import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/config/contact";
import { track } from "@vercel/analytics";

type Props = {
  source?: string;
};

export default function WhatsAppFloatingButton({ source = "floating" }: Props) {
  const href = buildWhatsAppUrl("Hola Clipot, ¿Hablamos de mi negocio?");

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group flex items-center justify-center focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50 rounded-full"
      onClick={() => {
        track("Demo CTA Clicked", { channel: "whatsapp", source });
      }}
      aria-label="¿Hablamos de tu negocio?"
    >
      <div className="absolute right-full mr-4 bg-black/80 backdrop-blur-md text-white px-4 py-2 rounded-xl text-sm font-mono border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none uppercase tracking-wider">
        ¿Hablamos de tu negocio?
      </div>
      <div className="w-16 h-16 rounded-full bg-[#25D366] text-white shadow-xl shadow-green-500/20 flex items-center justify-center hover:scale-110 transition-transform border-2 border-white/10">
        <svg 
          viewBox="0 0 24 24" 
          width="32" 
          height="32" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="lucide lucide-message-circle"
        >
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
        </svg>
      </div>
    </a>
  );
}

