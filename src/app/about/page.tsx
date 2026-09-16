import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Landmark, Building2, Banknote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading, Eyebrow } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The Playtime Sport Development Trust: a registered charitable trust established in 2015 in Walvis Bay, Namibia. Our philosophy, our trustees, and how the Trust is run.",
  alternates: { canonical: "/about" },
};

const trustees = [
  {
    name: "Eliphas “Safile” Shivute",
    role: "Trustee",
    image: "/images/trustee-eliphas.webp",
    alt: "Eliphas Shivute, trustee, wearing a blue and black zip-up jacket",
    bio: "A distinguished Namibian retired international footballer and accomplished businessman. One of the most successful soccer players in Namibian history, he played professionally in China, Europe and domestically. He was the first Namibian to play for a top-level European team, and the scorer of the first international goal for the Brave Warriors. Since retiring from football, Eliphas has enjoyed continued success in the business world.",
  },
  {
    name: "Sandro De Gouveia",
    role: "Trustee",
    image: "/images/trustee-sandro.webp",
    alt: "Sandro De Gouveia, trustee, in a white sports jersey with blue trim",
    bio: "Made his mark as a teenage soccer player on the star-studded Cape Technikon team in Cape Town. He was soon elected to represent the Springbok team and then the Brave Warriors, where he eventually became Captain and amassed a total of 20 international caps. Sandro is also a highly respected businessman.",
  },
  {
    name: "Alex Kirov",
    role: "Trustee",
    image: "/images/trustee-alex.webp",
    alt: "Alex Kirov, trustee, in a dark checkered shirt in an office setting",
    bio: "Has long been involved in the development of soccer on the coast and has played a key role in its growth. In addition to his dedication to coastal soccer, Alex is a well-known and respected businessman and local soccer player.",
  },
];

const structure = [
  {
    icon: Landmark,
    title: "Legal Entity & Administrative Structure",
    items: [
      "Registered Trust",
      "Founder & three Trustees",
      "Trust Deed",
      "Auditors: WBM",
      "Bankers: Bank Windhoek",
      "Management Structures",
    ],
  },
  {
    icon: Banknote,
    title: "Funding",
    items: ["San Fishing (Pty) Ltd."],
  },
  {
    icon: Building2,
    title: "Other Partners",
    items: [
      "Kuiseb Shop 4 Value",
      "Kuiseb Powersave",
      "LHU Blue Waters Sport Club",
      "Other competition sponsors",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-b from-teal-50 to-background py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <Eyebrow>About Playtime</Eyebrow>
            <h1 className="text-balance font-display text-4xl font-black leading-[1.05] text-navy-950 sm:text-5xl lg:text-6xl">
              Sport as a force for good on the coast
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              The Playtime Sport Development Trust is a non-governmental
              charitable organisation established in 2015 in Walvis Bay,
              Namibia. We enable sustainable youth and community development
              through sports activities for children and young people of
              different age groups.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <SectionHeading
              title="Free access to sport, and the life skills it teaches"
            />
            <Reveal delay={0.1}>
              <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  The primary objective of Playtime Namibia is to give as many
                  children and young people as possible free access to sports
                  activities, teaching them life skills with the help of
                  sport. Playtime aims to promote the development, education
                  and empowerment of youth through its programmes.
                </p>
                <p>
                  Taking into consideration the number of employees, youth
                  participation, infrastructure, breadth, and the number of
                  sporting young people per week, Playtime Namibia is
                  undoubtedly a key player in this space in Namibia. Through
                  its approach, Playtime has been able to provide significant,
                  tried and tested development for the youth in the coastal
                  town of Walvis Bay.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="relative">
            <div className="overflow-hidden rounded-[2rem] border-4 border-white shadow-xl">
              <Image
                src="/images/philosophy.webp"
                alt="A large group of smiling children and their coach posing together on the grass"
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

      {/* Philosophy */}
      <section className="dots-dark bg-navy-950 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading
            dark
            align="center"
            eyebrow="Philosophy"
            title="Every child deserves the opportunity to play"
          />
          <Reveal delay={0.1}>
            <div className="mt-8 space-y-5 text-pretty leading-relaxed text-navy-200">
              <p>
                Playtime embodies a commitment to inclusivity and widespread
                participation. We believe that every child deserves the
                opportunity to engage in sports and recreational activities,
                provided they adhere to a straightforward set of rules.
              </p>
              <p>
                Through our programmes, we aim to nurture and empower the
                youth. We recognise sport as a powerful tool for personal
                development, equipping young individuals with essential life
                skills for a brighter future. Our mission extends beyond the
                field, striving to cultivate individuals who contribute
                positively to society. Central to our approach is the belief
                that the skills learned through sport carry over into
                adulthood, enhancing employment prospects and fostering
                lifelong success.
              </p>
              <p>
                Our philosophy, curriculum and strategic vision are rooted in
                extensive research into effective coaching methodologies for
                children's football from around the world, drawing insights
                from England, France, Brazil, Germany, the United States and
                Australia, and leveraging tried-and-tested techniques to not
                only develop technical proficiency but also instil a sense of
                social responsibility.
              </p>
              <p>
                Recognising the pivotal role of the education system, we have
                identified schools as our primary avenue for catalysing
                meaningful change in the lives of young people. That is why
                we've dedicated almost a decade to developing the Playtime
                Youth Development Trust initiative, ensuring a comprehensive
                and sustainable approach to youth empowerment.
              </p>
            </div>
            <p className="mt-8 rounded-2xl bg-white/5 p-6 text-center font-display text-xl font-bold text-teal-300">
              Together, we're building a brighter future, one child at a time.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Trustees */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Leadership"
            title="Meet our trustees"
            lead="Playtime is governed by a founder and three trustees who bring together careers in international sport and business."
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {trustees.map((trustee, i) => (
              <Reveal key={trustee.name} delay={i * 0.1}>
                <article className="h-full overflow-hidden rounded-[1.75rem] border border-teal-100 bg-white shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                  <div className="relative">
                    <Image
                      src={trustee.image}
                      alt={trustee.alt}
                      width={500}
                      height={620}
                      loading="lazy"
                      sizes="(min-width: 1024px) 24rem, 100vw"
                      className="aspect-[4/5] w-full object-cover object-top"
                    />
                    <span className="absolute bottom-4 left-4 rounded-full bg-navy-950/85 px-4 py-1.5 font-display text-xs font-bold uppercase tracking-widest text-amber-brand">
                      {trustee.role}
                    </span>
                  </div>
                  <div className="p-6">
                    <h2 className="font-display text-2xl font-black text-navy-950">
                      {trustee.name}
                    </h2>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                      {trustee.bio}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Structure */}
      <section className="bg-gradient-to-b from-background to-teal-50/60 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="How the Trust is run"
          />
          <Reveal delay={0.1}>
            <div className="mt-12 grid gap-10 overflow-hidden rounded-[1.75rem] border border-teal-100 bg-white px-8 py-10 shadow-sm md:grid-cols-3 md:divide-x md:divide-teal-100 md:gap-0 md:px-0">
              {structure.map((block) => (
                <div key={block.title} className="md:px-8">
                  <div className="flex items-center gap-3">
                    <block.icon className="size-5 shrink-0 text-teal-700" aria-hidden="true" />
                    <h2 className="font-display text-lg font-black text-navy-950">
                      {block.title}
                    </h2>
                  </div>
                  <ul className="mt-5 space-y-2.5 md:mt-6">
                    {block.items.map((item) => (
                      <li key={item} className="text-[15px] text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex justify-center">
              <Button
                asChild
                size="lg"
                className="h-13 rounded-2xl press-amber bg-amber-brand px-7 font-display font-bold text-navy-950 transition-[transform,background-color,box-shadow] hover:-translate-y-0.5 hover:bg-amber-bright active:translate-y-[3px] active:shadow-[0_2px_0_0_var(--color-amber-deep)]"
              >
                <Link href="/partners">
                  See our partners
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
