import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading, Eyebrow } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Coaching Team",
  description:
    "Meet the Playtime Namibia coaching team – head coaches, senior coaches and junior coaches developing young players at The Hub in Kuisebmond and the Atlantis Sports Club, Walvis Bay.",
  alternates: { canonical: "/coaches" },
};

const coaches = [
  {
    name: "Osvaldo Dos Santos",
    role: "Head Coach & Instructor",
    venue: "Atlantis",
    image: "/images/coach-osvaldo.webp",
    alt: "Osvaldo Dos Santos, head coach, in a white polo shirt with a whistle on the sports field",
    bio: "Coaches the U9, U11, U13 and U16 boys' soccer teams at Playtime Namibia / Atlantis Sport Club, Walvis Bay.",
  },
  {
    name: "Steven Damaseb",
    role: "Head Coach",
    venue: "The Hub",
    image: "/images/coach-steven.webp",
    alt: "Steven Damaseb, head coach, in a navy blue zip-up jacket with arms crossed on the turf pitch",
    bio: "Head Coach of the U11, U13, U15 and U17 boys' soccer teams at The Hub.",
  },
  {
    name: "Tommy Mvula",
    role: "Senior Coach",
    venue: "Atlantis",
    image: "/images/coach-tommy.webp",
    alt: "Tommy Mvula, senior coach, in a royal blue t-shirt on a grassy field",
    bio: "Coaches the U11, U13 and U15 boys' soccer teams at Atlantis.",
  },
  {
    name: "Rudolf Bester",
    role: "Senior Coach",
    venue: "Atlantis",
    image: "/images/coach-rudolf.webp",
    alt: "Rudolf Bester, senior coach, in a black long-sleeve athletic top on the sports pitch",
    bio: "Coaches the U11, U13 and U15 boys' soccer teams at Atlantis.",
  },
  {
    name: "Bali Koci",
    role: "Senior Coach",
    venue: "Atlantis",
    image: "/images/coach-bali.webp",
    alt: "Bali Koci, senior coach, in a dark Puma polo shirt on the training field",
    bio: "Coaches the U9 girls' and boys' soccer team at Atlantis.",
  },
  {
    name: "Jonas “Icy” Katiti",
    role: "Senior Coach",
    venue: "Atlantis",
    image: "/images/coach-jonas.webp",
    alt: "Jonas Icy Katiti, senior coach, in a white t-shirt and blue cap on the field",
    bio: "Senior coach for the U13 and U15 boys' soccer team at Atlantis.",
  },
  {
    name: "Marius Jermain Persens",
    role: "Senior Coach",
    venue: "The Hub",
    image: "/images/coach-marius.webp",
    alt: "Marius Jermain Persens, senior coach, in a navy Playtime track jacket",
    bio: "Coach for the U11, U13, U15 and U17 boys' soccer teams at The Hub.",
  },
  {
    name: "Matta Desire Nanyome",
    role: "Coach",
    venue: "The Hub",
    image: "/images/coach-matta.webp",
    alt: "Matta Desire Nanyome, coach, in a striped hoodie on the sports field",
    bio: "Coaches the girls' soccer team at The Hub.",
  },
  {
    name: "Cyppres Mokaleng",
    role: "Coach",
    venue: "The Hub",
    image: "/images/coach-cyppres.webp",
    alt: "Cyppres Mokaleng, coach, in a navy Playtime Namibia jacket and cap",
    bio: "A coach who came through the Playtime ranks, now coaching at The Hub.",
  },
  {
    name: "Chander de Gouveia",
    role: "Junior Coach",
    venue: "Atlantis",
    image: "/images/coach-chander.webp",
    alt: "Chander de Gouveia, junior coach, in a black coach jacket on a grassy field",
    bio: "A junior coach after coming through the Playtime ranks.",
  },
  {
    name: "Ussia Nghede",
    role: "Junior Coach",
    venue: "Atlantis",
    image: "/images/coach-ussia.webp",
    alt: "Ussia Nghede, junior coach, in a black coach jacket with blue details on a community sports field",
    bio: "A junior coach after coming through the Playtime ranks.",
  },
];

export default function CoachesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-teal-50 to-background py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <Eyebrow>Coaching Team</Eyebrow>
            <h1 className="text-balance font-display text-4xl font-black leading-[1.05] text-navy-950 sm:text-5xl lg:text-6xl">
              The people on the ground, every day
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              From head coaches to juniors who came up through the Playtime
              ranks themselves – this is the team that trains more than a
              thousand children a week across Walvis Bay.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {coaches.map((coach, i) => (
              <Reveal key={coach.name} delay={(i % 4) * 0.06}>
                <article className="group h-full overflow-hidden rounded-[1.75rem] border border-teal-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                  <div className="relative">
                    <Image
                      src={coach.image}
                      alt={coach.alt}
                      width={500}
                      height={600}
                      loading="lazy"
                      sizes="(min-width: 1280px) 18rem, (min-width: 1024px) 24rem, (min-width: 640px) 45vw, 100vw"
                      className="aspect-[5/6] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <span
                      className={
                        coach.venue === "The Hub"
                          ? "absolute left-4 top-4 rounded-full bg-teal-600 px-3.5 py-1.5 font-display text-xs font-bold uppercase tracking-widest text-white shadow"
                          : "absolute left-4 top-4 rounded-full bg-navy-950 px-3.5 py-1.5 font-display text-xs font-bold uppercase tracking-widest text-amber-brand shadow"
                      }
                    >
                      {coach.venue}
                    </span>
                  </div>
                  <div className="p-5">
                    <h2 className="font-display text-xl font-black leading-tight text-navy-950">
                      {coach.name}
                    </h2>
                    <p className="mt-1 text-sm font-semibold text-teal-700">
                      {coach.role}
                    </p>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                      {coach.bio}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches corner CTA */}
      <section className="dots-dark bg-navy-950 py-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-4 text-center sm:px-6">
          <Reveal>
            <GraduationCap className="mx-auto mb-4 size-10 text-teal-300" aria-hidden="true" />
            <h2 className="text-balance font-display text-3xl font-black text-white sm:text-4xl">
              Coaches, keep learning
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-navy-200">
              The Coaches' Corner is a growing collection of drills, lessons
              and video resources for our local coaching community.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 h-14 rounded-2xl bg-amber-brand px-7 font-display font-bold text-navy-950 shadow-[0_5px_0_0_#c78f00] transition-all hover:-translate-y-0.5 hover:bg-[#ffc634]"
            >
              <Link href="/coaches-corner">
                Visit the Coaches' Corner
                <ArrowRight className="size-5" aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
