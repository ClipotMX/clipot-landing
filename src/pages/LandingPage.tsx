import Hero from "@/components/Hero";
import Problema from "@/components/Problema";
import Solucion from "@/components/Solucion";
import ComoFunciona from "@/components/ComoFunciona";
import Soluciones from "@/components/Soluciones";
import ParaQuien from "@/components/ParaQuien";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import ClientsCarouselSection from "@/components/ClientsCarouselSection";
import PlansShowcase from "@/components/PlansShowcase";
import SEO from "@/components/SEO";

const LandingPage = () => {
  return (
    <div className="bg-brand-bg min-h-screen text-brand-text overflow-x-hidden">
      <SEO
        title="Negocio Core | Transformación operativa y mejora de procesos en México – Clipot"
        description="Implementamos Negocio Core: integración, capacitación y soporte continuo para mejorar procesos, reducir errores y aumentar productividad. Sede en Guadalajara; atendemos todo México."
        keywords={[
          "transformación digital méxico",
          "mejora de procesos",
          "automatización empresarial",
          "integraciones crm shopify pos",
          "negocio core",
          "guadalajara jalisco",
        ]}
      />
      <Hero />
      <Problema />
      <Solucion />
      <ComoFunciona />
      <Soluciones />
      <ParaQuien />
      <ClientsCarouselSection />
      <TestimonialsSection />
      <PlansShowcase />
      <CTA />
      <Footer />
    </div>
  );
};

export default LandingPage;
