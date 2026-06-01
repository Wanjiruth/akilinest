import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Reveal } from "@/components/Reveal";

const FULL_TEXT = "Creative Intelligence\nfor the AI Era";

function Typewriter() {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    setDisplayed("");
    setDone(false);
    const delay = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(FULL_TEXT.slice(0, i));
        if (i >= FULL_TEXT.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, 52);
      return () => clearInterval(interval);
    }, 600);
    return () => clearTimeout(delay);
  }, []);

  return (
    <h1 className="font-serif text-[clamp(2.5rem,5.5vw,5rem)] font-black leading-[0.95] tracking-tight text-white mb-8 max-w-4xl">
      {displayed.split("\n").map((line, i) => (
        <span key={i}>
          {i > 0 && <br />}
          {line}
        </span>
      ))}
      {!done && (
        <span className="inline-block w-[5px] h-[0.8em] bg-orange-400 ml-2 align-middle animate-pulse" />
      )}
    </h1>
  );
}

const stages = [
  { letter: "S", name: "Sprouts", age: "Ages 6 to 8", tagline: '"I can imagine and express myself creatively."', desc: "Foundational creativity without AI dependency. Storytelling, colours, and structured imagination.", grad: "from-[#0B4D5F] to-[#1AB5DC]", bg: "#1A7A97" },
  { letter: "E", name: "Explorers", age: "Ages 9 to 11", tagline: '"I can understand technology and think critically about it."', desc: "Building digital literacy, challenging AI answers, and presenting independent reasoning.", grad: "from-[#6B3900] to-[#E8980A]", bg: "#E8693A" },
  { letter: "B", name: "Builders", age: "Ages 12 to 14", tagline: '"I can build with technology."', desc: "Creating digital products from zero. Figma, video, no-code, driven by clear structuring.", grad: "from-[#6B1A0A] to-[#E8523A]", bg: "#E8523A" },
  { letter: "I", name: "Innovators", age: "Ages 15 to 17", tagline: '"I can solve real-world problems with technology."', desc: "Strategy, automations, prompt engineering, and ethical AI in action.", grad: "from-[#1A0B6B] to-[#7F5AF0]", bg: "#7F5AF0" },
];

const steps = [
  { n: "01", label: "Think First", desc: "Independent reasoning before any tool is opened.", color: "#1A7A97", bg: "rgba(26,122,151,0.08)" },
  { n: "02", label: "Write Creatively", desc: "Children frame ideas in their own words first.", color: "#E8693A", bg: "rgba(232,105,58,0.08)" },
  { n: "03", label: "Use AI", desc: "AI critiques, expands, and challenges their thinking.", color: "#7F5AF0", bg: "rgba(127,90,240,0.08)" },
  { n: "04", label: "Present", desc: "Learners explain and defend their reasoning clearly.", color: "#E8523A", bg: "rgba(232,82,58,0.08)" },
];

const work = [
  { stage: "Sprouts · Age 7", stageBg: "#1A7A97", stageLabel: "ws-sprouts", title: '"Save Our Oceans" Storybook', desc: "Hand-drawn characters enhanced with AI illustration. The story, characters, and moral were entirely Amira's original thinking.", author: "Amira, Sprouts Cohort 1", tools: "Book Creator + Bing Image Creator", initial: "A", color: "#1A7A97", img: "work-sprouts.png" },
  { stage: "Explorers · Age 10", stageBg: "#E8693A", stageLabel: "ws-explorers", title: '"Is AI Creative?" Research Poster', desc: "Kioni formed her own position first, then used Perplexity to challenge her arguments. The final poster presents both sides.", author: "Kioni, Explorers Cohort 1", tools: "Perplexity + Google Slides", initial: "K", color: "#E8693A", img: "work-explorers.png" },
  { stage: "Builders · Age 13", stageBg: "#7F5AF0", stageLabel: "ws-builders", title: "School Marketplace: MVP Prototype", desc: "A working no-code app with brand identity, user research, and pitch deck, designed from a real problem at his school.", author: "Jabari, Builders Cohort 1", tools: "Lovable + Figma + Canva", initial: "J", color: "#7F5AF0", img: "work-builders.png" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative w-full min-h-screen flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline preload="auto" className="w-full h-full object-cover" poster={`${import.meta.env.BASE_URL}hero-bg.png`}>
            <source src={`${import.meta.env.BASE_URL}hero-main.mp4`} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B1220]/90 via-[#0B1220]/50 to-[#0B1220]/80" />
        </div>

        <div className="relative z-10 px-6 md:px-14 pb-20 pt-32 max-w-5xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="bg-[#E8693A] text-white text-[10px] font-black tracking-[2px] uppercase px-4 py-2 rounded-full">Creative Studio</span>
            <span className="w-px h-4 bg-white/20" />
            <span className="text-[11px] font-semibold tracking-[1.5px] uppercase text-white/50">Nairobi, Kenya · Ages 6 to 17</span>
          </div>

          <Typewriter />

          <p className="text-base text-white/65 max-w-lg leading-relaxed mb-6 font-light">
            In a world where AI gives instant answers, we train children to think with clarity, depth, and creativity before they ever ask for one.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-10">
            {["Think First", "Write Creatively", "Use AI", "Present"].map((s, i) => (
              <span key={s} className={`text-xs font-bold px-4 py-2 rounded-full backdrop-blur-sm border transition-all ${i === 0 ? "bg-[#E8693A] border-[#E8693A] text-white" : "bg-white/8 border-white/15 text-white"}`}>
                {s}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/programme" data-testid="button-hero-programmes" className="inline-flex items-center gap-2 bg-white text-[#0D0C18] font-bold text-sm px-7 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-xl transition-all">
              Explore Programmes
            </Link>
            <Link href="/pis" data-testid="button-hero-parents" className="inline-flex items-center gap-2 bg-white/8 border border-white/20 text-white font-semibold text-sm px-7 py-3.5 rounded-full backdrop-blur-sm hover:bg-white/15 transition-all">
              Parent Sessions
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/30 hidden md:flex">
          <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
          <span className="text-[10px] font-semibold tracking-[2.5px] uppercase">Scroll</span>
        </div>
      </section>

      {/* TICKER */}
      <div className="bg-[#F9F5EE] py-4 overflow-hidden border-t border-[#0D0C18]/5">
        <div className="flex w-max animate-[ticker_28s_linear_infinite]">
          {[...Array(2)].map((_, rep) => (
            <div key={rep} className="flex">
              {["Think First", "·", "Write Creatively", "·", "Use AI", "·", "Present", "·", "Creative Intelligence", "·", "AI-Empowered Thinkers", "·", "Nairobi", "·"].map((t, i) => (
                <span key={i} className={`text-[11px] font-semibold tracking-[2.5px] uppercase whitespace-nowrap px-6 ${t === "·" ? "text-[#0D0C18]/10 px-2" : i % 4 === 0 ? "text-[#E8693A]" : "text-[#0D0C18]/30"}`}>{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* THINKING CYCLE */}
      <section className="bg-[#F9F5EE] px-6 md:px-14 py-24">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-[#1A7A97] mb-4 block">How It Works</span>
            <h2 className="font-serif text-[clamp(2.2rem,4vw,4rem)] font-black text-[#0D0C18] tracking-tight leading-tight mb-4">The AkiliNest<br />thinking cycle</h2>
            <p className="text-base text-[#5C5A70] leading-relaxed max-w-xl font-light mb-12">We build cognitive resilience for the AI era: children think first, use AI as a challenger, then articulate their ideas clearly.</p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className="group bg-white border border-black/8 rounded-3xl p-7 relative overflow-hidden hover:-translate-y-2 hover:shadow-xl hover:border-black/15 transition-all duration-500">
                  <div className="absolute top-0 left-0 right-0 h-1 transition-all duration-500 opacity-80 group-hover:opacity-100 group-hover:h-2" style={{ background: s.color }} />
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center font-serif font-black text-lg mb-5 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500" style={{ background: s.bg, color: s.color }}>
                    {s.n}
                  </div>
                  <div className="text-[10px] font-black tracking-[1.8px] uppercase mb-2 group-hover:opacity-80 transition-opacity" style={{ color: s.color }}>Step {s.n}</div>
                  <h3 className="font-serif text-xl font-black text-[#0D0C18] mb-2 leading-tight group-hover:text-black transition-colors">{s.label}</h3>
                  <p className="text-sm text-[#5C5A70] leading-relaxed font-light">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY SPLIT */}
      <section className="bg-white px-6 md:px-14 py-28 border-t border-black/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-[#E8693A] mb-5 block">The Studio Ethos</span>
            <h2 className="font-serif text-[clamp(2.5rem,4.5vw,4.5rem)] font-black text-[#0D0C18] tracking-tight leading-[1.05] mb-8">
              We do not raise perfectly obedient AI users.<br/>
              <span className="text-[#1A7A97]">We raise wild, original thinkers.</span>
            </h2>
            <p className="text-lg text-[#5C5A70] leading-relaxed max-w-xl font-light mb-8">
              In a world where algorithms provide instant, identical answers, the most valuable human skill is the ability to form a unique perspective. We build an environment that demands mental effort, rewards curiosity, and treats AI as a sparring partner, not a crutch.
            </p>
            <Link href="/about" data-testid="button-home-philosophy" className="inline-flex items-center gap-2 text-sm font-bold text-[#0D0C18] hover:text-[#E8693A] transition-colors group">
              Read our full philosophy
              <span className="w-6 h-px bg-current transition-all group-hover:w-10"></span>
            </Link>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative aspect-square md:aspect-[4/3] lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-[#F9F5EE] group">
              {/* Abstract fluid environment for the studio feel */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E8693A]/20 via-[#1A7A97]/10 to-[#7F5AF0]/20 mix-blend-multiply opacity-70 group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#E8693A]/30 rounded-full blur-3xl mix-blend-multiply animate-pulse" />
              <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#1A7A97]/20 rounded-full blur-3xl mix-blend-multiply animate-pulse" style={{ animationDelay: '2s' }} />
              
              {/* Quote overlay card */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                <div className="bg-white/80 backdrop-blur-md rounded-3xl p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="w-10 h-10 rounded-full bg-[#1A7A97]/10 flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-[#1A7A97]" fill="currentColor" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
                  </div>
                  <p className="text-sm md:text-base text-[#0D0C18] font-medium leading-relaxed mb-5 italic">
                    "I used to worry my child would just use AI to cheat. Now I hear her challenging its answers. She treats it like a brainstorming partner, but she always has the final word."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#1A7A97] text-white flex items-center justify-center text-xs font-bold font-serif">M</div>
                    <span className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#5C5A70]">
                      Mother of an Explorer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOUR STAGES */}
      <section className="bg-[#0D0C18] px-6 md:px-14 py-24">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-white/35 mb-4 block">Our Programmes</span>
            <h2 className="font-serif text-[clamp(2.2rem,4vw,4rem)] font-black text-white tracking-tight leading-tight mb-12">Four stages of<br />creative intelligence</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stages.map((s, i) => (
              <Reveal key={s.name} delay={i * 80}>
                <Link href="/programme" data-testid={`card-stage-${s.name.toLowerCase()}`}>
                  <div className={`relative rounded-3xl overflow-hidden min-h-[420px] flex flex-col cursor-pointer hover:-translate-y-3 hover:shadow-2xl hover:shadow-black/50 transition-all duration-500 bg-gradient-to-b group ${s.grad}`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-500" />
                    <span className="absolute top-5 right-5 font-serif text-[5rem] font-black text-white/5 leading-none select-none group-hover:scale-110 group-hover:rotate-3 group-hover:text-white/15 transition-all duration-500 origin-top-right">0{i + 1}</span>
                    <div className="relative z-10 p-6 mt-auto transform group-hover:translate-y-[-4px] transition-transform duration-500">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center font-serif font-black text-white text-lg mb-3 group-hover:scale-110 group-hover:bg-white/25 transition-all duration-500 shadow-sm" style={{ background: "rgba(255,255,255,0.15)" }}>{s.letter}</div>
                      <span className="text-[10px] font-bold tracking-[1.8px] uppercase text-white/45 mb-1 block">{s.age}</span>
                      <h3 className="font-serif text-3xl font-black text-white mb-2 group-hover:text-[#E8693A] transition-colors duration-300">{s.name}</h3>
                      <p className="text-sm font-semibold text-white/90 mb-2 leading-tight">{s.tagline}</p>
                      <p className="text-xs text-white/50 leading-relaxed font-light">{s.desc}</p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>




      {/* CTA */}
      <section className="bg-[#0B4D5F] px-6 md:px-14 py-28 text-center relative overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/3 rounded-full" />
        <div className="absolute -bottom-20 right-[-60px] w-[350px] h-[350px] bg-[#C4561A]/12 rounded-full" />
        <Reveal>
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-white/35 mb-4 block">Ready to Begin</span>
            <h2 className="font-serif text-[clamp(2.2rem,4vw,4rem)] font-black text-white tracking-tight leading-tight mb-4">Thinking is the currency<br />of the future</h2>
            <p className="text-base text-white/60 leading-relaxed font-light mb-10">We do not raise AI-dependent learners. We raise AI-empowered thinkers.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/programme" data-testid="button-cta-join" className="inline-flex items-center gap-2 bg-white text-[#0D0C18] font-bold text-sm px-8 py-4 rounded-full hover:-translate-y-0.5 hover:shadow-xl transition-all">
                Join a Programme
              </Link>
              <Link href="/contact" data-testid="button-cta-partner" className="inline-flex items-center gap-2 bg-white/8 border border-white/20 text-white font-semibold text-sm px-8 py-4 rounded-full backdrop-blur-sm hover:bg-white/15 transition-all">
                Partner With Us
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
