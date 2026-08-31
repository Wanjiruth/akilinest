import { Link } from "wouter";
import { Reveal } from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";
import TeamCTA from "@/components/TeamCTA";
import { HERO_2026 } from "@/content/hero2026";
import { asset, IMAGES } from "@/lib/images";

export default function Hero2026() {
  return (
    <>
      <PageMeta
        title="AkiliNest Selected for H.E.R.O. 2026 | Harmonic Innovation Group"
        description="AkiliNest was selected for H.E.R.O. 2026, the Harmonic Euro-African Ramp-up Orbit acceleration and internationalisation programme. One of 20 startups selected from 324 applications across 23 countries."
        path="/hero-2026"
        keywords={["H.E.R.O. 2026", "Harmonic Euro-African Ramp-up Orbit", "AkiliNest"]}
      />

      {/* HERO */}
      <section className="relative bg-[#0B4D5F] overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[620px] h-[620px] rounded-full bg-white/4"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-14 pt-32 md:pt-40 pb-16 md:pb-20">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[2px] uppercase text-white/45 mb-6 block font-sans">
              Programme selection
            </span>
            <h1 className="font-serif text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.05] tracking-tight text-white mb-8">
              AkiliNest selected for H.E.R.O. 2026.
            </h1>
            <p className="text-lg md:text-xl text-white font-semibold leading-relaxed mb-4 font-sans">
              {HERO_2026.selection}
            </p>
          </Reveal>
        </div>
      </section>

      {/* PHOTOS */}
      <section className="bg-white px-6 md:px-14 pt-16 md:pt-20">
        <div className="max-w-4xl mx-auto mb-6">
          <Reveal>
            <figure className="m-0">
              <img
                src={asset(IMAGES.heroCohort)}
                alt="The H.E.R.O. Kenya Edition 2026 cohort on stage in Nairobi, in front of the programme backdrop"
                width="1400"
                height="933"
                loading="lazy"
                decoding="async"
                className="rounded-2xl object-cover w-full aspect-[3/2] shadow-md"
              />
              <figcaption className="mt-2.5 text-xs text-[#5C5A70] font-sans">
                The H.E.R.O. Kenya Edition 2026 cohort, Nairobi.
              </figcaption>
            </figure>
          </Reveal>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Reveal>
            <figure className="m-0">
              <img
                src={asset(IMAGES.pitchStage)}
                alt="AkiliNest founders presenting at the H.E.R.O. Kenya programme in Nairobi, beside a slide reading Join Us in Building the Future"
                width="1400"
                height="933"
                loading="lazy"
                decoding="async"
                className="rounded-2xl object-cover w-full aspect-[3/2] shadow-md"
              />
              <figcaption className="mt-2.5 text-xs text-[#5C5A70] font-sans">
                AkiliNest presenting at the H.E.R.O. Kenya programme, Nairobi.
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={80}>
            <figure className="m-0">
              <img
                src={asset(IMAGES.pitchGroup)}
                alt="AkiliNest founders with H.E.R.O. programme organisers at the closing session in Nairobi"
                width="1400"
                height="787"
                loading="lazy"
                decoding="async"
                className="rounded-2xl object-cover w-full aspect-[3/2] shadow-md"
              />
              <figcaption className="mt-2.5 text-xs text-[#5C5A70] font-sans">
                With the H.E.R.O. programme organisers at the closing session.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* DETAIL */}
      <section className="bg-white px-6 md:px-14 py-20 md:py-24">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="text-base md:text-lg text-[#0D0C18] leading-relaxed mb-8 font-sans">
              AkiliNest was selected for H.E.R.O. &mdash; Harmonic Euro-African Ramp-up Orbit, an
              acceleration and internationalisation programme supported by Harmonic Innovation
              Group, BeEntrepreneurs and Startup Africa Roadtrip.
            </p>

            <h2 className="font-serif text-2xl font-bold text-[#0D0C18] mb-5 mt-12">
              About the programme
            </h2>
            <p className="text-base text-[#4A4860] leading-relaxed mb-8 font-sans">
              H.E.R.O. supports early-stage companies working across European and African markets,
              with a focus on helping founders prepare their businesses to operate
              internationally. Selection is made through an open application process.
            </p>

            <h2 className="font-serif text-2xl font-bold text-[#0D0C18] mb-5 mt-12">
              Programme supporters
            </h2>
            <ul className="space-y-3 mb-8">
              {HERO_2026.supporters.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <span aria-hidden className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0B4D5F] shrink-0" />
                  <span className="text-base text-[#0D0C18] font-sans">{s}</span>
                </li>
              ))}
            </ul>

            {HERO_2026.sourceUrl ? (
              <p className="text-sm font-sans">
                <a
                  href={HERO_2026.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#0B4D5F] underline underline-offset-4 hover:no-underline"
                >
                  {HERO_2026.sourceLabel}
                </a>
              </p>
            ) : null}
          </Reveal>
        </div>
      </section>

      {/* WHAT THIS MEANS */}
      <section className="bg-[#F9F5EE] px-6 md:px-14 py-20 md:py-24 border-y border-black/5">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="font-serif text-[clamp(1.8rem,3.4vw,2.8rem)] font-bold text-[#0D0C18] tracking-tight leading-tight mb-6">
              What we are building
            </h2>
            <p className="text-base text-[#4A4860] leading-relaxed mb-6 font-sans">
              AkiliNest helps workplace and educator teams in Kenya turn AI into practical
              workflows and responsible everyday use. We also run creative AI bootcamps for young
              people aged 8 to 17.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              <Link
                href="/teams"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0D0C18] hover:text-[#E8693A] transition-colors font-sans group"
              >
                AI upskilling for teams
                <span className="w-6 h-px bg-current transition-all group-hover:w-10" />
              </Link>
              <Link
                href="/kids-ai-bootcamps"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0D0C18] hover:text-[#E8693A] transition-colors font-sans group"
              >
                Kids bootcamps
                <span className="w-6 h-px bg-current transition-all group-hover:w-10" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <TeamCTA />
    </>
  );
}
