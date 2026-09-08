"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FileText,
  Building2,
  Layers,
  UserCheck,
  Lock,
  Edit3,
  Bot,
  ShieldOff,
  Wifi,
  Rss,
  Briefcase,
  Shield,
  Server,
  CreditCard,
  XCircle,
  AlertTriangle,
  Scale,
  RefreshCw,
  GitMerge,
  CheckSquare,
  Handshake,
  Mail,
  ExternalLink,
  Search,
  ChevronRight,
  Copy,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import toast from "react-hot-toast";

const sections = [
  { id: "sec-1",  title: "1. Company Information",         icon: Building2   },
  { id: "sec-2",  title: "2. Services",                    icon: Layers      },
  { id: "sec-3",  title: "3. Eligibility",                 icon: UserCheck   },
  { id: "sec-4",  title: "4. Account & Credential Security", icon: Lock      },
  { id: "sec-5",  title: "5. User Content",                icon: Edit3       },
  { id: "sec-6",  title: "6. AI-Generated Content",        icon: Bot         },
  { id: "sec-7",  title: "7. Acceptable Use",              icon: ShieldOff   },
  { id: "sec-8",  title: "8. Social-Media Authorization",  icon: Wifi        },
  { id: "sec-9",  title: "9. Third-Party Platforms",       icon: ExternalLink },
  { id: "sec-10", title: "10. RSS & Source Material",      icon: Rss         },
  { id: "sec-11", title: "11. Intellectual Property",      icon: Briefcase   },
  { id: "sec-12", title: "12. Privacy",                    icon: Shield      },
  { id: "sec-13", title: "13. Availability",               icon: Server      },
  { id: "sec-14", title: "14. Testing & Development",      icon: RefreshCw   },
  { id: "sec-15", title: "15. Fees and Billing",           icon: CreditCard  },
  { id: "sec-16", title: "16. Suspension & Termination",   icon: XCircle     },
  { id: "sec-17", title: "17. Disclaimers",                icon: AlertTriangle },
  { id: "sec-18", title: "18. Limitation of Liability",    icon: Scale       },
  { id: "sec-19", title: "19. Indemnification",            icon: Handshake   },
  { id: "sec-20", title: "20. Governing Law & Disputes",   icon: Scale       },
  { id: "sec-21", title: "21. Changes to These Terms",     icon: RefreshCw   },
  { id: "sec-22", title: "22. Severability",               icon: GitMerge    },
  { id: "sec-23", title: "23. No Waiver",                  icon: CheckSquare },
  { id: "sec-24", title: "24. Entire Agreement",           icon: FileText    },
  { id: "sec-25", title: "25. Contact",                    icon: Mail        },
];

/* ─── Shared helpers ─── */
function SectionHeader({
  icon: Icon,
  title,
  sub,
  iconColor  = "text-blue-600",
  iconBg     = "bg-blue-50",
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

function BulletItem({
  children,
  dotColor = "text-blue-500",
  icon: Icon,
}: {
  children: React.ReactNode;
  dotColor?: string;
  icon?: React.ElementType;
}) {
  const DotIcon = Icon ?? CheckCircle2;
  return (
    <li className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
      <DotIcon className={`w-4 h-4 ${dotColor} shrink-0 mt-0.5`} />
      <span>{children}</span>
    </li>
  );
}

function NoteBox({
  children,
  className = "bg-blue-50 border-blue-100 text-blue-800",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`p-4 rounded-xl border text-sm leading-relaxed ${className}`}>
      {children}
    </div>
  );
}

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
            className="text-sm text-blue-600 hover:underline"
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

/* ─── Main component ─── */
export default function TermsView() {
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
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.pageYOffset - 90,
        behavior: "smooth",
      });
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
            <FileText className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">
              PIXORASOFTTECH (SMC-PRIVATE) LIMITED
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Terms and Conditions
          </h1>
          <p className="text-slate-600 text-base max-w-3xl leading-relaxed mb-8">
            These Terms and Conditions ("Terms") govern access to and use of the Pixra Softtech website,
            Pixra Social Automation and related software, integrations and services. By accessing or using
            the Services, connecting a third-party account or authorizing publication, the user agrees to
            these Terms and our{" "}
            <Link href="/privacy-policy" className="text-blue-600 hover:underline font-medium">
              Privacy Policy
            </Link>.
          </p>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-lg">
              <FileText className="w-4 h-4 text-slate-400" />
              <span className="text-sm text-slate-600">
                Effective Date: <span className="font-semibold text-slate-900">8 September 2026</span>
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-lg">
              <RefreshCw className="w-4 h-4 text-slate-400" />
              <span className="text-sm text-slate-600">
                Last Updated: <span className="font-semibold text-slate-900">8 September 2026</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── LAYOUT ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
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
              <span className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-600" />
                Table of Contents
              </span>
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
                        activeSection === s.id
                          ? "bg-blue-50 text-blue-700 font-semibold"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                      {s.title}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* ── TERMS SECTIONS ── */}
          <main className="lg:col-span-8 space-y-5">

            {/* 1. Company Information */}
            <section id="sec-1" className="border border-slate-200 rounded-2xl p-6 sm:p-8 scroll-mt-28 bg-white">
              <SectionHeader icon={Building2} title="1. Company Information" sub="Legal entity and registered contact details" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5 text-sm">
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
              <div className="border border-slate-200 rounded-xl divide-y divide-slate-100">
                <ContactRow label="Website"   value="https://pixorasofttech.com"   href="https://pixorasofttech.com" />
                <ContactRow label="General"   value="contact@pixorasofttech.com"   href="mailto:contact@pixorasofttech.com"   isEmail />
                <ContactRow label="Support"   value="support@pixorasofttech.com"   href="mailto:support@pixorasofttech.com"   isEmail />
                <ContactRow label="Developer" value="developer@pixorasofttech.com" href="mailto:developer@pixorasofttech.com" isEmail />
                <ContactRow label="LinkedIn"  value="linkedin.com/company/115831290" href="https://www.linkedin.com/company/115831290/" />
              </div>
            </section>

            {/* 2. Services */}
            <section id="sec-2" className="border border-slate-200 rounded-2xl p-6 sm:p-8 scroll-mt-28 bg-white">
              <SectionHeader icon={Layers} title="2. Services" sub="What Pixra Softtech may provide" iconColor="text-indigo-600" iconBg="bg-indigo-50" iconBorder="border-indigo-100" />
              <p className="text-sm text-slate-700 mb-4">Pixra Softtech may provide:</p>
              <ul className="space-y-1.5 mb-4">
                {[
                  "Website and software-development services;",
                  "Workflow automation;",
                  "RSS content collection from approved public sources;",
                  "AI-assisted social-media draft generation;",
                  "Content approval and rejection tools;",
                  "Scheduled content publishing;",
                  "LinkedIn and Meta/Facebook integrations;",
                  "Google Sheets integration;",
                  "Publication-status and error tracking;",
                  "Duplicate-processing prevention;",
                  "Administrative dashboards and related support.",
                ].map((item, i) => <BulletItem key={i} dotColor="text-indigo-500">{item}</BulletItem>)}
              </ul>
              <p className="text-sm text-slate-600 leading-relaxed">
                Available functions depend on user authorization, platform permissions, third-party APIs and the selected service configuration.
              </p>
            </section>

            {/* 3. Eligibility */}
            <section id="sec-3" className="border border-slate-200 rounded-2xl p-6 sm:p-8 scroll-mt-28 bg-white">
              <SectionHeader icon={UserCheck} title="3. Eligibility" sub="Requirements to access and use the Services" iconColor="text-sky-600" iconBg="bg-sky-50" iconBorder="border-sky-100" />
              <p className="text-sm text-slate-700 mb-4">A user must:</p>
              <ul className="space-y-1.5 mb-4">
                {[
                  "Be at least 18 years old;",
                  "Have legal capacity to accept these Terms;",
                  "Provide accurate information;",
                  "Have authority to represent any organization connected to the Services;",
                  "Hold the required administrator or content-management permissions for connected accounts and Pages.",
                ].map((item, i) => <BulletItem key={i} dotColor="text-sky-500">{item}</BulletItem>)}
              </ul>
              <NoteBox className="bg-rose-50 border-rose-100 text-rose-800">
                <div className="flex items-center gap-2">
                  <XCircle className="w-4 h-4 shrink-0" />
                  <span>Connecting an account without authorization is prohibited.</span>
                </div>
              </NoteBox>
            </section>

            {/* 4. Account Security */}
            <section id="sec-4" className="border border-slate-200 rounded-2xl p-6 sm:p-8 scroll-mt-28 bg-white">
              <SectionHeader icon={Lock} title="4. Account and Credential Security" sub="User responsibilities for keeping access secure" iconColor="text-emerald-600" iconBg="bg-emerald-50" iconBorder="border-emerald-100" />
              <p className="text-sm text-slate-700 mb-4">Users are responsible for:</p>
              <ul className="space-y-1.5 mb-4">
                {[
                  "Keeping passwords and devices secure;",
                  "Limiting administrator access;",
                  "Maintaining accurate recovery information;",
                  "Using multi-factor authentication where available;",
                  "Promptly reporting suspected unauthorized access;",
                  "Revoking integrations that are no longer required.",
                ].map((item, i) => <BulletItem key={i} dotColor="text-emerald-500">{item}</BulletItem>)}
              </ul>
              <NoteBox className="bg-blue-50 border-blue-100 text-blue-800">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 shrink-0" />
                  <span>
                    Pixra Softtech will not request a LinkedIn or Facebook password through the automation
                    interface. Third-party authorization is completed through the relevant provider's OAuth process.
                  </span>
                </div>
              </NoteBox>
            </section>

            {/* 5. User Content */}
            <section id="sec-5" className="border border-slate-200 rounded-2xl p-6 sm:p-8 scroll-mt-28 bg-white">
              <SectionHeader icon={Edit3} title="5. User Content" sub="Ownership, permissions and content standards" iconColor="text-violet-600" iconBg="bg-violet-50" iconBorder="border-violet-100" />
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                Users retain ownership of content they submit.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                Users grant Pixra Softtech a limited, non-exclusive, revocable permission to process, format,
                store and transmit submitted content only as necessary to provide the requested Services.
              </p>
              <p className="text-sm text-slate-700 mb-3">The user confirms that submitted or published content:</p>
              <ul className="space-y-1.5">
                {[
                  "Is lawful and accurate;",
                  "Does not infringe copyright, trademark, privacy or other rights;",
                  "Is not fraudulent, deceptive, defamatory or discriminatory;",
                  "Does not contain malicious code;",
                  "Does not impersonate another person or organization;",
                  "Complies with applicable platform rules.",
                ].map((item, i) => <BulletItem key={i} dotColor="text-violet-500">{item}</BulletItem>)}
              </ul>
            </section>

            {/* 6. AI Content */}
            <section id="sec-6" className="border border-slate-200 rounded-2xl p-6 sm:p-8 scroll-mt-28 bg-white">
              <SectionHeader icon={Bot} title="6. AI-Generated Content" sub="Accuracy, responsibility and limitations of AI output" iconColor="text-indigo-600" iconBg="bg-indigo-50" iconBorder="border-indigo-100" />
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                AI-generated material may contain errors, omissions, outdated information or unsuitable language.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                Users should review generated drafts before publication. Where an authorized administrator enables
                automatic publishing, that administrator accepts responsibility for the configuration and published output.
              </p>
              <NoteBox className="bg-amber-50 border-amber-100 text-amber-800">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>
                    Pixra Softtech does not guarantee that AI-generated content is accurate, original,
                    legally compliant or suitable for a specific purpose.
                  </span>
                </div>
              </NoteBox>
            </section>

            {/* 7. Acceptable Use */}
            <section id="sec-7" className="border border-slate-200 rounded-2xl p-6 sm:p-8 scroll-mt-28 bg-white">
              <SectionHeader icon={ShieldOff} title="7. Acceptable Use" sub="Prohibited actions and misuse policy" iconColor="text-rose-600" iconBg="bg-rose-50" iconBorder="border-rose-100" />
              <p className="text-sm text-slate-700 mb-4">Users must not use the Services to:</p>
              <ul className="space-y-1.5 mb-4">
                {[
                  "Send or publish spam;",
                  "Scrape LinkedIn or another platform;",
                  "Circumvent access controls or rate limits;",
                  "Sell or disclose platform data without authorization;",
                  "Create unauthorized profiles or databases;",
                  "Harass, deceive or unlawfully discriminate;",
                  "Publish illegal, hateful or harmful material;",
                  "Distribute malware;",
                  "Access accounts without authorization;",
                  "Manipulate engagement or platform metrics deceptively;",
                  "Violate intellectual-property rights;",
                  "Violate LinkedIn, Meta, Google or another provider's terms.",
                ].map((item, i) => (
                  <BulletItem key={i} dotColor="text-rose-500" icon={XCircle}>{item}</BulletItem>
                ))}
              </ul>
              <p className="text-sm text-slate-600 leading-relaxed">
                We may restrict or terminate access where misuse is identified.
              </p>
            </section>

            {/* 8. Social-Media Authorization */}
            <section id="sec-8" className="border border-slate-200 rounded-2xl p-6 sm:p-8 scroll-mt-28 bg-white">
              <SectionHeader icon={Wifi} title="8. Social-Media Authorization" sub="Scope of permissions and ongoing responsibilities" iconColor="text-blue-600" iconBg="bg-blue-50" iconBorder="border-blue-100" />
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                A connected account authorizes the Services to perform only the actions covered by the permissions
                approved during authorization.
              </p>
              <p className="text-sm text-slate-700 mb-3">Users remain responsible for:</p>
              <ul className="space-y-1.5">
                {[
                  "Selecting the correct account or Company Page;",
                  "Reviewing granted permissions;",
                  "Ensuring their administrator role remains valid;",
                  "Approving content where approval is enabled;",
                  "Monitoring published content;",
                  "Revoking access when no longer needed.",
                ].map((item, i) => <BulletItem key={i}>{item}</BulletItem>)}
              </ul>
            </section>

            {/* 9. Third-Party Platforms */}
            <section id="sec-9" className="border border-slate-200 rounded-2xl p-6 sm:p-8 scroll-mt-28 bg-white">
              <SectionHeader icon={ExternalLink} title="9. Third-Party Platforms" sub="Independence of external providers and platforms" iconColor="text-amber-600" iconBg="bg-amber-50" iconBorder="border-amber-100" />
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                LinkedIn, Meta, Google, AI providers, RSS publishers and infrastructure providers are independent parties.
              </p>
              <p className="text-sm text-slate-700 mb-3">Pixra Softtech does not control and is not responsible for:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-4">
                {[
                  "API outages or changes;",
                  "Permission rejection;",
                  "Account or Page suspension;",
                  "Platform moderation;",
                  "Token expiration;",
                  "Rate limits;",
                  "Third-party pricing;",
                  "Content removal;",
                  "Changes to platform features.",
                ].map((item, i) => <BulletItem key={i} dotColor="text-amber-500">{item}</BulletItem>)}
              </ul>
              <p className="text-sm text-slate-600 leading-relaxed">
                LinkedIn, Meta and Google do not sponsor or endorse Pixra Softtech merely because an integration exists.
              </p>
            </section>

            {/* 10. RSS & Source Material */}
            <section id="sec-10" className="border border-slate-200 rounded-2xl p-6 sm:p-8 scroll-mt-28 bg-white">
              <SectionHeader icon={Rss} title="10. RSS and Third-Party Source Material" sub="Rights, ownership and attribution" iconColor="text-orange-600" iconBg="bg-orange-50" iconBorder="border-orange-100" />
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                External articles and RSS content remain the property of their respective owners.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                The Services are intended to use external information as source material for original commentary.
                Users must not use the Services to reproduce protected material without authorization.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Attribution and source links should be retained where appropriate.
              </p>
            </section>

            {/* 11. Intellectual Property */}
            <section id="sec-11" className="border border-slate-200 rounded-2xl p-6 sm:p-8 scroll-mt-28 bg-white">
              <SectionHeader icon={Briefcase} title="11. Intellectual Property" sub="Ownership of software, design and content" iconColor="text-teal-600" iconBg="bg-teal-50" iconBorder="border-teal-100" />
              <p className="text-sm text-slate-700 mb-4">Pixra Softtech owns or licenses its:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-4">
                {[
                  "Software and automation workflows;",
                  "Website design;",
                  "Documentation;",
                  "Branding;",
                  "Original content;",
                  "Internal processes and technology.",
                ].map((item, i) => <BulletItem key={i} dotColor="text-teal-500">{item}</BulletItem>)}
              </ul>
              <p className="text-sm text-slate-700 leading-relaxed mb-2">
                These Terms do not transfer our intellectual property to users.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Third-party names, trademarks and materials remain the property of their respective owners.
              </p>
            </section>

            {/* 12. Privacy */}
            <section id="sec-12" className="border border-slate-200 rounded-2xl p-6 sm:p-8 scroll-mt-28 bg-white">
              <SectionHeader icon={Shield} title="12. Privacy" sub="How personal information is handled" iconColor="text-blue-600" iconBg="bg-blue-50" iconBorder="border-blue-100" />
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                Personal information is processed according to our Privacy Policy:
              </p>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg mb-4">
                <Link
                  href="/privacy-policy"
                  className="text-sm text-blue-600 hover:underline flex items-center gap-1.5"
                >
                  https://pixorasofttech.com/privacy-policy
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                Users connecting accounts acknowledge that authorized third-party providers may process
                information necessary to provide the requested integration.
              </p>
            </section>

            {/* 13. Availability */}
            <section id="sec-13" className="border border-slate-200 rounded-2xl p-6 sm:p-8 scroll-mt-28 bg-white">
              <SectionHeader icon={Server} title="13. Availability" sub="Service continuity and operational conditions" iconColor="text-slate-600" iconBg="bg-slate-100" iconBorder="border-slate-200" />
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                Services are provided on an "as available" basis.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                We may modify, maintain, restrict, suspend or discontinue functionality for legal, security,
                operational or platform-compliance reasons.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Scheduled automation requires functioning infrastructure, network connectivity, active credentials
                and available third-party APIs. We do not guarantee uninterrupted execution or publication.
              </p>
            </section>

            {/* 14. Testing & Dev */}
            <section id="sec-14" className="border border-slate-200 rounded-2xl p-6 sm:p-8 scroll-mt-28 bg-white">
              <SectionHeader icon={RefreshCw} title="14. Testing and Development Features" sub="Beta, preview and pre-release feature limitations" iconColor="text-purple-600" iconBg="bg-purple-50" iconBorder="border-purple-100" />
              <p className="text-sm text-slate-700 mb-4">
                Features identified as testing, development, preview or beta may:
              </p>
              <ul className="space-y-1.5 mb-4">
                {[
                  "Contain errors;",
                  "Change without notice;",
                  "Have limited capacity;",
                  "Be unavailable temporarily;",
                  "Require additional platform approval before production use.",
                ].map((item, i) => <BulletItem key={i} dotColor="text-purple-500">{item}</BulletItem>)}
              </ul>
              <p className="text-sm text-slate-600 leading-relaxed">
                Users should not rely on testing features for critical operations without appropriate review and backup procedures.
              </p>
            </section>

            {/* 15. Fees */}
            <section id="sec-15" className="border border-slate-200 rounded-2xl p-6 sm:p-8 scroll-mt-28 bg-white">
              <SectionHeader icon={CreditCard} title="15. Fees and Billing" sub="Charges, payment obligations and refund terms" iconColor="text-emerald-600" iconBg="bg-emerald-50" iconBorder="border-emerald-100" />
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                Applicable fees will be presented separately before purchase or agreed in a written service arrangement.
              </p>
              <p className="text-sm text-slate-700 mb-3">Users are responsible for:</p>
              <ul className="space-y-1.5 mb-4">
                {[
                  "Approved Pixra Softtech charges;",
                  "Third-party API or subscription costs;",
                  "Taxes and payment-provider charges;",
                  "Maintaining valid billing information where required.",
                ].map((item, i) => <BulletItem key={i} dotColor="text-emerald-500">{item}</BulletItem>)}
              </ul>
              <NoteBox className="bg-slate-100 border-slate-200 text-slate-700">
                Unless applicable law or a written agreement provides otherwise, fees already incurred are non-refundable.
              </NoteBox>
            </section>

            {/* 16. Suspension & Termination */}
            <section id="sec-16" className="border border-slate-200 rounded-2xl p-6 sm:p-8 scroll-mt-28 bg-white">
              <SectionHeader icon={XCircle} title="16. Suspension and Termination" sub="Grounds for access restriction and what follows" iconColor="text-rose-600" iconBg="bg-rose-50" iconBorder="border-rose-100" />
              <p className="text-sm text-slate-700 mb-3">We may suspend or terminate access when:</p>
              <ul className="space-y-1.5 mb-4">
                {[
                  "These Terms are violated;",
                  "Continued operation creates a security or legal risk;",
                  "Required permissions are revoked;",
                  "A platform requires suspension;",
                  "Fees remain unpaid;",
                  "The Service is discontinued.",
                ].map((item, i) => <BulletItem key={i} dotColor="text-rose-500">{item}</BulletItem>)}
              </ul>
              <p className="text-sm text-slate-700 leading-relaxed mb-2">
                Users may stop using the Services and revoke integrations at any time.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Following termination, information will be handled according to the Privacy Policy and applicable retention requirements.
              </p>
            </section>

            {/* 17. Disclaimers */}
            <section id="sec-17" className="border border-slate-200 rounded-2xl p-6 sm:p-8 scroll-mt-28 bg-white">
              <SectionHeader icon={AlertTriangle} title="17. Disclaimers" sub="Limitations of warranties and guarantees" iconColor="text-amber-600" iconBg="bg-amber-50" iconBorder="border-amber-100" />
              <p className="text-sm text-slate-700 leading-relaxed mb-4">To the maximum extent permitted by applicable law:</p>
              <ul className="space-y-1.5 mb-4">
                {[
                  "The Services are provided without a guarantee of uninterrupted availability;",
                  "AI output is not professional legal, financial or regulatory advice;",
                  "Platform approval is not guaranteed;",
                  "Audience reach, engagement, revenue or commercial results are not guaranteed;",
                  "Every scheduled publication is not guaranteed to succeed;",
                  "Third-party content and systems remain outside our control.",
                ].map((item, i) => <BulletItem key={i} dotColor="text-amber-500">{item}</BulletItem>)}
              </ul>
              <p className="text-sm text-slate-600 leading-relaxed">
                Nothing in these Terms excludes warranties or consumer rights that cannot legally be excluded.
              </p>
            </section>

            {/* 18. Limitation of Liability */}
            <section id="sec-18" className="border border-slate-200 rounded-2xl p-6 sm:p-8 scroll-mt-28 bg-white">
              <SectionHeader icon={Scale} title="18. Limitation of Liability" sub="Cap on damages and excluded loss types" iconColor="text-slate-600" iconBg="bg-slate-100" iconBorder="border-slate-200" />
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                To the maximum extent permitted by applicable law, Pixra Softtech will not be liable for indirect,
                incidental, special, exemplary or consequential losses arising from:
              </p>
              <ul className="space-y-1.5 mb-4">
                {[
                  "Third-party API failure;",
                  "Platform suspension or content removal;",
                  "Unauthorized credential use;",
                  "Incorrect configuration;",
                  "Publication of unreviewed AI content;",
                  "Loss of reach, revenue, opportunity, goodwill or data;",
                  "Events outside our reasonable control.",
                ].map((item, i) => <BulletItem key={i} dotColor="text-slate-500">{item}</BulletItem>)}
              </ul>
              <p className="text-sm text-slate-600 leading-relaxed">
                Where liability cannot legally be excluded, it will be limited only to the extent permitted by applicable law.
              </p>
            </section>

            {/* 19. Indemnification */}
            <section id="sec-19" className="border border-slate-200 rounded-2xl p-6 sm:p-8 scroll-mt-28 bg-white">
              <SectionHeader icon={Handshake} title="19. Indemnification" sub="User responsibility for third-party claims" iconColor="text-indigo-600" iconBg="bg-indigo-50" iconBorder="border-indigo-100" />
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                To the extent permitted by applicable law, users agree to be responsible for claims, losses or
                expenses arising from:
              </p>
              <ul className="space-y-1.5">
                {[
                  "Unlawful user content;",
                  "Unauthorized account access;",
                  "Misuse of the Services;",
                  "Violation of third-party rights;",
                  "Violation of platform policies;",
                  "Material breach of these Terms.",
                ].map((item, i) => <BulletItem key={i} dotColor="text-indigo-500">{item}</BulletItem>)}
              </ul>
            </section>

            {/* 20. Governing Law */}
            <section id="sec-20" className="border border-slate-200 rounded-2xl p-6 sm:p-8 scroll-mt-28 bg-white">
              <SectionHeader icon={Scale} title="20. Governing Law and Disputes" sub="Applicable law and dispute resolution process" iconColor="text-sky-600" iconBg="bg-sky-50" iconBorder="border-sky-100" />
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                These Terms are governed by the applicable laws of Pakistan.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                Subject to mandatory rights under applicable law, disputes will fall under the jurisdiction of
                competent courts in Punjab, Pakistan.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Before initiating formal proceedings, the parties should attempt in good faith to resolve the
                dispute through written communication.
              </p>
            </section>

            {/* 21. Changes */}
            <section id="sec-21" className="border border-slate-200 rounded-2xl p-6 sm:p-8 scroll-mt-28 bg-white">
              <SectionHeader icon={RefreshCw} title="21. Changes to These Terms" sub="How updates are published and communicated" iconColor="text-teal-600" iconBg="bg-teal-50" iconBorder="border-teal-100" />
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                We may update these Terms when our Services, laws or third-party requirements change.
                The latest version will be published at:
              </p>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg mb-3">
                <a
                  href="https://pixorasofttech.com/terms-and-conditions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline flex items-center gap-1.5"
                >
                  https://pixorasofttech.com/terms-and-conditions
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Material changes will be communicated where legally required. Continued use after an effective
                update constitutes acceptance where permitted by law.
              </p>
            </section>

            {/* 22. Severability */}
            <section id="sec-22" className="border border-slate-200 rounded-2xl p-6 sm:p-8 scroll-mt-28 bg-white">
              <SectionHeader icon={GitMerge} title="22. Severability" sub="Effect of invalid or unenforceable provisions" iconColor="text-slate-600" iconBg="bg-slate-100" iconBorder="border-slate-200" />
              <p className="text-sm text-slate-700 leading-relaxed">
                If a provision is held invalid or unenforceable, the remaining provisions will continue in effect.
                The affected provision will be interpreted as closely as legally permitted to its intended purpose.
              </p>
            </section>

            {/* 23. No Waiver */}
            <section id="sec-23" className="border border-slate-200 rounded-2xl p-6 sm:p-8 scroll-mt-28 bg-white">
              <SectionHeader icon={CheckSquare} title="23. No Waiver" sub="Preservation of rights" iconColor="text-slate-600" iconBg="bg-slate-100" iconBorder="border-slate-200" />
              <p className="text-sm text-slate-700 leading-relaxed">
                Failure to enforce a provision does not waive our right to enforce it later.
              </p>
            </section>

            {/* 24. Entire Agreement */}
            <section id="sec-24" className="border border-slate-200 rounded-2xl p-6 sm:p-8 scroll-mt-28 bg-white">
              <SectionHeader icon={FileText} title="24. Entire Agreement" sub="Scope and precedence of this agreement" iconColor="text-blue-600" iconBg="bg-blue-50" iconBorder="border-blue-100" />
              <p className="text-sm text-slate-700 leading-relaxed">
                These Terms, the{" "}
                <Link href="/privacy-policy" className="text-blue-600 hover:underline font-medium">
                  Privacy Policy
                </Link>{" "}
                and any applicable written service agreement form the entire agreement governing the Services
                and replace prior communications concerning the same subject.
              </p>
            </section>

            {/* 25. Contact */}
            <section id="sec-25" className="border border-slate-200 rounded-2xl p-6 sm:p-8 scroll-mt-28 bg-blue-600 text-white">
              <div className="flex items-start gap-4 mb-6 pb-5 border-b border-blue-500">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">25. Contact</h2>
                  <p className="text-xs text-blue-100 mt-0.5">Questions about these Terms</p>
                </div>
              </div>

              <div className="bg-white/10 border border-white/20 p-5 rounded-xl mb-6">
                <p className="text-sm font-semibold text-white mb-0.5">PIXORASOFTTECH (SMC-PRIVATE) LIMITED</p>
                <p className="text-sm text-blue-100 mb-4">Khurrianwala, Balail Town, Faisalabad, Jaranwala, Punjab, Pakistan</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-blue-200 text-xs font-semibold mb-1">Support</p>
                    <a href="mailto:support@pixorasofttech.com" className="text-white hover:underline break-all">support@pixorasofttech.com</a>
                  </div>
                  <div>
                    <p className="text-blue-200 text-xs font-semibold mb-1">General</p>
                    <a href="mailto:contact@pixorasofttech.com" className="text-white hover:underline break-all">contact@pixorasofttech.com</a>
                  </div>
                  <div>
                    <p className="text-blue-200 text-xs font-semibold mb-1">Developer</p>
                    <a href="mailto:developer@pixorasofttech.com" className="text-white hover:underline break-all">developer@pixorasofttech.com</a>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:support@pixorasofttech.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-blue-600 text-sm font-semibold hover:bg-blue-50 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Email Support
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/30 text-white text-sm hover:bg-white/10 transition-colors"
                >
                  Contact Form
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/privacy-policy"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/30 text-white text-sm hover:bg-white/10 transition-colors"
                >
                  Privacy Policy
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
