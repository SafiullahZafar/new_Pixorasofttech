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
import { motion, AnimatePresence, useScroll, useMotionValueEvent, type Variants, type Transition } from "framer-motion";
import { cn } from "@/lib/utils";

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

// Luxury smooth easing curve (natural deceleration over 0.65s)
const smoothTransition: Transition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1] as const,
};

const navVariants: Variants = {
  top: {
    maxWidth: "2440px",
    backgroundColor: "rgba(255, 255, 255, 0)",
    borderColor: "rgba(226, 232, 240, 0)",
    boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)",
    backdropFilter: "blur(0px)",
    paddingLeft: "1.25rem",
    paddingRight: "1.25rem",
    paddingTop: "0.85rem",
    paddingBottom: "0.85rem",
    transition: smoothTransition,
  },
  expanded: {
    maxWidth: "1520px",
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    borderColor: "rgba(226, 232, 240, 0.85)",
    boxShadow: "0 14px 34px -10px rgba(10, 37, 64, 0.12), 0 0 1px 1px rgba(226, 232, 240, 0.5)",
    backdropFilter: "blur(20px)",
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    paddingTop: "0.6rem",
    paddingBottom: "0.6rem",
    transition: smoothTransition,
  },
  collapsed: {
    maxWidth: "185px",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderColor: "rgba(226, 232, 240, 0.95)",
    boxShadow: "0 14px 34px -10px rgba(10, 37, 64, 0.16), 0 0 1px 1px rgba(226, 232, 240, 0.6)",
    backdropFilter: "blur(20px)",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingTop: "0.55rem",
    paddingBottom: "0.55rem",
    transition: smoothTransition,
  },
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCaseOpen, setMobileCaseOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isExpanded, setExpanded] = useState(true);
  const pathname = usePathname();

  const { scrollY } = useScroll();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const atTop = latest < 75;
    setIsAtTop(atTop);

    if (atTop) {
      setExpanded(true);
    } else {
      if (!mobileOpen) {
        setExpanded(false);
      }
    }
  });

  const handleNavClick = (e: React.MouseEvent) => {
    if (!isExpanded) {
      e.preventDefault();
      e.stopPropagation();
      setExpanded(true);
    }
  };

  const navState = isAtTop ? "top" : isExpanded ? "expanded" : "collapsed";

  return (
    <header className="fixed top-2 sm:top-4 left-0 right-0 w-full z-[60] pointer-events-none flex justify-center px-4 sm:px-8">
      <motion.nav
        layout
        initial={false}
        animate={navState}
        variants={navVariants}
        transition={smoothTransition}
        whileHover={navState === "collapsed" ? { scale: 1.05 } : undefined}
        whileTap={navState === "collapsed" ? { scale: 0.96 } : undefined}
        onClick={handleNavClick}
        className={cn(
          "pointer-events-auto relative flex items-center justify-between rounded-full border w-full",
          navState === "collapsed" && "cursor-pointer hover:shadow-2xl"
        )}
      >
        {/* Left: Always-visible Monogram + Smooth Brand Name */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
          <img
            src="/pixora-monogram.png"
            alt="PixoraSoftTech Logo"
            width={160}
            height={160}
            className="h-8 sm:h-9 w-auto object-contain brightness-0 transition-transform duration-300 group-hover:scale-105"
          />
          <motion.span
            animate={{
              opacity: navState === "collapsed" ? 0 : 1,
              width: navState === "collapsed" ? 0 : "auto",
            }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg sm:text-xl font-bold tracking-tight text-black overflow-hidden whitespace-nowrap hidden sm:inline-block"
          >
            Pixora<span className="text-zinc-500 font-medium">SoftTech</span>
          </motion.span>
        </Link>

        {/* Center/Right: Full Navigation Links & CTA */}
        <motion.div
          animate={{
            opacity: navState === "collapsed" ? 0 : 1,
            scale: navState === "collapsed" ? 0.96 : 1,
          }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "flex items-center justify-between flex-1 gap-4",
            navState === "collapsed" && "pointer-events-none hidden"
          )}
        >
          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-1 2xl:gap-2 mx-auto">
            <Link
              href="/"
              className={`px-4 py-2 text-[15px] font-semibold transition-colors duration-200 rounded-full hover:bg-black/5 relative ${pathname === "/"
                  ? "text-slate-950 font-bold"
                  : "text-slate-800 hover:text-slate-950"
                }`}
            >
              Home
            </Link>

            <Link
              href="#who-we-are"
              className="px-4 py-2 text-[15px] font-semibold text-slate-800 hover:text-slate-950 transition-colors duration-200 rounded-full hover:bg-black/5 relative"
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1.5 px-4 py-2 text-[15px] font-semibold text-slate-800 hover:text-slate-950 transition-colors duration-200 rounded-full hover:bg-black/5 cursor-pointer"
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
                className="flex items-center gap-1.5 px-4 py-2 text-[15px] font-semibold text-slate-800 hover:text-slate-950 transition-colors duration-200 rounded-full hover:bg-black/5 cursor-pointer"
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
              className="px-4 py-2 text-[15px] font-semibold text-slate-800 hover:text-slate-950 transition-colors duration-200 rounded-full hover:bg-black/5 relative"
            >
              Projects
            </Link>

            <Link
              href="#tech-leverage"
              className="px-4 py-2 text-[15px] font-semibold text-slate-800 hover:text-slate-950 transition-colors duration-200 rounded-full hover:bg-black/5 relative"
            >
              Team & Tech
            </Link>
          </nav>

          {/* Action Button & Mobile toggle */}
          <div className="flex items-center gap-2.5">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0A2540] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:bg-[#143960] active:scale-95"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </Link>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setMobileOpen(!mobileOpen);
              }}
              className="xl:hidden p-2 text-slate-800 hover:text-black hover:bg-black/5 rounded-full transition-colors cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </motion.div>

        {/* Collapsed Menu Indicator (Smoothly reveals when collapsed) */}
        {navState === "collapsed" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2 select-none pr-1"
          >
            <span className="text-sm font-bold tracking-tight text-slate-900 hidden sm:inline-block">
              Menu
            </span>
            <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-800">
              <Menu className="w-4 h-4" />
            </div>
          </motion.div>
        )}

        {/* Mobile Drawer Menu Attached Below Nav */}
        <AnimatePresence>
          {isExpanded && mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="xl:hidden absolute top-full left-0 right-0 mt-3 bg-white/95 backdrop-blur-2xl border border-slate-200/90 rounded-3xl p-5 shadow-2xl overflow-y-auto max-h-[80vh]"
            >
              <div className="flex flex-col gap-2">
                <Link
                  href="/"
                  className="px-4 py-2.5 rounded-xl text-base font-semibold text-slate-950 hover:bg-black/5"
                  onClick={() => setMobileOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="#who-we-are"
                  className="px-4 py-2.5 rounded-xl text-base font-semibold text-slate-950 hover:bg-black/5"
                  onClick={() => setMobileOpen(false)}
                >
                  About
                </Link>

                {/* Mobile Services Accordion */}
                <div>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-base font-semibold text-slate-950 hover:bg-black/5 cursor-pointer"
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                  {mobileServicesOpen && (
                    <div className="pl-4 pr-2 py-1.5 flex flex-col gap-1 border-l-2 border-[#0A2540]/30 ml-3 mt-1">
                      {serviceItems.map((s) => (
                        <Link
                          key={s.title}
                          href={s.href}
                          onClick={() => setMobileOpen(false)}
                          className="py-1.5 text-sm text-slate-700 hover:text-black font-semibold"
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
                    className="flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-base font-semibold text-slate-950 hover:bg-black/5 cursor-pointer"
                  >
                    <span>Case Studies</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${mobileCaseOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                  {mobileCaseOpen && (
                    <div className="pl-4 pr-2 py-1.5 flex flex-col gap-1 border-l-2 border-[#0A2540]/30 ml-3 mt-1">
                      {[...caseStudiesCol1, ...caseStudiesCol2, ...caseStudiesCol3]
                        .slice(0, 8)
                        .map((c) => (
                          <Link
                            key={c.title}
                            href={c.href}
                            onClick={() => setMobileOpen(false)}
                            className="py-1.5 text-sm text-slate-700 hover:text-black font-semibold"
                          >
                            {c.title}
                          </Link>
                        ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/portfolio"
                  className="px-4 py-2.5 rounded-xl text-base font-semibold text-slate-950 hover:bg-black/5"
                  onClick={() => setMobileOpen(false)}
                >
                  Projects
                </Link>

                <Link
                  href="#tech-leverage"
                  className="px-4 py-2.5 rounded-xl text-base font-semibold text-slate-950 hover:bg-black/5"
                >
                  Team & Tech
                </Link>

                <div className="pt-3 mt-1 border-t border-slate-200">
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#0A2540] text-white text-sm font-semibold tracking-wider uppercase shadow-md active:scale-95 transition-transform"
                  >
                    <span>Get Started</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
