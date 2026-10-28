"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const focusItems = [
  {
    title: "Web Design",
    image: "/portfolio/brew-haven.png",
    href: "/portfolio/brew-haven",
    description:
      "We design modern, responsive websites that reflect your brand, connect with your audience, and help your business grow online.",
  },
  {
    title: "Custom Software",
    image: "/portfolio/inventory-dashboard.png",
    href: "/portfolio/inventory",
    description:
      "We build reliable software around your workflows, bringing your tools and data together in a system that can grow with your business.",
  },
  {
    title: "Apps",
    image: "/portfolio/fitpulse-app.png",
    href: "/portfolio/rider-app",
    description:
      "We create useful, polished mobile experiences with thoughtful interactions and dependable performance across devices.",
  },
  {
    title: "SaaS Development",
    image: "/portfolio/light-crm-dashboard.png",
    href: "/portfolio/crm",
    description:
      "We develop scalable digital products, from the first release through the features and infrastructure needed to grow.",
  },
];

export default function AboutFocus() {
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const scrollable = Math.max(1, section.offsetHeight - window.innerHeight);
        const progress = Math.min(1, Math.max(0, -rect.top / scrollable));
        const next = Math.min(focusItems.length - 1, Math.floor(progress * focusItems.length));
        setActiveIndex((current) => (current === next ? current : next));
        if (progressRef.current) {
          progressRef.current.style.transform = `scaleY(${progress})`;
        }
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const activeItem = focusItems[activeIndex];

  return (
    <section
      ref={sectionRef}
      aria-label="PixoraSoftTech main focus"
      className="relative h-[400vh] bg-black text-white"
    >
      <div className="sticky top-0 grid h-screen min-h-[680px] grid-cols-1 md:h-screen md:min-h-0 md:grid-cols-12">
        <div className="relative min-h-0 overflow-hidden border border-white/10 bg-[#121212] md:col-span-6 md:h-full">
          {focusItems.map((item, index) => (
            <div
              key={item.title}
              aria-hidden={index !== activeIndex}
              className={`absolute inset-0 transition-all duration-700 ease-out ${
                index === activeIndex
                  ? "z-10 scale-100 opacity-100"
                  : "z-0 scale-[1.03] opacity-0"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="size-full object-cover object-center"
              />
              <div className="pointer-events-none absolute inset-0 bg-black/10" />
            </div>
          ))}
          <span className="absolute bottom-5 left-5 z-20 rounded-full border border-white/25 bg-black/45 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-white/80 backdrop-blur-sm md:bottom-7 md:left-7">
            PixoraSoftTech · Focus {String(activeIndex + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="relative flex min-h-[440px] flex-col justify-between bg-black p-6 sm:p-10 md:col-span-6 md:h-screen md:min-h-0 md:p-10 lg:p-12">
          <div className="z-20 flex w-full items-center justify-between font-mono text-xs font-bold uppercase tracking-[0.12em]">
            <span>Main Focus</span>
            <div className="relative">
              <button
                type="button"
                aria-expanded={menuOpen}
                aria-haspopup="true"
                onClick={() => setMenuOpen((open) => !open)}
                className="cursor-pointer text-white/75 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4"
              >
                Menu {menuOpen ? "−" : "+"}
              </button>
              {menuOpen && (
                <div className="absolute right-0 top-full z-30 mt-3 w-56 rounded-xl border border-white/15 bg-[#111] p-2 shadow-2xl">
                  {focusItems.map((item, index) => (
                    <button
                      type="button"
                      key={item.title}
                      onClick={() => {
                        setActiveIndex(index);
                        setMenuOpen(false);
                      }}
                      className={`block w-full rounded-lg px-3 py-2.5 text-left text-xs font-semibold transition hover:bg-white/10 ${
                        activeIndex === index ? "text-white" : "text-white/55"
                      }`}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="relative z-10 mt-12 flex flex-col gap-1 sm:mt-16 md:mt-0 md:w-[72%]">
            {focusItems.map((item, index) => (
              <button
                type="button"
                key={item.title}
                aria-pressed={activeIndex === index}
                onClick={() => setActiveIndex(index)}
                className={`select-none text-left text-3xl font-bold leading-[1.1] tracking-tight transition-colors duration-300 sm:text-4xl lg:text-[2.5rem] ${
                  activeIndex === index ? "text-white" : "text-[#3e3e42] hover:text-white/80"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          <div className="absolute bottom-24 right-[28%] top-24 hidden w-px bg-white/20 md:block lg:right-[31%]">
            <div
              ref={progressRef}
              className="w-full origin-top bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-transform duration-500"
              style={{ height: "100%", transform: "scaleY(0)" }}
            />
          </div>

          <div className="z-10 mt-10 flex items-end justify-between gap-6 border-t border-white/15 pt-5 md:mt-0 md:border-0 md:pt-0">
            <div className="max-w-sm">
              <p className="text-xs leading-relaxed text-white/80 sm:text-[13px]">
                {activeItem.description}
              </p>
              <a
                href={activeItem.href}
                className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-white underline decoration-white/40 underline-offset-4 transition hover:decoration-white"
              >
                Explore {activeItem.title} <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            </div>
            <span className="shrink-0 font-mono text-2xl font-bold italic tracking-tighter text-white/50 sm:text-3xl">
              {String(activeIndex + 1).padStart(2, "0")}*
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
