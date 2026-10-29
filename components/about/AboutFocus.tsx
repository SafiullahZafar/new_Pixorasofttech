"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const focusItems = [
  {
    title: "Software Development",
    image: "/portfolio/brew-haven.png",
    gridImages: ["/portfolio/brew-haven.png", "/portfolio/inventory-dashboard.png", "/portfolio/hr-dashboard.png", "/portfolio/supplier.png", "/portfolio/light-inventory-dashboard.png", "/portfolio/crm-dashboard.png"],
    href: "/services/custom-software-development",
    description:
      "We build reliable software around your workflows, bringing your tools and data together in a system that can grow with your business.",
  },
  {
    title: "Web Development",
    image: "/portfolio/inventory-dashboard.png",
    gridImages: ["/portfolio/brew-haven.png", "/portfolio/glass-haven.png", "/portfolio/solar-solutions.png", "/portfolio/eduka-college.png", "/portfolio/kb-exports.png", "/portfolio/state-college.png"],
    href: "/services/website-development",
    description:
      "We create fast, responsive websites that reflect your brand, connect with your audience, and help your business grow online.",
  },
  {
    title: "SaaS Development",
    image: "/portfolio/light-crm-dashboard.png",
    gridImages: ["/portfolio/light-crm-dashboard.png", "/portfolio/crm-dashboard.png", "/portfolio/flowcrm-dashboard.png", "/portfolio/delivery-dashboard.png", "/portfolio/inventory-dashboard.png", "/portfolio/light-inventory-dashboard.png"],
    href: "/services/custom-software-development",
    description:
      "We develop scalable digital products, from the first release through the features and infrastructure needed to grow.",
  },
  {
    title: "Mobile App Development",
    image: "/portfolio/fitpulse-app.png",
    gridImages: ["/portfolio/fitpulse-app.png", "/portfolio/irider-app.png", "/portfolio/shopease-app.png", "/portfolio/fitpulse-app.png", "/portfolio/irider-app.png", "/portfolio/shopease-app.png"],
    href: "/services/mobile-app-development",
    description:
      "We create useful, polished mobile experiences with thoughtful interactions and dependable performance across devices.",
  },
  {
    title: "UI / UX Design",
    image: "/portfolio/glass-haven.png",
    gridImages: ["/portfolio/glass-haven.png", "/portfolio/brew-haven.png", "/portfolio/solar-solutions.png", "/portfolio/eduka-college.png", "/portfolio/zostel.png", "/portfolio/travel-hotel-hub.png"],
    href: "/services/ui-ux-design",
    description:
      "We design clear, research-driven interfaces that make digital products easier and more enjoyable to use.",
  },
  {
    title: "Cloud Solutions",
    image: "/portfolio/light-inventory-dashboard.png",
    gridImages: ["/portfolio/light-inventory-dashboard.png", "/portfolio/inventory-dashboard.png", "/portfolio/flowcrm-dashboard.png", "/portfolio/hr-dashboard.png", "/portfolio/supplier.png", "/portfolio/lms-dashboard.png"],
    href: "/services/cloud-solutions",
    description:
      "We build secure, scalable cloud infrastructure that keeps products reliable as your business grows.",
  },
];

export default function AboutFocus() {
  const sectionRef = useRef<HTMLElement>(null);
  const imagePanelRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const focusPanelRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const imageProgress = useMotionValue(0);
  const smoothImageProgress = useSpring(imageProgress, {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  });
  const bannerWidth = useTransform(smoothImageProgress, [0, 0.15], ["90%", "100%"]);
  const bannerHeight = useTransform(smoothImageProgress, [0, 0.15], ["80%", "100%"]);
  const bannerRadius = useTransform(smoothImageProgress, [0, 0.15], ["28px", "0px"]);
  const imageRotateY = useTransform(smoothImageProgress, [0.15, 1], [-45, -8]);
  const imageRotateX = useTransform(smoothImageProgress, [0.15, 1], [25, 4]);
  const imageRotateZ = useTransform(smoothImageProgress, [0.15, 1], [15, 2]);
  const imageTranslateZ = useTransform(smoothImageProgress, [0.15, 1], [-800, 0]);
  const columnY1 = useTransform(smoothImageProgress, [0.15, 1], ["0%", "-40%"]);
  const columnY2 = useTransform(smoothImageProgress, [0.15, 1], ["-40%", "10%"]);
  const columnY3 = useTransform(smoothImageProgress, [0.15, 1], ["0%", "-40%"]);
  const columnY4 = useTransform(smoothImageProgress, [0.15, 1], ["-30%", "20%"]);

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
        // The first service is active when the section enters; each following
        // service takes over at an even scroll step, with the last at the end.
        const next = Math.min(
          focusItems.length - 1,
          Math.round(progress * (focusItems.length - 1)),
        );
        if (next !== activeIndex) imageProgress.set(0);
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
  }, [activeIndex, imageProgress]);

  const activeItem = focusItems[activeIndex];

  useEffect(() => {
    const imagePanel = imagePanelRef.current;
    if (!imagePanel) return;

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      const delta = event.deltaY / Math.max(1, imagePanel.clientHeight * 5);
      const current = imageProgress.get();
      const step = sectionRef.current
        ? (sectionRef.current.offsetHeight - window.innerHeight) / (focusItems.length - 1)
        : window.innerHeight;

      if (delta > 0 && current >= 0.995 && activeIndex < focusItems.length - 1) {
        window.scrollBy({ top: step, behavior: "smooth" });
        return;
      }

      if (delta < 0 && current <= 0.005 && activeIndex > 0) {
        window.scrollBy({ top: -step, behavior: "smooth" });
        return;
      }

      imageProgress.set(Math.max(0, Math.min(1, current + delta)));
    };

    imagePanel.addEventListener("wheel", handleWheel, { passive: false });
    return () => imagePanel.removeEventListener("wheel", handleWheel);
  }, [activeIndex, imageProgress]);

  const handleFocusPanelMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const panel = focusPanelRef.current;
    if (!panel || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const bounds = panel.getBoundingClientRect();
    const rotateY = (event.clientX - bounds.left - bounds.width / 2) / 25;
    const rotateX = (event.clientY - bounds.top - bounds.height / 2) / 25;
    panel.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
  };

  const resetFocusPanelTilt = () => {
    if (focusPanelRef.current) {
      focusPanelRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
    }
  };

  return (
    <section
      ref={sectionRef}
      aria-label="PixoraSoftTech main focus"
      className="relative h-[600vh] bg-black text-white"
    >
      <div className="sticky top-0 grid h-screen min-h-[680px] grid-cols-1 md:h-screen md:min-h-0 md:grid-cols-12">
        <div
          ref={imagePanelRef}
          className="relative min-h-0 overflow-hidden bg-black md:col-span-6 md:h-full"
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: 1000 }}>
              <motion.div
                className="relative flex items-center justify-center overflow-hidden border border-white/10 bg-black"
                style={{ width: bannerWidth, height: bannerHeight, borderRadius: bannerRadius }}
              >
              <AnimatePresence mode="sync">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.96, filter: "blur(8px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.03, filter: "blur(8px)" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute flex h-[150%] w-[120%] origin-center items-center justify-center gap-3 opacity-100 sm:gap-4"
                  style={{
                    rotateX: imageRotateX,
                    rotateY: imageRotateY,
                    rotateZ: imageRotateZ,
                    z: imageTranslateZ,
                    transformStyle: "preserve-3d",
                  }}
                >
                {[columnY1, columnY2, columnY3, columnY4].map((columnY, columnIndex) => {
                  const columnImages = activeItem.gridImages.filter((_, index) => index % 4 === columnIndex);
                  const repeatedImages = [...columnImages, ...columnImages];

                  return (
                    <motion.div
                      key={columnIndex}
                      className="flex h-full w-[22%] min-w-0 flex-col gap-3 sm:gap-4"
                      style={{ y: columnY }}
                    >
                      {repeatedImages.map((image, cardIndex) => (
                          <div
                            key={`${activeIndex}-${columnIndex}-${cardIndex}-${image}`}
                            className="relative h-[200px] w-full shrink-0 overflow-hidden bg-[#111] sm:h-[300px] md:h-[400px]"
                          >
                            <img
                              src={image}
                              alt={cardIndex === 0 ? activeItem.title : ""}
                              aria-hidden={cardIndex !== 0}
                              loading={cardIndex < 2 ? "eager" : "lazy"}
                              className="size-full object-cover opacity-80 transition-opacity duration-300 hover:opacity-100"
                            />
                          </div>
                      ))}
                    </motion.div>
                  );
                })}
                </motion.div>
              </AnimatePresence>
              </motion.div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />
          <span className="absolute bottom-5 left-5 z-20 rounded-full border border-white/25 bg-black/45 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-white/80 backdrop-blur-sm md:bottom-7 md:left-7">
            PixoraSoftTech · Focus {String(activeIndex + 1).padStart(2, "0")}
          </span>
        </div>

        <div
          className="relative min-h-[440px] md:col-span-6 md:h-screen md:min-h-0"
          style={{ perspective: "1000px" }}
        >
          <div
            ref={focusPanelRef}
            onMouseMove={handleFocusPanelMouseMove}
            onMouseLeave={resetFocusPanelTilt}
            className="relative flex h-full flex-col justify-between bg-black p-6 transition-transform duration-200 ease-linear [transform-style:preserve-3d] sm:p-10 md:p-10 lg:p-12"
          >
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

          <div className="relative z-10 mt-12 flex flex-col gap-[6px] sm:mt-16 md:mt-0 md:w-[72%]">
            {focusItems.map((item, index) => (
              <button
                type="button"
                key={item.title}
                aria-pressed={activeIndex === index}
                onClick={() => setActiveIndex(index)}
                className={`select-none text-left text-3xl font-semibold leading-[1.1] tracking-tight transition-colors duration-300 sm:text-4xl lg:text-[2.5rem] ${
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
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
