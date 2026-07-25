interface SectionTitleProps {
  title: string;
  className?: string;
}

export function SectionTitle({ title, className = "" }: SectionTitleProps) {
  return (
    <h2
      className={`relative mb-7 pb-2 text-2xl font-semibold text-white capitalize ${className}`}
    >
      {title}
      <span className="absolute bottom-0 left-0 h-0.75 w-10 rounded-full gradient-text-yellow" />
    </h2>
  );
}
