import Hero from "@/components/Hero";
import PartnershipLoop from "@/components/PartnershipLoop";
import PainPointSection from "@/components/PainPointSection";
import NucleusEcosystem from "@/components/NucleusEcosystem";
import StatsBar from "@/components/StatsBar";
import DemoBookingSection from "@/components/DemoBookingSection";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <div className="bg-background min-h-screen text-foreground overflow-x-hidden">
      <Hero />
      <PartnershipLoop />
      <PainPointSection />
      <NucleusEcosystem />
      <StatsBar />
      <DemoBookingSection />
      <Footer />
    </div>
  );
};

export default Page;