"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Native scroll-snap carousel: touch-first, keyboard scrollable,
 * arrow buttons and dot indicators. No JS drag physics, no hijacking.
 */
export function ScrollCarousel({
  label,
  itemClass,
  bleed = false,
  className,
  children,
}: {
  label: string;
  itemClass: string;
  bleed?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const trackRef = React.useRef<HTMLUListElement>(null);
  const items = React.useMemo(
    () => React.Children.toArray(children),
    [children]
  );
  const [index, setIndex] = React.useState(0);
  const [canPrev, setCanPrev] = React.useState(false);
  const [canNext, setCanNext] = React.useState(true);

  const prefersReduced = React.useCallback(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  const measure = React.useCallback(() => {
    const track = trackRef.current;
    if (!track || !track.firstElementChild) return;
    const itemsEls = Array.from(track.children) as HTMLElement[];
    if (itemsEls.length < 2) return;
    const step = itemsEls[1].offsetLeft - itemsEls[0].offsetLeft;
    if (step <= 0) return;
    const nearest = Math.round(track.scrollLeft / step);
    setIndex(
      Math.max(0, Math.min(itemsEls.length - 1, Number.isFinite(nearest) ? nearest : 0))
    );
    setCanPrev(track.scrollLeft > 4);
    setCanNext(track.scrollLeft < track.scrollWidth - track.clientWidth - 4);
  }, []);

  React.useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    measure();
    track.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      track.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  const scrollToItem = (target: number) => {
    const track = trackRef.current;
    if (!track) return;
    const itemsEls = Array.from(track.children) as HTMLElement[];
    const clamped = Math.max(0, Math.min(itemsEls.length - 1, target));
    const el = itemsEls[clamped];
    if (!el) return;
    const trackRect = track.getBoundingClientRect();
    track.scrollTo({
      left: track.scrollLeft + (el.getBoundingClientRect().left - trackRect.left),
      behavior: prefersReduced() ? "auto" : "smooth",
    });
  };

  const step = (dir: 1 | -1) => scrollToItem(index + dir);

  return (
    <div className={className}>
      <div className="flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={() => step(-1)}
          disabled={!canPrev}
          aria-label={`Scroll ${label} backwards`}
          className="inline-flex size-11 items-center justify-center rounded-full border border-teal-100 bg-white text-navy-900 shadow-sm transition-all hover:border-teal-300 hover:text-teal-700 disabled:pointer-events-none disabled:opacity-35"
        >
          <ChevronLeft className="size-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => step(1)}
          disabled={!canNext}
          aria-label={`Scroll ${label} forwards`}
          className="inline-flex size-11 items-center justify-center rounded-full border border-teal-100 bg-white text-navy-900 shadow-sm transition-all hover:border-teal-300 hover:text-teal-700 disabled:pointer-events-none disabled:opacity-35"
        >
          <ChevronRight className="size-5" aria-hidden="true" />
        </button>
      </div>

      <ul
        ref={trackRef}
        tabIndex={0}
        aria-label={label}
        className={cn(
          "no-scrollbar mt-4 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth outline-offset-4",
          bleed && "px-4 sm:px-6 lg:px-8 scroll-px-4 sm:scroll-px-6 lg:scroll-px-8"
        )}
      >
        {items.map((child, i) => (
          <li key={i} className={cn("snap-start shrink-0", itemClass)}>
            {child}
          </li>
        ))}
      </ul>

      <div
        className="mt-5 flex flex-wrap gap-0.5"
        role="group"
        aria-label={`${label} position`}
      >
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => scrollToItem(i)}
            aria-label={`Go to item ${i + 1} of ${items.length}`}
            aria-current={i === index}
            className="flex size-11 items-center justify-center"
          >
            <span
              className={cn(
                "block h-2.5 rounded-full transition-all duration-300",
                i === index
                  ? "w-6 bg-teal-600"
                  : "w-2.5 bg-teal-200 hover:bg-teal-400"
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
