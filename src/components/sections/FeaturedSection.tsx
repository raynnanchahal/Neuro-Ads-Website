const FeaturedSection = () => {
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
    <section className="section-spacing bg-background/50 border-y border-border/30">
      <div className="container-flow text-center px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8 sm:mb-12 text-foreground/90">
          Clients Featured In
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
          {featuredIn.map((name, index) => (
            <div
              key={index}
              className="px-4 sm:px-6 py-3 sm:py-4 bg-background/40 border border-border/20 rounded-lg hover:border-flow-cyan/30 transition-all duration-300 backdrop-blur-sm"
            >
              <span className="text-xs sm:text-sm md:text-base font-medium text-foreground/70 whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
