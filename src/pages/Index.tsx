import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import LeadManagement from "@/components/LeadManagement";
import Slider from "@/components/Slider";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Agencia de marketing digital – Clipot | Generación de leads"
        description="Agencia de marketing digital especializada en generación y gestión de leads, paid media y desarrollo web. Estrategias a medida para crecer tus ventas."
        keywords={["agencia marketing digital","generación de leads","paid media","desarrollo web","gestión de leads"]}
        type="website"
      />
      <Header />
      <Hero />
      <Services />
      <LeadManagement />
      <Slider />
      <CTA />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
