"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CircleArrowUp, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full select-none bg-black text-[#A1A1A1] pt-16 md:pt-28 lg:pt-32 px-4 md:px-8 overflow-x-hidden font-sans">
      <div className="max-w-[2400px] mx-auto">
        <div className="bg-[#000] rounded-3xl md:rounded-[40px] py-8 md:py-12 px-6 md:px-10 -mt-10 md:-mt-24 shadow-2xl border border-white/5">
          <div className="flex flex-col md:min-h-[500px]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
              {/* Left Column: Have a project? Let's start. */}
              <div className="md:col-span-4 flex flex-col items-start">
                <h2 className="text-4xl md:text-[42px] font-medium leading-tight text-white mb-1">
                  Have a project?
                </h2>
                <h2 className="text-4xl md:text-[42px] font-bold leading-tight text-white mb-8">
                  Let&apos;s start.
                </h2>
                <div className="w-32 md:w-56 h-[2px] bg-[#23261D] mb-8"></div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (email) {
                      window.location.href = `/contact?email=${encodeURIComponent(email)}`;
                    }
                  }}
                  className="w-full max-w-md relative"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email..."
                    className="w-full bg-transparent border-b border-[#23261D] focus:border-white pb-4 text-white placeholder:text-[#666] focus:outline-none text-base sm:text-lg transition-colors pr-12"
                  />
                  <button
                    type="submit"
                    aria-label="Go to Contact page"
                    className="absolute right-0 bottom-2 w-10 h-9 rounded-[5px] bg-white hover:bg-[#E2E8F0] flex items-center justify-center shadow-xl transition-all cursor-pointer group"
                  >
                    <ArrowUpRight className="w-5 h-5 text-black group-hover:scale-110 transition-transform" />
                  </button>
                </form>
              </div>

              {/* Right Column: Explore, Services, Quick Links */}
              <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-x-6 md:gap-x-10 gap-y-12 md:gap-y-12">
                {/* Explore */}
                <div className="flex flex-col items-start">
                  <h3 className="text-lg md:text-2xl font-semibold uppercase text-white mb-5 sm:mb-6 tracking-wider">
                    Explore
                  </h3>
                  <ul className="space-y-3 text-sm md:text-lg text-[#A1A1A1]">
                    <li>
                      <Link className="hover:text-white transition-colors" href="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-white transition-colors" href="#who-we-are">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-white transition-colors" href="/portfolio">
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-white transition-colors" href="#tech-leverage">
                        Team
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-white transition-colors" href="/portfolio">
                        Case Studies
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-white transition-colors" href="/contact">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Services */}
                <div className="flex flex-col items-start">
                  <h3 className="text-lg md:text-2xl font-semibold uppercase text-white mb-5 sm:mb-6 tracking-wider">
                    Services
                  </h3>
                  <ul className="space-y-3 text-sm md:text-lg text-[#A1A1A1]">
                    <li>
                      <Link className="hover:text-white transition-colors" href="/services/custom-software-development">
                        Custom Software
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-white transition-colors" href="/services/website-development">
                        Web Development
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-white transition-colors" href="/services/ui-ux-design">
                        UI / UX Design
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-white transition-colors" href="/services/mobile-app-development">
                        Mobile Apps
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-white transition-colors" href="/services/custom-software-development">
                        SaaS Development
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-white transition-colors" href="/services/cloud-solutions">
                        Cloud Solutions
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Quick Links / Socials */}
                <div className="col-span-2 md:col-span-1 flex flex-col items-start">
                  <h3 className="text-lg md:text-2xl font-semibold uppercase text-white mb-5 sm:mb-6 tracking-wider">
                    Quick Links
                  </h3>
                  <div className="flex gap-5 items-center text-[#A1A1A1]">
                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/company/pixorasofttech"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit PixoraSoftTech on LinkedIn"
                      className="hover:text-white hover:scale-110 transition-all"
                    >
                      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z" />
                      </svg>
                    </a>
                    {/* Instagram */}
                    <a
                      href="https://www.instagram.com/pixorasofttech/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit PixoraSoftTech on Instagram"
                      className="hover:text-white hover:scale-110 transition-all"
                    >
                      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    {/* GitHub */}
                    <a
                      href="https://github.com/pixorasofttech"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit PixoraSoftTech on GitHub"
                      className="hover:text-white hover:scale-110 transition-all"
                    >
                      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Call Us & Location */}
            <div className="mt-16 flex flex-col md:flex-row justify-between gap-10">
              <div>
                <h4 className="uppercase text-lg md:text-xl font-medium tracking-widest text-white">
                  Give Us A Call
                </h4>
                <a
                  href="tel:+923094307701"
                  className="text-[#A1A1A1] text-base md:text-lg mt-2 hover:text-white transition-colors block"
                >
                  +92 309 4307701
                </a>
              </div>
              <div className="md:text-right select-none">
                <h4 className="uppercase text-lg md:text-xl font-medium tracking-widest text-white">
                  Our Location
                </h4>
                <p className="text-[#A1A1A1] text-base md:text-lg leading-tight max-w-full md:max-w-[260px] mt-2 block">
                  113 Mall, Faisalabad, Pakistan
                </p>
              </div>
            </div>

            <div className="h-px bg-[#23261D] mt-14 md:mt-16"></div>

            {/* Back to top */}
            <div className="flex justify-end mt-10">
              <button
                onClick={scrollToTop}
                className="flex items-center gap-3 text-lg md:text-2xl font-light text-[#A1A1A1] hover:text-white transition-all group cursor-pointer"
              >
                <span>Back To Top</span>
                <CircleArrowUp className="w-7 h-7 md:w-8 md:h-8 text-white group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Watermark Typographic Brand Graphic at Bottom */}
        <div className="flex justify-center mt-8 md:mt-10 pb-8 select-none opacity-40 hover:opacity-70 transition-opacity">
          <div className="text-center font-extrabold tracking-[-0.05em] text-[40px] sm:text-[70px] md:text-[110px] lg:text-[140px] text-zinc-800 leading-none select-none">
            PIXORASOFTTECH
          </div>
        </div>
      </div>
    </footer>
  );
}
