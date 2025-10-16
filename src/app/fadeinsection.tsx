"use client";
import React from "react";
import { useInView } from "./hooks/useinview";

interface FadeInSectionProps {
  children: React.ReactNode;
}

export default function FadeInSection({ children }: FadeInSectionProps) {
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "show" : ""}`}
    >
      {children}
    </div>
  );
}
