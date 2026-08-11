"use client";

import { ContentCard } from "./content-card";
import type { Content } from "@/shared/data/contents";

interface ContentGridProps {
  contents: Content[];
}

export function ContentGrid({ contents }: ContentGridProps) {
  return (
    <ul className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {contents.map((content, index) => (
        <ContentCard
          key={content.title}
          content={content}
          delay={index * 100}
        />
      ))}
    </ul>
  );
}
