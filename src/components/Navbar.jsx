"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Construction, PhoneCall, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import QuoteModal from "./QuoteModal";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleOpenModal = () => {
      setIsQuoteModalOpen(true);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("open-quote-modal", handleOpenModal);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("open-quote-modal", handleOpenModal);
    };
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Fleet", path: "/fleet" },
    { name: "About", path: "/about" },
    { name: "Safety", path: "/safety" },
  ];

  return (
    <>
      <nav
        className={cn(
          "sticky top-0 z-50 w-full border-b transition-all duration-300",
          isScrolled
            ? "bg-background-dark/95 border-border-dark backdrop-blur-md py-3"
            : "bg-background-dark border-transparent py-5",
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-primary p-2 rounded-sm">
              <Construction className="text-background-dark font-bold w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tighter leading-none text-white">
                INDUSTRIAL<span className="text-primary">CORE</span>
              </h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">
                Transport & Logistics
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={cn(
                  "text-sm font-bold uppercase tracking-wider transition-colors hover:text-primary",
                  pathname === link.path ? "text-primary" : "text-slate-400",
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center gap-2 text-sm font-bold uppercase border border-border-dark px-5 py-2.5 rounded-sm hover:bg-surface-dark transition-all text-white">
              <PhoneCall className="w-4 h-4" />
              Call Now
            </button>

            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-primary text-background-dark text-sm font-bold uppercase px-6 py-2.5 rounded-sm hover:brightness-110 transition-all shadow-[4px_4px_0px_0px_rgba(245,184,0,0.2)]"
            >
              Request Quote
            </button>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-background-dark border-b border-border-dark p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "text-lg font-bold uppercase tracking-wider transition-colors",
                  pathname === link.path ? "text-primary" : "text-slate-400",
                )}
              >
                {link.name}
              </Link>
            ))}

            <button className="flex items-center justify-center gap-2 text-sm font-bold uppercase border border-border-dark px-5 py-4 rounded-sm hover:bg-surface-dark transition-all text-white">
              <PhoneCall className="w-4 h-4" />
              Call Now
            </button>
          </div>
        )}
      </nav>

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </>
  );
}
