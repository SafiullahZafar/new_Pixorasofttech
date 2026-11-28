import { getCaseStudyMetadata } from "@/lib/case-study-metadata";
import CaseStudyStructuredData from "@/components/seo/CaseStudyStructuredData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyStateCollege from "@/components/case-study/state_college/CaseStudyStateCollege";
import { projects } from "@/lib/projects";

export const metadata = getCaseStudyMetadata("state-college");

export default function StateCollegeCaseStudyPage() {
  const project = projects.find((item) => item.id === "state-college");

  return (
    <>
      <CaseStudyStructuredData slug="state-college" />
      <Navbar />
      <main>
        <CaseStudyStateCollege project={project} />
      </main>
      <Footer />
    </>
  );
}
