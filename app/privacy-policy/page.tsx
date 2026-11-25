import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PrivacyPolicyView from "@/components/privacy-policy/PrivacyPolicyView";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Official Privacy Policy for PIXORASOFTTECH (SMC-PRIVATE) LIMITED (Pixra Softtech). Learn how we handle personal information, social media integrations, AI workflows, data deletion, and LinkedIn API privacy.",
  alternates: {
    canonical: "https://pixorasofttech.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | PIXORASOFTTECH (SMC-PRIVATE) LIMITED",
    description:
      "Official Privacy Policy for PIXORASOFTTECH (SMC-PRIVATE) LIMITED (Pixra Softtech). Learn about data processing, security, LinkedIn API privacy, and data deletion rights.",
    url: "https://pixorasofttech.com/privacy-policy",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <PrivacyPolicyView />
      </main>
      <Footer />
    </>
  );
}
