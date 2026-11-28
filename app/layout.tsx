import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

// Fonts
const outfit = localFont({
  src: "../public/fonts/outfit-latin.woff2",
  variable: "--font-outfit",
  display: "swap",
  weight: "400 800",
  preload: true,
});

const inter = localFont({
  src: "../public/fonts/inter-latin.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "400 600",
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
    template: "%s | PixoraSoftTech",
  },
  description: siteDescription,
  authors: [{ name: "PixoraSoftTech", url: siteUrl }],
  creator: "PixoraSoftTech",
  publisher: "PixoraSoftTech",
  category: "technology",
  applicationName: "PixoraSoftTech",
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
    siteName: "PixoraSoftTech",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "PixoraSoftTech - Premium Software & Web Development",
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
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "1024x1024" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
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
    { media: "(prefers-color-scheme: dark)", color: "#0A2540" },
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
      email: "contact@pixorasofttech.com",
      telephone: "+92-309-4307701",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: "+92-309-4307701",
        email: "contact@pixorasofttech.com",
        availableLanguage: ["English", "Urdu"],
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Faisalabad",
        addressCountry: "PK",
      },
      sameAs: [
        "https://twitter.com/pixorasofttech",
        "https://www.linkedin.com/company/pixorasofttech",
        "https://www.instagram.com/pixorasofttech",
      ],
      foundingDate: "2024",
      areaServed: "Worldwide",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "PixoraSoftTech",
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
        className={`${outfit.variable} ${inter.variable} font-sans bg-[#F5F5F5] text-black antialiased overflow-x-hidden`}
        suppressHydrationWarning
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-FM3VL59ZM1" />
    </html>
  );
}
