import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyInventory from "@/components/case-study/inventory/CaseStudyInventory";
import { projects } from "@/lib/projects";

export default function MessengerCaseStudyPage() {
  const project = projects.find((item) => item.id === "inventory");

  return (
    <>
      <Navbar />
      <main>
        <CaseStudyInventory project={project} />
      </main>
      <Footer />
    </>
  );
}
