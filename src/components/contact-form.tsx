"use client";

import * as React from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/lib/site";

export function ContactForm() {
  const [sent, setSent] = React.useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: silently drop bots
    if (data.get("company")) return;

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(`Website enquiry from ${name}`);
    const body = encodeURIComponent(
      `Hi Playtime Namibia,\n\n${message}\n\nName: ${name}\nE-mail: ${email}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div
        className="flex h-full flex-col items-center justify-center rounded-[1.75rem] border border-teal-200 bg-teal-50 p-10 text-center"
        role="status"
      >
        <CheckCircle2 className="mb-4 size-14 text-teal-700" aria-hidden="true" />
        <h2 className="font-display text-2xl font-black text-navy-950">
          Your email app should now be open
        </h2>
        <p className="mt-3 max-w-md leading-relaxed text-teal-900">
          Your message is ready to send to {site.email}. If nothing opened,
          you can email us directly at{" "}
          <a href={`mailto:${site.email}`} className="font-bold underline">
            {site.email}
          </a>{" "}
          or call {site.phone}.
        </p>
        <Button
          variant="outline"
          className="mt-6 h-11 rounded-xl border-2 font-display font-bold"
          onClick={() => setSent(false)}
        >
          Write another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[1.75rem] border border-teal-100 bg-white p-6 shadow-sm sm:p-8"
      aria-label="Contact form"
    >
      <div className="space-y-5">
        <div>
          <Label htmlFor="contact-name" className="text-sm font-semibold text-navy-900">
            Name
          </Label>
          <Input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your full name"
            className="mt-2 h-12 rounded-xl"
          />
        </div>
        <div>
          <Label htmlFor="contact-email" className="text-sm font-semibold text-navy-900">
            E-mail
          </Label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className="mt-2 h-12 rounded-xl"
          />
        </div>
        <div>
          <Label htmlFor="contact-message" className="text-sm font-semibold text-navy-900">
            Message
          </Label>
          <Textarea
            id="contact-message"
            name="message"
            required
            rows={6}
            placeholder="Tell us how you'd like to get involved, or ask us anything…"
            className="mt-2 min-h-32 rounded-xl"
          />
        </div>
        {/* Honeypot: hidden from humans, catnip for bots */}
        <div className="hidden" aria-hidden="true">
          <Label htmlFor="contact-company">Company</Label>
          <Input id="contact-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
        </div>
        <Button
          type="submit"
          size="lg"
          className="press-amber h-12 w-full rounded-2xl bg-amber-brand font-display font-bold text-navy-950 transition-[transform,background-color,box-shadow] hover:-translate-y-0.5 hover:bg-amber-bright active:translate-y-[2px] active:shadow-[0_2px_0_0_var(--color-amber-deep)]"
        >
          <Send className="size-5" aria-hidden="true" />
          Send message
        </Button>
        <p className="text-center text-sm text-muted-foreground">
          This form opens your email app with the message ready, with no tracking,
          no cookies.
        </p>
      </div>
    </form>
  );
}
