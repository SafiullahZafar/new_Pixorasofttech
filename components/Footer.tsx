import HalftoneWordmarkFooter, {
  type FooterColumn,
} from "@/components/HalftoneWordmarkFooter";

const footerColumns: FooterColumn[] = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "About us", href: "/#who-we-are" },
      { label: "Our work", href: "/portfolio" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web development", href: "/services/website-development" },
      { label: "Custom software", href: "/services/custom-software-development" },
      { label: "Mobile apps", href: "/services/mobile-app-development" },
      { label: "UI / UX design", href: "/services/ui-ux-design" },
      { label: "Cloud solutions", href: "/services/cloud-solutions" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Get in touch", href: "/contact" },
      { label: "+92 309 4307701", href: "tel:+923094307701" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/pixorasofttech" },
      { label: "Instagram", href: "https://www.instagram.com/pixorasofttech/" },
    ],
  },
];

export default function Footer() {
  return (
    <HalftoneWordmarkFooter
      wordmark="PIXORASOFTTECH"
      label="PixoraSoftTech"
      meta="© 2026 · Faisalabad, Pakistan"
      columns={footerColumns}
      preset="night"
      palette={{ background: "#000000", ink: "#f4f4f5", warm: "#0342DD" }}
      dotGap={5}
      radius={84}
      crop={0.2}
      grain={0.22}
      height="clamp(560px, 72vh, 720px)"
      fontFamily="Outfit, Arial, sans-serif"
      className="font-sans"
    />
  );
}
