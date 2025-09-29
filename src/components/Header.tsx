import { useState } from "react";
import { Menu, X, Brain, ChevronDown } from "lucide-react";
import { NeuralButton } from "./ui/neural-button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-flow-cyan text-background text-center py-2 text-sm font-medium uppercase tracking-wider">
        READ OUR ANNOUNCEMENT ABOUT THE FUTURE OF FRC
      </div>
      
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
                <div>
                  <div className="font-medium text-sm uppercase tracking-wider">FLOW RESEARCH</div>
                  <div className="font-light text-xs uppercase tracking-wider text-muted-foreground">COLLECTIVE</div>
                </div>
              </div>
            </div>
            
            {/* Desktop navigation */}
            <nav className="hidden lg:flex space-x-12">
              <a href="#trainings" className="text-sm font-medium uppercase tracking-wider hover:text-flow-cyan transition-colors">
                TRAININGS
              </a>
              <a href="#research" className="text-sm font-medium uppercase tracking-wider hover:text-flow-cyan transition-colors">
                RESEARCH
              </a>
              <a href="#about" className="text-sm font-medium uppercase tracking-wider hover:text-flow-cyan transition-colors">
                ABOUT
              </a>
              <a href="#learn" className="text-sm font-medium uppercase tracking-wider hover:text-flow-cyan transition-colors flex items-center gap-1">
                LEARN
                <ChevronDown className="w-3 h-3" />
              </a>
            </nav>
            
            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <NeuralButton variant="neural" size="default">
                TRAIN NOW
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
                href="#trainings" 
                className="text-sm font-medium uppercase tracking-wider hover:text-flow-cyan transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                TRAININGS
              </a>
              <a 
                href="#research" 
                className="text-sm font-medium uppercase tracking-wider hover:text-flow-cyan transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                RESEARCH
              </a>
              <a 
                href="#about" 
                className="text-sm font-medium uppercase tracking-wider hover:text-flow-cyan transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </a>
              <a 
                href="#learn" 
                className="text-sm font-medium uppercase tracking-wider hover:text-flow-cyan transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                LEARN
              </a>
              <div className="pt-4">
                <NeuralButton variant="neural" size="default" className="w-full">
                  TRAIN NOW
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