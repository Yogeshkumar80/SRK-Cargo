"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { PhoneCall, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import QuoteModal from "./QuoteModal";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

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
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Fleet", path: "/fleet" },
    { name: "Contact", path: "/contact" },
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

          {/* Desktop Navigation */}
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
            {/* Call Now */}
            <button className="hidden sm:flex items-center gap-2 text-sm font-bold uppercase border border-border-dark px-5 py-2.5 rounded-sm transition-all duration-300 text-white hover:bg-primary hover:text-black">
              <PhoneCall className="w-4 h-4" />
              Call Now
            </button>

            {/* Request Quote */}
            <InteractiveHoverButton
              onClick={() => setIsQuoteModalOpen(true)}
              className="
                !bg-primary
                !text-black
                border
                border-border-dark
                text-sm
                font-black
                rounded-sm
                uppercase
                tracking-widest
                transition-all
                duration-300
                [&_*]:hover:!bg-background-dark
                hover:!text-black
              "
            >
              REQUEST QUOTE
            </InteractiveHoverButton>
            <AnimatedThemeToggler />
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

            <button className="flex items-center justify-center gap-2 text-sm font-bold uppercase border border-border-dark px-5 py-4 rounded-sm text-white hover:bg-surface-dark transition-all">
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
