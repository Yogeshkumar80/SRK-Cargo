"use client";
import { motion } from "framer-motion";
import { Rocket, Eye, Quote } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(26,24,20,0.4), rgba(26,24,20,0.9)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBcTUgo96G8WtSazZQciuPU0Th4uGThK_2KrlO084U1i-CmSGO3BdcU-se1e4qzQ_Tfx5QPC_bKvrFKWh89YG39MEuR2dqHWxyq5NG6bMs5imHIq9wCPzNZblrNFMVyNi7PQm3kRsOjDx5xhHiy05vakA7MpSor-OEfEVmvvfWIDyV0UykTjkFEesPuBh0Mfj0zSfVY31ids2MgX2dWdPz0m-Xr5JnSHOtF3cmg7E3Nc5HHQ8RP5EtzO0dSh_3wQ68wFh4O1u8sf54')",
          }}
        ></div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-primary text-background-dark px-3 py-1 text-xs font-black uppercase tracking-[0.2em] mb-6"
          >
            Established 2012
          </motion.div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-6">
            Building the <span className="text-primary">Future</span> since 2012
          </h1>
          <p className="text-lg md:text-xl font-medium text-slate-300 max-w-2xl mx-auto border-l-4 border-primary pl-6">
            14+ Years of Industrial Excellence, Heavy Transport Solutions, and
            Unwavering Commitment to Infrastructure.
          </p>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 industrial-grid">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-primary text-sm font-black uppercase tracking-[0.3em] mb-2">
                Our Legacy
              </h2>
              <h3 className="text-4xl text-foreground md:text-5xl font-black uppercase">
                A 14-Year Journey
              </h3>
            </div>
            <div className="h-1 w-24 bg-primary hidden md:block mb-4"></div>
          </div>

          <div className="relative border-l-2 border-border-dark ml-4 md:ml-0 md:grid md:grid-cols-2 md:border-l-0">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border-dark hidden md:block"></div>

            {[
              {
                year: "2004",
                title: "Establishment",
                desc: "Established as JEET Buildcon Pvt. Ltd.",
                side: "left",
              },
              {
                year: "2014",
                title: "Transformation",
                desc: "Transformed into JEET Asia Private Limited, marking a new era of growth and expanded vision.",
                side: "right",
              },
              {
                year: "2023",
                title: "Multi-State Expansion",
                desc: "Expanded operations across multiple states, strengthening our presence and project capabilities.",
                side: "left",
              },
              {
                year: "Today",
                title: "Continuing Growth",
                desc: "Continuing to deliver excellence in infrastructure, construction, and large-scale project execution.",
                side: "right",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`relative pb-12 ${item.side === "left" ? "md:pr-16 md:text-right" : "md:pl-16 md:col-start-2"}`}
              >
                <div
                  className={`absolute -left-[9px] ${item.side === "left" ? "md:left-auto md:-right-[11px]" : "md:-left-[11px]"} top-0 size-4 bg-primary rounded-full border-4 border-background-dark z-10`}
                ></div>
                <span className="block text-primary font-black text-2xl mb-2">
                  {item.year}
                </span>
                <h4 className="text-xl font-bold uppercase mb-2 text-foreground">
                  {item.title}
                </h4>
                <p className="text-slate-400 max-w-md mx-auto md:mx-0">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-card border-y-4 border-primary/20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <div className="size-16 bg-primary/10 flex items-center justify-center rounded">
              <Rocket className="text-primary w-10 h-10" />
            </div>
            <h3 className="text-3xl font-black uppercase tracking-tight text-foreground">
              Our Mission
            </h3>
            <p className="text-2xl font-light text-slate-500 leading-relaxed italic ">
              "To deliver high-quality infrastructure solutions that create
              value for our clients, communities, and stakeholders while
              maintaining environmental responsibility."
            </p>
          </div>
          <div className="space-y-6">
            <div className="size-16 bg-primary/10 flex items-center justify-center rounded">
              <Eye className="text-primary w-10 h-10" />
            </div>
            <h3 className="text-3xl font-black uppercase tracking-tight text-foreground">
              Our Vision
            </h3>
            <p className="text-2xl font-light text-slate-500 leading-relaxed italic">
              "To be the leading infrastructure development company in India,
              known for excellence, innovation, and sustainable growth."
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded border-2 border-primary p-2">
                <div
                  className="w-full h-full bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-500"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB46GwMquHS2-S_A8DhC60sa1_KJlnOqjKh7kvHpnA9IUGGOON0lOc0SLKTzzb0sh07rNwsO8A1EIoWlri1ozF9rW4SAA2WBbnGavKAKmrjKBdZqBcOYqGmImGzyMQof2oK-27_d2q5GN5wTtYFi1QTjasi1pbE8jkP3oauD-mnInNPlEjBJCq5tx6yiXpTLNEaAisBu4zRhml1RKY572E-SJ2xi7U-dPokRrJT-MX7tp_q6sUOYHWs3ay3tkU-QcF71wUArdXx4aw')",
                  }}
                ></div>
                <div className="absolute -bottom-6 -right-6 bg-primary text-background-dark p-6 hidden md:block">
                  <Quote className="w-10 h-10" />
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 lg:pl-12">
              <h2 className="text-primary text-sm font-black uppercase tracking-[0.3em] mb-2">
                Director
              </h2>
              <h3 className="text-4xl font-black uppercase mb-6 text-foreground">
                Mr. Ramphal
              </h3>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                "Mr. Ramphal brings technical expertise and strategic vision to
                the company, overseeing project execution and quality standards
                across all our infrastructure developments."
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 lg:pl-12">
              <h2 className="text-primary text-sm font-black uppercase tracking-[0.3em] mb-2">
                Managing Director
              </h2>
              <h3 className="text-4xl font-black uppercase mb-6 text-foreground">
                Mr. Krishan Singh
              </h3>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                "With over 15 years of experience in the infrastructure sector,
                Mr. Singh has been instrumental in the growth and expansion of
                JEET Asia Private Limited."
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded border-2 border-primary p-2">
                <div
                  className="w-full h-full bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-500"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB46GwMquHS2-S_A8DhC60sa1_KJlnOqjKh7kvHpnA9IUGGOON0lOc0SLKTzzb0sh07rNwsO8A1EIoWlri1ozF9rW4SAA2WBbnGavKAKmrjKBdZqBcOYqGmImGzyMQof2oK-27_d2q5GN5wTtYFi1QTjasi1pbE8jkP3oauD-mnInNPlEjBJCq5tx6yiXpTLNEaAisBu4zRhml1RKY572E-SJ2xi7U-dPokRrJT-MX7tp_q6sUOYHWs3ay3tkU-QcF71wUArdXx4aw')",
                  }}
                ></div>
                <div className="absolute -bottom-6 -right-6 bg-primary text-background-dark p-6 hidden md:block">
                  <Quote className="w-10 h-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
