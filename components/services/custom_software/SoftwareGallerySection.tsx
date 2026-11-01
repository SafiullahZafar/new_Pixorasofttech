"use client";

import React from "react";
import Image from "next/image";

const MARQUEE_IMAGES = [
  { src: "/salon_system.png", alt: "Salon Management System" },
  { src: "/rms_system.png", alt: "Restaurant Management ERP" },
  { src: "/textile_system.png", alt: "Textile Distribution Platform" },
  { src: "/suppliers.png", alt: "Suppliers & Inventory Network" },
  { src: "/tax_integrated.png", alt: "FBR Tax Integrated System" },
  { src: "/driven_adminPanal1.png", alt: "Driven Logistics Dashboard" },
  { src: "/portfolio/flowcrm-dashboard.png", alt: "Flow CRM Platform" },
  { src: "/portfolio/delivery-dashboard.png", alt: "Dispatch Operations Platform" },
];

export default function SoftwareGallerySection() {
  // Duplicate for seamless infinite loop
  const displayImages = [...MARQUEE_IMAGES, ...MARQUEE_IMAGES, ...MARQUEE_IMAGES];

  return (
    <section className="w-full bg-transparent py-10 sm:py-14 relative overflow-hidden flex items-center justify-center select-none">
      {/* Left Gradient Fade */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-44 bg-gradient-to-r from-[#FAFAFD] to-transparent z-20" />
      {/* Right Gradient Fade */}
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-44 bg-gradient-to-l from-[#FAFAFD] to-transparent z-20" />

      <style jsx>{`
        @keyframes scrollMarquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.333%, 0, 0);
          }
        }
        .marquee-track {
          display: flex;
          gap: 1.5rem;
          width: max-content;
          will-change: transform;
          animation: scrollMarquee 32s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="w-full overflow-hidden py-3">
        <div className="marquee-track">
          {displayImages.map((item, index) => (
            <div
              key={`${item.src}-${index}`}
              className="flex-shrink-0 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 2xl:w-80 2xl:h-80 overflow-hidden cursor-pointer rounded-2xl bg-slate-200 border border-black/5 shadow-xs transition-transform duration-300 hover:scale-[1.03]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={400}
                height={400}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-108"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
