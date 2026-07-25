"use client";

import type { ReactNode } from "react";
import { IconBox } from "@/shared/components/icon-box";
import { TimelineItem } from "./timeline-item";
import type { TimelineItem as TimelineItemType } from "@/shared/data/resume";

interface TimelineSectionProps {
  title: string;
  icon: ReactNode;
  items: TimelineItemType[];
}

export function TimelineSection({ title, icon, items }: TimelineSectionProps) {
  return (
    <section className="mb-8">
      <div className="mb-6 flex items-center gap-4">
        <IconBox>{icon}</IconBox>
        <h3 className="text-lg font-semibold text-white capitalize">{title}</h3>
      </div>

      <ol className="relative ml-14 sm:ml-16 [&>li:not(:last-child)]:mb-5">
        {items.map((item, index) => (
          <TimelineItem key={item.title} item={item} delay={index * 150} />
        ))}
      </ol>
    </section>
  );
}
