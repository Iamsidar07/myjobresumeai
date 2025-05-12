import type { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export default function GradientText({
  children,
  className = "",
}: GradientTextProps) {
  return (
      <span
        className={`bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-500 ${className}`}
      >
        {children}
      </span>
  );
}
