"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [index, setIndex] = React.useState<number | null>(null);
  const open = index !== null;

  const show = React.useCallback(
    (i: number) => {
      if (i >= 0 && i < images.length) setIndex(i);
    },
    [images.length]
  );

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") show((index as number) + 1);
      if (e.key === "ArrowLeft") show((index as number) - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, index, show]);

  const current = index !== null ? images[index] : null;

  return (
    <>
      <ul className="columns-2 gap-4 sm:columns-3 lg:columns-4 [&>li]:mb-4">
        {images.map((image, i) => (
          <li key={image.src} className="break-inside-avoid">
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Open photo ${i + 1} of ${images.length}: ${image.caption}`}
              className="group relative block w-full overflow-hidden rounded-2xl border border-teal-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-amber-brand"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={700}
                height={700}
                loading="lazy"
                sizes="(min-width: 1024px) 22vw, (min-width: 640px) 31vw, 48vw"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/80 to-transparent p-3 pt-8 text-left text-[13px] font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {image.caption}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <Dialog open={open} onOpenChange={(o) => !o && setIndex(null)}>
        <DialogContent
          className="max-w-4xl border-none bg-navy-950/95 p-2 sm:p-4"
          aria-describedby={undefined}
        >
          {current && (
            <figure>
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={current.src}
                  alt={current.alt}
                  width={1000}
                  height={1000}
                  sizes="(min-width: 1024px) 56rem, 100vw"
                  className="max-h-[70vh] w-full object-contain"
                />
              </div>
              <figcaption className="flex items-center justify-between gap-4 px-2 pb-1 pt-3">
                <p className="text-sm font-medium text-navy-100">
                  {current.caption}
                  <span className="ml-3 text-navy-300">
                    {(index as number) + 1} / {images.length}
                  </span>
                </p>
                <div className="flex items-center gap-2">
                  <Button
                    variant="secondary"
                    size="icon"
                    className="size-11 rounded-xl bg-white/10 text-white hover:bg-white/20"
                    onClick={() => show((index as number) - 1)}
                    aria-label="Previous photo"
                    disabled={index === 0}
                  >
                    <ChevronLeft className="size-5" aria-hidden="true" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="size-11 rounded-xl bg-white/10 text-white hover:bg-white/20"
                    onClick={() => show((index as number) + 1)}
                    aria-label="Next photo"
                    disabled={index === images.length - 1}
                  >
                    <ChevronRight className="size-5" aria-hidden="true" />
                  </Button>
                </div>
              </figcaption>
            </figure>
          )}
          <DialogTitle className="sr-only">
            {current?.caption ?? "Gallery photo"}
          </DialogTitle>
          <span className="hidden">
            <X className="size-4" aria-hidden="true" />
          </span>
        </DialogContent>
      </Dialog>
    </>
  );
}
