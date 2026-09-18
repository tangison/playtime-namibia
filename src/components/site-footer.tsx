import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Facebook, Clock } from "lucide-react";
import { site, sponsors } from "@/lib/site";

const footerLinks = [
  {
    heading: "Programmes",
    links: [
      { title: "Sports Codes", href: "/programmes" },
      { title: "School Partnerships", href: "/programmes/school-partnerships" },
      { title: "Facilities", href: "/facilities" },
    ],
  },
  {
    heading: "About",
    links: [
      { title: "About Us", href: "/about" },
      { title: "Coaching Team", href: "/coaches" },
      { title: "Coaches' Corner", href: "/coaches-corner" },
      { title: "International Partners", href: "/partners" },
      { title: "Events & News", href: "/events" },
    ],
  },
  {
    heading: "Support",
    links: [
      { title: "Get Involved", href: "/get-involved" },
      { title: "Contact Us", href: "/contact" },
      { title: "Gallery", href: "/gallery" },
      { title: "Privacy Notice", href: "/privacy" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-navy-950 text-navy-100">
      {/* Sponsor marquee */}
      <div className="border-b border-white/10 bg-navy-900">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="mb-4 text-center font-display text-xs font-bold uppercase tracking-[0.2em] text-teal-300">
            A thank you to our long-term sponsors
          </p>
          <div
            className="relative overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
            }}
          >
            <div className="marquee-track flex w-max items-center gap-8 pr-8">
              {[...sponsors, ...sponsors].map((sponsor, i) => (
                <span
                  key={`${sponsor.name}-${i}`}
                  className="flex h-14 w-36 shrink-0 items-center justify-center rounded-xl bg-white px-4 shadow-sm"
                >
                  <Image
                    src={sponsor.src}
                    alt={sponsor.name}
                    width={140}
                    height={48}
                    className="max-h-10 w-auto object-contain"
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand + contact */}
          <div className="lg:col-span-5">
              <img
              src="/images/logo.svg"
              alt="Playtime Namibia shield logo"
              width={220}
              height={79}
              className="mb-6 h-16 w-auto rounded-xl bg-white/95 p-2"
            />
            <p className="max-w-md leading-relaxed text-navy-200">
              {site.description} {site.missionLine}
            </p>
            <ul className="mt-6 space-y-3 text-[15px]">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-teal-300" aria-hidden="true" />
                <span>{site.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-teal-300" aria-hidden="true" />
                <a href={site.phoneHref} className="min-h-11 py-2 transition-colors hover:text-teal-300">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-teal-300" aria-hidden="true" />
                <a
                  href={`mailto:${site.email}`}
                  className="min-h-11 py-2 transition-colors hover:text-teal-300"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-teal-300" aria-hidden="true" />
                <span>
                  Mon–Fri 8:00–18:00, Sat 10:00–16:00, Sun closed
                </span>
              </li>
            </ul>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Playtime Namibia on Facebook"
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/20 px-4 py-2.5 font-medium transition-colors hover:border-teal-300 hover:text-teal-300"
            >
              <Facebook className="size-4" aria-hidden="true" />
              Follow us on Facebook
            </a>
          </div>

          {/* Link columns */}
          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7"
          >
            {footerLinks.map((group) => (
              <div key={group.heading}>
                <h2 className="mb-4 font-display text-sm font-bold uppercase tracking-[0.15em] text-teal-300">
                  {group.heading}
                </h2>
                <ul className="space-y-1">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="inline-flex min-h-11 items-center py-2 text-[15px] text-navy-200 transition-colors hover:text-teal-300"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-navy-300 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <a
            href="https://studio.tangison.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-1.5 py-2 transition-colors hover:text-teal-300"
          >
            Made by
            <span className="font-semibold text-teal-300">Tangison Studio</span>
          </a>
          <p>Registered Trust · Walvis Bay, Namibia · Est. {site.established}</p>
        </div>
      </div>
    </footer>
  );
}
