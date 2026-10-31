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
import {
  ArrowDown,
  ArrowUpRight,
  Activity,
  Users,
  Cpu,
  Zap,
  ShieldCheck,
} from "lucide-react";

import { cn } from "@/lib/utils";

const bentoGridVariants = cva(
  "relative grid gap-2.5 sm:gap-3 md:gap-3.5 w-full h-full [&>*:first-child]:origin-top-right [&>*:nth-child(3)]:origin-bottom-right [&>*:nth-child(4)]:origin-top-right",
  {
    variants: {
      variant: {
        default: `
          grid-cols-8 grid-rows-[1fr_0.5fr_0.5fr_1fr]
          [&>*:first-child]:col-span-8 md:[&>*:first-child]:col-span-6 [&>*:first-child]:row-span-3
          [&>*:nth-child(2)]:col-span-2 md:[&>*:nth-child(2)]:row-span-2 [&>*:nth-child(2)]:hidden md:[&>*:nth-child(2)]:block
          [&>*:nth-child(3)]:col-span-2 md:[&>*:nth-child(3)]:row-span-2 [&>*:nth-child(3)]:hidden md:[&>*:nth-child(3)]:block
          [&>*:nth-child(4)]:col-span-4 md:[&>*:nth-child(4)]:col-span-3
          [&>*:nth-child(5)]:col-span-4 md:[&>*:nth-child(5)]:col-span-3
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
    // Cards do NOT appear at start. As user scrolls more, they become more visible and expand to full size:
    const opacity = useTransform(scrollYProgress, [0.06, 0.32], [0, 1]);
    const translate = useTransform(scrollYProgress, [0.06, 0.72], ["-35%", "0%"]);
    const scale = useTransform(scrollYProgress, [0.06, 0.72], [0.5, 1]);
    const pointerEvents = useTransform(scrollYProgress, (pos) =>
      pos < 0.1 ? "none" : "auto"
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
    // Text goes back and shrinks smoothly as user scrolls:
    const opacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.45], [1, 0]);

    const position = useTransform(scrollYProgress, (pos) =>
      pos >= 0.55 ? "absolute" : "fixed"
    );

    const pointerEvents = useTransform(scrollYProgress, (pos) =>
      pos >= 0.4 ? "none" : "auto"
    );

    return (
      <motion.div
        ref={ref}
        className={cn("left-1/2 top-1/2 size-fit", className)}
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
    <ContainerScroll className="h-[300vh] w-full">
      {/* 1. HERO TITLE & CTA (Fixed in center at start; goes back and shrinks away on scroll) */}
      <ContainerScale className="z-30 w-full max-w-5xl px-5 text-center">
        <div className="mx-auto w-full">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#0A2540]/75 sm:mb-6 sm:text-sm">
            Team &amp; Technology
          </p>

          <h1 className="mx-auto max-w-[1400px] text-balance text-[clamp(2.5rem,5.5vw,7.5rem)] font-semibold leading-[1.0] tracking-[-0.05em] text-[#111]">
            The people and technology behind what&apos;s next.
          </h1>

          <p className="mx-auto mt-5 max-w-[50rem] text-balance text-[clamp(0.95rem,1.15vw,1.3rem)] leading-[1.7] text-black/60 sm:mt-7">
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

      {/* 2. BENTO GRID - TRUE FULL SCREEN (Edge-to-edge, fills 100% viewport, no empty side margins) */}
      <div className="sticky top-0 z-10 flex h-screen w-full items-center justify-center p-2 sm:p-3 md:p-4 pt-16 sm:pt-18 pb-2 sm:pb-3">
        <BentoGrid
          variant="default"
          className="w-full h-full max-w-none"
        >
          {/* Card 1: Main Flagship - In-House Engineering Pods */}
          <BentoCell className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-zinc-200/90 bg-zinc-950 shadow-2xl transition-all duration-300">
            <img
              src="/team-hero.jpg"
              alt="PixoraSoftTech Elite Engineering Team"
              className="absolute inset-0 size-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              loading="eager"
            />
            {/* Elegant vignette gradient so text is razor-sharp */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/20" />

            <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-8 text-white">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                  <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                  Core Architecture • Engineering
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-emerald-300 backdrop-blur-md">
                  <Activity className="size-3.5 text-emerald-400" />
                  99.99% Reliability
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-semibold tracking-tight text-white max-w-2xl leading-tight">
                  Enterprise Systems Built for Velocity &amp; Scale.
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm lg:text-base text-zinc-200/90 leading-relaxed max-w-2xl">
                  Senior engineers, tech leads, and product architects working together to build resilient digital systems and high-concurrency cloud infrastructure.
                </p>

                <div className="mt-4 flex flex-wrap gap-2 pt-3 border-t border-white/15">
                  {["Next.js 16", "React 19", "Strict TypeScript", "Python AI", "Sub-50ms Edge"].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/20 bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </BentoCell>

          {/* Card 2: Dedicated Agile Pods */}
          <BentoCell className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-zinc-200/90 bg-zinc-950 shadow-2xl transition-all duration-300">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Dedicated Agile Pods"
              className="absolute inset-0 size-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/25" />

            <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="size-9 rounded-lg bg-blue-600/90 backdrop-blur-md flex items-center justify-center text-white shadow-sm">
                  <Users className="size-4" />
                </div>
                <span className="rounded-full border border-white/20 bg-black/40 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                  100% In-House
                </span>
              </div>

              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-blue-300">Agile Pods</div>
                <h4 className="mt-1 text-lg font-semibold text-white">Dedicated Pods</h4>
                <p className="mt-1.5 text-xs text-zinc-300 leading-relaxed">
                  Senior tech leads and UI architects integrated directly into your team.
                </p>
              </div>
            </div>
          </BentoCell>

          {/* Card 3: Modern Tech Stack Matrix */}
          <BentoCell className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-zinc-200/90 bg-zinc-950 shadow-2xl transition-all duration-300">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
              alt="Modern Tech Stack"
              className="absolute inset-0 size-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/25" />

            <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="size-9 rounded-lg bg-indigo-600/90 backdrop-blur-md flex items-center justify-center text-white shadow-sm">
                  <Cpu className="size-4" />
                </div>
                <span className="rounded-full border border-white/20 bg-black/40 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                  Zero Debt
                </span>
              </div>

              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-indigo-300">Modern Matrix</div>
                <h4 className="mt-1 text-lg font-semibold text-white">Curated Toolchains</h4>
                <p className="mt-1.5 text-xs text-zinc-300 leading-relaxed">
                  Next.js, React 19, TypeScript, PostgreSQL, and cloud-native velocity.
                </p>
              </div>
            </div>
          </BentoCell>

          {/* Card 4: Rapid 2-Week Sprints */}
          <BentoCell className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-zinc-200/90 bg-zinc-950 shadow-2xl transition-all duration-300">
            <img
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"
              alt="Rapid Sprints"
              className="absolute inset-0 size-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/25" />

            <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="size-9 rounded-lg bg-blue-500/90 backdrop-blur-md flex items-center justify-center text-white shadow-sm">
                  <Zap className="size-4" />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-300">
                  2-Week Sprints
                </span>
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-semibold text-white">
                  Continuous Iterations
                </h4>
                <p className="mt-1 text-xs text-zinc-300 leading-relaxed">
                  Automated CI/CD pipelines provide functional software every 14 days.
                </p>
              </div>
            </div>
          </BentoCell>

          {/* Card 5: Multi-Region Cloud & Security */}
          <BentoCell className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-zinc-200/90 bg-zinc-950 shadow-2xl transition-all duration-300">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
              alt="Cloud Scale and Security"
              className="absolute inset-0 size-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/25" />

            <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="size-9 rounded-lg bg-emerald-500/90 backdrop-blur-md flex items-center justify-center text-white shadow-sm">
                  <ShieldCheck className="size-4" />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-300">
                  Security-First
                </span>
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-semibold text-white">
                  Multi-Region Cloud Scale
                </h4>
                <p className="mt-1 text-xs text-zinc-300 leading-relaxed">
                  End-to-end encryption with auto-scaling infrastructure built for growth.
                </p>
              </div>
            </div>
          </BentoCell>
        </BentoGrid>
      </div>
    </ContainerScroll>
  );
}

export { ContainerScroll, BentoGrid, BentoCell, ContainerScale };
