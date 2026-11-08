import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyGoodySupplies from "@/components/case-study/goody_supplies/CaseStudyGoodySupplies";
import { projects } from "@/lib/projects";

export default function GoodySuppliesCaseStudyPage() {
  const project = projects.find((item) => item.id === "goody-supplies");

  return (
    <>
      <Navbar />
      <main>
        <CaseStudyGoodySupplies project={project} />
      </main>
      <Footer />
    </>
  );
}
