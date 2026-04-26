"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Smooth trailing layers
  const trailX = useSpring(cursorX, { damping: 25, stiffness: 280 });
  const trailY = useSpring(cursorY, { damping: 25, stiffness: 280 });

  const glowX = useSpring(cursorX, { damping: 35, stiffness: 180 });
  const glowY = useSpring(cursorY, { damping: 35, stiffness: 180 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const hoverStart = () => setIsHovered(true);
    const hoverEnd = () => setIsHovered(false);

    window.addEventListener("mousemove", moveCursor);

    const elements = document.querySelectorAll(
      "a, button, input, textarea, .tilt-card"
    );

    elements.forEach((el) => {
      el.addEventListener("mouseenter", hoverStart);
      el.addEventListener("mouseleave", hoverEnd);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", hoverStart);
        el.removeEventListener("mouseleave", hoverEnd);
      });
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* ✨ SOFT GLOW TRAIL */}
      <motion.div
        className="fixed top-0 left-0 w-24 h-24 bg-primary/10 blur-3xl rounded-full pointer-events-none z-[9997]"
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* 🔵 OUTER RING (slightly bigger) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-primary/70 rounded-full pointer-events-none z-[9998]"
        animate={{
          scale: isHovered ? 1.2 : 1,
          opacity: isHovered ? 0.7 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* 🟢 INNER FILLED DOT (slightly smaller than before) */}
      <motion.div
        className="fixed top-0 left-0 w-5 h-5 bg-primary rounded-full pointer-events-none z-[9999]"
        animate={{
          scale: isHovered ? 1.3 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}