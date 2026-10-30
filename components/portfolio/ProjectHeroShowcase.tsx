"use client";

import React from "react";

export interface MacbookProps {
  imageSrc?: string;
  imageAlt?: string;
}

const Macbook: React.FC<MacbookProps> = ({
  imageSrc = "/portfolio/brew-haven.png",
  imageAlt = "PixoraSoftTech Project Showcase"
}) => {
  return (
    <div className="macbook-3d-scene relative flex items-center justify-center select-none pb-16 sm:pb-24 md:pb-28">
      {/* Dynamic 3D Keyframe Styles */}
      <style>{`
        .macbook-3d-scene {
          perspective: 1200px;
          perspective-origin: 50% 40%;
        }

        .macbook-assembly {
          transform-style: preserve-3d;
          animation: macbook-orbit 14s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
        }

        @keyframes macbook-orbit {
          0% {
            transform: rotateX(-14deg) rotateY(0deg) rotateZ(0deg);
          }
          20% {
            transform: rotateX(-10deg) rotateY(-28deg) rotateZ(2deg);
          }
          45% {
            transform: rotateX(16deg) rotateY(165deg) rotateZ(-3deg);
          }
          55% {
            transform: rotateX(14deg) rotateY(195deg) rotateZ(3deg);
          }
          80% {
            transform: rotateX(-12deg) rotateY(335deg) rotateZ(-2deg);
          }
          100% {
            transform: rotateX(-14deg) rotateY(360deg) rotateZ(0deg);
          }
        }

        .macbook-screen-lid {
          transform-style: preserve-3d;
          transform-origin: center bottom;
          animation: macbook-lid-cycle 14s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
        }

        @keyframes macbook-lid-cycle {
          0% {
            transform: rotateX(0deg);
          }
          25% {
            transform: rotateX(-88deg); /* Smoothly closes as it orbits to the back */
          }
          55% {
            transform: rotateX(-88deg);
          }
          75% {
            transform: rotateX(8deg);   /* Gracefully bounces open */
          }
          85% {
            transform: rotateX(0deg);
          }
          100% {
            transform: rotateX(0deg);
          }
        }

        .macbook-glare {
          animation: macbook-glare-sweep 14s ease-in-out infinite;
        }

        @keyframes macbook-glare-sweep {
          0%, 100% {
            transform: translateX(-120%) rotate(-25deg);
            opacity: 0.15;
          }
          15% {
            transform: translateX(-40%) rotate(-25deg);
            opacity: 0.45;
          }
          30%, 70% {
            opacity: 0;
          }
          85% {
            transform: translateX(120%) rotate(-25deg);
            opacity: 0.35;
          }
        }

        .macbook-shadow-cast {
          animation: macbook-shadow-pulse 14s ease-in-out infinite;
        }

        @keyframes macbook-shadow-pulse {
          0%, 100% {
            transform: scale(1) translateY(0);
            opacity: 0.45;
          }
          25%, 55% {
            transform: scale(0.85) translateY(10px);
            opacity: 0.3;
          }
          75% {
            transform: scale(1.05) translateY(-5px);
            opacity: 0.5;
          }
        }
      `}</style>

      {/* Assembly Container */}
      <div className="macbook-assembly relative w-[320px] h-[200px] sm:w-[380px] sm:h-[238px] md:w-[440px] md:h-[275px] lg:w-[480px] lg:h-[300px]">

        {/* ── 1. The Screen Lid (Front: Retina Screen, Back: Aluminum Lid with Apple Logo) ── */}
        <div className="macbook-screen-lid absolute inset-0 z-20">
          
          {/* Front Face: Liquid Retina XDR Display */}
          <div
            className="absolute inset-0 rounded-[14px] bg-[#0c0c0e] p-[7px] sm:p-[9px] shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_20px_40px_rgba(0,0,0,0.5)] overflow-hidden"
            style={{
              backfaceVisibility: "hidden",
              transform: "translateZ(1px)",
            }}
          >
            {/* Top Bezel Notch / Camera */}
            <div className="absolute top-[3px] sm:top-[4px] left-1/2 -translate-x-1/2 z-30 flex items-center justify-center">
              <div className="w-12 sm:w-14 h-[4px] sm:h-[5px] bg-[#000] rounded-b-md flex items-center justify-center gap-1.5 shadow-sm">
                {/* Camera lens */}
                <div className="size-[2.5px] rounded-full bg-[#1e293b] ring-[0.5px] ring-white/20 relative">
                  <div className="absolute inset-0 rounded-full bg-emerald-500/80 blur-[0.5px] animate-pulse" />
                </div>
                {/* Ambient sensor */}
                <div className="size-[1.5px] rounded-full bg-[#0f172a]" />
              </div>
            </div>

            {/* Active Display Panel with Live Image */}
            <div className="relative w-full h-full rounded-[8px] bg-[#000] overflow-hidden shadow-[inset_0_0_3px_rgba(0,0,0,0.8)]">
              {imageSrc && (
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              )}

              {/* Dynamic Glass Specular Glare */}
              <div
                className="macbook-glare pointer-events-none absolute -inset-full w-[300%] h-[300%] bg-gradient-to-r from-transparent via-white/25 to-transparent"
              />

              {/* Display Corner Inset Vignette */}
              <div className="pointer-events-none absolute inset-0 rounded-[8px] shadow-[inset_0_0_8px_rgba(0,0,0,0.4)]" />
            </div>

            {/* Subtle MacBook Pro / Air bottom chin branding */}
            <div className="absolute bottom-[2px] left-1/2 -translate-x-1/2 text-[7px] sm:text-[8px] font-medium tracking-wider text-white/30 uppercase">
              MacBook Pro
            </div>
          </div>

          {/* Back Face: Brushed Space Gray Aluminum Lid with Chrome Apple Logo */}
          <div
            className="absolute inset-0 rounded-[14px] overflow-hidden flex items-center justify-center border border-white/15"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg) translateZ(1px)",
              background: "linear-gradient(145deg, #47474c 0%, #2f2f33 50%, #1e1e21 100%)",
              boxShadow: "inset 0 1px 2px rgba(255,255,255,0.3), inset 0 -2px 6px rgba(0,0,0,0.6)",
            }}
          >
            {/* Subtle metallic reflection highlight */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.18)_0%,transparent_60%)]" />

            {/* ── Official Chromed Apple Logo ── */}
            <div className="relative z-10 flex items-center justify-center drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]">
              <svg
                viewBox="0 0 170 170"
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 transition-transform duration-700 hover:scale-105"
              >
                <defs>
                  <linearGradient id="apple-mirror-chrome" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                    <stop offset="30%" stopColor="#e2e8f0" stopOpacity="0.9" />
                    <stop offset="55%" stopColor="#94a3b8" stopOpacity="0.85" />
                    <stop offset="80%" stopColor="#cbd5e1" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
                  </linearGradient>
                  <filter id="apple-emboss" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="1" stdDeviation="0.8" floodColor="#000" floodOpacity="0.6" />
                  </filter>
                </defs>
                <path
                  fill="url(#apple-mirror-chrome)"
                  filter="url(#apple-emboss)"
                  d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.81-11.96-14.31-5.59-8.48-10.15-18.33-13.68-29.56-3.53-11.23-5.29-22.01-5.29-32.33 0-14.28 3.53-26.04 10.59-35.29 7.06-9.25 16.03-13.99 26.92-14.22 5.06 0 10.58 1.45 16.56 4.35 5.98 2.9 9.87 4.41 11.66 4.54 1.52-.13 5.48-1.64 11.88-4.54 6.4-2.9 11.8-4.29 16.2-4.18 12.01.62 21.6 5.12 28.77 13.5-10.45 6.32-15.56 15.02-15.34 26.1.22 8.64 3.49 15.82 9.81 21.55 6.32 5.73 13.79 9.07 22.42 10.02-1.96 5.88-4.19 11.75-6.69 17.62zM119.22 33.15c0-7.23 2.62-14.07 7.86-20.52 5.24-6.45 11.76-10.74 19.56-12.87.22 1.3.33 2.5.33 3.59 0 7.23-2.67 14.22-8.01 20.97-5.34 6.75-11.99 11.05-19.95 12.89-.22-1.3-.33-2.5-.33-3.6z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* ── 2. The Bottom Chassis (Keyboard, Trackpad, Speaker Grilles) ── */}
        <div
          className="absolute inset-0 rounded-[14px] p-3 sm:p-4 overflow-hidden border border-white/20"
          style={{
            transformStyle: "preserve-3d",
            transformOrigin: "center bottom",
            transform: "rotateX(-90deg)",
            background: "linear-gradient(175deg, #38383c 0%, #29292c 40%, #1e1e21 100%)",
            boxShadow:
              "inset 0 1px 2px rgba(255,255,255,0.4), inset 0 -3px 8px rgba(0,0,0,0.7), 0 12px 30px rgba(0,0,0,0.5)",
          }}
        >
          {/* Thumb Notch Opening Lip */}
          <div className="absolute top-[2px] left-1/2 -translate-x-1/2 w-14 sm:w-16 h-[3px] bg-black/40 rounded-b-md shadow-inner" />

          {/* Keyboard Deck Well */}
          <div className="relative mt-2 sm:mt-3 w-full bg-[#18181a] rounded-[8px] p-1.5 sm:p-2 border border-black/80 shadow-[inset_0_2px_6px_rgba(0,0,0,0.9),0_1px_0_rgba(255,255,255,0.15)] flex justify-between gap-2">
            
            {/* Left Speaker Acoustic Grille */}
            <div className="w-3 sm:w-4 self-stretch flex flex-col justify-between py-1 opacity-40">
              {Array.from({ length: 18 }).map((_, i) => (
                <div key={`spk-l-${i}`} className="w-full h-[1px] bg-white/50 rounded-full" />
              ))}
            </div>

            {/* Magic Keyboard Array */}
            <div className="flex-1 flex flex-col gap-[2px] sm:gap-[3px]">
              {/* Row 1: Function Keys */}
              <div className="flex gap-[2px] sm:gap-[3px]">
                <div className="flex-1 h-[7px] sm:h-[9px] bg-[#242427] rounded-[2px] shadow-[0_1px_1px_rgba(0,0,0,0.9)] border-t border-white/10" />
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={`f-${i}`} className="flex-1 h-[7px] sm:h-[9px] bg-[#242427] rounded-[2px] shadow-[0_1px_1px_rgba(0,0,0,0.9)] border-t border-white/10" />
                ))}
                {/* Touch ID Sensor */}
                <div className="w-[14px] sm:w-[18px] h-[7px] sm:h-[9px] bg-[#1a1a1d] rounded-full ring-[0.5px] ring-white/30" />
              </div>

              {/* Row 2: Numbers */}
              <div className="flex gap-[2px] sm:gap-[3px]">
                {Array.from({ length: 14 }).map((_, i) => (
                  <div key={`n-${i}`} className="flex-1 h-[11px] sm:h-[14px] bg-[#242427] rounded-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.85)] border-t border-white/10" />
                ))}
              </div>

              {/* Row 3: QWERTY */}
              <div className="flex gap-[2px] sm:gap-[3px]">
                <div className="w-[18px] sm:w-[22px] h-[11px] sm:h-[14px] bg-[#242427] rounded-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.85)] border-t border-white/10" />
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={`q-${i}`} className="flex-1 h-[11px] sm:h-[14px] bg-[#242427] rounded-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.85)] border-t border-white/10" />
                ))}
                <div className="w-[18px] sm:w-[22px] h-[11px] sm:h-[14px] bg-[#242427] rounded-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.85)] border-t border-white/10" />
              </div>

              {/* Row 4: ASDF */}
              <div className="flex gap-[2px] sm:gap-[3px]">
                <div className="w-[22px] sm:w-[28px] h-[11px] sm:h-[14px] bg-[#242427] rounded-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.85)] border-t border-white/10" />
                {Array.from({ length: 11 }).map((_, i) => (
                  <div key={`a-${i}`} className="flex-1 h-[11px] sm:h-[14px] bg-[#242427] rounded-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.85)] border-t border-white/10" />
                ))}
                <div className="w-[24px] sm:w-[30px] h-[11px] sm:h-[14px] bg-[#242427] rounded-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.85)] border-t border-white/10" />
              </div>

              {/* Row 5: ZXCV */}
              <div className="flex gap-[2px] sm:gap-[3px]">
                <div className="w-[28px] sm:w-[34px] h-[11px] sm:h-[14px] bg-[#242427] rounded-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.85)] border-t border-white/10" />
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={`z-${i}`} className="flex-1 h-[11px] sm:h-[14px] bg-[#242427] rounded-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.85)] border-t border-white/10" />
                ))}
                <div className="w-[30px] sm:w-[38px] h-[11px] sm:h-[14px] bg-[#242427] rounded-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.85)] border-t border-white/10" />
              </div>

              {/* Row 6: Spacebar and Modifiers */}
              <div className="flex gap-[2px] sm:gap-[3px]">
                <div className="w-[14px] sm:w-[18px] h-[11px] sm:h-[14px] bg-[#242427] rounded-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.85)] border-t border-white/10" />
                <div className="w-[14px] sm:w-[18px] h-[11px] sm:h-[14px] bg-[#242427] rounded-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.85)] border-t border-white/10" />
                <div className="w-[18px] sm:w-[22px] h-[11px] sm:h-[14px] bg-[#242427] rounded-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.85)] border-t border-white/10" />
                {/* Wide Spacebar */}
                <div className="flex-1 h-[11px] sm:h-[14px] bg-[#242427] rounded-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.85)] border-t border-white/10" />
                <div className="w-[18px] sm:w-[22px] h-[11px] sm:h-[14px] bg-[#242427] rounded-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.85)] border-t border-white/10" />
                <div className="w-[14px] sm:w-[18px] h-[11px] sm:h-[14px] bg-[#242427] rounded-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.85)] border-t border-white/10" />
                <div className="w-[20px] sm:w-[26px] h-[11px] sm:h-[14px] bg-[#242427] rounded-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.85)] border-t border-white/10" />
              </div>
            </div>

            {/* Right Speaker Acoustic Grille */}
            <div className="w-3 sm:w-4 self-stretch flex flex-col justify-between py-1 opacity-40">
              {Array.from({ length: 18 }).map((_, i) => (
                <div key={`spk-r-${i}`} className="w-full h-[1px] bg-white/50 rounded-full" />
              ))}
            </div>
          </div>

          {/* Force Touch Large Glass Trackpad */}
          <div className="mx-auto mt-2 sm:mt-3 w-[120px] sm:w-[150px] md:w-[170px] h-[55px] sm:h-[68px] md:h-[78px] rounded-[6px] bg-[#2b2b2f] border border-white/10 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),0_1px_3px_rgba(0,0,0,0.5)] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/20" />
          </div>
        </div>
      </div>

      {/* ── 3. Atmospheric Ground Ambient Occlusion Shadow ── */}
      <div
        className="macbook-shadow-cast absolute -bottom-16 sm:-bottom-20 w-[280px] sm:w-[360px] md:w-[420px] h-[30px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.18) 45%, transparent 75%)",
          filter: "blur(14px)",
        }}
      />
    </div>
  );
};

export { Macbook };
export default Macbook;
