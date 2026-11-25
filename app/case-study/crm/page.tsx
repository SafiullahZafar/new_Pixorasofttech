import { getCaseStudyMetadata } from "@/lib/case-study-metadata";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyCRM from "@/components/case-study/crm/CaseStudyCRM";
import { projects } from "@/lib/projects";

export const metadata = getCaseStudyMetadata("crm");

export default function CRMCaseStudyPage() {
  const project = projects.find((item) => item.id === "crm");

  return (
    <>
      <Navbar />
      <main>
        <CaseStudyCRM project={project} />
      </main>
      <Footer />
    </>
  );
}
