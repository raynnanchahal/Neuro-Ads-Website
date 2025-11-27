import { NeuralButton } from "@/components/ui/neural-button";
import businessIcons from "@/assets/business-icons.jpg";

const CaseStudiesSection = () => {
  const featuredIn = [
    "Shark Tank",
    "Forbes",
    "Lovemint",
    "Wall Street Journal",
    "Vogue",
    "Town and Country",
    "Glossy",
    "Oscars 2023",
    "Lakme Fashion Week"
  ];

  return (
    <section className="section-spacing bg-background border-t border-border/50">
      <div className="container-flow text-center px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Headline */}
          <h2 className="headline-flow text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 sm:mb-8 md:mb-12 transition-all duration-500 hover:scale-105">
            We've done this — hundreds of times,
            <span className="block mt-2 text-flow-cyan">predictably.</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-10 sm:mb-12 md:mb-14 max-w-2xl mx-auto px-4">
            Real brands. Real results. Real predictability.
          </p>

          {/* Blurred Brand Logos */}
          <div className="mb-10 sm:mb-12 md:mb-14 flex justify-center items-center gap-4 sm:gap-6 md:gap-8 px-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-lg overflow-hidden opacity-30 hover:opacity-50 transition-all duration-300 glass-effect"
                style={{
                  backgroundImage: `url(${businessIcons})`,
                  backgroundSize: "cover",
                  backgroundPosition: `${i * 25}% 50%`,
                  filter: "blur(8px) grayscale(100%)",
                }}
              />
            ))}
          </div>

          {/* Featured In */}
          <div className="mb-12 sm:mb-14 md:mb-16">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-6 sm:mb-8 text-foreground/70 uppercase tracking-wider">
              Clients Featured In
            </h3>
            
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-5">
              {featuredIn.map((name, index) => (
                <div
                  key={index}
                  className="px-3 sm:px-5 py-2 sm:py-3 bg-background/40 border border-border/20 rounded-lg hover:border-flow-cyan/30 transition-all duration-300 backdrop-blur-sm"
                >
                  <span className="text-xs sm:text-sm font-medium text-foreground/60 whitespace-nowrap">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <NeuralButton
            variant="flow"
            size="lg"
            className="group w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8"
            onClick={() => window.open("https://clients.neuroads.agency", "_blank")}
          >
            Check Case Studies
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
          </NeuralButton>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
