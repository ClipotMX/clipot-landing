import { Phone } from "lucide-react";
import { buildWhatsAppUrl } from "@/config/contact";
import { track } from "@vercel/analytics";

type Props = {
  source?: string;
};

export default function WhatsAppFloatingButton({ source = "floating" }: Props) {
  const href = buildWhatsAppUrl("Hola Clipot, quiero agendar una demostración de Negocio Core.");

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 text-white shadow-lg ring-1 ring-green-600 flex items-center justify-center hover:scale-105 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
      onClick={() => {
        track("Demo CTA Clicked", { channel: "whatsapp", source });
      }}
      aria-label="Agendar demostración por WhatsApp"
    >
      <Phone size={24} />
    </a>
  );
}

