import { getCaseStudyMetadata } from "@/lib/case-study-metadata";
import CaseStudyStructuredData from "@/components/seo/CaseStudyStructuredData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyKBExports from "@/components/case-study/kb_exports/CaseStudyKBExports";
import { projects } from "@/lib/projects";

export const metadata = getCaseStudyMetadata("kb-exports");

export default function KBExportsCaseStudyPage() {
  const project = projects.find((item) => item.id === "kb-exports");

  return (
    <>
      <CaseStudyStructuredData slug="kb-exports" />
      <Navbar />
      <main>
        <CaseStudyKBExports project={project} />
      </main>
      <Footer />
    </>
  );
}
