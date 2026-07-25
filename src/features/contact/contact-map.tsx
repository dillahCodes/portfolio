"use client";

import { useFadeUp } from "@/shared/hooks/animations";

export function ContactMap() {
  const mapRef = useFadeUp<HTMLDivElement>({ delay: 100 });

  return (
    <section
      ref={mapRef}
      className="relative mb-8 h-62.5 w-full overflow-hidden rounded-2xl border border-border sm:h-95 sm:rounded-2xl"
    >
      <figure className="h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253858.49503957474!2d106.51475987919781!3d-6.192382134497057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f8e853d2e38d%3A0x301576d14feb9c0!2sTangerang%2C%20Tangerang%20City%2C%20Banten!5e0!3m2!1sen!2sid!4v1744294376152!5m2!1sen!2sid"
          className="size-full border-none grayscale invert"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map - Tangerang, Indonesia"
        />
      </figure>
    </section>
  );
}
