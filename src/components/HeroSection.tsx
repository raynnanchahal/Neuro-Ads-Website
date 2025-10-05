import { Brain } from "lucide-react";
import { NeuralButton } from "./ui/neural-button";
import { useState } from "react";
import { Input } from "./ui/input";
import { toast } from "@/hooks/use-toast";

const HeroSection = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  const handleVideoAccess = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !email.trim()) {
      toast({
        title: "Please fill in all fields",
        description: "First name and email are required to watch the video.",
        variant: "destructive",
      });
      return;
    }
    if (!email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    setShowVideo(true);
    toast({
      title: "Access granted!",
      description: "Enjoy the breakdown.",
    });
  };

  return (
    <section className="brain-hero-bg relative flex items-center justify-center min-h-screen">
      <div className="container-flow relative z-10 py-20 max-w-6xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="glass-effect border border-flow-cyan/20 rounded-full px-6 py-2.5 animate-fade-in">
            <div className="flex items-center gap-3">
              <Brain className="w-4 h-4 text-flow-cyan" />
              <span className="text-xs font-medium uppercase tracking-wider">NEUROSCIENCE MEETS ADVERTISING</span>
            </div>
          </div>
        </div>
        
        {/* Main headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-center mb-8 leading-tight">
          HELPING D2C BRANDS TO SCALE<br />
          BLEWPAST 8 FIGURES ARR THROUGH<br />
          HARNESSING THE POWER OF<br />
          <span className="text-flow-cyan">NEURAL ADS</span>
        </h1>
        
        {/* Subtext */}
        <div className="text-center mb-16">
          <p className="text-lg md:text-xl mx-auto mb-16 max-w-4xl leading-relaxed text-foreground/90">
            If your ads feel less effective than they used to, it's not your creatives, copy, team — it's the system you're using.
            This short breakdown reveals what's changed in 2025, and how leading brands are adapting.
          </p>

          {/* Video embed with email gate */}
          <div id="video-section" className="max-w-4xl mx-auto mb-16">
            
            {!showVideo ? (
              <div className="relative aspect-video rounded-lg overflow-hidden bg-card/50 border border-border cyber-glow">
                <div className="absolute inset-0 flex items-center justify-center bg-background/95 backdrop-blur-sm">
                  <form onSubmit={handleVideoAccess} className="max-w-md w-full mx-auto px-6 space-y-6">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold mb-3 uppercase tracking-wider">Watch the Breakdown</h3>
                      <p className="text-foreground/70">Enter your details to access the video</p>
                    </div>
                    <div className="space-y-4">
                      <Input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="bg-background/50 border-flow-cyan/30"
                      />
                      <Input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-background/50 border-flow-cyan/30"
                      />
                      <NeuralButton type="submit" variant="flow" size="lg" className="w-full">
                        UNLOCK VIDEO
                      </NeuralButton>
                    </div>
                  </form>
                </div>
              </div>
            ) : (
              <div className="relative aspect-video rounded-lg overflow-hidden bg-card/50 border border-border cyber-glow">
                <iframe
                  src="https://www.loom.com/embed/4d4c3329c3d74c62992cb4972a7bd155?sid=e1e612eb-c1c6-4620-9b82-afd908dd2fd6"
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                  title="Neural Ads Explanation"
                />
              </div>
            )}
          </div>
        </div>
        
        {/* Stats grid */}
        <div className="neural-grid mb-12">
          <div className="stat-display">
            <div className="stat-number">847%</div>
            <div className="stat-label">Average profit increase</div>
          </div>
          <div className="stat-display">
            <div className="stat-number">237</div>
            <div className="stat-label">Elite brands served</div>
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
            onClick={() => document.getElementById('video-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            WATCH BREAKDOWN
          </NeuralButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
