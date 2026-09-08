"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Search,
  Building2,
  Mail,
  ExternalLink,
  Calendar,
  Lock,
  FileText,
  CheckCircle2,
  Copy,
  ChevronRight,
  Database,
  Globe,
  Trash2,
  KeyRound,
  Layers,
  Bot,
  UserCheck,
  AlertTriangle,
  Send,
  ArrowUpRight,
  Shield,
  XCircle,
} from "lucide-react";
import toast from "react-hot-toast";

const sections = [
  { id: "sec-1",  title: "1. Company & Contact Information",      icon: Building2   },
  { id: "sec-2",  title: "2. Scope of This Policy",               icon: Layers      },
  { id: "sec-3",  title: "3. Information We Collect",             icon: Database    },
  { id: "sec-4",  title: "4. Sources of Information",             icon: Globe       },
  { id: "sec-5",  title: "5. Purposes of Processing",             icon: FileText    },
  { id: "sec-6",  title: "6. Legal Bases for Processing",         icon: ShieldCheck },
  { id: "sec-7",  title: "7. AI-Assisted Content",                icon: Bot         },
  { id: "sec-8",  title: "8. LinkedIn API Use",                   icon: KeyRound    },
  { id: "sec-9",  title: "9. Sharing & Service Providers",        icon: Globe       },
  { id: "sec-10", title: "10. International Data Transfers",      icon: Globe       },
  { id: "sec-11", title: "11. Data Retention",                    icon: Calendar    },
  { id: "sec-12", title: "12. Security Safeguards",               icon: Lock        },
  { id: "sec-13", title: "13. Your Rights",                       icon: UserCheck   },
  { id: "sec-14", title: "14. California & US Privacy Rights",    icon: ShieldCheck },
  { id: "sec-15", title: "15. Revoking LinkedIn Access",          icon: KeyRound    },
  { id: "sec-16", title: "16. Data Deletion",                     icon: Trash2      },
  { id: "sec-17", title: "17. Cookies & Tracking",                icon: FileText    },
  { id: "sec-18", title: "18. Children's Privacy",                icon: AlertTriangle },
  { id: "sec-19", title: "19. Third-Party Websites",              icon: ExternalLink },
  { id: "sec-20", title: "20. Business Transfers",                icon: Building2   },
  { id: "sec-21", title: "21. Changes to This Policy",            icon: Calendar    },
  { id: "sec-22", title: "22. Contact Us",                        icon: Mail        },
];

/* ── Reusable section header ── */
function SectionHeader({
  icon: Icon,
  title,
  sub,
  iconColor = "text-blue-600",
  iconBg   = "bg-blue-50",
  iconBorder = "border-blue-100",
}: {
  icon: React.ElementType;
  title: string;
  sub?: string;
  iconColor?: string;
  iconBg?: string;
  iconBorder?: string;
}) {
  return (
    <div className="flex items-start gap-4 mb-6 pb-5 border-b border-slate-100">
      <div className={`w-10 h-10 rounded-xl ${iconBg} border ${iconBorder} flex items-center justify-center shrink-0`}>
        <Icon className={`w-5 h-5 ${iconColor}`} />
      </div>
      <div>
        <h2 className="text-lg font-bold text-slate-900 leading-snug">{title}</h2>
        {sub && <p className="text-xs text-slate-500 mt-0.5">{sub}</p>}
      </div>
    </div>
  );
}

/* ── Simple bullet list item ── */
function BulletItem({ children, dotColor = "text-blue-500" }: { children: React.ReactNode; dotColor?: string }) {
  return (
    <li className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
      <CheckCircle2 className={`w-4 h-4 ${dotColor} shrink-0 mt-0.5`} />
      <span>{children}</span>
    </li>
  );
}

/* ── Highlighted note box ── */
function NoteBox({ children, className = "bg-blue-50 border-blue-100 text-blue-800" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`p-4 rounded-xl border text-sm leading-relaxed ${className}`}>
      {children}
    </div>
  );
}

/* ── Contact row with copy ── */
function ContactRow({
  label,
  value,
  href,
  isEmail = false,
}: {
  label: string;
  value: string;
  href?: string;
  isEmail?: boolean;
}) {
  const copy = () => {
    navigator.clipboard.writeText(value);
    toast.success(`${label} copied!`);
  };
  return (
    <div className="flex flex-wrap items-center justify-between gap-2 py-2.5 border-b border-slate-100 last:border-0">
      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide w-32 shrink-0">{label}</span>
      <div className="flex items-center gap-2 flex-1 justify-end">
        {href ? (
          <a
            href={href}
            target={isEmail ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:underline font-medium"
          >
            {value}
          </a>
        ) : (
          <span className="text-sm text-slate-800">{value}</span>
        )}
        <button onClick={copy} className="text-slate-400 hover:text-slate-600 transition p-0.5">
          <Copy className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

export default function PrivacyPolicyView() {
  const [activeSection, setActiveSection] = useState("sec-1");
  const [searchQuery,   setSearchQuery]   = useState("");
  const [tocOpen,       setTocOpen]       = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 200;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && y >= el.offsetTop && y < el.offsetTop + el.offsetHeight) {
          setActiveSection(s.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setTocOpen(false);
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 90, behavior: "smooth" });
    }
  };

  const filtered = sections.filter(
    (s) => !searchQuery || s.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen pt-24 pb-24">

      {/* ── HERO ── */}
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-2 mb-3">
            <Shield className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">
              PIXORASOFTTECH (SMC-PRIVATE) LIMITED
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-slate-600 text-base max-w-3xl leading-relaxed mb-8">
            PIXORASOFTTECH (SMC-PRIVATE) LIMITED ("Pixra Softtech," "we," "us," or "our") respects your privacy and is committed to handling personal information responsibly, transparently and securely.
          </p>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-lg">
              <Calendar className="w-4 h-4 text-slate-400" />
              <span className="text-sm text-slate-600">Effective Date: <span className="font-semibold text-slate-900">8 September 2026</span></span>
            </div>
            <div className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-lg">
              <FileText className="w-4 h-4 text-slate-400" />
              <span className="text-sm text-slate-600">Last Updated: <span className="font-semibold text-slate-900">8 September 2026</span></span>
            </div>
          </div>
        </div>
      </div>

      {/* ── QUICK HIGHLIGHTS ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {[
            { title: "No Data Selling",      desc: "We never sell or rent your personal information to any third parties.",          icon: ShieldCheck,    iconColor: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
            { title: "OAuth Authentication", desc: "We never store your passwords for LinkedIn, Meta or Google accounts.",           icon: KeyRound,       iconColor: "text-blue-600",    bg: "bg-blue-50",    border: "border-blue-100"   },
            { title: "Human AI Oversight",   desc: "AI-generated content is subject to human review before any publication.",       icon: Bot,            iconColor: "text-indigo-600",  bg: "bg-indigo-50",  border: "border-indigo-100" },
            { title: "Deletion Rights",      desc: "You can request full data and integration deletion at any time.",               icon: Trash2,         iconColor: "text-rose-600",    bg: "bg-rose-50",    border: "border-rose-100"   },
          ].map((c, i) => (
            <div key={i} className={`p-5 rounded-xl border ${c.border} ${c.bg}`}>
              <c.icon className={`w-5 h-5 ${c.iconColor} mb-3`} />
              <h3 className="text-sm font-semibold text-slate-900 mb-1">{c.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── LAYOUT ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* ── SIDEBAR TOC (desktop) ── */}
          <aside className="hidden lg:flex lg:col-span-4 sticky top-28 flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm max-h-[calc(100vh-140px)]">
            <div className="p-4 border-b border-slate-100">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search sections..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-4 py-2 text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-blue-400 transition"
                />
              </div>
            </div>
            <nav className="overflow-y-auto p-2 flex-1 space-y-0.5">
              {filtered.map((s) => {
                const Icon = s.icon;
                const active = activeSection === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all flex items-center gap-2.5 ${
                      active
                        ? "bg-blue-600 text-white font-semibold"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 shrink-0 ${active ? "text-white" : "text-slate-400"}`} />
                    <span className="truncate">{s.title}</span>
                  </button>
                );
              })}
            </nav>
            <div className="p-3 border-t border-slate-100 bg-slate-50">
              <p className="text-xs text-slate-500">{sections.length} sections &bull; Effective 8 Sep 2026</p>
            </div>
          </aside>

          {/* ── MOBILE TOC ── */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setTocOpen(!tocOpen)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold text-slate-700"
            >
              <span className="flex items-center gap-2"><FileText className="w-4 h-4 text-blue-600" />Table of Contents</span>
              <ChevronRight className={`w-4 h-4 transition-transform ${tocOpen ? "rotate-90" : ""}`} />
            </button>
            {tocOpen && (
              <div className="mt-1 border border-slate-200 rounded-xl overflow-hidden bg-white divide-y divide-slate-100 max-h-72 overflow-y-auto">
                {sections.map((s) => {
                  const Icon = s.icon;
                  return (
                    <button
                      key={s.id}
                      onClick={() => scrollTo(s.id)}
                      className={`w-full flex items-center gap-2.5 px-4 py-3 text-xs text-left transition ${
                        activeSection === s.id ? "bg-blue-50 text-blue-700 font-semibold" : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 shrink-0 text-slate-400" />{s.title}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* ── POLICY SECTIONS ── */}
          <main className="lg:col-span-8 space-y-5">

            {/* 1. Company & Contact */}
            <section id="sec-1" className="border border-slate-200 rounded-2xl p-6 sm:p-8 scroll-mt-28 bg-white">
              <SectionHeader icon={Building2} title="1. Company and Contact Information" sub="Legal entity, registered office and direct contacts" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-sm">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="text-xs text-slate-500 font-semibold mb-1 uppercase tracking-wide">Legal Name</p>
                  <p className="text-slate-900 font-semibold">PIXORASOFTTECH (SMC-PRIVATE) LIMITED</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="text-xs text-slate-500 font-semibold mb-1 uppercase tracking-wide">Trading Name</p>
                  <p className="text-slate-900 font-semibold">Pixra Softtech</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 sm:col-span-2">
                  <p className="text-xs text-slate-500 font-semibold mb-1 uppercase tracking-wide">Registered Office</p>
                  <p className="text-slate-700">Khurrianwala, Balail Town, Faisalabad, Jaranwala, Punjab, Pakistan</p>
                </div>
              </div>

              <div className="border border-slate-200 rounded-xl divide-y divide-slate-100 mb-6">
                <ContactRow label="Website"           value="https://pixorasofttech.com"    href="https://pixorasofttech.com"              />
                <ContactRow label="Privacy Email"     value="privacy@pixorasofttech.com"    href="mailto:privacy@pixorasofttech.com"    isEmail />
                <ContactRow label="Support Email"     value="support@pixorasofttech.com"    href="mailto:support@pixorasofttech.com"    isEmail />
                <ContactRow label="Developer"         value="developer@pixorasofttech.com"  href="mailto:developer@pixorasofttech.com"  isEmail />
                <ContactRow label="LinkedIn"          value="linkedin.com/company/115831290" href="https://www.linkedin.com/company/115831290/" />
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                For applicable data-protection laws, Pixra Softtech acts as the <span className="font-semibold text-slate-900">controller</span> of personal information collected directly through its website and services. Where we process information solely on documented instructions from a business customer, we may act as a processor or service provider.
              </p>
            </section>

            {/* 2. Scope */}
            <section id="sec-2" className="border border-slate-200 rounded-2xl p-6 sm:p-8 scroll-mt-28 bg-white">
              <SectionHeader icon={Layers} title="2. Scope of This Policy" sub="What this policy covers and what it does not" iconColor="text-indigo-600" iconBg="bg-indigo-50" iconBorder="border-indigo-100" />
              <p className="text-sm text-slate-700 mb-4">This Policy applies to:</p>
              <ul className="space-y-2 mb-5">
                {[
                  "The Pixra Softtech website;",
                  "Pixra Social Automation;",
                  "Content-generation, approval, scheduling and publishing workflows;",
                  "Integrations with LinkedIn, Meta/Facebook, Google and authorized third-party services;",
                  "Contact forms, support requests and business communications;",
                  "Administrative dashboards and internal publishing tools.",
                ].map((item, i) => <BulletItem key={i} dotColor="text-indigo-500">{item}</BulletItem>)}
              </ul>
              <NoteBox className="bg-amber-50 border-amber-100 text-amber-800">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>This Policy does not replace the privacy policies of LinkedIn, Meta, Google or other independent third parties.</span>
                </div>
              </NoteBox>
            </section>

            {/* 3. Information We Collect */}
            <section id="sec-3" className="border border-slate-200 rounded-2xl p-6 sm:p-8 scroll-mt-28 bg-white">
              <SectionHeader icon={Database} title="3. Information We Collect" sub="Categories of personal data we may process" iconColor="text-sky-600" iconBg="bg-sky-50" iconBorder="border-sky-100" />

              {/* 3.1 */}
              <div className="mb-5">
                <h3 className="text-sm font-semibold text-slate-900 mb-2">3.1 Information Provided Directly</h3>
                <p className="text-sm text-slate-700 mb-3">We may collect:</p>
                <ul className="space-y-1.5">
                  {[
                    "Name and business name;",
                    "Business or personal email address;",
                    "Telephone number when voluntarily provided;",
                    "Account and organization information;",
                    "Support inquiries and correspondence;",
                    "Content instructions, publishing preferences and approval decisions;",
                    "Information submitted through website forms.",
                  ].map((it, i) => <BulletItem key={i}>{it}</BulletItem>)}
                </ul>
              </div>

              <div className="border-t border-slate-100 pt-5 mb-5">
                <h3 className="text-sm font-semibold text-slate-900 mb-2">3.2 LinkedIn Information</h3>
                <p className="text-sm text-slate-700 mb-3">
                  When an authorized individual connects LinkedIn to Pixra Social Automation, LinkedIn may provide information according to the permissions approved by that individual, including:
                </p>
                <ul className="space-y-1.5 mb-4">
                  {[
                    "LinkedIn member identifier;",
                    "Basic authenticated profile information;",
                    "Organization or Company Page identifier;",
                    "Organization name and Page information;",
                    "Page administrator role or authorization status;",
                    "OAuth access and refresh tokens where provided;",
                    "Content submitted for publication;",
                    "LinkedIn post identifiers and publication status;",
                    "API errors and technical responses.",
                  ].map((it, i) => <BulletItem key={i} dotColor="text-sky-500">{it}</BulletItem>)}
                </ul>
                <NoteBox className="bg-blue-50 border-blue-100 text-blue-800">
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>We request only permissions necessary to provide the selected functionality. We do not request, receive or store LinkedIn passwords. Authentication occurs directly through LinkedIn's OAuth authorization process.</span>
                  </div>
                </NoteBox>
              </div>

              <div className="border-t border-slate-100 pt-5 mb-5">
                <h3 className="text-sm font-semibold text-slate-900 mb-2">3.3 Social-Media Publishing Information</h3>
                <p className="text-sm text-slate-700 mb-3">Depending on the connected service, we may process:</p>
                <ul className="space-y-1.5">
                  {[
                    "Draft and approved post text;",
                    "Article titles, summaries and source URLs;",
                    "Publication dates and schedules;",
                    "Approval and rejection status;",
                    "Platform and Company Page identifiers;",
                    "Published post identifiers;",
                    "Publishing status and error details.",
                  ].map((it, i) => <BulletItem key={i} dotColor="text-indigo-500">{it}</BulletItem>)}
                </ul>
              </div>

              <div className="border-t border-slate-100 pt-5 mb-5">
                <h3 className="text-sm font-semibold text-slate-900 mb-2">3.4 AI and Automation Information</h3>
                <p className="text-sm text-slate-700 mb-3">Our automation workflows may process:</p>
                <ul className="space-y-1.5">
                  {[
                    "Information from approved RSS feeds or public sources;",
                    "Prompts and content-generation instructions;",
                    "AI-generated draft content;",
                    "Manual edits and approvals;",
                    "Workflow timestamps and execution results;",
                    "Duplicate-prevention values;",
                    "Technical error and diagnostic information.",
                  ].map((it, i) => <BulletItem key={i} dotColor="text-purple-500">{it}</BulletItem>)}
                </ul>
              </div>

              <div className="border-t border-slate-100 pt-5">
                <h3 className="text-sm font-semibold text-slate-900 mb-2">3.5 Website and Device Information</h3>
                <p className="text-sm text-slate-700 mb-3">When a visitor accesses our website, we or our infrastructure providers may process:</p>
                <ul className="space-y-1.5">
                  {[
                    "IP address;",
                    "Browser and device type;",
                    "Operating system;",
                    "Referring and requested URLs;",
                    "Access date and time;",
                    "Security, performance and diagnostic logs;",
                    "Essential cookie or session information.",
                  ].map((it, i) => <BulletItem key={i} dotColor="text-emerald-500">{it}</BulletItem>)}
                </ul>
              </div>
            </section>

            {/* 4. Sources */}
            <section id="sec-4" className="border border-slate-200 rounded-2xl p-6 sm:p-8 scroll-mt-28 bg-white">
              <SectionHeader icon={Globe} title="4. Sources of Information" sub="How data enters our systems" iconColor="text-teal-600" iconBg="bg-teal-50" iconBorder="border-teal-100" />
              <p className="text-sm text-slate-700 mb-4">Information may be obtained:</p>
              <ul className="space-y-1.5 mb-5">
                {[
                  "Directly from users or business customers;",
                  "Through an authorized LinkedIn, Meta or Google connection;",
                  "From approved public RSS feeds and websites;",
                  "From our website and technical infrastructure;",
                  "From service providers operating on our behalf.",
                ].map((it, i) => <BulletItem key={i} dotColor="text-teal-500">{it}</BulletItem>)}
              </ul>
              <NoteBox className="bg-emerald-50 border-emerald-100 text-emerald-800">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>We do not use unauthorized scraping to collect LinkedIn information.</span>
                </div>
              </NoteBox>
            </section>

            {/* 5. Purposes */}
            <section id="sec-5" className="border border-slate-200 rounded-2xl p-6 sm:p-8 scroll-mt-28 bg-white">
              <SectionHeader icon={FileText} title="5. Purposes of Processing" sub="Why we use personal data" />
              <p className="text-sm text-slate-700 mb-4">We process information to:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-5">
                {[
                  "Authenticate authorized users;",
                  "Connect authorized accounts and Company Pages;",
                  "Confirm Page-management permissions;",
                  "Generate social-media drafts using approved source material;",
                  "Allow drafts to be reviewed, approved or rejected;",
                  "Publish approved content to selected platforms;",
                  "Prevent duplicate processing and publication;",
                  "Maintain publishing history and status;",
                  "Diagnose failed publishing attempts;",
                  "Secure and maintain our website and software;",
                  "Provide customer support;",
                  "Prevent spam, fraud, misuse and unauthorized access;",
                  "Meet legal, regulatory and platform requirements;",
                  "Improve our workflows using operational information.",
                ].map((it, i) => <BulletItem key={i}>{it}</BulletItem>)}
              </ul>
              <NoteBox className="bg-slate-100 border-slate-200 text-slate-700">
                We do not use LinkedIn information for credit, insurance, housing, employment eligibility or other high-impact decisions.
              </NoteBox>
            </section>

            {/* 6. Legal Bases */}
            <section id="sec-6" className="border border-slate-200 rounded-2xl p-6 sm:p-8 scroll-mt-28 bg-white">
              <SectionHeader icon={ShieldCheck} title="6. Legal Bases for Processing" sub="GDPR and UK GDPR compliance" iconColor="text-purple-600" iconBg="bg-purple-50" iconBorder="border-purple-100" />
              <p className="text-sm text-slate-700 mb-4">Where laws such as the GDPR or UK GDPR apply, we rely on one or more of the following legal bases:</p>
              <div className="space-y-2 mb-4">
                {[
                  { basis: "Consent",              desc: "When an individual authorizes a connection or optional processing." },
                  { basis: "Contract",             desc: "When processing is necessary to provide a requested service." },
                  { basis: "Legitimate Interests", desc: "To operate, secure and improve our Services, provided those interests do not override individual rights." },
                  { basis: "Legal Obligation",     desc: "When processing is required by applicable law." },
                  { basis: "Protection of Rights", desc: "When necessary to establish, exercise or defend legal claims." },
                ].map((base, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-slate-700 leading-relaxed py-1">
                    <span className="font-semibold text-slate-900 shrink-0 min-w-[160px]">{base.basis}:</span>
                    <span>{base.desc}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Users may withdraw consent by disconnecting an integration or contacting us. Withdrawal does not affect processing completed before withdrawal.
              </p>
            </section>

            {/* 7. AI Content */}
            <section id="sec-7" className="border border-slate-200 rounded-2xl p-6 sm:p-8 scroll-mt-28 bg-white">
              <SectionHeader icon={Bot} title="7. AI-Assisted Content" sub="AI generation and human review" iconColor="text-indigo-600" iconBg="bg-indigo-50" iconBorder="border-indigo-100" />
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                Pixra Social Automation may use artificial intelligence to transform approved public-source information into original draft content.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                AI-generated content may be incomplete, inaccurate or unsuitable. Our standard workflow supports <span className="font-semibold text-slate-900">human approval before publication</span>. An authorized administrator may enable automatic publishing, but remains responsible for the resulting content and configuration.
              </p>
              <NoteBox className="bg-indigo-50 border-indigo-100 text-indigo-800">
                <div className="flex items-start gap-2">
                  <Shield className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>We do not use LinkedIn member data to train our own general-purpose AI model. We do not permit AI providers to use LinkedIn-derived information for unrelated profiling or advertising on our behalf.</span>
                </div>
              </NoteBox>
            </section>

            {/* 8. LinkedIn API */}
            <section id="sec-8" className="border border-slate-200 rounded-2xl p-6 sm:p-8 scroll-mt-28 bg-white">
              <SectionHeader icon={KeyRound} title="8. LinkedIn API Use" sub="Restrictions on LinkedIn data" />
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                Information received through LinkedIn APIs is used only for the authorized features disclosed in this Policy.
              </p>
              <p className="text-sm font-semibold text-slate-900 mb-3">Pixra Softtech does not:</p>
              <ul className="space-y-2 mb-4">
                {[
                  "Sell, rent or license LinkedIn information;",
                  "Provide LinkedIn information to data brokers;",
                  "Scrape LinkedIn websites or applications;",
                  "Create unauthorized databases of LinkedIn members;",
                  "Combine LinkedIn information with unrelated datasets for surveillance or unauthorized profiling;",
                  "Use LinkedIn information for unrelated advertising;",
                  "Publish to an account or Page without valid authorization;",
                  "Circumvent LinkedIn rate limits or access controls;",
                  "Retain LinkedIn content longer than necessary for the authorized service.",
                ].map((rule, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-slate-700 leading-relaxed mb-2">
                Our integration is intended to manage content belonging to organizations that have expressly authorized the application.
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Use of LinkedIn remains subject to LinkedIn's applicable User Agreement, Privacy Policy, API Terms and developer requirements.
              </p>
            </section>

            {/* 9. Sharing */}
            <section id="sec-9" className="border border-slate-200 rounded-2xl p-6 sm:p-8 scroll-mt-28 bg-white">
              <SectionHeader icon={Globe} title="9. Sharing and Service Providers" sub="Who we share data with and why" iconColor="text-amber-600" iconBg="bg-amber-50" iconBorder="border-amber-100" />
              <p className="text-sm text-slate-700 mb-4">We may disclose limited information to providers needed to operate the Services, including:</p>
              <ul className="space-y-1.5 mb-4">
                {[
                  "LinkedIn, for authorization and authorized publication;",
                  "Meta/Facebook, for authorized Facebook Page publication;",
                  "Google, for Google Sheets and approved account integrations;",
                  "AI providers, for generating requested drafts;",
                  "n8n or infrastructure running our automation workflows;",
                  "Domain, email, cloud-hosting and security providers;",
                  "Professional advisers where reasonably necessary.",
                ].map((it, i) => <BulletItem key={i} dotColor="text-amber-500">{it}</BulletItem>)}
              </ul>
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                Providers receive only information reasonably necessary to perform the relevant function and are subject to their own contractual and legal obligations. We may disclose information when required by law, court order or valid government request.
              </p>
              <NoteBox className="bg-emerald-50 border-emerald-100 text-emerald-800">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>We do not sell personal information. We do not share personal information for cross-context behavioral advertising.</span>
                </div>
              </NoteBox>
            </section>

            {/* 10. International Transfers */}
            <section id="sec-10" className="border border-slate-200 rounded-2xl p-6 sm:p-8 scroll-mt-28 bg-white">
              <SectionHeader icon={Globe} title="10. International Data Transfers" sub="Cross-border processing safeguards" iconColor="text-cyan-600" iconBg="bg-cyan-50" iconBorder="border-cyan-100" />
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                Our providers may process information in countries other than Pakistan or the user's country.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Where applicable law requires it, we use appropriate contractual, organizational or legal safeguards for international transfers. The protections available in another country may differ from those in the user's home jurisdiction.
              </p>
            </section>

            {/* 11. Retention */}
            <section id="sec-11" className="border border-slate-200 rounded-2xl p-6 sm:p-8 scroll-mt-28 bg-white">
              <SectionHeader icon={Calendar} title="11. Retention" sub="How long we keep different types of data" />
              <p className="text-sm text-slate-700 mb-4">We retain information only for the period reasonably necessary for the disclosed purpose:</p>
              <div className="space-y-2 mb-4">
                {[
                  { label: "OAuth tokens",                                    value: "Until expiry, revocation, disconnection or deletion." },
                  { label: "LinkedIn account and organization identifiers",   value: "While connected, and up to 30 days afterward." },
                  { label: "Drafts, approval records and publication history",value: "Up to 24 months, unless deleted earlier." },
                  { label: "API and security logs",                           value: "Generally up to 90 days." },
                  { label: "Support communications",                          value: "Generally up to 24 months after resolution." },
                  { label: "Backup copies",                                   value: "Overwritten or deleted within 30 days of removal from active systems." },
                ].map((row, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 text-sm py-2.5 border-b border-slate-100 last:border-0">
                    <span className="font-semibold text-slate-900 sm:w-64 shrink-0">{row.label}:</span>
                    <span className="text-slate-700">{row.value}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                We may retain limited records longer when required by law, necessary for security investigations, or needed to establish or defend legal claims.
              </p>
            </section>

            {/* 12. Security */}
            <section id="sec-12" className="border border-slate-200 rounded-2xl p-6 sm:p-8 scroll-mt-28 bg-white">
              <SectionHeader icon={Lock} title="12. Security" sub="Technical and organizational safeguards" iconColor="text-emerald-600" iconBg="bg-emerald-50" iconBorder="border-emerald-100" />
              <p className="text-sm text-slate-700 mb-4">We maintain reasonable technical and organizational safeguards appropriate to the nature of the information, including:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-4">
                {[
                  "OAuth-based third-party authentication;",
                  "Restricted administrator access;",
                  "Access-controlled credential storage;",
                  "Separation of credentials from public workflow data;",
                  "HTTPS for publicly deployed Services;",
                  "Strong passwords and multi-factor authentication where supported;",
                  "Security logging and monitoring;",
                  "Dependency and software maintenance;",
                  "Access revocation procedures;",
                  "Backup and recovery measures where applicable.",
                ].map((it, i) => <BulletItem key={i} dotColor="text-emerald-500">{it}</BulletItem>)}
              </ul>
              <p className="text-sm text-slate-600 leading-relaxed">
                No internet-based service is completely secure. We cannot guarantee absolute security, but we will investigate suspected incidents and make legally required notifications.
              </p>
            </section>

            {/* 13. User Rights */}
            <section id="sec-13" className="border border-slate-200 rounded-2xl p-6 sm:p-8 scroll-mt-28 bg-white">
              <SectionHeader icon={UserCheck} title="13. User Rights" sub="Your data access and control options" iconColor="text-sky-600" iconBg="bg-sky-50" iconBorder="border-sky-100" />
              <p className="text-sm text-slate-700 mb-4">Subject to applicable law, an individual may have the right to:</p>
              <ul className="space-y-1.5 mb-5">
                {[
                  "Request access to their personal information;",
                  "Correct inaccurate or incomplete information;",
                  "Request deletion;",
                  "Restrict or object to processing;",
                  "Withdraw consent;",
                  "Receive certain information in a portable format;",
                  "Obtain information about recipients or processing purposes;",
                  "Complain to an applicable data-protection authority;",
                  "Request human consideration where a legally significant decision is made solely through automated processing.",
                ].map((it, i) => <BulletItem key={i} dotColor="text-sky-500">{it}</BulletItem>)}
              </ul>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm">
                <p className="text-slate-700 mb-1.5">Send requests to: <a href="mailto:privacy@pixorasofttech.com" className="font-semibold text-blue-600 hover:underline">privacy@pixorasofttech.com</a></p>
                <p className="text-xs text-slate-500">We may request reasonable information to verify identity. We aim to respond within 30 days, subject to permitted extensions and applicable law.</p>
              </div>
            </section>

            {/* 14. California */}
            <section id="sec-14" className="border border-slate-200 rounded-2xl p-6 sm:p-8 scroll-mt-28 bg-white">
              <SectionHeader icon={ShieldCheck} title="14. California and Similar United States Privacy Rights" sub="CCPA and CPRA compliance" iconColor="text-purple-600" iconBg="bg-purple-50" iconBorder="border-purple-100" />
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                Where applicable, residents may request information about categories of personal information collected, sources, purposes, recipients, access, correction or deletion.
              </p>
              <NoteBox className="bg-purple-50 border-purple-100 text-purple-800 mb-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>Pixra Softtech does not sell personal information and does not share personal information for cross-context behavioral advertising.</span>
                </div>
              </NoteBox>
              <p className="text-sm text-slate-700 leading-relaxed mb-2">
                We will not unlawfully discriminate against an individual for exercising an applicable privacy right.
              </p>
              <p className="text-sm text-slate-600">
                Requests: <a href="mailto:privacy@pixorasofttech.com" className="font-semibold text-blue-600 hover:underline">privacy@pixorasofttech.com</a>
              </p>
            </section>

            {/* 15. Revoking LinkedIn */}
            <section id="sec-15" className="border border-slate-200 rounded-2xl p-6 sm:p-8 scroll-mt-28 bg-white">
              <SectionHeader icon={KeyRound} title="15. Revoking LinkedIn Access" sub="How to disconnect the integration" />
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                Users may revoke Pixra Social Automation's LinkedIn access through their LinkedIn account settings:
              </p>
              <div className="p-4 bg-slate-900 text-slate-100 rounded-xl font-mono text-xs leading-relaxed mb-4">
                LinkedIn &rarr; Settings &amp; Privacy &rarr; Data privacy &rarr; Other applications &rarr; Permitted services
              </div>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                Users may also email <a href="mailto:privacy@pixorasofttech.com" className="font-semibold text-blue-600 hover:underline">privacy@pixorasofttech.com</a> or <a href="mailto:developer@pixorasofttech.com" className="font-semibold text-blue-600 hover:underline">developer@pixorasofttech.com</a> to request disconnection.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Revocation prevents new authorized API requests using the revoked token. It does not automatically remove records that must temporarily be retained for legal, security or dispute-resolution purposes.
              </p>
            </section>

            {/* 16. Data Deletion */}
            <section id="sec-16" className="border border-slate-200 rounded-2xl p-6 sm:p-8 scroll-mt-28 bg-white">
              <SectionHeader icon={Trash2} title="16. Data Deletion" sub="How to request removal of your data" iconColor="text-rose-600" iconBg="bg-rose-50" iconBorder="border-rose-100" />
              <p className="text-sm text-slate-700 mb-4 font-semibold">To request deletion:</p>
              <div className="space-y-2 mb-6">
                {[
                  'Email privacy@pixorasofttech.com',
                  'Use the subject line: "Data Deletion Request"',
                  'Identify the connected account or organization',
                  'Describe the information or integration to be removed',
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-700 py-2.5 border-b border-slate-100 last:border-0">
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-semibold shrink-0">{i + 1}</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
              <a
                href="mailto:privacy@pixorasofttech.com?subject=Data%20Deletion%20Request"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold transition-colors shadow-sm"
              >
                <Send className="w-4 h-4" />
                Send Deletion Request
              </a>
              <p className="text-xs text-slate-500 mt-4 leading-relaxed">
                Following identity verification, we will delete or anonymize eligible information from active systems and allow backup copies to expire per the retention schedule. We may retain limited records where required by law.
              </p>
            </section>

            {/* 17. Cookies */}
            <section id="sec-17" className="border border-slate-200 rounded-2xl p-6 sm:p-8 scroll-mt-28 bg-white">
              <SectionHeader icon={FileText} title="17. Cookies and Tracking" sub="Essential cookies and opt-out signals" iconColor="text-slate-600" iconBg="bg-slate-100" iconBorder="border-slate-200" />
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                Our website may use essential cookies required for security, sessions and basic functionality.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                If we introduce analytics, advertising or other non-essential cookies, we will provide appropriate notice and consent controls where required.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Browser "Do Not Track" signals are not interpreted uniformly across the industry. Where legally required and technically supported, we will honor recognized opt-out preference signals.
              </p>
            </section>

            {/* 18. Children */}
            <section id="sec-18" className="border border-slate-200 rounded-2xl p-6 sm:p-8 scroll-mt-28 bg-white">
              <SectionHeader icon={AlertTriangle} title="18. Children" sub="Age restrictions and minor protections" iconColor="text-amber-600" iconBg="bg-amber-50" iconBorder="border-amber-100" />
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                Our Services are intended for businesses and authorized users aged <span className="font-semibold text-slate-900">18 or older</span>.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                We do not knowingly collect personal information from children. If such information is identified, contact <a href="mailto:privacy@pixorasofttech.com" className="font-semibold text-blue-600 hover:underline">privacy@pixorasofttech.com</a> so it can be reviewed and deleted.
              </p>
            </section>

            {/* 19. Third Parties */}
            <section id="sec-19" className="border border-slate-200 rounded-2xl p-6 sm:p-8 scroll-mt-28 bg-white">
              <SectionHeader icon={ExternalLink} title="19. Third-Party Websites and Services" sub="External platform link disclaimer" />
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                Our Services may contain links to or integrations with third-party platforms. Those parties operate independently and maintain their own privacy policies.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Pixra Softtech is not responsible for an independent third party's privacy practices, content or security.
              </p>
            </section>

            {/* 20. Business Transfers */}
            <section id="sec-20" className="border border-slate-200 rounded-2xl p-6 sm:p-8 scroll-mt-28 bg-white">
              <SectionHeader icon={Building2} title="20. Business Transfers" sub="Corporate reorganization and asset sales" iconColor="text-indigo-600" iconBg="bg-indigo-50" iconBorder="border-indigo-100" />
              <p className="text-sm text-slate-700 leading-relaxed">
                If Pixra Softtech undergoes a merger, acquisition, reorganization or sale of assets, relevant information may be transferred subject to applicable law and continued protection consistent with this Policy.
              </p>
            </section>

            {/* 21. Changes */}
            <section id="sec-21" className="border border-slate-200 rounded-2xl p-6 sm:p-8 scroll-mt-28 bg-white">
              <SectionHeader icon={Calendar} title="21. Changes to This Policy" sub="How we notify you of updates" iconColor="text-sky-600" iconBg="bg-sky-50" iconBorder="border-sky-100" />
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                We may update this Policy when our Services, integrations, laws or platform requirements change. The revised Policy will be posted at:
              </p>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg mb-3">
                <a href="https://pixorasofttech.com/privacy-policy" target="_blank" rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline flex items-center gap-1.5">
                  https://pixorasofttech.com/privacy-policy
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Material changes will be communicated where required by law. The "Last Updated" date will identify the latest version.
              </p>
            </section>

            {/* 22. Contact */}
            <section id="sec-22" className="border border-slate-200 rounded-2xl p-6 sm:p-8 scroll-mt-28 bg-blue-600 text-white">
              <div className="flex items-start gap-4 mb-6 pb-5 border-b border-blue-500">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">22. Contact Us</h2>
                  <p className="text-xs text-blue-100 mt-0.5">Privacy inquiries, rights requests and complaints</p>
                </div>
              </div>

              <div className="bg-white/10 border border-white/20 p-5 rounded-xl mb-6">
                <p className="text-sm font-semibold text-white mb-0.5">PIXORASOFTTECH (SMC-PRIVATE) LIMITED</p>
                <p className="text-sm text-blue-100 mb-4">Khurrianwala, Balail Town, Faisalabad, Jaranwala, Punjab, Pakistan</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-blue-200 text-xs font-semibold mb-1">Privacy</p>
                    <a href="mailto:privacy@pixorasofttech.com" className="text-white hover:underline break-all">privacy@pixorasofttech.com</a>
                  </div>
                  <div>
                    <p className="text-blue-200 text-xs font-semibold mb-1">Support</p>
                    <a href="mailto:support@pixorasofttech.com" className="text-white hover:underline break-all">support@pixorasofttech.com</a>
                  </div>
                  <div>
                    <p className="text-blue-200 text-xs font-semibold mb-1">Developer</p>
                    <a href="mailto:developer@pixorasofttech.com" className="text-white hover:underline break-all">developer@pixorasofttech.com</a>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:privacy@pixorasofttech.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-blue-600 text-sm font-semibold hover:bg-blue-50 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Contact Privacy Officer
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/30 text-white text-sm hover:bg-white/10 transition-colors"
                >
                  General Contact Form
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}
