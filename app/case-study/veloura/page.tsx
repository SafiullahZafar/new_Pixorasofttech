import { getCaseStudyMetadata } from "@/lib/case-study-metadata";
import CaseStudyStructuredData from "@/components/seo/CaseStudyStructuredData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyVeloura from "@/components/case-study/veloura_app/CaseStudyVeloura";
import { projects } from "@/lib/projects";

export const metadata = getCaseStudyMetadata("veloura");

export default function VelouraCaseStudyPage() {
  const project = projects.find((item) => item.id === "veloura");

  return (
    <>
      <CaseStudyStructuredData slug="veloura" />
      <Navbar />
      <main>
        <CaseStudyVeloura project={project} />
      </main>
      <Footer />
    </>
  );
}
