import { Star, TrendingUp, Globe, Award } from "lucide-react";
import { NeuralButton } from "../ui/neural-button";

const ProofSection = () => {
  const results = [
    { 
      brand: "TechFlow Solutions", 
      before: "₹30L/month", 
      after: "₹1.2Cr/month", 
      timeframe: "6 weeks",
      highlight: "4X Growth" 
    },
    { 
      brand: "Zenith Wellness", 
      before: "High CAC", 
      after: "50% Lower CAC", 
      timeframe: "3 months",
      highlight: "3X Profits" 
    },
    { 
      brand: "Nexus Apparel", 
      before: "₹15L/month", 
      after: "₹75L/month", 
      timeframe: "8 weeks",
      highlight: "5X Revenue" 
    },
    { 
      brand: "Velocity Gaming", 
      before: "2.1% CTR", 
      after: "8.7% CTR", 
      timeframe: "4 weeks",
      highlight: "4X CTR" 
    }
  ];

  const stats = [
    { icon: TrendingUp, number: "$100M+", label: "Revenue Generated" },
    { icon: Award, number: "132", label: "Brands Scaled" },
    { icon: Globe, number: "11", label: "Countries" },
    { icon: Star, number: "23", label: "Niches Mastered" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto animate-fade-in">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Award className="h-5 w-5 text-accent mr-2" />
              <span className="text-accent font-semibold">Results That Hit</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              The proof is in the{" "}
              <span className="text-accent">numbers</span>
            </h2>
          </div>

          {/* Case Study Results */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {results.map((result, index) => (
              <div key={index} className="testimonial-card animate-scale-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-0">{result.brand}</h3>
                  <div className="stat-badge text-sm">{result.highlight}</div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground/90 text-sm sm:text-base">Before:</span>
                    <span className="font-semibold text-sm sm:text-base">{result.before}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground/90 text-sm sm:text-base">After:</span>
                    <span className="font-semibold text-accent text-sm sm:text-base">{result.after}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground/90 text-sm sm:text-base">Time:</span>
                    <span className="font-semibold text-sm sm:text-base">{result.timeframe}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-card rounded-full px-6 py-3 border border-border card-shadow">
              <Star className="h-5 w-5 text-accent fill-current" />
              <span className="font-bold">4.8/5</span>
              <span className="text-foreground/70">Trustpilot Rating</span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className="text-center p-6 rounded-lg bg-card border border-border hover:border-accent/50 transition-all duration-300 card-shadow"
                >
                  <Icon className="h-8 w-8 text-accent mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-bold text-accent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-foreground/70 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Video Testimonial Placeholder */}
          <div className="bg-primary rounded-2xl p-8 text-center text-primary-foreground mb-12">
            <h3 className="text-2xl font-bold mb-4">Client Success Stories</h3>
            <p className="text-primary-foreground/80 mb-6">
              Watch real founders share their transformation stories
            </p>
            <div className="bg-primary-foreground/10 rounded-lg p-8 border border-primary-foreground/20">
              <p className="text-lg mb-4">📹 Video Testimonials Coming Soon</p>
              <p className="text-primary-foreground/70">
                Get early access by booking your strategy call
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <NeuralButton 
              variant="luxury" 
              size="xl"
              onClick={() => window.open('https://calendly.com/ritishnanchahal-amld/discovery', '_blank')}
            >
              Send Me The Case Studies
            </NeuralButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;