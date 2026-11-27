import type { NextConfig } from "next";

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
    ];
  },

  /* ── Dev network origins (allows LAN IP HMR WebSocket) ── */
  allowedDevOrigins: ["192.168.1.10"],

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
