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
import { projects } from "@/lib/projects";

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
    href: "/services/saas-development",
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
    title: "Cloud & AI Solutions",
    href: "/services/cloud-solutions",
    icon: Server,
  },
];

interface CaseStudyNavItem {
  title: string;
  href: string;
  isNew?: boolean;
}

const caseStudiesCol1: CaseStudyNavItem[] = [
  { title: "Brew Haven Coffee", href: "/case-study/brew-haven" },
  { title: "Eduka College Portal", href: "/case-study/eduka-college", isNew: true },
  { title: "Glass Haven Luxury", href: "/case-study/glass-haven", isNew: true },
  { title: "Solar Solutions Energy", href: "/case-study/solar-solutions", isNew: true },
  { title: "State College Campus", href: "/case-study/state-college", isNew: true },
  { title: "Zostel Travel & Hostels", href: "/case-study/zostel", isNew: true },
  { title: "Travel Hotel Hub", href: "/case-study/travel-hotel-hub", isNew: true },
  { title: "Goody Supplies Catering", href: "/case-study/goody-supplies", isNew: true },
  { title: "KB Exports Global", href: "/case-study/kb-exports" },
  { title: "Catering Ordering App", href: "/case-study/catering-app", isNew: true },
];

const caseStudiesCol2: CaseStudyNavItem[] = [
  { title: "Delivery Flow System", href: "/case-study/delivery-dashboard" },
  { title: "HRMS Enterprise", href: "/case-study/hrms" },
  { title: "Light CRM Suite", href: "/case-study/crm" },
  { title: "RMS System", href: "/case-study/rms" },
  { title: "Messenger Software", href: "/case-study/messenger" },
  { title: "Salon Appointment POS", href: "/case-study/salon" },
  { title: "Textile ERP System", href: "/case-study/textile-erp" },
  { title: "Supplier Wholesale App", href: "/case-study/supplier-wholesale-app", isNew: true },
];

const caseStudiesCol3: CaseStudyNavItem[] = [
  { title: "Driven Mobility App", href: "/case-study/rider-app" },
  { title: "Veloura Salon App", href: "/case-study/veloura" },
];

const projectCount = projects.length;
const caseStudyCount = caseStudiesCol1.length + caseStudiesCol2.length + caseStudiesCol3.length;

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
    //  paddingTop: "0.75rem",
    // paddingBottom: "0.75rem",
    paddingTop: "0.75rem",
    paddingBottom: "0.75rem",
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

const caseStudyNavVariants: Variants = {
  top: {
    ...navVariants.top,
    maxWidth: "100%",
    backgroundColor: "#f5f5f5",
    borderColor: "rgba(0, 0, 0, 0.08)",
    boxShadow: "0 8px 24px -12px rgba(0, 0, 0, 0.18)",
    backdropFilter: "blur(0px)",
    paddingLeft: "1.25rem",
    paddingRight: "1.25rem",
  },
  expanded: {
    ...navVariants.expanded,
    maxWidth: "1520px",
    backgroundColor: "#f5f5f5",
    borderColor: "rgba(0, 0, 0, 0.08)",
    backdropFilter: "blur(0px)",
    paddingLeft: "1.25rem",
    paddingRight: "1.25rem",
    paddingTop: "0.75rem",
    paddingBottom: "0.75rem",
  },
  collapsed: {
    ...navVariants.collapsed,
    maxWidth: "185px",
    backgroundColor: "#f5f5f5",
    borderColor: "rgba(0, 0, 0, 0.08)",
    backdropFilter: "blur(0px)",
    paddingLeft: "1.25rem",
    paddingRight: "1.25rem",
    paddingTop: "0.85rem",
    paddingBottom: "0.85rem",
  },
};

const desktopNavMediaQuery = "(min-width: 80rem)";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCaseOpen, setMobileCaseOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isExpanded, setExpanded] = useState(true);
  const pathname = usePathname();
  const isCaseStudyPage = pathname.startsWith("/case-study/");

  const { scrollY } = useScroll();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  useEffect(() => {
    const desktopNav = window.matchMedia(desktopNavMediaQuery);
    const handleBreakpointChange = () => {
      const atTop = window.scrollY < 75;
      setIsAtTop(atTop);
      setExpanded(atTop || !desktopNav.matches);
      if (desktopNav.matches) setMobileOpen(false);
    };

    desktopNav.addEventListener("change", handleBreakpointChange);
    return () => desktopNav.removeEventListener("change", handleBreakpointChange);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const atTop = latest < 75;
    setIsAtTop(atTop);

    if (atTop) {
      setExpanded(true);
    } else {
      if (!mobileOpen) {
        setExpanded(!window.matchMedia(desktopNavMediaQuery).matches);
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
    <>
    <header
      className={cn(
        "fixed left-0 right-0 w-full z-[60] pointer-events-none flex justify-center",
        isCaseStudyPage
          ? isAtTop
            ? "top-0 px-0"
            : "top-2 sm:top-4 px-4 sm:px-8"
          : "top-2 sm:top-4 px-4 sm:px-8"
      )}
    >
      <motion.nav
        layout
        initial={false}
        animate={navState}
        variants={isCaseStudyPage ? caseStudyNavVariants : navVariants}
        transition={smoothTransition}
        whileHover={navState === "collapsed" ? { scale: 1.05 } : undefined}
        whileTap={navState === "collapsed" ? { scale: 0.96 } : undefined}
        onClick={handleNavClick}
        className={cn(
          "pointer-events-auto relative flex items-center justify-between border w-full",
          isCaseStudyPage && isAtTop ? "rounded-none" : "rounded-full",
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
          <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 xl:flex 2xl:gap-2">
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
              href="/about"
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
                style={{ width: "880px" }}
              >
                <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-2xl backdrop-blur-xl">
                  <div className="grid grid-cols-3 gap-x-6">
                    <div>
                      <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2 px-2.5 font-semibold">
                        Websites &amp; Portals
                      </span>
                      <div className="flex flex-col gap-0.5">
                        {caseStudiesCol1.map((c) => (
                          <Link
                            key={c.title}
                            href={c.href}
                            className="px-2.5 py-1.5 rounded-xl text-[13.5px] font-medium text-slate-700 hover:text-slate-950 hover:bg-slate-100/80 transition-colors flex items-center justify-between group/link"
                          >
                            <span className="truncate">{c.title}</span>
                            {c.isNew && (
                              <span className="text-[9px] font-bold text-blue-600 bg-blue-50 border border-blue-200/60 px-1.5 py-0.2 rounded-full uppercase tracking-wider shrink-0">
                                New
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2 px-2.5 font-semibold">
                        Enterprise &amp; SaaS
                      </span>
                      <div className="flex flex-col gap-0.5">
                        {caseStudiesCol2.map((c) => (
                          <Link
                            key={c.title}
                            href={c.href}
                            className="px-2.5 py-1.5 rounded-xl text-[13.5px] font-medium text-slate-700 hover:text-slate-950 hover:bg-slate-100/80 transition-colors flex items-center justify-between group/link"
                          >
                            <span className="truncate">{c.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2 px-2.5 font-semibold">
                        Mobile Applications
                      </span>
                      <div className="flex flex-col gap-0.5">
                        {caseStudiesCol3.map((c) => (
                          <Link
                            key={c.title}
                            href={c.href}
                            className="px-2.5 py-1.5 rounded-xl text-[13.5px] font-medium text-slate-700 hover:text-slate-950 hover:bg-slate-100/80 transition-colors flex items-center justify-between group/link"
                          >
                            <span className="truncate">{c.title}</span>
                            {c.isNew && (
                              <span className="text-[9px] font-bold text-amber-600 bg-amber-50 border border-amber-200/60 px-1.5 py-0.2 rounded-full uppercase tracking-wider shrink-0">
                                New
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Mega-menu footer */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between px-2.5">
                    <span className="text-xs text-slate-400">
                      Explore our full engineering portfolio &amp; live deployments
                    </span>
                    <Link
                      href="/projects"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A2540] hover:text-[#143960] transition-colors"
                    >
                      View All {projectCount} Projects &amp; {caseStudyCount} Case Studies <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/projects"
              className="px-4 py-2 text-[15px] font-semibold text-slate-800 hover:text-slate-950 transition-colors duration-200 rounded-full hover:bg-black/5 relative"
            >
              Projects
            </Link>

            <Link
              href="/team"
              className="px-4 py-2 text-[15px] font-semibold text-slate-800 hover:text-slate-950 transition-colors duration-200 rounded-full hover:bg-black/5 relative"
            >
              Team & Tech
            </Link>
          </nav>

          {/* Action Button & Mobile toggle */}
          <div className="ml-auto flex items-center gap-2.5">
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
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation-drawer"
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

      </motion.nav>
    </header>
    <AnimatePresence>
      {mobileOpen && isExpanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[70] xl:hidden"
        >
          <button
            type="button"
            aria-label="Close navigation"
            onClick={() => setMobileOpen(false)}
            className="absolute inset-0 h-full w-full bg-slate-950/30 backdrop-blur-md"
          />
          <motion.aside
            id="mobile-navigation-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-y-0 right-0 flex h-dvh w-[88vw] max-w-sm flex-col border-l border-slate-200 bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2.5"
              >
                <img
                  src="/pixora-monogram.png"
                  alt=""
                  width={160}
                  height={160}
                  className="h-8 w-auto object-contain brightness-0"
                />
                <span className="text-base font-bold tracking-tight text-black">
                  Pixora<span className="font-medium text-zinc-500">SoftTech</span>
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close navigation"
                className="rounded-full p-2 text-slate-700 transition-colors hover:bg-slate-100 hover:text-black"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-4">
              <div className="flex flex-col gap-1">
                <Link
                  href="/"
                  className="rounded-xl px-4 py-2.5 text-base font-semibold text-slate-950 hover:bg-black/5"
                  onClick={() => setMobileOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="rounded-xl px-4 py-2.5 text-base font-semibold text-slate-950 hover:bg-black/5"
                  onClick={() => setMobileOpen(false)}
                >
                  About
                </Link>

                <div>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    aria-expanded={mobileServicesOpen}
                    className="flex w-full items-center justify-between rounded-xl px-4 py-2.5 text-base font-semibold text-slate-950 hover:bg-black/5"
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        mobileServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileServicesOpen && (
                    <div className="ml-3 mt-1 flex flex-col gap-1 border-l-2 border-[#0A2540]/30 py-1.5 pl-4 pr-2">
                      {serviceItems.map((service) => (
                        <Link
                          key={service.title}
                          href={service.href}
                          onClick={() => setMobileOpen(false)}
                          className="py-1.5 text-sm font-semibold text-slate-700 hover:text-black"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <button
                    onClick={() => setMobileCaseOpen(!mobileCaseOpen)}
                    aria-expanded={mobileCaseOpen}
                    className="flex w-full items-center justify-between rounded-xl px-4 py-2.5 text-base font-semibold text-slate-950 hover:bg-black/5"
                  >
                    <span>Case Studies</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        mobileCaseOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileCaseOpen && (
                    <div className="ml-3 mt-1 flex max-h-[340px] flex-col gap-1 overflow-y-auto border-l-2 border-[#0A2540]/30 py-1.5 pl-4 pr-2">
                      {[...caseStudiesCol1, ...caseStudiesCol2, ...caseStudiesCol3].map((caseStudy) => (
                        <Link
                          key={caseStudy.title}
                          href={caseStudy.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center justify-between py-1.5 text-sm font-semibold text-slate-700 hover:text-black"
                        >
                          <span>{caseStudy.title}</span>
                          {caseStudy.isNew && (
                            <span className="shrink-0 rounded-full border border-blue-200/60 bg-blue-50 px-1.5 py-0.2 text-[9px] font-bold uppercase tracking-wider text-blue-600">
                              New
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/projects"
                  className="rounded-xl px-4 py-2.5 text-base font-semibold text-slate-950 hover:bg-black/5"
                  onClick={() => setMobileOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  href="/team"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-2.5 text-base font-semibold text-slate-950 hover:bg-black/5"
                >
                  Team & Tech
                </Link>

                <div className="mt-1 border-t border-slate-200 pt-3">
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0A2540] py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-md transition-transform active:scale-95"
                  >
                    <span>Get Started</span>
                    <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}


