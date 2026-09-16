/**
 * Demo-mode loading splash: logo + tagline + progress bar.
 * Server-rendered into the HTML (no flash of content), driven by a small
 * inline script that runs before paint. Shown once per session; skipped
 * entirely under prefers-reduced-motion.
 */

export function DemoSplash() {
  return (
    <>
      <div
        id="demo-splash"
        aria-hidden="true"
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500"
      >
        <img
          src="/images/logo.svg"
          alt=""
          width={288}
          height={103}
          className="splash-logo w-[220px] sm:w-[288px]"
          decoding="async"
        />
        <p className="splash-tag mt-5 font-display text-[11px] font-bold uppercase tracking-[0.34em] text-teal-700 sm:text-xs">
          Empowering Youth Through Sports
        </p>
        <div className="mt-8 h-1.5 w-44 overflow-hidden rounded-full bg-teal-100">
          <div className="splash-bar h-full rounded-full bg-amber-brand" />
        </div>
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `(function () {
  var el = document.getElementById("demo-splash");
  if (!el) return;
  var skip = false;
  try { skip = sessionStorage.getItem("pt-demo-splash") === "1"; } catch (e) {}
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (skip || reduce) { el.remove(); return; }
  try { sessionStorage.setItem("pt-demo-splash", "1"); } catch (e) {}
  document.documentElement.style.overflow = "hidden";
  var fade = setTimeout(function () { el.style.opacity = "0"; }, 1250);
  var kill = setTimeout(function () {
    el.remove();
    document.documentElement.style.overflow = "";
  }, 1800);
})();`,
        }}
      />
    </>
  );
}
