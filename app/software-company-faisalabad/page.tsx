import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Software Company in Faisalabad | PixoraSoftTech",
  description:
    "PixoraSoftTech is a Faisalabad-based software team building websites, mobile apps, and custom business systems for local and international teams.",
  alternates: { canonical: "https://pixorasofttech.com/software-company-faisalabad" },
};

const services = [
  ["Business software", "Custom dashboards, point-of-sale workflows, inventory tools, and internal applications shaped around how your team works."],
  ["Web development", "Responsive websites and portals that make services, products, and customer tasks clear across devices."],
  ["Mobile applications", "Cross-platform apps for customer journeys, field teams, ordering, and everyday business operations."],
];

export default function FaisalabadSoftwareCompanyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white px-5 pb-24 pt-32 text-[#111] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">Faisalabad, Pakistan</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">
            Software development for businesses in Faisalabad.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            PixoraSoftTech works from Faisalabad with teams building digital products for local and international users. We help plan and develop websites, mobile apps, and business software around the workflows they need to support.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {services.map(([title, text]) => (
              <section key={title} className="rounded-2xl border border-slate-200 p-6 sm:p-7">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </section>
            ))}
          </div>

          <section className="mt-12 max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight">A clear way to start</h2>
            <p className="mt-3 leading-7 text-slate-600">
              We begin by discussing your users, current process, requirements, and constraints. Together we define a practical first release, agree on milestones, and keep reviews connected to working software as development progresses.
            </p>
          </section>

          <Link href="/contact" className="mt-9 inline-flex rounded-xl bg-[#0A2540] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#143960]">
            Contact our Faisalabad team
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
