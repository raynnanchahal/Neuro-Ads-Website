import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NeuralButton } from "./ui/neural-button";
import neuralLogo from "@/assets/neural-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Main header */}
      <header className="glass-effect sticky top-0 z-50 border-b border-border/50">
        <div className="container-flow">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center gap-3">
                <img src={neuralLogo} alt="Neural Ads" className="h-10 w-10 md:h-12 md:w-12" />
                <div className="font-bold text-base sm:text-lg uppercase tracking-wider">NEURO ADS</div>
              </div>
            </div>
            
            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <NeuralButton variant="neural" size="default" onClick={() => window.open('https://cal.com/ritish-nanchahal/call', '_blank')}>
                LET'S TALK
              </NeuralButton>
            </div>
            
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-foreground hover:text-flow-cyan transition-colors p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-background/95 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
          <div className="fixed top-32 left-0 right-0 glass-effect border-b border-border/50 p-6">
            <nav className="flex flex-col space-y-6">
              <NeuralButton 
                variant="neural" 
                size="default" 
                className="w-full"
                onClick={() => {
                  setIsMenuOpen(false);
                  window.open('https://cal.com/ritish-nanchahal/call', '_blank');
                }}
              >
                LET'S TALK
              </NeuralButton>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;