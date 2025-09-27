import { useState, useEffect } from "react";
import { NeuralButton } from "./ui/neural-button";
import { ChevronUp } from "lucide-react";

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentCTA, setCurrentCTA] = useState("Book My Neural Strategy Call");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show sticky CTA after scrolling past hero section
      setIsVisible(scrollPosition > windowHeight * 0.5);

      // Dynamic CTA text based on scroll position
      const sections = [
        { threshold: windowHeight * 1.5, text: "I'm Done Burning Money" },
        { threshold: windowHeight * 2.5, text: "Show Me The Shift" },
        { threshold: windowHeight * 3.5, text: "Give Me The Stack" },
        { threshold: windowHeight * 4.5, text: "Send Me Case Studies" },
        { threshold: windowHeight * 5.5, text: "Map My Playbook" },
        { threshold: windowHeight * 6.5, text: "Let's Build My Machine" },
      ];

      const currentSection = sections.reverse().find(section => scrollPosition > section.threshold);
      if (currentSection) {
        setCurrentCTA(currentSection.text);
      } else {
        setCurrentCTA("Book My Neural Strategy Call");
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="sticky-cta p-4 animate-slide-up">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-1">
          <NeuralButton 
            variant="sticky" 
            size="lg"
            onClick={() => window.open('https://calendly.com/ritishnanchahal-amld/discovery', '_blank')}
            className="w-full max-w-md mx-auto"
          >
            {currentCTA}
          </NeuralButton>
        </div>
        
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="ml-4 p-2 text-primary-foreground/60 hover:text-accent transition-colors"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default StickyCTA;