import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HandHeart, Megaphone, Package, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading, Eyebrow } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Volunteer your time, explore sponsorship opportunities, or simply spread the word – help Playtime Namibia create positive change and bright futures for children in Walvis Bay.",
  alternates: { canonical: "/get-involved" },
};

const pathways = [
  {
    icon: HandHeart,
    title: "Volunteer with us",
    text: "Give your time and skills – on the field, behind the scenes, or wherever you can help. Every hour makes a difference to a child in Walvis Bay.",
  },
  {
    icon: Package,
    title: "Sponsor a programme",
    text: "From kit and equipment to tournaments and facilities, sponsorship keeps free sport alive for more than a thousand local children.",
  },
  {
    icon: Megaphone,
    title: "Spread the word",
    text: "Follow our stories, share our events and tell the community what's happening at The Hub – visibility multiplies every contribution.",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <section className="dots-dark bg-navy-950 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <Eyebrow className="text-teal-300">Get Involved</Eyebrow>
              <h1 className="text-balance font-display text-4xl font-black leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                Your support keeps{" "}
                <span className="text-amber-brand">1,500+ children</span>{" "}
                playing every week
              </h1>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-navy-200">
                At Playtime Namibia, we deeply appreciate the ongoing support
                from both our local community and the broader business
                community. If you or your organisation is interested in
                learning more about Playtime and how you can make a
                meaningful difference in the lives of children in our
                community, we encourage you to reach out to us.
              </p>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-navy-200">
                Whether you're considering volunteering your time or
                exploring sponsorship opportunities, we welcome the chance to
                discuss how you can contribute. Together, we can create
                positive change and bright futures for the children in our
                community.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="h-14 rounded-2xl bg-amber-brand px-7 font-display font-bold text-navy-950 shadow-[0_5px_0_0_#c78f00] transition-all hover:-translate-y-0.5 hover:bg-[#ffc634]"
                >
                  <Link href="/contact">
                    <Mail className="size-5" aria-hidden="true" />
                    Contact us today
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-14 rounded-2xl border-2 border-teal-300 bg-transparent px-7 font-display font-bold text-teal-300 hover:bg-teal-300 hover:text-navy-950"
                >
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="overflow-hidden rounded-[2rem] border-4 border-white/10 shadow-2xl">
                <Image
                  src="/images/about-group.webp"
                  alt="Smiling children sitting on the grass in front of a Playtime Namibia sign"
                  width={1200}
                  height={900}
                  loading="lazy"
                  sizes="(min-width: 1024px) 44rem, 100vw"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pathways */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Ways to contribute"
            title="Every kind of support counts"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {pathways.map((pathway, i) => (
              <Reveal key={pathway.title} delay={i * 0.08}>
                <div className="h-full rounded-[1.75rem] border border-teal-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                  <span className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-amber-soft">
                    <pathway.icon className="size-7 text-teal-700" aria-hidden="true" />
                  </span>
                  <h2 className="font-display text-2xl font-black text-navy-950">
                    {pathway.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {pathway.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-14 rounded-[2rem] bg-teal-50 p-8 text-center sm:p-12">
              <p className="mx-auto max-w-2xl text-balance font-display text-2xl font-black text-navy-950 sm:text-3xl">
                "Together, we can create positive change and bright futures
                for the children in our community."
              </p>
              <Button
                asChild
                size="lg"
                className="mt-8 h-14 rounded-2xl bg-navy-950 px-7 font-display font-bold text-white shadow-[0_5px_0_0_#041420] transition-all hover:-translate-y-0.5 hover:bg-navy-900"
              >
                <Link href="/contact">
                  Start the conversation
                  <ArrowRight className="size-5" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
