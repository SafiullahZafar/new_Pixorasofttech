"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const GALLERY_IMAGES = [
  { src: "/portfolio/flowcrm-dashboard.png", alt: "CRM analytics interface and data hierarchy" },
  { src: "/portfolio/shopease-app.png", alt: "Shopping app interface and product discovery" },
  { src: "/portfolio/lms-dashboard.png", alt: "Learning platform dashboard design" },
  { src: "/portfolio/glass-haven.png", alt: "Product website visual design" },
  { src: "/portfolio/fitpulse-app.png", alt: "Fitness app user experience" },
  { src: "/portfolio/crm-dashboard.png", alt: "Customer management dashboard interface" },
  { src: "/portfolio/eduka-college.png", alt: "Education platform interface design" },
  { src: "/portfolio/irider-app.png", alt: "Ride booking mobile experience" },
  { src: "/portfolio/light-crm-dashboard.png", alt: "CRM reporting interface" },
  { src: "/portfolio/travel-hotel-hub.png", alt: "Travel booking website experience" },
  { src: "/portfolio/inventory-dashboard.png", alt: "Inventory dashboard information design" },
  { src: "/portfolio/solar-solutions.png", alt: "Energy services website design" },
  { src: "/portfolio/flowcrm-dashboard.png", alt: "Sales workspace interface" },
  { src: "/portfolio/shopease-app.png", alt: "Mobile commerce interaction design" },
  { src: "/portfolio/lms-dashboard.png", alt: "Course management user interface" },
  { src: "/portfolio/glass-haven.png", alt: "Responsive product experience" },
  { src: "/portfolio/fitpulse-app.png", alt: "Health product screen design" },
  { src: "/portfolio/crm-dashboard.png", alt: "CRM navigation and dashboard" },
  { src: "/portfolio/eduka-college.png", alt: "Student portal user experience" },
  { src: "/portfolio/irider-app.png", alt: "Transport app interaction flow" },
  { src: "/portfolio/light-crm-dashboard.png", alt: "Business analytics interface" },
  { src: "/portfolio/travel-hotel-hub.png", alt: "Hospitality booking interface" },
  { src: "/portfolio/inventory-dashboard.png", alt: "Operations dashboard layout" },
  { src: "/portfolio/solar-solutions.png", alt: "Service information architecture" },
  { src: "/portfolio/flowcrm-dashboard.png", alt: "Product dashboard and data visualization" },
  { src: "/portfolio/shopease-app.png", alt: "Retail mobile app design" },
  { src: "/portfolio/lms-dashboard.png", alt: "Learning experience dashboard" },
  { src: "/portfolio/glass-haven.png", alt: "Brand-led website interface" },
  { src: "/portfolio/fitpulse-app.png", alt: "Mobile fitness interaction patterns" },
];

const IMAGE_COLUMNS = Array.from({ length: 6 }, (_, columnIndex) =>
  Array.from({ length: 10 }, (_, cardIndex) =>
    GALLERY_IMAGES[(cardIndex * 4 + columnIndex) % GALLERY_IMAGES.length],
  ),
);

export default function UXGallerySection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="UI and UX design gallery"
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
