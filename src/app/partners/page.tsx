import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading, Eyebrow } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { sponsors } from "@/lib/site";

export const metadata: Metadata = {
  title: "International Partners",
  description:
    "Playtime Namibia’s international partners: Global United FC (Germany) and ASC Göttingen, plus the local sponsors who keep our teams playing.",
  alternates: { canonical: "/partners" },
};

export default function PartnersPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-teal-50 to-background py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <Eyebrow>International Partners</Eyebrow>
            <h1 className="text-balance font-display text-4xl font-black leading-[1.05] text-navy-950 sm:text-5xl lg:text-6xl">
              Friends far from home
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              From climate-action football in Germany to a decade-long coach
              exchange programme, Playtime’s reach extends well beyond Walvis
              Bay.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Global United */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Global United FC"
              title="Football for the planet"
            />
            <Reveal delay={0.1}>
              <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  Global United FC is a non-profit registered association in
                  Germany that protects the environment and raises awareness
                  of climate change through the unifying power of soccer. The
                  association engages more than 500 former professional and
                  partly active football players from around the world in
                  charity matches and individual projects in endangered or
                  uncommon locations.
                </p>
                <p>
                  Playtime recognises the importance of environmental
                  conservation and supports Global United’s mission through a
                  mutual collaboration and partnership. We believe soccer can
                  be a powerful tool for promoting environmental awareness and
                  making a positive impact on the world.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild variant="outline" className="h-12 rounded-xl border-2 font-display font-bold">
                  <a
                    href="https://www.globalunitedfc.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit the Global United FC website (opens in a new tab)"
                  >
                    <Globe className="size-4" aria-hidden="true" />
                    globalunitedfc.com
                  </a>
                </Button>
                <Button asChild variant="outline" className="h-12 rounded-xl border-2 font-display font-bold">
                  <a
                    href="https://www.facebook.com/globalunitedfc"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Global United FC on Facebook (opens in a new tab)"
                  >
                    Facebook
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-[2rem] border-4 border-white shadow-xl">
              <Image
                src="/images/global-united-team.webp"
                alt="A group of men wearing matching pink Global United sports jerseys posing for a team photo"
                width={1000}
                height={700}
                loading="lazy"
                sizes="(min-width: 1024px) 44rem, 100vw"
                className="aspect-[10/7] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ASC Göttingen */}
      <section className="dots-dark bg-navy-950 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <Reveal className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-[2rem] border-4 border-white/10 shadow-2xl">
              <Image
                src="/images/asg-team.webp"
                alt="A youth soccer team and their coaches posing for a group photo in front of a goalpost on a dirt field"
                width={1000}
                height={700}
                loading="lazy"
                sizes="(min-width: 1024px) 44rem, 100vw"
                className="aspect-[10/7] w-full object-cover"
              />
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading
              dark
              eyebrow="ASC Göttingen"
              title="A coach exchange that keeps on giving"
            />
            <Reveal delay={0.1}>
              <div className="mt-6 space-y-4 leading-relaxed text-navy-200">
                <p>
                  In 2016, Playtime established a long-term partnership with
                  ASC Göttingen, a leading sports organisation in Germany.
                  This partnership continues to this day and has been a
                  significant factor in the success of Playtime over the
                  years.
                </p>
                <p>
                  The partnership provides a continuous flow of young coaches
                  from various disciplines who join Playtime for periods of up
                  to six months, with many participants electing to return to
                  Playtime for subsequent tenures. The ASG exchange programme
                  is financed by the German state as part of the
                  "Weltwärts" programme, a collaboration between Germany and
                  Namibia for youth development.
                </p>
                <p>
                  Playtime provides each volunteer with free accommodation,
                  transport and other necessary resources during their tenure
                  in Namibia. This partnership remains pivotal to Playtime’s
                  success today.
                </p>
              </div>
              <Button
                asChild
                variant="outline"
                className="mt-8 h-12 rounded-xl border-2 border-teal-300 bg-transparent font-display font-bold text-teal-300 hover:bg-teal-300 hover:text-navy-950"
              >
                <a
                  href="https://asc46.de/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit the ASC Göttingen website (opens in a new tab)"
                >
                  <Globe className="size-4" aria-hidden="true" />
                  asc46.de
                </a>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Local sponsors */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            title="A thank you to our long-term sponsors"
            lead="None of this happens without the businesses of Walvis Bay backing us, week in and week out."
          />
          <Reveal delay={0.1}>
            <ul className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
              {sponsors.map((sponsor) => (
                <li
                  key={sponsor.name}
                  className="flex min-h-28 items-center justify-center rounded-2xl border border-teal-100 bg-white p-6 shadow-sm"
                >
                  <Image
                    src={sponsor.src}
                    alt={`${sponsor.name} logo`}
                    width={140}
                    height={70}
                    loading="lazy"
                    sizes="150px"
                    className="max-h-16 w-auto object-contain"
                  />
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-12 flex justify-center">
              <Button
                asChild
                size="lg"
                className="h-14 rounded-2xl press-amber bg-amber-brand px-7 font-display font-bold text-navy-950 transition-[transform,background-color,box-shadow] hover:-translate-y-0.5 hover:bg-amber-bright active:translate-y-[3px] active:shadow-[0_2px_0_0_var(--color-amber-deep)]"
              >
                <Link href="/get-involved">
                  <HeartHandshake className="size-5" aria-hidden="true" />
                  Become a sponsor
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
