"use client";

import { useRef, useEffect, useState } from "react";

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  direction?: "left" | "right";
  className?: string;
  pauseOnHover?: boolean;
}

export function Marquee({
  children,
  speed = 40,
  direction = "left",
  className = "",
  pauseOnHover = true,
}: MarqueeProps) {
  return (
    <div
      className={`group flex overflow-hidden [--duration:${speed}s] ${className}`}
    >
      <div
        className={`flex shrink-0 items-center gap-8 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        } ${pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""}`}
      >
        {children}
      </div>
      <div
        aria-hidden
        className={`flex shrink-0 items-center gap-8 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        } ${pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""}`}
      >
        {children}
      </div>
    </div>
  );
}

// --- Animated Counter ---

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2000,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString("de-DE")}
      {suffix}
    </span>
  );
}
