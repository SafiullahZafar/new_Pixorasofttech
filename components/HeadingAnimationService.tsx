"use client";

import React, { useEffect, useRef } from "react";

interface Vector2D {
  x: number;
  y: number;
}

interface ColorRGB {
  r: number;
  g: number;
  b: number;
}

// Sophisticated grayish-blackish tones matching the website's heading aesthetic (zinc-950 / charcoal)
const GRAY_BLACK_TONES: ColorRGB[] = [
  { r: 18, g: 18, b: 22 },  // Deep zinc-950 grayish-black
  { r: 24, g: 24, b: 28 },  // Charcoal black
  { r: 32, g: 32, b: 38 },  // Dark slate-zinc
  { r: 42, g: 42, b: 50 },  // Subtle graphite accent
  { r: 15, g: 15, b: 18 },  // True deep dark
];

class Particle {
  pos: Vector2D = { x: 0, y: 0 };
  vel: Vector2D = { x: 0, y: 0 };
  acc: Vector2D = { x: 0, y: 0 };
  target: Vector2D = { x: 0, y: 0 };

  closeEnoughTarget = 75;
  maxSpeed = 8.5;
  maxForce = 0.55;
  particleSize = 2.4; // Finely sized so densely packed particles form rich, organic letter shapes
  isKilled = false;
  isResting = false;

  startColor: ColorRGB = { r: 18, g: 18, b: 22 };
  targetColor: ColorRGB = { r: 18, g: 18, b: 22 };
  colorWeight = 0;
  colorBlendRate = 0.05;

  move() {
    // When settled in position, lock completely still so the particle typography is crisp and readable
    if (this.isResting) {
      return;
    }

    const dx = this.target.x - this.pos.x;
    const dy = this.target.y - this.pos.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const speed = Math.sqrt(this.vel.x * this.vel.x + this.vel.y * this.vel.y);

    // Settle directly into target position without micro-vibrations
    if (distance < 0.9 && speed < 0.8) {
      this.pos.x = this.target.x;
      this.pos.y = this.target.y;
      this.vel.x = 0;
      this.vel.y = 0;
      this.acc.x = 0;
      this.acc.y = 0;
      this.colorWeight = 1.0;
      this.isResting = true;
      return;
    }

    let proximityMult = 1;
    if (distance < this.closeEnoughTarget) {
      proximityMult = Math.max(distance / this.closeEnoughTarget, 0.06);
    }

    const towardsTarget = {
      x: (dx / (distance || 1)) * this.maxSpeed * proximityMult,
      y: (dy / (distance || 1)) * this.maxSpeed * proximityMult,
    };

    let steerX = towardsTarget.x - this.vel.x;
    let steerY = towardsTarget.y - this.vel.y;
    const steerMag = Math.sqrt(steerX * steerX + steerY * steerY);

    if (steerMag > 0) {
      steerX = (steerX / steerMag) * this.maxForce;
      steerY = (steerY / steerMag) * this.maxForce;
    }

    this.acc.x += steerX;
    this.acc.y += steerY;

    this.vel.x += this.acc.x;
    this.vel.y += this.acc.y;

    // Strong damping friction to prevent overshooting or orbiting
    this.vel.x *= 0.85;
    this.vel.y *= 0.85;

    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
    this.acc.x = 0;
    this.acc.y = 0;
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (this.colorWeight < 1.0) {
      this.colorWeight = Math.min(this.colorWeight + this.colorBlendRate, 1.0);
    }

    const r = Math.round(
      this.startColor.r + (this.targetColor.r - this.startColor.r) * this.colorWeight
    );
    const g = Math.round(
      this.startColor.g + (this.targetColor.g - this.startColor.g) * this.colorWeight
    );
    const b = Math.round(
      this.startColor.b + (this.targetColor.b - this.startColor.b) * this.colorWeight
    );

    ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.particleSize / 2, 0, Math.PI * 2);
    ctx.fill();
  }

  kill(width: number, height: number) {
    if (!this.isKilled) {
      this.isResting = false;
      const angle = Math.random() * Math.PI * 2;
      const mag = Math.max(width, height) * 0.9;
      this.target.x = width / 2 + Math.cos(angle) * mag;
      this.target.y = height / 2 + Math.sin(angle) * mag;

      this.startColor = {
        r: Math.round(this.startColor.r + (this.targetColor.r - this.startColor.r) * this.colorWeight),
        g: Math.round(this.startColor.g + (this.targetColor.g - this.startColor.g) * this.colorWeight),
        b: Math.round(this.startColor.b + (this.targetColor.b - this.startColor.b) * this.colorWeight),
      };
      this.targetColor = { r: 160, g: 165, b: 175 };
      this.colorWeight = 0;
      this.isKilled = true;
    }
  }
}

interface HeadingAnimationServiceProps {
  title: string;
  className?: string;
}

// Split service titles into two clean lines for executive typography
function splitTitle(title: string): string[] {
  const words = title.trim().split(/\s+/);
  if (words.length <= 1) return [title];
  if (words.length === 2) {
    return title.length <= 15 ? [title] : [words[0], words[1]];
  }
  if (words.length === 3) {
    return [`${words[0]} ${words[1]}`, words[2]];
  }
  return [`${words[0]} ${words[1]} ${words[2]}`, words.slice(3).join(" ")];
}

export default function HeadingAnimationService({
  title,
  className = "",
}: HeadingAnimationServiceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -9999,
    y: -9999,
    active: false,
  });

  const currentTitleRef = useRef(title);
  const dprRef = useRef(1);

  // Dense pixel sampling: every 2 pixels to form solid, rich letter glyphs made 100% of particles
  const pixelStep = 2;

  const generateRandomPos = (width: number, height: number): Vector2D => {
    const angle = Math.random() * Math.PI * 2;
    const distance = (width + height) * 0.45;
    return {
      x: width / 2 + Math.cos(angle) * distance,
      y: height / 2 + Math.sin(angle) * distance,
    };
  };

  const updateParticlesForWord = (word: string) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const width = Math.floor(rect.width) || canvas.width / (dprRef.current || 1);
    const height = Math.floor(rect.height) || canvas.height / (dprRef.current || 1);
    if (width === 0 || height === 0) return;

    const lines = splitTitle(word);
    let fontSize = Math.min(52, Math.max(28, Math.floor(width / 10.5)));
    if (lines.some((l) => l.length > 18)) {
      fontSize = Math.min(fontSize, 40);
    }
    const lineHeight = fontSize * 1.14;
    const startX = 4;
    const startY = Math.max(4, Math.floor((height - lines.length * lineHeight) / 2));

    // Render typography on offscreen canvas to sample dense particle targets
    const offscreen = document.createElement("canvas");
    offscreen.width = width;
    offscreen.height = height;
    const offCtx = offscreen.getContext("2d");
    if (!offCtx) return;

    offCtx.fillStyle = "#000000";
    offCtx.font = `800 ${fontSize}px Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
    offCtx.textAlign = "left";
    offCtx.textBaseline = "top";

    lines.forEach((line, idx) => {
      offCtx.fillText(line, startX, startY + idx * lineHeight);
    });

    const imageData = offCtx.getImageData(0, 0, width, height);
    const pixels = imageData.data;

    // Collect valid text coordinates with dense sampling
    const coords: Vector2D[] = [];
    for (let y = 0; y < height; y += pixelStep) {
      for (let x = 0; x < width; x += pixelStep) {
        const index = (y * width + x) * 4;
        const alpha = pixels[index + 3];
        if (alpha > 70) {
          coords.push({ x, y });
        }
      }
    }

    // Shuffle coords for fluid natural movement
    for (let i = coords.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = coords[i];
      coords[i] = coords[j];
      coords[j] = temp;
    }

    const particles = particlesRef.current;
    let particleIdx = 0;

    for (const pt of coords) {
      let particle: Particle;

      if (particleIdx < particles.length) {
        particle = particles[particleIdx];
        particle.isKilled = false;
        particle.isResting = false; // Mobilize particle to travel to new letter
        particleIdx++;
      } else {
        particle = new Particle();
        const rand = generateRandomPos(width, height);
        particle.pos.x = rand.x;
        particle.pos.y = rand.y;

        particle.maxSpeed = Math.random() * 5 + 4.5;
        particle.maxForce = particle.maxSpeed * 0.06;
        particle.particleSize = Math.random() * 0.4 + 2.2; // 2.2px - 2.6px
        particle.colorBlendRate = Math.random() * 0.03 + 0.02;

        particles.push(particle);
        particleIdx++;
      }

      // Pick tone from grayish-blackish palette
      const toneIndex = Math.floor(Math.random() * GRAY_BLACK_TONES.length);
      const targetColor = GRAY_BLACK_TONES[toneIndex];

      particle.startColor = {
        r: Math.round(
          particle.startColor.r +
            (particle.targetColor.r - particle.startColor.r) * particle.colorWeight
        ),
        g: Math.round(
          particle.startColor.g +
            (particle.targetColor.g - particle.startColor.g) * particle.colorWeight
        ),
        b: Math.round(
          particle.startColor.b +
            (particle.targetColor.b - particle.startColor.b) * particle.colorWeight
        ),
      };
      particle.targetColor = targetColor;
      particle.colorWeight = 0;

      particle.target.x = pt.x;
      particle.target.y = pt.y;
    }

    // Disperse and kill extra particles
    for (let i = particleIdx; i < particles.length; i++) {
      particles[i].kill(width, height);
    }
  };

  useEffect(() => {
    currentTitleRef.current = title;
    updateParticlesForWord(title);
  }, [title]);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const handleResize = () => {
      const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1;
      dprRef.current = dpr;

      const rect = container.getBoundingClientRect();
      const width = Math.floor(rect.width);
      const height = Math.min(150, Math.max(90, Math.floor(width * 0.28)));

      if (width > 0 && height > 0) {
        // High-DPI retina sharpness
        canvas.width = Math.floor(width * dpr);
        canvas.height = Math.floor(height * dpr);
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        updateParticlesForWord(currentTitleRef.current);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const animate = () => {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const dpr = dprRef.current || 1;
        const logicalWidth = canvas.width / dpr;
        const logicalHeight = canvas.height / dpr;

        // Clear canvas with full transparency so background waves shine through
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.save();
        ctx.scale(dpr, dpr); // DPR scaling for anti-aliased, razor-sharp particles

        const particles = particlesRef.current;
        const mouse = mouseRef.current;

        for (let i = particles.length - 1; i >= 0; i--) {
          const p = particles[i];

          // Magnetic mouse interaction
          if (mouse.active) {
            const mdx = p.pos.x - mouse.x;
            const mdy = p.pos.y - mouse.y;
            const dist = Math.sqrt(mdx * mdx + mdy * mdy);
            if (dist < 60 && dist > 0) {
              p.isResting = false;
              const pushForce = ((60 - dist) / 60) * 5.5;
              p.pos.x += (mdx / dist) * pushForce;
              p.pos.y += (mdy / dist) * pushForce;
            }
          }

          p.move();
          p.draw(ctx);

          // Clean up dead particles out of bounds
          if (p.isKilled) {
            if (
              p.pos.x < -100 ||
              p.pos.x > logicalWidth + 100 ||
              p.pos.y < -100 ||
              p.pos.y > logicalHeight + 100
            ) {
              particles.splice(i, 1);
            }
          }
        }

        ctx.restore();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative w-full select-none ${className}`}>
      {/* Hidden semantic H2 for accessibility and SEO */}
      <h2 className="sr-only">{title}</h2>

      {/* 100% Genuine Particle Text Canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="block w-full cursor-pointer"
        style={{ pointerEvents: "auto" }}
      />
    </div>
  );
}
