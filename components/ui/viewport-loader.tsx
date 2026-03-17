"use client";

import React, { useEffect, useRef, useState } from "react";

interface ViewportLoaderProps {
  children: React.ReactNode;
  minHeight?: string;
  threshold?: number;
  rootMargin?: string;
  className?: string;
}

export default function ViewportLoader({
  children,
  minHeight = "200px",
  threshold = 0,
  rootMargin = "200px",
  className = "",
}: ViewportLoaderProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ minHeight: !isVisible ? minHeight : undefined }}
    >
      {isVisible ? children : null}
    </div>
  );
}
