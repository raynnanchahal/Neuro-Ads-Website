import { CheckCircle, Target, TrendingUp, Users, Brain } from "lucide-react";
import { NeuralButton } from "../ui/neural-button";

const OfferSection = () => {
  const benefits = [
    { 
      icon: Target, 
      title: "Your million-dollar angles",
      desc: "Discover the exact messaging that converts your audience"
    },
    { 
      icon: TrendingUp, 
      title: "How to 10X revenue with existing products",
      desc: "Unlock hidden profit centers in your current business"
    },
    { 
      icon: Users, 
      title: "Systems to retain customers for life",
      desc: "Build loyalty that turns buyers into brand evangelists"
    },
    { 
      icon: Brain, 
      title: "Exact $100M+ playbook",
      desc: "The same strategy used by 132+ successful brands"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-accent/5 to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <CheckCircle className="h-5 w-5 text-accent mr-2" />
              <span className="text-accent font-semibold">What You'll Get</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              On your strategy call,{" "}
              <span className="text-accent">walk away with:</span>
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="space-y-6 mb-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-6 rounded-lg bg-card border border-border hover:border-accent/50 transition-all duration-300 card-shadow animate-slide-up"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-foreground/70">{benefit.desc}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-accent" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Value Proposition */}
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 mb-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Free 30-Minute Strategy Session</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <div className="text-3xl font-bold text-accent mb-2">$0</div>
                <div className="text-primary-foreground/80">Investment</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">30</div>
                <div className="text-primary-foreground/80">Minutes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">∞</div>
                <div className="text-primary-foreground/80">Value</div>
              </div>
            </div>
            <p className="text-primary-foreground/80">
              No pitch, no pressure. Just pure strategy tailored to your business.
            </p>
          </div>

          {/* Social Proof Badge */}
          <div className="flex justify-center mb-8">
            <div className="stat-badge text-lg px-6 py-3">
              ✅ Used by 132+ Brands Worldwide
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <NeuralButton 
              variant="hero" 
              size="xl"
              onClick={() => window.open('https://calendly.com/ritishnanchahal-amld/discovery', '_blank')}
              className="mb-4"
            >
              Map My Playbook
            </NeuralButton>
            <p className="text-foreground/60 text-sm">
              Available slots filling fast • Book within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;