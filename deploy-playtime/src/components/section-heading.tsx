import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "mb-3 font-display text-xs font-bold uppercase tracking-[0.18em] text-teal-700",
        className
      )}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  dark = false,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Eyebrow className={dark ? "text-teal-300" : undefined}>{eyebrow}</Eyebrow>
      )}
      <h2
        className={cn(
          "text-balance font-display text-3xl font-black leading-[1.08] sm:text-4xl lg:text-[44px]",
          dark ? "text-white" : "text-navy-950"
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            "mt-4 text-pretty text-lg leading-relaxed",
            dark ? "text-navy-200" : "text-muted-foreground"
          )}
        >
          {lead}
        </p>
      )}
    </Reveal>
  );
}
