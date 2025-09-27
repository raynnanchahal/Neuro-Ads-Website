import { AlertTriangle, Clock, Smartphone, Zap } from "lucide-react";
import { NeuralButton } from "../ui/neural-button";

const PainSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Section Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 mb-8">
            <AlertTriangle className="h-5 w-5 text-destructive mr-2" />
            <span className="text-destructive font-semibold">Founder Sh*t Show™</span>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg mx-auto text-foreground/90 mb-12">
            <p className="text-xl leading-relaxed mb-6">
              You're not lazy. You're not broken. You're <span className="text-accent font-bold">in the trenches.</span>
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 text-left my-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Smartphone className="h-5 w-5 sm:h-6 sm:w-6 text-accent mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-foreground/90">Trying to grow a brand while your phone won't stop buzzing, inbox is a crime scene</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-accent mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-foreground/90">Sleep like a teething toddler, wake up with 47 tabs open in your brain</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-accent mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-foreground/90">The ad that worked yesterday dies today. You hop from strategy to strategy</p>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 text-accent mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-foreground/90">Feels like momentum. Delivers like Zomato on a rainy day.</p>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 border-l-4 border-accent p-6 rounded-r-lg text-left">
              <p className="text-lg font-medium text-accent mb-2">The Reality Check:</p>
              <p className="text-foreground/80">
                Juggling logistics, launches, cash flow, and creatives that haven't arrived. 
                Every day feels like you're one step away from breakthrough or breakdown.
              </p>
            </div>
          </div>

          {/* Visual Pain Points */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Burned Budget", color: "text-destructive" },
              { label: "Failed Campaigns", color: "text-destructive" },
              { label: "Sleepless Nights", color: "text-destructive" },
              { label: "Strategy Chaos", color: "text-destructive" }
            ].map((item, index) => (
              <div key={index} className={`p-4 rounded-lg bg-destructive/5 border border-destructive/20 ${item.color} font-semibold text-center`}>
                {item.label}
              </div>
            ))}
          </div>

          {/* CTA */}
          <NeuralButton 
            variant="luxury-outline" 
            size="lg"
            onClick={() => window.open('https://calendly.com/ritishnanchahal-amld/discovery', '_blank')}
          >
            I'm Done Burning Money
          </NeuralButton>
        </div>
      </div>
    </section>
  );
};

export default PainSection;