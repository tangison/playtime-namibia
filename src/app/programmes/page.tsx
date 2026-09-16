import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading, Eyebrow } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Sports Codes: Our Programmes",
  description:
    "Soccer, cricket, multi-sports and athletics in Walvis Bay: free daily training for children from U7 to U19, run by the Playtime Sport Development Trust at The Hub and Atlantis Sports Club.",
  alternates: { canonical: "/programmes" },
};

const codes = [
  {
    number: "01",
    name: "Soccer",
    image: "/images/soccer.webp",
    alt: "Children in orange and green training bibs playing soccer on the artificial turf at The Hub",
    stats: ["~1,200 participants in Kuisebmond", "U7-U17, boys & girls", "Daily training + weekend games"],
    body: [
      "Soccer is Playtime's primary sports code. We proudly cater to both boys' and girls' soccer teams, from under 7 to under 17, with approximately 1,200 participants in Kuisebmond alone.",
      "Our soccer programme offers daily training sessions for players of all ages, and we host mini-tournaments and games on weekends. Activities are held at two venues (The Hub in Kuisebmond and the Atlantis Sports Club in town), with the majority of participants training at the state-of-the-art Hub facility.",
    ],
    venues: ["The Hub, Kuisebmond", "Atlantis Sports Club"],
  },
  {
    number: "02",
    name: "Cricket",
    image: "/images/cricket.webp",
    alt: "Two young cricket players in navy blue shirts holding bats and protective gear on a grassy field",
    stats: ["~250 daily participants", "Male & female players", "National-team pathway"],
    body: [
      "Playtime provides a flourishing cricket programme that has nurtured players who have gone on to represent the national team. Our programme accommodates both male and female players, with a current daily participation rate of approximately 250 individuals.",
      "It is a source of pride for us to have sustained this programme for several years, especially since cricket is not easily accessible to disadvantaged communities, depriving a significant segment of the population of participation in a key sporting discipline.",
    ],
    venues: ["The Hub cricket ground", "Cricket batting nets"],
  },
  {
    number: "03",
    name: "Multi-Sports",
    image: "/images/multisports.webp",
    alt: "Young children in colourful vests playing with a portable hoop during a multi-sports session",
    stats: ["Under 7s", "Early-morning school sessions", "Fundamental movement skills"],
    body: [
      "Our multi-sports programme is aimed at encouraging younger children to do a wide variety of physical activities and sports before their teen years.",
      "The multi-sport approach has been scientifically proven as one of the best ways to help young children develop a broad variety of fundamental movement skills and physical literacy, providing an excellent foundation for lifelong physical activity.",
    ],
    venues: ["Local schools", "The Hub"],
  },
  {
    number: "04",
    name: "Athletics",
    image: "/images/athletics.webp",
    alt: "A boy in a yellow IAAF vest running with a relay baton during athletics training",
    stats: ["~85 participants", "U9-U19, boys & girls", "Training 3× per week"],
    body: [
      "Our athletics programme presently caters to around 85 participants, comprising both male and female individuals. The programme encompasses a wide range of track and field events and is open to individuals aged between under 9 and under 19 years.",
      "Training sessions are held three times a week, with the primary aim of preparing our athletes for various competitions, including those at school level as well as regional and national athletics meets.",
    ],
    venues: ["Track & field training", "School, regional & national meets"],
  },
];

export default function ProgrammesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-teal-50 to-background py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <Eyebrow>Sports Codes</Eyebrow>
            <h1 className="text-balance font-display text-4xl font-black leading-[1.05] text-navy-950 sm:text-5xl lg:text-6xl">
              Four disciplines, one goal
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              At Playtime Namibia we focus on four key sports disciplines, with
              each programme aimed at developing participants through sport to
              become well-rounded individuals who can contribute positively to
              their communities.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-20 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {codes.map((code, i) => (
          <section
            key={code.name}
            aria-labelledby={`code-${code.number}`}
            className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
          >
            <Reveal className={i % 2 === 1 ? "lg:order-2" : undefined}>
              <div className="relative">
                <div className="overflow-hidden rounded-[2rem] border-4 border-white shadow-xl">
                  <Image
                    src={code.image}
                    alt={code.alt}
                    width={1000}
                    height={750}
                    loading="lazy"
                    sizes="(min-width: 1024px) 44rem, 100vw"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <span className="absolute -top-5 left-6 rotate-[-3deg] rounded-2xl bg-navy-950 px-5 py-2.5 font-display text-lg font-black text-amber-brand shadow-lg">
                  {code.number}
                </span>
              </div>
            </Reveal>
            <div className={i % 2 === 1 ? "lg:order-1" : undefined}>
              <Reveal delay={0.08}>
                <h2
                  id={`code-${code.number}`}
                  className="font-display text-3xl font-black text-navy-950 sm:text-4xl"
                >
                  {code.name}
                </h2>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {code.stats.map((stat) => (
                    <li
                      key={stat}
                      className="rounded-full bg-teal-50 px-4 py-1.5 text-sm font-bold text-teal-800"
                    >
                      {stat}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
                  {code.body.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </div>
                <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-navy-700">
                  {code.venues.map((venue) => (
                    <li key={venue} className="flex items-center gap-1.5">
                      <MapPin className="size-4 text-teal-700" aria-hidden="true" />
                      {venue}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </section>
        ))}
      </div>

      {/* School partnerships CTA */}
      <section className="bg-amber-soft py-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-4 text-center sm:px-6">
          <Reveal>
            <Eyebrow className="justify-center">Beyond the field</Eyebrow>
            <h2 className="text-balance font-display text-3xl font-black text-navy-950 sm:text-4xl">
              We also run sport for local schools
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-navy-700">
              From early-morning multi-sports for under-7s to running Walvis
              Bay's annual school football leagues. Find out how Playtime
              partners with schools.
            </p>
            <Button
              asChild
              size="lg"
              className="press-navy mt-8 h-14 rounded-2xl bg-navy-950 px-7 font-display font-bold text-white transition-[transform,background-color,box-shadow] hover:-translate-y-0.5 hover:bg-navy-900 active:translate-y-[3px] active:shadow-[0_2px_0_0_var(--color-navy-deep)]"
            >
              <Link href="/programmes/school-partnerships">
                School Partnerships
                <ArrowRight className="size-5" aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
