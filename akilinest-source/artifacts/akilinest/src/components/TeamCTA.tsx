import { Link } from "wouter";
import { TEAM_CTA_LABEL, TEAM_WHATSAPP_URL } from "@/content/teams";

type TeamCTAProps = {
  eyebrow?: string;
  heading?: string;
  body?: string;
  ctaLabel?: string;
};

/**
 * Closing call to action for the Teams side of the site.
 * Deliberately quieter than the kids-facing EventCTA.
 */
export default function TeamCTA({
  eyebrow = "Start a conversation",
  heading = "Tell us how your team works today.",
  body = "A short discovery call is the fastest way to see where AI is worth your team's time, and where human judgement needs to stay in charge.",
  ctaLabel = TEAM_CTA_LABEL,
}: TeamCTAProps) {
  return (
    <section className="bg-[#0D0C18] px-6 md:px-14 py-20 md:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-white/35 mb-4 block font-sans">
          {eyebrow}
        </span>
        <h2 className="font-serif text-[clamp(1.9rem,3.6vw,3rem)] font-bold text-white tracking-tight leading-tight mb-5">
          {heading}
        </h2>
        <p className="text-base text-white/60 leading-relaxed mb-9 font-sans max-w-xl mx-auto">{body}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/contact"
            data-testid="button-team-cta"
            className="inline-flex items-center justify-center w-full sm:w-auto min-w-[240px] bg-[#E8693A] text-white font-bold text-base px-10 py-4 rounded-full hover:bg-[#C4561A] hover:-translate-y-0.5 hover:shadow-xl transition-all font-sans"
          >
            {ctaLabel}
          </Link>
          <a
            href={TEAM_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full sm:w-auto text-sm font-semibold text-white/70 hover:text-white px-6 py-4 rounded-full border border-white/15 hover:border-white/30 transition-all font-sans"
          >
            Or message us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
