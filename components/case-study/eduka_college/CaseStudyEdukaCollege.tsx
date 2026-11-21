"use client";

import React, { useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import type { Project } from "@/lib/projects";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import EditorialSection from "./sections/EditorialSection";
import ShowcaseSection from "./sections/ShowcaseSection";
import BrandingSection from "./sections/BrandingSection";
import MetricsSection from "./sections/MetricsSection";
import SummarySection from "./sections/SummarySection";

interface CaseStudyEdukaCollegeProps {
  project?: Project;
}

export default function CaseStudyEdukaCollege({ project }: CaseStudyEdukaCollegeProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(heroScroll, [0, 1], [1, 1.12]);
  const [cardHovered, setCardHovered] = useState(false);

  const title = project?.title || "Eduka College Portal";
  const heroImage = project?.heroImg || "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=85";
  const mobileHeroImage = project?.img || "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=85";
  const liveUrl = project?.liveUrl || "";

  const aboutDescription = project?.overview || "Eduka College required a complete digital transformation to streamline prospective student inquiries, present 40+ degree programs, and provide current students with instant access to academic announcements and campus portals.";
  const challengeText = project?.challenge || "";
  const solutionText = project?.solution || "";
  const resultsText = project?.results.join(". ") || "";

  return (
    <div className="w-full bg-[#f5f5f5] text-slate-900 font-sans selection:bg-black selection:text-white">
      <HeroSection
        heroRef={heroRef}
        heroScale={heroScale}
        mobileHeroImage={mobileHeroImage}
        heroImage={heroImage}
        title={title}
      />
      <AboutSection aboutDescription={aboutDescription} />
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
      <ShowcaseSection />
      <BrandingSection />
      <MetricsSection project={project} />
      <SummarySection liveUrl={liveUrl} project={project} />
    </div>
  );
}
