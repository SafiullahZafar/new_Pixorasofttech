"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { Star } from "lucide-react";

export interface TestimonialItem {
  text: string;
  image: string;
  name: string;
  role: string;
  rating?: number;
}

export const testimonials: TestimonialItem[] = [
  {
    text: "PixoraSoftTech engineered our e-commerce platform from the ground up. Checkout latency dropped by 62%, and conversions surged 38% in our first quarter post-launch.",
    name: "Sarah Mitchell",
    role: "CEO & Co-Founder, NovaCart",
    image: "/images/unsplash/photo-1494790108377-be9c29b29330-8779ddf966.jpg",
    rating: 5,
  },
  {
    text: "The cross-platform mobile app they delivered is blisteringly fast. Our 4.9-star rating on the App Store with 120k+ MAU is a direct result of their architectural standards.",
    name: "David Chen",
    role: "VP of Engineering, PulseFit",
    image: "/images/unsplash/photo-1507003211169-0a1dd7228f2d-be7bfdbb67.jpg",
    rating: 5,
  },
  {
    text: "Their technical execution is world-class. From real-time inventory synchronization to custom analytics, everything performed flawlessly through our peak sales events.",
    name: "Aisha Rahman",
    role: "Head of Growth, ApexGear",
    image: "/images/unsplash/photo-1573496359142-b8d87734a5a2-fce3daca39.jpg",
    rating: 5,
  },
  {
    text: "From brand identity to a full-stack digital ecosystem, PixoraSoftTech understood our enterprise requirements intuitively. Our investors and board noticed immediately.",
    name: "Marcus Weber",
    role: "COO, Lumen Energy",
    image: "/images/unsplash/photo-1500648767791-00dcc994a43e-11ef46ab3b.jpg",
    rating: 5,
  },
  {
    text: "A high-throughput financial dashboard delivered ahead of schedule with zero compromises on security or SOC-2 compliance. Exceptional engineering talent.",
    name: "Priya Nair",
    role: "Lead Product Manager, FinSight",
    image: "/images/unsplash/photo-1580489944761-15a19d654956-ff3e9c5d94.jpg",
    rating: 5,
  },
  {
    text: "They elevated our digital presence into a luxury lifestyle experience. Subscription retention increased by 45% within 60 days of the redesigned platform.",
    name: "Tom Becker",
    role: "Co-Founder, Brew Haven Roasters",
    image: "/images/unsplash/photo-1472099645785-5658abf4ff4e-f4479879fe.jpg",
    rating: 5,
  },
  {
    text: "The microservices architecture and automated CI/CD pipeline they implemented cut our deployment cycle from days to minutes. A huge force multiplier for our team.",
    name: "Elena Rostova",
    role: "CTO, CloudVantage",
    image: "/images/unsplash/photo-1534528741775-53994a69daeb-2a3a0ed991.jpg",
    rating: 5,
  },
  {
    text: "Finding developers who master low-level performance while obsessing over modern UI aesthetics is rare. Pixora delivered an AI interface that our users love.",
    name: "Alex Rivera",
    role: "Founder & CEO, Omnistack AI",
    image: "/images/unsplash/photo-1519085360753-af0119f7cbe7-4fbc6f2183.jpg",
    rating: 5,
  },
  {
    text: "Collaborating with PixoraSoftTech across time zones felt completely seamless. Their clear sprints, transparent communication, and speed set a new benchmark.",
    name: "Liam O'Connor",
    role: "Director of Digital, Horizon Media",
    image: "/images/unsplash/photo-1506794778202-cad84cf45f1d-cb642caf4c.jpg",
    rating: 5,
  },
];

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: TestimonialItem[];
  duration?: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const firstSetRef = useRef<HTMLDivElement>(null);
  const [setHeight, setSetHeight] = useState(0);
  const y = useMotionValue(0);
  const isDraggingRef = useRef(false);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    const measure = () => {
      if (firstSetRef.current) {
        // Height of one full batch plus gap (24px)
        setSetHeight(firstSetRef.current.offsetHeight + 24);
      }
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [props.testimonials]);

  useAnimationFrame((_, delta) => {
    if (!setHeight) return;

    // Smooth speed in pixels per second
    const speed = setHeight / (props.duration || 16);
    const deltaSeconds = Math.min(delta / 1000, 0.1);

    if (!isDraggingRef.current) {
      if (!isHoveredRef.current) {
        const currentY = y.get();
        const nextY = currentY - speed * deltaSeconds;
        if (nextY <= -setHeight) {
          y.set(nextY + setHeight);
        } else if (nextY >= 0) {
          y.set(nextY - setHeight);
        } else {
          y.set(nextY);
        }
      }
    } else {
      // Infinite drag wrap: allow user to pull continuously in either direction
      const currentY = y.get();
      if (currentY <= -setHeight) {
        y.set(currentY + setHeight);
      } else if (currentY >= 0) {
        y.set(currentY - setHeight);
      }
    }
  });

  const renderCard = (
    { text, image, name, role, rating = 5 }: TestimonialItem,
    i: number,
    prefix: string
  ) => (
    <div
      key={`${prefix}-${i}`}
      className="p-8 sm:p-10 rounded-3xl border border-zinc-200/90 bg-white/95 backdrop-blur-md shadow-sm hover:border-[#0342DD]/35 hover:shadow-md transition-all duration-300 max-w-xs sm:max-w-sm w-full select-none"
    >
      {/* Rating Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, s) => (
          <Star
            key={s}
            className="w-3.5 h-3.5 fill-[#0342DD] text-[#0342DD]"
          />
        ))}
      </div>

      <p className="text-sm sm:text-[15px] leading-relaxed text-zinc-700 font-normal">
        &ldquo;{text}&rdquo;
      </p>

      <div className="flex items-center gap-3 mt-6 pt-5 border-t border-zinc-100">
        <img
          width={42}
          height={42}
          src={image}
          alt={name}
          className="h-10 w-10 sm:h-11 sm:w-11 rounded-full object-cover border border-zinc-200/80 pointer-events-none"
          loading="lazy"
          draggable={false}
        />
        <div className="flex flex-col">
          <div className="font-semibold text-black tracking-tight text-sm leading-5">
            {name}
          </div>
          <div className="text-xs text-zinc-500 font-medium tracking-tight leading-4 mt-0.5">
            {role}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className={`${props.className || ""} overflow-visible`}
      onMouseEnter={() => {
        isHoveredRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
      }}
    >
      <motion.div
        ref={containerRef}
        style={{ y }}
        drag="y"
        dragConstraints={{ top: -999999, bottom: 999999 }}
        dragElastic={0.05}
        onDragStart={() => {
          isDraggingRef.current = true;
        }}
        onDragEnd={() => {
          isDraggingRef.current = false;
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent cursor-grab active:cursor-grabbing select-none touch-none"
      >
        {/* Set 1: Measured anchor */}
        <div ref={firstSetRef} className="flex flex-col gap-6">
          {props.testimonials.map((t, i) => renderCard(t, i, "s1"))}
        </div>
        {/* Set 2: Seamless loop */}
        <div className="flex flex-col gap-6">
          {props.testimonials.map((t, i) => renderCard(t, i, "s2"))}
        </div>
        {/* Set 3: Headroom for reverse dragging */}
        <div className="flex flex-col gap-6">
          {props.testimonials.map((t, i) => renderCard(t, i, "s3"))}
        </div>
      </motion.div>
    </div>
  );
};

export default function Testimonials() {
  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  return (
    <section
      id="testimonials"
      className="bg-transparent py-16 md:py-24 px-6 md:px-12 lg:px-12 select-none overflow-hidden border-t border-dashed border-zinc-300 font-sans"
    >
      <div className="max-w-[2200px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between pb-10 sm:pb-14 border-b border-zinc-200 mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0342DD]"></span>
              <span className="text-xs font-bold tracking-widest uppercase text-black">
                CLIENT REVIEWS
              </span>
              <span className="text-xs font-bold text-slate-400 ml-2">
                • DRAG & EXPLORE
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-black uppercase">
              WHAT FOUNDERS SAY
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base font-normal text-[#555555] leading-relaxed mt-4 sm:mt-8">
            Engineering digital solutions that accelerate businesses worldwide. Here is what leading founders and enterprise executives say about partnering with us.
          </p>
        </div>

        {/* Interactive Marquee Columns: Smooth Auto-Scroll + Grab & Move */}
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_88%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_88%,transparent_100%)] max-h-[720px] overflow-hidden">
          <TestimonialsColumn
            testimonials={firstColumn}
            duration={16}
          />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={22}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={18}
          />
        </div>
      </div>
    </section>
  );
}
