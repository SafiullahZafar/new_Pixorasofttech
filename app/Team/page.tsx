import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import StartAnimation from "@/components/StartAnimation";
import WhoWeAre from "@/components/WhoWeAre";
import TechLeverage from "@/components/TechLeverage";

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
        <section className="flex min-h-[clamp(680px,82svh,1120px)] items-center px-5 pb-[clamp(4rem,8vh,8rem)] pt-[clamp(7.25rem,11.5vh,11.5rem)] sm:px-8 lg:px-12 2xl:px-[clamp(3rem,5vw,9rem)]">
          <div className="mx-auto w-full max-w-[2400px] text-center">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#0A2540]/65 sm:mb-6 sm:text-sm xl:mb-8">
              Team &amp; Technology
            </p>
            <h1 className="mx-auto max-w-[1600px] text-balance text-[clamp(2.7rem,6vw,9rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-[#111]">
              The people and technology behind what&apos;s next.
            </h1>
            <p className="mx-auto mt-6 max-w-[54rem] text-balance text-[clamp(1.05rem,1.15vw,1.4rem)] leading-[1.7] text-black/60 sm:mt-8 lg:mt-9 2xl:mt-10">
              We bring product strategy, engineering, and modern technology together to build dependable digital products—from the first idea through launch and beyond.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3 sm:mt-8 sm:gap-4 lg:mt-9">
              <Link
                href="#who-we-are"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#0A2540] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#143960]"
              >
                How we work <ArrowDown aria-hidden="true" className="size-4" />
              </Link>
              <Link
                href="#tech-leverage"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/15 bg-white/50 px-6 py-3 text-sm font-semibold text-[#111] transition hover:bg-white/80"
              >
                Explore our technology <ArrowUpRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </div>
        </section>
        <WhoWeAre />
        <TechLeverage />
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
