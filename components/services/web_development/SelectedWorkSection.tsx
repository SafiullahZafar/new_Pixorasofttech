"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface WorkProject {
  id: string;
  title: string;
  year: string;
  tags: string[];
  image: string;
  bgColor: string;
  href: string;
}

const WORKS_DATA: WorkProject[] = [
  { id: "1", title: "Glass Haven", year: "2026", tags: ["Business Website", "Product Showcase"], image: "/service/web_dev/works_serv/web_development_work_service_1.png", bgColor: "bg-[#dce6e6]", href: "/projects" },
  { id: "2", title: "Goody Supplies", year: "2026", tags: ["E-commerce", "Online Store"], image: "/about_page/web_dev/Engineering Textile Solutions Laptop Mockup-1.png", bgColor: "bg-[#f4f4f6]", href: "/projects" },
  { id: "3", title: "Brew Haven", year: "2026", tags: ["Cafe Website", "Online Ordering"], image: "/case_studies/glass_haven_web/glass_haven_hero_web_01.png", bgColor: "bg-[#8ca8ee]/30", href: "/projects" },
  { id: "4", title: "Travel & Hotel Hub", year: "2026", tags: ["Booking Website", "Travel"], image: "/project/our_project/our_project_brew_haven_menu.png", bgColor: "bg-[#e8ebf4]", href: "/projects" },
];

export default function SelectedWorkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [travelDistance, setTravelDistance] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -travelDistance]);
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const measureTrack = () => {
      if (!viewportRef.current || !trackRef.current) return;
      setTravelDistance(Math.max(0, trackRef.current.scrollWidth - viewportRef.current.clientWidth));
    };

    measureTrack();
    const observer = new ResizeObserver(measureTrack);
    if (viewportRef.current) observer.observe(viewportRef.current);
    if (trackRef.current) observer.observe(trackRef.current);
    window.addEventListener("resize", measureTrack);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measureTrack);
    };
  }, []);

  const moveByCard = (direction: -1 | 1) => {
    window.scrollBy({ top: direction * Math.max(window.innerHeight * 0.7, 420), behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      aria-label="Selected website projects"
      className="relative bg-transparent"
      style={{ height: `calc(100vh + ${travelDistance}px)` }}
    >
      <div ref={viewportRef} className="sticky top-0 flex h-screen min-h-[620px] flex-col justify-center overflow-hidden py-10">
        <div className="mb-8 flex w-full items-end justify-between gap-5 px-6 sm:mb-10 sm:px-12 lg:px-14 2xl:px-24">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0342DD]">Selected projects</p>
            <h2 className="text-4xl font-medium tracking-tight text-slate-900 sm:text-5xl 2xl:text-6xl">Works</h2>
          </div>
          <span className="hidden text-sm font-medium text-slate-500 sm:block">Scroll to explore</span>
        </div>

        <div className="overflow-hidden">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex w-max gap-5 pb-4 pl-6 pr-6 sm:gap-8 sm:pl-12 sm:pr-12 lg:pl-14 lg:pr-14 2xl:gap-10 2xl:pl-24 2xl:pr-24"
          >
            {WORKS_DATA.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="group w-[82vw] flex-shrink-0 cursor-pointer sm:w-[480px] lg:w-[600px] 2xl:w-[740px]"
              >
                <div className={`relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-black/5 ${item.bgColor}`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 82vw, (max-width: 1024px) 480px, (max-width: 1536px) 600px, 740px"
                    className="object-cover object-top shadow-md transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-4 flex min-h-16 flex-wrap items-start justify-between gap-3 px-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl 2xl:text-3xl">{item.title}</h3>
                    <span className="text-xl font-semibold text-slate-400 sm:text-2xl 2xl:text-3xl">- {item.year}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-slate-200 bg-white/60 px-3.5 py-1.5 text-xs font-medium text-slate-700 backdrop-blur-xs sm:text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>

        <div className="mt-5 flex w-full items-center justify-between gap-6 px-6 sm:px-12 lg:px-14 2xl:px-24">
          <div className="relative h-[3px] max-w-xl flex-1 overflow-hidden rounded-full bg-slate-200 2xl:max-w-2xl">
            <motion.div className="absolute inset-y-0 left-0 w-full origin-left rounded-full bg-[#0342DD]" style={{ scaleX: progressScale }} />
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => moveByCard(-1)} className="flex size-11 cursor-pointer items-center justify-center rounded-full bg-slate-100 text-slate-800 transition-colors hover:bg-slate-200 2xl:size-14" aria-label="Previous project">
              <ArrowLeft className="size-5" />
            </button>
            <button onClick={() => moveByCard(1)} className="flex size-11 cursor-pointer items-center justify-center rounded-full bg-slate-100 text-slate-800 transition-colors hover:bg-slate-200 2xl:size-14" aria-label="Next project">
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
