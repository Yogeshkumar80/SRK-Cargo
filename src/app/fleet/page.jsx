"use client";
import { Truck, Construction, MapPin, ShieldCheck, Wrench } from "lucide-react";

export default function Fleet() {
  const fleetStats = [
    { title: "JCB Excavators", count: "30+", icon: Construction },
    { title: "Heavy Trucks", count: "50+", icon: Truck },
    { title: "Support Vehicles", count: "25+", icon: Wrench },
    { title: "Active Sites", count: "15+", icon: MapPin },
  ];

  const vehicles = [
    {
      name: "JCB Excavators",
      desc: "High-performance earthmoving machines for excavation and large-scale infrastructure projects.",
      img: "vehicles/img/jcb.png",
    },
    {
      name: "Tippers & Dump Trucks",
      desc: "Heavy-duty trucks for transporting construction materials efficiently across project sites.",
      img: "vehicles/img/tripper.png",
    },
    {
      name: "Concrete Mixers",
      desc: "Reliable transit mixers ensuring continuous and high-quality concrete supply.",
      img: "vehicles/img/concretemixer.png",
    },
    {
      name: "Cranes",
      desc: "Hydraulic cranes for lifting heavy materials and structural components safely.",
      img: "vehicles/img/crane.png",
    },
    {
      name: "Road Rollers",
      desc: "Advanced compaction equipment for road and highway construction projects.",
      img: "vehicles/img/roadroller.png",
    },
    {
      name: "Bulldozers",
      desc: "Powerful dozers designed for grading, land clearing, and heavy earthmoving operations.",
      img: "vehicles/img/bulldozer.png",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden bg-neutral-900">
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="vehicles/vid/vehicles.mp4" type="video/mp4" />
          </video>

          {/* Black Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/60"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-background-dark/40" />
        <div className="absolute bottom-16 left-0 w-full">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-5xl md:text-7xl font-black uppercase italic text-white">
              Our <span className="text-primary">Fleet Strength</span>
            </h1>
            <p className="text-slate-300 mt-4 max-w-2xl">
              Equipped with a powerful fleet of heavy machinery and transport
              vehicles to execute large-scale infrastructure projects
              efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Fleet Stats */}
      <section className="py-20 bg-background-dark border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {fleetStats.map((item, i) => (
            <div
              key={i}
              className="p-6 bg-neutral-800 border border-neutral-700 rounded"
            >
              <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-3xl font-black text-white">{item.count}</h3>
              <p className="text-slate-400 text-sm uppercase tracking-widest mt-2">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Vehicles Grid */}
      <section className="py-24 bg-background-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vehicles.map((vehicle, i) => (
              <div
                key={i}
                className="group bg-neutral-800 border border-neutral-700 rounded overflow-hidden hover:border-primary transition-colors"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={vehicle.img}
                    alt={vehicle.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-white font-bold uppercase italic">
                    {vehicle.name}
                  </h3>
                  <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                    {vehicle.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-20 border-t border-neutral-800">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-black uppercase italic text-white mb-4">
            Safety & Maintenance Commitment
          </h2>
          <p className="text-slate-400 leading-relaxed">
            All fleet vehicles undergo regular inspection, servicing, and
            compliance checks to ensure maximum efficiency and zero-accident
            operations across all project sites.
          </p>
        </div>
      </section>
    </div>
  );
}
