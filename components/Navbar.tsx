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
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCaseOpen, setMobileCaseOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[60] px-0 sm:px-0 lg:px-0 pt-0 transition-all duration-300 ${
        scrolled
          ? "bg-[#f5f5f5]/90 backdrop-blur-md shadow-sm border-b border-black/5"
          : "bg-[#f5f5f5]/95 backdrop-blur-md"
      }`}
    >
      <div className="max-w-[2440px] mx-auto py-3 px-4 sm:px-8 transition-all duration-300">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <img
              src="/logo.png"
              alt="PixoraSoftTech Logo"
              width={140}
              height={40}
              className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-[17px] font-bold tracking-tight text-slate-900 hidden sm:inline-block">
              Pixora<span className="text-[#0c3721]">SoftTech</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1 2xl:gap-2">
            <Link
              href="/"
              className={`px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full hover:bg-black/5 relative ${
                pathname === "/" ? "text-slate-950 font-semibold" : "text-slate-700 hover:text-slate-950"
              }`}
            >
              Home
            </Link>

            <Link
              href="#who-we-are"
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-950 transition-colors duration-200 rounded-full hover:bg-black/5 relative"
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-950 transition-colors duration-200 rounded-full hover:bg-black/5 cursor-pointer"
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180 text-slate-500 group-hover:text-slate-950" />
              </button>

              <div
                className="invisible absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out pointer-events-none group-hover:pointer-events-auto"
                style={{ width: "340px" }}
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
                            <span className="text-sm font-medium text-slate-800 group-hover/item:text-slate-950">
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
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-950 transition-colors duration-200 rounded-full hover:bg-black/5 cursor-pointer"
                aria-haspopup="true"
              >
                <span>Case Studies</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180 text-slate-500 group-hover:text-slate-950" />
              </button>

              <div
                className="invisible absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out pointer-events-none group-hover:pointer-events-auto"
                style={{ width: "720px" }}
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
                            className="px-2.5 py-2 rounded-xl text-sm font-medium text-slate-700 hover:text-slate-950 hover:bg-slate-100/80 transition-colors"
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
                            className="px-2.5 py-2 rounded-xl text-sm font-medium text-slate-700 hover:text-slate-950 hover:bg-slate-100/80 transition-colors"
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
                            className="px-2.5 py-2 rounded-xl text-sm font-medium text-slate-700 hover:text-slate-950 hover:bg-slate-100/80 transition-colors"
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
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-950 transition-colors duration-200 rounded-full hover:bg-black/5 relative"
            >
              Projects
            </Link>

            <Link
              href="#tech-leverage"
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-950 transition-colors duration-200 rounded-full hover:bg-black/5 relative"
            >
              Team & Tech
            </Link>
          </nav>

          {/* Action Button & Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-[#0c3721] text-white text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:bg-[#174d31] active:scale-95"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden p-2 text-slate-700 hover:text-black hover:bg-black/5 rounded-full transition-colors cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            className="xl:hidden bg-[#f5f5f5] border-b border-slate-200 px-5 py-6 overflow-y-auto max-h-[85vh] shadow-xl"
          >
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="px-3 py-2.5 rounded-xl text-base font-medium text-slate-900 hover:bg-black/5"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#who-we-are"
                className="px-3 py-2.5 rounded-xl text-base font-medium text-slate-900 hover:bg-black/5"
                onClick={() => setMobileOpen(false)}
              >
                About
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full px-3 py-2.5 rounded-xl text-base font-medium text-slate-900 hover:bg-black/5"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileServicesOpen && (
                  <div className="pl-4 pr-2 py-2 flex flex-col gap-1.5 border-l-2 border-[#0c3721]/30 ml-3 mt-1">
                    {serviceItems.map((s) => (
                      <Link
                        key={s.title}
                        href={s.href}
                        onClick={() => setMobileOpen(false)}
                        className="py-1.5 text-sm text-slate-700 hover:text-black font-medium"
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
                  className="flex items-center justify-between w-full px-3 py-2.5 rounded-xl text-base font-medium text-slate-900 hover:bg-black/5"
                >
                  <span>Case Studies</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileCaseOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileCaseOpen && (
                  <div className="pl-4 pr-2 py-2 flex flex-col gap-1.5 border-l-2 border-[#0c3721]/30 ml-3 mt-1">
                    {[...caseStudiesCol1, ...caseStudiesCol2, ...caseStudiesCol3].slice(0, 8).map((c) => (
                      <Link
                        key={c.title}
                        href={c.href}
                        onClick={() => setMobileOpen(false)}
                        className="py-1.5 text-sm text-slate-700 hover:text-black font-medium"
                      >
                        {c.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/portfolio"
                className="px-3 py-2.5 rounded-xl text-base font-medium text-slate-900 hover:bg-black/5"
                onClick={() => setMobileOpen(false)}
              >
                Projects
              </Link>

              <Link
                href="#tech-leverage"
                className="px-3 py-2.5 rounded-xl text-base font-medium text-slate-900 hover:bg-black/5"
                onClick={() => setMobileOpen(false)}
              >
                Team & Tech
              </Link>

              <div className="pt-4 mt-2 border-t border-slate-200">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-[#0c3721] text-white text-sm font-semibold tracking-wider uppercase shadow-md"
                >
                  <span>Get Started</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
