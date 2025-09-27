import { useState } from "react";
import { Menu, X, Crown, Sparkles } from "lucide-react";
import { NeuralButton } from "./ui/neural-button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="p-2 rounded-xl bg-gradient-to-br from-accent to-primary">
              <Crown className="h-7 w-7 text-accent-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-heading font-bold text-foreground">Neural Ads</span>
              <div className="hidden sm:flex items-center">
                <Sparkles className="h-3 w-3 text-accent mr-1" />
                <span className="text-xs text-accent font-medium tracking-wide">Combining Neuroscience with your ads to make them feel stupid saying No to.</span>
              </div>
              <div className="sm:hidden">
                <span className="text-xs text-accent font-medium">Neuroscience + Ads</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="https://creative-win-machine.lovable.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-accent transition-all duration-300 font-body font-medium tracking-wide hover:scale-105"
            >
              High-Converting Creatives
            </a>
            <a 
              href="https://preview--neuroads-casecraft.lovable.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-accent transition-all duration-300 font-body font-medium tracking-wide hover:scale-105"
            >
              Case Studies
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <NeuralButton 
              variant="luxury" 
              size="lg"
              onClick={() => window.open('https://calendly.com/ritishnanchahal-amld/discovery', '_blank')}
            >
              Book Strategy Call
            </NeuralButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-accent transition-colors rounded-lg hover:bg-accent/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden luxury-card mt-4 mb-4 animate-fade-in">
            <div className="px-4 pt-4 pb-6 space-y-4">
              <a 
                href="https://creative-win-machine.lovable.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block px-4 py-3 text-foreground hover:text-accent transition-colors font-body font-medium"
              >
                High-Converting Creatives
              </a>
              <a 
                href="https://preview--neuroads-casecraft.lovable.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block px-4 py-3 text-foreground hover:text-accent transition-colors font-body font-medium"
              >
                Case Studies
              </a>
              <div className="px-4 pt-2">
                <NeuralButton 
                  variant="luxury" 
                  size="lg" 
                  className="w-full"
                  onClick={() => window.open('https://calendly.com/ritishnanchahal-amld/discovery', '_blank')}
                >
                  Book Strategy Call
                </NeuralButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;