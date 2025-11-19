import neuralLogo from "@/assets/neural-logo.png";
import { Linkedin, Mail, MessageCircle, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/20 bg-background py-16">
      <div className="container-flow max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={neuralLogo} alt="Neural Ads" className="h-8 w-8" />
              <span className="text-xl font-bold tracking-wide">Neural Ads</span>
            </div>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Brain-targeting growth engine for ambitious brands
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground/90 tracking-wide">Resources</h3>
            <div className="flex flex-col space-y-3 text-sm">
              <a 
                href="https://neuroads-casecraft.lovable.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-flow-cyan transition-colors"
              >
                Case Studies
              </a>
              <span className="text-foreground/50 cursor-not-allowed">
                We are Hiring (Coming Soon)
              </span>
            </div>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground/90 tracking-wide">Contact</h3>
            <div className="flex flex-col space-y-3 text-sm">
              <a 
                href="mailto:founder@neuroads.agency"
                className="flex items-center gap-2 text-foreground/60 hover:text-flow-cyan transition-colors"
              >
                <Mail className="w-4 h-4" />
                founder@neuroads.agency
              </a>
              <a 
                href="https://wa.me/919878944263"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/60 hover:text-flow-cyan transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Chat with an expert
              </a>
              <div className="flex items-center gap-2 text-foreground/60">
                <MapPin className="w-4 h-4" />
                Sushant Lok, Gurugram
              </div>
            </div>
          </div>
          
          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground/90 tracking-wide">Connect</h3>
            <div className="flex flex-col space-y-3 text-sm">
              <a 
                href="https://www.linkedin.com/company/neuro-ads"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/60 hover:text-flow-cyan transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        {/* Legal & Disclaimers */}
        <div className="border-t border-border/20 pt-8 space-y-6">
          <div className="flex flex-wrap justify-center gap-3 text-xs">
            <span className="text-foreground/50 hover:text-foreground/70 cursor-not-allowed transition-colors">Privacy Policy</span>
            <span className="text-foreground/30">•</span>
            <span className="text-foreground/50 hover:text-foreground/70 cursor-not-allowed transition-colors">Terms & Conditions</span>
            <span className="text-foreground/30">•</span>
            <span className="text-foreground/50 hover:text-foreground/70 cursor-not-allowed transition-colors">GDPR</span>
            <span className="text-foreground/30">•</span>
            <span className="text-foreground/50 hover:text-foreground/70 cursor-not-allowed transition-colors">Earning Disclaimer</span>
            <span className="text-foreground/30">•</span>
            <span className="text-foreground/50 hover:text-foreground/70 cursor-not-allowed transition-colors">Refunds & Cancellation</span>
          </div>
          
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-foreground/40 text-xs leading-relaxed">
              This site is not part of the Facebook website or Facebook Inc. Additionally, this site is not endorsed by Facebook in any way. 
              Facebook is a trademark of Facebook, Inc.
            </p>
          </div>
          
          {/* Copyright */}
          <div className="text-center">
            <p className="text-foreground/50 text-xs tracking-wide">
              © 2025 Neural Ads. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
