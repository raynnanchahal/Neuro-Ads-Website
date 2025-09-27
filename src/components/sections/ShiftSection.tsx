import { Lightbulb, ArrowRight, Target, Zap } from "lucide-react";
import { NeuralButton } from "../ui/neural-button";

const ShiftSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Visual Transformation */}
          <div className="flex items-center justify-center mb-8 space-x-4 sm:space-x-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-destructive/20 flex items-center justify-center mb-2">
                <span className="text-xl sm:text-2xl">😵</span>
              </div>
              <span className="text-xs sm:text-sm text-primary-foreground/80 font-medium">Chaos</span>
            </div>
            
            <ArrowRight className="h-6 w-6 sm:h-8 sm:w-8 text-accent animate-pulse" />
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-accent/20 flex items-center justify-center mb-2">
                <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
              </div>
              <span className="text-xs sm:text-sm text-primary-foreground/80 font-medium">Clarity</span>
            </div>
          </div>

          {/* Main Message */}
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              You weren't born to run a business{" "}
              <span className="text-accent">like this</span>
            </h2>
            
            <div className="prose prose-lg prose-invert mx-auto">
              <p className="text-xl leading-relaxed mb-6">
                Your job isn't to juggle chaos; it's to make{" "}
                <span className="text-accent font-bold">high-leverage moves that scale.</span>
              </p>
              
              <p className="text-lg text-primary-foreground/80 mb-8">
                You've felt the fatigue, the endless reset button. Here's the truth: 
                it's not that you're lacking systems. You're lacking{" "}
                <span className="text-accent font-semibold">systems that still work.</span>
              </p>
            </div>
          </div>

          {/* The Shift Visualization */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-lg bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
              <Target className="h-8 w-8 text-accent mb-4 mx-auto" />
              <h3 className="font-bold text-lg mb-2">Focus</h3>
              <p className="text-primary-foreground/80 text-sm">Stop the endless strategy switching</p>
            </div>
            
            <div className="p-6 rounded-lg bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
              <Zap className="h-8 w-8 text-accent mb-4 mx-auto" />
              <h3 className="font-bold text-lg mb-2">Leverage</h3>
              <p className="text-primary-foreground/80 text-sm">Systems that work while you sleep</p>
            </div>
            
            <div className="p-6 rounded-lg bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
              <Lightbulb className="h-8 w-8 text-accent mb-4 mx-auto" />
              <h3 className="font-bold text-lg mb-2">Scale</h3>
              <p className="text-primary-foreground/80 text-sm">Growth that compounds daily</p>
            </div>
          </div>

          {/* Quote/Insight */}
          <div className="bg-accent/10 border border-accent/30 rounded-lg p-8 mb-8">
            <blockquote className="text-xl font-medium text-accent mb-4">
              "The difference between a $100K brand and a $10M brand isn't more hustle. 
              It's better systems."
            </blockquote>
            <cite className="text-primary-foreground/70">— Neural Ads Methodology</cite>
          </div>

          {/* CTA */}
          <NeuralButton 
            variant="luxury" 
            size="lg"
            onClick={() => window.open('https://calendly.com/ritishnanchahal-amld/discovery', '_blank')}
          >
            Show Me The Shift
          </NeuralButton>
        </div>
      </div>
    </section>
  );
};

export default ShiftSection;