import React from 'react';
import HeroSection from '../components/landing/HeroSection';
import ProblemsSection from '../components/landing/ProblemsSection';
import SolutionSection from '../components/landing/SolutionSection';
import HowItWorksSection from '../components/landing/HowItWorksSection';
import PricingSection from '../components/landing/PricingSection';
import UseCasesSection from '../components/landing/UseCasesSection';
import DemoSection from '../components/landing/DemoSection';
import FinalCTASection from '../components/landing/FinalCTASection';
import FooterLanding from '../components/landing/FooterLanding';

const LandingPage = () => {
  return (
    <div className="bg-brand-bg min-h-screen text-brand-text overflow-x-hidden">
      <HeroSection />
      <ProblemsSection />
      <SolutionSection />
      <HowItWorksSection />
      <PricingSection />
      <UseCasesSection />
      <DemoSection />
      <FinalCTASection />
      <FooterLanding />
    </div>
  );
};

export default LandingPage;
