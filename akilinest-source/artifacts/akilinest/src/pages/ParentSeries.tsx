import { Link } from "wouter";
import { Reveal } from "@/components/Reveal";

const sessions = [
  {
    n: "01", color: "#1A7A97",
    title: "Raising Children in the AI Era",
    desc: "Understanding how AI is changing learning, creativity, careers, and childhood itself. How parents can prepare children without panic.",
    topics: ["AI and future jobs", "Creativity versus automation", "What schools are missing", "Preparing adaptable children"],
  },
  {
    n: "02", color: "#E8693A",
    title: "Screens, Attention and Healthy Technology Habits",
    desc: "Helping families move from passive screen consumption to intentional digital use.",
    topics: ["Screen addiction and attention spans", "Dopamine-driven apps", "Healthy tech routines", "Intentional device usage"],
  },
  {
    n: "03", color: "#E8523A",
    title: "Helping Children Create, Not Just Consume",
    desc: "Why creation matters more than endless scrolling, and how parents can encourage digital creativity at home.",
    topics: ["Storytelling and digital creativity", "AI tools children can use safely", "Confidence through creation", "Creative intelligence at home"],
  },
  {
    n: "04", color: "#7F5AF0",
    title: "Digital Identity and Online Safety",
    desc: "Helping parents understand the risks and realities of growing up online.",
    topics: ["Digital footprints and online reputation", "AI-generated fake content", "Internet safety and privacy", "Healthy boundaries online"],
  },
  {
    n: "05", color: "#2CB67D",
    title: "Future Skills That Actually Matter",
    desc: "Exploring the human skills children need in an AI-powered future. The abilities that no algorithm will replace.",
    topics: ["Communication and adaptability", "Curiosity and problem-solving", "Emotional intelligence", "Leadership and confidence"],
  },
];

const formats = [
  { title: "Live Parent Talks", desc: "Expert-led conversations on each topic" },
  { title: "Discussion Circles", desc: "Intimate, guided group conversations" },
  { title: "Creative Workshops", desc: "Hands-on sessions parents can experience" },
  { title: "Expert Guest Sessions", desc: "Practitioners from education, tech, and parenting" },
  { title: "Parent-Child Experiences", desc: "Sessions parents and children attend together" },
  { title: "Guided Conversations", desc: "Structured reflection and sharing spaces" },
];

export default function ParentSeries() {
  return (
    <>
      {/* PAGE HERO */}
      <div className="relative h-[52vh] min-h-[340px] flex flex-col justify-end overflow-hidden">
        <video autoPlay muted loop playsInline preload="auto" className="absolute inset-0 w-full h-full object-cover" poster={`${import.meta.env.BASE_URL}parents-poster.jpg`}>
          <source src={`${import.meta.env.BASE_URL}parents-mom-child.mp4`} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D0C18] to-[#1A2030]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/70 via-transparent to-transparent" />
        <div className="relative z-10 px-6 md:px-14 pb-12 pt-28">
          <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-white/35 mb-3 block">For Parents</span>
          <h1 className="font-serif text-[clamp(2.4rem,5vw,5rem)] font-black text-white tracking-tight leading-tight mb-3">Parent Intelligence<br />Series</h1>
          <p className="text-base text-white/60 max-w-lg font-light leading-relaxed">Not a fear-based talk. A thoughtful, future-focused experience for modern Nairobi families.</p>
        </div>
      </div>

      {/* HERO STRIP */}
      <div className="bg-[#0B4D5F] px-6 md:px-14 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <h2 className="font-serif text-[clamp(1.8rem,3.5vw,3rem)] font-black text-white leading-tight mb-4">Not a fear-based talk.<br />A thoughtful, future-focused experience.</h2>
          <p className="text-base text-white/60 leading-relaxed font-light">Instead of fear-based conversations around screens and technology, the series helps parents understand how to guide children intentionally in a fast-changing digital world. Designed for modern Nairobi families who want their children to become creative thinkers, confident communicators, and future-ready humans.</p>
        </Reveal>
        <Reveal delay={100}>
          <div className="bg-white/7 border border-white/12 rounded-2xl p-7">
            <h4 className="font-serif text-base font-black text-white mb-4">The AkiliNest Parent Series is not:</h4>
            <ul className="space-y-2 mb-6">
              {["A fear-based tech talk", "An anti-screen movement", "A traditional parenting seminar"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/60 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8693A] mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <h4 className="font-serif text-base font-black text-white mb-3">It is a thoughtful experience that helps parents raise:</h4>
            <ul className="space-y-2">
              {["Human, creative, intelligent children", "Who can thrive in a world full of intelligent systems"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/60 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8693A] mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      {/* SESSIONS */}
      <section className="bg-[#F9F5EE] px-6 md:px-14 py-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-[#1A7A97] mb-4 block">Five Sessions</span>
            <h2 className="font-serif text-[clamp(2.2rem,4vw,4rem)] font-black text-[#0D0C18] tracking-tight leading-tight mb-12">What the Series Covers</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {sessions.map((s, i) => (
              <Reveal key={s.n} delay={i * 70} className={i === 4 ? "md:col-span-2" : ""}>
                <div className={`bg-white border-[1.5px] border-black/8 rounded-3xl p-7 relative overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all ${i === 4 ? "md:flex md:gap-10" : ""}`}>
                  <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl" style={{ background: s.color }} />
                  <div className={i === 4 ? "md:w-1/2" : ""}>
                    <div className="font-serif text-5xl font-black leading-none mb-4" style={{ color: `${s.color}30` }}>{s.n}</div>
                    <h3 className="font-serif text-xl font-black text-[#0D0C18] mb-3 leading-tight">{s.title}</h3>
                    <p className="text-sm text-[#5C5A70] leading-relaxed font-light mb-4">{s.desc}</p>
                  </div>
                  <ul className={`space-y-2 ${i === 4 ? "md:w-1/2 md:mt-0 mt-4" : ""}`}>
                    {s.topics.map((t) => (
                      <li key={t} className="flex items-start gap-2.5 text-sm text-[#5C5A70] font-light">
                        <span className="w-1 h-1 rounded-full mt-2.5 shrink-0" style={{ background: s.color }} />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FORMAT */}
      <section className="bg-[#0D0C18] px-6 md:px-14 py-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-white/35 mb-4 block">Format</span>
            <h2 className="font-serif text-[clamp(2.2rem,4vw,4rem)] font-black text-white tracking-tight leading-tight mb-12">How the Series Runs</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {formats.map((f, i) => (
              <Reveal key={f.title} delay={i * 60}>
                <div className="bg-white/4 border border-white/8 rounded-2xl p-6 text-center">
                  <h4 className="font-serif text-base font-black text-white mb-2">{f.title}</h4>
                  <p className="text-sm text-white/45 font-light">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PIS CTA */}
      <div className="bg-[#FFF0E8] border-t border-[#C4561A]/15 px-6 md:px-14 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-serif text-2xl font-black text-[#0D0C18] mb-1">Interested in attending?</h3>
          <p className="text-sm text-[#5C5A70] font-light">Standalone one-day events, open to all parents. No child enrolment required.</p>
        </div>
        <Link href="/contact" data-testid="button-pis-register" className="inline-flex items-center gap-2 bg-[#0B4D5F] hover:bg-[#1A7A97] text-white font-bold text-sm px-8 py-4 rounded-full transition-all shrink-0">
          Register Interest
        </Link>
      </div>
    </>
  );
}
