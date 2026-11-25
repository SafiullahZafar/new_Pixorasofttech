import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Laravel and Flutter Development in Pakistan",
  description:
    "Plan a Laravel business system or Flutter mobile app with PixoraSoftTech, a software development team based in Faisalabad, Pakistan.",
  alternates: { canonical: "https://pixorasofttech.com/laravel-flutter-development-pakistan" },
};

export default function LaravelFlutterPakistanPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white px-5 pb-24 pt-32 text-[#111] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">Faisalabad · Pakistan</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">
            Laravel business systems and Flutter mobile apps.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            Choose the tools to fit the product. Laravel can power business workflows, APIs, and administrative systems; Flutter can support a shared mobile app experience across iOS and Android. We plan the product scope and integrations before selecting an implementation.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <section className="rounded-2xl border border-slate-200 p-7 sm:p-9">
              <h2 className="text-2xl font-semibold">Laravel development</h2>
              <p className="mt-4 leading-7 text-slate-600">
                Build business software around the records and actions your team manages: sales, inventory, appointments, staff, purchasing, and reporting. Define permissions, integrations, and operational needs as part of the system design.
              </p>
              <Link href="/services/custom-software-development" className="mt-6 inline-flex text-sm font-semibold text-blue-700 hover:text-blue-900">
                Explore custom software development
              </Link>
            </section>
            <section className="rounded-2xl border border-slate-200 p-7 sm:p-9">
              <h2 className="text-2xl font-semibold">Flutter development</h2>
              <p className="mt-4 leading-7 text-slate-600">
                Plan mobile flows for customers or staff, including account access, forms, product discovery, booking, and connected service data. Scope device features and backend requirements before implementation.
              </p>
              <Link href="/services/mobile-app-development" className="mt-6 inline-flex text-sm font-semibold text-blue-700 hover:text-blue-900">
                Explore mobile app development
              </Link>
            </section>
          </div>

          <Link href="/contact" className="mt-9 inline-flex rounded-xl bg-[#0A2540] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#143960]">
            Discuss a Laravel or Flutter project
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
