import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DiscoverySection from "@/components/sections/DiscoverySection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import FeaturedSection from "@/components/sections/FeaturedSection";
import PartnersSection from "@/components/sections/PartnersSection";
import Footer from "@/components/Footer";

const NeuralAds = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <DiscoverySection />
        <FeaturedSection />
        <CaseStudiesSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
};

export default NeuralAds;