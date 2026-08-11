import type { Metadata } from "next";
import { ContactSection } from "@/features/contact/contact-section";

export const metadata: Metadata = {
  title: "Contact DillahCodes — Get in Touch",
  description:
    "Contact Abdillah Juniansyah (DillahCodes) for fullstack web development projects, freelance opportunities, or collaborations. Based in Tangerang, Indonesia.",
  keywords: [
    "contact dillahcodes",
    "hire fullstack developer",
    "freelance web developer tangerang",
    "hire abdillah juniansyah",
    "web developer contact",
  ],
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactSection />;
}
