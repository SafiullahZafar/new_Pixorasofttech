"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    instagram?: string;
  };
}

const DEFAULT_MEMBERS: TeamMember[] = [
  {
    id: "1",
    name: "Ali Raza",
    role: "Founder & Lead Architect",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85",
    social: { twitter: "https://twitter.com", linkedin: "https://linkedin.com", github: "https://github.com" },
  },
  {
    id: "2",
    name: "Hamza Tariq",
    role: "Head of Engineering",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=85",
    social: { twitter: "https://twitter.com", linkedin: "https://linkedin.com", github: "https://github.com" },
  },
  {
    id: "3",
    name: "Ayesha Noor",
    role: "Lead Product & UX Designer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=85",
    social: { linkedin: "https://linkedin.com", instagram: "https://instagram.com" },
  },
  {
    id: "4",
    name: "Daniyal Ahmed",
    role: "Senior Full-Stack Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85",
    social: { twitter: "https://twitter.com", linkedin: "https://linkedin.com", github: "https://github.com" },
  },
  {
    id: "5",
    name: "Zainab Fatima",
    role: "AI & Machine Learning Specialist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=85",
    social: { twitter: "https://twitter.com", linkedin: "https://linkedin.com", github: "https://github.com" },
  },
  {
    id: "6",
    name: "Bilal Hassan",
    role: "Mobile Systems Lead",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=85",
    social: { linkedin: "https://linkedin.com", github: "https://github.com" },
  },
  {
    id: "7",
    name: "Sarah Jenkins",
    role: "Spatial Web & 3D Interactive Lead",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=85",
    social: { twitter: "https://twitter.com", linkedin: "https://linkedin.com", instagram: "https://instagram.com" },
  },
  {
    id: "8",
    name: "Farhan Malik",
    role: "DevOps & Cloud Infrastructure Lead",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=900&q=85",
    social: { linkedin: "https://linkedin.com", github: "https://github.com" },
  },
  {
    id: "9",
    name: "Maria Alvi",
    role: "QA Automation & Performance Lead",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=900&q=85",
    social: { twitter: "https://twitter.com", linkedin: "https://linkedin.com" },
  },
];

interface TeamShowcaseProps {
  members?: TeamMember[];
}

export default function TeamPhotoStackSection({ members = DEFAULT_MEMBERS }: TeamShowcaseProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Divide the 9 members into 3 staggered vertical columns
  const col1 = members.filter((_, i) => i % 3 === 0);
  const col2 = members.filter((_, i) => i % 3 === 1);
  const col3 = members.filter((_, i) => i % 3 === 2);

  return (
    <section
      id="team-members"
      className="relative w-full px-4 sm:px-8 lg:px-12 2xl:px-16 min-[2200px]:px-24 pt-16 sm:pt-24 lg:pt-28 pb-20 sm:pb-28 lg:pb-36 max-w-[1540px] 2xl:max-w-[2000px] min-[2200px]:max-w-[2600px] mx-auto z-20 select-none font-sans"
    >
      {/* ── Section Heading: Moved down with ample breathing room, no top badge clutter ── */}
      <div className="flex flex-col items-start text-left mb-12 sm:mb-16 lg:mb-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl min-[2200px]:text-7xl font-semibold tracking-tight text-[#111]">
          Meet Our Exceptional Squad
        </h2>
      </div>

      {/* ── Showcase Container: Staggered photo columns on left, interactive member rows on right ── */}
      <div className="flex flex-col lg:flex-row items-start gap-10 sm:gap-12 lg:gap-16 2xl:gap-24 w-full justify-between">
        {/* ── Left: Staggered 3-Column Photo Gallery (scales gracefully up to 3000px) ── */}
        <div className="flex gap-2.5 sm:gap-3.5 md:gap-4 2xl:gap-6 flex-shrink-0 mx-auto lg:mx-0 overflow-x-auto pb-2 lg:pb-0">
          {/* Column 1 */}
          <div className="flex flex-col gap-2.5 sm:gap-3.5 md:gap-4 2xl:gap-6">
            {col1.map((member) => (
              <PhotoCard
                key={member.id}
                member={member}
                className="w-[115px] h-[130px] sm:w-[145px] sm:h-[160px] md:w-[170px] md:h-[188px] lg:w-[185px] lg:h-[205px] 2xl:w-[245px] 2xl:h-[270px] min-[2200px]:w-[310px] min-[2200px]:h-[340px]"
                hoveredId={hoveredId}
                onHover={setHoveredId}
              />
            ))}
          </div>

          {/* Column 2 (staggered offset) */}
          <div className="flex flex-col gap-2.5 sm:gap-3.5 md:gap-4 2xl:gap-6 mt-[45px] sm:mt-[55px] md:mt-[68px] 2xl:mt-[90px] min-[2200px]:mt-[115px]">
            {col2.map((member) => (
              <PhotoCard
                key={member.id}
                member={member}
                className="w-[125px] h-[142px] sm:w-[155px] sm:h-[172px] md:w-[185px] md:h-[205px] lg:w-[200px] lg:h-[222px] 2xl:w-[265px] 2xl:h-[295px] min-[2200px]:w-[335px] min-[2200px]:h-[370px]"
                hoveredId={hoveredId}
                onHover={setHoveredId}
              />
            ))}
          </div>

          {/* Column 3 (medium offset) */}
          <div className="flex flex-col gap-2.5 sm:gap-3.5 md:gap-4 2xl:gap-6 mt-[20px] sm:mt-[26px] md:mt-[34px] 2xl:mt-[46px] min-[2200px]:mt-[58px]">
            {col3.map((member) => (
              <PhotoCard
                key={member.id}
                member={member}
                className="w-[118px] h-[135px] sm:w-[150px] sm:h-[165px] md:w-[175px] md:h-[195px] lg:w-[190px] lg:h-[212px] 2xl:w-[252px] 2xl:h-[280px] min-[2200px]:w-[320px] min-[2200px]:h-[355px]"
                hoveredId={hoveredId}
                onHover={setHoveredId}
              />
            ))}
          </div>
        </div>

        {/* ── Right: Synchronized Interactive Members List ── */}
        <div className="flex flex-col gap-4 sm:gap-5 2xl:gap-6 lg:pt-3 flex-1 w-full max-w-2xl 2xl:max-w-3xl min-[2200px]:max-w-4xl">
          {members.map((member) => (
            <MemberRow
              key={member.id}
              member={member}
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Photo card with smooth grayscale & brightness transitions
───────────────────────────────────────── */
function PhotoCard({
  member,
  className,
  hoveredId,
  onHover,
}: {
  member: TeamMember;
  className: string;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl cursor-pointer flex-shrink-0 transition-all duration-400 border border-black/10 shadow-sm",
        className,
        isDimmed ? "opacity-55 scale-[0.98]" : "opacity-100 scale-100",
        isActive && "shadow-xl border-[#0A2540]/30 ring-2 ring-[#0A2540]/20"
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onHover(isActive ? null : member.id)}
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover transition-[filter,transform] duration-500 hover:scale-105"
        style={{
          filter: isActive ? "grayscale(0) brightness(1.05)" : "grayscale(1) brightness(0.8)",
        }}
        loading="lazy"
      />
    </div>
  );
}

/* ─────────────────────────────────────────
   Member name row with indicator pill and sliding social icons
───────────────────────────────────────── */
function MemberRow({
  member,
  hoveredId,
  onHover,
}: {
  member: TeamMember;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;
  const hasSocial =
    member.social?.twitter ||
    member.social?.linkedin ||
    member.social?.instagram ||
    member.social?.github;

  return (
    <div
      className={cn(
        "cursor-pointer transition-all duration-300 py-1.5 px-2 rounded-xl group",
        isDimmed ? "opacity-45" : "opacity-100",
        isActive && "bg-black/[0.03]"
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onHover(isActive ? null : member.id)}
    >
      {/* Name + Indicator + Socials */}
      <div className="flex items-center gap-3 2xl:gap-4">
        {/* Active state indicator pill */}
        <span
          className={cn(
            "h-3.5 2xl:h-4.5 rounded-[5px] flex-shrink-0 transition-all duration-300",
            isActive ? "bg-[#0A2540] w-6 2xl:w-8" : "bg-black/20 w-4 2xl:w-5"
          )}
        />

        {/* Member Name */}
        <span
          className={cn(
            "text-lg sm:text-xl md:text-2xl 2xl:text-3xl min-[2200px]:text-4xl font-semibold leading-tight tracking-tight transition-colors duration-300",
            isActive ? "text-[#0A2540]" : "text-black/85"
          )}
        >
          {member.name}
        </span>

        {/* Sliding Social Icons */}
        {hasSocial && (
          <div
            className={cn(
              "flex items-center gap-1.5 sm:gap-2 ml-1 transition-all duration-200",
              isActive
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-3 pointer-events-none"
            )}
          >
            {member.social?.linkedin && (
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1 sm:p-1.5 rounded-md text-slate-500 hover:text-[#0A2540] hover:bg-[#0A2540]/10 transition-all duration-150 hover:scale-110"
                title="LinkedIn"
              >
                <LinkedInIcon className="size-3.5 sm:size-4 2xl:size-5" />
              </a>
            )}
            {member.social?.twitter && (
              <a
                href={member.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1 sm:p-1.5 rounded-md text-slate-500 hover:text-[#0A2540] hover:bg-[#0A2540]/10 transition-all duration-150 hover:scale-110"
                title="X / Twitter"
              >
                <TwitterIcon className="size-3.5 sm:size-4 2xl:size-5" />
              </a>
            )}
            {member.social?.github && (
              <a
                href={member.social.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1 sm:p-1.5 rounded-md text-slate-500 hover:text-[#0A2540] hover:bg-[#0A2540]/10 transition-all duration-150 hover:scale-110"
                title="GitHub"
              >
                <GitHubIcon className="size-3.5 sm:size-4 2xl:size-5" />
              </a>
            )}
            {member.social?.instagram && (
              <a
                href={member.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1 sm:p-1.5 rounded-md text-slate-500 hover:text-[#0A2540] hover:bg-[#0A2540]/10 transition-all duration-150 hover:scale-110"
                title="Instagram"
              >
                <InstagramIcon className="size-3.5 sm:size-4 2xl:size-5" />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Role */}
      <p className="mt-1 pl-[28px] sm:pl-[32px] 2xl:pl-[40px] text-xs sm:text-sm 2xl:text-base font-medium uppercase tracking-[0.2em] text-black/50">
        {member.role}
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────
   Clean SVG Brand Icons
───────────────────────────────────────── */
function LinkedInIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function TwitterIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}
