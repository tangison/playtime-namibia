/**
 * Demo-mode corner badge: "Demo by Tangison Studio", links to the studio.
 * Rendered by the layout only when DEMO_MODE is set at build time.
 */
export function DemoBadge() {
  return (
    <a
      href="https://studio.tangison.com"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 z-[90] inline-flex min-h-11 items-center rounded-full bg-navy-950/95 px-4 py-2.5 text-[13px] font-semibold text-white shadow-lg ring-1 ring-white/15 backdrop-blur-sm transition-colors hover:bg-navy-900 hover:text-teal-300"
    >
      Demo by Tangison Studio
    </a>
  );
}
