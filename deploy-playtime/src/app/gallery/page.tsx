import type { Metadata } from "next";
import { Eyebrow } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { GalleryGrid, type GalleryImage } from "@/components/gallery-grid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from Playtime Namibia: training sessions at The Hub, tournaments, medal days and everyday moments of children playing sport in Walvis Bay.",
  alternates: { canonical: "/gallery" },
};

const images: GalleryImage[] = [
  { src: "/images/g-01.webp", alt: "Coaches leading children through an agility drill with hoops on the artificial turf at The Hub", caption: "Agility drills at The Hub" },
  { src: "/images/g-02.webp", alt: "A large group of children in colourful vests celebrating with medals and a trophy in front of the Michale Sheehan Stand", caption: "Medal day at the Michale Sheehan Stand" },
  { src: "/images/g-03.webp", alt: "A female coach demonstrating ball control to children on the artificial pitch", caption: "Ball control session" },
  { src: "/images/g-04.webp", alt: "Six young boys in training bibs posing together in front of a soccer goal", caption: "Team photo at the goal" },
  { src: "/images/g-05.webp", alt: "Children competing for the ball during a match while adults watch from the sidelines", caption: "Match day action" },
  { src: "/images/g-06.webp", alt: "A youth sports team posing for a group photo under a Playtime Namibia branded tent", caption: "Under the Playtime tent" },
  { src: "/images/g-07.webp", alt: "Three young children sitting on the grass assembling colourful foam puzzle mats", caption: "Multi-sports for the little ones" },
  { src: "/images/g-08.webp", alt: "A group of young female athletes wearing medals posing in front of the Michale Sheehan Stand", caption: "Our medal-winning athletes" },
  { src: "/images/g-09.webp", alt: "A cricket team and their coaches posing for a group photo on a grassy field", caption: "The cricket squad" },
  { src: "/images/g-10.webp", alt: "Children in sports vests celebrating with medals and a large trophy", caption: "Trophy celebrations" },
  { src: "/images/g-11.webp", alt: "Three people wearing Sport has the power to unite people shirts standing before a goalpost", caption: "Sport unites" },
  { src: "/images/g-12.webp", alt: "Two men posing with the ICC Men's T20 World Cup 2022 Trophy Tour award on the artificial turf pitch", caption: "ICC T20 World Cup Trophy Tour visit" },
  { src: "/images/g-13.webp", alt: "A volunteer placing a medal around a participant's neck in front of a Special Olympics banner", caption: "Special Olympics medal moment" },
  { src: "/images/g-14.webp", alt: "A certificate being presented to a young child in front of a Playtime Namibia stand", caption: "Certificate presentation" },
  { src: "/images/g-15.webp", alt: "A youth soccer team posing for a group photo on a sandy outdoor pitch", caption: "Squad on the clay field" },
  { src: "/images/g-16.webp", alt: "A girl practising her dribbling skills through cones during a soccer training session", caption: "Dribbling practice" },
  { src: "/images/g-17.webp", alt: "Four young girls in blue MTC bibs smiling and posing for a photo", caption: "The girls' squad" },
  { src: "/images/g-18.webp", alt: "Five young boys in maroon sports vests posing for a team photo on the artificial turf field", caption: "Maroon vest team" },
  { src: "/images/g-19.webp", alt: "Two coaches posing with a young boy holding a trophy and wearing a medal", caption: "Champion and coaches" },
  { src: "/images/g-20.webp", alt: "A young girl in a red vest practising barefoot dribbling around cones on the artificial turf pitch", caption: "Barefoot skills session" },
  { src: "/images/g-21.webp", alt: "A young boy in a green vest smiling while holding a soccer ball on the artificial turf field", caption: "Match-day smile" },
  { src: "/images/g-22.webp", alt: "A coach showing a large white training die to three young girls in yellow vests", caption: "Fun with the training die" },
  { src: "/images/g-23.webp", alt: "A coach instructing a group of children standing inside a hula hoop on the artificial turf field", caption: "Group instruction time" },
  { src: "/images/g-24.webp", alt: "A coach speaking to four children in blue vests beside colourful foam letter mats", caption: "Learning through play" },
  { src: "/images/g-25.webp", alt: "Children in yellow vests playing soccer while adults watch from the sidelines", caption: "Yellow vests in action" },
  { src: "/images/g-26.webp", alt: "A coach giving instructions to a group of young players in training vests", caption: "Team talk" },
  { src: "/images/g-27.webp", alt: "Children in blue training bibs running and playing with a soccer ball on a sunny day", caption: "Running with the ball" },
  { src: "/images/g-28.webp", alt: "Five young boys in ERONGO sponsored training vests posing happily on the pitch", caption: "The ERONGteam" },
  { src: "/images/g-29.webp", alt: "Children competing for the ball during a lively soccer match on the green field", caption: "Full-throttle football" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-teal-50 to-background py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <Eyebrow>Gallery</Eyebrow>
            <h1 className="text-balance font-display text-4xl font-black leading-[1.05] text-navy-950 sm:text-5xl lg:text-6xl">
              Real kids, real sport, real joy
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Moments from training sessions at The Hub, tournament days, medal
              ceremonies and everything in between. Tap any photo to view it
              larger.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GalleryGrid images={images} />
        </div>
      </section>
    </>
  );
}
