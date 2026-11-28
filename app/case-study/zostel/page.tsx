import { getCaseStudyMetadata } from "@/lib/case-study-metadata";
import CaseStudyStructuredData from "@/components/seo/CaseStudyStructuredData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyZostel from "@/components/case-study/zostel/CaseStudyZostel";
import { projects } from "@/lib/projects";

export const metadata = getCaseStudyMetadata("zostel");

export default function ZostelCaseStudyPage() {
  const project = projects.find((item) => item.id === "zostel");

  return (
    <>
      <CaseStudyStructuredData slug="zostel" />
      <Navbar />
      <main>
        <CaseStudyZostel project={project} />
      </main>
      <Footer />
    </>
  );
}
