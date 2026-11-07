import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyRiderApp from "@/components/case-study/rider_app/CaseStudyRiderApp";
import { projects } from "@/lib/projects";

export default function RiderAppCaseStudyPage() {
  const project = projects.find((item) => item.id === "rider-app");

  return (
    <>
      <Navbar />
      <main>
        <CaseStudyRiderApp project={project} />
      </main>
      <Footer />
    </>
  );
}
