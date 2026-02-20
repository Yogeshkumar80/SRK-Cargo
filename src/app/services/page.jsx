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

export default function Services() {
  const services = [
    {
      title: "Sand Excavation",
      icon: Layers,
      desc: "High-efficiency extraction and sourcing for agricultural, industrial, and construction grade sand requirements.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxPQDbxDm44WGGq9qM539a-oiw2iL04kplRx4NI_lxthjIWoR0QkIFZqv20Lh3F9t21uUtsOCEZhXNnNwZVKOH7baow8K9EEVDwBMDsE641pLQmGssKSrBn_aIWNs175mFrBTucmkt-mCtY7AJk2b1BGTXv3OwCD7ktutdVFusZxY3A0HwCocowS_tW3_jV96cH8GdG8HtauTd3rrtQJOjjb12zI-qwfzl9cvL8bMaC0jHEatGoqzLmI0-oQdEfGHOOgnfDPCW8dk",
    },
    {
      title: "Land Clearing",
      icon: Settings,
      desc: "Comprehensive site preparation including vegetation removal, mulching, and debris disposal for large-scale development.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVUOZ_LnE1kEqsABNEfrB9pGAZGORYx8S2aO3erCVpKzr9HvkU3_ioEg_M2EgnvwUKQh4zl0PW4MvE-GuJkQ9B2Hw-wG-WHk-79JoOemFBmMQs7Ae6lxd5dwIKSgZ1R-asQanL7frreUhoLElSWr_Ble1MlzdVqKHYmOiY8Yj218yo4Tsb44Eu07amfD_sh4X398t3yrOOZwfVwhE6JMzbyvJf4LIO493NLbmT5tZajCWJ06LZlsCr7yTi53zMFE_PGg8FNMmto7w",
    },
    {
      title: "Deep Trenching",
      icon: Settings,
      desc: "Precision trenching for deep foundations, underground infrastructure, and heavy-duty utility lines.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8A9CdMHZ-_IRCUL_Cl2UXWiI6JI0QzX3uPF9AB-uCwy5wL1LFN_1iIB5he9N8a2gQIu2vY0LcAUvD_qt8qog6ec5Yh_l5b_NQA8ZDni1pmk2anztCnom4prfsgsAxR1HWl95UWojggNsNUDQVxsTOM6Yi5kc333URPSiwUbZpDGcGwXXxD8fVTXzz--wrV4fB1mi9kgTVb3Rr7hzPuLHE4DLjGE66g0bHONSNAYdMPSXFqepwgX2V8HbQa2J5BposdaNS6yo8v_E",
    },
    {
      title: "Precision Grading",
      icon: Milestone,
      desc: "Advanced GPS-guided surface leveling and site preparation for perfect foundations and drainage systems.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBjrkX0YwkdxqvUMMftr0uCZNrvWJXexQNNWGw_3OCy2ROdqzvy14VBvNk7I3-vLUsxJEDQ3bR284ThLSbmrc1Mbeal8wF25KJauF7xTBqDFbzXZZFO7yybWnjycqG57kmGiA5JR5ZQXmdohWYkFSecnYrYiwjrwe00YRr5T1PFKhGbvfEdTReHGdWZnh1c0InMQhkO7-5zDZQjplrtS5QrMM5eRpil2SHe4kLu1ri2gul1k8JfrcLeKUOeW6sHnix8qZkzVCnydo",
    },
    {
      title: "Bulk Hauling",
      icon: Truck,
      desc: "Efficient logistics for massive volume material transport, debris removal, and resource logistics.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0JOmECNn6dqB5yZu51vrlaCP-APvq4bfLCiMFkpZdjvv9TWMyjgPS-o8IGknX8tFLu2Eg-R1dAtmiF5hyHkXQFiA080RDMBsPLIUSC2DA4trHEC5fB-jvafzNkcggicnVfhZnqwOOo-DhC4ZlgoKXvCgQd5MPS9duHmQVDmRQ1P6FbnvVc4ftl2kgOByslZCQyokBB2EKOM_XSu6geh45--QU9uHhHOISGJq1gmqilgWpxw5PHu1V_Udq_AtaSXgHrqpDis9ULq8",
    },
    {
      title: "Demolition",
      icon: Home,
      desc: "Safe structural dismantling and site clearing for redevelopment projects and industrial upgrades.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgcY8k4-N2eyzgM4bTroEc_lfmBKKuUItF1wAGWGcAp4AI7MagT-lR23M2YCggHDzi-kGNL7Ae2pmcGBoXmTiJo2lhAvpuDNNv4Gz1DLIpDDmR_PxnQtOoe8OAkuCj2NN7e79qh38va1AhlM5QJ9fh_8TJr_lxPG0kVCGJKlgCD_BFDWmBVPJFDyGIFjctrrDwf1Nqy0SsenBThEXTMBVfT6qlkS6zNyEwRLWn4cQL2Fog0kYPR1thmElIJGgf-Ugoho4lorrOX-w",
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
              Premium heavy equipment solutions engineered for large-scale
              industrial projects, infrastructure development, and resource
              extraction.
            </p>
            <button
              onClick={() =>
                window.dispatchEvent(new CustomEvent("open-quote-modal"))
              }
              className="bg-primary hover:bg-yellow-500 text-background-dark px-10 py-4 rounded font-display font-black text-lg tracking-wider transition-all uppercase flex items-center gap-3"
            >
              Request Quote <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-surface-dark border-y border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Experience", value: "45+ Years", icon: Settings },
              { label: "No Brokers", value: "Own Fleet", icon: Truck },
              {
                label: "Expert Operators",
                value: "Certified",
                icon: CheckCircle,
              },
              { label: "Always Available", value: "24/7 Support", icon: Clock },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-5 group">
                <item.icon className="text-primary w-12 h-12 transition-transform group-hover:scale-110" />
                <div>
                  <p className="font-display text-2xl font-bold text-white">
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
      <section className="py-24 bg-background-dark relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm block mb-4">
                Core Capabilities
              </span>
              <h2 className="font-display text-4xl lg:text-5xl font-black text-white leading-tight uppercase">
                Industrial Solutions
              </h2>
            </div>
            <p className="text-slate-400 max-w-sm text-sm uppercase tracking-widest font-bold border-l-2 border-primary pl-6">
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
                className="bg-surface-dark border border-white/5 rounded-sm p-1 transition-all duration-300 flex flex-col group hover:translate-y-[-8px] hover:border-b-4 hover:border-b-primary"
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
                  <h3 className="font-display text-2xl font-bold text-white mb-4">
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
