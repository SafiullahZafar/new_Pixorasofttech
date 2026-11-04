"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface WorksWheelItem {
  /** Project name. Shown beside the front card and in the index. */
  title: string;
  /** Cover art. Any src an <img> takes. */
  image: string;
  /** Where the card links to. Omit for a wheel that only browses. */
  href?: string;
}

export interface WorksWheelProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "children"
> {
  items: WorksWheelItem[];
  /** Sits in the middle of the ring. @default undefined */
  label?: string;
  /** Label on the card's hover affordance. Omit to drop it. @default undefined */
  action?: string;
  trackRef?: React.RefObject<HTMLDivElement | null>;
}

/* Geometry constants tuned for a balanced, luxurious showcase */
const CARD_RATIO = 1.45; // card width / height
const STEP = 34; // degrees between cards on the drum (balanced breathing room between cards)
const DRUM = 2.08; // drum radius in card heights (balanced distance)
const LENS = 2.7; // perspective distance
const BOW = 1.82; // arc radius
const TITLE = 0.115; // ring label and front-card title
const INDEX = 0.038; // index down the right-hand side
const CULL = 2.0; // items either side of front still drawn

const DRAG_UNITS = 420;
const EASE = 0.12;

const clamp = (v: number, lo: number, hi: number) =>
  Math.min(hi, Math.max(lo, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

type Stage = { w: number; h: number };

const rad = (deg: number) => (deg * Math.PI) / 180;

const bowAt = (drumDeg: number, bow: number) =>
  -bow * (1 - Math.cos(rad(drumDeg)));

function place(
  ringDeg: number,
  drumDeg: number,
  ringR: number,
  drumR: number,
  bow: number,
  m: number,
) {
  return (
    `translateX(${m * bowAt(drumDeg, bow)}px)` +
    ` rotateZ(${(1 - m) * ringDeg}deg) translateY(${-(1 - m) * ringR}px)` +
    ` rotateX(${m * drumDeg}deg) translateZ(${m * drumR}px)`
  );
}

export function WorksWheel({
  items,
  label = "Our Work",
  action = "View Project",
  trackRef,
  className,
  ...props
}: WorksWheelProps) {
  const stageRef = React.useRef<HTMLDivElement>(null);
  const wheelRef = React.useRef<HTMLDivElement>(null);
  const cardRefs = React.useRef<(HTMLElement | null)[]>([]);
  const labelRef = React.useRef<HTMLDivElement>(null);
  const titleRef = React.useRef<HTMLDivElement>(null);

  const turn = React.useRef(0);
  const target = React.useRef(0);
  const drag = React.useRef<number | null>(null);

  const [active, setActive] = React.useState(0);
  const [stage, setStage] = React.useState<Stage>({ w: 0, h: 0 });

  const itemsRef = React.useRef(items);
  itemsRef.current = items;

  const count = items.length;
  const last = Math.max(count - 1, 0);

  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const read = () => setReduced(query.matches);
    read();
    query.addEventListener("change", read);
    return () => query.removeEventListener("change", read);
  }, []);

  React.useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const read = () => setStage({ w: el.clientWidth, h: el.clientHeight });
    read();
    const ro = new ResizeObserver(read);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Compute full-screen, balanced showcase dimensions
  const metrics = React.useMemo(() => {
    const { w, h } = stage;
    const stageH = h || 900;
    const stageW = w || 1600;

    // Front card dimensions on scroll drum: clean, impressive showcase
    const targetCardH = Math.min(Math.max(stageH * 0.46, 300), 480);
    const cardW = Math.min(
      targetCardH * CARD_RATIO,
      stageW * 0.42,
      640,
    );
    const cardH = cardW / CARD_RATIO;

    const drumR = cardH * DRUM;

    // Ring radius: spacious, elegant circle in full screen
    const ringR = Math.min(stageH * 0.40, stageW * 0.33, 380);

    // Make card size in circle formation noticeably bigger:
    const ringScale = count
      ? clamp((((2 * Math.PI * ringR) / count) * 1.05) / (cardW || 1), 0.60, 0.74)
      : 0.65;

    return {
      cardW,
      cardH,
      ringR,
      ringScale,
      drumR,
      bow: cardH * BOW,
      depth: cardH * LENS,
      title: Math.min(Math.max(cardH * TITLE, 32), 60),
      index: Math.min(Math.max(cardH * INDEX, 12), 18),
    };
  }, [stage, count]);

  // One pass per frame: ease toward the target, then write every transform
  React.useEffect(() => {
    if (!stage.h) return;
    let frame = 0;
    const { ringR, ringScale, drumR, bow } = metrics;

    const draw = () => {
      frame = requestAnimationFrame(draw);
      const gap = target.current - turn.current;
      if (Math.abs(gap) < 0.0005) turn.current = target.current;
      else turn.current += gap * (reduced ? 1 : EASE);

      const t = turn.current;
      const m = clamp(t, 0, 1);
      const pos = Math.max(0, t - 1);

      if (wheelRef.current) {
        wheelRef.current.style.transform = `translateZ(${-m * drumR}px)`;
      }

      for (let i = 0; i < count; i++) {
        const d = i - pos;
        const drumDeg = d * STEP;
        const card = cardRefs.current[i];
        if (card) {
          card.style.transform = place(
            d * (360 / count),
            drumDeg,
            ringR,
            drumR,
            bow,
            m,
          );
          card.style.opacity = m > 0.5 && Math.abs(d) > CULL ? "0" : "1";
          card.style.zIndex = String(Math.round(100 - Math.abs(d) * 2));
        }
        const face = card?.firstElementChild as HTMLElement | null;
        if (face) face.style.transform = `scale(${lerp(ringScale, 1, m)})`;
      }

      if (labelRef.current) labelRef.current.style.opacity = String(1 - m);

      const near = clamp(Math.round(pos), 0, last);
      if (titleRef.current) {
        titleRef.current.style.opacity = String(m);
        const nearItem = itemsRef.current[near];
        if (nearItem && titleRef.current.textContent !== nearItem.title) {
          titleRef.current.textContent = nearItem.title;
        }
      }
      setActive((prev) => (prev === near ? prev : near));
    };

    frame = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(frame);
  }, [metrics, stage.h, count, last, reduced]);

  const to = React.useCallback(
    (next: number) => {
      target.current = clamp(next, 0, last + 1);
    },
    [last],
  );

  // Synchronize smoothly with page scroll through the sticky track
  React.useEffect(() => {
    const track = trackRef?.current;
    if (!track) return;

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect = track.getBoundingClientRect();
          const total = track.clientHeight - window.innerHeight;
          if (total > 0) {
            const progress = clamp(-rect.top / total, 0, 1);
            to(progress * (last + 1));
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [trackRef, to, last]);

  // Jump to project on index item click
  const handleIndexClick = (i: number) => {
    const track = trackRef?.current;
    if (track) {
      const total = track.clientHeight - window.innerHeight;
      const progress = (i + 1) / (last + 1);
      const targetScroll = track.offsetTop + progress * total;
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    } else {
      to(i + 1);
    }
  };

  return (
    <div
      aria-label={label}
      className={cn(
        "relative h-full w-full select-none bg-transparent text-black overflow-hidden",
        className,
      )}
      {...props}
    >
      <div
        ref={stageRef}
        tabIndex={0}
        role="listbox"
        aria-label={label}
        aria-activedescendant={`works-wheel-${active}`}
        className="absolute inset-0 cursor-grab touch-pan-x outline-none active:cursor-grabbing"
        style={{ perspective: `${metrics.depth}px` }}
        onPointerDown={(event) => {
          drag.current = event.clientY;
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          if (drag.current === null) return;
          to(target.current + (drag.current - event.clientY) / DRAG_UNITS);
          drag.current = event.clientY;
        }}
        onPointerUp={() => {
          drag.current = null;
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown") to(Math.round(target.current) + 1);
          else if (event.key === "ArrowUp") to(Math.round(target.current) - 1);
          else return;
          event.preventDefault();
        }}
      >
        <div
          ref={wheelRef}
          className="absolute top-1/2 left-1/2 [transform-style:preserve-3d]"
        >
          {items.map((item, i) => {
            const Tag = (item.href ? Link : "div") as unknown as typeof Link;
            return (
              <React.Fragment key={item.title}>
                <Tag
                  id={`works-wheel-${i}`}
                  role="option"
                  aria-selected={i === active}
                  href={item.href || "#"}
                  ref={(node: HTMLElement | null) => {
                    cardRefs.current[i] = node;
                  }}
                  className="group absolute [backface-visibility:hidden] block cursor-pointer"
                  style={{
                    width: metrics.cardW,
                    height: metrics.cardH,
                    marginLeft: -metrics.cardW / 2,
                    marginTop: -metrics.cardH / 2,
                  }}
                >
                  <span className="relative block size-full overflow-hidden rounded-2xl border border-black/10 bg-white/80 shadow-[0_20px_50px_-15px_rgba(10,37,64,0.20)] backdrop-blur-md transition-all duration-300 group-hover:shadow-[0_28px_65px_-12px_rgba(10,37,64,0.30)]">
                    <img
                      src={item.image}
                      alt={item.title}
                      draggable={false}
                      className="size-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    {action && item.href ? (
                      <span className="pointer-events-none absolute right-3.5 bottom-3.5 flex translate-y-1 items-center gap-1.5 rounded-full bg-[#0A2540] text-white px-3.5 py-1.5 text-xs font-semibold tracking-wide shadow-xl backdrop-blur-md opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <svg
                          viewBox="0 0 12 12"
                          className="size-3"
                          aria-hidden="true"
                        >
                          <path
                            d="M3 9 9 3M4 3h5v5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {action}
                      </span>
                    ) : null}
                  </span>
                </Tag>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Ring label in center at rest */}
      <div
        ref={labelRef}
        className="pointer-events-none absolute inset-0 grid place-items-center tracking-tight text-center font-bold text-black px-4"
        style={{ fontSize: metrics.title }}
      >
        {label}
      </div>

      {/* Front-card title dynamically showing project name as user scrolls */}
      <div
        ref={titleRef}
        className="pointer-events-none absolute top-1/2 left-[5%] 2xl:left-[7%] 3xl:left-[10%] -translate-y-1/2 tracking-tight text-black font-bold opacity-0 max-w-[360px] 2xl:max-w-[440px] leading-[1.12] z-30"
        style={{ fontSize: metrics.title }}
      >
        {items[active]?.title}
      </div>

      {/* Index list down the right-hand side */}
      <ol
        className="absolute top-8 sm:top-12 right-6 sm:right-10 lg:right-14 text-right leading-[1.8] select-none z-30 max-w-xs"
        style={{ fontSize: metrics.index }}
      >
        {items.map((item, i) => (
          <li key={item.title}>
            <button
              type="button"
              onClick={() => handleIndexClick(i)}
              className={cn(
                "cursor-pointer transition-all duration-200 outline-none block ml-auto",
                i === active
                  ? "text-black font-bold scale-105"
                  : "text-slate-400 hover:text-black font-medium",
              )}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

const featuredWorks: WorksWheelItem[] = [
  {
    title: "Brew Haven Coffee",
    image: "/portfolio/brew-haven.png",
    href: "/case-study/brew-heaven",
  },
  {
    title: "Light CRM Suite",
    image: "/portfolio/light-crm-dashboard.png",
    href: "/projects/crm",
  },
  {
    title: "Delivery Flow System",
    image: "/portfolio/delivery-dashboard.png",
    href: "/projects/delivery-dashboard",
  },
  {
    title: "FitPulse Mobile App",
    image: "/portfolio/fitpulse-app.png",
    href: "/projects/rider-app",
  },
  {
    title: "Inventory Cloud POS",
    image: "/portfolio/inventory-dashboard.png",
    href: "/projects/inventory",
  },
  {
    title: "K.B. Exports Global",
    image: "/portfolio/kb-exports.png",
    href: "/projects/kb-exports",
  },
  {
    title: "Eduka College Platform",
    image: "/portfolio/eduka-college.png",
    href: "/projects/eduka-college",
  },
  {
    title: "Solar Solutions Portal",
    image: "/portfolio/solar-solutions.png",
    href: "/projects/solar-solutions",
  },
];

export default function OurWork() {
  const trackRef = React.useRef<HTMLDivElement>(null);

  return (
    <section id="projects" className="relative w-full bg-transparent text-black font-sans">
      {/* 1. Header Section - Big, bold, proper typography above the animation */}
      <div className="w-full max-w-[2200px] mx-auto px-6 sm:px-10 lg:px-16 pt-16 sm:pt-24 pb-8 sm:pb-12">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
          <span className="text-xs font-bold tracking-widest uppercase text-black">OUR PROJECTS</span>
        </div>
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-black leading-[1.05] max-w-4xl">
          Selected Works &amp;<br />Digital Experiences.
        </h2>
      </div>

      {/* 2. Full-Screen 3D Animation Stage (Dedicated 100vh Sticky Viewport) */}
      <div
        ref={trackRef}
        className="relative w-full"
        style={{ height: `${(featuredWorks.length + 1) * 70 + 100}vh` }}
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-transparent">
          <WorksWheel
            items={featuredWorks}
            label="Our Work"
            action="View Project"
            trackRef={trackRef}
            className="size-full"
          />
        </div>
      </div>

      {/* 3. View All Projects Button */}
      <div className="flex justify-center py-16 sm:py-24">
        <Link
          href="/projects"
          className="inline-flex items-center gap-3 bg-[#0A2540] text-white text-xs sm:text-sm font-medium px-9 py-4 rounded-full hover:bg-[#143960] transition-all duration-300 active:scale-95 shadow-md hover:shadow-xl"
        >
          <span>View All Projects</span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
