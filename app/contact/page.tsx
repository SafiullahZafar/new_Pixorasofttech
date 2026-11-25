import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/contact/ContactSection";
import ContactCTA from "@/components/contact/ContactCTA";
import { Toaster } from "react-hot-toast";

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
  },
};

export default function ContactPage() {
  return (
    <>
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
      <main>
        <ContactSection />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
import type { Metadata } from "next";
