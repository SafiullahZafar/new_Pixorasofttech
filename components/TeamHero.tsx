"use client";

import * as React from "react";
import Link from "next/link";
import { VariantProps, cva } from "class-variance-authority";
import {
  HTMLMotionProps,
  MotionValue,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

const bentoGridVariants = cva(
  "relative grid gap-2 sm:gap-3 lg:gap-3.5 2xl:gap-5 w-full h-full [&>*:first-child]:origin-top-right [&>*:nth-child(3)]:origin-bottom-right [&>*:nth-child(4)]:origin-top-right",
  {
    variants: {
      variant: {
        default: `
          grid-cols-12 grid-rows-[1.3fr_0.35fr_0.25fr_1.1fr]
          [&>*:first-child]:col-span-12 md:[&>*:first-child]:col-span-8 [&>*:first-child]:row-span-3
          [&>*:nth-child(2)]:col-span-6 md:[&>*:nth-child(2)]:col-span-4 md:[&>*:nth-child(2)]:row-span-2 [&>*:nth-child(2)]:hidden md:[&>*:nth-child(2)]:block
          [&>*:nth-child(3)]:col-span-6 md:[&>*:nth-child(3)]:col-span-4 md:[&>*:nth-child(3)]:row-span-2 [&>*:nth-child(3)]:hidden md:[&>*:nth-child(3)]:block
          [&>*:nth-child(4)]:col-span-6 md:[&>*:nth-child(4)]:col-span-4
          [&>*:nth-child(5)]:col-span-6 md:[&>*:nth-child(5)]:col-span-4
        `,
        threeCells: `
          grid-cols-2 grid-rows-2
          [&>*:first-child]:col-span-2
        `,
        fourCells: `
          grid-cols-3 grid-rows-2
          [&>*:first-child]:col-span-1
          [&>*:nth-child(2)]:col-span-2
          [&>*:nth-child(3)]:col-span-2
        `,
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface ContainerScrollContextValue {
  scrollYProgress: MotionValue<number>;
}

const ContainerScrollContext = React.createContext<
  ContainerScrollContextValue | undefined
>(undefined);

function useContainerScrollContext() {
  const context = React.useContext(ContainerScrollContext);
  if (!context) {
    throw new Error(
      "useContainerScrollContext must be used within a ContainerScroll Component"
    );
  }
  return context;
}

const ContainerScroll = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  return (
    <ContainerScrollContext.Provider value={{ scrollYProgress }}>
      <div
        ref={scrollRef}
        className={cn("relative min-h-screen w-full", className)}
        {...props}
      >
        {children}
      </div>
    </ContainerScrollContext.Provider>
  );
};

const BentoGrid = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof bentoGridVariants>
>(({ variant, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(bentoGridVariants({ variant }), className)}
      {...props}
    />
  );
});
BentoGrid.displayName = "BentoGrid";

const BentoCell = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  ({ className, style, ...props }, ref) => {
    const { scrollYProgress } = useContainerScrollContext();
    // Cards do NOT appear at start (opacity 0 from 0 to 0.04).
    // As user scrolls, opacity quickly hits 1 (solid opaque, no washed-out ghost look):
    const opacity = useTransform(scrollYProgress, [0.04, 0.16], [0, 1]);
    const translate = useTransform(scrollYProgress, [0.06, 0.38], ["-20%", "0%"]);
    const scale = useTransform(scrollYProgress, [0.06, 0.38], [0.75, 1]);
    const pointerEvents = useTransform(scrollYProgress, (pos) =>
      pos < 0.08 ? "none" : "auto"
    );

    return (
      <motion.div
        ref={ref}
        className={className}
        style={{ translate, scale, opacity, pointerEvents, ...style }}
        {...props}
      ></motion.div>
    );
  }
);
BentoCell.displayName = "BentoCell";

const ContainerScale = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  ({ className, style, ...props }, ref) => {
    const { scrollYProgress } = useContainerScrollContext();
    // Text stays locked in the center, shrinks smaller and smaller down to 0, then vanishes completely:
    const opacity = useTransform(scrollYProgress, [0, 0.32], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.32], [1, 0]);

    const position = useTransform(scrollYProgress, (pos) =>
      pos >= 0.45 ? "absolute" : "fixed"
    );

    const pointerEvents = useTransform(scrollYProgress, (pos) =>
      pos >= 0.3 ? "none" : "auto"
    );

    return (
      <motion.div
        ref={ref}
        className={cn("left-1/2 top-[58%] sm:top-[59%] size-fit", className)}
        style={{
          translate: "-50% -50%",
          scale,
          position,
          opacity,
          pointerEvents,
          ...style,
        }}
        {...props}
      />
    );
  }
);
ContainerScale.displayName = "ContainerScale";

export default function TeamHero() {
  return (
    <ContainerScroll className="h-[240vh] w-full">
      {/* 1. HERO TITLE & CTA (Fixed in center at start; goes back and shrinks away on scroll) */}
      <ContainerScale className="z-30 w-full max-w-5xl 2xl:max-w-7xl min-[2200px]:max-w-[2400px] px-5 text-center">
        <div className="mx-auto w-full">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#0A2540]/75 sm:mb-6 sm:text-sm 2xl:text-base">
            Team &amp; Technology
          </p>

          <h1 className="mx-auto max-w-[1400px] 2xl:max-w-[2200px] text-balance text-[clamp(2.5rem,5.5vw,7.5rem)] 2xl:text-[clamp(4.5rem,5.5vw,9rem)] font-semibold leading-[1.0] tracking-[-0.05em] text-[#111]">
            The people and technology behind what&apos;s next.
          </h1>

          <p className="mx-auto mt-5 max-w-[50rem] 2xl:max-w-[70rem] text-balance text-[clamp(0.95rem,1.15vw,1.3rem)] 2xl:text-xl leading-[1.7] text-black/60 sm:mt-7">
            We bring product strategy, engineering, and modern technology together to build dependable digital products—from the first idea through launch and beyond.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3 sm:mt-8 sm:gap-4">
            <Link
              href="#who-we-are"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#0A2540] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#143960] hover:shadow-lg hover:-translate-y-0.5"
            >
              How we work <ArrowDown aria-hidden="true" className="size-4" />
            </Link>
            <Link
              href="#tech-leverage"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/15 bg-white/70 px-6 py-3 text-sm font-semibold text-[#111] backdrop-blur-md transition hover:bg-white/95 hover:border-black/30 hover:-translate-y-0.5 shadow-sm"
            >
              Explore our technology <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
      </ContainerScale>

      {/* 2. BENTO GRID (Covers top & bottom almost fully, preserves width margins, responsive up to 3000px) */}
      <div className="sticky top-0 z-10 flex h-[100dvh] min-h-screen w-full flex-col justify-center px-3 sm:px-6 lg:px-8 2xl:px-12 min-[2800px]:px-16 py-1.5 sm:py-2">
        <BentoGrid
          variant="default"
          className="w-full max-w-[1540px] 2xl:max-w-[2000px] min-[2200px]:max-w-[2600px] min-[2800px]:max-w-[2920px] mx-auto h-full min-h-[520px]"
        >
          {/* Card 1: Core Developers & Full-Stack Engineers (Big top card, touches top of screen) */}
          <BentoCell className="group relative overflow-hidden rounded-lg border border-zinc-200/90 bg-zinc-950 shadow-2xl transition-all duration-300">
            <img
              src="/team-hero.jpg"
              alt="PixoraSoftTech Core Developers"
              className="absolute inset-0 size-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              loading="eager"
            />
            {/* Elegant vignette gradient so text is razor-sharp */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/25" />

            <div className="relative z-10 flex h-full flex-col justify-between p-4 sm:p-6 lg:p-7 2xl:p-9 min-[2200px]:p-11 text-white">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full border border-white/20 bg-black/50 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                  Core Engineering &bull; Full-Stack
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-emerald-300 backdrop-blur-md">
                  Active Production
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold tracking-tight text-white max-w-2xl 2xl:max-w-4xl leading-tight">
                  Software Engineers &amp; Core Developers
                </h3>
                <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm lg:text-[15px] 2xl:text-lg text-zinc-200/90 leading-relaxed max-w-2xl 2xl:max-w-4xl">
                  Building high-performance web applications, robust backend APIs, and distributed cloud systems with modern stacks.
                </p>

                <div className="mt-2.5 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2 2xl:gap-3 pt-2 sm:pt-3 border-t border-white/15">
                  {["Laravel", "Flutter", "Go", "React", "Next.js", "TypeScript"].map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-white/20 bg-white/10 px-2 sm:px-2.5 2xl:px-3 py-0.5 sm:py-1 2xl:py-1.5 text-[10px] sm:text-[11px] 2xl:text-sm font-medium text-white backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </BentoCell>

          {/* Card 2: UI/UX & Product Designers (Top-Right Side Card - Big, reaches top) */}
          <BentoCell className="group relative overflow-hidden rounded-lg border border-zinc-200/90 bg-zinc-950 shadow-2xl transition-all duration-300">
            <img
              src="/images/unsplash/photo-1581291518857-4e27b48ff24e-9b64bdc104.jpg"
              alt="UI/UX Designers"
              className="absolute inset-0 size-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/25" />

            <div className="relative z-10 flex h-full flex-col justify-between p-4 sm:p-5 lg:p-6 2xl:p-7 min-[2200px]:p-8 text-white">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-300">
                  Design Craft
                </span>
                <span className="rounded-full border border-white/20 bg-black/40 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                  Figma &bull; Prototyping
                </span>
              </div>

              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-blue-300">Product Design</div>
                <h4 className="mt-1 text-base sm:text-lg lg:text-xl 2xl:text-2xl font-semibold text-white">UI/UX Designers</h4>
                <p className="mt-1 text-xs 2xl:text-sm text-zinc-300 leading-relaxed">
                  Crafting intuitive user journeys, interactive design systems, and responsive product interfaces.
                </p>
              </div>
            </div>
          </BentoCell>

          {/* Card 3: Frontend & Mobile Developers (Bottom-Right Side Card - Big & Spacious) */}
          <BentoCell className="group relative overflow-hidden rounded-lg border border-zinc-200/90 bg-zinc-950 shadow-2xl transition-all duration-300">
            <img
              src="/images/unsplash/photo-1555066931-4365d14bab8c-aeda8297fe.jpg"
              alt="Frontend & Mobile Developers"
              className="absolute inset-0 size-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/25" />

            <div className="relative z-10 flex h-full flex-col justify-between p-4 sm:p-5 lg:p-6 2xl:p-7 min-[2200px]:p-8 text-white">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-indigo-300">
                  Client Engineering
                </span>
                <span className="rounded-full border border-white/20 bg-black/40 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                  iOS &bull; Android &bull; Web
                </span>
              </div>

              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-indigo-300">App Specialists</div>
                <h4 className="mt-1 text-base sm:text-lg lg:text-xl 2xl:text-2xl font-semibold text-white">Frontend &amp; Mobile Developers</h4>
                <p className="mt-1 text-xs 2xl:text-sm text-zinc-300 leading-relaxed">
                  Delivering 60fps mobile applications and smooth, accessible client-side web interactions.
                </p>
              </div>
            </div>
          </BentoCell>

          {/* Card 4: DevOps & Cloud Engineers (Bottom-Left Card - Responsive) */}
          <BentoCell className="group relative overflow-hidden rounded-lg border border-zinc-200/90 bg-zinc-950 shadow-2xl transition-all duration-300">
            <img
              src="/images/unsplash/photo-1522071820081-009f0129c71c-04e8b9aae8.jpg"
              alt="DevOps & Cloud Engineers"
              className="absolute inset-0 size-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/25" />

            <div className="relative z-10 flex h-full flex-col justify-between p-4 sm:p-5 lg:p-6 2xl:p-7 min-[2200px]:p-8 text-white">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-300">
                  Cloud Infrastructure
                </span>
                <span className="rounded-full border border-blue-400/30 bg-blue-950/50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-blue-300 backdrop-blur-md">
                  CI/CD &bull; Kubernetes
                </span>
              </div>

              <div>
                <h4 className="text-base sm:text-lg 2xl:text-xl font-semibold text-white">
                  DevOps &amp; Cloud Engineers
                </h4>
                <p className="mt-1 text-xs 2xl:text-sm text-zinc-300 leading-relaxed">
                  Automating continuous deployment pipelines, container clusters, and cloud environments.
                </p>
                <div className="mt-2.5 flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                  <span className="rounded border border-white/15 bg-white/10 px-2 py-0.5 text-[10px] 2xl:text-xs font-medium text-zinc-200">
                    Automated Pipelines
                  </span>
                  <span className="rounded border border-white/15 bg-white/10 px-2 py-0.5 text-[10px] 2xl:text-xs font-medium text-zinc-200">
                    Zero-Downtime Rollouts
                  </span>
                </div>
              </div>
            </div>
          </BentoCell>

          {/* Card 5: QA & Security Specialists (Bottom-Center Card - Responsive) */}
          <BentoCell className="group relative overflow-hidden rounded-lg border border-zinc-200/90 bg-zinc-950 shadow-2xl transition-all duration-300">
            <img
              src="/images/unsplash/photo-1451187580459-43490279c0fa-4358ccef32.jpg"
              alt="QA & Security Specialists"
              className="absolute inset-0 size-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/25" />

            <div className="relative z-10 flex h-full flex-col justify-between p-4 sm:p-5 lg:p-6 2xl:p-7 min-[2200px]:p-8 text-white">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-300">
                  Reliability &amp; QA
                </span>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-950/50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-300 backdrop-blur-md">
                  Security-First
                </span>
              </div>

              <div>
                <h4 className="text-base sm:text-lg 2xl:text-xl font-semibold text-white">
                  QA &amp; Security Specialists
                </h4>
                <p className="mt-1 text-xs 2xl:text-sm text-zinc-300 leading-relaxed">
                  Validating software reliability with end-to-end testing, zero-trust security, and performance audits.
                </p>
                <div className="mt-2.5 flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                  <span className="rounded border border-white/15 bg-white/10 px-2 py-0.5 text-[10px] 2xl:text-xs font-medium text-zinc-200">
                    Automated Test Suites
                  </span>
                  <span className="rounded border border-white/15 bg-white/10 px-2 py-0.5 text-[10px] 2xl:text-xs font-medium text-zinc-200">
                    Bank-Grade Security
                  </span>
                </div>
              </div>
            </div>
          </BentoCell>
        </BentoGrid>
      </div>
    </ContainerScroll>
  );
}

export { ContainerScroll, BentoGrid, BentoCell, ContainerScale };
