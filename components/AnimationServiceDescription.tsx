"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { gsap } from "gsap";
import type { ServiceItem } from "@/components/Services";

interface AnimationServiceDescriptionProps {
  activeService: ServiceItem;
  activeIndex: number;
}

// Reusable clean rolling shift text slot (incoming text shifts in from bottom, outgoing shifts up)
function RollingShiftText({
  text,
  className = "",
  lineHeight = 28,
}: {
  text: string;
  className?: string;
  lineHeight?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prevTextRef = useRef(text);
  const [currentPair, setCurrentPair] = useState({
    top: text,
    bottom: text,
  });

  useEffect(() => {
    if (prevTextRef.current === text) return;

    // Top is old text, bottom is new text
    setCurrentPair({
      top: prevTextRef.current,
      bottom: text,
    });
    prevTextRef.current = text;

    const el = containerRef.current;
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.set(el, { y: 0 });

    gsap.to(el, {
      y: -lineHeight,
      duration: 0.6,
      ease: "power2.out",
      onComplete: () => {
        setCurrentPair({
          top: text,
          bottom: text,
        });
        gsap.set(el, { y: 0 });
      },
    });
  }, [text, lineHeight]);

  return (
    <div
      className={`overflow-hidden relative ${className}`}
      style={{ height: `${lineHeight}px` }}
    >
      <div ref={containerRef} className="flex flex-col">
        <div
          className="whitespace-nowrap align-top m-0"
          style={{ height: `${lineHeight}px`, lineHeight: `${lineHeight}px` }}
        >
          {currentPair.top}
        </div>
        <div
          className="whitespace-nowrap align-top m-0"
          style={{ height: `${lineHeight}px`, lineHeight: `${lineHeight}px` }}
        >
          {currentPair.bottom}
        </div>
      </div>
    </div>
  );
}

export default function AnimationServiceDescription({
  activeService,
  activeIndex,
}: AnimationServiceDescriptionProps) {
  const descContainerRef = useRef<HTMLDivElement>(null);
  const tagsContainerRef = useRef<HTMLDivElement>(null);
  const prevServiceRef = useRef(activeService);

  const [descPair, setDescPair] = useState({
    top: activeService.description,
    bottom: activeService.description,
  });

  useEffect(() => {
    if (prevServiceRef.current.id === activeService.id) return;

    setDescPair({
      top: prevServiceRef.current.description,
      bottom: activeService.description,
    });
    prevServiceRef.current = activeService;

    // Roll Description text smoothly
    const descEl = descContainerRef.current;
    if (descEl) {
      gsap.killTweensOf(descEl);
      gsap.fromTo(
        descEl,
        { y: 0, opacity: 1 },
        {
          y: -12,
          opacity: 0,
          duration: 0.25,
          ease: "power2.in",
          onComplete: () => {
            gsap.fromTo(
              descEl,
              { y: 14, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.45,
                ease: "power2.out",
              }
            );
          },
        }
      );
    }

    // Staggered roll-in for capability tags
    const tagBadges = tagsContainerRef.current?.querySelectorAll(".tag-pill");
    if (tagBadges && tagBadges.length > 0) {
      gsap.killTweensOf(tagBadges);
      gsap.fromTo(
        tagBadges,
        { y: 16, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
          stagger: 0.04,
        }
      );
    }
  }, [activeService]);

  return (
    <div className="w-full flex flex-col justify-between mt-3 select-none">
      {/* Eyebrow with clean vertical rolling shift */}
      <RollingShiftText
        text={activeService.eyebrow}
        lineHeight={28}
        className="text-sm sm:text-base lg:text-lg font-medium text-slate-700 leading-snug"
      />

      {/* Description paragraph with smooth vertical shift transition */}
      <div className="min-h-[72px] sm:min-h-[64px] mt-3">
        <p
          ref={descContainerRef}
          className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed max-w-xl"
        >
          {activeService.description}
        </p>
      </div>

      {/* Capability Tags with staggered slide-up roll */}
      <div ref={tagsContainerRef} className="mt-5 sm:mt-6 flex flex-wrap gap-2">
        {activeService.tags.map((tag) => (
          <span
            key={tag}
            className="tag-pill inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-black/[0.05] border border-black/10 text-black backdrop-blur-sm"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-[#0A2540]" />
            {tag}
          </span>
        ))}
      </div>

      {/* Action CTAs with rolling shift inside the button */}
      <div className="mt-7 sm:mt-8 flex items-center gap-4">
        <Link
          href={`/services/${activeService.slug}`}
          className="group inline-flex items-center gap-2.5 rounded-full bg-[#0A2540] px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#143960] active:scale-95 hover:shadow-xl"
        >
          <RollingShiftText
            text={`Explore ${activeService.title}`}
            lineHeight={20}
            className="font-semibold text-white"
          />
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/70 backdrop-blur-md px-5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-black transition-all duration-300 hover:bg-black hover:text-white"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}

// Export LayeredText alias
export { AnimationServiceDescription as LayeredText };
