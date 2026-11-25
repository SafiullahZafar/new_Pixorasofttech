import { getCaseStudyMetadata } from "@/lib/case-study-metadata";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyDeliveryDashboard from "@/components/case-study/delivery_dashboard/CaseStudyDeliveryDashboard";
import { projects } from "@/lib/projects";

export const metadata = getCaseStudyMetadata("delivery-dashboard");

export default function DeliveryDashboardCaseStudyPage() {
  const project = projects.find((item) => item.id === "dom");

  return (
    <>
      <Navbar />
      <main>
        <CaseStudyDeliveryDashboard project={project} />
      </main>
      <Footer />
    </>
  );
}
