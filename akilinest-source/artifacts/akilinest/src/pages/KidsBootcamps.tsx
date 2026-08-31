import { Link } from "wouter";
import { Reveal } from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";
import EventCTA from "@/components/EventCTA";
import VideoEmbed from "@/components/VideoEmbed";
import { asset, IMAGES } from "@/lib/images";
import { CAMPS_ANNOUNCED, VENUE } from "@/content/events";
import { KIDS_QUOTE, kidsDomains, kidsStages } from "@/content/kids";
import { canonicalUrl } from "@/lib/seo";

const stages = [
  {
    letter: "S",
    name: "Sprouts",
    age: "Ages 8 to 10",
    tagline: "I can imagine and express myself creatively.",
    desc: "Foundational creativity without AI dependency.",
    grad: "from-[#0B4D5F] to-[#1AB5DC]",
  },
  {
    letter: "E",
    name: "Explorers",
    age: "Ages 11 to 12",
    tagline: "I can understand technology and think critically about it.",
    desc: "Digital literacy and independent reasoning.",
    grad: "from-[#6B3900] to-[#E8980A]",
  },
  {
    letter: "B",
    name: "Builders",
    age: "Ages 13 to 14",
    tagline: "I can build with technology.",
    desc: "Real digital products from structured thinking.",
    grad: "from-[#6B1A0A] to-[#E8523A]",
  },
  {
    letter: "I",
    name: "Innovators",
    age: "Ages 15 to 17",
    tagline: "I can solve real-world problems with technology.",
    desc: "Strategy, ethics, and AI in action.",
    grad: "from-[#1A0B6B] to-[#7F5AF0]",
  },
];

const steps = [
  { n: "01", label: "Think First", desc: "Independent reasoning before any tool is opened." },
  { n: "02", label: "Write Creatively", desc: "Children frame ideas in their own words first." },
  { n: "03", label: "Use AI", desc: "AI critiques, expands, and challenges their thinking." },
  { n: "04", label: "Present", desc: "Learners explain and defend their reasoning clearly." },
];

export default function KidsBootcamps() {
  return (
    <>
      <PageMeta
        title="AI Bootcamp for Kids in Nairobi & Kenya | AkiliNest"
        description="Creative AI bootcamps for children aged 8-17 in Nairobi and across Kenya. Young people explore AI, creativity, digital skills and real-world projects with AkiliNest."
        path="/kids-ai-bootcamps"
        keywords={["AI bootcamp for kids Nairobi", "AI bootcamp Kenya", "creative classes children Nairobi"]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "AkiliNest",
          url: canonicalUrl("/kids-ai-bootcamps"),
          description:
            "Creative AI bootcamps for children aged 8 to 17 in Nairobi and across Kenya.",
          address: { "@type": "PostalAddress", addressLocality: "Nairobi", addressCountry: "KE" },
          telephone: "+254702820845",
          email: "akilinest@gmail.com",
        }}
      />

      {/* HERO */}
      <section className="relative w-full min-h-[min(78vh,760px)] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
            poster={`${import.meta.env.BASE_URL}hero-bg.jpg`}
          >
            <source src={`${import.meta.env.BASE_URL}hero-main.mp4`} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#0D0C18]/80 lg:bg-gradient-to-r lg:from-[#0D0C18]/94 lg:via-[#0D0C18]/82 lg:to-[#0D0C18]/55" />
        </div>

        <div className="relative z-10 w-full px-6 md:px-14 pt-32 md:pt-36 pb-16">
          <div className="max-w-6xl mx-auto">
            <span className="text-[11px] font-bold tracking-[2px] uppercase text-[#E8693A] mb-5 block font-sans">
              AkiliNest Kids Bootcamps
            </span>
            <h1 className="font-serif text-[clamp(2.2rem,5.2vw,4rem)] font-bold leading-[1.04] tracking-tight text-white mb-5 max-w-3xl">
              Creative AI Bootcamps for Kids in Kenya.
            </h1>
            <p className="text-base md:text-lg text-white/70 max-w-2xl leading-relaxed mb-8 font-sans">
              AkiliNest runs creative AI bootcamps during the school holidays for young people
              aged 8 to 17. Over each intake, learners write, design and build original projects
              with AI and digital tools, then present work they can explain in their own words.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                data-testid="button-kids-hero-cta"
                className="inline-flex items-center justify-center w-full sm:w-auto bg-[#E8693A] text-white font-bold text-base px-9 py-4 rounded-full hover:bg-[#C4561A] hover:-translate-y-0.5 hover:shadow-xl transition-all font-sans"
              >
                {CAMPS_ANNOUNCED ? "Register your child" : "Join the waiting list"}
              </Link>
              <Link
                href="/parents-guide"
                className="inline-flex items-center justify-center w-full sm:w-auto text-sm font-semibold text-white/75 hover:text-white px-7 py-4 rounded-full border border-white/15 hover:border-white/30 transition-all font-sans"
              >
                Parents&apos; guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT INTAKE */}
      {!CAMPS_ANNOUNCED && (
        <section className="bg-[#0B4D5F] px-6 md:px-14 py-8">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center gap-x-6 gap-y-2">
            <span className="shrink-0 text-[10px] font-bold tracking-[1.5px] uppercase text-white/45 font-sans">
              Next intake
            </span>
            <p className="flex-1 text-sm text-white/85 font-sans leading-relaxed">
              The next school-holiday bootcamp runs November to December 2026 at heARTspace,
              Nairobi. Ages 8 to 17, small groups.
            </p>
            <Link
              href="/contact"
              className="shrink-0 text-sm font-bold text-white underline underline-offset-4 hover:no-underline font-sans"
            >
              Join the waiting list
            </Link>
          </div>
        </section>
      )}

      {/* PROGRAMME STAGES */}
      <section className="bg-[#0D0C18] px-6 md:px-14 py-20 md:py-24">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-white/35 mb-4 block font-sans">
              The programme
            </span>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.6rem)] font-bold text-white tracking-tight leading-tight mb-4">
              What children actually do
            </h2>
            <p className="text-base text-white/55 max-w-xl mb-12 font-sans leading-relaxed">
              Four stages by age. Each one starts with the child&rsquo;s own idea, and only then
              brings in a tool.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {kidsStages.map((stage, i) => (
              <Reveal key={stage.id} delay={i * 70}>
                <div className="bg-white/5 border border-white/10 rounded-3xl p-7 md:p-8 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-serif font-bold text-white text-lg bg-gradient-to-br ${stage.grad}`}
                    >
                      {stage.letter}
                    </span>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-white leading-none">
                        {stage.name}
                      </h3>
                      <span className="text-[10px] font-bold tracking-[1.5px] uppercase text-white/40 font-sans">
                        {stage.age}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-[#E8693A] mb-3 font-sans">
                    &ldquo;{stage.mantra}&rdquo;
                  </p>
                  <p className="text-sm text-white/60 leading-relaxed mb-5 font-sans">
                    {stage.about}
                  </p>

                  <span className="text-[10px] font-bold tracking-[1.5px] uppercase text-white/35 mb-3 block font-sans">
                    What they learn
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2 mb-6 flex-1">
                    {stage.learn.map((l) => (
                      <li key={l} className="flex items-start gap-2.5">
                        <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-white/30 mt-1.5 shrink-0" />
                        <span className="text-sm text-white/70 leading-snug font-sans">{l}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/8">
                    {stage.tools.map((t) => (
                      <span
                        key={t}
                        className="text-xs text-white/55 bg-white/6 border border-white/10 px-3 py-1 rounded-full font-sans"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="bg-[#0B4D5F] px-6 md:px-14 py-16 md:py-20 text-center">
        <Reveal>
          <p className="font-serif text-[clamp(1.4rem,2.5vw,2rem)] text-white/90 italic max-w-3xl mx-auto leading-relaxed">
            &ldquo;{KIDS_QUOTE.text}&rdquo;
          </p>
          <span className="block mt-6 text-[10px] font-bold tracking-[1.5px] uppercase text-white/50 font-sans">
            {KIDS_QUOTE.author} <span className="text-[#E8693A]">&middot;</span> {KIDS_QUOTE.role}
          </span>
        </Reveal>
      </section>

      {/* THE METHOD */}
      <section className="bg-white px-6 md:px-14 py-20 md:py-24">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#1A7A97] mb-4 block font-sans">
              The AkiliNest method
            </span>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.6rem)] font-bold text-[#0D0C18] tracking-tight leading-tight mb-4">
              Four steps every session follows
            </h2>
            <p className="text-base text-[#4A4860] max-w-xl mb-12 font-sans">
              Every AkiliNest cohort uses the same thinking cycle, so children stay in charge of
              the ideas and the tools stay in service of them.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className="bg-[#F9F5EE] border border-black/8 rounded-3xl p-7 h-full hover:-translate-y-1 hover:shadow-lg transition-all">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center font-serif font-bold text-lg mb-5"
                    style={{ background: "rgba(26,122,151,0.1)", color: "#1A7A97" }}
                  >
                    {s.n}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#0D0C18] mb-2">{s.label}</h3>
                  <p className="text-sm text-[#4A4860] leading-relaxed font-sans">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DOMAINS */}
      <section className="bg-[#F9F5EE] px-6 md:px-14 py-20 md:py-24 border-t border-black/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#1A7A97] mb-4 block font-sans">
              Across every stage
            </span>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-bold text-[#0D0C18] tracking-tight leading-tight mb-4">
              What never changes, even when the tools do
            </h2>
            <p className="text-base text-[#4A4860] max-w-xl mb-12 font-sans leading-relaxed">
              Six capabilities built through every project, whatever software happens to be current.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {kidsDomains.map((d, i) => (
              <Reveal key={d.label} delay={i * 50}>
                <div className="bg-white border border-black/8 rounded-2xl p-6 h-full">
                  <span className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#1A7A97] mb-2 block font-sans">
                    {d.label}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#0D0C18] mb-2">{d.title}</h3>
                  <p className="text-sm text-[#4A4860] leading-relaxed font-sans">{d.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-white px-6 md:px-14 py-20 md:py-24 border-t border-black/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#1A7A97] mb-4 block font-sans">
              In the room
            </span>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-bold text-[#0D0C18] tracking-tight leading-tight mb-12">
              Work they can hold up and explain
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                img: IMAGES.sessionClassroom,
                alt: "A class gathered around a laptop with their teacher during an AkiliNest session",
              },
              {
                img: IMAGES.sessionScreen,
                alt: "Learners presenting their work at the front of a session",
              },
              {
                img: IMAGES.kidsCrafts,
                alt: "Children working on a hands-on creative activity at an AkiliNest session",
              },
            ].map((shot, i) => (
              <Reveal key={shot.img} delay={i * 70}>
                <img
                  src={asset(shot.img)}
                  alt={shot.alt}
                  width="1100"
                  height="1100"
                  loading="lazy"
                  decoding="async"
                  className="rounded-3xl object-cover w-full aspect-[4/5] shadow-md"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* IN ACTION */}
      <section className="bg-[#F9F5EE] px-6 md:px-14 py-20 md:py-24 border-t border-black/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#1A7A97] mb-4 block font-sans">
              AkiliNest in action
            </span>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-bold text-[#0D0C18] tracking-tight leading-tight mb-4">
              See how a bootcamp works
            </h2>
            <p className="text-base text-[#4A4860] max-w-xl mb-12 font-sans">
              Creative sessions for children and thoughtful sessions for parents, at {VENUE}.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Reveal>
              <VideoEmbed
                src="programs-painting.mp4"
                poster="poster-painting.jpg"
                title="AkiliNest children in a creative bootcamp session"
                caption="Hands-on creative intelligence for children"
              />
            </Reveal>
            <Reveal delay={80}>
              <VideoEmbed
                src="parents-mom-child.mp4"
                poster="poster-parents.jpg"
                title="AkiliNest parent and child learning together"
                caption="AkiliNest Parent Series: raising thinkers in the AI era"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOR PARENTS */}
      <section className="bg-white px-6 md:px-14 py-20 md:py-24 border-t border-black/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#E8693A] mb-5 block font-sans">
              For parents
            </span>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] font-bold text-[#0D0C18] tracking-tight leading-[1.1] mb-6">
              Children who can explain their own work.
            </h2>
            <p className="text-base text-[#4A4860] leading-relaxed max-w-xl mb-8 font-sans">
              At AkiliNest, mental effort matters. Children think first, use AI as a sparring
              partner, and present ideas they can defend in their own words.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              <Link
                href="/parents-guide"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0D0C18] hover:text-[#E8693A] transition-colors font-sans group"
              >
                Read the parents&apos; guide
                <span className="w-6 h-px bg-current transition-all group-hover:w-10" />
              </Link>
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0D0C18] hover:text-[#E8693A] transition-colors font-sans group"
              >
                Parent questions
                <span className="w-6 h-px bg-current transition-all group-hover:w-10" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <figure className="m-0">
              <img
                src={asset(IMAGES.sessionLaptop)}
                alt="Children working together around a laptop with a facilitator during an AkiliNest session"
                width="1200"
                height="1600"
                loading="lazy"
                decoding="async"
                className="rounded-[2.5rem] object-cover w-full aspect-[4/5] shadow-xl"
              />
              <figcaption className="mt-3 text-xs text-[#5C5A70] font-sans">
                An AkiliNest session in progress. Shared with parental permission.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <EventCTA />
    </>
  );
}
