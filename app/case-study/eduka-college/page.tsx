import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyEdukaCollege from "@/components/case-study/eduka_college/CaseStudyEdukaCollege";
import { projects } from "@/lib/projects";

export default function EdukaCollegeCaseStudyPage() {
  const project = projects.find((item) => item.id === "eduka-college");

  return (
    <>
      <Navbar />
      <main>
        <CaseStudyEdukaCollege project={project} />
      </main>
      <Footer />
    </>
  );
}
