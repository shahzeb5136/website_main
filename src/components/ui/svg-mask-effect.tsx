"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";

function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

const MASK_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI1MCIgZmlsbD0id2hpdGUiLz48L3N2Zz4=";

export const MaskContainer = ({
  children,
  revealText,
  size = 10,
  revealSize = 600,
  className,
}: {
  children?: string | React.ReactNode;
  revealText?: string | React.ReactNode;
  size?: number;
  revealSize?: number;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Only show fixed overlay when the container is in the viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Track mouse across the entire window so the circle never clips at edges
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  // Detect hover by checking if cursor is within the container bounds
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const enter = () => setIsHovered(true);
    const leave = () => setIsHovered(false);
    el.addEventListener("mouseenter", enter);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mouseenter", enter);
      el.removeEventListener("mouseleave", leave);
    };
  }, []);

  const maskSize = isHovered ? revealSize : size;
  // Viewport-relative position for the mask (fixed overlay uses viewport coords)
  const mx = mousePosition.x - maskSize / 2;
  const my = mousePosition.y - maskSize / 2;

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative h-screen w-full bg-white dark:bg-black transition-colors duration-300",
        className
      )}
    >
      {/* Revealed overlay — fixed to viewport so the circle is never clipped */}
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-30 flex items-center justify-center bg-black dark:bg-white pointer-events-none"
          style={{
            WebkitMaskImage: `url("${MASK_DATA_URL}")`,
            WebkitMaskRepeat: "no-repeat",
            maskImage: `url("${MASK_DATA_URL}")`,
            maskRepeat: "no-repeat",
          }}
          animate={{
            WebkitMaskPosition: `${mx}px ${my}px`,
            WebkitMaskSize: `${maskSize}px`,
            maskPosition: `${mx}px ${my}px`,
            maskSize: `${maskSize}px`,
          } as any}
          transition={{
            maskSize: { duration: 0.3, ease: "easeInOut" },
            WebkitMaskSize: { duration: 0.3, ease: "easeInOut" },
            maskPosition: { duration: 0.05, ease: "linear" },
            WebkitMaskPosition: { duration: 0.05, ease: "linear" },
          } as any}
        >
          <div className="absolute inset-0 z-0 h-full w-full bg-black opacity-50 dark:bg-white dark:opacity-50" />
          <div
            className="relative z-20 mx-auto max-w-4xl text-center text-4xl font-bold text-white dark:text-black pointer-events-auto"
          >
            {children}
          </div>
        </motion.div>
      )}

      {/* Base layer */}
      <div className="flex h-full w-full items-center justify-center">
        {revealText}
      </div>
    </div>
  );
};
