import type { Metadata } from "next";
import { PlayCircle, BookOpen, Video, Lightbulb } from "lucide-react";
import { Eyebrow } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { VideoGrid } from "@/components/video-grid";

export const metadata: Metadata = {
  title: "Coaches’ Corner",
  description:
    "A growing collection of coaching resources for the Playtime Namibia coaching community: drills, lessons and video tutorials for youth soccer and goalkeeping.",
  alternates: { canonical: "/coaches-corner" },
};

export default function CoachesCornerPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-teal-50 to-background py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <Eyebrow>Coaching Corner</Eyebrow>
            <h1 className="text-balance font-display text-4xl font-black leading-[1.05] text-navy-950 sm:text-5xl lg:text-6xl">
              Resources for our coaching community
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              A dedicated space to support and inspire our local coaching
              community. Here you’ll find a growing collection of articles,
              practical coaching lessons, videos and more.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid gap-8 sm:grid-cols-3 sm:divide-x sm:divide-teal-100 sm:gap-0">
              {[
                {
                  icon: Video,
                  title: "Watch & learn",
                  text: "Ten hand-picked video tutorials covering drills, skills and goalkeeping.",
                },
                {
                  icon: BookOpen,
                  title: "Explore & share",
                  text: "Use these materials with your fellow coaches and your teams.",
                },
                {
                  icon: Lightbulb,
                  title: "Keep developing",
                  text: "When coaches keep developing their skills, the standard of coaching rises for every child.",
                },
              ].map((card) => (
                <div key={card.title} className="sm:px-6">
                  <div className="flex items-center gap-2.5">
                    <card.icon className="size-5 shrink-0 text-teal-700" aria-hidden="true" />
                    <h2 className="font-display text-lg font-black text-navy-950">
                      {card.title}
                    </h2>
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-16 font-display text-2xl font-black text-navy-950 sm:text-3xl">
              <PlayCircle className="mr-2 inline size-7 text-teal-700" aria-hidden="true" />
              Video library
            </h2>
            <p className="mt-2 text-muted-foreground">
              Check back regularly for new videos.
            </p>
          </Reveal>

          <VideoGrid />
        </div>
      </section>
    </>
  );
}
