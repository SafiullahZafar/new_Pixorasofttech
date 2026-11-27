"use client";

import React, { useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import type { Project } from "@/lib/projects";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import EditorialSection from "./sections/EditorialSection";
import ShowcaseSection from "./sections/ShowcaseSection";
import BrandingSection from "./sections/BrandingSection";
import SummarySection from "./sections/SummarySection";

interface CaseStudyStateCollegeProps {
  project?: Project;
}

export default function CaseStudyStateCollege({ project }: CaseStudyStateCollegeProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(heroScroll, [0, 1], [1, 1.12]);
  const [cardHovered, setCardHovered] = useState(false);

  const title = project?.title || "State College Digital Campus";
  const heroImage = project?.heroImg || "/images/unsplash/photo-1523240795612-9a054b0db644-8087b87f23.jpg";
  const mobileHeroImage = project?.img || "/images/unsplash/photo-1523240795612-9a054b0db644-8087b87f23.jpg";
  const liveUrl = project?.liveUrl || "";

  const aboutDescription = project?.overview || "State College serves over 15,000 enrolled students and faculty. PixoraSoftTech re-engineered the institution’s core web infrastructure to deliver fast, mobile-friendly access to academic resources, research publications, and administrative forms.";
  const challengeText = project?.challenge || "";
  const solutionText = project?.solution || "";
  const resultsText = project?.keyFeatures.slice(0, 3).join(". ") || "";

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
      <SummarySection liveUrl={liveUrl} project={project} />
    </div>
  );
}
