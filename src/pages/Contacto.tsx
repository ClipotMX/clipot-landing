import SEO from "@/components/SEO";
import DemoBookingSection from "@/components/DemoBookingSection";
import Footer from "@/components/Footer";

export default function Contacto() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text overflow-x-hidden">
      <SEO
        title="Agendar demostración | Negocio Core – Clipot"
        description="Solicita una demostración de Negocio Core. WhatsApp es el canal principal y Cal.com está disponible como alternativa de agendamiento automatizado."
        keywords={[
          "agendar demostración",
          "negocio core",
          "transformación digital méxico",
          "mejora de procesos",
          "automatización empresarial",
        ]}
        canonical="/contacto"
      />
      <DemoBookingSection />
      <Footer />
    </div>
  );
}

