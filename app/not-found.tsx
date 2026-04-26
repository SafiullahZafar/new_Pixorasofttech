import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | PIXORASOFTTECH",
  description: "The page you are looking for does not exist. Return to the PIXORASOFTTECH homepage.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#030014] text-white px-6 overflow-hidden"
      aria-label="Page not found"
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/10 blur-[130px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      {/* 404 number */}
      <p className="text-[120px] sm:text-[180px] font-extrabold leading-none tracking-tighter mb-0"
        style={{
          background: "linear-gradient(135deg, #8b5cf6 0%, #a78bfa 40%, #ec4899 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
        aria-hidden="true"
      >
        404
      </p>

      <h1 className="text-2xl sm:text-3xl font-bold text-white/90 mb-4 text-center">
        Page Not Found
      </h1>

      <p className="text-white/45 text-base sm:text-lg max-w-md text-center leading-relaxed font-light mb-10">
        Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back on track.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-white font-semibold text-base hover:bg-violet-500 active:scale-95 transition-all duration-200 shadow-xl shadow-primary/30"
        >
          Go Home
        </Link>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold text-base active:scale-95 transition-all duration-200 border border-white/10"
          style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(16px)" }}
        >
          Contact Us
        </Link>
      </div>
    </main>
  );
}
