import type { NextConfig } from "next";
import { projects } from "./lib/projects";

const projectRedirects = projects.reduce<Record<string, string>>((routes, project) => {
  const destination = `/case-study/${project.caseStudySlug}`;
  routes[project.id] = destination;
  for (const legacyId of project.legacyIds ?? []) {
    routes[legacyId] = destination;
  }
  return routes;
}, {});

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },

  /* ── Compression ── */
  compress: true,

  /* ── Image Optimization ── */
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24,
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: false,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  /* ── HTTP Security & Cache Headers ── */
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Security
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          {
            key: "Content-Security-Policy",
            value: "object-src 'none'; base-uri 'self'; frame-ancestors 'none'",
          },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          // Performance
          { key: "Vary", value: "Accept-Encoding" },
        ],
      },
      {
        // Revalidate public assets so same-name replacements do not stay stale for a year.
        source: "/(.*)\\.(ico|png|jpg|jpeg|svg|webp|avif|woff2|woff|ttf)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=3600",
          },
        ],
      },
      {
        // Sitemap & robots caching
        source: "/(sitemap.xml|robots.txt)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=3600",
          },
        ],
      },
    ];
  },

  /* ── Redirects ── */
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.pixorasofttech.com" }],
        destination: "https://pixorasofttech.com/:path*",
        permanent: true,
      },
      {
        source: "/portfolio",
        destination: "/projects",
        permanent: true,
      },
      {
        source: "/portfolio/:id",
        destination: "/projects/:id",
        permanent: true,
      },
      ...Object.entries(projectRedirects).map(([id, destination]) => ({
        source: `/projects/${id}`,
        destination,
        permanent: true,
      })),
      {
        source: "/catering-app",
        destination: "/case-study/catering-app",
        permanent: true,
      },
      {
        source: "/eduka-college",
        destination: "/case-study/eduka-college",
        permanent: true,
      },
      {
        source: "/glass-haven",
        destination: "/case-study/glass-haven",
        permanent: true,
      },
      {
        source: "/goody-supplies",
        destination: "/case-study/goody-supplies",
        permanent: true,
      },
      {
        source: "/solar-solutions",
        destination: "/case-study/solar-solutions",
        permanent: true,
      },
      {
        source: "/state-college",
        destination: "/case-study/state-college",
        permanent: true,
      },
      {
        source: "/supplier-wholesale-app",
        destination: "/case-study/supplier-wholesale-app",
        permanent: true,
      },
      {
        source: "/travel-hotel-hub",
        destination: "/case-study/travel-hotel-hub",
        permanent: true,
      },
      {
        source: "/zostel",
        destination: "/case-study/zostel",
        permanent: true,
      },
      {
        source: "/case-study/brew-heaven",
        destination: "/case-study/brew-haven",
        permanent: true,
      },
      {
        source: "/case-study/inventory",
        destination: "/case-study/rms",
        permanent: true,
      },
    ];
  },

  /* ── Experimental performance ── */
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },

  /* ── Logging ── */
  logging: {
    fetches: { fullUrl: false },
  },
};

export default nextConfig;
