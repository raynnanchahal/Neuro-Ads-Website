import { CheckCircle } from "lucide-react";

const PartnersSection = () => {
  const partners = [
    "Official Meta Marketing Partners",
    "Shopify Partners",
    "TikTok Creator Agency Partner",
    "Klaviyo Partner",
    "Google Certified",
    "Advertising Week NY",
    "Trustpilot Verified"
  ];

  return (
    <section className="section-spacing bg-background border-y border-border/30">
      <div className="container-flow text-center px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-foreground">
          You are in good company
        </h2>
        
        <p className="text-base sm:text-lg text-foreground/70 mb-10 sm:mb-12 max-w-2xl mx-auto">
          Trusted partnerships with industry-leading platforms
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-4 sm:px-6 py-4 sm:py-5 bg-background/60 border border-border/30 rounded-lg hover:border-flow-cyan/40 hover:bg-background/80 transition-all duration-300 backdrop-blur-sm group"
            >
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-flow-cyan flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span className="text-sm sm:text-base font-medium text-foreground/80 text-left">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
