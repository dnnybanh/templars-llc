import { useState } from "react";
import drywallImg1 from "@/assets/portfolio-drywall-1.jpg";
import drywallImg2 from "@/assets/portfolio-drywall-2.jpg";
import framingImg1 from "@/assets/portfolio-framing-1.jpg";
import paintingImg1 from "@/assets/portfolio-painting-1.jpg";
import paintingImg2 from "@/assets/portfolio-painting-2.jpg";

type FilterType = "all" | "drywall" | "framing" | "painting";

interface Project {
  id: number;
  title: string;
  category: FilterType;
  image: string;
}

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "Residential Drywall Installation",
      category: "drywall",
      image: drywallImg1,
    },
    {
      id: 2,
      title: "Commercial Office Drywall",
      category: "drywall",
      image: drywallImg2,
    },
    {
      id: 3,
      title: "Residential Framing Project",
      category: "framing",
      image: framingImg1,
    },
    {
      id: 4,
      title: "Modern Interior Painting",
      category: "painting",
      image: paintingImg1,
    },
    {
      id: 5,
      title: "Exterior House Painting",
      category: "painting",
      image: paintingImg2,
    },
  ];

  const filters: { label: string; value: FilterType }[] = [
    { label: "All Projects", value: "all" },
    { label: "Drywall", value: "drywall" },
    { label: "Framing", value: "framing" },
    { label: "Painting", value: "painting" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Explore our completed projects
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2 rounded-full border-2 font-medium transition-all duration-300 ${
                activeFilter === filter.value
                  ? "bg-primary text-primary-foreground border-primary shadow-md"
                  : "bg-background text-foreground border-primary hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-card transition-all duration-300 hover-scale cursor-pointer aspect-[4/3]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-primary-foreground">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm opacity-90 capitalize mt-1">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
