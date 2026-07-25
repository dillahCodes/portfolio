"use client";

import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { SectionTitle } from "@/shared/components/section-title";
import { ProjectFilter } from "./project-filter";
import { ProjectGrid } from "./project-grid";
import { projects, filterCategories } from "@/shared/data/projects";

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [mobileSelectOpen, setMobileSelectOpen] = useState(false);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setMobileSelectOpen(false);
  };

  return (
    <article>
      <SectionTitle title="Portfolio" />

      {/* Desktop Filter */}
      <ProjectFilter
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

        {mobileSelectOpen && (
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
        )}
      </div>

      <ProjectGrid projects={filteredProjects} />
    </article>
  );
}
