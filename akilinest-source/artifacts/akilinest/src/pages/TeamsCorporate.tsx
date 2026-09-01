import { Link } from "wouter";
import { Reveal } from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";
import { standaloneCourse } from "@/lib/schema.mjs";
import CredibilityStrip from "@/components/CredibilityStrip";
import SolutionCards from "@/components/SolutionCards";
import WhyPartner from "@/components/WhyPartner";
import TeamEnquiryForm from "@/components/TeamEnquiryForm";
import Faq from "@/components/Faq";
import { asset, IMAGES } from "@/lib/images";
import { CORPORATE_PROGRAMME, corporateSolutions, corporateWhy } from "@/content/pathways";
import { teamFaqs } from "@/content/teams";

export default function TeamsCorporate() {
  return (
    <>
      <PageMeta
        title="Corporate AI Training in Kenya | Enterprise Solutions | AkiliNest"
        description="Corporate AI training in Kenya for enterprise teams. Workflow readiness audits, custom AI playbooks, applied team cohorts and executive transformation labs from AkiliNest."
        path="/teams/corporate"
        keywords={[
          "corporate AI training Kenya",
          "AI upskilling Kenya",
          "AI training for teams Kenya",
          "AI workshop Nairobi",
        ]}
        jsonLd={standaloneCourse({
          name: CORPORATE_PROGRAMME.name,
          description: CORPORATE_PROGRAMME.format,
          path: "/teams/corporate",
          courseMode: "Blended",
          audience: "Workplace and leadership teams",
          onsite: false,
        })}
      />

      {/* HERO */}
      <section className="relative bg-[#F9F5EE] overflow-hidden border-b border-black/5">
        <div
          aria-hidden
          className="absolute -top-40 -right-24 w-[500px] h-[500px] rounded-full bg-[#0B4D5F]/5"
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-14 pt-32 md:pt-40 pb-16 md:pb-20">
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-6">
              <Link
                href="/teams"
                className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#0B4D5F]/70 hover:text-[#0B4D5F] transition-colors font-sans"
              >
                &larr; AkiliNest Teams
              </Link>
            </nav>
            <span className="text-[11px] font-bold tracking-[2px] uppercase text-[#0B4D5F] mb-5 block font-sans">
              Enterprise Solutions
            </span>
            <h1 className="font-serif text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.05] tracking-tight text-[#0D0C18] mb-6 max-w-3xl">
              Corporate AI training in Kenya.
            </h1>

            <h2 className="font-serif text-[clamp(1.3rem,2.4vw,1.9rem)] font-bold text-[#0B4D5F] leading-snug mb-6 max-w-2xl">
              We don&rsquo;t do generic AI workshops. We find your bottlenecks and train your team
              to fix them.
            </h2>
            <p className="text-base md:text-lg text-[#4A4860] max-w-2xl leading-relaxed mb-5 font-sans">
              Most corporate AI training is backward: companies put their staff in a room, teach
              them basic ChatGPT tricks, and hope productivity magically increases. It rarely does.
            </p>
            <p className="text-base md:text-lg text-[#4A4860] max-w-2xl leading-relaxed mb-9 font-sans">
              AkiliNest delivers practical, hands-on AI training for corporate teams across Kenya
              and East Africa. Our programmes are built entirely around solving your real business
              problems, not delivering slide-deck consulting with zero implementation.
            </p>
            <a
              href="#enquire"
              data-testid="button-corporate-hero-cta"
              className="inline-flex items-center justify-center bg-[#E8693A] text-white font-bold text-base px-9 py-4 rounded-full hover:bg-[#C4561A] hover:-translate-y-0.5 hover:shadow-xl transition-all font-sans"
            >
              Book a team discovery call
            </a>
          </Reveal>
        </div>
      </section>

      <CredibilityStrip />


      {/* THE PROGRAMME */}
      <section className="bg-white px-6 md:px-14 py-20 md:py-24">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#0B4D5F] mb-4 block font-sans">
              The programme
            </span>
            <h2 className="font-serif text-[clamp(1.9rem,3.6vw,3rem)] font-bold text-[#0D0C18] tracking-tight leading-tight mb-4 max-w-3xl">
              {CORPORATE_PROGRAMME.name}
            </h2>
            <p className="text-base text-[#0D0C18] font-semibold max-w-2xl mb-12 font-sans leading-relaxed">
              Format: {CORPORATE_PROGRAMME.format}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {CORPORATE_PROGRAMME.sessions.map((session, i) => (
              <Reveal key={session.n} delay={i * 50}>
                <div className="bg-[#F9F5EE] border border-black/8 rounded-3xl p-7 md:p-8 h-full">
                  <span className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#E8693A] mb-2 block font-sans">
                    {session.n}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-[#0D0C18] mb-5 leading-snug">
                    {session.title}
                  </h3>
                  <ul className="space-y-3">
                    {session.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span
                          aria-hidden
                          className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0B4D5F] shrink-0"
                        />
                        <span className="text-sm text-[#4A4860] leading-relaxed font-sans">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <a
              href="#enquire"
              className="inline-flex items-center justify-center bg-[#E8693A] text-white font-bold text-base px-9 py-4 rounded-full hover:bg-[#C4561A] hover:-translate-y-0.5 hover:shadow-xl transition-all font-sans mt-12"
            >
              Discuss the 6-session programme
            </a>
          </Reveal>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="bg-[#F9F5EE] px-6 md:px-14 py-20 md:py-24 border-y border-black/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#0B4D5F] mb-4 block font-sans">
              What we offer
            </span>
            <h2 className="font-serif text-[clamp(1.9rem,3.6vw,3rem)] font-bold text-[#0D0C18] tracking-tight leading-tight mb-12 max-w-2xl">
              What does corporate AI training with AkiliNest include?
            </h2>
          </Reveal>
          <SolutionCards solutions={corporateSolutions} />
        </div>
      </section>

      {/* PHOTO */}
      <section className="bg-white px-6 md:px-14 py-20 md:py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <img
              src={asset(IMAGES.pitchStage2)}
              alt="An AkiliNest founder presenting to an audience of institutions and partners in Nairobi"
              width="1319"
              height="880"
              loading="lazy"
              decoding="async"
              className="rounded-3xl object-cover w-full aspect-[4/3] shadow-lg"
            />
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-serif text-[clamp(1.8rem,3.4vw,2.6rem)] font-bold text-[#0D0C18] tracking-tight leading-tight mb-5">
              Where do you run AI training in Kenya?
            </h2>
            <p className="text-base text-[#4A4860] leading-relaxed mb-6 font-sans">
              We run AI workshops in Nairobi and work with teams across Kenya, on site at your
              offices or at our space. Engagements are scoped on the discovery call, based on your
              team&rsquo;s size and the work you want to improve.
            </p>
            <Link
              href="/teams/educators"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0D0C18] hover:text-[#E8693A] transition-colors font-sans group"
            >
              Looking for educator teams instead?
              <span className="w-6 h-px bg-current transition-all group-hover:w-10" />
            </Link>
          </Reveal>
        </div>
      </section>

      <WhyPartner heading="Why partner with AkiliNest?" reasons={corporateWhy} />

      <Faq items={teamFaqs} surface="white" />

      {/* ENQUIRY */}
      <section id="enquire" className="bg-[#F9F5EE] px-6 md:px-14 py-20 md:py-24 scroll-mt-20 border-t border-black/5">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-start">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#0B4D5F] mb-4 block font-sans">
              Book a discovery call
            </span>
            <h2 className="font-serif text-[clamp(1.9rem,3.6vw,2.8rem)] font-bold text-[#0D0C18] tracking-tight leading-tight mb-5">
              Tell us how your team works today.
            </h2>
            <p className="text-base text-[#4A4860] leading-relaxed font-sans">
              We will assess your organisation&rsquo;s needs, outline the available programmes, and
              recommend the right starting point for your team.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="bg-white border border-black/8 rounded-3xl p-7 md:p-9">
              <TeamEnquiryForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
