import { getCaseStudyMetadata } from "@/lib/case-study-metadata";
import CaseStudyStructuredData from "@/components/seo/CaseStudyStructuredData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudySolarSolutions from "@/components/case-study/solar_solutions/CaseStudySolarSolutions";
import { projects } from "@/lib/projects";

export const metadata = getCaseStudyMetadata("solar-solutions");

export default function SolarSolutionsCaseStudyPage() {
  const project = projects.find((item) => item.id === "solar-solutions");

  return (
    <>
      <CaseStudyStructuredData slug="solar-solutions" />
      <Navbar />
      <main>
        <CaseStudySolarSolutions project={project} />
      </main>
      <Footer />
    </>
  );
}
