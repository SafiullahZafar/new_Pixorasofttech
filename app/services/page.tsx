import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesProcess from "@/components/services/ServicesProcess";
import ServicesEngagement from "@/components/services/ServicesEngagement";
import ServicesCTA from "@/components/services/ServicesCTA";
import JsonLd from "@/components/seo/JsonLd";

const siteUrl = "https://pixorasofttech.com";

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
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@pixorasofttech",
    creator: "@pixorasofttech",
    title: "Services | PixoraSoftTech",
    description:
      "Explore PixoraSoftTech services for website development, mobile apps, SaaS, custom software, UI and UX, and cloud solutions.",
    images: ["/opengraph-image"],
  },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: siteUrl,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Services",
              item: `${siteUrl}/services`,
            },
          ],
        }}
      />
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
