"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  ArrowUpRight,
  Send,
  Check,
} from "lucide-react";
import toast from "react-hot-toast";

const PROJECT_TYPE_OPTIONS = [
  "Website",
  "Mobile App",
  "Web App",
  "SaaS Platform",
  "Custom Software",
  "UI / UX Design",
  "E-Commerce",
  "Cloud & AI",
  "Other",
];

const SOCIAL_LINKS = [
  {
    id: "linkedin",
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/pixorasofttech",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 2xl:w-5 2xl:h-5" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    id: "instagram",
    name: "Instagram",
    href: "https://www.instagram.com/pixorasofttech/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 2xl:w-5 2xl:h-5" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    id: "facebook",
    name: "Facebook",
    href: "https://www.facebook.com/pixorasofttech",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 2xl:w-5 2xl:h-5" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    id: "x",
    name: "X",
    href: "https://twitter.com/pixorasofttech",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 2xl:w-5 2xl:h-5" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.258 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    projectType: [] as string[],
  });

  // Pre-fill email if redirected from footer (?email=...)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const emailParam = params.get("email");
    if (emailParam) {
      setFormData((prev) => ({ ...prev, email: emailParam }));
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxToggle = (type: string) => {
    setFormData((prev) => {
      const exists = prev.projectType.includes(type);
      return {
        ...prev,
        projectType: exists
          ? prev.projectType.filter((t) => t !== type)
          : [...prev.projectType, type],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const fd = new FormData(e.currentTarget);
    fd.set(
      "project_type",
      formData.projectType.length > 0
        ? formData.projectType.join(", ")
        : "Not specified"
    );

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      });
      const json = await res.json();

      if (json.success) {
        toast.success("Message sent! We'll be in touch within 24 hours.", {
          duration: 5000,
          style: {
            background: "#f0fdf4",
            color: "#166534",
            border: "1px solid #bbf7d0",
            borderRadius: "12px",
            fontSize: "14px",
          },
          iconTheme: { primary: "#16a34a", secondary: "#fff" },
        });
        setFormData({ name: "", email: "", message: "", projectType: [] });
        formRef.current?.reset();
      } else {
        toast.error("Failed to send. Please try again.", {
          duration: 5000,
          style: {
            background: "#fef2f2",
            color: "#991b1b",
            border: "1px solid #fecaca",
            borderRadius: "12px",
            fontSize: "14px",
          },
        });
      }
    } catch {
      toast.error("Network error. Please check your connection.", {
        duration: 5000,
        style: {
          background: "#fef2f2",
          color: "#991b1b",
          border: "1px solid #fecaca",
          borderRadius: "12px",
          fontSize: "14px",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen w-full bg-transparent font-sans text-black">
      {/* Main Content Container (Responsive up to 3000px) */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[3000px] flex-col justify-center px-5 pt-28 pb-16 sm:px-8 sm:pt-32 sm:pb-20 md:px-12 lg:px-16 xl:px-20 2xl:px-28 min-[2200px]:px-36">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:items-center lg:gap-12 xl:gap-16 2xl:gap-24">
          {/* LEFT SIDE: Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-between lg:col-span-6 2xl:col-span-6 lg:pr-6 lg:translate-y-28 xl:translate-y-32 2xl:translate-y-40 min-[2400px]:translate-y-48"
          >
            <div>
              {/* Big Display Title */}
              <h1 className="max-w-2xl 2xl:max-w-4xl text-4xl font-medium tracking-tight text-black leading-[1.06] sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-[5.25rem] min-[2400px]:text-[6rem]">
                We can turn your{" "}
                <span className="text-[#0A2540]">dream project</span> into
                reality
              </h1>

            </div>


          </motion.div>

          {/* RIGHT SIDE: Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl bg-[#0A2540] p-6 text-white sm:p-8 lg:col-span-6 lg:p-10 2xl:col-span-6 2xl:p-14"
          >
            <div className="min-w-0">

              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl 2xl:text-4xl">
                Let&apos;s talk!
              </h2>

              {/* Email, Phone & Socials Row */}
              <div className="mt-5 2xl:mt-7">
                <div className="mt-1.5 flex flex-wrap items-center gap-x-5 gap-y-1">
                  <a
                    href="mailto:pixorasofttech@gmail.com"
                    className="text-sm sm:text-base 2xl:text-lg font-semibold text-white hover:underline"
                  >
                    pixorasofttech@gmail.com
                  </a>
                  <span className="text-zinc-300 hidden sm:inline">•</span>
                  <a
                    href="tel:+923094307701"
                    className="text-sm sm:text-base 2xl:text-lg font-semibold text-white hover:opacity-70 transition-opacity"
                  >
                    +92 309 4307701
                  </a>
                  <a
                    href="https://wa.me/923094307701?text=Hello%2C%20I%27d%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-white hover:opacity-70 transition-opacity"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <span className="text-xs font-mono font-semibold uppercase tracking-widest text-white/60 2xl:text-sm">
                    OR
                  </span>
                  {SOCIAL_LINKS.map((link) => (
                    <a
                      key={link.id}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                      title={link.name}
                      className="flex h-9 w-9 2xl:h-11 2xl:w-11 items-center justify-center text-white/75 transition-colors hover:text-white"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>

              <hr className="my-6 border-white/20 2xl:my-8" />

              {/* Form */}
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 2xl:space-y-6">
                <input
                  type="hidden"
                  name="access_key"
                  value="c419eb68-9071-4baa-ba64-5482713e1c52"
                />
                <input
                  type="hidden"
                  name="from_name"
                  value="PixoraSofttech Contact Page"
                />
                <input
                  type="hidden"
                  name="subject"
                  value="New Contact Form Submission - PixoraSofttech"
                />

                <p className="text-sm font-medium text-white/70 2xl:text-base">
                  Leave us a brief message
                </p>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 2xl:gap-6">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold uppercase tracking-wider text-white/90 2xl:text-sm"
                    >
                      Your name <span className="text-white/80">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/25 bg-white px-4 py-3 text-sm text-zinc-950 placeholder:text-zinc-500 transition focus:border-white focus:outline-none focus:ring-2 focus:ring-white/30 2xl:px-5 2xl:py-4 2xl:text-base"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold uppercase tracking-wider text-white/90 2xl:text-sm"
                    >
                      Email <span className="text-white/80">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/25 bg-white px-4 py-3 text-sm text-zinc-950 placeholder:text-zinc-500 transition focus:border-white focus:outline-none focus:ring-2 focus:ring-white/30 2xl:px-5 2xl:py-4 2xl:text-base"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold uppercase tracking-wider text-white/90 2xl:text-sm"
                  >
                    Briefly describe your project idea{" "}
                    <span className="text-white/80">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Briefly describe your project idea, timeline, and goals..."
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-[100px] w-full resize-y rounded-lg border border-white/25 bg-white px-4 py-3 text-sm text-zinc-950 placeholder:text-zinc-500 transition focus:border-white focus:outline-none focus:ring-2 focus:ring-white/30 2xl:min-h-[130px] 2xl:px-5 2xl:py-4 2xl:text-base"
                  />
                </div>

                {/* Project Type Checkboxes ("I'm looking for...") */}
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/90 2xl:text-sm">
                    I&apos;m looking for...
                  </p>
                  <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 2xl:gap-3">
                    {PROJECT_TYPE_OPTIONS.map((option) => {
                      const checked = formData.projectType.includes(option);
                      return (
                        <button
                          key={option}
                          type="button"
                          role="checkbox"
                          aria-checked={checked}
                          onClick={() => handleCheckboxToggle(option)}
                          className={`flex items-center gap-2.5 px-1 py-2.5 2xl:px-2 2xl:py-3 text-left text-xs sm:text-sm 2xl:text-base font-medium transition-colors cursor-pointer ${
                            checked
                              ? "text-white"
                              : "text-white/80 hover:text-white"
                          }`}
                        >
                          <span
                            className={`flex h-4 w-4 2xl:h-5 2xl:w-5 shrink-0 items-center justify-center rounded border transition-colors ${
                              checked
                                ? "border-white bg-white text-[#0A2540]"
                                : "border-white/60 bg-transparent"
                            }`}
                          >
                            {checked && <Check className="h-3 w-3 2xl:h-3.5 2xl:w-3.5 stroke-[3]" />}
                          </span>
                          <span className="truncate">{option}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[#0A2540] transition-colors duration-200 hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-60 2xl:py-4.5 2xl:text-base cursor-pointer"
                >
                  {loading ? (
                    <>
                      <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8z"
                        />
                      </svg>
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send a message</span>
                      <Send className="h-4 w-4 2xl:h-5 2xl:w-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
