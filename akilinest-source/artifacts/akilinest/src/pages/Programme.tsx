import { Reveal } from "@/components/Reveal";

const stages = [
  {
    letter: "S", color: "#1A7A97", agePill: "Ages 6 to 8", pillBg: "rgba(26,122,150,0.22)", pillText: "#7BCFE8",
    name: "Sprouts", mantra: '"I can imagine and express myself creatively."',
    about: "The Sprouts Programme introduces young children to creativity, imagination, storytelling, and emotional expression through playful, hands-on activities. AI enters only as a creative helper after children have first expressed their own ideas.",
    learn: ["Storytelling and character creation", "Colours, shapes, and emotions", "Imagination and world-building", "Step-by-step structured thinking", "Creative confidence and articulation", "Early AI as a creative helper, not a thinker"],
    tools: ["Bing Image Creator", "Canva AI", "ElevenLabs", "FlipaClip", "Book Creator", "AI Assistant"],
    avoid: ["Prompt-only activities", "Copy-paste workflows", "Fixed-answer learning", "Passive AI consumption"],
    outcome: '"I can imagine and express myself creatively."',
  },
  {
    letter: "E", color: "#E8693A", agePill: "Ages 9 to 11", pillBg: "rgba(232,105,58,0.2)", pillText: "#F9B090",
    name: "Explorers", mantra: '"I can understand technology and think critically about it."',
    about: "The Explorers Programme builds critical thinking, digital literacy, and AI understanding. Children learn to question how AI works, form independent perspectives, and use AI to challenge and deepen their own thinking — not bypass it.",
    learn: ["How AI works and learns", "Prompting with intention and reason", "Digital safety and online identity", "Media literacy and critical analysis", "Systems thinking and problem framing", "Responsible AI use", "Articulating ideas clearly in their own words", "Beginner digital project creation"],
    tools: ["AI Assistant", "Perplexity", "CapCut", "Google Slides", "All Sprouts tools"],
    avoid: ["AI replacing reasoning", "Template-based thinking", "Passive AI output consumption"],
    outcome: '"I can understand technology and think critically about it."',
  },
  {
    letter: "B", color: "#E8523A", agePill: "Ages 12 to 14", pillBg: "rgba(232,82,58,0.2)", pillText: "#F9A090",
    name: "Builders", mantra: '"I can build with technology."',
    about: "The Builders Programme teaches teenagers to create real digital products using AI, design tools, and no-code platforms. Every project begins with structured thinking, problem definition, and a clear creative brief — before any tool is opened.",
    learn: ["Branding and digital design thinking", "AI-assisted content creation with intent", "User research and feedback loops", "Workflow reasoning and automation logic", "Presentation and persuasive communication", "Marketing and launch strategy basics", "Portfolio development and creative articulation"],
    tools: ["Lovable", "Figma", "NotebookLM", "Canva Pro", "No-code tools", "AI Assistant"],
    avoid: ["Skipping the thinking phase", "AI-generated projects without reasoning", "Copy-paste design"],
    outcome: '"I can build with technology."',
  },
  {
    letter: "I", color: "#7F5AF0", agePill: "Ages 15 to 17", pillBg: "rgba(127,90,240,0.2)", pillText: "#A892FF",
    name: "Innovators", mantra: '"I can solve real-world problems with technology and AI."',
    about: "The Innovators Programme prepares students to solve real problems using AI, strategy, creativity, and independent thought. Students develop original positions, conduct real research, and create solutions they can defend and communicate with confidence.",
    learn: ["Advanced AI literacy and prompt engineering", "Product strategy and innovation reasoning", "Automation thinking and digital systems logic", "Branding, storytelling, and media production", "Research methodology and critical analysis", "Entrepreneurship and launch strategy", "Ethical AI and future-of-work thinking", "Professional portfolio and online presence"],
    tools: ["Zapier", "Notion", "Behance", "LinkedIn", "Spotify for Creators", "Shopify"],
    avoid: ["AI-generated strategies without understanding", "Shortcutting reasoning with tools", "Fixed-answer innovation models"],
    outcome: '"I can solve real-world problems with technology and AI."',
  },
];

const domains = [
  { n: "01", label: "Create", color: "#E8523A", title: "Visual and Media Expression", desc: "Stories, posters, videos, AI art. Children develop a creative voice built from original thinking." },
  { n: "02", label: "Build", color: "#E8693A", title: "Digital Products", desc: "Apps, tools, and creative outputs. Moving from consumer to creator starts with structured reasoning." },
  { n: "03", label: "Think", color: "#1A7A97", title: "Logic and Reasoning", desc: "Forming a position, structuring an argument, and asking the right question before reaching for any tool." },
  { n: "04", label: "Understand AI", color: "#7F5AF0", title: "How AI Works", desc: "How AI behaves, where it fails, and why children must direct it — not follow it." },
  { n: "05", label: "Interact", color: "#2CB67D", title: "Communicate and Collaborate", desc: "Presenting, pitching, articulating. Skills no AI will ever fully replace." },
  { n: "06", label: "Connect", color: "#8B1A4A", title: "Digital Safety and Identity", desc: "Algorithms, attention economy, and digital footprints. Understanding the system to navigate it." },
];

export default function Programme() {
  return (
    <>
      {/* PAGE HERO */}
      <div className="relative h-[52vh] min-h-[340px] flex flex-col justify-end overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" poster={`${import.meta.env.BASE_URL}programs-poster.jpg`}>
          <source src={`${import.meta.env.BASE_URL}programs-painting.mp4`} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B4D5F] to-[#1A7A97]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/70 via-transparent to-transparent" />
        <div className="relative z-10 px-6 md:px-14 pb-12 pt-28">
          <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-white/35 mb-3 block">Our Programmes</span>
          <h1 className="font-serif text-[clamp(2.4rem,5vw,5rem)] font-black text-white tracking-tight leading-tight mb-3">Four stages of<br />creative intelligence</h1>
          <p className="text-base text-white/60 max-w-lg font-light leading-relaxed">Age-appropriate programmes that grow with your child from ages 6 to 17.</p>
        </div>
      </div>

      {/* STAGES */}
      <div className="bg-[#0D0C18]">
        {stages.map((s, idx) => (
          <div key={s.name} className={`grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-16 px-6 md:px-14 py-16 border-b border-white/6 ${idx % 2 === 1 ? "bg-white/2" : ""}`}>
            <Reveal>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center font-serif font-black text-white text-2xl mb-4" style={{ background: s.color }}>{s.letter}</div>
              <h2 className="font-serif text-4xl font-black text-white mb-2">{s.name}</h2>
              <span className="text-xs font-bold px-3 py-1.5 rounded-full inline-block mb-4" style={{ background: s.pillBg, color: s.pillText }}>{s.agePill}</span>
              <p className="text-sm italic text-white/35 font-light leading-relaxed">{s.mantra}</p>
            </Reveal>
            <Reveal delay={100}>
              <span className="text-[10px] font-bold tracking-[2px] uppercase mb-2 block" style={{ color: s.color }}>About the Programme</span>
              <p className="text-sm text-white/55 leading-relaxed font-light mb-6 max-w-xl">{s.about}</p>

              <span className="text-[10px] font-bold tracking-[2px] uppercase mb-3 block" style={{ color: s.color }}>What Children Learn</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mb-6">
                {s.learn.map((l) => (
                  <div key={l} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full mt-[7px] shrink-0" style={{ background: s.color }} />
                    <span className="text-sm text-white/55 font-light leading-snug">{l}</span>
                  </div>
                ))}
              </div>

              <span className="text-[10px] font-bold tracking-[2px] uppercase mb-3 block" style={{ color: s.color }}>Tools</span>
              <div className="flex flex-wrap gap-2 mb-5">
                {s.tools.map((t) => (
                  <span key={t} className="text-xs text-white/65 bg-white/7 border border-white/10 px-3 py-1.5 rounded-full">{t}</span>
                ))}
              </div>

              <div className="bg-[#E8523A]/8 border border-[#E8523A]/18 rounded-2xl p-5 mb-4 max-w-md">
                <span className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#E8523A] block mb-3">This programme avoids</span>
                <div className="flex flex-wrap gap-2">
                  {s.avoid.map((a) => (
                    <span key={a} className="text-xs text-white/55 bg-[#E8523A]/10 border border-[#E8523A]/15 px-3 py-1 rounded-full font-light">{a}</span>
                  ))}
                </div>
              </div>

              <div className="bg-white/4 border border-white/8 rounded-2xl p-5 max-w-md">
                <span className="text-[10px] font-bold tracking-[1.5px] uppercase text-white/30 block mb-2">Main Outcome</span>
                <p className="text-sm italic text-white/80">{s.outcome}</p>
              </div>
            </Reveal>
          </div>
        ))}
      </div>

      {/* 6 DOMAINS */}
      <section className="bg-[#F9F5EE] px-6 md:px-14 py-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-[#1A7A97] mb-4 block">The 6 Functional Domains</span>
            <h2 className="font-serif text-[clamp(2.2rem,4vw,4rem)] font-black text-[#0D0C18] tracking-tight leading-tight mb-3">What never changes,<br />even when tools do</h2>
            <p className="text-base text-[#5C5A70] font-light leading-relaxed mb-12 max-w-xl">Six capabilities we build across all stages — the foundations that outlast any tool or technology.</p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {domains.map((d, i) => (
              <Reveal key={d.label} delay={i * 60}>
                <div className="bg-white border-[1.5px] border-black/8 rounded-2xl p-7 hover:-translate-y-1 transition-transform">
                  <span className="text-[10px] font-black tracking-[2px] uppercase mb-2 block" style={{ color: d.color }}>{d.n} {d.label}</span>
                  <h3 className="font-serif text-lg font-black text-[#0D0C18] mb-2">{d.title}</h3>
                  <p className="text-sm text-[#5C5A70] leading-relaxed font-light">{d.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
