import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesProcess from "@/components/services/ServicesProcess";
import ServicesEngagement from "@/components/services/ServicesEngagement";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore PixoraSoftTech services for website development, mobile apps, SaaS, custom software, UI and UX, and cloud solutions.",
  alternates: { canonical: "https://pixorasofttech.com/services" },
  openGraph: {
    type: "website",
    url: "https://pixorasofttech.com/services",
    title: "Services | PixoraSoftTech",
    description:
      "Explore PixoraSoftTech services for website development, mobile apps, SaaS, custom software, UI and UX, and cloud solutions.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesHero />
        <ServicesGrid />
        <ServicesProcess />
        <ServicesEngagement />
        <ServicesCTA />
      </main>
      <Footer />
    </>
  );
}
import type { Metadata } from "next";
