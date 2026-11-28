import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TermsView from "@/components/terms/TermsView";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Official Terms and Conditions for PIXORASOFTTECH (SMC-PRIVATE) LIMITED (Pixra Softtech). Understand the rules, responsibilities, API integrations, and legal terms governing our website and software services.",
  alternates: {
    canonical: "https://pixorasofttech.com/terms-and-conditions",
  },
  openGraph: {
    title: "Terms and Conditions | PIXORASOFTTECH (SMC-PRIVATE) LIMITED",
    description:
      "Official Terms and Conditions for PIXORASOFTTECH (SMC-PRIVATE) LIMITED (Pixra Softtech).",
    url: "https://pixorasofttech.com/terms-and-conditions",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@pixorasofttech",
    creator: "@pixorasofttech",
    title: "Terms and Conditions | PIXORASOFTTECH (SMC-PRIVATE) LIMITED",
    description:
      "Official Terms and Conditions for PIXORASOFTTECH (SMC-PRIVATE) LIMITED (Pixra Softtech).",
    images: ["/opengraph-image"],
  },
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <Navbar />
      <main>
        <TermsView />
      </main>
      <Footer />
    </>
  );
}
