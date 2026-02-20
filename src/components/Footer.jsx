import {
  Construction,
  Share2,
  Globe,
  Rss,
  MapPin,
  Mail,
  Headset,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background-dark border-t border-border-dark pt-20 pb-10 text-slate-500">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1">
          <div className="flex items-center gap-3 text-white mb-6">
            <div className="bg-primary p-1.5 rounded-sm">
              <Construction className="text-background-dark font-bold w-5 h-5" />
            </div>
            <h1 className="text-lg font-bold tracking-tighter leading-none">
              INDUSTRIALCORE
            </h1>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            The definitive standard for heavy equipment and logistical execution
            since 1978. Building the world's most resilient infrastructure.
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
            Yard Services
          </h5>
          <ul className="space-y-4 text-sm font-medium">
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Equipment Sales
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Fleet Rental
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Mechanical Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Operator Training
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
                Safety Protocols
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Case Studies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Yard Locations
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
                808 Industrial Way, Heavy Yard Zone B, Port Logistics Area
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-primary w-5 h-5 flex-shrink-0" />
              <span>ops@industrialcore.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Headset className="text-primary w-5 h-5 flex-shrink-0" />
              <span>Dispatch: +1 (555) 0123</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-border-dark flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase font-bold tracking-widest">
        <p>© 2024 IndustrialCore Heavy Transport. All Rights Reserved.</p>
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
