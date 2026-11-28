import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePagesAnimation from "@/components/servicepagesanimtion";
import ServiceDetail from "@/components/services/ServiceDetail";
import CustomSoftwareService from "@/components/services/CustomSoftwareService";
import WebDevelopmentService from "@/components/services/WebDevelopmentService";
import SaaSDevelopmentService from "@/components/services/SaaSDevelopmentService";
import MobileAppDevelopmentService from "@/components/services/MobileAppDevelopmentService";
import UIUXService from "@/components/services/UIUXService";
import CloudAISolutionsService from "@/components/services/CloudAISolutionsService";
import { getServiceDetail, serviceDetails } from "@/lib/service-details";
import JsonLd from "@/components/seo/JsonLd";

const siteUrl = "https://pixorasofttech.com";

export function generateStaticParams() {
  return serviceDetails.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceDetail(slug);
  if (!service) return {};

  const title = service.title;
  const description = service.intro;
  const canonical = `${siteUrl}/services/${service.slug}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description,
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      site: "@pixorasofttech",
      creator: "@pixorasofttech",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceDetail(slug);

  if (!service) notFound();

  const content = service.slug === "custom-software-development"
    ? <CustomSoftwareService service={service} />
    : service.slug === "website-development"
      ? <WebDevelopmentService service={service} />
      : service.slug === "saas-development"
        ? <SaaSDevelopmentService service={service} />
        : service.slug === "mobile-app-development"
          ? <MobileAppDevelopmentService service={service} />
          : service.slug === "ui-ux-design"
            ? <UIUXService service={service} />
            : service.slug === "cloud-solutions"
              ? <CloudAISolutionsService service={service} />
              : <ServiceDetail service={service} />;

  const canonical = `${siteUrl}/services/${service.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${canonical}#service`,
        name: service.title,
        serviceType: service.title,
        description: service.intro,
        url: canonical,
        provider: { "@id": `${siteUrl}/#organization` },
      },
      {
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
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: canonical,
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={structuredData} />
      <ServicePagesAnimation className="fixed inset-0 z-0 h-screen w-full pointer-events-none" />
      <Navbar />
      <div className="relative z-10">
        {content}
      </div>
      <Footer />
    </>
  );
}
