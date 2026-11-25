import { getCaseStudyMetadata } from "@/lib/case-study-metadata";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudySalon from "@/components/case-study/salon/CaseStudySalon";
import { projects } from "@/lib/projects";

export const metadata = getCaseStudyMetadata("salon");

export default function SalonCaseStudyPage() {
  const project = projects.find((item) => item.id === "salon-pos");

  return (
    <>
      <Navbar />
      <main>
        <CaseStudySalon project={project} />
      </main>
      <Footer />
    </>
  );
}
