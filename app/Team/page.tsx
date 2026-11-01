import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import StartAnimation from "@/components/StartAnimation";
import TeamHero from "@/components/TeamHero";
import TeamSplineSection from "@/components/TeamSplineSection";

export const metadata: Metadata = {
  title: "Team & Technology | PixoraSoftTech",
  description:
    "Meet the approach and technology behind PixoraSoftTech: strategy, product engineering, and scalable digital systems built for growth.",
  alternates: {
    canonical: "https://pixorasofttech.com/Team",
  },
};

export default function TeamPage() {
  return (
    <>
      <BackgroundAnimation className="fixed inset-0 z-0 h-screen w-full" />
      <Navbar />
      <StartAnimation />
      <main className="relative z-10">
        <TeamHero />
        <TeamSplineSection />
        <section className="px-5 py-12 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto flex max-w-[1800px] flex-col gap-6 rounded-3xl bg-[#0A2540] px-6 py-9 text-white sm:px-10 sm:py-12 lg:flex-row lg:items-end lg:justify-between lg:px-14 lg:py-14">
            <div className="max-w-3xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                Build with us
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                Bring your next idea to the team.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                Tell us what you&apos;re working on and we&apos;ll help map the right people, tools, and next steps.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#0A2540] transition hover:-translate-y-0.5 hover:bg-blue-50"
            >
              Start a conversation <ArrowUpRight aria-hidden="true" className="ml-2 size-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
