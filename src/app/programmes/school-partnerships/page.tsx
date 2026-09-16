import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, School, Trophy, ClipboardList, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading, Eyebrow } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "School Partnerships",
  description:
    "Playtime manages early-morning multi-sports programmes for local schools and administrates the annual school football leagues for boys and girls in Walvis Bay.",
  alternates: { canonical: "/programmes/school-partnerships" },
};

export default function SchoolPartnershipsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-teal-50 to-background py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <Eyebrow>School Partnership Programmes</Eyebrow>
            <h1 className="text-balance font-display text-4xl font-black leading-[1.05] text-navy-950 sm:text-5xl lg:text-6xl">
              Sport, straight from the school gate
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Playtime manages multi-sport programmes on behalf of schools in
              the locale, and keeps school football in Walvis Bay alive,
              organised and thriving.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Multi-sports for schools */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Multi-sports programme"
              title="Early mornings, strong foundations"
            />
            <Reveal delay={0.1}>
              <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  Playtime manages a multi-sports programme on behalf of
                  schools in the locale. The programme is held in the early
                  morning and accommodates two schools for an hour each,
                  attending one after the other for the duration of the
                  morning. The target age groups for the programme are
                  learners under 7 years old.
                </p>
                <p>
                  The multi-sport approach has been scientifically proven as
                  one of the best ways to help young children develop a broad
                  variety of fundamental movement skills and physical
                  literacy, providing an excellent foundation for lifelong
                  physical activity.
                </p>
                <p>
                  We believe that this programme will not only benefit the
                  schools in offering physical education but also provide a
                  solid foundation for lifelong physical activity for the
                  learners.
                </p>
              </div>
              <ul className="mt-8 space-y-3">
                {[
                  { icon: School, text: "Two local schools, one hour each, every morning" },
                  { icon: Users, text: "Designed for learners under 7 years old" },
                  { icon: Trophy, text: "A foundation for lifelong physical activity" },
                ].map((item) => (
                  <li
                    key={item.text}
                    className="flex min-h-11 items-center gap-3 rounded-xl bg-teal-50 px-4 py-2.5 font-medium text-teal-900"
                  >
                    <item.icon className="size-5 shrink-0 text-teal-700" aria-hidden="true" />
                    {item.text}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-[2rem] border-4 border-white shadow-xl">
              <Image
                src="/images/school-program.webp"
                alt="A coach helping two young boys arrange colourful foam puzzle mats on a sports field"
                width={1200}
                height={800}
                loading="lazy"
                sizes="(min-width: 1024px) 44rem, 100vw"
                className="aspect-[3/2] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* School football leagues */}
      <section className="dots-dark bg-navy-950 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <Reveal className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-[2rem] border-4 border-white/10 shadow-2xl">
              <Image
                src="/images/g-10.webp"
                alt="Children in team vests celebrating with medals and a trophy in front of the Michale Sheehan Stand"
                width={900}
                height={675}
                loading="lazy"
                sizes="(min-width: 1024px) 44rem, 100vw"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading
              dark
              eyebrow="School football leagues"
              title="We run the leagues, so schools can focus on kids"
            />
            <Reveal delay={0.1}>
              <div className="mt-6 space-y-4 leading-relaxed text-navy-200">
                <p>
                  The Trust also administrates and manages school football
                  leagues for both boys and girls. Traditionally, schools in
                  the coastal region have always had strong school football
                  leagues, but due to the sheer lack of resources, these
                  leagues disintegrated into extremely ill-managed leagues run
                  primarily by teachers who had a passion for football
                  development but lacked the support of the local school
                  authorities or respective schools.
                </p>
                <p>
                  Playtime has provided relief to the schools of these vital
                  functions, including scheduling, administration, venue
                  selection, and provision of referees and other resources
                  required on the ground. By doing so, Walvis Bay now has a
                  well-run, organised, successful and stable annual school
                  football league for our local schools.
                </p>
                <p>
                  We believe that our ability to run these leagues for schools
                  has significantly improved physical education and sports
                  programmes for learners in Walvis Bay, and that it ensures
                  learners have access to quality physical education and
                  sports programmes that benefit them throughout their lives.
                </p>
              </div>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  { icon: ClipboardList, text: "Scheduling & administration" },
                  { icon: School, text: "Venue selection" },
                  { icon: Users, text: "Referees & match-day resources" },
                  { icon: Trophy, text: "Boys' & girls' leagues, every year" },
                ].map((item) => (
                  <li
                    key={item.text}
                    className="flex min-h-11 items-center gap-3 rounded-xl bg-white/5 px-4 py-2.5 text-sm font-medium text-navy-100"
                  >
                    <item.icon className="size-5 shrink-0 text-teal-300" aria-hidden="true" />
                    {item.text}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <h2 className="text-balance font-display text-3xl font-black text-navy-950 sm:text-4xl">
              Is your school interested?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-muted-foreground">
              We'd love to talk about how Playtime can support physical
              education at your school.
            </p>
            <Button
              asChild
              size="lg"
              className="press-amber mt-8 h-14 rounded-2xl bg-amber-brand px-7 font-display font-bold text-navy-950 transition-[transform,background-color,box-shadow] hover:-translate-y-0.5 hover:bg-amber-bright active:translate-y-[3px] active:shadow-[0_2px_0_0_var(--color-amber-deep)]"
            >
              <Link href="/contact">
                Get in touch
                <ArrowRight className="size-5" aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
