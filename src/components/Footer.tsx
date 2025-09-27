import { Brain } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-accent" />
            <span className="text-2xl font-bold">Neural Ads</span>
          </div>
          
          {/* Tagline */}
          <p className="text-primary-foreground/80 text-center max-w-md">
            Brain-targeting growth engine for ambitious brands
          </p>
          
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a 
              href="https://creative-win-machine.lovable.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-accent transition-colors"
            >
              High-Converting Creatives
            </a>
            <a 
              href="https://preview--neuroads-casecraft.lovable.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-accent transition-colors"
            >
              Case Studies
            </a>
            <span className="text-primary-foreground/70">
              Privacy Policy (Coming Soon)
            </span>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-primary-foreground/20 pt-6 text-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2025 Neural Ads. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;