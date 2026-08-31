import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

// Fonts
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800"],
  preload: true,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  preload: false,
});

// Site config
const siteUrl = "https://pixorasofttech.com";
const siteTitle = "PixoraSoftTech | Web Design, App Development & Software Solutions";
const siteDescription =
  "Transform your business with expert Web Design, App Development, and Software solutions. We build your digital future — PixoraSoftTech.";

// Metadata
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
        alt: "PIXORASOFTTECH - Premium Software & Web Development",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@pixorasofttech",
    creator: "@pixorasofttech",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-US": siteUrl,
    },
  },
  icons: {
    icon: [
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-96.png", type: "image/png", sizes: "96x96" },
      { url: "/icon-48.png", type: "image/png", sizes: "48x48" },
    ],
    shortcut: "/icon-192.png",
    apple: "/icon-192.png",
  },
  manifest: "/manifest.webmanifest",
  verification: {
    google: "jFIGguaSizlS7DWwWkXSHOAFtkeuXPzG_Jm4Ynh-i_k",
  },
};

// Viewport
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)",  color: "#ffffff" },
  ],
};

// JSON-LD
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
        url: `${siteUrl}/logo.png`,
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
      areaServed: "Worldwide",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "PIXORASOFTTECH",
      description: siteDescription,
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-US",
    },
  ],
};

// Root Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//api.web3forms.com" />
      </head>
      <body
        className={`${outfit.variable} ${inter.variable} font-sans bg-white text-[#0f172a] antialiased overflow-x-hidden`}
        suppressHydrationWarning
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-FM3VL59ZM1" />
    </html>
  );
}
