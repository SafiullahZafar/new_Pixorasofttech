"use client";

import React, { useState } from "react";
import { 
  Sparkles, 
  RotateCw, 
  CheckCircle2, 
  ArrowUpRight
} from "lucide-react";

// Inline clean SVG icons for brand socials
const LinkedInIcon = ({ className = "size-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubIcon = ({ className = "size-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const TwitterIcon = ({ className = "size-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  bio: string;
  highlights: string[];
  skills: string[];
  image: string;
  socials?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "Safiullah Zafar",
    role: "Founder & Lead Architect",
    department: "Executive & Architecture",
    bio: "Pioneering digital architecture and scalable full-stack ecosystems. Specializes in distributed cloud services, high-throughput microservices, and modern web application scaling.",
    highlights: ["10+ yrs system design", "Enterprise cloud strategist", "Modern web performance"],
    skills: ["Next.js", "TypeScript", "System Architecture", "Cloud Native", "React"],
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: 2,
    name: "Hamza Tariq",
    role: "Head of Engineering",
    department: "Engineering Leadership",
    bio: "Drives engineering standards and end-to-end technical execution. Leads cross-functional pods in delivering high-security APIs and ultra-low latency web experiences.",
    highlights: ["Sub-50ms API throughput", "Microservices orchestration", "Full-stack governance"],
    skills: ["Node.js", "PostgreSQL", "Go", "Kubernetes", "GraphQL"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=85",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
  {
    id: 3,
    name: "Ayesha Noor",
    role: "Lead Product & UX Designer",
    department: "Design & Research",
    bio: "Transforms complex enterprise workflows into intuitive, visually breathtaking digital interfaces through deep user research, design systems, and rapid prototyping.",
    highlights: ["Design systems authority", "Conversion-centered UX", "Micro-interaction master"],
    skills: ["Figma", "Design Systems", "UX Strategy", "Prototyping", "Design Ops"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=85",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: 4,
    name: "Daniyal Ahmed",
    role: "Senior Full-Stack Developer",
    department: "Core Engineering",
    bio: "Dedicated to building resilient, accessible frontend and backend systems with high performance rendering, modern caching, and seamless database pipelines.",
    highlights: ["Next-gen Server Components", "Zero-layout shift layouts", "Fluid API integration"],
    skills: ["React 19", "Next.js", "Tailwind CSS", "Prisma", "Redis"],
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
  {
    id: 5,
    name: "Zainab Fatima",
    role: "AI & Machine Learning Specialist",
    department: "Data & AI Intelligence",
    bio: "Builds intelligent automated agents, LLM pipelines, and vector embeddings that empower smart workflow recommendations and real-time enterprise AI insights.",
    highlights: ["Custom RAG frameworks", "High-efficiency vector search", "Predictive modeling"],
    skills: ["Python", "PyTorch", "LangChain", "Vector DBs", "OpenAI APIs"],
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=85",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
  {
    id: 6,
    name: "Bilal Hassan",
    role: "Mobile Systems & React Native Lead",
    department: "Mobile Engineering",
    bio: "Architects cross-platform iOS and Android solutions with 60fps native feel, background sync reliability, offline-first architectures, and smooth fluid gestures.",
    highlights: ["60fps smooth animations", "Native bridge optimization", "Offline sync engines"],
    skills: ["React Native", "Swift / Kotlin", "Redux Toolkit", "Mobile Security"],
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=85",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
  {
    id: 7,
    name: "Sarah Jenkins",
    role: "Spatial Web & 3D Interactive Lead",
    department: "Creative Technology",
    bio: "Blends creative code with WebGL, Three.js, and spatial interaction models to deliver boundary-pushing 3D brand experiences that engage users on first touch.",
    highlights: ["WebGL shader development", "Immersive 3D environments", "GPU performance tuning"],
    skills: ["Three.js", "WebGL", "Spline", "GLSL Shaders", "GSAP Motion"],
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=85",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: 8,
    name: "Farhan Malik",
    role: "DevOps & Cloud Infrastructure Lead",
    department: "Site Reliability & Cloud",
    bio: "Commands continuous deployment infrastructure, cloud cost governance, edge distribution, and automated zero-downtime containerized production clusters.",
    highlights: ["99.99% uptime compliance", "Multi-region cloud clusters", "Automated CI/CD pipelines"],
    skills: ["AWS", "Terraform", "Docker", "CI/CD", "Prometheus / Grafana"],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=900&q=85",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
  {
    id: 9,
    name: "Maria Alvi",
    role: "QA Automation & Performance Lead",
    department: "Quality Engineering",
    bio: "Ensures bulletproof product resilience across all screen viewports, network conditions, and browsers via robust automated test suites and synthetic monitoring.",
    highlights: ["End-to-end test automation", "Web Vitals score optimization", "Cross-browser resilience"],
    skills: ["Playwright", "Jest / Vitest", "Lighthouse", "Cypress", "Performance Profiling"],
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=900&q=85",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
];

export default function TeamPhotoStackSection() {
  // Track which cards are hovered
  const [hoveredCards, setHoveredCards] = useState<Record<number, boolean>>({});
  // Track which cards are locked in flip state via click
  const [lockedCards, setLockedCards] = useState<Record<number, boolean>>({});

  const handleMouseEnter = (id: number) => {
    setHoveredCards((prev) => ({ ...prev, [id]: true }));
  };

  const handleMouseLeave = (id: number) => {
    setHoveredCards((prev) => ({ ...prev, [id]: false }));
  };

  const handleClick = (id: number) => {
    setLockedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section 
      id="team-members" 
      className="relative w-full px-4 sm:px-6 lg:px-10 py-16 sm:py-24 max-w-[1540px] mx-auto z-20"
    >
      {/* Header section */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#0A2540]/15 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#0A2540] shadow-xs backdrop-blur-md mb-4">
          <Sparkles className="size-3.5 text-blue-600" />
          <span>The Minds Behind PixoraSoftTech</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#111] max-w-3xl">
          Meet Our Exceptional Squad
        </h2>

        <p className="mt-3.5 text-sm sm:text-base text-black/65 max-w-2xl leading-relaxed">
          Hover over any card to reveal their profile photo, or click to lock the card in place. Click again to flip it back.
        </p>

        {/* Quick legend / hint */}
        <div className="mt-5 inline-flex items-center gap-2 rounded-lg bg-black/[0.04] px-3.5 py-1.5 text-xs font-medium text-slate-700">
          <RotateCw className="size-3.5 text-blue-600 animate-spin" style={{ animationDuration: "6s" }} />
          <span>Hover to preview photo &bull; Click to hold flipped state</span>
        </div>
      </div>

      {/* 9 Cards Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {TEAM_MEMBERS.map((member) => {
          const isLocked = !!lockedCards[member.id];
          const isHovered = !!hoveredCards[member.id];
          const isFlipped = isLocked || isHovered;

          return (
            <div
              key={member.id}
              onClick={() => handleClick(member.id)}
              onMouseEnter={() => handleMouseEnter(member.id)}
              onMouseLeave={() => handleMouseLeave(member.id)}
              className="cursor-pointer select-none group w-full h-[470px] sm:h-[490px] [perspective:1200px]"
              role="button"
              tabIndex={0}
              aria-label={`${member.name} - ${member.role}. Click to toggle flip.`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleClick(member.id);
                }
              }}
            >
              {/* 3D Flip Card Inner Container */}
              <div
                className="relative w-full h-full rounded-2xl transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] [transform-style:preserve-3d] shadow-md group-hover:shadow-xl"
                style={{
                  transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                {/* ---------------- FRONT SIDE: ROLE, DETAILS & TECH ---------------- */}
                <div
                  className="absolute inset-0 w-full h-full rounded-2xl bg-white border border-slate-200/90 [backface-visibility:hidden] [-webkit-backface-visibility:hidden] p-6 sm:p-7 flex flex-col justify-between overflow-hidden"
                >
                  {/* Subtle top background decorative glow */}
                  <div className="absolute top-0 right-0 -mr-12 -mt-12 w-44 h-44 rounded-full bg-gradient-to-br from-blue-100/70 to-indigo-100/30 blur-2xl pointer-events-none" />

                  {/* Top: Department Badge + Flip Status Indicator */}
                  <div className="relative z-10 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200/90 bg-blue-50/80 px-3 py-1 text-[11px] font-semibold text-blue-700 tracking-wide">
                      <span className="size-1.5 rounded-full bg-blue-600 animate-pulse" />
                      {member.department}
                    </span>

                    <div 
                      className={`inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-md border transition-colors ${
                        isLocked 
                          ? "bg-blue-600 text-white border-blue-600" 
                          : "bg-slate-100 text-slate-500 border-slate-200 group-hover:text-blue-600 group-hover:border-blue-200"
                      }`}
                    >
                      <RotateCw className="size-3" />
                      <span>{isLocked ? "Locked" : "Flip"}</span>
                    </div>
                  </div>

                  {/* Middle: Role Title, Bio & Highlights */}
                  <div className="relative z-10 my-auto pt-3">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0A2540] leading-snug">
                      {member.role}
                    </h3>
                    
                    <p className="mt-2 text-xs sm:text-[13px] text-slate-600 leading-relaxed line-clamp-3">
                      {member.bio}
                    </p>

                    {/* Key responsibilities/highlights */}
                    <div className="mt-3.5 space-y-1.5 pt-3 border-t border-slate-100">
                      {member.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="size-3.5 text-blue-600 shrink-0" />
                          <span className="font-medium truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom: Skills & Instruction */}
                  <div className="relative z-10 pt-3 border-t border-slate-100">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
                      Core Stack &amp; Focus
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="mt-3 pt-2 flex items-center justify-between text-[11px] text-slate-500">
                      <span className="font-medium text-blue-600 group-hover:underline">
                        Hover or click to view portrait
                      </span>
                      <ArrowUpRight className="size-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                  </div>
                </div>

                {/* ---------------- BACK SIDE: PHOTO & NAME AT BOTTOM ---------------- */}
                <div
                  className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)] border border-slate-300 shadow-xl bg-zinc-950 flex flex-col justify-end"
                >
                  {/* Full Portrait Image */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Vignette Overlay for Crisp Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/10" />

                  {/* Top Status & Pin Indicator on Back */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md">
                      {member.department}
                    </span>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleClick(member.id);
                      }}
                      className={`inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-full border backdrop-blur-md transition-all ${
                        isLocked
                          ? "bg-blue-600 text-white border-blue-500 shadow-md"
                          : "bg-black/50 text-white/80 border-white/20 hover:bg-black/70"
                      }`}
                    >
                      <RotateCw className="size-3" />
                      <span>{isLocked ? "Pinned" : "Pin Flip"}</span>
                    </button>
                  </div>

                  {/* Bottom: Person's Name and Role prominently styled */}
                  <div className="relative z-10 p-5 sm:p-6 text-white">
                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-300">
                      {member.role}
                    </p>
                    
                    <h4 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-white drop-shadow-sm">
                      {member.name}
                    </h4>

                    {/* Social links & Click to flip back prompt */}
                    <div className="mt-3 pt-3 border-t border-white/20 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        {member.socials?.linkedin && (
                          <span
                            aria-label="LinkedIn"
                            className="text-white/70 hover:text-white transition-colors"
                          >
                            <LinkedInIcon className="size-4" />
                          </span>
                        )}
                        {member.socials?.github && (
                          <span
                            aria-label="GitHub"
                            className="text-white/70 hover:text-white transition-colors"
                          >
                            <GitHubIcon className="size-4" />
                          </span>
                        )}
                        {member.socials?.twitter && (
                          <span
                            aria-label="Twitter"
                            className="text-white/70 hover:text-white transition-colors"
                          >
                            <TwitterIcon className="size-4" />
                          </span>
                        )}
                      </div>

                      <span className="text-[11px] text-white/70 flex items-center gap-1">
                        <RotateCw className="size-3 text-blue-300" />
                        <span>{isLocked ? "Click to unflip" : "Mouse out to flip back"}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
