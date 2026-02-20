'use client'

import { motion } from "framer-motion";
import { ArrowRight, Shield, Verified, Clock } from "lucide-react";
import Link  from "next/link";
import TruckScene from "@/components/TruckScene";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden industrial-grid">

  {/* Background Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/80 to-transparent z-10"></div>

  {/* Right Side Image */}
  {/* <div className="absolute right-0 top-0 w-1/2 h-full">
    <div 
      className="w-full h-full bg-cover bg-center opacity-40 lg:opacity-100"
      style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC8xwCaUO6fR3QjV6MngOqisMUqEXghiQopvAvRyvCqpBzGPEYUCYLIkKo0oyfYkVyvFxn3figHQJtgqWX1jT_ZWjIbr60reQTYf95zHdfJzc8aTAM4CmiZaP-ge9PFV6sgmFuRl2cOHK2W5Dsya2aHq-hYIHml_4PlHv4Dx8lqj589M1f3_cbkBzIGeI0FFhaNvLv6W_h6vMs2h9ltQ2PCnKn-oQb81k14DtI3OMjEpKmuhsWM8rvk16zDt_1AELVDpWmHyuSTmYk')" }}
    />
  </div> */}

  <div className="absolute right-0 top-0 w-full h-full">
  <TruckScene />
</div>

  {/* Content Container */}
  <div className="relative z-20 w-full max-w-7xl mx-auto px-6 py-20 flex">

    {/* LEFT SIDE TEXT */}
    <div className="w-full  text-left">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1 mb-6">
          <span className="w-2 h-2 bg-primary animate-pulse"></span>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Est. 1978 • Industry Leaders
          </span>
        </div>

        <h2 className="text-6xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-8">
          45 Years of <span className="text-primary italic">Strength.</span><br/>
          Future-Ready Execution.
        </h2>

        <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-lg font-medium">
          The backbone of major infrastructure. Providing elite heavy logistics,
          excavation, and road construction with half a century of proven reliability.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-primary text-background-dark text-lg font-black uppercase px-10 py-5 rounded-sm hover:scale-[1.02] transition-transform">
            Request Quote
          </button>

          <Link
            href="/about"
            className="bg-surface-dark border border-border-dark text-white text-lg font-black uppercase px-10 py-5 rounded-sm hover:bg-border-dark transition-colors text-center"
          >
            Our Story
          </Link>
        </div>

      </motion.div>
    </div>

  </div>

  <div className="absolute bottom-0 left-0 w-full h-2 bg-primary"></div>

</section>


      {/* Stats Strip */}
      <section className="bg-surface-dark border-b border-border-dark py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Years Experience", value: "45+" },
              { label: "Projects Finished", value: "2,500+" },
              { label: "Machines Owned", value: "150+" },
              { label: "Global Clients", value: "850+" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col border-l-4 border-primary pl-6"
              >
                <span className="text-4xl font-black text-white leading-none">{stat.value}</span>
                <span className="text-xs uppercase tracking-widest text-slate-500 font-bold mt-2">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h3 className="text-primary font-bold uppercase tracking-[0.3em] mb-4">Core Capabilities</h3>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Industrial Solutions</h2>
            </div>
            <p className="max-w-md text-slate-500 font-medium leading-relaxed">
              From large-scale excavation to precision heavy logistics, we deploy specialized equipment and expert operators for mission-critical infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {[
              { title: "Trucks & Trailers", icon: "local_shipping", desc: "High-tonnage hauling solutions for heavy machinery and structural materials across any terrain." },
              { title: "JCB Machines", icon: "precision_manufacturing", desc: "Versatile earthmoving and excavation units maintained to the highest safety and performance standards." },
              { title: "Sand Excavation", icon: "layers", desc: "Large-scale material sourcing and logistics for reclamation and major construction site filling." },
              { title: "Road Construction", icon: "road", desc: "End-to-end infrastructure development including grading, surfacing, and site preparation." },
              { title: "Demolition", icon: "home_repair_service", desc: "Strategic structural removal with high safety protocols for commercial and industrial zones." },
              { title: "Heavy Logistics", icon: "package_2", desc: "Comprehensive machinery transport management including oversized loads and international logistics." },
            ].map((service, i) => (
              <div key={i} className="group bg-surface-dark p-10 border border-border-dark relative overflow-hidden transition-all hover:bg-zinc-900">
                <h4 className="text-xl font-bold uppercase mb-4">{service.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{service.desc}</p>
                <Link href="/services" className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                  View Specs <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantage Section */}
      <section className="py-24 bg-background-dark industrial-grid">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h3 className="text-primary font-bold uppercase tracking-[0.3em] mb-4">Precision Engineered</h3>
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-10 leading-[1.1]">
                The Unfair Advantage In <span className="italic text-slate-700">Infrastructure</span>
              </h2>
              <div className="space-y-8">
                {[
                  { title: "Zero-Accident Protocol", icon: Shield, desc: "Our safety standards exceed OSHA requirements, ensuring projects proceed without costly mechanical or human downtime." },
                  { title: "Certified Yard Ops", icon: Verified, desc: "Every piece of equipment undergoes a 50-point inspection before dispatch to ensure 99.9% uptime." },
                  { title: "Rapid Response Logistics", icon: Clock, desc: "24/7 deployment capabilities. When the site stops, you lose money. We ensure it never stops." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary flex items-center justify-center rounded-sm">
                      <item.icon className="text-background-dark font-bold w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold uppercase mb-2 tracking-tight">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-primary/20 rounded-sm"></div>
              <div className="relative bg-surface-dark border border-border-dark p-2">
                <img 
                  className="w-full h-auto rounded-sm grayscale hover:grayscale-0 transition-all duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpasBF5hetjDwrREL_y7TgJmHrUYWGlRWccM_L-teKvF72Yo9C0wovlme8nj5ii4JeUfigF5AD68zZKtjY3NtN8CXnJzgf0soE_9xqVE-8iDfiB-Ku2LG-Whcyj0lZfx1K1vKBfpdls5N4f_9b0OMvtj-0aV49wK1XHtklw0KC70ubWu5VNibz7Cynf4W3lc_u2pou6hbR_Zfzn5kS-Nib4f7IkhthAp-H2cnavg1CqZ5dOKkjF1UKuNzO0c82q96wAMKdjWIrO8I" 
                  alt="Operator hands on controls"
                />
                <div className="absolute bottom-10 right-10 bg-primary p-8 rounded-sm shadow-2xl">
                  <span className="block text-4xl font-black text-background-dark leading-none">4.9/5</span>
                  <span className="block text-xs uppercase font-black text-background-dark tracking-tighter mt-1">Client Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-background-dark text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
            Ready to move the <span className="bg-background-dark text-primary px-2">Unmovable?</span>
          </h2>
          <p className="text-background-dark/80 text-lg md:text-xl font-bold uppercase mb-10 max-w-2xl mx-auto">
            Partner with Industrial Experts. Join hundreds of global firms that trust us for their most critical operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-quote-modal'))}
              className="bg-background-dark text-white px-10 py-5 font-black uppercase tracking-[0.2em] rounded hover:scale-105 transition-transform flex items-center justify-center gap-3"
            >
              Partner With Us
            </button>
            <button className="border-4 border-background-dark text-background-dark px-10 py-5 font-black uppercase tracking-[0.2em] rounded hover:bg-background-dark hover:text-white transition-all flex items-center justify-center gap-3">
              View Capability
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
