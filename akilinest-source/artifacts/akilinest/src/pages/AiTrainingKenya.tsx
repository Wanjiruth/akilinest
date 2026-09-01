import { Link } from "wouter";
import { Reveal } from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";
import { pageSeo } from "@/lib/pageSeo.mjs";
import CredibilityStrip from "@/components/CredibilityStrip";
import TeamEnquiryForm from "@/components/TeamEnquiryForm";
import { asset, IMAGES } from "@/lib/images";
import { canonicalUrl } from "@/lib/seo";

/**
 * Category page for the head term. It exists because people search
 * "AI training Kenya" as a phrase, and answers the questions that query
 * implies rather than repeating the pathway pages.
 */
const QUESTIONS = [
  {
    q: "What is AI training?",
    a: "AI training teaches people to use AI tools on their own real work: deciding which tasks it should touch, using it well on those tasks, checking what it produces, and knowing what must never go near it. It is different from a software demonstration, which shows what a tool can do without changing how anyone works on Monday.",
  },
  {
    q: "Who needs AI training in Kenya?",
    a: "Any team whose week is mostly documents, correspondence and decisions. In practice that means HR and people teams, operations, sales, customer service, professional services and NGOs, and school and college teaching teams. Kenya has the highest rate of ChatGPT use of any country in the world, so in most organisations the tools are already in use and the training is what is missing.",
  },
  {
    q: "How long does AI training take?",
    a: "It depends on the size of the team and how much of their work you want to cover, so we scope it on a discovery call. Every AkiliNest engagement includes live sessions plus a 30-day implementation clinic, because the month after a workshop is where adoption is usually won or lost.",
  },
  {
    q: "How much does corporate AI training cost in Kenya?",
    a: "We scope and price each engagement on the discovery call, based on team size and the work you want to improve, rather than publishing a rate card. Tell us how many people are involved and what takes up their week, and we will give you a figure and what it covers.",
  },
  {
    q: "Do you deliver AI training in person or online?",
    a: "In person, on site at your offices in Nairobi or at our space, and we work with teams across Kenya. Educator teams often use a staff development day. Sessions are built on your own documents and tasks, which is the part that does not work as well remotely.",
  },
  {
    q: "Do you offer AI training for children?",
    a: "Yes, separately, and it is the work we are best known for in Kenya. Our creative AI bootcamps run during the school holidays at heARTspace, Nairobi, for young people aged 8 to 17, across four age stages. They are a different programme from our team training, with a different approach.",
  },
];

const PATHWAYS = [
  {
    name: "Corporate AI training",
    desc: "Readiness audits, custom AI playbooks, applied team cohorts and executive transformation labs for businesses, startups and enterprises.",
    href: "/teams/corporate",
    cta: "See corporate AI training",
  },
  {
    name: "AI training for teachers",
    desc: "Educator readiness audits, integration playbooks, hands-on teacher cohorts and leadership labs for schools and learning networks.",
    href: "/teams/educators",
    cta: "See AI training for educators",
  },
  {
    name: "AI bootcamps for kids",
    desc: "Creative AI bootcamps in Nairobi for young people aged 8 to 17, across four age stages, during the school holidays.",
    href: "/kids-ai-bootcamps",
    cta: "See kids AI bootcamps",
  },
];

export default function AiTrainingKenya() {
  return (
    <>
      <PageMeta
        {...pageSeo("/ai-training-kenya")}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: QUESTIONS.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }}
      />

      {/* HERO */}
      <section className="relative bg-[#F9F5EE] overflow-hidden border-b border-black/5">
        <div
          aria-hidden
          className="absolute -top-40 -right-24 w-[500px] h-[500px] rounded-full bg-[#0B4D5F]/5"
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-14 pt-32 md:pt-40 pb-16 md:pb-20">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[2px] uppercase text-[#0B4D5F] mb-6 block font-sans">
              AkiliNest &middot; Nairobi, Kenya
            </span>
            <h1 className="font-serif text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.05] tracking-tight text-[#0D0C18] mb-6 max-w-3xl">
              AI training in Kenya.
            </h1>
            <p className="text-base md:text-lg text-[#4A4860] max-w-2xl leading-relaxed mb-5 font-sans">
              AkiliNest is an AI training company based in Nairobi, Kenya. We run practical AI
              training for workplace teams, AI training for teachers and school leadership, and
              creative AI bootcamps for young people aged 8 to 17.
            </p>
            <p className="text-base md:text-lg text-[#4A4860] max-w-2xl leading-relaxed mb-9 font-sans">
              Kenya has the highest rate of ChatGPT use of any country in the world, at 42.1% of
              internet users aged 16 and over in the past month, according to the DataReportal and
              Meltwater Global Digital Report 2025. AI use is running ahead of formal AI training.
              That gap is what we exist to close.
            </p>
            <a
              href="#enquire"
              className="inline-flex items-center justify-center bg-[#E8693A] text-white font-bold text-base px-9 py-4 rounded-full hover:bg-[#C4561A] hover:-translate-y-0.5 hover:shadow-xl transition-all font-sans"
            >
              Book a team discovery call
            </a>
          </Reveal>
        </div>
      </section>

      <CredibilityStrip />

      {/* PATHWAYS */}
      <section className="bg-white px-6 md:px-14 py-20 md:py-24">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#0B4D5F] mb-4 block font-sans">
              Our AI training programmes
            </span>
            <h2 className="font-serif text-[clamp(1.9rem,3.6vw,3rem)] font-bold text-[#0D0C18] tracking-tight leading-tight mb-12 max-w-3xl">
              What kinds of AI training does AkiliNest offer in Kenya?
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PATHWAYS.map((p, i) => (
              <Reveal key={p.href} delay={i * 70}>
                <div className="bg-[#F9F5EE] border border-black/8 rounded-3xl p-8 h-full flex flex-col">
                  <h3 className="font-serif text-xl font-bold text-[#0D0C18] mb-3">{p.name}</h3>
                  <p className="text-sm text-[#4A4860] leading-relaxed mb-7 flex-1 font-sans">
                    {p.desc}
                  </p>
                  <Link
                    href={p.href}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#0D0C18] hover:text-[#E8693A] transition-colors font-sans group self-start"
                  >
                    {p.cta}
                    <span className="w-6 h-px bg-current transition-all group-hover:w-10" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* QUESTIONS */}
      <section className="bg-[#F9F5EE] px-6 md:px-14 py-20 md:py-24 border-y border-black/5">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="font-serif text-[clamp(1.9rem,3.6vw,3rem)] font-bold text-[#0D0C18] tracking-tight leading-tight mb-12">
              Common questions about AI training in Kenya
            </h2>
          </Reveal>
          <div className="flex flex-col gap-8">
            {QUESTIONS.map((item, i) => (
              <Reveal key={item.q} delay={i * 50}>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-[#0D0C18] mb-3 leading-snug">
                    {item.q}
                  </h3>
                  <p className="text-base text-[#4A4860] leading-relaxed font-sans">{item.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHERE */}
      <section className="bg-white px-6 md:px-14 py-20 md:py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <img
              src={asset(IMAGES.pitchStage)}
              alt="AkiliNest presenting at the H.E.R.O. Kenya programme in Nairobi"
              width="1400"
              height="933"
              loading="lazy"
              decoding="async"
              className="rounded-3xl object-cover w-full aspect-[4/3] shadow-lg"
            />
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-serif text-[clamp(1.8rem,3.4vw,2.6rem)] font-bold text-[#0D0C18] tracking-tight leading-tight mb-5">
              Where is AkiliNest based?
            </h2>
            <p className="text-base text-[#4A4860] leading-relaxed mb-5 font-sans">
              We are based in Nairobi, Kenya. Team sessions run on site at your offices in Nairobi
              or at our space, and we work with organisations across Kenya. Our kids AI bootcamps
              run at heARTspace on Kabarnet Road, off Ngong Road, Nairobi.
            </p>
            <p className="text-base text-[#4A4860] leading-relaxed font-sans">
              AkiliNest was selected for H.E.R.O. 2026, one of 20 startups chosen from 324
              applications across 23 countries.{" "}
              <Link href="/hero-2026" className="underline underline-offset-2 hover:text-[#0B4D5F]">
                Read more about the programme
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* ENQUIRY */}
      <section
        id="enquire"
        className="bg-[#F9F5EE] px-6 md:px-14 py-20 md:py-24 scroll-mt-20 border-t border-black/5"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-start">
          <Reveal>
            <h2 className="font-serif text-[clamp(1.9rem,3.6vw,2.8rem)] font-bold text-[#0D0C18] tracking-tight leading-tight mb-5">
              Enquire about AI training in Kenya
            </h2>
            <p className="text-base text-[#4A4860] leading-relaxed font-sans">
              Tell us about your team and what takes up most of their week, and we will suggest a
              starting point and a price.
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
