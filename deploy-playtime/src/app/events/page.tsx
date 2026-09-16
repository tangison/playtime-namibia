import type { Metadata } from "next";
import Image from "next/image";
import { CalendarDays, MapPin, Trophy, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Eyebrow } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Events & News",
  description:
    "The latest activities and events from Playtime Namibia across all sports disciplines: tournaments, medal days and community news from Walvis Bay.",
  alternates: { canonical: "/events" },
};

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsEvent",
  name: "Under-9 & Under-11 Soccer Tournament",
  startDate: "2025-04-11",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "The Hub, Kuisebmond",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Walvis Bay",
      addressCountry: "NA",
    },
  },
  organizer: {
    "@type": "NGO",
    name: "The Playtime Sport Development Trust",
    url: "https://playtime.com.na",
  },
  description:
    "An action-packed Under-9 and Under-11 soccer tournament at The Hub, bringing together young talent from across Walvis Bay.",
};

const eventPhotos = [
  { src: "/images/event-01.webp", alt: "Spectators and young players sitting on bleachers under a Playtime Namibia shelter during the tournament" },
  { src: "/images/event-03.webp", alt: "A coach in dark athletic wear supervising youth players during soccer practice at the tournament" },
  { src: "/images/event-05.webp", alt: "A boy in a red vest kicking a soccer ball while other children watch during a match" },
  { src: "/images/event-06.webp", alt: "Children in red and white team vests running and competing for the ball during the tournament" },
  { src: "/images/event-07.webp", alt: "A coach in a red hoodie writing match schedules on a whiteboard while two children watch" },
  { src: "/images/event-09.webp", alt: "A young player in a red and white kit kicking a soccer ball during practice on the artificial turf" },
  { src: "/images/event-10.webp", alt: "Children competing intensely for the ball during a lively soccer match at The Hub" },
  { src: "/images/event-11.webp", alt: "Young players in light blue training bibs walking across the pitch near a goal" },
];

export default function EventsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      <section className="bg-gradient-to-b from-teal-50 to-background py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <Eyebrow>Events & News</Eyebrow>
            <h1 className="text-balance font-display text-4xl font-black leading-[1.05] text-navy-950 sm:text-5xl lg:text-6xl">
              What's happening at Playtime
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              An update of our latest activities and events across all sports
              disciplines. Be sure to keep checking back as we continually
              update this section.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured event */}
      <section className="py-12 sm:py-16" aria-labelledby="event-u9u11">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <article className="overflow-hidden rounded-[2rem] border border-teal-100 bg-white shadow-lg">
              <div className="dots-dark bg-navy-950 p-6 sm:p-10">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge className="gap-1.5 rounded-full bg-amber-brand px-4 py-1.5 font-display text-xs font-bold uppercase tracking-widest text-navy-950">
                    <Trophy className="size-3.5" aria-hidden="true" />
                    Tournament
                  </Badge>
                  <span className="flex items-center gap-1.5 text-sm font-medium text-navy-200">
                    <CalendarDays className="size-4 text-teal-300" aria-hidden="true" />
                    11 April 2025
                  </span>
                  <span className="flex items-center gap-1.5 text-sm font-medium text-navy-200">
                    <MapPin className="size-4 text-teal-300" aria-hidden="true" />
                    The Hub, Kuisebmond
                  </span>
                </div>
                <h2
                  id="event-u9u11"
                  className="mt-4 text-balance font-display text-3xl font-black text-white sm:text-4xl"
                >
                  Under-9 & Under-11 Soccer Tournament
                </h2>
                <p className="mt-3 max-w-2xl text-lg text-teal-300">
                  Weekend tournament brings Walvis Bay youth together in
                  spirit of sport
                </p>
              </div>

              <div className="p-6 sm:p-10">
                <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
                  <div className="space-y-4 leading-relaxed text-muted-foreground lg:col-span-2">
                    <p>
                      This past weekend, Playtime Namibia was proud to host an
                      action-packed Under-9 and Under-11 soccer tournament at
                      The Hub, bringing together young talent from across
                      Walvis Bay.
                    </p>
                    <p>
                      The event drew an enthusiastic crowd, with teams,
                      families and supporters filling the grounds to cheer on
                      the next generation of footballers. After a series of
                      thrilling matches and competitive knock-out rounds, the
                      final showdown saw The Navy take on the Red Team.
                    </p>
                    <div className="rounded-2xl bg-teal-50 p-5">
                      <p className="flex items-center gap-2 font-display text-lg font-black text-navy-950">
                        <Trophy className="size-5 text-teal-600" aria-hidden="true" />
                        Final result: The Navy 4-1 Red Team
                      </p>
                      <p className="mt-1.5 text-sm text-teal-900">
                        In a dynamic and well-fought match, The Navy emerged
                        victorious with an impressive 4-1 win.
                      </p>
                    </div>
                    <p>
                      We extend our heartfelt thanks to all the organisers,
                      coaches, players and supporters who made the day such a
                      vibrant success. Your energy and commitment continue to
                      drive the spirit of community and youth development
                      through sport.
                    </p>
                    <p className="flex items-center gap-2 text-sm font-semibold text-teal-700">
                      <Users className="size-4" aria-hidden="true" />
                      Teams, families and supporters from across Walvis Bay
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-3">
                    {eventPhotos.map((photo) => (
                      <div
                        key={photo.src}
                        className="overflow-hidden rounded-2xl border border-teal-100"
                      >
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          width={600}
                          height={450}
                          loading="lazy"
                          sizes="(min-width: 1024px) 18rem, 45vw"
                          className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  );
}
