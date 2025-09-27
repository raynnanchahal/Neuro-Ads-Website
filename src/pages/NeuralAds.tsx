import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/sections/PainSection";
import ShiftSection from "@/components/sections/ShiftSection";
import SolutionSection from "@/components/sections/SolutionSection";
import ProofSection from "@/components/sections/ProofSection";
import OfferSection from "@/components/sections/OfferSection";
import EmotionalSection from "@/components/sections/EmotionalSection";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

const NeuralAds = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <PainSection />
        <ShiftSection />
        <SolutionSection />
        <ProofSection />
        <OfferSection />
        <EmotionalSection />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default NeuralAds;