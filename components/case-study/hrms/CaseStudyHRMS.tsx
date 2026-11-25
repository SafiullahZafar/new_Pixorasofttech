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
interface CaseStudyHRMSProps {
  project?: Project;
}

export default function CaseStudyHRMS({ project }: CaseStudyHRMSProps) {
  // Hero Parallax Scroll
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(heroScroll, [0, 1], [1, 1.12]);

  // Showcase Card Hover
  const [cardHovered, setCardHovered] = useState(false);

  const title = project?.title || "HRMS — Workforce Management System";
  const heroImage = "/portfolio/hr-dashboard.png";
  const heroDemoImage = "/case_studies/hrms_soft/hrms_hero_soft_01.png";
  const liveUrl = project?.liveUrl || "";

  const aboutDescription = project?.overview || "The HRMS brings employee records, attendance, shifts, and leave requests into one workforce management workspace.";

  const challengeText = project?.challenge || "Employee records, attendance, schedules, and leave requests were spread across separate processes.";

  const solutionText = project?.solution || "We organized employee profiles, attendance, shifts, and leave tracking in one HR workspace.";

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
        mobileHeroImage={heroDemoImage}
        heroImage={heroDemoImage}
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
        heroImage={heroDemoImage}
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
      <SummarySection liveUrl={liveUrl} project={project} />
    </div>
  );
}

