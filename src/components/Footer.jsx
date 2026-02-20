import { Share2, Globe, Rss, MapPin, Mail, Headset, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-background-dark border-t border-border-dark pt-20 pb-10 text-slate-500">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1">
          <div className="flex items-center gap-3 text-white mb-6">
            <Link href="/" className="flex items-center group">
              <Image
                src="/logo.png"
                alt="Industrial Core Logo"
                width={180}
                height={60}
                className="h-12 w-auto object-contain transition-all duration-300 group-hover:opacity-80"
                priority
              />
            </Link>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Leading infrastructure development company since 2014, specializing
            in road projects and construction across India.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 border border-border-dark flex items-center justify-center hover:bg-primary hover:text-background-dark transition-all"
            >
              <Globe className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 border border-border-dark flex items-center justify-center hover:bg-primary hover:text-background-dark transition-all"
            >
              <Share2 className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 border border-border-dark flex items-center justify-center hover:bg-primary hover:text-background-dark transition-all"
            >
              <Rss className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h5 className="text-white font-black uppercase tracking-widest text-sm mb-6 border-l-2 border-primary pl-4">
            Services
          </h5>
          <ul className="space-y-4 text-sm font-medium">
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Infrastructure Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Project Managment
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Mechanical Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Quality Assurance
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-black uppercase tracking-widest text-sm mb-6 border-l-2 border-primary pl-4">
            Operations
          </h5>
          <ul className="space-y-4 text-sm font-medium">
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Project Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Protocols
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Case Studies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Our Locations
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-black uppercase tracking-widest text-sm mb-6 border-l-2 border-primary pl-4">
            Contact HQ
          </h5>
          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="text-primary w-5 h-5 flex-shrink-0" />
              <span>
                SCO - 105, Huda Market, Near HDFC Bank, Sector 10A, Gurugram,
                Haryana, India 122001
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-primary w-5 h-5 flex-shrink-0" />
              <span>info@jeetasia.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Headset className="text-primary w-5 h-5 flex-shrink-0" />
              <span>+91 80538 05324, +91 124-4296574</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="text-primary w-5 h-5 flex-shrink-0" />
              <span>Monday - Friday: 9:30 AM - 6:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-border-dark flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase font-bold tracking-widest">
        <p>© {new Date().getFullYear()} Jeet Asia. All Rights Reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Safety Standards
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
}
