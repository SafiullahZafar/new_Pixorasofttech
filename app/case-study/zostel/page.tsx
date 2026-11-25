import { getCaseStudyMetadata } from "@/lib/case-study-metadata";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyZostel from "@/components/case-study/zostel/CaseStudyZostel";
import { projects } from "@/lib/projects";

export const metadata = getCaseStudyMetadata("zostel");

export default function ZostelCaseStudyPage() {
  const project = projects.find((item) => item.id === "zostel");

  return (
    <>
      <Navbar />
      <main>
        <CaseStudyZostel project={project} />
      </main>
      <Footer />
    </>
  );
}
