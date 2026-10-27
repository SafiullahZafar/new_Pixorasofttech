"use client";

import React, { useState } from "react";
import Link from "next/link";
import HalftoneWordmarkFooter from "@/components/HalftoneWordmarkFooter";

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */
const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#who-we-are" },
  { label: "Our Work", href: "/portfolio" },
  { label: "Services", href: "/#services" },
  { label: "Contact Us", href: "/contact" },
];

const serviceLinks = [
  { label: "Custom Software", href: "/services/custom-software-development" },
  { label: "Web Development", href: "/services/website-development" },
  { label: "UI / UX Design", href: "/services/ui-ux-design" },
  { label: "Mobile Apps", href: "/services/mobile-app-development" },
  { label: "Cloud Solutions", href: "/services/cloud-solutions" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/pixorasofttech",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/pixorasofttech/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/pixorasofttech",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

/* ─────────────────────────────────────────────────────────────
   STYLES (scoped to .pft- prefix)
───────────────────────────────────────────────────────────── */
const FOOTER_CSS = `
/* ── Root ───────────────────────────── */
.pft-wrap {
  position: relative;
  z-index: 10;
  background: #000;
  color: #fff;
  font-family: 'Outfit', 'Inter', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  overflow: hidden;
  isolation: isolate;
}

/* ── Main grid ──────────────────────── */
.pft-main {
  display: grid;
  grid-template-columns: 1.15fr 1fr 1fr 0.9fr;
  gap: clamp(24px, 4vw, 56px);
  max-width: 3000px;
  margin: 0 auto;
  padding: clamp(52px, 6vw, 96px) clamp(24px, 5vw, 80px) clamp(40px, 5vw, 72px);
  align-items: start;
}

/* ── CTA / newsletter col ────────────── */
.pft-cta-heading {
  font-size: clamp(28px, 3.5vw, 52px);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0 0 clamp(24px, 3vw, 40px);
  color: #fff;
}

.pft-email-form {
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid rgba(255,255,255,0.2);
  padding-bottom: 10px;
  max-width: 380px;
  transition: border-color 0.3s ease;
}
.pft-email-form:focus-within {
  border-color: rgba(255,255,255,0.6);
}
.pft-email-input {
  flex: 1;
  background: none;
  border: none;
  outline: none;
  color: rgba(255,255,255,0.55);
  font-family: inherit;
  font-size: clamp(13px, 1.1vw, 15px);
  letter-spacing: 0.01em;
  padding: 4px 0;
  caret-color: #fff;
}
.pft-email-input::placeholder { color: rgba(255,255,255,0.38); }
.pft-submit-btn {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border: none;
  border-radius: 8px;
  background: #fff;
  color: #000;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.22s cubic-bezier(.2,.8,.2,1), background 0.22s ease;
}
.pft-submit-btn:hover {
  transform: scale(1.08) rotate(12deg);
  background: #e0e0e0;
}
.pft-submit-btn svg { width: 18px; height: 18px; }

/* ── Nav columns ─────────────────────── */
.pft-col-title {
  font-size: clamp(10px, 0.85vw, 12px);
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #fff;
  margin: 0 0 clamp(16px, 2vw, 28px);
  opacity: 0.55;
}
.pft-col-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: clamp(10px, 1.2vw, 18px);
}
.pft-col-list a {
  color: rgba(255,255,255,0.65);
  text-decoration: none;
  font-size: clamp(14px, 1.15vw, 17px);
  font-weight: 400;
  display: inline-block;
  position: relative;
  transition: color 0.2s ease;
}
.pft-col-list a::after {
  content: '';
  position: absolute;
  left: 0; bottom: -2px;
  width: 0; height: 1px;
  background: #fff;
  transition: width 0.3s cubic-bezier(.2,.7,.1,1);
}
.pft-col-list a:hover { color: #fff; }
.pft-col-list a:hover::after { width: 100%; }

/* ── Social icons (Quick Links) ─────── */
.pft-social-row {
  display: flex;
  gap: clamp(14px, 1.6vw, 22px);
  flex-wrap: wrap;
  margin-top: 4px;
}
.pft-social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(38px, 3vw, 48px);
  height: clamp(38px, 3vw, 48px);
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.18);
  color: rgba(255,255,255,0.65);
  text-decoration: none;
  transition: background 0.22s ease, border-color 0.22s ease, color 0.22s ease, transform 0.22s cubic-bezier(.2,.8,.2,1);
}
.pft-social-link svg {
  width: clamp(16px, 1.3vw, 20px);
  height: clamp(16px, 1.3vw, 20px);
}
.pft-social-link:hover {
  background: rgba(255,255,255,0.12);
  border-color: rgba(255,255,255,0.45);
  color: #fff;
  transform: translateY(-3px);
}

/* ── Contact strip ───────────────────── */
.pft-contact-strip {
  max-width: 3000px;
  margin: 0 auto;
  padding: clamp(20px, 2.5vw, 36px) clamp(24px, 5vw, 80px);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
  position: relative;
}
.pft-contact-strip::before {
  content: '';
  position: absolute;
  top: 0;
  left: clamp(24px, 5vw, 80px);
  right: clamp(24px, 5vw, 80px);
  height: 1px;
  background: rgba(255,255,255,0.1);
}
.pft-contact-group {}
.pft-contact-label {
  font-size: clamp(9px, 0.75vw, 11px);
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.4);
  margin: 0 0 6px;
}
.pft-contact-value {
  font-size: clamp(14px, 1.2vw, 18px);
  font-weight: 500;
  color: #fff;
  text-decoration: none;
  transition: opacity 0.2s ease;
}
.pft-contact-value:hover { opacity: 0.75; }

/* ── Bottom rule bar ─────────────────── */
.pft-rule-bar {
  max-width: 3000px;
  margin: 0 auto;
  padding: clamp(12px, 1.4vw, 20px) clamp(24px, 5vw, 80px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
.pft-rule-bar::before {
  content: '';
  position: absolute;
  top: 0;
  left: clamp(24px, 5vw, 80px);
  right: clamp(24px, 5vw, 80px);
  height: 1px;
  background: rgba(255,255,255,0.1);
}
.pft-copy {
  font-size: clamp(10px, 0.85vw, 12px);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.35);
  margin: 0;
}
.pft-back-top {
  display: flex;
  align-items: center;
  gap: 10px;
  background: none;
  border: none;
  color: rgba(255,255,255,0.7);
  font-family: inherit;
  font-size: clamp(11px, 0.9vw, 13px);
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  cursor: pointer;
  padding: 0;
  transition: color 0.2s ease;
}
.pft-back-top:hover { color: #fff; }
.pft-back-top:hover .pft-arrow-circle { transform: translateY(-3px); }
.pft-arrow-circle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.35);
  transition: transform 0.25s cubic-bezier(.2,.8,.2,1), border-color 0.2s ease;
}
.pft-back-top:hover .pft-arrow-circle { border-color: rgba(255,255,255,0.7); }
.pft-arrow-circle svg { width: 16px; height: 16px; }

/* ── Wordmark section ────────────────── */
.pft-wordmark-wrap {
  /* No extra wrapper needed, HalftoneWordmarkFooter is self-contained */
}

/* ── Responsive ───────────────────────── */
@media (max-width: 960px) {
  .pft-main {
    grid-template-columns: 1fr 1fr;
    row-gap: clamp(32px, 5vw, 52px);
  }
  .pft-cta-col { grid-column: 1 / -1; }
}

@media (max-width: 580px) {
  .pft-main {
    grid-template-columns: 1fr 1fr;
    row-gap: 28px;
  }
  .pft-cta-col { grid-column: 1 / -1; }
  .pft-quick-col { grid-column: 1 / -1; }
  .pft-contact-strip {
    flex-direction: column;
    gap: 20px;
  }
  .pft-rule-bar { flex-direction: column-reverse; align-items: flex-start; gap: 12px; }
}

@media (min-width: 1800px) {
  .pft-cta-heading { font-size: 58px; }
  .pft-col-list a { font-size: 18px; }
  .pft-col-title { font-size: 13px; }
}

@media (min-width: 2400px) {
  .pft-main { padding: 110px 120px 88px; }
  .pft-contact-strip { padding: 44px 120px; }
  .pft-rule-bar { padding: 26px 120px; }
  .pft-cta-heading { font-size: 68px; }
  .pft-col-list a { font-size: 22px; }
  .pft-col-title { font-size: 15px; }
  .pft-contact-value { font-size: 22px; }
  .pft-copy { font-size: 14px; }
}

@media (min-width: 3000px) {
  .pft-main { padding: 130px 160px 100px; }
  .pft-contact-strip { padding: 52px 160px; }
  .pft-rule-bar { padding: 32px 160px; }
  .pft-cta-heading { font-size: 80px; }
  .pft-col-list a { font-size: 26px; }
  .pft-social-link { width: 60px; height: 60px; }
  .pft-social-link svg { width: 26px; height: 26px; }
  .pft-submit-btn { width: 56px; height: 56px; }
  .pft-submit-btn svg { width: 24px; height: 24px; }
}
`;

/* ─────────────────────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────────────────────── */
export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      window.location.href = `/contact?email=${encodeURIComponent(email)}`;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="pft-wrap">
      <style>{FOOTER_CSS}</style>

      {/* ── Main grid ── */}
      <div className="pft-main">
        {/* CTA + Newsletter */}
        <div className="pft-cta-col">
          <h2 className="pft-cta-heading">
            Have a project?{"\n"}Let&rsquo;s start.
          </h2>
          <form className="pft-email-form" onSubmit={handleSubmit}>
            <input
              className="pft-email-input"
              type="email"
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address"
            />
            <button
              type="submit"
              className="pft-submit-btn"
              aria-label="Send email"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </button>
          </form>
        </div>

        {/* Explore */}
        <div>
          <p className="pft-col-title">Explore</p>
          <ul className="pft-col-list">
            {exploreLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <p className="pft-col-title">Services</p>
          <ul className="pft-col-list">
            {serviceLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links / Social */}
        <div className="pft-quick-col">
          <p className="pft-col-title">Quick Links</p>
          <div className="pft-social-row">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="pft-social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Contact strip ── */}
      <div className="pft-contact-strip">
        <div className="pft-contact-group">
          <p className="pft-contact-label">Give Us a Call</p>
          <a href="tel:+923094307701" className="pft-contact-value">
            +92 309 4307701
          </a>
        </div>
        <div className="pft-contact-group" style={{ textAlign: "right" }}>
          <p className="pft-contact-label">Our Location</p>
          <a
            href="https://maps.google.com/?q=Faisalabad,Pakistan"
            target="_blank"
            rel="noopener noreferrer"
            className="pft-contact-value"
          >
            Faisalabad, Pakistan
          </a>
        </div>
      </div>

      {/* ── Bottom rule bar ── */}
      <div className="pft-rule-bar">
        <p className="pft-copy">© 2026 PixoraSoftTech · All rights reserved</p>
        <button
          type="button"
          className="pft-back-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          Back To Top
          <span className="pft-arrow-circle">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </span>
        </button>
      </div>

      {/* ── Animated wordmark ── */}
      <style>{`.hwf-brand, .hwf-rule { display: none !important; } .hwf-top { display: none !important; }`}</style>
      <div style={{ padding: "0 clamp(24px, 5vw, 80px)" }}>
        <HalftoneWordmarkFooter
          wordmark="PIXORASOFTTECH"
          label=""
          meta=""
          columns={[]}
          backToTop={false}
          preset="night"
          palette={{ background: "#000000", ink: "#f4f4f5", warm: "#0342DD" }}
          dotGap={5}
          radius={84}
          crop={0.2}
          grain={0.22}
          height="clamp(80px, 11vw, 160px)"
          fontFamily="Outfit, Arial, sans-serif"
          className="font-sans"
        />
      </div>
    </div>
  );
}
