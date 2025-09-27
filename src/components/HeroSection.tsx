import { Brain, Zap, TrendingUp, Star, Award, Crown } from "lucide-react";
import { NeuralButton } from "./ui/neural-button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden luxury-hero-bg">
      {/* Ambient Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-luxury-gold/20 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-luxury-purple/20 to-transparent rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center">
        <div className="max-w-5xl mx-auto animate-fade-in">
          {/* Premium Brand Badge */}
          <div className="flex justify-center mb-8">
            <div className="luxury-badge">
              <Crown className="h-5 w-5 mr-2" />
              Premium Neural Marketing
              <Star className="h-4 w-4 ml-2" />
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-8xl font-bold text-foreground mb-8 leading-tight">
            The Game Has{" "}
            <span className="text-gradient animate-luxury-pulse">Changed</span>
          </h1>

          {/* Sophisticated Subtext */}
          <div className="mb-12 space-y-6 max-w-4xl mx-auto">
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed font-body">
              Still running ads like it's 2023? 
              <span className="text-accent font-semibold"> How did it feel to burn all that money?</span>
            </p>
            <p className="text-lg sm:text-xl text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed">
              In 2025, the brands firing agencies, deleting UGC, and killing SKUs are the ones 
              <span className="text-gradient font-bold"> tripling profits.</span>
            </p>
          </div>

          {/* Luxury Stats Grid */}
          <div className="stats-grid mb-12 max-w-4xl mx-auto">
            <div className="stat-item animate-scale-in">
              <TrendingUp className="h-8 w-8 mx-auto mb-3 text-accent" />
              <div className="stat-number">3X</div>
              <div className="text-muted-foreground font-medium">Profit Increase</div>
            </div>
            <div className="stat-item animate-scale-in" style={{animationDelay: '0.2s'}}>
              <Award className="h-8 w-8 mx-auto mb-3 text-accent" />
              <div className="stat-number">132+</div>
              <div className="text-muted-foreground font-medium">Elite Brands</div>
            </div>
            <div className="stat-item animate-scale-in" style={{animationDelay: '0.4s'}}>
              <Brain className="h-8 w-8 mx-auto mb-3 text-accent" />
              <div className="stat-number">$100M+</div>
              <div className="text-muted-foreground font-medium">Revenue Generated</div>
            </div>
          </div>

          {/* Premium Hero CTA */}
          <div className="animate-slide-up" style={{animationDelay: '0.6s'}}>
            <NeuralButton 
              variant="hero" 
              size="xl"
              onClick={() => window.open('https://calendly.com/ritishnanchahal-amld/discovery', '_blank')}
              className="mb-6 shadow-2xl"
            >
              Book My Neural Strategy Call
            </NeuralButton>
            <p className="text-muted-foreground/60 text-sm font-body">
              Exclusive 30-minute strategy session • Limited availability
            </p>
          </div>
        </div>

        {/* Elegant Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-accent/50 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-4 bg-accent rounded-full mt-3 animate-glow-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;