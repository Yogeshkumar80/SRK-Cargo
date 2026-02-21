"use client";
import { useState } from "react";
import { ArrowRight, MapPin, Calendar } from "lucide-react";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      title: "National Highway Expansion",
      location: "Gujarat, India",
      year: "2023",
      status: "completed",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1400",
    },
    {
      title: "Industrial Warehouse Complex",
      location: "Maharashtra, India",
      year: "2024",
      status: "ongoing",
      image: "services/img/qualityAssurance.png",
    },
    {
      title: "Urban Infrastructure Development",
      location: "Rajasthan, India",
      year: "2022",
      status: "completed",
      image:
        "https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=1400",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.status === activeFilter);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full overflow-hidden bg-neutral-900">
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600"
          className="w-full h-full object-cover opacity-50"
          alt="Projects"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-background-dark/40" />
        <div className="absolute bottom-16 left-0 w-full">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-5xl md:text-7xl font-black uppercase italic text-white">
              Our <span className="text-primary">Projects</span>
            </h1>
            <p className="text-slate-300 mt-4 max-w-2xl">
              Delivering infrastructure excellence across multiple states with
              precision, scale, and engineering expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 border-b border-neutral-800 bg-background">
        <div className="max-w-7xl mx-auto px-6 flex gap-4 flex-wrap">
          {["all", "completed", "ongoing"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 text-xs font-bold uppercase tracking-widest border rounded transition-all ${
                activeFilter === filter
                  ? "bg-primary text-background-dark border-primary"
                  : "border-neutral-700 text-slate-400 hover:border-primary hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredProjects.map((project, i) => (
              <div
                key={i}
                className="group border border-neutral-700 rounded overflow-hidden hover:border-primary transition-colors"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                <div className="p-6">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded ${
                      project.status === "completed"
                        ? "bg-green-600/20 text-green-400"
                        : "bg-yellow-600/20 text-yellow-400"
                    }`}
                  >
                    {project.status}
                  </span>

                  <h3 className="text-foreground font-bold uppercase italic mt-4">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-4 mt-4 text-slate-400 text-sm">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-primary" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-primary" />
                      {project.year}
                    </div>
                  </div>

                  <button className="mt-6 text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                    View Details <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
