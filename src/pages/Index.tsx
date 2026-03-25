import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import LeadManagement from "@/components/LeadManagement";
import Slider from "@/components/Slider";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import SEO from "@/components/SEO";
import TestimonialsSection from "@/components/TestimonialsSection";
import ClientsCarouselSection from "@/components/ClientsCarouselSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Agencia de marketing digital en CDMX | Leads y Paid Media – Clipot"
        description="Agencia de marketing digital en Ciudad de México (CDMX) especializada en generación y gestión de leads, paid media y desarrollo web. Atendemos CDMX y México."
        keywords={[
          "agencia de marketing digital en cdmx",
          "agencia de marketing digital ciudad de méxico",
          "marketing digital méxico",
          "generación de leads cdmx",
          "gestión de leads méxico",
          "paid media cdmx",
          "meta ads méxico",
          "google ads cdmx",
          "desarrollo web cdmx",
          "agencia de marketing cerca de mí",
        ]}
        type="website"
      />
      <Header />
      <Hero />
      <Services />
      <LeadManagement />
      <Slider />
      <ClientsCarouselSection />
      <TestimonialsSection />
      <CTA />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
