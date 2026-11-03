import type { ServiceDetail } from "@/lib/service-details";
import CloudAISolutionsPage from "./cloud_ai_solutions/CloudAISolutionsPage";

export default function CloudAISolutionsService({ service }: { service: ServiceDetail }) {
  return <CloudAISolutionsPage service={service} />;
}
