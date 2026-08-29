import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceDetail from "@/components/services/ServiceDetail";
import { getServiceDetail, serviceDetails } from "@/lib/service-details";

export function generateStaticParams() {
  return serviceDetails.map((service) => ({ slug: service.slug }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceDetail(slug);

  if (!service) notFound();

  return <><Navbar /><ServiceDetail service={service} /><Footer /></>;
}
