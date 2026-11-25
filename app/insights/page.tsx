import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Product Engineering Insights | PixoraSoftTech",
  description:
    "Practical notes on planning business software, choosing a technology stack, and preparing a digital product for launch.",
  alternates: { canonical: "https://pixorasofttech.com/insights" },
};

const insights = [
  {
    number: "01",
    title: "Scope the workflow before choosing the stack",
    text: "Start with the people who will use the product and the work they need to complete. Map the current process, identify handoffs and exceptions, and decide which tasks belong in the first release. A clear workflow makes it easier to choose the right architecture and avoid building features that do not support the core job.",
  },
  {
    number: "02",
    title: "Choose software that your team can operate",
    text: "A technology choice affects maintenance, hosting, integrations, and the skills needed after launch. Compare options against the system requirements and the team that will support them. For example, Laravel can support business applications and APIs, while Flutter can deliver a shared mobile app codebase. The right choice depends on the product, not a trend list.",
  },
  {
    number: "03",
    title: "Make the first release useful and measurable",
    text: "Define what the first release must let a user do, then decide how you will observe whether that flow works. Useful checks may include task completion, support requests, error logs, or feedback from a small pilot. Agree on the measurement before launch so later improvements use real product evidence rather than assumptions.",
  },
];

export default function InsightsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white px-5 pb-24 pt-32 text-[#111] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">Insights</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">
            Practical thinking for digital products.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Short guides from our product engineering work, focused on decisions teams can make before and during development.
          </p>

          <div className="mt-14 divide-y divide-slate-200 border-y border-slate-200">
            {insights.map((insight) => (
              <article key={insight.number} className="grid gap-4 py-8 sm:grid-cols-[5rem_1fr] sm:gap-8 sm:py-10">
                <span className="font-mono text-sm text-slate-400">{insight.number}</span>
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{insight.title}</h2>
                  <p className="mt-4 max-w-3xl leading-7 text-slate-600">{insight.text}</p>
                </div>
              </article>
            ))}
          </div>

          <Link href="/contact" className="mt-10 inline-flex rounded-xl bg-[#0A2540] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#143960]">
            Discuss a project
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
