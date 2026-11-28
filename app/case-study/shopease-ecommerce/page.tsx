import { getCaseStudyMetadata } from "@/lib/case-study-metadata";
import CaseStudyStructuredData from "@/components/seo/CaseStudyStructuredData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyShopEase from "@/components/case-study/shopease_ecommerce/CaseStudyShopEase";
import { projects } from "@/lib/projects";

export const metadata = getCaseStudyMetadata("shopease-ecommerce");

export default function ShopEaseCaseStudyPage() {
  const project = projects.find((item) => item.id === "shopease-ecommerce");

  return (
    <>
      <CaseStudyStructuredData slug="shopease-ecommerce" />
      <Navbar />
      <main>
        <CaseStudyShopEase project={project} />
      </main>
      <Footer />
    </>
  );
}
