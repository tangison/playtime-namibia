"use client";

import * as React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Slide = {
  src: string;
  alt: string;
};

const AUTOPLAY_MS = 6000;

export function HeroCarousel({
  slides,
  className,
}: {
  slides: Slide[];
  className?: string;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const reduce = useReducedMotion();
  const [selected, setSelected] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const userTookControl = React.useRef(false);

  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    const onDrag = () => {
      userTookControl.current = true;
    };
    emblaApi.on("select", onSelect);
    emblaApi.on("dragStart", onDrag);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("dragStart", onDrag);
    };
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi || reduce) return;
    const id = window.setInterval(() => {
      if (paused || document.hidden || userTookControl.current) return;
      emblaApi.scrollNext();
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [emblaApi, reduce, paused]);

  const go = (dir: 1 | -1) => {
    if (!emblaApi) return;
    userTookControl.current = true;
    if (dir === 1) emblaApi.scrollNext();
    else emblaApi.scrollPrev();
  };

  return (
    <div
      role="group"
      aria-label="Photos from Playtime Namibia programmes"
      className={cn("relative", className)}
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="h-full overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, i) => (
            <div
              key={slide.src}
              className="relative h-full min-w-0 flex-[0_0_100%]"
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="(min-width: 1024px) 44rem, 100vw"
                priority={i === 0}
                fetchPriority={i === 0 ? "high" : "auto"}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Control scrim for contrast (functional, not decorative) */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-navy-950/45 to-transparent"
        aria-hidden="true"
      />

      {/* Arrows */}
      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="Previous photo"
        className="absolute left-3 top-1/2 z-10 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full bg-navy-950/65 text-white backdrop-blur-sm transition-colors hover:bg-navy-950/90 sm:flex"
      >
        <ChevronLeft className="size-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Next photo"
        className="absolute right-3 top-1/2 z-10 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full bg-navy-950/65 text-white backdrop-blur-sm transition-colors hover:bg-navy-950/90 sm:flex"
      >
        <ChevronRight className="size-5" aria-hidden="true" />
      </button>

      {/* Dots */}
      <div
        className="absolute inset-x-0 bottom-3 z-10 flex justify-center gap-1"
        role="group"
        aria-label="Choose photo"
      >
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => {
              userTookControl.current = true;
              emblaApi?.scrollTo(i);
            }}
            aria-label={`Photo ${i + 1} of ${slides.length}`}
            aria-current={i === selected}
            className="flex size-11 items-center justify-center"
          >
            <span
              className={cn(
                "block h-2.5 rounded-full transition-[transform,box-shadow] duration-300",
                i === selected
                  ? "w-6 bg-amber-brand"
                  : "w-2.5 bg-white/80 hover:bg-white"
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
