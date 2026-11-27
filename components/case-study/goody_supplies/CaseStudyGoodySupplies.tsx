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

interface CaseStudyGoodySuppliesProps {
  project?: Project;
}

export default function CaseStudyGoodySupplies({ project }: CaseStudyGoodySuppliesProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(heroScroll, [0, 1], [1, 1.12]);
  const [cardHovered, setCardHovered] = useState(false);

  const title = project?.title || "Goody Supplies Catering";
  const heroImage = project?.heroImg || "/images/unsplash/photo-1511795409834-ef04bbd61622-69134cd0ce.jpg";
  const mobileHeroImage = project?.img || "/images/unsplash/photo-1511795409834-ef04bbd61622-69134cd0ce.jpg";
  const liveUrl = project?.liveUrl || "";

  const aboutDescription = project?.overview || "Goody Supplies provides premium culinary services for corporate events and weddings. PixoraSoftTech created an appetizing digital storefront showcasing artisanal menus, dietary customization options, and instant event budgeting.";
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
