"use client"
import { motion } from "framer-motion";
import { ShieldAlert, HardHat, ClipboardCheck, Flame, Zap, Award, ArrowRight } from "lucide-react";

export default function Safety() {
  const protocols = [
    {
      title: "Zero-Harm Initiative",
      icon: ShieldAlert,
      desc: "Our primary objective is the total elimination of workplace injuries. We believe every accident is preventable through rigorous planning and execution.",
    },
    {
      title: "PPE Compliance",
      icon: HardHat,
      desc: "Strict 100% compliance with Personal Protective Equipment standards. No individual enters a yard or site without full certified gear.",
    },
    {
      title: "Daily Safety Briefings",
      icon: ClipboardCheck,
      desc: "Every shift begins with a mandatory 'Toolbox Talk' to identify site-specific hazards and review emergency procedures.",
    },
    {
      title: "Fire & Hazard Control",
      icon: Flame,
      desc: "Advanced fire suppression systems on all heavy machinery and comprehensive chemical management protocols.",
    },
    {
      title: "Electrical Safety",
      icon: Zap,
      desc: "Specialized training for working near high-voltage lines and underground utilities. Precision scanning before every dig.",
    },
    {
      title: "Certified Training",
      icon: Award,
      desc: "All operators must hold current certifications and undergo annual recertification in safety and machine handling.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-background-dark">
        <div className="absolute inset-0 industrial-grid opacity-30"></div>
        <div className="absolute right-0 top-0 w-full h-full opacity-20 lg:opacity-40">
           <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB46GwMquHS2-S_A8DhC60sa1_KJlnOqjKh7kvHpnA9IUGGOON0lOc0SLKTzzb0sh07rNwsO8A1EIoWlri1ozF9rW4SAA2WBbnGavKAKmrjKBdZqBcOYqGmImGzyMQof2oK-27_d2q5GN5wTtYFi1QTjasi1pbE8jkP3oauD-mnInNPlEjBJCq5tx6yiXpTLNEaAisBu4zRhml1RKY572E-SJ2xi7U-dPokRrJT-MX7tp_q6sUOYHWs3ay3tkU-QcF71wUArdXx4aw" 
            alt="Safety Helmet" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 px-3 py-1 mb-6">
              <span className="w-2 h-2 bg-red-600 animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">Safety First • No Compromise</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-8 text-white">
              Operational <br/><span className="text-primary italic">Integrity.</span>
            </h1>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-xl font-medium">
              At IndustrialCore, safety isn't a department—it's our culture. We invest heavily in the protection of our people, our clients, and the environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Protocols Grid */}
      <section className="py-24 bg-surface-dark border-y border-border-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {protocols.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="w-14 h-14 bg-background-dark border border-border-dark flex items-center justify-center mb-6 group-hover:border-primary transition-colors">
                  <p.icon className="text-primary w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold uppercase mb-4 text-white tracking-tight">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-24 bg-background-dark industrial-grid">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-surface-dark border border-border-dark p-12 lg:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 text-white">
                  Industry-Leading <span className="text-primary">Certifications</span>
                </h2>
                <p className="text-slate-400 mb-10 leading-relaxed">
                  We maintain the highest level of accreditation in the industrial sector. Our systems are audited quarterly by independent safety consultants to ensure continuous improvement.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {["ISO 45001", "OSHA Elite", "SafeContractor", "CHAS Premium"].map((cert) => (
                    <div key={cert} className="flex items-center gap-3 text-white font-bold uppercase tracking-widest text-xs">
                      <div className="w-2 h-2 bg-primary"></div>
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-background-dark border border-border-dark flex flex-col items-center justify-center p-8 text-center">
                  <span className="text-4xl font-black text-primary mb-2">0</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">LTIs in 2023</span>
                </div>
                <div className="aspect-square bg-background-dark border border-border-dark flex flex-col items-center justify-center p-8 text-center">
                  <span className="text-4xl font-black text-primary mb-2">100%</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Staff Trained</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-red-600">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-background-dark text-3xl md:text-4xl font-black uppercase tracking-tighter mb-2">
              Emergency Safety Dispatch
            </h2>
            <p className="text-background-dark/80 font-bold uppercase text-sm tracking-widest">
              Available 24/7 for immediate site support and incident management.
            </p>
          </div>
          <a 
            href="tel:+15550123" 
            className="bg-background-dark text-white px-10 py-5 font-black uppercase tracking-widest rounded hover:scale-105 transition-transform flex items-center gap-3"
          >
            Call Dispatch Now <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
