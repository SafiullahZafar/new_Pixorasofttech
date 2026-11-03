"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const GALLERY_IMAGES = [
  { src: "/portfolio/fitpulse-app.png", alt: "FitPulse mobile fitness app" },
  { src: "/portfolio/shopease-app.png", alt: "ShopEase mobile shopping app" },
  { src: "/portfolio/irider-app.png", alt: "iRider mobile ride booking app" },
  { src: "/portfolio/fitpulse-app.png", alt: "Fitness tracking and activity screens" },
  { src: "/portfolio/shopease-app.png", alt: "Mobile product browsing and checkout" },
  { src: "/portfolio/irider-app.png", alt: "Ride booking and trip details interface" },
  { src: "/portfolio/fitpulse-app.png", alt: "Workout planning app interface" },
  { src: "/portfolio/shopease-app.png", alt: "Shopping cart and order experience" },
  { src: "/portfolio/irider-app.png", alt: "Passenger trip management app" },
  { src: "/portfolio/fitpulse-app.png", alt: "Health and fitness mobile experience" },
  { src: "/portfolio/shopease-app.png", alt: "Retail mobile commerce platform" },
  { src: "/portfolio/irider-app.png", alt: "On-demand transport app" },
  { src: "/portfolio/fitpulse-app.png", alt: "Personal fitness dashboard on mobile" },
  { src: "/portfolio/shopease-app.png", alt: "Mobile storefront and product catalog" },
  { src: "/portfolio/irider-app.png", alt: "Driver and rider mobile workflow" },
  { src: "/portfolio/fitpulse-app.png", alt: "Fitness goals and progress screens" },
  { src: "/portfolio/shopease-app.png", alt: "Mobile order and payment flow" },
  { src: "/portfolio/irider-app.png", alt: "Location-aware ride booking experience" },
  { src: "/portfolio/fitpulse-app.png", alt: "Mobile wellness product" },
  { src: "/portfolio/shopease-app.png", alt: "Shopping app product details" },
  { src: "/portfolio/irider-app.png", alt: "Ride tracking mobile interface" },
  { src: "/portfolio/fitpulse-app.png", alt: "Activity tracking interface" },
  { src: "/portfolio/shopease-app.png", alt: "Customer shopping experience" },
  { src: "/portfolio/irider-app.png", alt: "Mobile trip booking interface" },
  { src: "/portfolio/fitpulse-app.png", alt: "Fitness app progress overview" },
  { src: "/portfolio/shopease-app.png", alt: "Retail shopping experience on mobile" },
  { src: "/portfolio/irider-app.png", alt: "Ride service mobile application" },
  { src: "/portfolio/fitpulse-app.png", alt: "Wellness app home screen" },
  { src: "/portfolio/shopease-app.png", alt: "E-commerce app product interface" },
];

const IMAGE_COLUMNS = Array.from({ length: 6 }, (_, columnIndex) =>
  Array.from({ length: 10 }, (_, cardIndex) =>
    GALLERY_IMAGES[(cardIndex * 4 + columnIndex) % GALLERY_IMAGES.length],
  ),
);

export default function MobileAppGallerySection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="Mobile app interface gallery"
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
