import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePagesAnimation from "@/components/servicepagesanimtion";
import ServiceDetail from "@/components/services/ServiceDetail";
import CustomSoftwareService from "@/components/services/CustomSoftwareService";
import WebDevelopmentService from "@/components/services/WebDevelopmentService";
import SaaSDevelopmentService from "@/components/services/SaaSDevelopmentService";
import MobileAppDevelopmentService from "@/components/services/MobileAppDevelopmentService";
import UIUXService from "@/components/services/UIUXService";
import { getServiceDetail, serviceDetails } from "@/lib/service-details";

export function generateStaticParams() {
  return serviceDetails.map((service) => ({ slug: service.slug }));
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
            : <ServiceDetail service={service} />;

  return (
    <>
      <ServicePagesAnimation className="fixed inset-0 z-0 h-screen w-full pointer-events-none" />
      <Navbar />
      <div className="relative z-10">
        {content}
      </div>
      <Footer />
    </>
  );
}
