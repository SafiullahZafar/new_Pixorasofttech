import Link from "next/link";
import type { Metadata } from "next";
import { Compass, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found | PixoraSoftTech",
  description: "The page you are looking for does not exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#F5F5F5] px-6 text-center">
      <div className="flex w-full max-w-xl flex-col items-center">
        <header className="flex flex-col items-center">
          <h1 className="mask-b-from-20% mask-b-to-80% text-9xl font-extrabold text-[#0A2540]">
            404
          </h1>
          <p className="-mt-8 text-base text-slate-600">
            The page you&apos;re looking for might have been
            <br className="hidden sm:block" /> moved or doesn&apos;t exist.
          </p>
        </header>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <Link
            href="/"
            className="inline-flex h-10 items-center justify-center rounded-md bg-[#0A2540] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#143960] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2540]"
          >
            <Home aria-hidden="true" className="mr-2 size-4" />
            Go Home
          </Link>
          <Link
            href="/projects"
            className="inline-flex h-10 items-center justify-center rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2540]"
          >
            <Compass aria-hidden="true" className="mr-2 size-4" />
            Explore
          </Link>
        </div>
      </div>
    </main>
  );
}
