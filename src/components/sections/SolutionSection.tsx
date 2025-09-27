import { Brain, Target, Smartphone, Mail, TrendingUp, Palette, Cog, Users } from "lucide-react";
import { NeuralButton } from "../ui/neural-button";

const SolutionSection = () => {
  const services = [
    { icon: Target, title: "Paid Advertising", desc: "Meta, TikTok, Google, Amazon, Pinterest" },
    { icon: Users, title: "Influencer & UGC", desc: "Authentic campaigns that convert" },
    { icon: Cog, title: "Web Development", desc: "Custom sites built for conversion" },
    { icon: Mail, title: "Email & SMS", desc: "Retention campaigns that scale" },
    { icon: TrendingUp, title: "Social Growth", desc: "Organic reach that compounds" },
    { icon: Brain, title: "AI Automation", desc: "Efficiency ops that save hours" },
    { icon: Palette, title: "Brand Identity", desc: "Design that stops the scroll" },
    { icon: Smartphone, title: "Full-Funnel Strategy", desc: "End-to-end growth systems" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto animate-fade-in">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Brain className="h-5 w-5 text-accent mr-2" />
              <span className="text-accent font-semibold">The Neural Stack</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Neural Ads isn't an agency.{" "}
              <span className="text-accent">It's a brain-targeting growth engine.</span>
            </h2>
            
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              We blend behavioral psychology, neuroscience, and performance marketing to 
              stop the scroll, hook the limbic brain, trigger instinctive action, and 
              engineer conversions at scale.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="p-3 sm:p-6 rounded-lg bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:scale-105 card-shadow"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="p-2 sm:p-3 rounded-full bg-accent/10 mb-3 sm:mb-4">
                      <Icon className="h-4 w-4 sm:h-6 sm:w-6 text-accent" />
                    </div>
                    <h3 className="font-bold text-sm sm:text-lg mb-1 sm:mb-2">{service.title}</h3>
                    <p className="text-foreground/80 text-xs sm:text-sm leading-tight">{service.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Neural Methodology */}
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 mb-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className="font-bold text-xl mb-2">Psychology</h3>
                <p className="text-primary-foreground/80">Target subconscious triggers</p>
              </div>
              
              <div>
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-bold text-xl mb-2">Neuroscience</h3>
                <p className="text-primary-foreground/80">Hook the limbic brain</p>
              </div>
              
              <div>
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-bold text-xl mb-2">Performance</h3>
                <p className="text-primary-foreground/80">Engineer conversions at scale</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <NeuralButton 
              variant="luxury" 
              size="xl"
              onClick={() => window.open('https://calendly.com/ritishnanchahal-amld/discovery', '_blank')}
            >
              Give Me The Stack
            </NeuralButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;