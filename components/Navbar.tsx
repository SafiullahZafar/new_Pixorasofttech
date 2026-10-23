"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ArrowUpRight,
  Menu,
  X,
  CodeXml,
  Globe,
  Cloud,
  Smartphone,
  Palette,
  Server,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const serviceItems = [
  {
    title: "Custom Software Development",
    href: "/services/custom-software-development",
    icon: CodeXml,
  },
  {
    title: "Web Development",
    href: "/services/website-development",
    icon: Globe,
  },
  {
    title: "SaaS Development",
    href: "/services/custom-software-development",
    icon: Cloud,
  },
  {
    title: "Mobile App Development",
    href: "/services/mobile-app-development",
    icon: Smartphone,
  },
  {
    title: "UI / UX Design",
    href: "/services/ui-ux-design",
    icon: Palette,
  },
  {
    title: "Cloud Solutions",
    href: "/services/cloud-solutions",
    icon: Server,
  },
];

const caseStudiesCol1 = [
  { title: "Brew Haven Coffee", href: "/portfolio/brew-haven" },
  { title: "Delivery Flow System", href: "/portfolio/delivery-dashboard" },
  { title: "HRMS Enterprise", href: "/portfolio/hrms" },
  { title: "KB Exports Global", href: "/portfolio/kb-exports" },
  { title: "Light CRM Suite", href: "/portfolio/crm" },
];

const caseStudiesCol2 = [
  { title: "Inventory Cloud POS", href: "/portfolio/inventory" },
  { title: "Restaurant Management", href: "/portfolio/supplier" },
  { title: "Salon Appointment System", href: "/portfolio/salon" },
  { title: "Textile ERP System", href: "/portfolio/supplier" },
];

const caseStudiesCol3 = [
  { title: "FitPulse Mobile App", href: "/portfolio/rider-app" },
  { title: "IRider Transportation", href: "/portfolio/rider-app" },
  { title: "ShopEase E-Commerce", href: "/portfolio/brew-haven" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCaseOpen, setMobileCaseOpen] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // If start animation is not present on the current page, reveal immediately
    const hasIntro = typeof document !== "undefined" && document.querySelector(".start-animation");
    if (!hasIntro) {
      setIsRevealed(true);
      return;
    }

    // Synchronize with start animation monogram flip (at ~2.8s - 3.1s)
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, 2800);

    const onReveal = () => setIsRevealed(true);
    window.addEventListener("start-animation-reveal", onReveal);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("start-animation-reveal", onReveal);
    };
  }, [pathname]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`absolute top-0 left-0 right-0 w-full z-[60] bg-transparent transition-opacity duration-700 ease-out ${
        isRevealed
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="max-w-[2440px] mx-auto py-4 px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <img
              src="/pixora-monogram.png"
              alt="PixoraSoftTech Logo"
              width={160}
              height={160}
              className="h-10 sm:h-12 w-auto object-contain brightness-0 transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-black hidden sm:inline-block">
              Pixora<span className="text-zinc-500 font-medium">SoftTech</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1.5 2xl:gap-3">
            <Link
              href="/"
              className={`px-4.5 py-2.5 text-[15px] sm:text-base font-semibold transition-colors duration-200 rounded-full hover:bg-black/5 relative ${pathname === "/" ? "text-slate-950 font-bold" : "text-slate-800 hover:text-slate-950"
                }`}
            >
              Home
            </Link>

            <Link
              href="#who-we-are"
              className="px-4.5 py-2.5 text-[15px] sm:text-base font-semibold text-slate-800 hover:text-slate-950 transition-colors duration-200 rounded-full hover:bg-black/5 relative"
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1.5 px-4.5 py-2.5 text-[15px] sm:text-base font-semibold text-slate-800 hover:text-slate-950 transition-colors duration-200 rounded-full hover:bg-black/5 cursor-pointer"
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180 text-slate-600 group-hover:text-slate-950" />
              </button>

              <div
                className="invisible absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out pointer-events-none group-hover:pointer-events-auto"
                style={{ width: "360px" }}
              >
                <div className="bg-white border border-slate-200/80 rounded-2xl p-3 shadow-xl backdrop-blur-xl">
                  <div className="flex flex-col gap-1">
                    {serviceItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="flex items-center justify-between p-2.5 rounded-xl transition-colors hover:bg-slate-100/80 group/item"
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-slate-100 text-slate-700 group-hover/item:bg-black group-hover/item:text-white transition-colors">
                              <Icon className="w-4 h-4" />
                            </div>
                            <span className="text-[15px] font-semibold text-slate-800 group-hover/item:text-slate-950">
                              {item.title}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Case Studies Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1.5 px-4.5 py-2.5 text-[15px] sm:text-base font-semibold text-slate-800 hover:text-slate-950 transition-colors duration-200 rounded-full hover:bg-black/5 cursor-pointer"
                aria-haspopup="true"
              >
                <span>Case Studies</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180 text-slate-600 group-hover:text-slate-950" />
              </button>

              <div
                className="invisible absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out pointer-events-none group-hover:pointer-events-auto"
                style={{ width: "740px" }}
              >
                <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-xl backdrop-blur-xl">
                  <div className="grid grid-cols-3 gap-x-4">
                    <div>
                      <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2 px-2.5">
                        Enterprise & ERP
                      </span>
                      <div className="flex flex-col gap-0.5">
                        {caseStudiesCol1.map((c) => (
                          <Link
                            key={c.title}
                            href={c.href}
                            className="px-2.5 py-2 rounded-xl text-[14px] font-medium text-slate-700 hover:text-slate-950 hover:bg-slate-100/80 transition-colors"
                          >
                            {c.title}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2 px-2.5">
                        Commerce & POS
                      </span>
                      <div className="flex flex-col gap-0.5">
                        {caseStudiesCol2.map((c) => (
                          <Link
                            key={c.title}
                            href={c.href}
                            className="px-2.5 py-2 rounded-xl text-[14px] font-medium text-slate-700 hover:text-slate-950 hover:bg-slate-100/80 transition-colors"
                          >
                            {c.title}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2 px-2.5">
                        Mobile & Apps
                      </span>
                      <div className="flex flex-col gap-0.5">
                        {caseStudiesCol3.map((c) => (
                          <Link
                            key={c.title}
                            href={c.href}
                            className="px-2.5 py-2 rounded-xl text-[14px] font-medium text-slate-700 hover:text-slate-950 hover:bg-slate-100/80 transition-colors"
                          >
                            {c.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/portfolio"
              className="px-4.5 py-2.5 text-[15px] sm:text-base font-semibold text-slate-800 hover:text-slate-950 transition-colors duration-200 rounded-full hover:bg-black/5 relative"
            >
              Projects
            </Link>

            <Link
              href="#tech-leverage"
              className="px-4.5 py-2.5 text-[15px] sm:text-base font-semibold text-slate-800 hover:text-slate-950 transition-colors duration-200 rounded-full hover:bg-black/5 relative"
            >
              Team & Tech
            </Link>
          </nav>

          {/* Action Button & Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-7 py-3 rounded-2xl bg-[#0A2540] text-white text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:bg-[#143960] active:scale-95"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-4.5 h-4.5 stroke-[2.5]" />
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden p-2.5 text-slate-800 hover:text-black hover:bg-black/5 rounded-full transition-colors cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="xl:hidden bg-[#FAFAFC] border-b border-slate-200 px-5 py-6 overflow-y-auto max-h-[85vh] shadow-xl"
          >
            <div className="flex flex-col gap-2.5">
              <Link
                href="/"
                className="px-4 py-3 rounded-xl text-lg font-semibold text-slate-950 hover:bg-black/5"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#who-we-are"
                className="px-4 py-3 rounded-xl text-lg font-semibold text-slate-950 hover:bg-black/5"
                onClick={() => setMobileOpen(false)}
              >
                About
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-lg font-semibold text-slate-950 hover:bg-black/5 cursor-pointer"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>
                {mobileServicesOpen && (
                  <div className="pl-4 pr-2 py-2 flex flex-col gap-2 border-l-2 border-[#0A2540]/30 ml-3 mt-1">
                    {serviceItems.map((s) => (
                      <Link
                        key={s.title}
                        href={s.href}
                        onClick={() => setMobileOpen(false)}
                        className="py-2 text-[15px] text-slate-700 hover:text-black font-semibold"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Case Studies Accordion */}
              <div>
                <button
                  onClick={() => setMobileCaseOpen(!mobileCaseOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-lg font-semibold text-slate-950 hover:bg-black/5 cursor-pointer"
                >
                  <span>Case Studies</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${mobileCaseOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>
                {mobileCaseOpen && (
                  <div className="pl-4 pr-2 py-2 flex flex-col gap-2 border-l-2 border-[#0A2540]/30 ml-3 mt-1">
                    {[...caseStudiesCol1, ...caseStudiesCol2, ...caseStudiesCol3].slice(0, 8).map((c) => (
                      <Link
                        key={c.title}
                        href={c.href}
                        onClick={() => setMobileOpen(false)}
                        className="py-2 text-[15px] text-slate-700 hover:text-black font-semibold"
                      >
                        {c.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/portfolio"
                className="px-4 py-3 rounded-xl text-lg font-semibold text-slate-950 hover:bg-black/5"
                onClick={() => setMobileOpen(false)}
              >
                Projects
              </Link>

              <Link
                href="#tech-leverage"
                className="px-4 py-3 rounded-xl text-lg font-semibold text-slate-950 hover:bg-black/5"
                onClick={() => setMobileOpen(false)}
              >
                Team & Tech
              </Link>

              <div className="pt-4 mt-2 border-t border-slate-200">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-2xl bg-[#0A2540] text-white text-base font-semibold tracking-wider uppercase shadow-md active:scale-95 transition-transform"
                >
                  <span>Get Started</span>
                  <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
