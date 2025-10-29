import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-overlay"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-background mb-6 leading-tight animate-fade-in">
          Professional Construction Services
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-background/90 mb-8 max-w-2xl mx-auto">
          Expert drywall installation, framing, and painting for residential and commercial projects
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="hero"
            size="xl"
            onClick={() => scrollToSection("#contact")}
            className="w-full sm:w-auto"
          >
            Get Free Quote
          </Button>
          <Button
            variant="heroOutline"
            size="xl"
            onClick={() => scrollToSection("#portfolio")}
            className="w-full sm:w-auto"
          >
            View Our Work
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-background rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-background rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
