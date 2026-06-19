import { Link } from "wouter";
import { Reveal } from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";
import EventCTA from "@/components/EventCTA";
import HeroSessionCard from "@/components/HeroSessionCard";
import VideoEmbed from "@/components/VideoEmbed";
import { EVENT_REGISTRATION_URL, SIGNUP_LABEL, featuredEvent } from "@/content/events";
import { asset, IMAGES } from "@/lib/images";
import { canonicalUrl } from "@/lib/seo";

const trustPills = ["Think First", "Create Boldly", "Use AI Wisely", "Ages 6-17"];

const stats = [
  { value: "4", label: "Programme stages at AkiliNest" },
  { value: "6-17", label: "Ages we serve in Nairobi" },
  { value: "2 hrs", label: "Daily holiday camp sessions" },
  { value: "KSh 2K", label: "June 27 taster at AkiliNest" },
];

const stages = [
  { letter: "S", name: "Sprouts", age: "Ages 6 to 8", tagline: '"I can imagine and express myself creatively."', desc: "Foundational creativity without AI dependency.", grad: "from-[#0B4D5F] to-[#1AB5DC]" },
  { letter: "E", name: "Explorers", age: "Ages 9 to 11", tagline: '"I can understand technology and think critically about it."', desc: "Digital literacy and independent reasoning.", grad: "from-[#6B3900] to-[#E8980A]" },
  { letter: "B", name: "Builders", age: "Ages 12 to 14", tagline: '"I can build with technology."', desc: "Real digital products from structured thinking.", grad: "from-[#6B1A0A] to-[#E8523A]" },
  { letter: "I", name: "Innovators", age: "Ages 15 to 17", tagline: '"I can solve real-world problems with technology."', desc: "Strategy, ethics, and AI in action.", grad: "from-[#1A0B6B] to-[#7F5AF0]" },
];

const steps = [
  { n: "01", label: "Think First", desc: "Independent reasoning before any tool is opened.", color: "#1A7A97" },
  { n: "02", label: "Write Creatively", desc: "Children frame ideas in their own words first.", color: "#1A7A97" },
  { n: "03", label: "Use AI", desc: "AI critiques, expands, and challenges their thinking.", color: "#1A7A97" },
  { n: "04", label: "Present", desc: "Learners explain and defend their reasoning clearly.", color: "#1A7A97" },
];

const work = [
  { stage: "Sprouts · Age 7", title: '"Save Our Oceans" Storybook', desc: "Amira's original story enhanced with AI illustration at AkiliNest.", author: "Amira, Sprouts Cohort 1", tools: "Book Creator + Bing Image Creator", color: "#1A7A97", img: IMAGES.workSprouts },
  { stage: "Explorers · Age 10", title: '"Is AI Creative?" Research Poster', desc: "Kioni formed her own position, then challenged it with Perplexity.", author: "Kioni, Explorers Cohort 1", tools: "Perplexity + Google Slides", color: "#E8693A", img: IMAGES.workExplorers },
  { stage: "Builders · Age 13", title: "School Marketplace: MVP Prototype", desc: "A working no-code app built from a real school problem.", author: "Jabari, Builders Cohort 1", tools: "Lovable + Figma + Canva", color: "#7F5AF0", img: IMAGES.workBuilders },
];

export default function Home() {
  return (
    <>
      <PageMeta
        title="Creative AI Programmes for Children 6-17 in Nairobi | AkiliNest"
        description="AkiliNest trains children aged 6 to 17 in Nairobi to think first, create boldly, and use AI wisely. Four programmes. Holiday camps June-August 2026."
        path="/"
        keywords={["AkiliNest", "creative classes children Nairobi", "AI education kids Kenya"]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "AkiliNest",
          url: canonicalUrl("/"),
          description: "A thinking-first creative studio for children aged 6 to 17 in Nairobi, Kenya.",
          address: { "@type": "PostalAddress", addressLocality: "Nairobi", addressCountry: "KE" },
          telephone: "+254702820845",
          email: "akilinest@gmail.com",
        }}
      />

      {/* HERO: McTaba-style badges + headline + session details card */}
      <section className="relative w-full min-h-[min(100vh,920px)] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            // Performance: avoid autoplay/loop on load; keeps Lighthouse speed targets healthier.
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
            poster={`${import.meta.env.BASE_URL}hero-bg.png`}
          >
            <source src={`${import.meta.env.BASE_URL}hero-main.mp4`} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#0D0C18]/80 lg:bg-gradient-to-r lg:from-[#0D0C18]/94 lg:via-[#0D0C18]/82 lg:to-[#0D0C18]/55" />
        </div>

        <div className="relative z-10 w-full px-4 md:px-8 lg:px-14 pt-24 md:pt-28 pb-14 md:pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8">
              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white text-[11px] font-semibold px-4 py-2 rounded-full font-sans">
                <span className="w-2 h-2 rounded-full bg-[#E8693A] animate-pulse" />
                Limited spots · {featuredEvent.dates}
              </span>
              <Link
                href="/events"
                className="inline-flex items-center gap-2 bg-white/6 border border-white/12 text-white/80 hover:text-white text-[11px] font-semibold px-4 py-2 rounded-full transition-colors font-sans"
              >
                <span className="bg-[#E8693A] text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase">New</span>
                Holiday camps July-August
                <span aria-hidden>→</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
              <div className="text-center lg:text-left">
                <h1 className="font-serif text-[clamp(2.25rem,5.5vw,4rem)] font-bold leading-[1.02] tracking-tight text-white mb-5 max-w-2xl mx-auto lg:mx-0">
                  Creative intelligence for{" "}
                  <span className="text-[#E8693A]">Nairobi children.</span>
                </h1>

                <p className="text-base md:text-lg text-white/70 max-w-lg mx-auto lg:mx-0 leading-relaxed mb-8 font-sans">
                  AkiliNest trains ages 6-17 to think first, create boldly, and use AI wisely. Four programmes, holiday camps, and parent guides at heARTspace.
                </p>

                <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 mb-4">
                  <a
                    href={EVENT_REGISTRATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full sm:w-auto min-w-[240px] bg-[#E8693A] text-white font-bold text-base px-10 py-4 rounded-full hover:bg-[#C4561A] hover:-translate-y-0.5 hover:shadow-xl transition-all font-sans"
                  >
                    {SIGNUP_LABEL}
                  </a>
                  <Link
                    href="/programme"
                    className="inline-flex items-center justify-center w-full sm:w-auto text-sm font-semibold text-white/75 hover:text-white px-6 py-4 rounded-full border border-white/15 hover:border-white/30 transition-all font-sans"
                  >
                    Explore programmes
                  </Link>
                </div>

                <p className="text-sm text-white/45 mb-6 font-sans">
                  Takes 2 minutes · {featuredEvent.price} · {featuredEvent.time}
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  {trustPills.map((pill) => (
                    <span
                      key={pill}
                      className="text-[10px] font-semibold tracking-wide uppercase text-white/50 bg-white/6 border border-white/10 px-3 py-1.5 rounded-full font-sans"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>

              <HeroSessionCard />
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-[#0D0C18] border-y border-white/6 px-6 md:px-14 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 50}>
              <div className="text-center">
                <span className="font-serif text-4xl font-bold text-[#E8693A] block mb-1">{s.value}</span>
                <span className="text-sm text-white/50 font-sans">{s.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* VIDEO SHOWCASE */}
      <section className="bg-[#F9F5EE] px-6 md:px-14 py-24">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#1A7A97] mb-4 block font-sans">AkiliNest in Action</span>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-bold text-[#0D0C18] tracking-tight leading-tight mb-4">See how AkiliNest works</h2>
            <p className="text-base text-[#4A4860] max-w-xl mb-12 font-sans">Creative programmes for children. Thoughtful sessions for parents. All at heARTspace, Nairobi.</p>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Reveal>
              <VideoEmbed
                src="programs-painting.mp4"
                title="AkiliNest children in creative programme session"
                caption="AkiliNest programmes: hands-on creative intelligence for children"
              />
            </Reveal>
            <Reveal delay={80}>
              <VideoEmbed
                src="parents-mom-child.mp4"
                title="AkiliNest parent and child learning together"
                caption="AkiliNest Parent Series: raising thinkers in the AI era"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* THINKING CYCLE */}
      <section className="bg-white px-6 md:px-14 py-24 border-t border-black/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#1A7A97] mb-4 block font-sans">The AkiliNest Method</span>
            <h2 className="font-serif text-[clamp(2.2rem,4vw,4rem)] font-bold text-[#0D0C18] tracking-tight leading-tight mb-4">Four steps every AkiliNest session follows</h2>
            <p className="text-base text-[#4A4860] max-w-xl mb-12 font-sans">Cognitive resilience training for the AI era. Every AkiliNest cohort uses the same thinking cycle.</p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className="bg-[#F9F5EE] border border-black/8 rounded-3xl p-7 hover:-translate-y-1 hover:shadow-lg transition-all">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center font-serif font-bold text-lg mb-5" style={{ background: "rgba(26,122,151,0.1)", color: s.color }}>{s.n}</div>
                  <h3 className="font-serif text-xl font-bold text-[#0D0C18] mb-2">{s.label}</h3>
                  <p className="text-sm text-[#4A4860] leading-relaxed font-sans">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-[#F9F5EE] px-6 md:px-14 py-28">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#E8693A] mb-5 block font-sans">Why AkiliNest</span>
            <h2 className="font-serif text-[clamp(2.2rem,4vw,3.8rem)] font-bold text-[#0D0C18] tracking-tight leading-[1.1] mb-8">
              AkiliNest does not raise obedient AI users.<br />
              <span className="text-[#1A7A97]">We raise original thinkers.</span>
            </h2>
            <p className="text-lg text-[#4A4860] leading-relaxed max-w-xl mb-8 font-sans">
              At AkiliNest, mental effort matters. Children think first, use AI as a sparring partner, and present ideas they can defend in their own words.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-sm font-bold text-[#0D0C18] hover:text-[#E8693A] transition-colors font-sans group">
              Read the AkiliNest philosophy
              <span className="w-6 h-px bg-current transition-all group-hover:w-10" />
            </Link>
          </Reveal>
          <Reveal delay={150}>
            <img
              src={asset(IMAGES.parentLearning1)}
              alt="Parent and child learning with technology at home, supported by AkiliNest"
              width="1000"
              height="1250"
              loading="lazy"
              decoding="async"
              className="rounded-[2.5rem] object-cover w-full aspect-[4/5] shadow-xl"
            />
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#0D0C18] px-6 md:px-14 py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-white/35 mb-4 block font-sans">What Parents Say</span>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-bold text-white tracking-tight leading-tight mb-12">Trusted by Nairobi families</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Grace M.", child: "Sprouts (Age 7)", text: "My daughter came home and asked me to turn off my phone so she could tell me about her storybook. She has never been this excited about a Saturday activity." },
              { name: "Peter K.", child: "Explorers (Age 10)", text: "I was worried about AI and screens. AkiliNest showed me technology can stretch thinking, not replace it. My son now questions everything, which is exactly what I wanted." },
              { name: "Amina W.", child: "Builders (Age 13)", text: "Jabari built a marketplace app for his school project. He presented it to his class. The confidence alone was worth every session." },
            ].map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-7 flex flex-col">
                  <svg className="w-8 h-8 text-[#E8693A] mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z"/></svg>
                  <p className="text-sm text-white/70 leading-relaxed mb-5 flex-1 font-sans">{t.text}</p>
                  <div className="border-t border-white/10 pt-4">
                    <span className="text-sm font-bold text-white block font-sans">{t.name}</span>
                    <span className="text-xs text-white/40 font-sans">{t.child}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STUDENT WORK */}
      <section className="bg-white px-6 md:px-14 py-24 border-t border-black/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#1A7A97] mb-4 block font-sans">AkiliNest Outputs</span>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-bold text-[#0D0C18] tracking-tight leading-tight mb-12">Real work from AkiliNest children</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {work.map((w, i) => (
              <Reveal key={w.title} delay={i * 80}>
                <div className="bg-[#F9F5EE] border border-black/8 rounded-3xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all">
                  <img
                    src={asset(w.img)}
                    alt={w.title}
                    width="1200"
                    height="900"
                    loading="lazy"
                    decoding="async"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="p-6">
                    <span className="text-[10px] font-bold tracking-[1.5px] uppercase mb-2 block font-sans" style={{ color: w.color }}>{w.stage}</span>
                    <h3 className="font-serif text-lg font-bold text-[#0D0C18] mb-2">{w.title}</h3>
                    <p className="text-sm text-[#4A4860] leading-relaxed mb-3 font-sans">{w.desc}</p>
                    <p className="text-xs text-[#5C5A70] font-sans">{w.author} · {w.tools}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMMES */}
      <section className="bg-[#0D0C18] px-6 md:px-14 py-24">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-white/35 mb-4 block font-sans">AkiliNest Programmes</span>
            <h2 className="font-serif text-[clamp(2.2rem,4vw,4rem)] font-bold text-white tracking-tight leading-tight mb-12">Four stages of creative intelligence</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stages.map((s, i) => (
              <Reveal key={s.name} delay={i * 80}>
                <Link href="/programme">
                  <div className={`relative rounded-3xl overflow-hidden min-h-[380px] flex flex-col cursor-pointer hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 bg-gradient-to-b group ${s.grad}`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="relative z-10 p-6 mt-auto">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center font-serif font-bold text-white text-lg mb-3" style={{ background: "rgba(255,255,255,0.15)" }}>{s.letter}</div>
                      <span className="text-[10px] font-bold tracking-[1.5px] uppercase text-white/45 mb-1 block font-sans">{s.age}</span>
                      <h3 className="font-serif text-3xl font-bold text-white mb-2 group-hover:text-[#E8693A] transition-colors">{s.name}</h3>
                      <p className="text-sm font-semibold text-white/90 mb-2 font-sans">{s.tagline}</p>
                      <p className="text-xs text-white/50 leading-relaxed font-sans">{s.desc}</p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <EventCTA />
    </>
  );
}
