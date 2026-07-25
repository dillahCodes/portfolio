"use client";

import Image from "next/image";
import { useZoomIn } from "@/shared/hooks/animations";

interface ServiceCardProps {
  iconSrc: string;
  title: string;
  description: string;
  delay?: number;
}

export function ServiceCard({
  iconSrc,
  title,
  description,
  delay = 0,
}: ServiceCardProps) {
  const cardRef = useZoomIn<HTMLLIElement>({ delay });

  return (
    <li
      ref={cardRef}
      className="relative z-1 rounded-xl p-5 shadow-elevated gradient-border-onyx sm:flex sm:items-start sm:gap-4.5 sm:p-7.5"
    >
      <span className="absolute inset-px -z-1 rounded-xl gradient-jet" />

      <div className="mb-2.5 flex justify-center sm:mt-1 sm:mb-0 sm:block sm:shrink-0">
        <Image
          src={iconSrc}
          alt={`${title} icon`}
          width={40}
          height={40}
          className="size-10"
        />
      </div>

      <div className="text-center sm:text-left">
        <h4 className="mb-2 text-base text-white">{title}</h4>
        <p className="text-sm leading-relaxed font-light text-light-gray">
          {description}
        </p>
      </div>
    </li>
  );
}
