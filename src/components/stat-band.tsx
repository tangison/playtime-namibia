import { CountUp } from "@/components/count-up";

export function StatBand() {
  const stats: Array<{
    value: React.ReactNode;
    label: string;
  }> = [
    { value: "2015", label: "Established in Walvis Bay" },
    {
      value: <CountUp value={1200} suffix="+" />,
      label: "Soccer participants in Kuisebmond",
    },
    {
      value: <CountUp value={250} />,
      label: "Daily cricket participants",
    },
    { value: <CountUp value={4} />, label: "Sports disciplines, U7 to U19" },
  ];
  return (
    <section
      aria-label="Playtime by the numbers"
      className="dots-dark bg-navy-950 py-14 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="tnum font-display text-5xl font-black tracking-tight text-teal-300 sm:text-6xl">
                {stat.value}
              </p>
              <p className="mx-auto mt-3 max-w-[220px] text-sm font-medium leading-snug text-navy-200">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
