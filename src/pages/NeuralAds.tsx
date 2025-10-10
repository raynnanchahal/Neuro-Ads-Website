import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DiscoverySection from "@/components/sections/DiscoverySection";
import ProofSection from "@/components/sections/ProofSection";
import Footer from "@/components/Footer";

const NeuralAds = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <DiscoverySection />
        <ProofSection />
      </main>
      <Footer />
    </div>
  );
};

export default NeuralAds;