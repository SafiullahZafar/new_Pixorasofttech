import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* ── Compression ── */
  compress: true,

  /* ── Image Optimization ── */
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
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
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          // Performance
          { key: "Vary", value: "Accept-Encoding" },
        ],
      },
      {
        // Long-cache for static assets
        source: "/(.*)\\.(ico|png|jpg|jpeg|svg|webp|avif|woff2|woff|ttf)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
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

  /* ── Redirects (www canonical) ── */
  async redirects() {
    return [
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
      {
        source: "/About",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/Team",
        destination: "/team",
        permanent: true,
      },
      // Uncomment when deployed to redirect non-www to www
      // {
      //   source: "/:path*",
      //   has: [{ type: "host", value: "pixorasofttech.com" }],
      //   destination: "https://www.pixorasofttech.com/:path*",
      //   permanent: true,
      // },
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
