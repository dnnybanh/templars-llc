import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      project: "Residential Renovation",
      rating: 5,
      quote:
        "Templars transformed our home beautifully. The drywall work was flawless, and the team was professional from start to finish. Highly recommend!",
    },
    {
      id: 2,
      name: "Michael Chen",
      project: "Commercial Office Build",
      rating: 5,
      quote:
        "Outstanding framing work on our new office space. The attention to detail and quality of craftsmanship exceeded our expectations. Will definitely use them again.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      project: "Interior Painting",
      rating: 5,
      quote:
        "The painting job was impeccable. They were punctual, clean, and the final result was stunning. Our home has never looked better!",
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Don't just take our word for it
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-secondary p-8 rounded-xl shadow-md hover:shadow-card transition-all duration-300 hover-lift"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground text-lg leading-relaxed italic mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.project}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
