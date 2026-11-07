import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyKBExports from "@/components/case-study/kb_exports/CaseStudyKBExports";
import { projects } from "@/lib/projects";

export default function KBExportsCaseStudyPage() {
  const project = projects.find((item) => item.id === "kb-exports");

  return (
    <>
      <Navbar />
      <main>
        <CaseStudyKBExports project={project} />
      </main>
      <Footer />
    </>
  );
}
