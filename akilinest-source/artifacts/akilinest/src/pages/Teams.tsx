import { Link } from "wouter";
import { Reveal } from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";
import CredibilityStrip from "@/components/CredibilityStrip";
import TeamEnquiryForm from "@/components/TeamEnquiryForm";
import { asset, IMAGES } from "@/lib/images";
import { teamPathways } from "@/content/pathways";
import { TEAM_CTA_LABEL } from "@/content/teams";

export default function Teams() {
  return (
    <>
      <PageMeta
        title="Corporate AI Training in Kenya | AI Upskilling for Teams | AkiliNest"
        description="Practical corporate AI training in Kenya for workplace and educator teams. Readiness audits, custom playbooks, applied cohorts and leadership labs with AkiliNest."
        path="/teams"
        keywords={[
          "corporate AI training Kenya",
          "AI training for teams Kenya",
          "AI upskilling Kenya",
          "AI workshop Nairobi",
        ]}
      />

      {/* HERO */}
      <section className="relative bg-[#F9F5EE] overflow-hidden border-b border-black/5">
        <div
          aria-hidden
          className="absolute -bottom-48 -left-32 w-[540px] h-[540px] rounded-full bg-[#0B4D5F]/5"
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-14 pt-32 md:pt-40 pb-16 md:pb-20">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[2px] uppercase text-[#0B4D5F] mb-6 block font-sans">
              AkiliNest Teams
            </span>
            <h1 className="font-serif text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.05] tracking-tight text-[#0D0C18] mb-6 max-w-3xl">
              Empowering people for the AI era.
            </h1>
            <p className="text-base md:text-lg text-[#4A4860] max-w-2xl leading-relaxed mb-5 font-sans">
              Technology moves fast, but the human capability to use it effectively is often left
              behind. Whether in a high-performing corporate office or a modern classroom, the
              biggest bottleneck is not the software itself. It is the gap between having tools and
              actually knowing how to execute with them.
            </p>
            <p className="text-base md:text-lg text-[#4A4860] max-w-2xl leading-relaxed mb-9 font-sans">
              At AkiliNest we bridge that gap. We do not teach abstract theory or sell one-off
              software subscriptions. We build practical, structured operating systems and hands-on
              training tracks tailored for two distinct environments: enterprises driving commercial
              growth, and educators shaping the future of learning.
            </p>
            <a
              href="#pathways"
              className="inline-flex items-center justify-center bg-[#E8693A] text-white font-bold text-base px-9 py-4 rounded-full hover:bg-[#C4561A] hover:-translate-y-0.5 hover:shadow-xl transition-all font-sans"
            >
              Choose your pathway
            </a>
          </Reveal>
        </div>
      </section>

      <CredibilityStrip />

      {/* THE GAP */}
      <section className="bg-white px-6 md:px-14 py-20 md:py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(1.8rem,3.4vw,2.6rem)] font-bold text-[#0D0C18] tracking-tight leading-tight mb-4">
              AI use is running ahead of formal AI training.
            </h2>
            <p className="text-base text-[#4A4860] leading-relaxed font-sans">
              Access to tools is no longer the constraint. Knowing which work they belong in, how to
              use them well, and what must never go near them, is.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={asset(IMAGES.pitchStage)}
              alt="AkiliNest founders presenting at the H.E.R.O. Kenya programme in Nairobi"
              width="1400"
              height="933"
              loading="lazy"
              decoding="async"
              className="rounded-3xl object-cover w-full aspect-[4/3] shadow-lg"
            />
          </Reveal>
        </div>
      </section>

      {/* PATHWAYS */}
      <section id="pathways" className="bg-[#F9F5EE] px-6 md:px-14 py-20 md:py-24 border-y border-black/5 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#0B4D5F] mb-4 block font-sans">
              Choose your pathway
            </span>
            <h2 className="font-serif text-[clamp(1.9rem,3.6vw,3rem)] font-bold text-[#0D0C18] tracking-tight leading-tight mb-4 max-w-2xl">
              Two environments. One practical approach.
            </h2>
            <p className="text-base text-[#4A4860] max-w-xl mb-12 font-sans leading-relaxed">
              Select the pathway below to see how we partner with your organisation.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamPathways.map((p, i) => (
              <Reveal key={p.key} delay={i * 80}>
                <div className="bg-white border border-black/8 rounded-3xl p-8 md:p-10 h-full flex flex-col">
                  <span className="font-serif text-sm font-bold text-[#0B4D5F]/50 tabular-nums mb-3 block">
                    0{p.number}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#0D0C18] mb-6">
                    {p.name}
                  </h3>

                  <div className="space-y-5 mb-8 flex-1">
                    <div>
                      <span className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#E8693A] mb-1.5 block font-sans">
                        The focus
                      </span>
                      <p className="text-sm md:text-base text-[#0D0C18] leading-relaxed font-sans">
                        {p.focus}
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#0B4D5F] mb-1.5 block font-sans">
                        Who it is for
                      </span>
                      <p className="text-sm text-[#4A4860] leading-relaxed font-sans">{p.who}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#0B4D5F] mb-1.5 block font-sans">
                        What we offer
                      </span>
                      <p className="text-sm text-[#4A4860] leading-relaxed font-sans">{p.offer}</p>
                    </div>
                  </div>

                  <Link
                    href={p.href}
                    data-testid={`pathway-${p.key}`}
                    className="inline-flex items-center justify-center w-full bg-[#0B4D5F] hover:bg-[#0D0C18] text-white font-bold text-sm px-6 py-4 rounded-full transition-all font-sans"
                  >
                    {p.cta}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ENQUIRY */}
      <section id="enquire" className="bg-white px-6 md:px-14 py-20 md:py-24 scroll-mt-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-start">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#0B4D5F] mb-4 block font-sans">
              Book a discovery call
            </span>
            <h2 className="font-serif text-[clamp(1.9rem,3.6vw,2.8rem)] font-bold text-[#0D0C18] tracking-tight leading-tight mb-5">
              Tell us how your team works today.
            </h2>
            <p className="text-base text-[#4A4860] leading-relaxed mb-6 font-sans">
              A short call to understand the work that repeats, where AI could genuinely help, and
              what a sensible first step looks like for your organisation.
            </p>
            <ul className="space-y-2.5">
              {[
                "No commitment",
                "We scope the right starting point with you",
                "Pricing follows the scope, not a rate card",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span aria-hidden className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0B4D5F] shrink-0" />
                  <span className="text-sm text-[#4A4860] font-sans">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <div className="bg-[#F9F5EE] border border-black/8 rounded-3xl p-7 md:p-9">
              <h3 className="sr-only">{TEAM_CTA_LABEL}</h3>
              <TeamEnquiryForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
