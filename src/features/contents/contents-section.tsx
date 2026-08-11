"use client";

import { useState, Activity } from "react";
import { IoChevronDown } from "react-icons/io5";
import { SectionTitle } from "@/shared/components/section-title";
import { ContentFilter } from "./content-filter";
import { ContentGrid } from "./content-grid";
import { contents, filterCategories } from "@/shared/data/contents";

export function ContentsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [mobileSelectOpen, setMobileSelectOpen] = useState(false);

  const filteredContents =
    activeFilter === "all"
      ? contents
      : contents.filter(
          (c) => c.category.toLowerCase() === activeFilter.toLowerCase(),
        );

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setMobileSelectOpen(false);
  };

  return (
    <article>
      <SectionTitle title="Contents" />

      {/* Desktop Filter */}
      <ContentFilter
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />

      {/* Mobile Select */}
      <div className="relative mb-6 md:hidden">
        <button
          onClick={() => setMobileSelectOpen(!mobileSelectOpen)}
          className="flex w-full items-center justify-between rounded-xl border border-border bg-card px-4 py-3 text-sm font-light text-light-gray"
        >
          <span className="capitalize">
            {activeFilter === "all" ? "Select category" : activeFilter}
          </span>
          <IoChevronDown
            className={`transition-transform duration-200 ${
              mobileSelectOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <Activity mode={mobileSelectOpen ? "visible" : "hidden"}>
          <ul className="absolute top-full z-10 mt-1.5 w-full rounded-xl border border-border bg-card p-1.5">
            {filterCategories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => handleFilterChange(category.toLowerCase())}
                  className="w-full rounded-lg px-2.5 py-2 text-left text-sm font-light text-light-gray capitalize transition-colors hover:bg-onyx"
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </Activity>
      </div>

      <ContentGrid key={activeFilter} contents={filteredContents} />
    </article>
  );
}
