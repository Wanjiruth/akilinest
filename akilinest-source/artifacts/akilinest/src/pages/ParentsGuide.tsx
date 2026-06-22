import { Link } from "wouter";
import { Reveal } from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";
import EventCTA from "@/components/EventCTA";
import { canonicalUrl } from "@/lib/seo";

const perfectFor = [
  "Parents whose child asks to use ChatGPT and you are not sure what to say",
  "Families searching extracurricular activities in Nairobi that build real confidence",
  "Parents who discovered their child using AI in secret and want a better path",
  "Nairobi families navigating CBC who want creative, critical thinking beyond school",
  "Parents who want their child to create, not just consume technology",
  "Anyone committed to 2–3 hours per week of intentional creative development",
];

const notIdealFor = [
  "Looking for a coding certificate factory or exam-prep tutoring centre",
  "Expecting AI to do the thinking so your child can produce faster outputs",
  "Wanting large anonymous classes where your child disappears in the crowd",
  "Not ready to engage — this works best when parents understand the philosophy",
];

const steps = [
  {
    n: "01",
    title: "Book a Holiday Camp Spot",
    desc: "10 days, 2 hours daily, at heARTspace. See the Think-First cycle in action with your child.",
  },
  {
    n: "02",
    title: "Choose the Right Stage",
    desc: "Sprouts (6–8), Explorers (9–11), Builders (12–14), or Innovators (15–17). Age-appropriate creative intelligence.",
  },
  {
    n: "03",
    title: "Continue with Weekend Sessions",
    desc: "After camp, ongoing weekend cohorts. Small groups, tangible outputs every week.",
  },
  {
    n: "04",
    title: "Join the Parent Series",
    desc: "Five sessions on raising children in the AI era — screens, safety, creation, and future skills.",
  },
  {
    n: "05",
    title: "Watch Your Child Present",
    desc: "Every cycle ends with presentation — your child explains and defends their reasoning. That is the transformation.",
  },
];

const requirements = [
  { title: "Ages 6–17", desc: "Programmes designed for each developmental stage" },
  { title: "Nairobi-based or able to travel", desc: "Sessions at heARTspace, Kabarnet Road" },
  { title: "Open-minded about AI", desc: "Not anti-technology — pro-thinking" },
  { title: "Willingness to engage", desc: "Parent Series and family conversations amplify results" },
];

export default function ParentsGuide() {
  return (
    <>
      <PageMeta
        title="The Nairobi Parent's Guide to Raising Thinkers in the AI Era"
        description="Is AkiliNest right for your family? A complete guide for Nairobi parents — who it's for, what to expect, how to start, and what children actually learn."
        path="/parents-guide"
        keywords={[
          "Nairobi parent guide AI children",
          "creative programmes kids Nairobi",
          "extracurricular activities Nairobi",
          "raising kids AI era Kenya",
        ]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "The Nairobi Parent's Guide",
          description: "Complete guide for Nairobi parents considering AkiliNest creative intelligence programmes.",
          url: canonicalUrl("/parents-guide"),
          publisher: { "@type": "Organization", name: "AkiliNest" },
        }}
      />

      <div className="relative h-[45vh] min-h-[300px] flex flex-col justify-end overflow-hidden bg-gradient-to-br from-[#0B4D5F] to-[#0D0C18]">
        <div className="relative z-10 px-6 md:px-14 pb-12 pt-28 max-w-4xl">
          <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-white/35 mb-3 block">
            Parent&apos;s Guide
          </span>
          <h1 className="font-serif text-[clamp(2.2rem,5vw,4rem)] font-bold text-white tracking-tight leading-tight mb-3">
            Is AkiliNest right for your family?
          </h1>
          <p className="text-base text-white/60 max-w-xl leading-relaxed">
            Everything Nairobi parents need to know before enrolling — who thrives here, what children learn, and how to start.
          </p>
        </div>
      </div>

      <section className="bg-[#F9F5EE] px-6 md:px-14 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Reveal>
            <h2 className="font-serif text-3xl font-bold text-[#0D0C18] mb-6">Perfect for</h2>
            <ul className="space-y-4">
              {perfectFor.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-[#4A4860]">
                  <span className="w-6 h-6 rounded-full bg-[#2CB67D]/15 text-[#2CB67D] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-serif text-3xl font-bold text-[#0D0C18] mb-6">Not ideal for</h2>
            <ul className="space-y-4">
              {notIdealFor.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-[#4A4860]">
                  <span className="w-6 h-6 rounded-full bg-[#E8523A]/10 text-[#E8523A] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#0D0C18] px-6 md:px-14 py-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#1A7A97] mb-4 block">
              Your Journey
            </span>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold text-white mb-12">
              Five steps from curious to enrolled
            </h2>
          </Reveal>
          <div className="space-y-6">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 60}>
                <div className="grid grid-cols-[60px_1fr] gap-6 items-start border-b border-white/6 pb-6">
                  <span className="font-serif text-2xl font-bold text-[#E8693A]">{step.n}</span>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-white/55 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F9F5EE] px-6 md:px-14 py-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="font-serif text-3xl font-bold text-[#0D0C18] mb-8">What you need to get started</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {requirements.map((req, i) => (
              <Reveal key={req.title} delay={i * 50}>
                <div className="bg-white border border-black/8 rounded-2xl p-6">
                  <h3 className="font-serif text-lg font-bold text-[#0D0C18] mb-2">{req.title}</h3>
                  <p className="text-sm text-[#5C5A70]">{req.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="text-sm text-[#5C5A70] mt-8">
            No prior technology experience required. We start with thinking, not tools.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 md:px-14 py-20 border-t border-black/5">
        <div className="max-w-6xl mx-auto text-center">
          <Reveal>
            <h2 className="font-serif text-3xl font-bold text-[#0D0C18] mb-4">Read what parents search</h2>
            <p className="text-[#5C5A70] mb-8 max-w-xl mx-auto">
              22+ guides covering AI safety, CBC gaps, Nairobi activities, and future skills — mapped to what parents actually Google.
            </p>
            <Link
              href="/blog"
              className="inline-flex bg-[#0B4D5F] text-white font-bold text-sm px-8 py-4 rounded-full hover:bg-[#1A7A97] transition-all"
            >
              Browse Parent Guides
            </Link>
          </Reveal>
        </div>
      </section>

      <EventCTA />
    </>
  );
}
