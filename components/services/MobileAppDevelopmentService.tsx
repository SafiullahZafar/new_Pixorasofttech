import type { ServiceDetail } from "@/lib/service-details";
import MobileAppDevelopmentPage from "./mobile_app_development/MobileAppDevelopmentPage";

export default function MobileAppDevelopmentService({ service }: { service: ServiceDetail }) {
  return <MobileAppDevelopmentPage service={service} />;
}
