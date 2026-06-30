import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";
import EventCTA from "@/components/EventCTA";
import { asset, IMAGES } from "@/lib/images";

const stages = [
  {
    id: "sprouts",
    letter: "S",
    color: "#1A7A97",
    agePill: "Ages 8 to 10",
    pillBg: "rgba(26,122,150,0.22)",
    pillText: "#7BCFE8",
    name: "Sprouts",
    mantra: '"I can imagine and express myself creatively."',
    about: "Playful creativity, storytelling, and imagination. AI enters only after children express their own ideas.",
    learn: ["Storytelling and character creation", "Colours, shapes, and emotions", "Imagination and world-building", "Creative confidence and articulation"],
    tools: ["Bing Image Creator", "Canva AI", "ElevenLabs", "FlipaClip", "Book Creator", "AI Assistant"],
    avoid: ["Prompt-only activities", "Copy-paste workflows", "Fixed-answer learning", "Passive AI consumption"],
    image: IMAGES.kidsCrafts,
    imageAlt: "Children doing hands-on creative crafts at a learning workshop",
  },
  {
    id: "explorers",
    letter: "E",
    color: "#E8693A",
    agePill: "Ages 11 to 12",
    pillBg: "rgba(232,105,58,0.2)",
    pillText: "#F9B090",
    name: "Explorers",
    mantra: '"I can understand technology and think critically about it."',
    about: "Critical thinking, digital literacy, and AI understanding. Children question how AI works and form independent perspectives.",
    learn: ["How AI works and learns", "Prompting with intention", "Digital safety and media literacy", "Articulating ideas in their own words"],
    tools: ["AI Assistant", "Perplexity", "CapCut", "Google Slides", "All Sprouts tools"],
    avoid: ["AI replacing reasoning", "Template-based thinking", "Passive AI output consumption"],
    image: IMAGES.parentLearning2,
    imageAlt: "A mother and child learning together with laptop and tablet at home",
  },
  {
    id: "builders",
    letter: "B",
    color: "#E8523A",
    agePill: "Ages 13 to 14",
    pillBg: "rgba(232,82,58,0.2)",
    pillText: "#F9A090",
    name: "Builders",
    mantra: '"I can build with technology."',
    about: "Real digital products from structured thinking. Every project starts with a creative brief before any tool opens.",
    learn: ["Branding and design thinking", "AI-assisted content with intent", "User research and feedback", "Portfolio development"],
    tools: ["Lovable", "Figma", "NotebookLM", "Canva Pro", "No-code tools", "AI Assistant"],
    avoid: ["Skipping the thinking phase", "AI-generated projects without reasoning", "Copy-paste design"],
    image: IMAGES.workBuilders,
    imageAlt: "Student digital product showcase from AkiliNest Builders programme",
  },
  {
    id: "innovators",
    letter: "I",
    color: "#7F5AF0",
    agePill: "Ages 15 to 17",
    pillBg: "rgba(127,90,240,0.2)",
    pillText: "#A892FF",
    name: "Innovators",
    mantra: '"I can solve real-world problems with technology and AI."',
    about: "Real problems, original research, and solutions children can defend and communicate with confidence.",
    learn: ["Advanced AI literacy", "Product strategy and innovation", "Research methodology", "Entrepreneurship and ethical AI"],
    tools: ["Zapier", "Notion", "Behance", "LinkedIn", "Spotify for Creators", "Shopify"],
    avoid: ["AI strategies without understanding", "Shortcutting reasoning with tools", "Fixed-answer innovation models"],
    image: IMAGES.parentLearning3,
    imageAlt: "Parent and teenager working on creative projects at home in Nairobi",
  },
];

const domains = [
  { n: "01", label: "Create", color: "#E8523A", title: "Visual and Media Expression", desc: "Stories, posters, videos. A creative voice built from original thinking." },
  { n: "02", label: "Build", color: "#E8693A", title: "Digital Products", desc: "Apps and tools. Moving from consumer to creator through structured reasoning." },
  { n: "03", label: "Think", color: "#1A7A97", title: "Logic and Reasoning", desc: "Form a position and ask the right question before reaching for any tool." },
  { n: "04", label: "Understand AI", color: "#7F5AF0", title: "How AI Works", desc: "Where AI fails and why children must direct it, not follow it." },
  { n: "05", label: "Interact", color: "#2CB67D", title: "Communicate and Collaborate", desc: "Presenting and pitching. Skills no AI will fully replace." },
  { n: "06", label: "Connect", color: "#8B1A4A", title: "Digital Safety and Identity", desc: "Algorithms, attention economy, and navigating the digital world." },
];

function StageDetails({ stage }: { stage: (typeof stages)[0] }) {
  return (
    <>
      <p className="text-base text-white/60 leading-relaxed mb-6 max-w-xl">{stage.about}</p>

      <span className="text-[10px] font-bold tracking-[1.5px] uppercase mb-3 block" style={{ color: stage.color }}>
        What Children Learn
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
        {stage.learn.map((l) => (
          <div key={l} className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: stage.color }} />
            <span className="text-sm text-white/60 leading-snug">{l}</span>
          </div>
        ))}
      </div>

      <details className="mb-4 max-w-xl group">
        <summary className="text-[10px] font-bold tracking-[1.5px] uppercase cursor-pointer list-none flex items-center gap-2" style={{ color: stage.color }}>
          Tools used
          <span className="text-white/30 group-open:rotate-180 transition-transform">▼</span>
        </summary>
        <div className="flex flex-wrap gap-2 mt-3">
          {stage.tools.map((t) => (
            <span key={t} className="text-xs text-white/65 bg-white/7 border border-white/10 px-3 py-1.5 rounded-full">{t}</span>
          ))}
        </div>
      </details>

      <details className="max-w-xl group">
        <summary className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#E8523A] cursor-pointer list-none flex items-center gap-2">
          This programme avoids
          <span className="text-white/30 group-open:rotate-180 transition-transform">▼</span>
        </summary>
        <div className="flex flex-wrap gap-2 mt-3">
          {stage.avoid.map((a) => (
            <span key={a} className="text-xs text-white/55 bg-[#E8523A]/10 border border-[#E8523A]/15 px-3 py-1 rounded-full">{a}</span>
          ))}
        </div>
      </details>
    </>
  );
}

export default function Programme() {
  const [activeStage, setActiveStage] = useState("sprouts");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    stages.forEach((s) => {
      const el = document.getElementById(s.id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveStage(s.id); },
        { rootMargin: "-40% 0px -50% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <PageMeta
        title="Sprouts to Innovators | Age-Based Creative Programmes | AkiliNest Nairobi"
        description="Four age-appropriate programmes for children 8–17 across Kenya: Sprouts, Explorers, Builders, and Innovators. Thinking-first creative intelligence for the AI era."
        path="/programme"
        keywords={["creative programmes Nairobi", "children AI education Kenya", "extracurricular activities Nairobi", "Sprouts Explorers Builders Innovators"]}
      />

      <div className="relative h-[52vh] min-h-[340px] flex flex-col justify-end overflow-hidden">
        <video
          // Performance: avoid autoplay/loop on load; reduce Lighthouse impact.
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          poster={`${import.meta.env.BASE_URL}programs-poster.jpg`}
        >
          <source src={`${import.meta.env.BASE_URL}programs-painting.mp4`} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B4D5F] to-[#1A7A97]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/70 via-transparent to-transparent" />
        <div className="relative z-10 px-6 md:px-14 pb-12 pt-28">
          <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-white/35 mb-3 block">Our Programmes</span>
          <h1 className="font-serif text-[clamp(2.4rem,5vw,5rem)] font-bold text-white tracking-tight leading-tight mb-3">Four stages of<br />creative intelligence</h1>
          <p className="text-base text-white/60 max-w-lg leading-relaxed">Age-appropriate programmes that grow with your child from ages 8 to 17.</p>
        </div>
      </div>

      {/* STAGE OVERVIEW CARDS */}
      <section className="bg-[#F9F5EE] px-6 md:px-14 py-16 border-b border-black/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stages.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="bg-white border border-black/8 rounded-2xl p-5 hover:-translate-y-1 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center font-serif font-bold text-white text-lg mb-3" style={{ background: s.color }}>{s.letter}</div>
                <h3 className="font-serif text-lg font-bold text-[#0D0C18] mb-1">{s.name}</h3>
                <span className="text-[10px] font-bold tracking-[1px] uppercase text-[#1A7A97] block mb-2">{s.agePill}</span>
                <p className="text-xs text-[#4A4860] leading-relaxed italic">{s.mantra}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* STICKY JUMP NAV */}
      <div className="hidden lg:block sticky top-16 z-30 bg-[#0D0C18]/95 backdrop-blur-md border-b border-white/6">
        <div className="max-w-6xl mx-auto px-14 flex gap-1 py-3">
          {stages.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`text-xs font-semibold px-4 py-2 rounded-full transition-all ${activeStage === s.id ? "text-white" : "text-white/40 hover:text-white/70"}`}
              style={activeStage === s.id ? { background: `${s.color}33`, color: s.color === "#1A7A97" ? "#7BCFE8" : s.pillText } : {}}
            >
              {s.name}
            </a>
          ))}
        </div>
      </div>

      {/* STAGES */}
      <div className="bg-[#0D0C18]">
        {stages.map((s, idx) => (
          <div key={s.id} id={s.id} className="scroll-mt-28">
            <div className={`px-6 md:px-14 py-16 border-b border-white/6 ${idx % 2 === 1 ? "bg-white/2" : ""}`}>
              <div className={`max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${idx % 2 === 1 ? "lg:[direction:rtl]" : ""}`}>
                <Reveal className={idx % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                  <img
                    src={asset(s.image)}
                    alt={s.imageAlt}
                    width="1200"
                    height="900"
                    loading="lazy"
                    decoding="async"
                    className="rounded-2xl object-cover w-full aspect-[4/3] shadow-2xl"
                  />
                </Reveal>
                <Reveal delay={100} className={idx % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center font-serif font-bold text-white text-2xl mb-4" style={{ background: s.color }}>{s.letter}</div>
                  <h2 className="font-serif text-4xl font-bold text-white mb-2">{s.name}</h2>
                  <span className="text-xs font-bold px-3 py-1.5 rounded-full inline-block mb-3" style={{ background: s.pillBg, color: s.pillText }}>{s.agePill}</span>
                  <p className="text-base italic text-white/50 mb-6 leading-relaxed">{s.mantra}</p>
                  <StageDetails stage={s} />
                </Reveal>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#0B4D5F] px-6 py-20 text-center border-t border-black/5">
        <Reveal>
          <p className="font-serif text-[clamp(1.4rem,2.5vw,2rem)] text-white/90 font-normal italic max-w-3xl mx-auto leading-relaxed">
            &ldquo;Creativity is one of the most important human qualities, and one of the hardest things to replicate.&rdquo;
          </p>
          <span className="block mt-6 text-[10px] font-bold tracking-[1.5px] uppercase text-white/50">
            Demis Hassabis <span className="text-[#E8693A]">·</span> CEO, Google DeepMind
          </span>
        </Reveal>
      </div>

      <section className="bg-[#F9F5EE] px-6 md:px-14 py-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#1A7A97] mb-4 block">The 6 Functional Domains</span>
            <h2 className="font-serif text-[clamp(2.2rem,4vw,4rem)] font-bold text-[#0D0C18] tracking-tight leading-tight mb-3">What never changes,<br />even when tools do</h2>
            <p className="text-base text-[#4A4860] leading-relaxed mb-12 max-w-xl">Six capabilities built across all stages, foundations that outlast any tool.</p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {domains.map((d, i) => (
              <Reveal key={d.label} delay={i * 60}>
                <div className="bg-white border-[1.5px] border-black/8 rounded-2xl p-7 hover:-translate-y-1 transition-transform">
                  <span className="text-[10px] font-bold tracking-[1.5px] uppercase mb-2 block" style={{ color: d.color }}>{d.n} {d.label}</span>
                  <h3 className="font-serif text-lg font-bold text-[#0D0C18] mb-2">{d.title}</h3>
                  <p className="text-sm text-[#4A4860] leading-relaxed">{d.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <EventCTA />
    </>
  );
}
