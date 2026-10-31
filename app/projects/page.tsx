import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import ProjectAnimation from "@/components/portfolio/ProjectAnimation";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import PortfolioCTA from "@/components/portfolio/PortfolioCTA";

export default function PortfolioPage() {
  return (
    <>
      <BackgroundAnimation className="pointer-events-none fixed inset-0 z-0 h-screen w-full" />
      <Navbar />
      <main className="relative z-10 bg-transparent">
        <PortfolioHero />
        <ProjectAnimation />
        <PortfolioGrid />
        <PortfolioCTA />
      </main>
      <Footer />
    </>
  );
}
