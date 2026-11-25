import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import ProjectAnimation from "@/components/portfolio/ProjectAnimation";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import PortfolioCTA from "@/components/portfolio/PortfolioCTA";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore selected web, mobile, and software projects built with PixoraSoftTech for businesses and product teams.",
  alternates: {
    canonical: "https://pixorasofttech.com/projects",
  },
  openGraph: {
    type: "website",
    url: "https://pixorasofttech.com/projects",
    title: "Projects | PixoraSoftTech",
    description:
      "Explore selected web, mobile, and software projects built with PixoraSoftTech for businesses and product teams.",
  },
};

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
