import { Eye, TrendingUp, Users, Zap } from "lucide-react";
import { NeuralButton } from "../ui/neural-button";

const DiscoverySection = () => {
  return (
    <section className="section-spacing bg-background border-t border-border/50">
      <div className="container-flow">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6">
              WHAT YOU'LL DISCOVER <span className="text-flow-cyan">INSIDE</span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              In this 14-minute video, you'll uncover:
            </p>
          </div>

          {/* Discovery Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="flow-card p-8">
              <Eye className="w-12 h-12 text-flow-cyan mb-4" />
              <h3 className="text-xl font-bold uppercase tracking-wider mb-3">INVISIBLE FACTORS LIMITING YOUR AD PERFORMANCE</h3>
              <p className="text-foreground/70 leading-relaxed">
                Two hidden forces are quietly capping growth. More creatives or media buyers won't fix them.
              </p>
            </div>

            <div className="flow-card p-8">
              <TrendingUp className="w-12 h-12 text-flow-cyan mb-4" />
              <h3 className="text-xl font-bold uppercase tracking-wider mb-3">WHY TRADITIONAL AD FRAMEWORKS ARE COLLAPSING</h3>
              <p className="text-foreground/70 leading-relaxed">
                Discover why the old playbooks stopped working in 2025 and what replaced them.
              </p>
            </div>

            <div className="flow-card p-8">
              <Zap className="w-12 h-12 text-flow-cyan mb-4" />
              <h3 className="text-xl font-bold uppercase tracking-wider mb-3">2 ALLIES TO FIX THEM ONCE AND FOR ALL</h3>
              <p className="text-foreground/70 leading-relaxed">
                The exact system to blow past 7 Figure+ Monthly with predictable results.
              </p>
            </div>

            <div className="flow-card p-8">
              <Users className="w-12 h-12 text-flow-cyan mb-4" />
              <h3 className="text-xl font-bold uppercase tracking-wider mb-3">THE 230+ BRAND SECRET</h3>
              <p className="text-foreground/70 leading-relaxed">
                How elite brands maintain 50%+ margins and stable 7–8 figure growth.
              </p>
            </div>
          </div>

          {/* Step 1 */}
          <div className="glass-effect border border-flow-cyan/30 rounded-lg p-10 mb-8">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-flow-cyan/20 flex items-center justify-center">
                  <span className="text-3xl font-bold text-flow-cyan">1</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold uppercase tracking-wider mb-4">SEE THE LEVERAGE</h3>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  Extract more from your current ads — without chaos or wasted spend.
                </p>
                <NeuralButton 
                  variant="flow" 
                  size="lg"
                  onClick={() => document.getElementById('video-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  👉 WATCH THE VIDEO
                </NeuralButton>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="glass-effect border border-flow-cyan/30 rounded-lg p-10 mb-16">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-flow-cyan/20 flex items-center justify-center">
                  <span className="text-3xl font-bold text-flow-cyan">2</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold uppercase tracking-wider mb-4">MOVE FASTER, INTENTIONALLY</h3>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  If it clicks, apply to work with us. We only partner with founders serious about predictable, profitable scaling.
                </p>
                <NeuralButton 
                  variant="neural" 
                  size="lg"
                  onClick={() => window.open('https://calendly.com/ritishnanchahal-amld/discovery', '_blank')}
                >
                  APPLY NOW →
                </NeuralButton>
              </div>
            </div>
          </div>

          {/* Proof Section */}
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-8">
              PROVEN, <span className="text-flow-cyan">NOT PROMISED</span>
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
              <div className="flow-card p-6">
                <div className="text-4xl font-bold text-flow-cyan mb-2">2+</div>
                <div className="text-sm uppercase tracking-wider text-foreground/70">Years Client Retention</div>
                <div className="text-xs text-foreground/50 mt-2">(Industry avg: 5 months)</div>
              </div>
              
              <div className="flow-card p-6">
                <div className="text-4xl font-bold text-flow-cyan mb-2">94%</div>
                <div className="text-sm uppercase tracking-wider text-foreground/70">Success Rate</div>
                <div className="text-xs text-foreground/50 mt-2">(Industry avg: 40%)</div>
              </div>

              <div className="flow-card p-6 col-span-2 md:col-span-1">
                <div className="text-4xl font-bold text-flow-cyan mb-2">230+</div>
                <div className="text-sm uppercase tracking-wider text-foreground/70">Brands Served</div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="flow-card p-6">
                <div className="text-3xl font-bold text-flow-cyan mb-2">$15M+</div>
                <div className="text-sm uppercase tracking-wider text-foreground/70">Ad Spend Managed</div>
              </div>
              
              <div className="flow-card p-6">
                <div className="text-3xl font-bold text-flow-cyan mb-2">$100M+</div>
                <div className="text-sm uppercase tracking-wider text-foreground/70">Revenue Generated</div>
              </div>
              
              <div className="flow-card p-6">
                <div className="text-3xl font-bold text-flow-cyan mb-2">4.5x+</div>
                <div className="text-sm uppercase tracking-wider text-foreground/70">Lifetime ROAS</div>
              </div>
            </div>

            <p className="text-2xl font-bold uppercase tracking-wider mb-8">
              Scaling as a <span className="text-flow-cyan">science</span>, not luck.
            </p>

            <NeuralButton 
              variant="flow" 
              size="lg"
              onClick={() => window.open('https://calendly.com/ritishnanchahal-amld/discovery', '_blank')}
            >
              APPLY NOW →
            </NeuralButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverySection;
