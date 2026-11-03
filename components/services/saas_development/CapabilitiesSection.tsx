"use client";

import React, { useEffect, useRef, useState } from "react";
import { Share2, Copy, Check } from "lucide-react";

// Inline clean SVG icons
const InstagramIcon = ({ className = "size-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const LinkedInIcon = ({ className = "size-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const BehanceIcon = ({ className = "size-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-4.726 3-3.666 0-6-2.583-6-6 0-3.582 2.417-6 6-6 3.582 0 5.617 2.375 5.617 5.75 0 .341-.019.704-.055 1.05h-8.562c.113 2.112 1.554 3.2 3.2 3.2 1.531 0 2.457-.698 2.871-1.4h1.655zm-1.801-4.2c-.085-1.503-1.127-2.8-2.925-2.8-1.748 0-2.88 1.238-3.075 2.8h6zm-14.925-4.8h-4v4h4c1.104 0 2-.896 2-2s-.896-2-2-2zm-4 6v5h4.5c1.381 0 2.5-1.119 2.5-2.5s-1.119-2.5-2.5-2.5h-4.5zm0-8h7.25c2.622 0 4.75 2.128 4.75 4.75 0 1.487-.684 2.813-1.752 3.69 1.677.925 2.752 2.695 2.752 4.56 0 2.761-2.239 5-5 5h-8.001v-18z" />
  </svg>
);

export default function CapabilitiesSection({
  technologies,
}: {
  technologies?: string[];
}) {
  const [copied, setCopied] = useState(false);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const [revealedWordCount, setRevealedWordCount] = useState(0);
  const descriptionSegments = [
    "At PixoraSoftTech, we design and build SaaS products around your business model, your users, and the way your teams work.",
    "From product architecture through launch and ongoing support, we create secure platforms that are ready to grow with your customers.",
  ];
  const descriptionWords = descriptionSegments.map((segment) => segment.split(" "));
  const totalDescriptionWords = descriptionWords.reduce((total, words) => total + words.length, 0);

  useEffect(() => {
    let frameId = 0;
    let currentProgress = 0;
    let targetProgress = 0;
    const revealNextFrame = () => {
      currentProgress += (targetProgress - currentProgress) * 0.32;
      setRevealedWordCount(Math.floor(currentProgress * totalDescriptionWords));
      if (Math.abs(targetProgress - currentProgress) > 0.002) frameId = requestAnimationFrame(revealNextFrame);
    };
    const handleScroll = () => {
      const element = descriptionRef.current;
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const start = window.innerHeight * 0.92;
      const end = window.innerHeight * 0.45 - rect.height;
      targetProgress = Math.max(0, Math.min(1, (start - rect.top) / (start - end)));
      cancelAnimationFrame(frameId);
      if (targetProgress >= 1) {
        currentProgress = 1;
        setRevealedWordCount(totalDescriptionWords);
        return;
      }
      frameId = requestAnimationFrame(revealNextFrame);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(frameId);
    };
  }, [totalDescriptionWords]);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShare = () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      navigator.share({
        title: "SaaS Development | PixoraSoftTech",
        url: typeof window !== "undefined" ? window.location.href : "",
      }).catch(() => {});
    } else {
      handleCopyLink();
    }
  };

  return (
    <section className="relative w-full bg-transparent py-16 sm:py-20 lg:py-24 px-6 md:px-12 lg:px-14 font-sans text-[#131927]">
      <div className="max-w-[2280px] mx-auto flex flex-col md:flex-row md:items-stretch gap-10 lg:gap-16 2xl:gap-24 items-start">
        {/* Left Sticky Sidebar */}
        <aside className="relative z-20 w-full flex-shrink-0 md:w-20 md:self-stretch">
          <div className="flex items-center justify-between gap-5 rounded-2xl border border-slate-100 bg-slate-50 p-4 md:sticky md:top-24 md:flex-col md:justify-start md:rounded-none md:border-0 md:border-r md:border-slate-200 md:bg-transparent md:p-0 md:pr-6">
            <button
              onClick={handleShare}
              className="group flex flex-col items-center text-center cursor-pointer focus:outline-none"
              title="Share Service"
            >
              <div className="w-10 h-10 rounded-full bg-slate-100 group-hover:bg-[#131927] group-hover:text-white flex items-center justify-center transition-colors">
                <Share2 className="w-5 h-5 text-slate-800 group-hover:text-white" />
              </div>
              <span className="text-[10px] font-medium text-slate-600 mt-1">Share</span>
            </button>

            <div className="hidden md:block w-8 h-px bg-slate-200 my-1" />

            <div className="flex md:flex-col items-center gap-4 text-slate-500">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-600 transition-colors p-1"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.behance.net"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 transition-colors p-1"
                aria-label="Behance"
              >
                <BehanceIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-700 transition-colors p-1"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
              <button
                onClick={handleCopyLink}
                className="p-1 hover:text-slate-900 transition-colors cursor-pointer"
                title="Copy Link"
              >
                {copied ? <Check className="w-5 h-5 text-emerald-600" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </aside>

        {/* Right Main Column */}
        <main className="flex-1 max-w-3xl 2xl:max-w-4xl space-y-12">
          <div>
            <h2 className="text-3xl sm:text-4xl 2xl:text-5xl font-semibold tracking-tight text-[#131927] mb-6">
              SaaS Development
            </h2>
            <div ref={descriptionRef} className="space-y-4 text-base font-normal leading-relaxed sm:text-lg 2xl:text-xl" aria-label={descriptionSegments.join(" ")}>
              {descriptionWords.map((words, segmentIndex) => {
                const segmentStart = descriptionWords
                  .slice(0, segmentIndex)
                  .reduce((total, previousWords) => total + previousWords.length, 0);
                return (
                  <p key={descriptionSegments[segmentIndex]}>
                    {words.map((word, wordIndex) => {
                      const isRevealed = segmentStart + wordIndex < revealedWordCount;
                      return (
                        <React.Fragment key={`${word}-${wordIndex}`}>
                          <span
                            aria-hidden="true"
                            className={`transition-colors duration-300 ${isRevealed ? "text-slate-700" : "text-[#0342DD]/25"}`}
                          >
                            {word}
                          </span>{" "}
                        </React.Fragment>
                      );
                    })}
                  </p>
                );
              })}
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200">
            <h3 className="text-2xl sm:text-3xl 2xl:text-4xl font-medium tracking-tight text-[#131927] mb-8">
              What we build
            </h3>
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-900 mt-2 flex-shrink-0" />
                <div>
                  <h4 className="text-lg 2xl:text-xl font-medium text-slate-900">Multi-tenant SaaS Platforms</h4>
                  <p className="text-slate-700 text-sm sm:text-base 2xl:text-lg mt-1">
                    Secure product architecture with isolated workspaces, flexible roles, and shared infrastructure built to serve many customers.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-900 mt-2 flex-shrink-0" />
                <div>
                  <h4 className="text-lg 2xl:text-xl font-medium text-slate-900">Subscriptions &amp; Billing</h4>
                  <p className="text-slate-700 text-sm sm:text-base 2xl:text-lg mt-1">
                    Plans, recurring payments, invoices, and account management that support your SaaS pricing model.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-900 mt-2 flex-shrink-0" />
                <div>
                  <h4 className="text-lg 2xl:text-xl font-medium text-slate-900">Product Dashboards</h4>
                  <p className="text-slate-700 text-sm sm:text-base 2xl:text-lg mt-1">
                    Clear analytics and admin tools help customers understand their activity and teams manage the product.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-900 mt-2 flex-shrink-0" />
                <div>
                  <h4 className="text-lg 2xl:text-xl font-medium text-slate-900">Integrations &amp; Automation</h4>
                  <p className="text-slate-700 text-sm sm:text-base 2xl:text-lg mt-1">
                    APIs, notifications, and third-party connections reduce manual work and make your platform fit existing workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
