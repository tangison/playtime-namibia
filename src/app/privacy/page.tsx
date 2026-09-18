import type { Metadata } from "next";
import { Eyebrow } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description:
    "How Playtime Namibia handles your personal information on this website, plainly and briefly.",
  alternates: { canonical: "/privacy" },
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Privacy Notice</Eyebrow>
          <h1 className="text-balance font-display text-4xl font-black leading-[1.05] text-navy-950 sm:text-5xl">
            Your privacy, in plain language
          </h1>
          <div className="mt-8 space-y-5 leading-relaxed text-muted-foreground">
            <p>
              The Playtime Sport Development Trust respects your privacy.
              This website is deliberately built to collect as little
              information as possible.
            </p>
            <h2 className="font-display text-xl font-black text-navy-950">
              What we collect
            </h2>
            <p>
              This website sets no tracking or advertising cookies and runs
              no analytics or third-party trackers. When you use the contact
              form, the details you type (your name, email address and
              message) are used only to compose an email from your own email
              app to {site.email}. That information is not stored on this
              website or shared with anyone else.
            </p>
            <h2 className="font-display text-xl font-black text-navy-950">
              Photographs of children
            </h2>
            <p>
              Photographs on this site show Playtime programmes and events.
              They are published to share the work of the Trust with the
              community and our supporters. If you are a parent or guardian
              and would like a photograph of your child removed, please
              contact us at {site.email} or {site.phone} and we will take it
              down promptly.
            </p>
            <h2 className="font-display text-xl font-black text-navy-950">
              Questions
            </h2>
            <p>
              If you have any questions about this notice, contact the Trust
              at {site.email}, phone {site.phone}, or write to us at{" "}
              {site.address}.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
