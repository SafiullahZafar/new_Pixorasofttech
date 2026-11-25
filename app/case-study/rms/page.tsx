import { getCaseStudyMetadata } from "@/lib/case-study-metadata";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyInventory from "@/components/case-study/inventory/CaseStudyInventory";
import { projects } from "@/lib/projects";

export const metadata = getCaseStudyMetadata("rms");

export default function RMSCaseStudyPage() {
  const project = projects.find((item) => item.id === "inventory");

  return (
    <>
      <Navbar />
      <main>
        <CaseStudyInventory project={project} />
      </main>
      <Footer />
    </>
  );
}
