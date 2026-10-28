import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutFocus from "@/components/about/AboutFocus";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutValues";
import Link from "next/link";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import StartAnimation from "@/components/StartAnimation";

export const metadata: Metadata = {
  title: "About PixoraSoftTech | Your Digital Engineering Partner",
  description:
    "Meet PixoraSoftTech: a digital product and software engineering team helping businesses turn ambitious ideas into reliable, scalable solutions.",
  alternates: {
    canonical: "https://pixorasofttech.com/About",
  },
};

export default function AboutPage() {
  return (
    <>
      <BackgroundAnimation className="fixed inset-0 z-0 h-screen w-full" />
      <Navbar />
      <StartAnimation />
      <main className="relative z-10">
        <AboutHero />
        <AboutFocus />
        <AboutStory />
        <AboutValues />
        <section className="bg-transparent px-5 py-12 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto flex max-w-[2200px] flex-col gap-7 rounded-3xl bg-[#0A2540] px-6 py-9 text-white sm:px-10 sm:py-12 lg:flex-row lg:items-end lg:justify-between lg:px-14 lg:py-14">
            <div className="max-w-3xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                Let&apos;s build what&apos;s next
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                Have a project? Let&apos;s start.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                Share your idea with us. We&apos;ll help you plan the right
                solution and build a clear path from concept to launch.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#0A2540] transition hover:-translate-y-0.5 hover:bg-blue-50"
            >
              Start a project <span aria-hidden="true" className="ml-2">↗</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
