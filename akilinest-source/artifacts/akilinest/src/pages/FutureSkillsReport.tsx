import { Link } from "wouter";
import { Reveal } from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";
import EventCTA from "@/components/EventCTA";
import { canonicalUrl } from "@/lib/seo";

const stats = [
  { value: "56%", label: "of parents believe AI will harm teens' critical thinking", source: "Common Sense Media" },
  { value: "57%", label: "think AI will make it harder for children to find jobs", source: "Pew Research" },
  { value: "83%", label: "say their child's school has not communicated AI policy", source: "Parent surveys" },
  { value: "77%", label: "are interested in AI-powered education tools", source: "Common Sense Media" },
  { value: "37%", label: "of parents knew their teen had used AI — awareness gap", source: "Research data" },
  { value: "66%", label: "of teens agree students may not learn because AI does the work", source: "Student surveys" },
];

const skills2030 = [
  { rank: "01", skill: "Independent Reasoning", why: "AI provides answers. Humans who can evaluate, challenge, and reframe those answers become indispensable." },
  { rank: "02", skill: "Creative Articulation", why: "Presenting, pitching, and explaining ideas in your own words — no algorithm replaces this." },
  { rank: "03", skill: "AI Literacy & Judgment", why: "Not prompt tricks — understanding how AI works, where it fails, and when not to use it." },
  { rank: "04", skill: "Digital Safety & Identity", why: "Deepfakes, data privacy, companion bots — children need to navigate systems designed for adults." },
  { rank: "05", skill: "Problem Framing", why: "Defining the right question before reaching for any tool. The Builders and Innovators edge." },
  { rank: "06", skill: "Ethical Technology Use", why: "African context matters — M-Pesa, community, climate. Technology that serves people, not the reverse." },
];

const declining = [
  "Rote memorisation of facts AI can retrieve instantly",
  "Coding syntax without problem-solving context",
  "Copy-paste homework that the child cannot explain",
  "Passive screen consumption marketed as 'educational'",
  "Certificate collection without portfolio of real work",
];

export default function FutureSkillsReport() {
  return (
    <>
      <PageMeta
        title="The Future Skills Report 2026: What Nairobi Kids Need"
        description="Research-backed report for Nairobi parents — the six skills children need before 2030, what schools are missing, and what the data says about AI and young minds."
        path="/future-skills-report"
        keywords={[
          "future skills children 2030",
          "Nairobi kids skills AI era",
          "critical thinking children Kenya",
          "AI education report parents",
        ]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Report",
          name: "The Future Skills Report 2026: What Nairobi Kids Need",
          description: "Research-backed analysis of skills Nairobi children need in the AI era.",
          url: canonicalUrl("/future-skills-report"),
          publisher: { "@type": "Organization", name: "AkiliNest" },
          datePublished: "2026-03-01",
        }}
      />

      <div className="relative min-h-[50vh] flex flex-col justify-end overflow-hidden bg-gradient-to-br from-[#0D0C18] via-[#0B4D5F] to-[#7F5AF0]/30">
        <div className="relative z-10 px-6 md:px-14 pb-16 pt-32 max-w-4xl">
          <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-white/35 mb-3 block">
            Research &amp; Insights
          </span>
          <h1 className="font-serif text-[clamp(2.4rem,5vw,4.5rem)] font-bold text-white tracking-tight leading-tight mb-4">
            The Future Skills Report 2026
          </h1>
          <p className="text-lg text-white/70 max-w-2xl leading-relaxed mb-6">
            What Nairobi kids actually need before 2030 — backed by parent research, not hype.
          </p>
          <p className="text-sm text-white/40">Published March 2026 · AkiliNest · Nairobi, Kenya</p>
        </div>
      </div>

      <section className="bg-[#F9F5EE] px-6 md:px-14 py-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="font-serif text-3xl font-bold text-[#0D0C18] mb-4">Executive summary</h2>
            <p className="text-base text-[#4A4860] leading-relaxed max-w-3xl mb-6">
              Parents across Nairobi are searching at midnight because they understand one truth: their children navigate AI better than they do, but without the judgment to use it well. Schools have added digital literacy to CBC. Nobody is teaching children to question the algorithm.
            </p>
            <p className="text-base text-[#4A4860] leading-relaxed max-w-3xl">
              This report maps proven parent concerns to six skills that remain valuable when AI automates everything else — and what Nairobi families can do about it today.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#0D0C18] px-6 md:px-14 py-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="font-serif text-3xl font-bold text-white mb-10">What the data says</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 40}>
                <div className="bg-white/4 border border-white/8 rounded-2xl p-6">
                  <span className="font-serif text-4xl font-bold text-[#E8693A] block mb-2">{stat.value}</span>
                  <p className="text-sm text-white/70 leading-relaxed mb-2">{stat.label}</p>
                  <span className="text-[10px] text-white/30 uppercase tracking-wider">{stat.source}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F9F5EE] px-6 md:px-14 py-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="font-serif text-3xl font-bold text-[#0D0C18] mb-10">
              The six skills Nairobi kids need before 2030
            </h2>
          </Reveal>
          <div className="space-y-4">
            {skills2030.map((item, i) => (
              <Reveal key={item.rank} delay={i * 50}>
                <div className="bg-white border border-black/8 rounded-2xl p-6 grid grid-cols-[50px_1fr] gap-4">
                  <span className="font-serif text-xl font-bold text-[#1A7A97]">{item.rank}</span>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#0D0C18] mb-1">{item.skill}</h3>
                    <p className="text-sm text-[#5C5A70] leading-relaxed">{item.why}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 md:px-14 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Reveal>
            <h2 className="font-serif text-3xl font-bold text-[#0D0C18] mb-6">What is declining in value</h2>
            <ul className="space-y-3">
              {declining.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#5C5A70]">
                  <span className="text-[#E8523A] font-bold">↓</span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={80}>
            <div className="bg-[#0B4D5F] rounded-2xl p-8 text-white">
              <h3 className="font-serif text-2xl font-bold mb-4">How AkiliNest builds these skills</h3>
              <p className="text-sm text-white/70 leading-relaxed mb-6">
                Four programme stages (ages 6–17) built around one cycle: Think First, Write Creatively, Use AI, Present. Not a coding camp. Cognitive resilience training for the AI era.
              </p>
              <Link
                href="/programme"
                className="inline-flex bg-white text-[#0D0C18] font-bold text-sm px-6 py-3 rounded-full hover:-translate-y-0.5 transition-all"
              >
                Explore Programmes
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#F9F5EE] px-6 md:px-14 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <Reveal>
            <p className="text-[#5C5A70] mb-6">
              Want the deep dives? Read our parent guides on AI safety, CBC gaps, and Nairobi activities.
            </p>
            <Link href="/blog" className="text-[#0B4D5F] font-semibold hover:underline">
              Browse all 22+ parent guides →
            </Link>
          </Reveal>
        </div>
      </section>

      <EventCTA />
    </>
  );
}
