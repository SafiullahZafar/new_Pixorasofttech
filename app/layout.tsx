import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

/* ─── Fonts ──────────────────────────────────────────────── */
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  // Only preload the weights actually used on first paint
  weight: ["400", "600", "700", "800"],
  preload: true,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  // Don't preload Inter — Outfit is the primary display font
  preload: false,
});

/* ─── Site Config ────────────────────────────────────────── */
const siteUrl = "https://www.pixorasofttech.com";
const siteTitle = "PIXORASOFTTECH — Premium Software, Web & Mobile Development";
const siteDescription =
  "PixoraSoftTech delivers premium web development, mobile app development, custom software solutions, UI/UX design, cybersecurity, and cloud services. Transform your vision into reality.";

/* ─── Metadata ───────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | PIXORASOFTTECH",
  },
  description: siteDescription,
  keywords: [
    "software development company",
    "web development",
    "mobile app development",
    "custom software solutions",
    "UI/UX design",
    "cybersecurity services",
    "cloud services",
    "React development",
    "Next.js development",
    "PixoraSoftTech",
    "Pakistan software company",
    "enterprise software",
    "full stack development",
  ],
  authors: [{ name: "PixoraSoftTech", url: siteUrl }],
  creator: "PixoraSoftTech",
  publisher: "PixoraSoftTech",
  category: "technology",
  applicationName: "PIXORASOFTTECH",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  /* ── Open Graph ── */
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "PIXORASOFTTECH",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PIXORASOFTTECH — Premium Software & Web Development",
        type: "image/png",
      },
    ],
  },
  /* ── Twitter / X ── */
  twitter: {
    card: "summary_large_image",
    site: "@pixorasofttech",
    creator: "@pixorasofttech",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
  },
  /* ── Canonical & alternates ── */
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-US": siteUrl,
    },
  },
  /* ── Icons (only reference files that exist in /public) ── */
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    shortcut: "/favicon.ico",
  },
  /* ── Manifest (PWA) ── */
  manifest: "/manifest.webmanifest",
  /* ── Verification ── */
  verification: {
    google: "jFIGguaSizlS7DWwWkXSHOAFtkeuXPzG_Jm4Ynh-i_k",
  },
};

/* ─── Viewport ───────────────────────────────────────────── */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#030014" },
    { media: "(prefers-color-scheme: light)", color: "#030014" },
  ],
};

/* ─── JSON-LD Structured Data ────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "PixoraSoftTech",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/favicon.ico`,
      },
      description: siteDescription,
      email: "pixorasofttech@gmail.com",
      telephone: "+92-309-4307701",
      address: {
        "@type": "PostalAddress",
        addressCountry: "PK",
      },
      sameAs: [
        "https://twitter.com/pixorasofttech",
        "https://www.linkedin.com/company/pixorasofttech",
        "https://github.com/pixorasofttech",
        "https://www.instagram.com/pixorasofttech",
      ],
      foundingDate: "2024",
      numberOfEmployees: { "@type": "QuantitativeValue", value: "50" },
      areaServed: "Worldwide",
      serviceType: [
        "Web Development",
        "Mobile App Development",
        "Custom Software Solutions",
        "UI/UX Design",
        "Cybersecurity",
        "Cloud Services",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "PIXORASOFTTECH",
      description: siteDescription,
      publisher: { "@id": `${siteUrl}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${siteUrl}/?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: siteTitle,
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
      description: siteDescription,
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
        ],
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: "PixoraSoftTech Software Development",
      serviceType: "Software Development",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Software Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Web Development" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Mobile App Development" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Custom Software Solutions" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "UI/UX Design" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Cybersecurity" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Cloud Services" },
          },
        ],
      },
    },
  ],
};

/* ─── Root Layout ────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preload key web3forms for contact form */}
        <link rel="dns-prefetch" href="//api.web3forms.com" />
      </head>
      <body
        className={`${outfit.variable} ${inter.variable} font-sans bg-[#030014] text-white antialiased selection:bg-purple-500/30 overflow-x-hidden`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
