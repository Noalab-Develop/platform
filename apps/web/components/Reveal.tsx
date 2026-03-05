"use client";

import { useInView } from "@/hooks/useInView";

type Direction = "up" | "left" | "right";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  threshold?: number;
}

export function Reveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  threshold,
}: RevealProps) {
  const { ref, isVisible } = useInView(threshold);

  return (
    <div
      ref={ref as React.Ref<HTMLDivElement>}
      className={`reveal-${direction} ${isVisible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
