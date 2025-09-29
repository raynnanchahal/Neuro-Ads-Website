import { Brain, ChevronDown } from "lucide-react";
import { NeuralButton } from "./ui/neural-button";

const HeroSection = () => {
  return (
    <section className="brain-hero-bg relative flex items-center justify-center">
      <div className="container-flow relative z-10 py-32">
        {/* Badge */}
        <div className="flex justify-center mb-12">
          <div className="glass-effect border border-flow-cyan/20 rounded-full px-6 py-3 animate-fade-in">
            <div className="flex items-center gap-3">
              <Brain className="w-5 h-5 text-flow-cyan" />
              <span className="text-sm font-medium uppercase tracking-wider">NEUROSCIENCE MEETS ADVERTISING</span>
            </div>
          </div>
        </div>
        
        {/* Main headline */}
        <h1 className="headline-flow text-center mb-12">
          HELPING LEADERS AND THEIR<br />
          TEAMS REACH THEIR POTENTIAL<br />
          THROUGH HARNESSING<br />
          <span className="accent-text">THE POWER OF FLOW STATE.</span>
        </h1>
        
        {/* Subtext */}
        <div className="text-center mb-16">
          <p className="text-flow mx-auto mb-8">
            In 2025, the brands firing agencies, deleting UGC, and killing SKUs are the ones tripling profits.
          </p>

          {/* Video embed */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="brain-visual mb-8">
              <div className="brain-outline"></div>
              <button className="play-button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="ml-1">
                  <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
                </svg>
              </button>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden bg-card/50 border border-border cyber-glow">
              <iframe
                src="https://www.loom.com/embed/4d4c3329c3d74c62992cb4972a7bd155?sid=e1e612eb-c1c6-4620-9b82-afd908dd2fd6"
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
                title="Neural Ads Explanation"
              />
            </div>
          </div>
          
          <p className="text-flow mx-auto mb-16">
            We've spent 18 months reverse-engineering how the top 1% of advertisers think, move, and profit in 2024. 
            The result? A playbook that's generated <span className="accent-text font-semibold">$127M+ in trackable revenue</span> for 847 elite brands.
          </p>
        </div>
        
        {/* Stats grid */}
        <div className="neural-grid mb-16">
          <div className="stat-display">
            <div className="stat-number">847%</div>
            <div className="stat-label">Average profit increase</div>
          </div>
          <div className="stat-display">
            <div className="stat-number">847</div>
            <div className="stat-label">Elite brands served</div>
          </div>
          <div className="stat-display">
            <div className="stat-number">$127M+</div>
            <div className="stat-label">Revenue generated</div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <NeuralButton variant="flow" size="lg" className="animate-float-subtle">
            TRAIN WITH US
          </NeuralButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;