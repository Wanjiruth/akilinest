import { Link } from "wouter";
import { Reveal } from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";
import CredibilityStrip from "@/components/CredibilityStrip";
import SolutionCards from "@/components/SolutionCards";
import WhyPartner from "@/components/WhyPartner";
import TeamEnquiryForm from "@/components/TeamEnquiryForm";
import Faq from "@/components/Faq";
import { asset, IMAGES } from "@/lib/images";
import { corporateSolutions, corporateWhy } from "@/content/pathways";
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
              Stop wasting AI subscriptions. Start building real output.
            </h2>
            <p className="text-base md:text-lg text-[#4A4860] max-w-2xl leading-relaxed mb-5 font-sans">
              Most teams are told to &ldquo;just use AI&rdquo;, but end up experimenting in silos.
              The outcome is always the same: messy brand voices, inconsistent outputs, and software
              bills that do not translate into actual revenue.
            </p>
            <p className="text-base md:text-lg text-[#4A4860] max-w-2xl leading-relaxed mb-9 font-sans">
              At AkiliNest we do not do generic tech lectures. We step directly into your operations
              to transform how your people actually build, design, market and execute with
              intelligence.
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

      {/* SOLUTIONS */}
      <section className="bg-[#F9F5EE] px-6 md:px-14 py-20 md:py-24 border-b border-black/5">
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
