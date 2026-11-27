import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PortfolioCTA() {
  return (
    <section className="px-5 py-12 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto flex max-w-[1800px] flex-col gap-6 rounded-3xl bg-[#0A2540] px-6 py-9 text-white sm:px-10 sm:py-12 lg:flex-row lg:items-end lg:justify-between lg:px-14 lg:py-14">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
            Let&apos;s Talk
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            Have a project in mind?
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Whether it is a full product or a single creative asset, we would love to hear about it.
          </p>
        </div>
        <div className="flex flex-col gap-3 lg:flex-row lg:shrink-0">
          <Link
            href="/contact"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#0A2540] transition hover:-translate-y-0.5 hover:bg-blue-50"
          >
            Start a project <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
          <Link
            href="/services"
            className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
          >
            Explore services
          </Link>
        </div>
      </div>
    </section>
  );
}
