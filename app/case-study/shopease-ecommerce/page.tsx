import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyShopEase from "@/components/case-study/shopease_ecommerce/CaseStudyShopEase";
import { projects } from "@/lib/projects";

export default function ShopEaseCaseStudyPage() {
  const project = projects.find((item) => item.id === "shopease-ecommerce");

  return (
    <>
      <Navbar />
      <main>
        <CaseStudyShopEase project={project} />
      </main>
      <Footer />
    </>
  );
}
