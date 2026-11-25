import { getCaseStudyMetadata } from "@/lib/case-study-metadata";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyCateringApp from "@/components/case-study/catering_app/CaseStudyCateringApp";
import { projects } from "@/lib/projects";

export const metadata = getCaseStudyMetadata("catering-app");

export default function CateringAppCaseStudyPage() {
  const project = projects.find((item) => item.id === "catering-app");

  return (
    <>
      <Navbar />
      <main>
        <CaseStudyCateringApp project={project} />
      </main>
      <Footer />
    </>
  );
}
