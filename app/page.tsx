import Navbar from "@/components/Navbar";
import StartAnimation from "@/components/StartAnimation";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import Hero from "@/components/Hero";
import OurWork from "@/components/OurWork";
import WhoWeAre from "@/components/WhoWeAre";
import Services from "@/components/Services";
import Process from "@/components/Process";
import TechLeverage from "@/components/TechLeverage";
import GlobalNetwork from "@/components/GlobalNetwork";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Full-Page Background Wave Shader */}
      <BackgroundAnimation />

      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[#0A2540] focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>

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

        {/* 8. Our Global Network */}
        <GlobalNetwork />

        {/* 9. Client Reviews & Testimonials Marquee */}
        <Testimonials />

        {/* 10. FAQ Accordion */}
        <FAQ />
      </main>

      {/* 9. Dark Studio Footer */}
      <Footer />
    </>
  );
}
