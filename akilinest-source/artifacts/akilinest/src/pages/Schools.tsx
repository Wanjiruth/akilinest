import { Link } from "wouter";
import { Reveal } from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";

const stages = [
  { letter: "S", name: "Sprouts", ages: "8-10", desc: "Young learners develop creativity, confidence, storytelling, problem-solving, and digital creation skills through fun, hands-on projects.", color: "#1A7A97" },
  { letter: "E", name: "Explorers", ages: "11-12", desc: "Learners build complete projects, explore innovation, conduct research, and begin turning ideas into real solutions.", color: "#E8693A" },
  { letter: "B", name: "Builders", ages: "13-14", desc: "Students create portfolios, launch projects, tackle real-world challenges, and develop entrepreneurial thinking.", color: "#7F5AF0" },
  { letter: "I", name: "Innovators", ages: "15-17", desc: "Students build AI-powered solutions, mentor younger learners, complete community-focused projects, and work towards launching ventures with real-world impact.", color: "#2CB67D" },
];

const topics = [
  { n: "01", color: "#1A7A97", title: "Storytelling & Communication", desc: "Students develop and defend their own ideas before AI enters the room. The tool drafts. The student decides." },
  { n: "02", color: "#E8693A", title: "Design & Creativity", desc: "Visual and product thinking built on original intent. AI executes. The student directs." },
  { n: "03", color: "#E8523A", title: "Technology & AI System Design", desc: "Understanding how AI works well enough to question it, not just operate it." },
  { n: "04", color: "#7F5AF0", title: "Entrepreneurship & Innovation", desc: "Real problems, real pitches, real defence of reasoning. AI is one tool in the process, not the source of the idea." },
  { n: "05", color: "#2CB67D", title: "Human-Centered Leadership", desc: "Group projects where students lead and AI supports. Not the other way around." },
  { n: "06", color: "#0B4D5F", title: "Ethics & Digital Citizenship", desc: "Is this true? Is this fair? Is this mine? The three questions every student needs before they hit publish." },
];

const reasons = [
  { title: "Project-Based Learning", desc: "Students learn by creating, building, presenting, testing, and improving real projects." },
  { title: "Future-Ready Skills", desc: "Communication, creativity, leadership, critical thinking, entrepreneurship, and responsible AI use. The skills that will matter most in a rapidly changing world." },
  { title: "Real Portfolios", desc: "Every learner builds a growing body of work that showcases their progress, creativity, and achievements over time." },
  { title: "AI With Critical Thinking", desc: "Students learn not only how to use AI, but how to question, verify, and apply it responsibly. Thinking first, always." },
];

export default function Schools() {
  return (
    <>
      <PageMeta
        title="Schools Partnership | AkiliNest Kenya"
        description="AkiliNest partners with Kenyan schools to develop creativity, communication, entrepreneurship, leadership, and responsible AI skills through hands-on project-based learning. UNESCO AI Competency Framework aligned."
        path="/schools"
        keywords={["AI literacy schools Kenya", "UNESCO AI competency framework", "school partnership Kenya", "AkiliNest schools", "future skills programme Kenya"]}
      />

      <div className="relative min-h-[65vh] flex flex-col justify-end overflow-hidden bg-[#0D0C18]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B4D5F] to-[#0D0C18]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C18]/90 to-transparent" />
        <div className="relative z-10 px-6 md:px-14 pb-16 pt-28 max-w-4xl">
          <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-white/35 mb-4 block">For Schools</span>
          <h1 className="font-serif text-[clamp(2.6rem,5.5vw,5rem)] font-black text-white tracking-tight leading-[1.05] mb-6">
            What if schools prepared children for the{" "}
            <span className="text-[#E8693A]">next 20 years?</span>
          </h1>
          <p className="text-base md:text-lg text-white/65 max-w-2xl font-light leading-relaxed mb-4">
            AkiliNest partners with schools to help learners develop creativity, communication, entrepreneurship, leadership, digital fluency, and responsible AI skills through hands-on, project-based learning.
          </p>
          <p className="text-base md:text-lg text-white/85 max-w-2xl font-semibold leading-relaxed mb-8">
            Because the future will not only reward what students know. It will reward what they can create, build, and lead.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#E8693A] hover:bg-[#C4561A] text-white font-bold text-base px-10 py-4 rounded-full transition-all shadow-lg">
            Partner With Us
          </Link>
        </div>
      </div>

      <section className="bg-[#F9F5EE] px-6 md:px-14 py-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-[#1A7A97] mb-4 block">Partnership Models</span>
            <h2 className="font-serif text-[clamp(2.2rem,4vw,4rem)] font-black text-[#0D0C18] tracking-tight leading-tight mb-4">Two Ways to Partner</h2>
            <p className="text-base text-[#5C5A70] max-w-2xl font-light leading-relaxed mb-12">No school needs to restructure its curriculum to start. Both models deliver the same outcome: students who think before they let AI think for them.</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal>
              <div className="bg-white border-[1.5px] border-black/8 rounded-3xl p-8 h-full">
                <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-[#1A7A97] bg-[#1A7A97]/10 px-3 py-1 rounded-full mb-5">Deepest impact</span>
                <h3 className="font-serif text-2xl font-black text-[#0D0C18] mb-3">Mainstream Integration</h3>
                <p className="text-sm text-[#5C5A70] leading-relaxed font-light mb-4">Bring AkiliNest directly into the school timetable as a structured future-skills programme. Students progress through age-appropriate pathways in creativity, innovation, entrepreneurship, leadership, and AI literacy while building portfolios and completing real projects.</p>
                <p className="text-sm font-semibold text-[#0B4D5F]">Best for schools looking to embed future-ready learning into everyday education.</p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="bg-white border-[1.5px] border-black/8 rounded-3xl p-8 h-full">
                <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-[#E8693A] bg-[#E8693A]/10 px-3 py-1 rounded-full mb-5">Zero disruption</span>
                <h3 className="font-serif text-2xl font-black text-[#0D0C18] mb-3">Extracurricular Programme</h3>
                <p className="text-sm text-[#5C5A70] leading-relaxed font-light mb-4">Offer AkiliNest as an after-school club, holiday programme, innovation club, or enrichment activity. Students gain hands-on experience building projects, exploring technology, solving problems, and developing leadership skills beyond the classroom.</p>
                <p className="text-sm font-semibold text-[#0B4D5F]">Best for schools looking to extend learning opportunities without changing their existing timetable.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#0D0C18] px-6 md:px-14 py-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-white/35 mb-4 block">The Programme</span>
            <h2 className="font-serif text-[clamp(2.2rem,4vw,4rem)] font-black text-white tracking-tight leading-tight mb-4">What Students Experience</h2>
            <p className="text-base text-white/50 max-w-2xl font-light leading-relaxed mb-12">Four age-appropriate stages, each building on the last. Every stage produces real work, real skills, and a growing portfolio.</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {stages.map((s, i) => (
              <Reveal key={s.name} delay={i * 70}>
                <div className="bg-white/4 border border-white/8 rounded-2xl p-7 relative overflow-hidden h-full">
                  <div className="absolute top-0 left-0 right-0 h-1" style={{ background: s.color }} />
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-serif text-2xl font-black" style={{ color: s.color }}>{s.letter}</span>
                    <div>
                      <span className="font-serif text-lg font-black text-white">{s.name}</span>
                      <span className="text-xs text-white/40 ml-2 font-sans">Ages {s.ages}</span>
                    </div>
                  </div>
                  <p className="text-sm text-white/55 font-light leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F9F5EE] px-6 md:px-14 py-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-[#1A7A97] mb-4 block">UNESCO-Aligned Curriculum</span>
            <h2 className="font-serif text-[clamp(2.2rem,4vw,4rem)] font-black text-[#0D0C18] tracking-tight leading-tight mb-4">Six Core Topics</h2>
            <p className="text-base text-[#5C5A70] max-w-2xl font-light leading-relaxed mb-12">AkiliNest curriculum maps directly to UNESCO's AI Competency Framework for Students, giving your school a structured, internationally benchmarked AI literacy programme without having to build one from scratch.</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {topics.map((t, i) => (
              <Reveal key={t.n} delay={i * 60}>
                <div className="bg-white border-[1.5px] border-black/8 rounded-2xl p-6 relative overflow-hidden h-full shadow-sm">
                  <div className="absolute top-0 left-0 right-0 h-1" style={{ background: t.color }} />
                  <div className="font-serif text-3xl font-black leading-none mb-3" style={{ color: t.color + "40" }}>{t.n}</div>
                  <h4 className="font-serif text-base font-black text-[#0D0C18] mb-2 leading-tight">{t.title}</h4>
                  <p className="text-sm text-[#5C5A70] font-light leading-relaxed">{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0D0C18] px-6 md:px-14 py-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-white/35 mb-4 block">Why AkiliNest</span>
            <h2 className="font-serif text-[clamp(2.2rem,4vw,4rem)] font-black text-white tracking-tight leading-tight mb-12">Why Schools Choose AkiliNest</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 70}>
                <div className="bg-white/4 border border-white/8 rounded-2xl p-7 h-full">
                  <h4 className="font-serif text-lg font-black text-white mb-2">{r.title}</h4>
                  <p className="text-sm text-white/55 font-light leading-relaxed">{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0B4D5F] px-6 md:px-14 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-white/35 mb-4 block">Coming Soon</span>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-black text-white tracking-tight leading-tight mb-5">The AkiliNest Innovation Summit</h2>
            <p className="text-base text-white/60 font-light leading-relaxed max-w-2xl mx-auto">AkiliNest learners from different schools will showcase projects, ventures, portfolios, and innovations at an annual celebration of creativity, leadership, and future-ready learning.</p>
            <p className="text-sm text-white/40 mt-4 font-light">Currently in development as part of the long-term AkiliNest vision.</p>
          </Reveal>
        </div>
      </section>

      <div className="bg-[#FFF0E8] border-t border-[#C4561A]/15 px-6 md:px-14 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <h3 className="font-serif text-3xl font-black text-[#0D0C18] mb-3">Ready to explore a partnership?</h3>
          <p className="text-base text-[#5C5A70] font-light leading-relaxed">Whether you are looking for a mainstream programme or an extracurricular offering, we would love to explore how AkiliNest can support your learners.</p>
        </div>
        <Link href="/contact" data-testid="button-schools-contact" className="inline-flex items-center gap-2 bg-[#0B4D5F] hover:bg-[#1A7A97] text-white font-bold text-base px-10 py-4 rounded-full transition-all shrink-0 whitespace-nowrap shadow-lg">
          Book a School Conversation
        </Link>
      </div>
    </>
  );
}
