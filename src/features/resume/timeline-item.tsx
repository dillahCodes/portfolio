"use client";

import { useFadeRight } from "@/shared/hooks/animations";
import type { TimelineItem as TimelineItemType } from "@/shared/data/resume";

interface TimelineItemProps {
  item: TimelineItemType;
  delay?: number;
}

export function TimelineItem({ item, delay = 0 }: TimelineItemProps) {
  const itemRef = useFadeRight<HTMLLIElement>({ delay });

  return (
    <li
      ref={itemRef}
      className="relative pl-0 before:absolute before:-top-6.25 before:-left-8 before:h-timeline-line before:w-px before:bg-jet before:content-empty last:before:hidden sm:before:-left-10"
    >
      <div className="absolute top-1.5 -left-10 z-1 flex size-4 items-center justify-center rounded-full gradient-border-onyx sm:top-1.5 sm:-left-12 sm:size-4">
        <span
          className="absolute inset-px -z-1 bg-eerie-black"
          style={{ borderRadius: "inherit" }}
        />
        <div className="size-2 rounded-full bg-primary" />
      </div>

      <h4 className="mb-2 text-sm leading-tight font-semibold text-white">{item.title}</h4>
      <span className="mb-1 block text-sm leading-relaxed font-normal text-vegas-gold">
        {item.period}
      </span>
      <p className="max-w-175 text-sm leading-relaxed font-light whitespace-pre-line text-light-gray">
        {item.description}
      </p>
    </li>
  );
}
