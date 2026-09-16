import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  HeartHandshake,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";
import { StatBand } from "@/components/stat-band";
import { Reveal } from "@/components/reveal";
import { HeroCarousel } from "@/components/hero-carousel";
import { ScrollCarousel } from "@/components/scroll-carousel";

export const metadata: Metadata = {
  title: "Playtime Namibia | Empowering Youth Through Sports in Walvis Bay",
  description:
    "The Playtime Sport Development Trust is a charitable organisation established in 2015 in Walvis Bay, Namibia, giving children free access to soccer, cricket, athletics and multi-sports, teaching life skills through sport.",
  alternates: { canonical: "/" },
};

const heroSlides = [
  {
    src: "/images/hero-kids.webp",
    alt: "Children in sports vests running across the artificial turf field at The Hub, Kuisebmond",
  },
  {
    src: "/images/hub-field.webp",
    alt: "The Hub's enclosed artificial turf field in Kuisebmond under a blue sky",
  },
  {
    src: "/images/multisports.webp",
    alt: "Young children in colourful vests playing with a portable hoop during a multi-sports session",
  },
];

const sports = [
  {
    name: "Soccer",
    image: "/images/soccer.webp",
    alt: "Children in orange and green training bibs playing soccer on the artificial turf at The Hub",
    participants: "~1,200 participants",
    ages: "U7-U17, boys & girls",
    description:
      "Our primary sports code. Daily training sessions, weekend mini-tournaments and games at The Hub in Kuisebmond and the Atlantis Sports Club.",
  },
  {
    name: "Cricket",
    image: "/images/cricket.webp",
    alt: "Two young cricket players in navy blue shirts holding bats and protective gear",
    participants: "~250 daily participants",
    ages: "Boys & girls",
    description:
      "A flourishing program that has nurtured players who went on to represent the national team, bringing cricket to communities it rarely reaches.",
  },
  {
    name: "Multi-Sports",
    image: "/images/multisports.webp",
    alt: "Young children in colourful vests playing with a portable hoop during a multi-sports session",
    participants: "Early mornings",
    ages: "Under 7s",
    description:
      "A scientifically proven way for younger children to build fundamental movement skills and physical literacy before their teen years.",
  },
  {
    name: "Athletics",
    image: "/images/athletics.webp",
    alt: "A boy in a yellow IAAF vest running with a relay baton at athletics training",
    participants: "~85 participants",
    ages: "U9-U19",
    description:
      "Track and field training three times a week, preparing athletes for school, regional and national competition.",
  },
];

const stripPhotos = [
  { src: "/images/g-02.webp", alt: "A large group of children in colourful vests celebrating with medals and a trophy in front of the Michale Sheehan Stand", caption: "Medal day at the Michale Sheehan Stand" },
  { src: "/images/g-05.webp", alt: "Children competing for the ball during a match while adults watch from the sidelines", caption: "Match day action" },
  { src: "/images/g-07.webp", alt: "Three young children sitting on the grass assembling colourful foam puzzle mats", caption: "Multi-sports for the little ones" },
  { src: "/images/g-10.webp", alt: "Children in sports vests celebrating with medals and a large trophy", caption: "Trophy celebrations" },
  { src: "/images/g-16.webp", alt: "A girl practising her dribbling skills through cones during a soccer training session", caption: "Dribbling practice" },
  { src: "/images/g-20.webp", alt: "A young girl in a red vest practising barefoot dribbling around cones on the artificial turf pitch", caption: "Barefoot skills session" },
  { src: "/images/g-27.webp", alt: "Children in blue training bibs running and playing with a soccer ball on a sunny day", caption: "Running with the ball" },
  { src: "/images/g-29.webp", alt: "Children competing for the ball during a lively soccer match on the green field", caption: "Full-throttle football" },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-teal-50 via-background to-background">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:grid-cols-2 lg:gap-10 lg:pb-24 lg:pt-20 xl:gap-16">
          <div>
            <Reveal>
              <Badge className="gap-2 rounded-full border-teal-200 bg-white px-4 py-2 font-display text-xs font-bold uppercase tracking-[0.14em] text-teal-800 shadow-sm">
                <MapPin className="size-3.5" aria-hidden="true" />
                Walvis Bay, Namibia
              </Badge>
              <h1 className="mt-6 text-balance font-display text-[42px] font-black leading-[1.04] text-navy-950 sm:text-6xl lg:text-[68px]">
                Empowering{" "}
                <span className="relative inline-block">
                  Youth
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 12"
                    fill="none"
                    aria-hidden="true"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 9C60 3 140 3 198 9"
                      stroke="var(--color-amber-brand)"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                Through Sports
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Free access to sport for every child in Walvis Bay, and the
                life skills that come with it.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Button
                  asChild
                  size="lg"
                  className="press-amber h-14 rounded-2xl bg-amber-brand px-7 font-display text-base font-bold text-navy-950 transition-all hover:-translate-y-0.5 hover:bg-amber-bright active:translate-y-[3px] active:shadow-[0_2px_0_0_var(--color-amber-deep)]"
                >
                  <Link href="/get-involved">
                    <HeartHandshake className="size-5" aria-hidden="true" />
                    Get Involved
                  </Link>
                </Button>
                <Link
                  href="/programmes"
                  className="group inline-flex min-h-11 items-center gap-2 py-2 font-display text-base font-bold text-navy-950 underline-offset-4 transition-colors hover:text-teal-700 hover:underline"
                >
                  Our Programmes
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Hero visual: photo slider */}
          <Reveal delay={0.12} className="relative">
            <div className="relative z-10">
              <div className="overflow-hidden rounded-[2rem] border-4 border-white shadow-2xl">
                <HeroCarousel
                  slides={heroSlides}
                  className="aspect-[4/4.4] sm:aspect-[4/3.4] lg:aspect-[4/4.2]"
                />
              </div>
              {/* established sticker */}
              <div className="absolute -left-4 -top-5 rotate-[-6deg] rounded-2xl bg-navy-950 px-5 py-3 font-display font-black text-white shadow-xl sm:-left-8">
                <p className="text-2xl leading-none text-amber-brand">2015</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-teal-300">
                  Established
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <StatBand />

      {/* ── Who we are ───────────────────────────────────── */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <Reveal className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-[1.75rem] border-4 border-white shadow-lg">
                <Image
                  src="/images/about-group.webp"
                  alt="Smiling children sitting on the grass in front of a Playtime Namibia sign"
                  width={800}
                  height={600}
                  sizes="(min-width: 1024px) 22rem, 45vw"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="mt-10 overflow-hidden rounded-[1.75rem] border-4 border-white shadow-lg">
                <Image
                  src="/images/g-04.webp"
                  alt="Six young boys in training bibs posing together in front of a soccer goal"
                  width={800}
                  height={600}
                  loading="lazy"
                  sizes="(min-width: 1024px) 22rem, 45vw"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <SectionHeading
              title="A key player in Namibian youth sport"
              lead="Playtime gives as many children and young people as possible free access to sports activities, teaching them life skills with the help of sport and promoting their development, education and empowerment."
            />
            <Reveal delay={0.1}>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Taking into consideration our employees, youth participation,
                infrastructure, breadth and the number of sporting young people
                per week, Playtime Namibia is undoubtedly a key player in this
                space in Namibia. Through its approach, Playtime has provided
                significant, tried and tested development for the youth in the
                coastal town of Walvis Bay.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Inclusive", "Life skills", "Community", "Education"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-800"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
              <Link
                href="/about"
                className="group mt-8 inline-flex min-h-11 items-center gap-2 py-2 font-display text-base font-bold text-teal-700 underline-offset-4 hover:underline"
              >
                More about the Trust
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Sports codes carousel ────────────────────────── */}
      <section className="bg-gradient-to-b from-background to-teal-50/60 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            title="Four disciplines, one goal"
            lead="Each programme develops participants through sport into well-rounded individuals who can contribute positively to their communities."
            className="max-w-2xl"
          />
          <ScrollCarousel
            label="Sports programmes"
            className="mt-12"
            itemClass="w-[86%] sm:w-[46%] lg:w-[31.5%]"
          >
            {sports.map((sport) => (
              <Link
                key={sport.name}
                href="/programmes"
                className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-teal-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="relative">
                  <Image
                    src={sport.image}
                    alt={sport.alt}
                    width={800}
                    height={600}
                    loading="lazy"
                    sizes="(min-width: 1024px) 26rem, (min-width: 640px) 45vw, 86vw"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl font-black text-navy-950">
                    {sport.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {sport.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-4">
                    <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-bold text-teal-800">
                      {sport.participants}
                    </span>
                    <span className="rounded-full bg-navy-50 px-3 py-1 text-xs font-bold text-navy-700">
                      {sport.ages}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </ScrollCarousel>
        </div>
      </section>

      {/* ── The Hub feature ──────────────────────────────── */}
      <section className="dots-dark relative overflow-hidden bg-navy-950 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <SectionHeading
              dark
              title="The Hub, the heart of sport in Kuisebmond"
              lead="Crafted by Playtime since 2017 and nestled next to the iconic Blue Waters Stadium, our premier facility sets the standard for sporting venues in the region."
            />
            <Reveal delay={0.1}>
              <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  "40 × 40 m enclosed artificial turf",
                  "Spectator stand",
                  "Toilets & showers",
                  "Administration office",
                  "Clay soccer field",
                  "Cricket batting nets",
                ].map((amenity) => (
                  <li
                    key={amenity}
                    className="flex min-h-11 items-center gap-2.5 rounded-xl bg-white/5 px-4 py-2.5 text-sm font-medium text-navy-100"
                  >
                    <Check
                      className="size-4 shrink-0 text-teal-300"
                      aria-hidden="true"
                    />
                    {amenity}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                size="lg"
                className="press-amber mt-8 h-13 rounded-2xl bg-amber-brand px-7 font-display font-bold text-navy-950 transition-all hover:-translate-y-0.5 hover:bg-amber-bright active:translate-y-[3px] active:shadow-[0_2px_0_0_var(--color-amber-deep)]"
              >
                <Link href="/facilities">
                  Explore our facilities
                  <ArrowRight className="size-5" aria-hidden="true" />
                </Link>
              </Button>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="relative">
            <div className="overflow-hidden rounded-[2rem] border-4 border-white/10 shadow-2xl">
              <Image
                src="/images/hub-field.webp"
                alt="The Hub's enclosed artificial turf field in Kuisebmond under a blue sky"
                width={1600}
                height={1000}
                loading="lazy"
                sizes="(min-width: 1024px) 44rem, 100vw"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-3 rotate-[-3deg] rounded-2xl bg-navy-950 px-5 py-3 font-display font-black shadow-xl ring-1 ring-white/15 sm:-left-6">
              <p className="text-lg leading-none text-amber-brand">2017</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-teal-300">
                built by Playtime
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Photo strip ──────────────────────────────────── */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto flex max-w-7xl flex-wrap items-end justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Moments from the field"
            lead="Training sessions, medal days and everything in between."
            className="max-w-xl"
          />
          <Link
            href="/gallery"
            className="group inline-flex min-h-11 items-center gap-2 py-2 font-display text-base font-bold text-teal-700 underline-offset-4 hover:underline"
          >
            View the full gallery
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
        <ScrollCarousel
          label="Photo highlights"
          bleed
          className="mt-10"
          itemClass="w-[72%] sm:w-[44%] lg:w-[26%]"
        >
          {stripPhotos.map((photo) => (
            <figure key={photo.src} className="pb-2">
              <div className="overflow-hidden rounded-[1.5rem] border-4 border-white shadow-lg">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={800}
                  height={600}
                  loading="lazy"
                  sizes="(min-width: 1024px) 22rem, (min-width: 640px) 44vw, 72vw"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 px-1 text-sm font-medium text-muted-foreground">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </ScrollCarousel>
      </section>

      {/* ── Get involved CTA ─────────────────────────────── */}
      <section className="bg-amber-soft py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <h2 className="text-balance font-display text-3xl font-black leading-tight text-navy-950 sm:text-5xl">
              Help us build brighter futures,{" "}
              <span className="text-teal-700">one child at a time</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-navy-700">
              Whether you're considering volunteering your time or exploring
              sponsorship opportunities, we'd love to discuss how you can make
              a meaningful difference for children in Walvis Bay.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="press-navy h-14 rounded-2xl bg-navy-950 px-7 font-display text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-navy-900 active:translate-y-[3px] active:shadow-[0_2px_0_0_var(--color-navy-deep)]"
              >
                <Link href="/get-involved">
                  <HeartHandshake className="size-5" aria-hidden="true" />
                  Get Involved
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 rounded-2xl border-2 border-navy-950 bg-transparent px-7 font-display text-base font-bold text-navy-950 transition-all hover:-translate-y-0.5 hover:bg-navy-950 hover:text-white"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
