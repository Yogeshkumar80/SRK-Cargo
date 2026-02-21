"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Verified, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Marquee } from "@/components/ui/marquee";
import { NumberTicker } from "@/components/ui/number-ticker";
const heroBgVideo = process.env.NEXT_PUBLIC_HOME_HERO_BG_VIDEO;

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden industrial-grid">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/80 to-transparent z-10"></div>

        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={heroBgVideo} type="video/mp4" />
          </video>
        </div>

        {/* Content Container */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 py-20 flex">
          {/* LEFT SIDE TEXT */}
          <div className="w-full  text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1 mb-6">
                <span className="w-2 h-2 bg-primary animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  Est. 2012 • Industry Leaders
                </span>
              </div>

              <h2 className="text-6xl md:text-5xl font-black uppercase leading-[0.9] tracking-tighter mb-8">
                14 Years of{" "}
                <span className="text-primary italic">Strength.</span>
                <br />
                Future-Ready Execution.
              </h2>

              <p className="text-sm text-slate-400 mb-10 leading-relaxed font-medium">
                The backbone of major infrastructure. Providing elite heavy
                logistics, excavation, and road construction with half a century
                of proven reliability.
              </p>

              <div className="inline-flex flex-col justify-center sm:flex-row gap-4">
                <InteractiveHoverButton
                  className="
                        !bg-background-dark
                        !text-white
                        border-primary
                        text-sm
                        px-7 py-3
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

                <Link href="/about">
                  <InteractiveHoverButton
                    className="
                        !bg-background-dark
                        !text-white
                        border-primary
                        px-7 py-3
                        text-sm
                        font-black
                        uppercase
                        tracking-widest
                        transition-all
                        duration-300
                        [&_*]:hover:!text-black
                      "
                  >
                    Our Story
                  </InteractiveHoverButton>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { label: "Years of Industrial Experience", value: "14+" },
              { label: "Projects Finished", value: "7+" },
              { label: "Dedicated Professionals", value: "650+" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                whileHover={{ scale: 1.03 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col border-l-4 border-primary pl-6"
              >
                <div className="flex items-end">
                  <NumberTicker
                    value={stat.value}
                    className="text-4xl font-bold text-white leading-none"
                  />
                  <span className="text-4xl font-bold text-white leading-none">
                    +
                  </span>
                </div>

                <span className="text-xs uppercase tracking-widest text-slate-500 font-bold mt-2">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Services Section */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="py-24 bg-background-dark"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h3 className="text-primary font-bold uppercase tracking-[0.3em] mb-4">
                Core Capabilities
              </h3>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
                Industrial Solutions
              </h2>
            </div>
            <p className="max-w-md text-slate-500 font-medium leading-relaxed">
              We offer a comprehensive range of services tailored to meet your
              infrastructure needs — from planning and execution to logistics
              and heavy equipment support — ensuring quality, precision, and
              performance at every stage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {[
              {
                title: "Infrastructure Development",
                desc: "Design and construction of world-class infrastructure projects",
              },
              {
                title: "Project Management",
                desc: "End-to-end project oversight and execution",
              },
              {
                title: "Quality Assurance",
                desc: "Stringent quality control measures",
              },
              {
                title: "Technical Consultancy",
                desc: "Expert advice and technical support",
              },
              {
                title: "Sustainability Solutions",
                desc: "Environmentally conscious development",
              },
              {
                title: "Maintenance Services",
                desc: "Long-term maintenance and support",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="group bg-surface-dark p-10 border border-border-dark relative transition-transform duration-300 ease-out hover:bg-zinc-900 hover:scale-105 hover:z-20 m-5"
              >
                <h4 className="text-xl font-bold uppercase mb-4">
                  {service.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <Link
                  href="/services"
                  className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2"
                >
                  View More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="bg-surface-dark border-b border-border-dark py-16"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h3 className="text-2xl md:text-3xl font-black uppercase text-white">
              Our Financial Partners
            </h3>

            <p className="text-slate-500 text-sm mt-3 max-w-xl mx-auto">
              Trusted banking and financial institutions supporting our
              large-scale infrastructure and logistics operations.
            </p>
          </div>

          {/* Partners Grid */}
          <div className="flex justify-between items-center">
            {[
              {
                name: "HDFC Bank",
                logo: "/partners/hdfc.jpg",
                desc: "India's largest private sector bank",
              },
              {
                name: "Axis Bank",
                logo: "/partners/axis.jpg",
                desc: "India's third largest private sector bank",
              },
              {
                name: "ICICI Bank",
                logo: "/partners/icici.jpg",
                desc: "India's second largest private sector bank",
              },
            ].map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 flex flex-col items-center justify-center hover:border-primary transition-all duration-300"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={140}
                  height={60}
                  className="object-contain"
                />
                <div className="uppercase text-lg font-bold mt-6">
                  {partner.name}
                </div>
                <div className=" text-sm mt-1">{partner.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="bg-dark border-b border-border-dark py-16 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-black uppercase text-white">
              Trusted By
            </h3>
            <p className="text-slate-500 text-sm mt-3 max-w-xl mx-auto">
              Proudly partnered with leading infrastructure organizations.
            </p>
          </div>

          {/* Marquee */}
          <Marquee pauseOnHover className="[--duration:40s] ">
            {[
              { name: "NHAI", logo: "/clients/nhai.jfif" },
              { name: "NHIDCL", logo: "/clients/nhidcl.jfif" },
              { name: "MSV", logo: "/clients/msv.jfif" },
              { name: "Bharatmala", logo: "/clients/bharatmala.jfif" },
            ].map((client, i) => (
              <div
                key={i}
                className="mx-12 flex flex-col items-center justify-center group"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={140}
                  height={80}
                />
                <div className="uppercase text-lg font-bold mt-5">
                  {client.name}
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </motion.section>

      {/* Advantage Section */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="py-24 bg-background-dark industrial-grid"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h3 className="text-primary font-bold uppercase tracking-[0.3em] mb-4">
                Building Excellence
              </h3>
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-10 leading-[1.1]">
                Discover Our Journey of{" "}
                <span className="italic text-slate-700">
                  Innovation and Growth
                </span>
              </h2>
              <div className="space-y-8">
                {[
                  {
                    title: "Innovation",
                    icon: Shield,
                    desc: "We embrace new technologies and creative solutions to continuously improve our processes and deliver exceptional results.",
                  },
                  {
                    title: "Our Vision",
                    icon: Verified,
                    desc: "To be the leading infrastructure development company in India, known for excellence, innovation, and sustainable growth.",
                  },
                  {
                    title: "Our Mission",
                    icon: Clock,
                    desc: "24/7 deployment capabilities. When the site stops, you lose money. We ensure it never stops.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary flex items-center justify-center rounded-sm">
                      <item.icon className="text-background-dark font-bold w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold uppercase mb-2 tracking-tight">
                        {item.title}
                      </h4>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {item.desc}
                      </p>
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
                  <span className="block text-4xl font-black text-background-dark leading-none">
                    4.9/5
                  </span>
                  <span className="block text-xs uppercase font-black text-background-dark tracking-tighter mt-1">
                    Client Satisfaction
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-primary py-20"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-background-dark text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
            Ready to move the{" "}
            <span className="bg-background-dark text-primary px-2">
              Unmovable?
            </span>
          </h2>
          <p className="text-background-dark/80 text-lg md:text-xl font-bold uppercase mb-10 max-w-2xl mx-auto">
            Partner with Industrial Experts. Join the group of clients that
            trust us for their most critical operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() =>
                window.dispatchEvent(new CustomEvent("open-quote-modal"))
              }
              className="bg-background-dark text-white px-10 py-5 font-black uppercase tracking-[0.2em] rounded hover:scale-105 transition-transform flex items-center justify-center gap-3"
            >
              Partner With Us
            </button>
            <button className="border-4 border-background-dark text-background-dark px-10 py-5 font-black uppercase tracking-[0.2em] rounded hover:bg-background-dark hover:text-white transition-all flex items-center justify-center gap-3">
              View Capability
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
