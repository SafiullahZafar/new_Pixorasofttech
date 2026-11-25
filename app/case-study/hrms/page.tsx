import { getCaseStudyMetadata } from "@/lib/case-study-metadata";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyHRMS from "@/components/case-study/hrms/CaseStudyHRMS";
import { projects } from "@/lib/projects";

export const metadata = getCaseStudyMetadata("hrms");

export default function HRMSCaseStudyPage() {
  const project = projects.find((item) => item.id === "hrms");

  return (
    <>
      <Navbar />
      <main>
        <CaseStudyHRMS project={project} />
      </main>
      <Footer />
    </>
  );
}
