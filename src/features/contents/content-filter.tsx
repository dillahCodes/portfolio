"use client";

import { filterCategories, type FilterContentCategory } from "@/shared/data/contents";
import { useFadeUp } from "@/shared/hooks/animations";

interface ContentFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export function ContentFilter({
  activeFilter,
  onFilterChange,
}: ContentFilterProps) {
  const filterRef = useFadeUp<HTMLUListElement>({ delay: 100 });

  return (
    <ul ref={filterRef} className="mb-8 hidden items-center gap-6 pl-1 md:flex">
      {filterCategories.map((category: FilterContentCategory) => (
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
