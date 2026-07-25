"use client";

import { ServiceCard } from "./service-card";

const services = [
  {
    iconSrc: "/images/icon-dev.svg",
    title: "Web development",
    description: "High-quality development of sites at the professional level.",
  },
];

export function ServiceList() {
  return (
    <section className="mb-9">
      <h3 className="mb-5 text-lg text-white capitalize">
        What i&apos;m doing
      </h3>

      <ul className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            iconSrc={service.iconSrc}
            title={service.title}
            description={service.description}
            delay={index * 150}
          />
        ))}
      </ul>
    </section>
  );
}
