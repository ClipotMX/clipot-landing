import Hero from "@/components/Hero";
import Problema from "@/components/Problema";
import Solucion from "@/components/Solucion";
import ComoFunciona from "@/components/ComoFunciona";
import Soluciones from "@/components/Soluciones";
import ParaQuien from "@/components/ParaQuien";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <div className="bg-brand-bg min-h-screen text-brand-text overflow-x-hidden">
      <Hero />
      <Problema />
      <Solucion />
      <ComoFunciona />
      <Soluciones />
      <ParaQuien />
      <CTAFinal />
      <Footer />
    </div>
  );
};

export default Page;
