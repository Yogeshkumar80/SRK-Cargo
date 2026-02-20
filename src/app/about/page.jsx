"use client"
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
            backgroundImage: "linear-gradient(to bottom, rgba(26,24,20,0.4), rgba(26,24,20,0.9)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBcTUgo96G8WtSazZQciuPU0Th4uGThK_2KrlO084U1i-CmSGO3BdcU-se1e4qzQ_Tfx5QPC_bKvrFKWh89YG39MEuR2dqHWxyq5NG6bMs5imHIq9wCPzNZblrNFMVyNi7PQm3kRsOjDx5xhHiy05vakA7MpSor-OEfEVmvvfWIDyV0UykTjkFEesPuBh0Mfj0zSfVY31ids2MgX2dWdPz0m-Xr5JnSHOtF3cmg7E3Nc5HHQ8RP5EtzO0dSh_3wQ68wFh4O1u8sf54')" 
          }}
        ></div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-primary text-background-dark px-3 py-1 text-xs font-black uppercase tracking-[0.2em] mb-6"
          >
            Established 1978
          </motion.div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-6">
            Building the <span className="text-primary">Future</span> since 1978
          </h1>
          <p className="text-lg md:text-xl font-medium text-slate-300 max-w-2xl mx-auto border-l-4 border-primary pl-6">
            45+ Years of Industrial Excellence, Heavy Transport Solutions, and Unwavering Commitment to Infrastructure.
          </p>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 industrial-grid">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-primary text-sm font-black uppercase tracking-[0.3em] mb-2">Our Legacy</h2>
              <h3 className="text-4xl md:text-5xl font-black uppercase text-white">A 45-Year Journey</h3>
            </div>
            <div className="h-1 w-24 bg-primary hidden md:block mb-4"></div>
          </div>
          
          <div className="relative border-l-2 border-border-dark ml-4 md:ml-0 md:grid md:grid-cols-2 md:border-l-0">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border-dark hidden md:block"></div>
            
            {[
              { year: "1978", title: "The First Machine", desc: "Founded with a single second-hand excavator and a vision to transform local earthmoving services.", side: "left" },
              { year: "1995", title: "Fleet Expansion", desc: "Rapid growth led to a fleet of 100+ heavy units, expanding operations across state lines.", side: "right" },
              { year: "2010", title: "ISO Certification", desc: "Achieved global standards in safety and management, establishing our Zero-Accident Protocol.", side: "left" },
              { year: "Today", title: "Global Leader", desc: "Now operating in 20+ countries with the most advanced specialized transport fleet in the industry.", side: "right" },
            ].map((item, i) => (
              <div key={i} className={`relative pb-12 ${item.side === 'left' ? 'md:pr-16 md:text-right' : 'md:pl-16 md:col-start-2'}`}>
                <div className={`absolute -left-[9px] ${item.side === 'left' ? 'md:left-auto md:-right-[11px]' : 'md:-left-[11px]'} top-0 size-4 bg-primary rounded-full border-4 border-background-dark z-10`}></div>
                <span className="block text-primary font-black text-2xl mb-2">{item.year}</span>
                <h4 className="text-xl font-bold uppercase mb-2 text-white">{item.title}</h4>
                <p className="text-slate-400 max-w-md mx-auto md:mx-0">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-surface-dark border-y-4 border-primary/20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <div className="size-16 bg-primary/10 flex items-center justify-center rounded">
              <Rocket className="text-primary w-10 h-10" />
            </div>
            <h3 className="text-3xl font-black uppercase tracking-tight text-white">Our Mission</h3>
            <p className="text-2xl font-light text-slate-300 leading-relaxed italic">
              "To empower global infrastructure through precision engineering, heavy logistics mastery, and an unyielding commitment to operational safety."
            </p>
          </div>
          <div className="space-y-6">
            <div className="size-16 bg-primary/10 flex items-center justify-center rounded">
              <Eye className="text-primary w-10 h-10" />
            </div>
            <h3 className="text-3xl font-black uppercase tracking-tight text-white">Our Vision</h3>
            <p className="text-2xl font-light text-slate-300 leading-relaxed italic">
              "To be the definitive backbone of heavy industry, recognized worldwide for setting the benchmark in reliability and technological innovation."
            </p>
          </div>
        </div>
      </section>


      {/* Leadership */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded border-2 border-primary p-2">
                <div 
                  className="w-full h-full bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-500" 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB46GwMquHS2-S_A8DhC60sa1_KJlnOqjKh7kvHpnA9IUGGOON0lOc0SLKTzzb0sh07rNwsO8A1EIoWlri1ozF9rW4SAA2WBbnGavKAKmrjKBdZqBcOYqGmImGzyMQof2oK-27_d2q5GN5wTtYFi1QTjasi1pbE8jkP3oauD-mnInNPlEjBJCq5tx6yiXpTLNEaAisBu4zRhml1RKY572E-SJ2xi7U-dPokRrJT-MX7tp_q6sUOYHWs3ay3tkU-QcF71wUArdXx4aw')" }}
                ></div>
                <div className="absolute -bottom-6 -right-6 bg-primary text-background-dark p-6 hidden md:block">
                  <Quote className="w-10 h-10" />
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 lg:pl-12">
              <h2 className="text-primary text-sm font-black uppercase tracking-[0.3em] mb-2">Our Founder</h2>
              <h3 className="text-4xl font-black uppercase mb-6 text-white">Arthur J. Sterling</h3>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                "Industrial progress isn't just about the size of the machines; it's about the integrity of the people operating them. When we started in 1978, we had nothing but a dream and a single excavator. Today, we move mountains, but our core values remain as solid as the steel we work with."
              </p>
              <div className="flex items-center gap-4 border-t border-border-dark pt-8">
                <div>
                  <p className="font-bold uppercase tracking-widest text-primary">Chief Executive Officer</p>
                  <p className="text-xs text-slate-500 uppercase tracking-tighter">Founder & Managing Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
