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

interface CaseStudyGlassHavenProps {
  project?: Project;
}

export default function CaseStudyGlassHaven({ project }: CaseStudyGlassHavenProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(heroScroll, [0, 1], [1, 1.12]);
  const [cardHovered, setCardHovered] = useState(false);

  const title = project?.title || "Glass Haven Luxury Real Estate";
  const heroImage = project?.heroImg || "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85";
  const mobileHeroImage = project?.img || "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85";
  const liveUrl = project?.liveUrl || "";

  const aboutDescription = project?.overview || "Glass Haven represents ultra-luxury architectural residences. PixoraSofttech designed a high-end web destination engineered to evoke luxury, exclusivity, and sophistication for high-net-worth property buyers.";
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
