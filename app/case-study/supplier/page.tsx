import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudySupplier from "@/components/case-study/supplier/CaseStudySupplier";
import { projects } from "@/lib/projects";

export default function SupplierCaseStudyPage() {
  const project = projects.find((item) => item.id === "supplier");

  return (
    <>
      <Navbar />
      <main>
        <CaseStudySupplier project={project} />
      </main>
      <Footer />
    </>
  );
}
