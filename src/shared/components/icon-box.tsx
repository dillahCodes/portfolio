import type { ReactNode } from "react";

interface IconBoxProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md";
}

export function IconBox({
  children,
  className = "",
  size = "md",
}: IconBoxProps) {
  const sizeClasses =
    size === "sm"
      ? "w-8 h-8 text-sm rounded-lg"
      : "w-12 h-12 text-lg rounded-xl";

  return (
    <div
      className={`relative z-1 flex items-center justify-center text-primary gradient-border-onyx ${sizeClasses} ${className}`}
    >
      <span
        className="absolute inset-px -z-1 bg-eerie-black"
        style={{ borderRadius: "inherit" }}
      />
      {children}
    </div>
  );
}
