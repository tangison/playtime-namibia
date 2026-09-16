"use client";

import * as React from "react";

/**
 * Counts from 0 to `value` when scrolled into view.
 * Renders the final value on the server and under reduced motion,
 * so numbers are always correct without JavaScript or animation.
 */
export function CountUp({
  value,
  suffix = "",
  durationMs = 1300,
  className,
}: {
  value: number;
  suffix?: string;
  durationMs?: number;
  className?: string;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = React.useState(value);
  const started = React.useRef(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const run = () => {
      if (started.current) return;
      started.current = true;
      const t0 = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - t0) / durationMs);
        const eased = 1 - Math.pow(1 - p, 3);
        setDisplay(Math.round(value * eased));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, durationMs]);

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}
