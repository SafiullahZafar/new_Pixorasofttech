import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import StartAnimation from "@/components/StartAnimation";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import Hero from "@/components/Hero";
import OurWork from "@/components/OurWork";
import WhoWeAre from "@/components/WhoWeAre";
import Services from "@/components/Services";
import Process from "@/components/Process";
import TechLeverage from "@/components/TechLeverage";
import ClientLogoSection from "@/components/ClientLogoSection";
import GlobalNetwork from "@/components/GlobalNetwork";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Web Design, App Development & Software Solutions",
  description:
    "PixoraSoftTech designs and builds websites, mobile apps, and business software for teams turning ideas into useful digital products.",
  alternates: { canonical: "https://pixorasofttech.com/" },
  openGraph: {
    type: "website",
    url: "https://pixorasofttech.com/",
    title: "PixoraSoftTech | Web Design, App Development & Software Solutions",
    description:
      "PixoraSoftTech designs and builds websites, mobile apps, and business software for teams turning ideas into useful digital products.",
  },
};

export default function Home() {
  return (
    <>
      {/* Full-Page Background Wave Shader */}
      <BackgroundAnimation />

      {/* 1. Floating Studio Header / Navbar */}
      <Navbar />

      {/* Intro overlay is a root-level sibling so its z-index can cover the navbar. */}
      <StartAnimation />

      <main id="home" role="main" className="relative z-10 min-h-screen bg-transparent">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Selected Works & Digital Experiences (Projects) */}
        <OurWork />

        {/* 4. Who We Are */}
        <WhoWeAre />

        {/* 5. Services (Sticky Stacking Cards S/001 - S/004) */}
        <Services />

        {/* 6. FLOW (Process with staircase progress) */}
        <Process />

        {/* 7. For Companies With Tech Leverage */}
        <TechLeverage />

        {/* Client logo orbit */}
        <ClientLogoSection />

        {/* 8. Our Global Network */}
        <GlobalNetwork />

           {/* 9. Client Reviews & Testimonials Marquee */}
        <Testimonials />

        {/* 9. FAQ Accordion */}
        <FAQ />
      </main>

      {/* 9. Dark Studio Footer */}
      <Footer />
    </>
  );
}
// import type { Metadata } from "next";
