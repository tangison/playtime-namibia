import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-gradient-to-b from-teal-50 to-background py-20">
      <div className="mx-auto max-w-xl px-4 text-center sm:px-6">
        <Image
          src="/images/logo.png"
          alt="Playtime Namibia shield logo"
          width={180}
          height={64}
          className="mx-auto h-16 w-auto"
        />
        <p className="mt-10 font-display text-[100px] font-black leading-none text-teal-600 sm:text-[140px]">
          404
        </p>
        <h1 className="mt-2 font-display text-2xl font-black text-navy-950 sm:text-3xl">
          That ball went out of play
        </h1>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          The page you're looking for doesn't exist or has moved. Let's get
          you back on the pitch.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="h-13 rounded-2xl press-amber bg-amber-brand px-7 font-display font-bold text-navy-950 transition-all hover:-translate-y-0.5 hover:bg-amber-bright active:translate-y-[3px] active:shadow-[0_2px_0_0_var(--color-amber-deep)]"
          >
            <Link href="/">
              <Home className="size-5" aria-hidden="true" />
              Back to home
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-13 rounded-2xl border-2 border-navy-900 px-7 font-display font-bold text-navy-950 hover:bg-navy-950 hover:text-white"
          >
            <Link href="/programmes">
              View programmes
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
