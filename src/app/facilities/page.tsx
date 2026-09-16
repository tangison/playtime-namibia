import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading, Eyebrow } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Facilities: The Hub & Atlantis",
  description:
    "The Hub in Kuisebmond, Walvis Bay: a state-of-the-art enclosed artificial turf field built by Playtime since 2017, plus the Atlantis sports grounds in town.",
  alternates: { canonical: "/facilities" },
};

const hubAmenities = [
  "40 × 40 m enclosed artificial turf field",
  "Toilets and showers",
  "Spectator stand",
  "Streamlined administration office",
  "Clay soccer field (adjacent)",
  "Evolving cricket training ground",
  "Newly unveiled cricket batting nets",
  "Grass training field available nearby",
];

export default function FacilitiesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-teal-50 to-background py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <Eyebrow>Facilities</Eyebrow>
            <h1 className="text-balance font-display text-4xl font-black leading-[1.05] text-navy-950 sm:text-5xl lg:text-6xl">
              Where Walvis Bay comes to play
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              From our flagship Hub in Kuisebmond to the Atlantis sports
              grounds in town. Every child in Walvis Bay is never far from a
              Playtime venue.
            </p>
          </Reveal>
        </div>
      </section>

      {/* The Hub */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="The Hub · Kuisebmond"
                title="The heart of sporting excellence"
              />
              <Reveal delay={0.1}>
                <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
                  <p>
                    Step into the heart of sporting excellence at The Hub,
                    meticulously crafted by Playtime since 2017. Nestled in
                    the vibrant Kuisebmond district of Walvis Bay, our premier
                    facility stands as a beacon of modernity, setting new
                    standards for sporting venues in the region.
                  </p>
                  <p>
                    Centrally located next to the iconic Blue Waters Stadium
                    and amidst the bustling primary shopping district, The Hub
                    is a bustling epicentre where all major activities are
                    orchestrated with precision. Our flagship offering, the
                    Hub Playtime sports field facility, boasts a
                    state-of-the-art enclosed artificial turf field measuring
                    40 × 40 metres.
                  </p>
                  <p>
                    Adjacent to this, you'll find a sprawling clay soccer
                    field and an evolving cricket training ground awaiting its
                    final touches. A grass field for training sessions,
                    although not owned by Playtime, is readily available for
                    use, and we have also recently unveiled a cricket batting
                    nets facility, seamlessly integrated with our existing
                    infrastructure.
                  </p>
                  <p>
                    The Hub is a perpetual work in progress, with imminent
                    plans to cater to a diverse array of sports disciplines,
                    including basketball in the near future. Long-term
                    aspirations include expanding our offerings to encompass
                    even more facilities, ensuring that The Hub remains the
                    ultimate destination for sports enthusiasts, now and in
                    the years to come.
                  </p>
                </div>
                <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
                  {hubAmenities.map((amenity) => (
                    <li
                      key={amenity}
                      className="flex min-h-11 items-center gap-2.5 rounded-xl bg-teal-50 px-4 py-2.5 text-sm font-medium text-teal-900"
                    >
                      <CheckCircle2 className="size-5 shrink-0 text-teal-600" aria-hidden="true" />
                      {amenity}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <div className="space-y-6">
              <Reveal delay={0.1}>
                <div className="overflow-hidden rounded-[2rem] border-4 border-white shadow-xl">
                  <Image
                    src="/images/hub-field.webp"
                    alt="The Hub's enclosed 40 × 40 metre artificial turf field in Kuisebmond under a blue sky"
                    width={1600}
                    height={1000}
                    loading="lazy"
                    sizes="(min-width: 1024px) 44rem, 100vw"
                    className="aspect-[16/10] w-full object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="overflow-hidden rounded-[2rem] border-4 border-white shadow-xl">
                  <Image
                    src="/images/hub-training.webp"
                    alt="Coaches and players running a training drill with cones in front of the Michale Sheehan Stand at The Hub"
                    width={1200}
                    height={720}
                    loading="lazy"
                    sizes="(min-width: 1024px) 44rem, 100vw"
                    className="aspect-[5/3] w-full object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Atlantis */}
      <section className="dots-dark bg-navy-950 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <SectionHeading
              dark
              eyebrow="Atlantis · In town"
              title="The Atlantis sports grounds"
            />
            <Reveal delay={0.1}>
              <p className="mt-6 leading-relaxed text-navy-200">
                The Atlantis sports grounds are set in town in Walvis Bay and
                are home to approximately 250 weekly participants, engaged
                primarily in soccer. Age groups participating range from under
                7 to under 17 and include both boys and girls.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full bg-white/10 px-5 py-2.5 font-display text-sm font-bold text-teal-300">
                  ~250 weekly participants
                </span>
                <span className="rounded-full bg-white/10 px-5 py-2.5 font-display text-sm font-bold text-teal-300">
                  U7-U17, boys & girls
                </span>
                <span className="rounded-full bg-white/10 px-5 py-2.5 font-display text-sm font-bold text-teal-300">
                  Home of Atlantis Sport Club
                </span>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-[2rem] border-4 border-white/10 shadow-2xl">
              <Image
                src="/images/atlantis-venue.webp"
                alt="A youth soccer team in light blue and white striped jerseys posing for a team photo at the Atlantis sports grounds"
                width={1000}
                height={750}
                loading="lazy"
                sizes="(min-width: 1024px) 44rem, 100vw"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-soft py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <MapPin className="mx-auto mb-4 size-10 text-teal-700" aria-hidden="true" />
            <h2 className="text-balance font-display text-3xl font-black text-navy-950 sm:text-4xl">
              Come and see us
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-navy-700">
              The Hub is next to Blue Waters Stadium in Kuisebmond. Want to
              visit, train, or host an event? Get in touch.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 h-14 rounded-2xl press-navy bg-navy-950 px-7 font-display font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-navy-900 active:translate-y-[3px] active:shadow-[0_2px_0_0_var(--color-navy-deep)]"
            >
              <Link href="/contact">
                Contact us
                <ArrowRight className="size-5" aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
