import { Link } from "wouter";
import { Reveal } from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";
import { organizationSchema } from "@/lib/schema.mjs";
import CredibilityStrip from "@/components/CredibilityStrip";
import TeamCTA from "@/components/TeamCTA";
import { teamAudiences, teamSteps } from "@/content/teams";
import { asset, IMAGES } from "@/lib/images";
import { canonicalUrl } from "@/lib/seo";

const programmeCards = [
  {
    key: "teams",
    eyebrow: "For organisations",
    name: "For Teams",
    desc: "Practical AI upskilling and workflow support for workplace and educator teams.",
    cta: "Explore Team Upskilling",
    href: "/teams",
    img: IMAGES.pitchStage,
    alt: "AkiliNest founders presenting at the H.E.R.O. Kenya programme in Nairobi",
  },
  {
    key: "kids",
    eyebrow: "For families",
    name: "Kids Bootcamps",
    desc: "Creative AI experiences for children aged 8 to 17.",
    cta: "Explore Kids Bootcamps",
    href: "/kids-ai-bootcamps",
    img: IMAGES.sessionLaptop,
    alt: "Children working together around a laptop with a facilitator during an AkiliNest session",
  },
];

export default function Home() {
  return (
    <>
      <PageMeta
        title="AI Training in Kenya for Teams & Kids | AkiliNest"
        description="Practical AI training in Kenya for workplace teams, educator teams and young people. AkiliNest helps people build useful AI skills and workflows for real work and learning."
        path="/"
        keywords={["AI training Kenya", "AI upskilling Kenya", "AI training Nairobi", "AI bootcamp Kenya"]}
        jsonLd={organizationSchema()}
      />

      {/* HERO */}
      <section className="relative bg-[#F9F5EE] overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-40 -right-32 w-[520px] h-[520px] rounded-full bg-[#0B4D5F]/5"
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-14 pt-32 md:pt-40 pb-16 md:pb-24">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[2px] uppercase text-[#0B4D5F] mb-6 block font-sans">
              AkiliNest &middot; AI Upskilling in Kenya
            </span>
            <h1 className="font-serif text-[clamp(2.2rem,5vw,3.9rem)] font-bold leading-[1.05] tracking-tight text-[#0D0C18] mb-6 max-w-3xl">
              Practical AI training in Kenya, for teams and for kids.
            </h1>

            <h2 className="font-serif text-[clamp(1.3rem,2.4vw,1.9rem)] font-bold text-[#0B4D5F] leading-snug mb-6 max-w-2xl">
              Turn AI Into Your Everyday Work Advantage.
            </h2>

            <p className="text-base md:text-lg text-[#4A4860] max-w-2xl leading-relaxed mb-7 font-sans">
              AkiliNest is an AI training company in Nairobi, Kenya. We close the gap on both
              sides: practical AI upskilling for workplace and educator teams across Kenya, and
              creative AI bootcamps for young people aged 8 to 17 in Nairobi.
            </p>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-9">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D0C18] font-sans">
                <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-[#E8693A]" />
                For teams at work
              </span>
              <span aria-hidden className="text-[#4A4860]/30">&middot;</span>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D0C18] font-sans">
                <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-[#0B4D5F]" />
                For young people aged 8 to 17
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/teams"
                data-testid="button-hero-teams"
                className="inline-flex items-center justify-center w-full sm:w-auto bg-[#E8693A] text-white font-bold text-base px-9 py-4 rounded-full hover:bg-[#C4561A] hover:-translate-y-0.5 hover:shadow-xl transition-all font-sans"
              >
                Explore AI Upskilling for Teams
              </Link>
              <Link
                href="/kids-ai-bootcamps"
                data-testid="button-hero-kids"
                className="inline-flex items-center justify-center w-full sm:w-auto text-sm font-bold text-[#0D0C18] px-8 py-4 rounded-full border-2 border-[#0D0C18]/12 hover:border-[#0B4D5F]/50 hover:text-[#0B4D5F] transition-all font-sans"
              >
                Explore Kids Bootcamps
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CredibilityStrip />

      {/* WHAT WE DO */}
      <section className="bg-white px-6 md:px-14 py-20 md:py-24">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#0B4D5F] mb-4 block font-sans">
              What we do
            </span>
            <h2 className="font-serif text-[clamp(1.9rem,3.8vw,3.2rem)] font-bold text-[#0D0C18] tracking-tight leading-tight mb-4 max-w-2xl">
              What does AkiliNest actually do?
            </h2>
            <p className="text-base text-[#4A4860] max-w-xl mb-12 font-sans leading-relaxed">
              People should be able to use AI well, and explain the work they produce with it.
              That holds whether someone is writing a client report or their first story.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programmeCards.map((card, i) => (
              <Reveal key={card.key} delay={i * 80}>
                <Link href={card.href} data-testid={`card-programme-${card.key}`}>
                  <div className="group bg-[#F9F5EE] border border-black/8 rounded-3xl overflow-hidden h-full flex flex-col hover:-translate-y-1 hover:shadow-lg transition-all cursor-pointer">
                    <img
                      src={asset(card.img)}
                      alt={card.alt}
                      width="1400"
                      height="933"
                      loading="lazy"
                      decoding="async"
                      className="w-full aspect-[16/10] object-cover"
                    />
                    <div className="p-8 md:p-9 flex flex-col flex-1">
                      <span className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#0B4D5F]/70 mb-3 block font-sans">
                        {card.eyebrow}
                      </span>
                      <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#0D0C18] mb-3">
                        {card.name}
                      </h3>
                      <p className="text-sm md:text-base text-[#4A4860] leading-relaxed mb-8 flex-1 font-sans">
                        {card.desc}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm font-bold text-[#0D0C18] group-hover:text-[#E8693A] transition-colors font-sans">
                        {card.cta}
                        <span aria-hidden className="transition-transform group-hover:translate-x-1">
                          &rarr;
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TEAM UPSKILLING WORKS */}
      <section className="bg-[#F9F5EE] px-6 md:px-14 py-20 md:py-24 border-t border-black/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#0B4D5F] mb-4 block font-sans">
              How team upskilling works
            </span>
            <h2 className="font-serif text-[clamp(1.9rem,3.8vw,3.2rem)] font-bold text-[#0D0C18] tracking-tight leading-tight mb-12 max-w-3xl">
              How does AI training for teams in Kenya work?
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {teamSteps.map((step, i) => (
              <Reveal key={step.n} delay={i * 70}>
                <div className="bg-white border border-black/8 rounded-2xl p-7 h-full">
                  <span className="font-serif text-2xl font-bold text-[#0B4D5F] block mb-4">
                    {step.n}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#0D0C18] mb-2">{step.title}</h3>
                  <p className="text-sm text-[#4A4860] leading-relaxed font-sans">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOR TEAMS */}
      <section className="bg-white px-6 md:px-14 py-20 md:py-24 border-t border-black/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#0B4D5F] mb-4 block font-sans">
              For teams
            </span>
            <h2 className="font-serif text-[clamp(1.9rem,3.8vw,3.2rem)] font-bold text-[#0D0C18] tracking-tight leading-tight mb-12 max-w-3xl">
              Who is AkiliNest AI training for?
            </h2>
          </Reveal>

          <Reveal>
            <img
              src={asset(IMAGES.pitchStage2)}
              alt="An AkiliNest founder speaking to an audience of institutions and partners in Nairobi"
              width="1319"
              height="880"
              loading="lazy"
              decoding="async"
              className="rounded-3xl object-cover w-full aspect-[21/9] shadow-lg mb-10"
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {teamAudiences.map((aud, i) => (
              <Reveal key={aud.key} delay={i * 80}>
                <Link href={aud.href} data-testid={`card-audience-${aud.key}`}>
                  <div className="group bg-[#F9F5EE] border border-black/8 rounded-3xl p-8 md:p-9 h-full flex flex-col hover:-translate-y-1 hover:shadow-lg transition-all cursor-pointer">
                    <h3 className="font-serif text-2xl font-bold text-[#0D0C18] mb-3">{aud.name}</h3>
                    <p className="text-sm font-semibold text-[#0B4D5F] leading-relaxed mb-3 font-sans">
                      {aud.who}
                    </p>
                    <p className="text-sm text-[#4A4860] leading-relaxed mb-8 flex-1 font-sans">
                      {aud.what}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-[#0D0C18] group-hover:text-[#E8693A] transition-colors font-sans">
                      {aud.cta}
                      <span aria-hidden className="transition-transform group-hover:translate-x-1">
                        &rarr;
                      </span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="text-sm text-[#5C5A70] max-w-xl mb-8 font-sans leading-relaxed">
              AkiliNest is based in Nairobi and runs AI training for teams across Kenya, on site or
              at our space.
            </p>
            <Link
              href="/contact"
              data-testid="link-talk-about-team"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0D0C18] hover:text-[#E8693A] transition-colors font-sans group py-1.5"
            >
              Talk to us about your team
              <span className="w-6 h-px bg-current transition-all group-hover:w-10" />
            </Link>
          </Reveal>
        </div>
      </section>

      <TeamCTA />
    </>
  );
}
