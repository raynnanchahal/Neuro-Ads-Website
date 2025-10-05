import { useState } from "react";
import { Menu, X, Brain, ChevronDown } from "lucide-react";
import { NeuralButton } from "./ui/neural-button";

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
                <div className="w-10 h-10 rounded-full border border-flow-cyan/30 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-flow-cyan" />
                </div>
                <div className="font-bold text-lg uppercase tracking-wider">NEURO ADS</div>
              </div>
            </div>
            
            {/* Desktop navigation */}
            <nav className="hidden lg:flex space-x-12">
              <a href="https://neuroads-casecraft.lovable.app/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium uppercase tracking-wider hover:text-flow-cyan transition-colors">
                CASE STUDIES
              </a>
              <a href="https://creative-win-machine.lovable.app/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium uppercase tracking-wider hover:text-flow-cyan transition-colors">
                HIGH CONVERTING CREATIVES
              </a>
              <a href="https://www.linkedin.com/in/ritish-nach-000801211/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium uppercase tracking-wider hover:text-flow-cyan transition-colors">
                LIFETIME RIDE
              </a>
            </nav>
            
            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <NeuralButton variant="neural" size="default" onClick={() => document.getElementById('video-section')?.scrollIntoView({ behavior: 'smooth' })}>
                WATCH BREAKDOWN
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
              <a 
                href="https://neuroads-casecraft.lovable.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-medium uppercase tracking-wider hover:text-flow-cyan transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                CASE STUDIES
              </a>
              <a 
                href="https://creative-win-machine.lovable.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-medium uppercase tracking-wider hover:text-flow-cyan transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                HIGH CONVERTING CREATIVES
              </a>
              <a 
                href="https://www.linkedin.com/in/ritish-nach-000801211/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-medium uppercase tracking-wider hover:text-flow-cyan transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                LIFETIME RIDE
              </a>
              <div className="pt-4">
                <NeuralButton 
                  variant="neural" 
                  size="default" 
                  className="w-full"
                  onClick={() => {
                    setIsMenuOpen(false);
                    document.getElementById('video-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  WATCH BREAKDOWN
                </NeuralButton>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;