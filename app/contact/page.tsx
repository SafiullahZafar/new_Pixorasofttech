import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import ContactSection from "@/components/contact/ContactSection";
import ContactCTA from "@/components/contact/ContactCTA";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Contact | Start a Project",
  description:
    "Contact PixoraSoftTech by email or WhatsApp to discuss a website, mobile app, or business software project.",
  alternates: { canonical: "https://pixorasofttech.com/contact" },
  openGraph: {
    type: "website",
    url: "https://pixorasofttech.com/contact",
    title: "Contact PixoraSoftTech | Start a Project",
    description:
      "Contact PixoraSoftTech by email or WhatsApp to discuss a website, mobile app, or business software project.",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@pixorasofttech",
    creator: "@pixorasofttech",
    title: "Contact PixoraSoftTech | Start a Project",
    description:
      "Contact PixoraSoftTech by email or WhatsApp to discuss a website, mobile app, or business software project.",
    images: ["/opengraph-image"],
  },
};

export default function ContactPage() {
  return (
    <>
      <Script
        src="https://web3forms.com/client/script.js"
        strategy="afterInteractive"
      />
      <BackgroundAnimation />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            borderRadius: "12px",
            fontSize: "14px",
            fontWeight: "500",
          },
        }}
      />
      <Navbar />
      <main className="relative z-10 min-h-screen bg-transparent">
        <ContactSection />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
