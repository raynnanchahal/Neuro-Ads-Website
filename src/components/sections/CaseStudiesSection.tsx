import { NeuralButton } from "@/components/ui/neural-button";
import businessIcons from "@/assets/business-icons.jpg";

const CaseStudiesSection = () => {
  return (
    <section className="section-spacing bg-background border-t border-border/50">
      <div className="container-flow text-center">
        <div className="max-w-4xl mx-auto">
          {/* Headline */}
          <h2 className="headline-flow text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 md:mb-12 transition-all duration-500 hover:scale-105">
            We've done this — hundreds of times,
            <span className="block mt-2 text-flow-cyan">predictably.</span>
          </h2>

          <p className="text-lg md:text-xl text-foreground/80 mb-12 md:mb-16 max-w-2xl mx-auto">
            Real brands. Real results. Real predictability.
          </p>

          {/* Blurred Brand Logos */}
          <div className="mb-12 md:mb-16 flex justify-center items-center gap-6 md:gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg overflow-hidden opacity-30 hover:opacity-50 transition-all duration-300 glass-effect"
                style={{
                  backgroundImage: `url(${businessIcons})`,
                  backgroundSize: "cover",
                  backgroundPosition: `${i * 25}% 50%`,
                  filter: "blur(8px) grayscale(100%)",
                }}
              />
            ))}
          </div>

          {/* CTA Button */}
          <NeuralButton
            variant="flow"
            size="lg"
            className="group"
            onClick={() => window.open("https://neuroads-casecraft.lovable.app/", "_blank")}
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
