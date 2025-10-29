const About = () => {
  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <section id="about" className="section-padding bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Why Choose Templars?
            </h2>
            <div className="space-y-4 text-lg leading-relaxed opacity-90">
              <p>
                With over 15 years of experience in the construction industry, we've built a
                reputation for excellence, reliability, and outstanding craftsmanship.
              </p>
              <p>
                Our team of skilled professionals is dedicated to delivering superior results on
                every project, whether it's a small residential renovation or a large commercial
                build.
              </p>
              <p>
                We use only premium materials and the latest techniques to ensure your project is
                completed to the highest standards, on time and within budget.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-primary-foreground/10 rounded-xl backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
