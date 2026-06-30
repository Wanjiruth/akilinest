import { Link } from "wouter";
import { Reveal } from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";
import { asset, IMAGES } from "@/lib/images";

const topics = [
  {
    n: "01", color: "#1A7A97",
    title: "Storytelling & Communication",
    desc: "Students use AI as a drafting partner while keeping their own voice and argument intact, not letting the tool write for them.",
  },
  {
    n: "02", color: "#E8693A",
    title: "Design & Creativity",
    desc: "Visual and product thinking, using AI tools without letting AI make the creative decisions.",
  },
  {
    n: "03", color: "#E8523A",
    title: "Technology & AI System Design",
    desc: "Understanding how AI systems work well enough to evaluate them, not just operate them.",
  },
  {
    n: "04", color: "#7F5AF0",
    title: "Entrepreneurship & Innovation",
    desc: "Turning an idea into a pitched, defended project, with AI as a tool in the process, not the source of the idea.",
  },
  {
    n: "05", color: "#2CB67D",
    title: "Human-Centered Leadership",
    desc: "Leading a group project where AI supports decisions instead of making them.",
  },
  {
    n: "06", color: "#0B4D5F",
    title: "Ethics & Digital Citizenship",
    desc: "Bias, misinformation, and responsible use. Is this true, is this fair, is this mine.",
  },
];

const entryModels = [
  {
    title: "Extracurricular",
    desc: "An after-school or holiday club delivered by AkiliNest facilitators. No changes to your existing timetable or staffing.",
    points: ["Zero curriculum disruption", "Delivered by AkiliNest facilitators", "Runs after hours or during holidays"],
  },
  {
    title: "Mainstream Integration",
    desc: "A structured module your teachers deliver inside the existing curriculum, using AkiliNest's framework, materials, and teacher training.",
    points: ["Embedded in your timetable", "Teacher-led with AkiliNest training", "Mapped to your existing subjects"],
  },
];

export default function Schools() {
  return (
    <>
      <PageMeta
        title="Schools Partnership | UNESCO-Aligned AI Literacy | AkiliNest"
        description="A ready-made AI literacy programme for Kenyan schools, aligned to the UNESCO AI Competency Framework. Extracurricular or mainstream. Ages 8 to 17."
        path="/schools"
        keywords={["AI literacy schools Kenya", "UNESCO AI competency framework", "school AI curriculum Kenya", "AkiliNest schools"]}
      />

      {/* HERO */}
      <div className="relative min-h-[58vh] flex flex-col justify-end overflow-hidden bg-[#0D0C18]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B4D5F] to-[#0D0C18]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C18]/80 to-transparent" />
        <div className="relative z-10 px-6 md:px-14 pb-12 pt-28">
          <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-white/35 mb-3 block">For Schools</span>
          <h1 className="font-serif text-[clamp(2.4rem,5vw,4.5rem)] font-black text-white tracking-tight leading-tight mb-4 max-w-3xl">
            Parents are already asking what your school is doing about AI.
          </h1>
          <p className="text-base md:text-lg text-white/60 max-w-xl font-light leading-relaxed">
            AkiliNest gives you a ready answer: a UNESCO-aligned AI literacy programme for students aged 8 to 17, across Kenya.
          </p>
        </div>
      </div>

      {/* THE GAP */}
      <section className="bg-[#0B4D5F] px-6 md:px-14 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(1.8rem,3.5vw,3rem)] font-bold text-white leading-tight mb-4">
              Most schools have no AI policy. Most camps do not touch AI at all.
            </h2>
            <p className="text-base text-white/60 leading-relaxed font-light">
              Kenya already leads the world in AI use. Students are using these tools whether or not a school has decided how to respond. AkiliNest closes that gap, with a programme built specifically for AI literacy, not a generic STEM or coding curriculum with AI added on.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <img
              src={asset(IMAGES.workBuilders)}
              alt="Student project work from an AkiliNest Builders stage session"
              loading="lazy"
              className="rounded-2xl object-cover w-full aspect-[4/3] shadow-xl"
            />
          </Reveal>
        </div>
      </section>

      {/* ENTRY MODELS */}
      <section className="bg-[#F9F5EE] px-6 md:px-14 py-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-[#1A7A97] mb-4 block">Two Ways In</span>
            <h2 className="font-serif text-[clamp(2.2rem,4vw,4rem)] font-black text-[#0D0C18] tracking-tight leading-tight mb-4">Choose How AkiliNest Fits</h2>
            <p className="text-base text-[#5C5A70] max-w-2xl font-light leading-relaxed mb-12">
              No school is required to restructure its curriculum to start. Both models lead to the same outcome, students who can think before they let AI think for them.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {entryModels.map((m, i) => (
              <Reveal key={m.title} delay={i * 80}>
                <div className="bg-white border-[1.5px] border-black/8 rounded-3xl p-8 h-full">
                  <h3 className="font-serif text-2xl font-black text-[#0D0C18] mb-3">{m.title}</h3>
                  <p className="text-sm text-[#5C5A70] leading-relaxed font-light mb-5">{m.desc}</p>
                  <ul className="space-y-2">
                    {m.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-sm text-[#5C5A70] font-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E8693A] mt-2 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* UNESCO TOPICS */}
      <section className="bg-[#0D0C18] px-6 md:px-14 py-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-white/35 mb-4 block">UNESCO-Aligned Curriculum</span>
            <h2 className="font-serif text-[clamp(2.2rem,4vw,4rem)] font-black text-white tracking-tight leading-tight mb-4">Seven Core Topics</h2>
            <p className="text-base text-white/50 max-w-2xl font-light leading-relaxed mb-12">
              AkiliNest's curriculum maps directly to UNESCO's AI Competency Framework for Students, giving schools a structured, internationally benchmarked way to introduce AI literacy without building a programme from scratch.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {topics.map((t, i) => (
              <Reveal key={t.n} delay={i * 60}>
                <div className="bg-white/4 border border-white/8 rounded-2xl p-6 relative overflow-hidden h-full">
                  <div className="absolute top-0 left-0 right-0 h-1" style={{ background: t.color }} />
                  <div className="font-serif text-3xl font-black leading-none mb-3" style={{ color: `${t.color}50` }}>{t.n}</div>
                  <h4 className="font-serif text-base font-black text-white mb-2 leading-tight">{t.title}</h4>
                  <p className="text-sm text-white/45 font-light leading-relaxed">{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY AKILINEST FOR SCHOOLS */}
      <section className="bg-[#F9F5EE] px-6 md:px-14 py-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-[#1A7A97] mb-4 block">Why It Matters</span>
            <h2 className="font-serif text-[clamp(2.2rem,4vw,4rem)] font-black text-[#0D0C18] tracking-tight leading-tight mb-12">If Every Student Just Uses AI the Same Way</h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="bg-white border-[1.5px] border-black/8 rounded-3xl p-8 md:p-10 max-w-3xl">
              <p className="text-base text-[#5C5A70] leading-relaxed font-light mb-4">
                There is no real difference between any of them. The tool becomes the skill, and the student becomes interchangeable with it. AkiliNest starts from the opposite premise. Think first. Then create. Then use AI, deliberately, as a tool to take an idea further than a student could alone.
              </p>
              <p className="text-base text-[#5C5A70] leading-relaxed font-light">
                That is the actual differentiator your school can offer parents, not a school that bans AI or ignores it, but one that teaches the judgment that makes AI worth using.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-[#FFF0E8] border-t border-[#C4561A]/15 px-6 md:px-14 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-serif text-2xl font-bold text-[#0D0C18] mb-1">Bring AkiliNest to your school</h3>
          <p className="text-sm text-[#4A4860]">Tell us about your school and which model fits. We will respond within two working days.</p>
        </div>
        <Link href="/contact" data-testid="button-schools-contact" className="inline-flex items-center gap-2 bg-[#0B4D5F] hover:bg-[#1A7A97] text-white font-bold text-sm px-8 py-4 rounded-full transition-all shrink-0 whitespace-nowrap">
          Start the Conversation
        </Link>
      </div>
    </>
  );
}
