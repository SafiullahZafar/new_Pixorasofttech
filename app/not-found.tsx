import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found | PixoraSoftTech",
  description: "The page you are looking for does not exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50/60 to-white flex flex-col items-center justify-center px-6 text-center">
      {/* 404 number */}
      <p className="text-[120px] sm:text-[160px] font-extrabold leading-none tracking-tighter text-blue-100 select-none mb-0">
        404
      </p>

      <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 -mt-4">
        Page Not Found
      </h1>

      <p className="text-slate-500 text-base max-w-sm mx-auto leading-relaxed mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
      </p>

      <div className="flex flex-wrap gap-3 justify-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition shadow-md shadow-blue-100"
        >
          <Home className="w-4 h-4" />
          Go Home
        </Link>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:border-blue-200 hover:text-blue-600 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          View Portfolio
        </Link>
      </div>
    </main>
  );
}
