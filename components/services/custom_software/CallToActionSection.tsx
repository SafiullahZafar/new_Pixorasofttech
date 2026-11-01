import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CallToActionSection() {
  return (
    <section className="px-5 pb-16 sm:px-8 sm:pb-24 lg:px-14">
      <div className="mx-auto flex max-w-[1800px] flex-col gap-7 rounded-[1.5rem] bg-[#0A2540] px-6 py-9 text-white sm:rounded-[2rem] sm:px-10 sm:py-12 lg:flex-row lg:items-end lg:justify-between lg:px-14 lg:py-14">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
            Have a project in mind?
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.045em] sm:text-5xl">
            Let&apos;s build something useful.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Tell us what is slowing your team down. We can help you shape the
            next step.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0A2540] transition hover:-translate-y-0.5 hover:bg-blue-50"
        >
          Talk to our team
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
      </div>
    </section>
  );
}
