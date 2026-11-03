"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const GALLERY_IMAGES = [
  { src: "/portfolio/delivery-dashboard.png", alt: "Cloud operations and delivery analytics dashboard" },
  { src: "/portfolio/flowcrm-dashboard.png", alt: "Connected CRM and customer data platform" },
  { src: "/portfolio/inventory-dashboard.png", alt: "Cloud inventory management system" },
  { src: "/portfolio/hr-dashboard.png", alt: "Cloud-hosted people operations platform" },
  { src: "/portfolio/light-crm-dashboard.png", alt: "API-connected CRM reporting dashboard" },
  { src: "/portfolio/lms-dashboard.png", alt: "Learning platform with cloud-managed content" },
  { src: "/portfolio/delivery-dashboard.png", alt: "Live fleet data and operations interface" },
  { src: "/portfolio/crm-dashboard.png", alt: "Customer data and analytics application" },
  { src: "/portfolio/light-inventory-dashboard.png", alt: "Inventory service dashboard" },
  { src: "/portfolio/hr-dashboard.png", alt: "Cloud HR management interface" },
  { src: "/portfolio/flowcrm-dashboard.png", alt: "Sales workflow automation dashboard" },
  { src: "/portfolio/inventory-dashboard.png", alt: "Real-time stock and inventory reporting" },
  { src: "/portfolio/delivery-dashboard.png", alt: "Cloud-based logistics system" },
  { src: "/portfolio/light-crm-dashboard.png", alt: "Integrated customer management system" },
  { src: "/portfolio/lms-dashboard.png", alt: "Cloud learning management dashboard" },
  { src: "/portfolio/crm-dashboard.png", alt: "API-connected customer operations" },
  { src: "/portfolio/hr-dashboard.png", alt: "Secure team administration platform" },
  { src: "/portfolio/light-inventory-dashboard.png", alt: "Connected inventory data interface" },
  { src: "/portfolio/delivery-dashboard.png", alt: "Operational analytics on cloud infrastructure" },
  { src: "/portfolio/flowcrm-dashboard.png", alt: "Workflow automation for customer teams" },
  { src: "/portfolio/inventory-dashboard.png", alt: "Scalable inventory operations dashboard" },
  { src: "/portfolio/light-crm-dashboard.png", alt: "Business intelligence and CRM reporting" },
  { src: "/portfolio/lms-dashboard.png", alt: "Digital learning service dashboard" },
  { src: "/portfolio/hr-dashboard.png", alt: "Cloud-based staff management application" },
  { src: "/portfolio/crm-dashboard.png", alt: "Connected customer platform interface" },
  { src: "/portfolio/delivery-dashboard.png", alt: "Live logistics platform metrics" },
  { src: "/portfolio/flowcrm-dashboard.png", alt: "AI-ready customer data interface" },
  { src: "/portfolio/light-inventory-dashboard.png", alt: "Automated inventory tracking dashboard" },
];

const IMAGE_COLUMNS = Array.from({ length: 6 }, (_, columnIndex) =>
  Array.from({ length: 10 }, (_, cardIndex) =>
    GALLERY_IMAGES[(cardIndex * 4 + columnIndex) % GALLERY_IMAGES.length],
  ),
);

export default function CloudAIGallerySection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="Cloud and AI product gallery"
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
