import { NeuralButton } from "./ui/neural-button";
import neuralLogo from "@/assets/neural-logo.png";

const HeroSection = () => {

  return (
    <section className="brain-hero-bg relative flex items-center justify-center min-h-screen">
      <div className="container-flow relative z-10 py-20 max-w-6xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-8 px-4">
          <div className="glass-effect border border-flow-cyan/20 rounded-full px-4 sm:px-6 py-2.5 animate-fade-in">
            <div className="flex items-center gap-2 sm:gap-3">
              <img src={neuralLogo} alt="" className="w-4 h-4" />
              <span className="text-xs font-medium uppercase tracking-wider">NEUROSCIENCE MEETS ADVERTISING</span>
            </div>
          </div>
        </div>
        
        {/* Main headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-center mb-8 leading-tight px-4">
          SCALE TO $500K/MONTH WITHIN 180 DAYS<br />
          USING <span className="text-gradient">NEURO ADS</span>.
        </h1>
        
        {/* Subtext */}
        <div className="text-center mb-16 px-4">
          <p className="text-base sm:text-lg md:text-xl mx-auto mb-16 max-w-4xl leading-relaxed text-foreground/90">
            If your ads feel less effective than they used to, it's not your creatives, copy, team — it's the system you're using.
            This short breakdown reveals what's changed in 2025, and how leading brands are adapting.
          </p>

          {/* Video embed */}
          <div id="video-section" className="max-w-4xl mx-auto mb-16 px-4">
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
        </div>
        
        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 px-4 max-w-5xl mx-auto">
          <div className="stat-display">
            <div className="stat-number">847%</div>
            <div className="stat-label">Average profit increase</div>
          </div>
          <div className="stat-display">
            <div className="stat-number">237</div>
            <div className="stat-label">Brands served</div>
          </div>
          <div className="stat-display">
            <div className="stat-number">$127M+</div>
            <div className="stat-label">Revenue generated</div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <NeuralButton 
            variant="flow" 
            size="lg" 
            className="animate-float-subtle"
            onClick={() => window.open('https://cal.com/ritish-nanchahal/call', '_blank')}
          >
            LET'S TALK
          </NeuralButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
