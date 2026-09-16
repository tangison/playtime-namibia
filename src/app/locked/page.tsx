import Link from "next/link";
import { ArrowRight, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

const pageNames: Record<string, string> = {
  "/about": "About Us",
  "/programmes": "Sports Programmes",
  "/programmes/school-partnerships": "School Partnerships",
  "/facilities": "Facilities",
  "/coaches-corner": "Coaches' Corner",
  "/gallery": "Gallery",
  "/events": "Events & News",
  "/partners": "Partners",
  "/get-involved": "Get Involved",
  "/contact": "Contact",
  "/privacy": "Privacy Notice",
};

const includedPages = [
  "About & trustees",
  "Sports programmes",
  "School partnerships",
  "Facilities",
  "Coaches' Corner",
  "Photo gallery",
  "Events & news",
  "Partners",
  "Get involved",
  "Contact",
];

export const metadata = {
  title: "Demo preview",
  robots: { index: false, follow: false },
};

export default async function LockedPage({
  searchParams,
}: {
  searchParams: Promise<{ from?: string }>;
}) {
  const { from } = await searchParams;
  const pageName =
    (from && pageNames[from]) || (from ? from.replace("/", "") : "This page");

  return (
    <section className="flex min-h-[70vh] items-center bg-gradient-to-b from-teal-50 to-background py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="rounded-[2rem] border border-teal-100 bg-white p-8 text-center shadow-sm sm:p-14">
          <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-teal-50">
            <Lock className="size-7 text-teal-700" aria-hidden="true" />
          </span>
          <h1 className="mt-6 text-balance font-display text-3xl font-black leading-tight text-navy-950 sm:text-4xl">
            {pageName} is locked in this demo
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            You are viewing a design demo of the new {site.name} website.
            This page is part of the finished site and unlocks when the
            project goes live.
          </p>

          <ul className="mx-auto mt-8 flex max-w-lg flex-wrap justify-center gap-2" aria-label="Pages included in the full site">
            {includedPages.map((page) => (
              <li
                key={page}
                className="rounded-full bg-teal-50 px-3.5 py-1.5 text-xs font-semibold text-teal-800"
              >
                {page}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="press-amber h-13 rounded-2xl bg-amber-brand px-7 font-display font-bold text-navy-950 transition-[transform,background-color,box-shadow] hover:-translate-y-0.5 hover:bg-amber-bright active:translate-y-[3px] active:shadow-[0_2px_0_0_var(--color-amber-deep)]"
            >
              <Link href="/">
                Back to the home page
                <ArrowRight className="size-5" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-13 rounded-2xl border-2 border-navy-950 bg-transparent px-7 font-display font-bold text-navy-950 transition-[transform,background-color,border-color,color] hover:-translate-y-0.5 hover:bg-navy-950 hover:text-white"
            >
              <Link href="/coaches">Meet the coaches</Link>
            </Button>
          </div>

          <p className="mt-10 text-sm text-muted-foreground">
            Demo by{" "}
            <a
              href="https://studio.tangison.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 underline-offset-4 hover:underline"
            >
              Tangison Studio
            </a>
            , ask for the full tour
          </p>
        </div>
      </div>
    </section>
  );
}
