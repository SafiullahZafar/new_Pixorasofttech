"use client";

import * as React from "react";
import Image from "next/image";
import {
  type HTMLMotionProps,
  type MotionValue,
  type Variants,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface ContainerScrollContextValue {
  scrollYProgress: MotionValue<number>;
}

const SPRING_CONFIG = {
  type: "spring" as const,
  stiffness: 100,
  damping: 16,
  mass: 0.75,
  restDelta: 0.005,
  duration: 0.3,
};

const blurVariants: Variants = {
  hidden: { filter: "blur(10px)", opacity: 0 },
  visible: { filter: "blur(0px)", opacity: 1 },
};

const ContainerScrollContext = React.createContext<
  ContainerScrollContextValue | undefined
>(undefined);

function useContainerScrollContext() {
  const context = React.useContext(ContainerScrollContext);
  if (!context) {
    throw new Error("useContainerScrollContext must be used within ContainerScroll");
  }
  return context;
}

export const ContainerScroll = ({
  children,
  className,
  style,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: scrollRef });

  return (
    <ContainerScrollContext.Provider value={{ scrollYProgress }}>
      <div
        ref={scrollRef}
        className={cn("relative min-h-[120vh]", className)}
        style={{
          perspective: "1000px",
          perspectiveOrigin: "center top",
          transformStyle: "preserve-3d",
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    </ContainerScrollContext.Provider>
  );
};
ContainerScroll.displayName = "ContainerScroll";

export const ContainerSticky = ({
  className,
  style,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("sticky left-0 top-0 min-h-[30rem] w-full overflow-hidden", className)}
    style={{
      perspective: "1000px",
      perspectiveOrigin: "center top",
      transformStyle: "preserve-3d",
      transformOrigin: "50% 50%",
      ...style,
    }}
    {...props}
  />
);
ContainerSticky.displayName = "ContainerSticky";

export const GalleryContainer = ({
  children,
  className,
  style,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & HTMLMotionProps<"div">) => {
  const { scrollYProgress } = useContainerScrollContext();
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [75, 0]);
  const scale = useTransform(scrollYProgress, [0.5, 0.9], [1.2, 1]);

  return (
    <motion.div
      className={cn("relative grid size-full grid-cols-2 gap-2 rounded-2xl sm:grid-cols-3 sm:gap-3", className)}
      style={{
        rotateX,
        scale,
        transformStyle: "preserve-3d",
        perspective: "1000px",
        ...style,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
GalleryContainer.displayName = "GalleryContainer";

export const GalleryCol = ({
  className,
  style,
  yRange = ["0%", "-10%"],
  ...props
}: HTMLMotionProps<"div"> & { yRange?: string[] }) => {
  const { scrollYProgress } = useContainerScrollContext();
  const y = useTransform(scrollYProgress, [0.5, 1], yRange as [string, string]);

  return (
    <motion.div
      className={cn("relative flex w-full flex-col gap-2 sm:gap-3", className)}
      style={{ y, ...style }}
      {...props}
    />
  );
};
GalleryCol.displayName = "GalleryCol";

export const ContainerStagger = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<"div">
>(({ className, viewport, transition, ...props }, ref) => (
  <motion.div
    className={cn("relative", className)}
    ref={ref}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, ...viewport }}
    transition={{ staggerChildren: transition?.staggerChildren || 0.2, ...transition }}
    {...props}
  />
));
ContainerStagger.displayName = "ContainerStagger";

export const ContainerAnimated = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<"div">
>(({ className, transition, ...props }, ref) => (
  <motion.div
    ref={ref}
    className={cn(className)}
    variants={blurVariants}
    transition={SPRING_CONFIG || transition}
    {...props}
  />
));
ContainerAnimated.displayName = "ContainerAnimated";

const galleryColumns = [
  [
    { src: "/portfolio/brew-haven.png", title: "Brew Haven" },
    { src: "/portfolio/eduka-college.png", title: "Eduka College" },
    { src: "/portfolio/fitpulse-app.png", title: "FitPulse" },
    { src: "/portfolio/solar-solutions.png", title: "Solar Solutions" },
    { src: "/portfolio/zostel.png", title: "Zostel" },
  ],
  [
    { src: "/portfolio/kb-exports.png", title: "K.B. Exports" },
    { src: "/portfolio/flowcrm-dashboard.png", title: "Flow CRM" },
    { src: "/portfolio/shopease-app.png", title: "ShopEase" },
    { src: "/portfolio/supplier.png", title: "Supplier Portal" },
    { src: "/portfolio/travel-hotel-hub.png", title: "Travel Hotel Hub" },
  ],
  [
    { src: "/portfolio/crm-dashboard.png", title: "CRM Dashboard" },
    { src: "/portfolio/irider-app.png", title: "iRider" },
    { src: "/portfolio/lms-dashboard.png", title: "Learning Platform" },
    { src: "/portfolio/goody-supplies.png", title: "Goody Supplies" },
    { src: "/portfolio/glass-haven.png", title: "Glass Haven" },
  ],
];

export default function ProjectAnimation() {
  return (
    <section aria-label="Project image gallery">
      <ContainerScroll className="min-h-[160svh] px-4 py-12 sm:px-8 sm:py-16 lg:px-16">
        <div className="mx-auto mb-8 w-full max-w-[1800px] text-center sm:mb-10 lg:mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#0A2540]/60 sm:text-sm">
            Selected work
          </p>
          <h2 className="text-balance text-[clamp(2rem,4vw,4.25rem)] font-semibold leading-[1.08] tracking-[-0.04em] text-[#111]">
            Projects built to make a difference
          </h2>
        </div>
        <ContainerSticky className="top-16 h-[78svh] min-h-[30rem] max-h-[850px]">
          <GalleryContainer className="overflow-visible">
            {galleryColumns.map((column, columnIndex) => (
              <GalleryCol
                key={`project-column-${columnIndex}`}
                className={cn(columnIndex === 2 && "hidden sm:flex")}
                yRange={columnIndex === 1 ? ["-2%", "-18%"] : ["0%", "-12%"]}
              >
                <ContainerStagger className="flex flex-col gap-2 sm:gap-3" transition={{ staggerChildren: 0.12 }}>
                  {column.map((project) => (
                    <ContainerAnimated
                      key={project.src}
                      transition={{ duration: 0.65, ease: "easeOut" }}
                      className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-200 shadow-[0_12px_35px_rgba(15,23,42,0.15)] sm:rounded-2xl"
                    >
                      <Image
                        src={project.src}
                        alt={`${project.title} project preview`}
                        fill
                        sizes="(max-width: 639px) 48vw, (max-width: 1023px) 32vw, 30vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                      <p className="absolute bottom-3 left-3 text-xs font-semibold tracking-wide text-white sm:bottom-5 sm:left-5 sm:text-base">
                        {project.title}
                      </p>
                    </ContainerAnimated>
                  ))}
                </ContainerStagger>
              </GalleryCol>
            ))}
          </GalleryContainer>
        </ContainerSticky>
      </ContainerScroll>
    </section>
  );
}
