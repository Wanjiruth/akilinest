import { Link } from "wouter";
import { HERO_2026 } from "@/content/hero2026";

/**
 * H.E.R.O. 2026 selection strip. Sits directly below the hero on the homepage
 * and links through to the full /hero-2026 page.
 */
export default function CredibilityStrip() {
  return (
    <section className="bg-[#0B4D5F] px-6 md:px-14 py-7">
      <Link
        href="/hero-2026"
        data-testid="link-credibility-strip"
        className="group max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center gap-x-6 gap-y-2 text-center sm:text-left"
      >
        <span className="shrink-0 text-[10px] font-bold tracking-[1.5px] uppercase text-white/45 font-sans">
          Selected for {HERO_2026.shortName}
        </span>
        <span className="flex-1 text-sm text-white/85 font-sans leading-relaxed">
          <span className="font-semibold">{HERO_2026.programme}</span>
          <span className="hidden sm:inline text-white/30"> · </span>
          <br className="sm:hidden" />
          {HERO_2026.selection}
        </span>
        <span className="shrink-0 text-sm font-bold text-white font-sans inline-flex items-center gap-2 justify-center">
          Read more
          <span aria-hidden className="transition-transform group-hover:translate-x-1">
            &rarr;
          </span>
        </span>
      </Link>
    </section>
  );
}
