"use client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Truck,
  Settings,
  Layers,
  Milestone,
  Home,
  CheckCircle,
  Clock,
} from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export default function Services() {
  const services = [
    {
      title: "Infrastructure Development",
      icon: Milestone,
      desc: "Design and construction of world-class infrastructure projects across transportation, industrial, and civic sectors.",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    },
    {
      title: "Project Management",
      icon: Settings,
      desc: "End-to-end project oversight ensuring timelines, budgets, and execution standards are met with precision.",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    },
    {
      title: "Quality Assurance",
      icon: CheckCircle,
      desc: "Stringent quality control frameworks guaranteeing structural integrity, safety, and regulatory compliance.",
      img: "/services/img/qualityAssurance.png",
    },
    {
      title: "Technical Consultancy",
      icon: Layers,
      desc: "Expert advisory and technical support delivering optimized engineering solutions for complex projects.",
      img: "/services/img/technicalConsultancy.png",
    },
    {
      title: "Sustainability Solutions",
      icon: Home,
      desc: "Environmentally responsible development practices focused on long-term sustainability and impact reduction.",
      img: "/services/img/sustainableSolutions.png",
    },
    {
      title: "Maintenance Services",
      icon: Clock,
      desc: "Comprehensive post-completion maintenance and operational support for long-term infrastructure performance.",
      img: "/services/img/maintainenceServices.png",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative w-full h-[540px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "linear-gradient(rgba(10, 10, 10, 0.4) 0%, rgba(10, 10, 10, 0.95) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuA1AQltLhcT4kMEzn1qT1e05IIdzgIBLx5-RsD-vR8mCLYraaC1dD9loXWZsIYFBB1AzZa4iOGRgRh_z0fj7Tlr2C_-1MHVPobPaitiHQ6zVtY2UIEF0TpXIUY6t2HQ6violUAtW1X-qov-C0u6hmOQtjahlp11yAHr8SgD0XO_gHd6Mk4haQ8QxyX3GCXte8fsLmYEFAGRQFRziS9XHPZ1fpkHxXqUoWv66LzIurQB0jR7It5seDpcVuoVL63HcxSma8J4XsbnZ7Q')",
          }}
        ></div>
        <div className="absolute inset-0 industrial-grid opacity-20"></div>
        <div className="relative w-full max-w-7xl mx-auto px-6 pb-16">
          <div className="max-w-3xl">
            <h1 className="font-display text-6xl lg:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter">
              OUR <br />
              <span className="text-primary">SERVICES</span>
            </h1>
            <p className="text-slate-300 text-lg lg:text-xl font-normal leading-relaxed mb-8 max-w-2xl">
              Delivering world-class infrastructure development, project
              management, quality assurance, and sustainable engineering
              solutions with precision and long-term reliability.
            </p>
            <InteractiveHoverButton
              onClick={() =>
                window.dispatchEvent(new CustomEvent("open-quote-modal"))
              }
              className="
                                      !bg-background-dark
                                      !text-white
                                      border-primary
                                      text-lg
                                      px-8 py-4
                                      font-black
                                      uppercase
                                      tracking-widest
                                      transition-all
                                      duration-300
                                      [&_*]:hover:!text-black
                                    "
            >
              REQUEST QUOTE
            </InteractiveHoverButton>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-background border-y border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Experience", value: "14+ Years", icon: Settings },
              { label: "No Brokers", value: "Own Fleet", icon: Truck },
              {
                label: "Expert Operators",
                value: "Certified",
                icon: CheckCircle,
              },
              { label: "Always Available", value: "Full Support", icon: Clock },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-5 group">
                <item.icon className="text-primary w-12 h-12 transition-transform group-hover:scale-110" />
                <div>
                  <p className="font-display text-2xl font-bold text-foreground">
                    {item.value}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm block mb-4">
                Core Capabilities
              </span>
              <h2 className="font-display text-4xl lg:text-5xl font-black text-foreground leading-tight uppercase">
                Industrial Solutions
              </h2>
            </div>
            <p className="text-slate-500 max-w-sm text-sm uppercase tracking-widest font-bold border-l-2 border-primary pl-6">
              We maintain a diverse inventory of specialized machinery for any
              project scale.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background border border-border rounded-sm p-1 transition-all duration-300 flex flex-col group hover:translate-y-[-8px] hover:border-b-4 hover:border-b-primary"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-sm relative">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    src={service.img}
                    alt={service.title}
                  />
                  <div className="absolute top-4 right-4 bg-background-dark/80 p-2 border border-primary/30">
                    <service.icon className="text-primary w-6 h-6" />
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">
                    {service.desc}
                  </p>
                  <button className="text-primary font-display font-black text-sm tracking-widest flex items-center gap-2 group/btn">
                    LEARN MORE{" "}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Verified(props) {
  return <Settings {...props} />;
}
