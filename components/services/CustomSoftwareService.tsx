import type { ServiceDetail } from "@/lib/service-details";
import CustomSoftwarePage from "./custom_software/CustomSoftwarePage";

export default function CustomSoftwareService({
  service,
}: {
  service: ServiceDetail;
}) {
  return <CustomSoftwarePage service={service} />;
}
