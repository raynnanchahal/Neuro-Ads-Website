import { Heart, Plane, Home, Coffee } from "lucide-react";
import { NeuralButton } from "../ui/neural-button";

const EmotionalSection = () => {
  const desires = [
    { 
      icon: Coffee, 
      title: "Create time, money, and location freedom",
      desc: "Work from anywhere, anytime"
    },
    { 
      icon: Heart, 
      title: "Build something that matters",
      desc: "Leave a lasting legacy"
    },
    { 
      icon: Home, 
      title: "Give your family a better life",
      desc: "Provide security and opportunities"
    },
    { 
      icon: Plane, 
      title: "Travel, relax, and enjoy the ride",
      desc: "Live life on your own terms"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              You didn't start your brand to{" "}
              <span className="text-accent">drown in dashboards</span>
            </h2>
            
            <p className="text-xl text-primary-foreground/90 mb-8">
              You started to:
            </p>
          </div>

          {/* Dreams/Desires Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {desires.map((desire, index) => {
              const Icon = desire.icon;
              return (
                <div 
                  key={index}
                  className="flex items-center space-x-4 p-6 rounded-lg bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 animate-scale-in"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{desire.title}</h3>
                    <p className="text-primary-foreground/70 text-sm">{desire.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Reality Check */}
          <div className="text-center mb-12">
            <div className="bg-destructive/20 border border-destructive/30 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-accent mb-4">But now?</h3>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                You're burned out. Exhausted. Running on empty.{" "}
                <span className="text-accent font-bold">Let's fix that.</span>
              </p>
            </div>
            
            <div className="bg-accent/10 border border-accent/30 rounded-lg p-8">
              <h3 className="text-3xl font-bold text-accent mb-4">
                You run the brand, we run the growth.
              </h3>
              <p className="text-lg text-primary-foreground/80">
                It's time to get back to why you started this journey.
              </p>
            </div>
          </div>

          {/* Lifestyle Visualization */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { emoji: "⏰", label: "Your Time Back" },
              { emoji: "💰", label: "Consistent Profits" },
              { emoji: "🌍", label: "Location Freedom" },
              { emoji: "😌", label: "Peace of Mind" }
            ].map((item, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-accent/10 border border-accent/20">
                <div className="text-3xl mb-2">{item.emoji}</div>
                <div className="text-sm font-semibold text-accent">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <NeuralButton 
              variant="luxury" 
              size="xl"
              onClick={() => window.open('https://calendly.com/ritishnanchahal-amld/discovery', '_blank')}
              className="mb-4"
            >
              Let's Build My Machine
            </NeuralButton>
            <p className="text-primary-foreground/60 text-sm">
              Your freedom is one strategy call away
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionalSection;