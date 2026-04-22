import Hero from "@/components/Hero";
import PartnershipLoop from "@/components/PartnershipLoop";
import PainPointSection from "@/components/PainPointSection";
import StatsBar from "@/components/StatsBar";
import NucleusEcosystem from "@/components/NucleusEcosystem";
import LeadCapture from "@/components/LeadCapture";
import LeadMagnet from "@/components/LeadMagnet";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SEO from "@/components/SEO";

const LandingPage = () => {
  return (
    <div className="dark bg-background min-h-screen text-white overflow-x-hidden font-sans">
      <SEO
        title="Clipot | NUCLEUS — Ingeniería de Infraestructura Digital"
        description="Construimos los sistemas que tu empresa necesita para escalar. CRM, ERP y automatización con arquitectura NUCLEUS."
        keywords={[
          "ingeniería digital",
          "infraestructura de negocios",
          "BOS",
          "NUCLEUS",
          "automatización de procesos",
          "CRM ERP integración",
          "escalabilidad digital",
        ]}
      />
      <Header />
      <div id="home">
        <Hero />
      </div>
      <div id="partners" data-aos="fade-up">
        <PartnershipLoop />
      </div>
      <div id="pain-points">
        <PainPointSection />
      </div>
      
      <LeadMagnet 
        title="Guía: Los 5 puntos ciegos de tu CRM"
        subtitle="Cómo evitar que tu equipo pierda el 40% de sus leads"
        buttonText="Descargar Guía Gratis"
      />

      <div id="ecosystem">
        <NucleusEcosystem />
      </div>

      <LeadMagnet 
        title="Plantilla de Auditoría Operativa"
        subtitle="Identifica procesos manuales que están matando tu rentabilidad"
        buttonText="Obtener Plantilla"
      />

      <div id="stats">
        <StatsBar />
      </div>

      <div id="contact">
        <LeadCapture />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
