import type { ServiceDetail } from "@/lib/service-details";
import UIUXPage from "./ui_ux/UIUXPage";

export default function UIUXService({ service }: { service: ServiceDetail }) {
  return <UIUXPage service={service} />;
}
