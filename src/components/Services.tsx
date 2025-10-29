import { Hammer, PaintBucket, Ruler } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Ruler,
      title: "Drywall Installation",
      description:
        "Professional drywall installation and finishing services for residential and commercial properties. We ensure smooth, flawless walls ready for painting.",
    },
    {
      icon: Hammer,
      title: "Framing",
      description:
        "Expert structural framing for new construction and renovations. Quality craftsmanship using premium materials for long-lasting durability.",
    },
    {
      icon: PaintBucket,
      title: "Professional Painting",
      description:
        "Interior and exterior painting services with meticulous attention to detail. Transform your space with our high-quality finishes and color expertise.",
    },
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive construction solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-secondary p-8 rounded-xl hover-lift shadow-md hover:shadow-card transition-all duration-300 group"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
