import { Reveal } from "@/components/reveal";

export function StatBand() {
  const stats = [
    { value: "2015", label: "Established in Walvis Bay" },
    { value: "1,200+", label: "Soccer participants in Kuisebmond" },
    { value: "250", label: "Daily cricket participants" },
    { value: "4", label: "Sports disciplines, U7 to U19" },
  ];
  return (
    <section
      aria-label="Playtime by the numbers"
      className="dots-dark bg-navy-950 py-14 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="text-center">
              <p className="font-display text-5xl font-black tracking-tight text-teal-300 sm:text-6xl">
                {stat.value}
              </p>
              <p className="mx-auto mt-3 max-w-[220px] text-sm font-medium leading-snug text-navy-200">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
