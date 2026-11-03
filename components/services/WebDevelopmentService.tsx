import type { ServiceDetail } from "@/lib/service-details";
import WebDevelopmentPage from "./web_development/WebDevelopmentPage";

export default function WebDevelopmentService({ service }: { service: ServiceDetail }) {
  return <WebDevelopmentPage service={service} />;
}
