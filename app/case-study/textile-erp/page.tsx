import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyTextileERP from "@/components/case-study/textile_erp/CaseStudyTextileERP";
import { projects } from "@/lib/projects";

export default function TextileERPCaseStudyPage() {
  const project = projects.find((item) => item.id === "lms");

  return (
    <>
      <Navbar />
      <main>
        <CaseStudyTextileERP project={project} />
      </main>
      <Footer />
    </>
  );
}
