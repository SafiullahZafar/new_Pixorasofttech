"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowUpRight, CheckCircle2, TrendingUp, Zap, Clock, ShieldCheck } from "lucide-react";
import type { Project } from "@/lib/projects";

// ── Word-by-Word Text Reveal (Matches reference UI exactly) ────────────────
interface WordRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

const WordReveal = ({ text, className = "", delay = 0 }: WordRevealProps) => {
  const words = text.split(" ");
  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, idx) => (
        <motion.span
          key={idx}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.25,
            delay: delay + 0.03 * idx,
            ease: "easeOut",
          }}
          className="inline-block mr-[0.28em] whitespace-nowrap"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

// ── Component Props ────────────────────────────────────────────────────────
interface CaseStudyBrewHavenProps {
  project?: Project;
}

export default function CaseStudyBrewHaven({ project }: CaseStudyBrewHavenProps) {
  // Hero Parallax Scroll
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(heroScroll, [0, 1], [1, 1.12]);

  // Showcase Card Hover
  const [cardHovered, setCardHovered] = useState(false);

  // Fallback defaults from Brew Haven data
  const title = project?.title || "Brew Haven";
  const heroImage = project?.heroImg || "/portfolio/brew-haven.png";
  const mobileHeroImage = project?.img || "/portfolio/brew-haven.png";
  const liveUrl = project?.liveUrl || "https://brew-haven-beta.vercel.app/";

  const aboutDescription =
    "Brew Haven is an artisanal coffee roastery crafting ethically sourced single-origin beans and seasonal gourmet blends. PixoraSofttech redesigned its digital storefront to transition from a conventional shop into an editorial, sensory brand journey for coffee connoisseurs and retail subscribers.";

  const challengeText =
    "Brew Haven suffered from low digital engagement and a high abandonment rate during online checkout. Their previous website failed to reflect their premium craft identity and lacked real-time order customisation options for retail bean buyers.";

  const solutionText =
    "We rearchitected the web application using Next.js and Tailwind CSS with custom micro-animations. We implemented a step-by-step custom bean selector, dynamic roast strength indicators, and an optimized single-page checkout flow connected directly to their inventory POS.";

  const resultsText =
    "Visitors can customize and order any artisanal roast in three clicks or fewer. Online sales doubled within two months of rollout.";

  return (
    <div className="w-full bg-[#f5f5f5] text-slate-900 font-sans selection:bg-black selection:text-white">
      {/* ── Top Back Navigation Floating Pill ── */}
      <div className="fixed top-20 sm:top-24 left-4 sm:left-8 z-40">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/85 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-800 shadow-md backdrop-blur-md transition hover:bg-white hover:border-black/25 hover:-translate-y-0.5"
        >
          <ArrowLeft className="size-4" /> All Projects
        </Link>
      </div>

      {/* ── 1. HERO PARALLAX SECTION (Module 6499) ── */}
      <section
        ref={heroRef}
        className="relative z-0 w-full h-[45vh] sm:h-[70vh] lg:h-screen mt-[68px] sm:mt-[76px] overflow-hidden bg-black select-none"
      >
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <motion.div
            initial={{ scale: 1.25, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full"
          >
            {/* Mobile Hero Image */}
            <motion.img
              style={{ scale: heroScale }}
              src={mobileHeroImage}
              alt={title}
              className="block md:hidden w-full h-full object-cover object-center"
            />
            {/* Desktop Hero Image */}
            <motion.img
              style={{ scale: heroScale }}
              src={heroImage}
              alt={title}
              className="hidden md:block w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Hero Overlay Gradient for cinematic depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

        {/* Hero Bottom Floating Label */}
        <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-12 2xl:left-20 z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <span className="rounded-full border border-white/25 bg-black/60 px-3.5 py-1 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
              E-Commerce &bull; Brand Experience
            </span>
            <span className="rounded-full border border-emerald-400/30 bg-emerald-950/60 px-3 py-1 text-[11px] sm:text-xs font-medium text-emerald-300 backdrop-blur-md">
              Live &amp; Deployed
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── 2. ABOUT SECTION (Module 89778 - Signature Editorial Split & Clip-Path Reveal) ── */}
      <section className="w-full bg-[#f5f5f5] text-black py-12 sm:py-16 2xl:py-24 px-6 sm:px-12 2xl:px-20 select-none">
        <div className="max-w-[1600px] 2xl:max-w-[1920px] min-[2500px]:max-w-[2400px] mx-auto w-full">
          {/* Top Row: Huge ABOUT Header + Offset Small Detail Image */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-8 sm:mb-12 2xl:mb-16">
            <div className="w-full lg:w-1/2 pt-1">
              <h1 className="text-4xl sm:text-6xl md:text-7xl 2xl:text-8xl font-black tracking-tight text-zinc-950 uppercase leading-none break-words">
                ABOUT
              </h1>
            </div>
            <div className="w-full lg:w-1/2 flex justify-start lg:pl-12 2xl:pl-16">
              <motion.div
                initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
                viewport={{ once: true, amount: 0, margin: "0px 0px -50px 0px" }}
                transition={{ duration: 1.1, ease: [0.77, 0, 0.175, 1] }}
                className="w-44 sm:w-64 2xl:w-80 h-56 sm:h-72 2xl:h-96 relative overflow-hidden bg-zinc-200 rounded-2xl shrink-0 shadow-lg"
              >
                <motion.img
                  initial={{ scale: 1.25 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0, margin: "0px 0px -50px 0px" }}
                  transition={{ duration: 1.3, ease: [0.77, 0, 0.175, 1] }}
                  src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=85"
                  alt="Brew Haven Artisan Pour-Over"
                  className="w-full h-full object-cover object-center block"
                />
              </motion.div>
            </div>
          </div>

          {/* Bottom Row: Large Main View + Narrative Paragraph */}
          <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16 2xl:gap-24">
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
                viewport={{ once: true, amount: 0, margin: "0px 0px -50px 0px" }}
                transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
                className="w-full h-[380px] sm:h-[520px] md:h-[660px] 2xl:h-[680px] relative overflow-hidden bg-zinc-200 rounded-2xl shadow-xl"
              >
                <motion.img
                  initial={{ scale: 1.25 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0, margin: "0px 0px -50px 0px" }}
                  transition={{ duration: 1.4, ease: [0.77, 0, 0.175, 1] }}
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85"
                  alt="Brew Haven Roastery Atmosphere"
                  className="w-full h-full object-cover object-center block"
                />
              </motion.div>
            </div>

            <div className="w-full lg:w-1/2 lg:pl-1 2xl:pl-16 pt-2 lg:pt-28 2xl:pt-24">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl 2xl:text-2xl text-slate-800 leading-relaxed max-w-xl 2xl:max-w-2xl font-normal"
              >
                {aboutDescription}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. THE DARK EDITORIAL SECTION (Module 83359 - The Challenge, Solution, Showcase Card, & Results) ── */}
      <section className="w-full bg-[#0a0a0a] text-white py-16 sm:py-24 2xl:py-36 relative select-none">
        <div className="max-w-[1600px] 2xl:max-w-[2400px] mx-auto px-6 sm:px-12 2xl:px-20 relative z-10 flex flex-col gap-20 sm:gap-32 2xl:gap-48">
          {/* Part A: Main Title & The Challenge */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6">
              <h1 className="text-5xl sm:text-7xl md:text-8xl 2xl:text-[10rem] font-semibold tracking-tight text-white leading-none">
                {title}
              </h1>
            </div>
            <div className="lg:col-span-6 flex flex-col gap-4 lg:pl-12 pt-12 lg:pt-34 2xl:pt-42">
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2"
              >
                {/* 3-Dot Progress Badge (Dot 1 Active) */}
                <span className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                </span>
                <span className="text-xs sm:text-sm 2xl:text-base text-zinc-400 font-medium tracking-wide">
                  The Challenge
                </span>
              </motion.div>

              <p className="text-base sm:text-xl 2xl:text-2xl text-zinc-300 font-normal leading-relaxed max-w-xl 2xl:max-w-3xl">
                <WordReveal text={challengeText} delay={0.2} />
              </p>
            </div>
          </div>

          {/* Part B: Our Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2"
              >
                {/* 3-Dot Progress Badge (Dot 2 Active) */}
                <span className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                </span>
                <span className="text-xs sm:text-sm 2xl:text-base text-zinc-400 font-medium tracking-wide">
                  Our Solution
                </span>
              </motion.div>

              <h2 className="text-2xl sm:text-3xl 2xl:text-4xl font-semibold text-white leading-tight max-w-2xl 2xl:max-w-4xl">
                <WordReveal text={solutionText} delay={0.2} />
              </h2>
            </div>
          </div>

          {/* Part C: Full-Width Showcase Card with Spring Pop-Up Glassmorphism Bar on Hover */}
          <div
            className="relative w-full h-[320px] sm:h-[500px] md:h-[620px] 2xl:h-[850px] rounded-2xl bg-zinc-900 border border-zinc-800/60 overflow-hidden group cursor-pointer shadow-2xl"
            onMouseEnter={() => setCardHovered(true)}
            onMouseLeave={() => setCardHovered(false)}
          >
            <motion.img
              src={heroImage}
              alt="Brew Haven Live Platform Showcase"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Subtle Vignette Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />

            {/* Spring Animated Glassmorphism Floating Pill */}
            <motion.div
              initial={false}
              animate={cardHovered ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 280, damping: 28 }}
              className="absolute inset-x-4 bottom-4 z-20"
            >
              <div className="flex items-center justify-between gap-4 bg-white/20 backdrop-blur-md border border-white/15 rounded-2xl p-3 sm:px-5 sm:py-4 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div>
                    <p className="text-sm font-semibold text-white leading-tight">
                      Brew Haven Coffee
                    </p>
                    <p className="text-xs text-white/80 leading-tight mt-0.5">
                      Artisanal Coffee &bull; Next.js E-Commerce
                    </p>
                  </div>
                </div>
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-shrink-0 flex items-center gap-1.5 bg-black hover:bg-white/25 text-white border border-white/20 backdrop-blur-md text-xs font-semibold px-4 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg whitespace-nowrap"
                  >
                    Live Website <ArrowUpRight className="size-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>

          {/* Part D: The Results */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-4 lg:pl-12">
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2"
              >
                {/* 3-Dot Progress Badge (Dot 3 Active) */}
                <span className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                </span>
                <span className="text-xs sm:text-sm 2xl:text-base text-zinc-400 font-medium tracking-wide">
                  The Results
                </span>
              </motion.div>

              <p className="text-base sm:text-xl 2xl:text-3xl text-zinc-300 font-normal leading-relaxed max-w-xl 2xl:max-w-3xl">
                <WordReveal text={resultsText} delay={0.2} />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. SHOWCASE 3-IMAGE GRID (Module 944) ── */}
      <section className="hidden md:block w-full bg-[#f5f5f5] py-8 sm:py-12 2xl:py-20 px-4 sm:px-8 lg:px-12 2xl:px-20 select-none">
        <div className="max-w-[1600px] 2xl:max-w-[1920px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 2xl:gap-8 items-stretch w-full">
            {/* Left Big Card (col-span-7) */}
            <div className="lg:col-span-7 2xl:col-span-7 h-[360px] sm:h-[480px] md:h-[620px] 2xl:h-[760px] overflow-hidden bg-zinc-100 border border-zinc-200/60 w-full rounded-2xl shadow-md">
              <img
                src={heroImage}
                alt="Brew Haven Digital Storefront Showcase"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Right Two Stacked Cards (col-span-5) */}
            <div className="lg:col-span-5 2xl:col-span-5 flex flex-col gap-4 sm:gap-6 2xl:gap-8 w-full h-[360px] sm:h-[480px] md:h-[620px] 2xl:h-[760px]">
              <div className="flex-1 h-1/2 overflow-hidden bg-zinc-100 border border-zinc-200/60 w-full rounded-2xl shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=85"
                  alt="Espresso Crafting & Roast Profiling"
                  className="w-full h-full object-cover object-center block"
                />
              </div>
              <div className="flex-1 h-1/2 overflow-hidden bg-zinc-100 border border-zinc-200/60 w-full rounded-2xl shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=85"
                  alt="Specialty Coffee Bar Experience"
                  className="w-full h-full object-cover object-center block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. KEY METRICS & TAKEAWAYS SECTION ── */}
      <section className="w-full bg-[#f5f5f5] text-black py-12 sm:py-16 2xl:py-24 px-4 sm:px-8 lg:px-12 2xl:px-20 select-none">
        <div className="max-w-[1600px] 2xl:max-w-[1920px] mx-auto w-full">
          <div className="rounded-3xl bg-zinc-950 text-white p-8 sm:p-12 2xl:p-16 border border-zinc-800 shadow-xl">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-10 border-b border-zinc-800 pb-8">
              <div>
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-amber-400 mb-2">
                  Key Takeaways
                </p>
                <h3 className="text-2xl sm:text-4xl 2xl:text-5xl font-semibold tracking-tight text-white">
                  Measurable impact for Brew Haven
                </h3>
              </div>
              <p className="max-w-xl text-sm sm:text-base text-zinc-400 leading-relaxed">
                The redesigned platform unites authentic roastery storytelling with an intuitive subscription engine, turning casual visitors into repeating retail customers.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <div className="flex flex-col gap-2 p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800">
                <span className="text-3xl sm:text-5xl font-black text-amber-400 tracking-tight">
                  +40%
                </span>
                <span className="text-sm font-semibold text-white">Online Order Growth</span>
                <span className="text-xs text-zinc-400">Within 60 days of official launch</span>
              </div>
              <div className="flex flex-col gap-2 p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800">
                <span className="text-3xl sm:text-5xl font-black text-emerald-400 tracking-tight">
                  3.2 min
                </span>
                <span className="text-sm font-semibold text-white">Average Session Duration</span>
                <span className="text-xs text-zinc-400">Deep engagement on bean selectors</span>
              </div>
              <div className="flex flex-col gap-2 p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800">
                <span className="text-3xl sm:text-5xl font-black text-blue-400 tracking-tight">
                  98/100
                </span>
                <span className="text-sm font-semibold text-white">Google PageSpeed Score</span>
                <span className="text-xs text-zinc-400">Next.js 16 high-performance stack</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. PROJECT SUMMARY SECTION (Module 13141) ── */}
      <section className="w-full bg-[#f5f5f5] text-black py-12 sm:py-16 2xl:py-22 px-4 sm:px-8 lg:px-12 2xl:px-20 select-none">
        <div className="max-w-[1600px] 2xl:max-w-[1920px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 2xl:gap-24 items-stretch relative w-full">
            {/* Left: Summary Heading */}
            <div className="lg:col-span-5 2xl:col-span-4 h-full">
              <div>
                <h2 className="text-3xl sm:text-5xl md:text-6xl 2xl:text-8xl font-semibold tracking-tight text-zinc-950 uppercase leading-none break-words">
                  Summary
                </h2>
              </div>
            </div>

            {/* Right: Metadata Matrix & Narrative */}
            <div className="lg:col-span-7 2xl:col-span-8 grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 2xl:gap-14 min-w-0 w-full items-start">
              {/* Metadata Column */}
              <div className="md:col-span-5 flex flex-col gap-6 2xl:gap-8 w-full">
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs sm:text-sm 2xl:text-base font-normal text-zinc-400">
                    Industry
                  </span>
                  <span className="text-sm sm:text-base 2xl:text-xl font-medium text-zinc-950">
                    Hospitality &amp; Specialty Coffee
                  </span>
                </div>

                <div className="flex flex-col gap-1.5">
                  <span className="text-xs sm:text-sm 2xl:text-base font-normal text-zinc-400">
                    Duration
                  </span>
                  <span className="text-sm sm:text-base 2xl:text-xl font-medium text-zinc-950">
                    4 Weeks
                  </span>
                </div>

                <div className="flex flex-col gap-1.5">
                  <span className="text-xs sm:text-sm 2xl:text-base font-normal text-zinc-400">
                    Services
                  </span>
                  <div className="flex flex-col gap-1">
                    {[
                      "Web Design",
                      "UI/UX Design",
                      "E-Commerce Engineering",
                      "Next.js Development",
                    ].map((svc, i) => (
                      <span
                        key={i}
                        className="text-sm sm:text-base 2xl:text-xl font-medium text-zinc-950"
                      >
                        {svc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Narrative Column */}
              <div className="md:col-span-7 w-full">
                <p className="text-base sm:text-lg 2xl:text-2xl leading-relaxed text-zinc-700 font-normal break-words pt-1">
                  PixoraSofttech took our physical roastery experience and captured it flawlessly online. Our online bean subscriptions doubled within two months, and the custom roast selector has received immense praise from our regular customers.
                </p>

                {liveUrl && (
                  <div className="mt-8 pt-6 border-t border-zinc-200">
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-zinc-800 hover:shadow-lg hover:-translate-y-0.5"
                    >
                      Visit Live Website <ArrowUpRight className="size-4" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export { CaseStudyBrewHaven as case_study_brew_haven };

