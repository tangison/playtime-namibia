"use client";

import * as React from "react";
import { PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const videos = [
  { id: "8SonHSskV6w", title: "Best Beginner Soccer Drills to Improve Footwork – U6 & U8 Soccer Drills", tag: "Drills" },
  { id: "L91HIpi0BOo", title: "Passing Techniques for the Beginning of Your Soccer Training Session", tag: "Passing" },
  { id: "eISXGz4Z7nI", title: "15 Most Basic Skills for Beginner Players", tag: "Skills" },
  { id: "8jjTe44BCpI", title: "Advanced Heading Techniques for Youth Soccer Players", tag: "Skills" },
  { id: "YrH-Hky1WI0", title: "5 Best Ways to Score Penalty Kicks", tag: "Finishing" },
  { id: "MDF6tB5foI0", title: "10 Best Soccer Defending Drills for Kids", tag: "Defending" },
  { id: "k1i6kWXi2Ls", title: "9 Essential Goalkeeping Skills", tag: "Goalkeeping" },
  { id: "8JcN2PXnDqM", title: "The 4 Diving Techniques Every Goalkeeper Must Know", tag: "Goalkeeping" },
  { id: "I3GjMgHCBlE", title: "Goalkeeping: How to Do a Collapse Dive", tag: "Goalkeeping" },
  { id: "x8HCiuDCQ88", title: "Learn 3 Essential GK Catching Techniques", tag: "Goalkeeping" },
];

function VideoCard({ id, title, tag }: { id: string; title: string; tag: string }) {
  const [playing, setPlaying] = React.useState(false);

  return (
    <figure className="overflow-hidden rounded-[1.5rem] border border-teal-100 bg-white shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-video w-full bg-navy-950">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${title}`}
            className="group absolute inset-0 h-full w-full"
          >
            <img
              src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
              alt=""
              loading="lazy"
              width={480}
              height={360}
              className="h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-navy-950/30 transition-colors group-hover:bg-navy-950/20">
              <span className="flex size-16 items-center justify-center rounded-full bg-amber-brand shadow-xl transition-transform group-hover:scale-110">
                <PlayCircle className="size-9 text-navy-950" aria-hidden="true" />
              </span>
            </span>
          </button>
        )}
      </div>
      <figcaption className="p-4">
        <span className="mb-2 inline-block rounded-full bg-teal-50 px-3 py-1 text-xs font-bold text-teal-800">
          {tag}
        </span>
        <p className="font-display text-[15px] font-bold leading-snug text-navy-950">
          {title}
        </p>
      </figcaption>
    </figure>
  );
}

export function VideoGrid() {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {videos.map((video) => (
        <VideoCard key={video.id} {...video} />
      ))}
    </div>
  );
}
