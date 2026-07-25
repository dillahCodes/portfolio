"use client";

import { IoCodeSlashOutline } from "react-icons/io5";
import { IconBox } from "@/shared/components/icon-box";
import { SkillCategory } from "./skill-category";
import { skillCategories } from "@/shared/data/resume";

export function SkillsSection() {
  return (
    <section>
      <div className="mb-6 flex items-center gap-4">
        <IconBox>
          <IoCodeSlashOutline className="text-lg" />
        </IconBox>
        <h3 className="text-lg font-semibold text-white capitalize">My Skills</h3>
      </div>

      <ol className="relative ml-14 sm:ml-16 [&>li:not(:last-child)]:mb-5">
        {skillCategories.map((category, index) => (
          <SkillCategory
            key={category.title}
            category={category}
            delay={index * 100}
          />
        ))}
      </ol>
    </section>
  );
}
