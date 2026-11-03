import type { ServiceDetail } from "@/lib/service-details";
import SaaSDevelopmentPage from "./saas_development/SaaSDevelopmentPage";

export default function SaaSDevelopmentService({ service }: { service: ServiceDetail }) {
  return <SaaSDevelopmentPage service={service} />;
}
