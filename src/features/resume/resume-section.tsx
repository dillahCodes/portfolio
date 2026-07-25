"use client";

import { IoBookOutline, IoBriefcaseOutline } from "react-icons/io5";
import { SectionTitle } from "@/shared/components/section-title";
import { TimelineSection } from "./timeline-section";
import { SkillsSection } from "./skills-section";
import { education, workExperience } from "@/shared/data/resume";

export function ResumeSection() {
  return (
    <article>
      <SectionTitle title="Resume" />

      <TimelineSection
        title="Education"
        icon={<IoBookOutline className="text-lg" />}
        items={education}
      />

      <TimelineSection
        title="Work Experience"
        icon={<IoBriefcaseOutline className="text-lg" />}
        items={workExperience}
      />

      <SkillsSection />
    </article>
  );
}
