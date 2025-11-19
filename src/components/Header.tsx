import { NeuralButton } from "./ui/neural-button";
import neuralLogo from "@/assets/neural-logo.png";

const Header = () => {

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
            
            {/* CTA Button - visible on all screens */}
            <div>
              <NeuralButton variant="neural" size="default" onClick={() => window.open('https://cal.com/ritish-nanchahal/call', '_blank')}>
                LET'S TALK
              </NeuralButton>
            </div>
          </div>
        </div>
      </header>

    </>
  );
};

export default Header;