import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { Eyebrow } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Playtime Namibia: 4th Street, Walvis Bay, Namibia. Phone +264 64 279 650, email info@playtime.com.na, or send us a message online.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-teal-50 to-background py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <Eyebrow>Contact Us</Eyebrow>
            <h1 className="text-balance font-display text-4xl font-black leading-[1.05] text-navy-950 sm:text-5xl lg:text-6xl">
              Let’s talk
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              To find out more about Playtime Namibia, contact us directly on
              the details below, or send us a message with the online form.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-5 lg:gap-14 lg:px-8">
          {/* Info card */}
          <div className="lg:col-span-2">
            <Reveal>
              <div className="dots-dark rounded-[1.75rem] bg-navy-950 p-8 text-navy-100 shadow-lg sm:p-10">
                <h2 className="font-display text-2xl font-black text-white">
                  Reach us directly
                </h2>
                <ul className="mt-8 space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <MapPin className="size-5 text-teal-300" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-display text-sm font-bold uppercase tracking-widest text-teal-300">
                        Address
                      </p>
                      <p className="mt-1">{site.address}</p>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=4th+Street+Walvis+Bay+Namibia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1.5 inline-flex min-h-11 items-center gap-1.5 py-2 text-sm font-semibold text-amber-brand hover:underline"
                        aria-label="Open 4th Street, Walvis Bay in Google Maps (opens in a new tab)"
                      >
                        Find us on the map
                        <ExternalLink className="size-3.5" aria-hidden="true" />
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <Phone className="size-5 text-teal-300" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-display text-sm font-bold uppercase tracking-widest text-teal-300">
                        Phone
                      </p>
                      <a
                        href={site.phoneHref}
                        className="mt-1 inline-block min-h-11 py-2 text-lg font-semibold text-white hover:text-teal-300"
                      >
                        {site.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <Mail className="size-5 text-teal-300" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-display text-sm font-bold uppercase tracking-widest text-teal-300">
                        Email
                      </p>
                      <a
                        href={`mailto:${site.email}`}
                        className="mt-1 inline-block min-h-11 py-2 text-lg font-semibold text-white hover:text-teal-300"
                      >
                        {site.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <Clock className="size-5 text-teal-300" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-display text-sm font-bold uppercase tracking-widest text-teal-300">
                        Office hours
                      </p>
                      <ul className="mt-1 space-y-1">
                        {site.hours.map((h) => (
                          <li key={h.days} className="flex gap-3">
                            <span className="w-32 shrink-0">{h.days}</span>
                            <span className="font-semibold text-white">{h.time}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <Reveal delay={0.1}>
              <h2 className="mb-5 font-display text-2xl font-black text-navy-950">
                Send us a message
              </h2>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                Fill in the form below and it opens an email to our team,
                ready for you to send. A member of the team will get back to
                you.
              </p>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
