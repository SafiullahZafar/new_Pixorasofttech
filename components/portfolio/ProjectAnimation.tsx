"use client";

import * as React from "react";
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
    className={cn("sticky left-0 top-0 min-h-[30rem] w-full overflow-visible", className)}
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
  // Gently compress the gallery as it settles into view; this reverses on scroll-up.
  const scale = useTransform(scrollYProgress, [0.5, 0.9], [1, 0.96]);

  return (
    <motion.div
      className={cn("relative grid size-full grid-cols-3 gap-2 rounded-2xl sm:gap-4", className)}
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
    { src: "/case_studies/driven_app/driven_work_app_02.webp", title: "Driven Mobility App" },
    { src: "/case_studies/salon_soft/salon_about_soft_01_updated.png", title: "Veloura Salon App" },
    // { src: "/case_studies/kb_exports_web/kb_exports_work_web_02.png", title: "K.B. Exports & Solar Solutions" },
    { src: "/case_studies/eduka_college_web/eduka_college_about_web_02.png", title: "Eduka College" },
  ],
  [
    { src: "/about_page/saas_cus/driven-dashboard-tablet-mockup.png", title: "Driven Fleet Operations & Admin Console" },
    { src: "/case_studies/zostel_web/zostel_hero_web_01_updated.png", title: "Zostel Travel & Hostels" },
    { src: "/about_page/software_dev/nexora-crm-tablet-activity-dashboard.png", title: "CRM Sales System" },
  ],
  [
    { src: "/about_page/software_dev/futuristic-textile-erp-dashboard-mockup.png", title: "Textile ERP & Production System" },
    { src: "/about_page/web_dev/engineering-textile-solutions-laptop-mockup-1.png", title: "K.B. Exports" },
    { src: "/home_page/our_projects/rms_store_inventory_manager.png", title: "RMS — Store & Inventory Manager" },
  ],
];

export default function ProjectAnimation() {
  const [columnTravel, setColumnTravel] = React.useState("0%");

  React.useEffect(() => {
    const updateTravel = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const columnCount = 3;
      const horizontalPadding = viewportWidth >= 1024 ? 0 : viewportWidth >= 640 ? 64 : 32;
      const gap = viewportWidth >= 640 ? 12 : 8;
      const galleryWidth = Math.min(viewportWidth - horizontalPadding, 1800);
      const columnWidth = Math.max(120, (galleryWidth - gap * (columnCount - 1)) / columnCount);
      const cardHeight = (columnWidth * 10) / 16;
      const columnHeight = galleryColumns[0].length * cardHeight + (galleryColumns[0].length - 1) * gap;
      const stickyHeight = Math.max(0, viewportHeight - 80);
      const travelPercent = Math.min(
        78,
        Math.max(0, ((columnHeight - stickyHeight) / columnHeight) * 100),
      );

      setColumnTravel(`-${travelPercent.toFixed(1)}%`);
    };

    updateTravel();
    window.addEventListener("resize", updateTravel, { passive: true });
    return () => window.removeEventListener("resize", updateTravel);
  }, []);

  return (
    <section aria-label="Project image gallery">
      <ContainerScroll className="min-h-[240svh] px-4 pb-12 pt-3 sm:px-8 sm:pt-5 lg:px-0">
        <div className="mx-auto mb-[clamp(7rem,14vh,10rem)] w-full max-w-[1800px] text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#0A2540]/60 sm:mb-3 sm:text-sm">
            Selected work
          </p>
          <h2 className="text-balance text-[clamp(2rem,4vw,4.25rem)] font-semibold leading-[1.08] tracking-[-0.04em] text-[#111]">
            Projects built to make a difference
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-black/55 sm:mt-5 sm:text-base lg:text-lg">
            Explore live websites, in-progress mobile apps, and business software built to solve real client problems.
          </p>
        </div>
        <ContainerSticky className="top-20 mx-auto h-[calc(100svh-5rem)] min-h-[min(30rem,calc(100svh-5rem))] max-w-[1800px] overflow-visible">
          <GalleryContainer className="overflow-visible">
            {galleryColumns.map((column, columnIndex) => (
              <GalleryCol
                key={`project-column-${columnIndex}`}
                className={cn(
                  columnIndex === 1 && "pt-6 sm:pt-10 lg:pt-14",
                )}
                yRange={columnIndex === 1 ? ["-2%", columnTravel] : ["0%", columnTravel]}
              >
                <ContainerStagger className="flex flex-col gap-2 sm:gap-3" transition={{ staggerChildren: 0.12 }}>
                  {column.map((project) => (
                    <ContainerAnimated
                      key={project.src}
                      transition={{ duration: 0.65, ease: "easeOut" }}
                      className="group relative aspect-[16/10] w-full overflow-hidden rounded-[1.25rem] bg-black/5 sm:rounded-[1.5rem]"
                    >
                      <img
                        src={project.src}
                        alt={`${project.title} project preview`}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                      <p className="pointer-events-none absolute bottom-3 left-3 text-xs font-semibold tracking-wide text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.85)] sm:bottom-5 sm:left-5 sm:text-base">
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
