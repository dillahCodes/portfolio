import type { Metadata } from "next";
import { ResumeSection } from "@/features/resume/resume-section";

export const metadata: Metadata = {
  title: "Resume — Education & Work Experience",
  description:
    "Explore the education background, work experience, and technical skills of Abdillah Juniansyah (DillahCodes). Fullstack Developer specializing in modern web technologies.",
  keywords: [
    "dillahcodes resume",
    "abdillah juniansyah experience",
    "fullstack developer skills",
    "web developer education",
    "react skills",
    "laravel experience",
  ],
  alternates: {
    canonical: "/resume",
  },
};

export default function ResumePage() {
  return <ResumeSection />;
}
