import { Link } from "wouter";
import { Reveal } from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";
import CredibilityStrip from "@/components/CredibilityStrip";
import SolutionCards from "@/components/SolutionCards";
import WhyPartner from "@/components/WhyPartner";
import TeamEnquiryForm from "@/components/TeamEnquiryForm";
import Faq from "@/components/Faq";
import { asset, IMAGES } from "@/lib/images";
import { educatorSolutions, educatorWhy } from "@/content/pathways";
import { educatorFaqs } from "@/content/teams";

export default function TeamsEducators() {
  return (
    <>
      <PageMeta
        title="AI Training for Teachers in Kenya | Educator Solutions | AkiliNest"
        description="Practical AI training for teachers and schools in Kenya. Educator readiness audits, integration playbooks, hands-on teacher cohorts and leadership labs from AkiliNest."
        path="/teams/educators"
        keywords={[
          "AI training for teachers Kenya",
          "AI upskilling Kenya",
          "AI workshop Nairobi",
          "AI training Kenya",
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
              Educator Solutions
            </span>
            <h1 className="font-serif text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.05] tracking-tight text-[#0D0C18] mb-6 max-w-3xl">
              Empowering teachers and learning institutions to lead with intelligence.
            </h1>
            <p className="text-base md:text-lg text-[#4A4860] max-w-2xl leading-relaxed mb-5 font-sans">
              Technology is transforming classrooms and administrative desks faster than ever, but
              educators are often left to figure out new tools on their own. The result is uneven
              tech integration, wasted instructional hours, and digital lesson plans that feel
              disconnected from actual student needs.
            </p>
            <p className="text-base md:text-lg text-[#4A4860] max-w-2xl leading-relaxed mb-9 font-sans">
              At AkiliNest we bridge that gap. Building on established frameworks like the TSC AI
              Educator Pathways, powered by Microsoft Elevate, we design specialised training and
              adoption systems that teach educators how to safely, creatively and practically apply
              artificial intelligence and modern digital tools in their classrooms and institutions.
            </p>
            <a
              href="#enquire"
              data-testid="button-educators-hero-cta"
              className="inline-flex items-center justify-center bg-[#E8693A] text-white font-bold text-base px-9 py-4 rounded-full hover:bg-[#C4561A] hover:-translate-y-0.5 hover:shadow-xl transition-all font-sans"
            >
              Enquire about an educator programme
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
              Educator and institutional pathways.
            </h2>
          </Reveal>
          <SolutionCards solutions={educatorSolutions} />
        </div>
      </section>

      {/* CLASSROOM */}
      <section className="bg-white px-6 md:px-14 py-20 md:py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <img
              src={asset(IMAGES.sessionLaptop)}
              alt="A facilitator working with a group of learners around a laptop during an AkiliNest session"
              width="1200"
              height="1600"
              loading="lazy"
              decoding="async"
              className="rounded-3xl object-cover w-full aspect-[4/3] shadow-lg"
            />
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-serif text-[clamp(1.8rem,3.4vw,2.6rem)] font-bold text-[#0D0C18] tracking-tight leading-tight mb-5">
              We teach in classrooms, not only in slide decks.
            </h2>
            <p className="text-base text-[#4A4860] leading-relaxed mb-5 font-sans">
              AkiliNest runs sessions with learners as well as with the adults who teach them. What
              works with a room of children tends to be the same thing that works with a staff room:
              real tasks, plain language, and something finished by the end.
            </p>
            <p className="text-base text-[#4A4860] leading-relaxed mb-6 font-sans">
              We work with schools and training teams in Nairobi and across Kenya, running sessions
              on site or during staff development days, including private and international schools
              whose staff sit outside the TSC scheme.
            </p>
            <Link
              href="/kids-ai-bootcamps"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0D0C18] hover:text-[#E8693A] transition-colors font-sans group"
            >
              See the kids bootcamps
              <span className="w-6 h-px bg-current transition-all group-hover:w-10" />
            </Link>
          </Reveal>
        </div>
      </section>

      <WhyPartner heading="Why partner with AkiliNest for education?" reasons={educatorWhy} />

      <Faq
        items={educatorFaqs}
        heading="Questions educator teams ask"
        eyebrow="Before you enquire"
        surface="white"
      />

      {/* ENQUIRY */}
      <section id="enquire" className="bg-[#F9F5EE] px-6 md:px-14 py-20 md:py-24 scroll-mt-20 border-t border-black/5">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-start">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#0B4D5F] mb-4 block font-sans">
              For schools and learning teams
            </span>
            <h2 className="font-serif text-[clamp(1.9rem,3.6vw,2.8rem)] font-bold text-[#0D0C18] tracking-tight leading-tight mb-5">
              Tell us about your teaching team.
            </h2>
            <p className="text-base text-[#4A4860] leading-relaxed font-sans">
              Tell us the size of your teaching team and what takes up most of their week. We will
              suggest a sensible starting point.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="bg-white border border-black/8 rounded-3xl p-7 md:p-9">
              <TeamEnquiryForm defaultInterest="AI Workflow Bootcamp" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
