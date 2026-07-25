"use client";

import { filterCategories, type FilterCategory } from "@/shared/data/projects";
import { useFadeUp } from "@/shared/hooks/animations";

interface ProjectFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export function ProjectFilter({
  activeFilter,
  onFilterChange,
}: ProjectFilterProps) {
  const filterRef = useFadeUp<HTMLUListElement>({ delay: 100 });

  return (
    <ul ref={filterRef} className="mb-8 hidden items-center gap-6 pl-1 md:flex">
      {filterCategories.map((category: FilterCategory) => (
        <li key={category}>
          <button
            onClick={() => onFilterChange(category.toLowerCase())}
            className={`text-sm transition-colors duration-250 ${
              activeFilter === category.toLowerCase()
                ? "text-primary"
                : "text-light-gray hover:text-light-gray/70"
            }`}
          >
            {category}
          </button>
        </li>
      ))}
    </ul>
  );
}
