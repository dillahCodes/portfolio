"use client";

import { useFadeUp } from "@/shared/hooks/animations";
import type { SkillCategory as SkillCategoryType } from "@/shared/data/resume";

interface SkillCategoryProps {
  category: SkillCategoryType;
  delay?: number;
}

export function SkillCategory({ category, delay = 0 }: SkillCategoryProps) {
  const ref = useFadeUp<HTMLLIElement>({ delay });

  return (
    <li
      ref={ref}
      className="relative pl-0 before:absolute before:-top-6.25 before:-left-7.5 before:h-timeline-line before:w-px before:bg-jet before:content-empty last:before:hidden sm:before:-left-10"
    >
      <span className="absolute top-1.25 -left-8.25 size-1.5 rounded-full ring-4 ring-jet gradient-text-yellow sm:-left-10.75 sm:size-2" />
      <h4 className="mb-2 text-sm leading-tight font-semibold text-white">
        {category.title}
      </h4>
      <div className="flex flex-wrap gap-2.5 pt-3">
        {category.skills.map((skill) => (
          <div key={skill.name} className="shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://img.shields.io/badge/${encodeURIComponent(skill.name)}-${skill.color.replace("#", "")}?style=for-the-badge&logo=${skill.logo}&logoColor=${skill.color.replace("#", "")}&labelColor=black`}
              alt={skill.name}
              className="block h-7.5"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </li>
  );
}
