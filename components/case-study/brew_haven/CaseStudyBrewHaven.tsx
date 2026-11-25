"use client";

import React, { useRef, useState } from "react";
// import Link from "next/link";
import { useScroll, useTransform } from "framer-motion";
// import { ArrowLeft } from "lucide-react";
import type { Project } from "@/lib/projects";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import EditorialSection from "./sections/EditorialSection";
import ShowcaseSection from "./sections/ShowcaseSection";
import BrandingSection from "./sections/BrandingSection";
import SummarySection from "./sections/SummarySection";

// ── Word-by-Word Text Reveal (Matches reference UI exactly) ────────────────
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

  const resultsText = project?.keyFeatures.slice(0, 3).join(". ") || "";

  return (
    <div className="w-full bg-[#f5f5f5] text-slate-900 font-sans selection:bg-black selection:text-white">
      {/* ── Top Back Navigation Floating Pill ── */}
      {/* <div className="fixed top-20 sm:top-24 left-4 sm:left-8 z-40">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/85 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-800 shadow-md backdrop-blur-md transition hover:bg-white hover:border-black/25 hover:-translate-y-0.5"
        >
          <ArrowLeft className="size-4" /> All Projects
        </Link>
      </div> */}

      {/* ── 1. HERO PARALLAX SECTION (Module 6499) ── */}
      <HeroSection
        heroRef={heroRef}
        heroScale={heroScale}
        mobileHeroImage={mobileHeroImage}
        heroImage={heroImage}
        title={title}
      />

      {/* ── 2. ABOUT SECTION (Module 89778 - Signature Editorial Split & Clip-Path Reveal) ── */}
      <AboutSection
        aboutDescription={aboutDescription}
      />

      {/* ── 3. THE DARK EDITORIAL SECTION (Module 83359 - The Challenge, Solution, Showcase Card, & Results) ── */}
      <EditorialSection
        title={title}
        challengeText={challengeText}
        solutionText={solutionText}
        resultsText={resultsText}
        heroImage={heroImage}
        liveUrl={liveUrl}
        cardHovered={cardHovered}
        setCardHovered={setCardHovered}
      />

      {/* ── 4. SHOWCASE 3-IMAGE GRID (Module 944) ── */}
      <ShowcaseSection />
      {/* ── 6. BRANDING & DESIGN SYSTEM SECTION (#F3F3F7) ── */}
      <BrandingSection />

      {/* ── 5. KEY METRICS & TAKEAWAYS SECTION ── */}


      {/* ── 6. PROJECT SUMMARY SECTION (Module 13141) ── */}
      <SummarySection
        liveUrl={liveUrl}
      />
    </div>
  );
}

