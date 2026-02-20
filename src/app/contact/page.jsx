"use client";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[450px] w-full overflow-hidden bg-neutral-900">
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600"
          className="w-full h-full object-cover opacity-50"
          alt="Contact"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-background-dark/40" />
        <div className="absolute bottom-16 left-0 w-full">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-black uppercase italic text-white">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-slate-300 mt-4 max-w-xl">
              Have a project in mind? Let’s build something powerful together.
              Reach out to our team today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-24 bg-background-dark">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Info Section */}
          <div>
            <h2 className="text-3xl font-black uppercase italic mb-10 border-l-4 border-primary pl-4 text-white">
              Get In Touch
            </h2>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="bg-primary/20 p-3 rounded text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase italic">
                    Head Office
                  </h4>
                  <p className="text-slate-400 text-sm mt-1">
                    SCO - 105, Huda Market, Near HDFC Bank, Sector 10A,
                    Gurugram, Haryana, India 122001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-primary/20 p-3 rounded text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase italic">
                    Call Us
                  </h4>
                  <p className="text-slate-400 text-sm mt-1">
                    +91 80538 05324, +91 124-4296574
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-primary/20 p-3 rounded text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase italic">
                    Email Address
                  </h4>
                  <p className="text-slate-400 text-sm mt-1">
                    info@jeetasia.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-primary/20 p-3 rounded text-primary">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase italic">
                    Working Hours
                  </h4>
                  <p className="text-slate-400 text-sm mt-1">
                    Monday - Saturday: 9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="bg-neutral-800 border border-neutral-700 p-10 rounded">
            <h3 className="text-2xl font-black uppercase italic text-white mb-8">
              Send a Message
            </h3>

            <form className="space-y-6">
              <div>
                <label className="text-xs uppercase tracking-widest text-slate-400">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full mt-2 bg-neutral-900 border border-neutral-700 p-3 text-white rounded focus:border-primary outline-none"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-widest text-slate-400">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full mt-2 bg-neutral-900 border border-neutral-700 p-3 text-white rounded focus:border-primary outline-none"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-widest text-slate-400">
                  Message
                </label>
                <textarea
                  rows="5"
                  className="w-full mt-2 bg-neutral-900 border border-neutral-700 p-3 text-white rounded focus:border-primary outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-background-dark py-4 text-sm font-black uppercase tracking-widest hover:scale-105 transition-transform flex items-center justify-center gap-2 rounded"
              >
                Send Message <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[450px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.2238444650284!2d77.00679771115276!3d28.442667892576186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d17630dad43d3%3A0x314c7443b20cd3ef!2sJeet%20Asia%20Private%20Limited!5e0!3m2!1sen!2sin!4v1771583624305!5m2!1sen!2sin"
          className="w-full h-full grayscale contrast-125"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply pointer-events-none"></div>
      </section>
    </div>
  );
}
