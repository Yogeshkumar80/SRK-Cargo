// "use client";
// import {
//   ArrowRight,
//   Settings,
//   Cloud,
//   MapPin,
//   Phone,
//   Download,
//   Quote,
// } from "lucide-react";

// export default function Fleet() {
//   const specs = [
//     {
//       label: "Engine Power (ISO 9249)",
//       value: "224",
//       unit: "kW",
//       sub: "300 hp High Output Engine",
//     },
//     {
//       label: "Operating Weight",
//       value: "37,200",
//       unit: "kg",
//       sub: "82,000 lbs Standard Configuration",
//     },
//     {
//       label: "Max Digging Depth",
//       value: "7.5",
//       unit: "m",
//       sub: "Reach with 3.2m Stick",
//     },
//     {
//       label: "Bucket Capacity",
//       value: "2.1",
//       unit: "m³",
//       sub: "Standard GD Bucket",
//     },
//   ];

//   return (
//     <div className="flex flex-col">
//       {/* Hero Section */}
//       <section className="relative h-[650px] w-full overflow-hidden bg-neutral-900">
//         <img
//           alt="CAT 336 GC Excavator"
//           className="w-full h-full object-cover opacity-60"
//           src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgnr0rMpXYPB6LHEwSO9RhBeSC3edhlw-qeA3Ux0NcMUe-rXhy3KVfPOxg5kQdumOku6-jh1b3YhZcLCvxGR3H6eV729_vqFvVZpRzkrE8i-bG-4SgS5qiFcy6i7C-Jtw59-NPsckw-l994XAIiJdNfZO0pi4C4F3OmoQMDiNfOXTUO1hoJt_vz9kLNHX2GbvlnD0yvPgf1zyUtwn3EtjTc_5u5Ak06w3gWRqZV8pBXp4Bz-pqDX2_fO8PSYMVKioeHeeKaAgLGvE"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-background-dark/40"></div>
//         <div className="absolute bottom-0 left-0 w-full pb-20">
//           <div className="max-w-7xl mx-auto px-6">
//             <div className="max-w-3xl">
//               <div className="flex flex-wrap gap-3 mb-6">
//                 <span className="bg-primary text-background-dark px-3 py-1 text-[10px] font-black uppercase tracking-tighter rounded">
//                   In Stock
//                 </span>
//                 <span className="bg-neutral-800 text-slate-100 px-3 py-1 text-[10px] font-black uppercase tracking-tighter border border-neutral-700 rounded">
//                   45+ Tons
//                 </span>
//                 <span className="bg-neutral-800 text-slate-100 px-3 py-1 text-[10px] font-black uppercase tracking-tighter border border-neutral-700 rounded">
//                   Fuel Efficient
//                 </span>
//               </div>
//               <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-4 text-white">
//                 CAT 336 GC{" "}
//                 <span className="text-primary italic block md:inline">
//                   Hydraulic Excavator
//                 </span>
//               </h1>
//               <p className="text-xl text-slate-300 font-light mb-8 max-w-xl">
//                 Power and precision for large-scale earthmoving. Engineered for
//                 high-production applications and reduced maintenance costs.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <button
//                   onClick={() =>
//                     window.dispatchEvent(new CustomEvent("open-quote-modal"))
//                   }
//                   className="bg-primary text-background-dark px-10 py-4 text-base font-black uppercase tracking-widest hover:scale-105 transition-transform flex items-center justify-center gap-2 rounded"
//                 >
//                   <Quote className="w-5 h-5" /> Request a Quote
//                 </button>
//                 <button className="bg-neutral-800 text-white border border-neutral-700 px-10 py-4 text-base font-black uppercase tracking-widest hover:bg-neutral-700 transition-colors flex items-center justify-center gap-2 rounded">
//                   <Download className="w-5 h-5" /> Technical PDF
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Technical Specs */}
//       <section className="py-24 bg-neutral-800/30">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
//             <div className="lg:col-span-4">
//               <h2 className="text-3xl font-black uppercase italic mb-6 border-l-4 border-primary pl-4 text-white">
//                 Technical Specifications
//               </h2>
//               <p className="text-slate-400 leading-relaxed mb-8">
//                 The 336 GC offers the ideal balance of dependable performance,
//                 operator productivity features, and cost targets.
//               </p>
//               <div className="p-6 bg-neutral-800 border border-neutral-700 rounded">
//                 <h4 className="text-primary font-bold uppercase text-xs mb-4 tracking-widest">
//                   Pricing Overview
//                 </h4>
//                 <div className="flex justify-between items-baseline mb-2">
//                   <span className="text-slate-400">Daily Rental:</span>
//                   <span className="text-xl font-bold text-white">
//                     $1,250<span className="text-xs text-slate-500">/day</span>
//                   </span>
//                 </div>
//                 <div className="flex justify-between items-baseline mb-6">
//                   <span className="text-slate-400">Purchase Price:</span>
//                   <span className="text-xl font-bold text-primary">
//                     Contact for Pricing
//                   </span>
//                 </div>
//                 <button className="w-full py-3 bg-neutral-700 text-white text-xs font-bold uppercase tracking-widest hover:bg-neutral-600 rounded">
//                   Inquire about Financing
//                 </button>
//               </div>
//             </div>
//             <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-700 border border-neutral-700">
//               {specs.map((spec, i) => (
//                 <div
//                   key={i}
//                   className="bg-background-dark p-8 border-l-2 border-primary"
//                 >
//                   <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">
//                     {spec.label}
//                   </div>
//                   <div className="text-4xl font-black italic text-white">
//                     {spec.value}{" "}
//                     <span className="text-xl text-primary not-italic">
//                       {spec.unit}
//                     </span>
//                   </div>
//                   <div className="mt-2 text-slate-400 text-sm">{spec.sub}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features */}
//       <section className="py-24 border-t border-neutral-800">
//         <div className="max-w-7xl mx-auto px-6 text-center mb-16">
//           <h2 className="text-4xl font-black uppercase italic tracking-tight mb-4 text-white">
//             Precision <span className="text-primary">&</span> Productivity
//           </h2>
//           <p className="text-slate-400 max-w-2xl mx-auto">
//             Equipped with industry-leading technology to ensure your job is
//             completed on time and under budget.
//           </p>
//         </div>
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "GPS Grade Control",
//                 icon: MapPin,
//                 desc: "Integrated 2D grade system allows operators to reach target grade quickly and accurately without manual checking.",
//               },
//               {
//                 title: "Smart Mode",
//                 icon: Settings,
//                 desc: "Automatically matches engine and hydraulic power to digging conditions for the highest fuel efficiency.",
//               },
//               {
//                 title: "VisionLink",
//                 icon: Cloud,
//                 desc: "Advanced telematics to monitor health, location, hours, fuel consumption, and idle time via mobile or desktop.",
//               },
//             ].map((feature, i) => (
//               <div
//                 key={i}
//                 className="group p-8 bg-neutral-800/50 border border-neutral-700 hover:border-primary transition-colors rounded"
//               >
//                 <feature.icon className="text-primary w-12 h-12 mb-6 group-hover:scale-110 transition-transform" />
//                 <h3 className="text-xl font-bold uppercase mb-4 italic text-white">
//                   {feature.title}
//                 </h3>
//                 <p className="text-slate-400 leading-relaxed text-sm">
//                   {feature.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Deploy Section */}
//       <section className="py-24 bg-background-dark">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="flex flex-col lg:flex-row bg-neutral-800 border border-neutral-700 overflow-hidden rounded">
//             <div className="lg:w-1/2 p-12">
//               <div className="flex items-center gap-2 text-primary mb-4">
//                 <MapPin className="w-4 h-4" />
//                 <span className="text-xs font-bold uppercase tracking-[0.2em]">
//                   Inventory Tracking
//                 </span>
//               </div>
//               <h2 className="text-4xl font-black uppercase italic mb-6 leading-none text-white">
//                 Ready to <span className="text-primary">Deploy</span>
//               </h2>
//               <p className="text-slate-400 mb-8 leading-relaxed">
//                 This specific unit is serviced, inspected, and ready for
//                 immediate transport to your job site. Visit our yard for a live
//                 demonstration.
//               </p>
//               <div className="space-y-6">
//                 <div className="flex items-start gap-4">
//                   <div className="bg-primary/20 p-2 rounded text-primary">
//                     <MapPin className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-white uppercase italic">
//                       Houston North Yard
//                     </h4>
//                     <p className="text-sm text-slate-500">
//                       1200 Industrial Pkwy, Houston, TX
//                     </p>
//                     <p className="text-xs text-primary mt-1 font-bold">
//                       3 Units Available
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <div className="bg-neutral-700 p-2 rounded text-slate-300">
//                     <Phone className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-white uppercase italic">
//                       Direct Yard Line
//                     </h4>
//                     <p className="text-sm text-slate-500">+1 (800) 555-0199</p>
//                   </div>
//                 </div>
//               </div>
//               <button className="mt-10 border-b-2 border-primary text-primary text-sm font-bold uppercase tracking-widest hover:text-white hover:border-white transition-all pb-1">
//                 Get Directions
//               </button>
//             </div>
//             <div className="lg:w-1/2 min-h-[400px] relative">
//               <img
//                 className="w-full h-full object-cover grayscale opacity-50 contrast-125"
//                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkL9qaobo9jM7Qkg3eMUtGVMkoIkjc526P1Wm6Mz6ScRyyX3PqfCUsO4RGbh-_OuqJKbxiJaeTjfdVwTbuTw8Z6t9k2Ve0LLKRPTJLEFfFDfUf2h6bXW2fNmLAmGX7igsruWINttOIBDtI5V3gt2N1_hNYDU0GLjnXj9wUvsW_Rfvr3zKmJwmbRWyGmEsQslR44cgcNMRDnkwqUPp7pR9AlX8qpQCxHNvydHx6plqIds3-Lp8I0kN7n20bE0VRlAWte5DUC_anI6I"
//                 alt="Map"
//               />
//               <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
//               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//                 <div className="relative">
//                   <div className="absolute -inset-4 bg-primary rounded-full animate-ping opacity-25"></div>
//                   <MapPin className="text-primary w-10 h-10" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Related Equipment */}
//       <section className="py-24 border-t border-neutral-800">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="flex justify-between items-end mb-12">
//             <div>
//               <h2 className="text-2xl font-black uppercase italic text-white">
//                 Related Equipment
//               </h2>
//               <p className="text-slate-500 text-sm mt-2">
//                 Commonly deployed alongside the CAT 336 GC
//               </p>
//             </div>
//             <button className="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2">
//               View Full Fleet <ArrowRight className="w-4 h-4" />
//             </button>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 name: "CAT D8 Dozer",
//                 type: "Earthmoving",
//                 img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8xwCaUO6fR3QjV6MngOqisMUqEXghiQopvAvRyvCqpBzGPEYUCYLIkKo0oyfYkVyvFxn3figHQJtgqWX1jT_ZWjIbr60reQTYf95zHdfJzc8aTAM4CmiZaP-ge9PFV6sgmFuRl2cOHK2W5Dsya2aHq-hYIHml_4PlHv4Dx8lqj589M1f3_cbkBzIGeI0FFhaNvLv6W_h6vMs2h9ltQ2PCnKn-oQb81k14DtI3OMjEpKmuhsWM8rvk16zDt_1AELVDpWmHyuSTmYk",
//               },
//               {
//                 name: "CAT 14M Grader",
//                 type: "Road Construction",
//                 img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBjrkX0YwkdxqvUMMftr0uCZNrvWJXexQNNWGw_3OCy2ROdqzvy14VBvNk7I3-vLUsxJEDQ3bR284ThLSbmrc1Mbeal8wF25KJauF7xTBqDFbzXZZFO7yybWnjycqG57kmGiA5JR5ZQXmdohWYkFSecnYrYiwjrwe00YRr5T1PFKhGbvfEdTReHGdWZnh1c0InMQhkO7-5zDZQjplrtS5QrMM5eRpil2SHe4kLu1ri2gul1k8JfrcLeKUOeW6sHnix8qZkzVCnydo",
//               },
//               {
//                 name: "CAT 745 Articulated Truck",
//                 type: "Hauling",
//                 img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0JOmECNn6dqB5yZu51vrlaCP-APvq4bfLCiMFkpZdjvv9TWMyjgPS-o8IGknX8tFLu2Eg-R1dAtmiF5hyHkXQFiA080RDMBsPLIUSC2DA4trHEC5fB-jvafzNkcggicnVfhZnqwOOo-DhC4ZlgoKXvCgQd5MPS9duHmQVDmRQ1P6FbnvVc4ftl2kgOByslZCQyokBB2EKOM_XSu6geh45--QU9uHhHOISGJq1gmqilgWpxw5PHu1V_Udq_AtaSXgHrqpDis9ULq8",
//               },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="bg-neutral-800 border border-neutral-700 p-4 rounded group cursor-pointer hover:border-primary transition-colors"
//               >
//                 <div className="aspect-video overflow-hidden rounded mb-4">
//                   <img
//                     src={item.img}
//                     alt={item.name}
//                     className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
//                   />
//                 </div>
//                 <h4 className="text-white font-bold uppercase italic">
//                   {item.name}
//                 </h4>
//                 <p className="text-slate-500 text-xs uppercase tracking-widest mt-1">
//                   {item.type}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// function Gps(props) {
//   return <MapPin {...props} />;
// }

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
