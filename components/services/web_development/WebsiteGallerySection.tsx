"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const GALLERY_IMAGES = [
  { src: "/portfolio/glass-haven.png", alt: "Glass Haven responsive website" },
  { src: "/portfolio/goody-supplies.png", alt: "Goody Supplies online storefront" },
  { src: "/portfolio/brew-haven.png", alt: "Brew Haven e-commerce website" },
  { src: "/portfolio/travel-hotel-hub.png", alt: "Travel and hotel booking website" },
  { src: "/portfolio/eduka-college.png", alt: "Education website and student portal" },
  { src: "/portfolio/solar-solutions.png", alt: "Solar solutions company website" },
  { src: "/portfolio/state-college.png", alt: "College website and information portal" },
  { src: "/portfolio/zostel.png", alt: "Zostel travel booking experience" },
  { src: "/portfolio/kb-exports.png", alt: "KB Exports business website" },
  { src: "/portfolio/salon-dashboard.png", alt: "Salon service booking website" },
  { src: "/portfolio/supplier.png", alt: "Supplier product catalog website" },
  { src: "/portfolio/crm-dashboard.png", alt: "Customer-facing business dashboard" },
  { src: "/portfolio/lms-dashboard.png", alt: "Learning platform website" },
  { src: "/portfolio/solar-solutions.png", alt: "Solar services landing page" },
  { src: "/portfolio/glass-haven.png", alt: "Glass Haven product showcase" },
  { src: "/portfolio/goody-supplies.png", alt: "Online product catalog" },
  { src: "/portfolio/travel-hotel-hub.png", alt: "Hotel discovery and booking interface" },
  { src: "/portfolio/brew-haven.png", alt: "Cafe ordering storefront" },
  { src: "/portfolio/eduka-college.png", alt: "College admissions website" },
  { src: "/portfolio/zostel.png", alt: "Hospitality booking website" },
  { src: "/portfolio/kb-exports.png", alt: "B2B export company website" },
  { src: "/portfolio/state-college.png", alt: "Higher education website" },
  { src: "/portfolio/salon-dashboard.png", alt: "Appointment booking interface" },
  { src: "/portfolio/supplier.png", alt: "B2B supplier catalog" },
  { src: "/portfolio/goody-supplies.png", alt: "Retail e-commerce experience" },
  { src: "/portfolio/travel-hotel-hub.png", alt: "Travel planning website" },
  { src: "/portfolio/glass-haven.png", alt: "Product-focused company website" },
  { src: "/portfolio/brew-haven.png", alt: "Restaurant ordering website" },
  { src: "/portfolio/solar-solutions.png", alt: "Renewable energy service website" },
];

const IMAGE_COLUMNS = Array.from({ length: 6 }, (_, columnIndex) =>
  Array.from({ length: 10 }, (_, cardIndex) =>
    GALLERY_IMAGES[(cardIndex * 4 + columnIndex) % GALLERY_IMAGES.length],
  ),
);

export default function SoftwareGallerySection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="Website design and development gallery"
      className="relative flex h-[440px] items-center justify-center overflow-hidden bg-transparent sm:h-[540px] md:h-[620px] 2xl:h-[700px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-35 [background-image:radial-gradient(#94a3b8_0.65px,transparent_0.65px)] [background-size:22px_22px]"
      />

      <div className="absolute left-1/2 top-1/2 h-[1900px] w-[3200px] -translate-x-1/2 -translate-y-1/2 scale-[0.75] sm:scale-[0.88] md:scale-100 lg:scale-[1.12] xl:scale-[1.22] 2xl:scale-[1.32] min-[2560px]:scale-[1.45] min-[3000px]:scale-[1.58]">
        <div
          className="relative grid h-full w-full origin-center grid-cols-6 gap-5 sm:gap-6 xl:gap-8"
          style={{ transform: "perspective(1200px) rotateX(55deg) rotateZ(-45deg)" }}
        >
          {IMAGE_COLUMNS.map((column, columnIndex) => (
            <motion.div
              key={`gallery-column-${columnIndex}`}
              animate={{ y: prefersReducedMotion ? 0 : columnIndex % 2 === 0 ? 100 : -100 }}
              transition={{
                duration: columnIndex % 2 === 0 ? 10 : 15,
                repeat: prefersReducedMotion ? 0 : Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="relative flex flex-col items-start justify-center gap-5 sm:gap-6 xl:gap-8"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-4 -top-4 h-[calc(100%+2rem)] w-[calc(100%+2rem)] border-l border-dashed border-slate-400/40"
              />
              {column.map((item, cardIndex) => (
                <div
                  key={`${item.src}-${cardIndex}`}
                  className="group relative aspect-[970/700] w-full overflow-hidden rounded-xl border border-slate-300/70 bg-slate-200 shadow-[0_18px_40px_-24px_rgba(10,37,64,0.5)] ring-1 ring-white/70"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 3000px) 650px, (min-width: 2560px) 600px, (min-width: 1280px) 520px, (min-width: 768px) 430px, 360px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
