import { Link } from "wouter";
import { Reveal } from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";
import { pageSeo } from "@/lib/pageSeo.mjs";
import TeamCTA from "@/components/TeamCTA";
import { asset, IMAGES } from "@/lib/images";
import { HERO_2026 } from "@/content/hero2026";
import { VENUE } from "@/content/events";

const beliefs = [
  {
    title: "Useful beats impressive",
    desc: "A workflow a team actually reuses on a Tuesday is worth more than a demonstration of what the newest model can do.",
  },
  {
    title: "People stay responsible for the output",
    desc: "AI can draft, summarise and suggest. Deciding what is accurate, fair and worth sending stays with the person whose name is on it.",
  },
  {
    title: "Practise on real work",
    desc: "We build sessions around the tasks a team already has in front of them, so the skill transfers the moment the session ends.",
  },
];

export default function About() {
  return (
    <>
      <PageMeta
        {...pageSeo("/about")}
      />

      {/* HERO */}
      <section className="relative bg-[#F9F5EE] overflow-hidden border-b border-black/5">
        <div
          aria-hidden
          className="absolute -top-40 -right-32 w-[520px] h-[520px] rounded-full bg-[#0B4D5F]/5"
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-14 pt-32 md:pt-40 pb-16 md:pb-20">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[2px] uppercase text-[#0B4D5F] mb-6 block font-sans">
              About AkiliNest
            </span>
            <h1 className="font-serif text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.05] tracking-tight text-[#0D0C18] mb-6 max-w-3xl">
              We help people in Kenya work and learn well with AI.
            </h1>
            <p className="text-base md:text-lg text-[#4A4860] max-w-2xl leading-relaxed font-sans">
              AkiliNest is a Nairobi company doing two related things: helping workplace and
              educator teams build practical AI workflows, and running creative AI bootcamps for
              young people aged 8 to 17.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TWO PATHS */}
      <section className="bg-white px-6 md:px-14 py-20 md:py-24">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#0B4D5F] mb-4 block font-sans">
              What we do
            </span>
            <h2 className="font-serif text-[clamp(1.9rem,3.6vw,3rem)] font-bold text-[#0D0C18] tracking-tight leading-tight mb-12 max-w-2xl">
              One company, two groups of people.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal>
              <div className="bg-[#F9F5EE] border border-black/8 rounded-3xl p-8 md:p-9 h-full flex flex-col">
                <h3 className="font-serif text-2xl font-bold text-[#0D0C18] mb-3">Teams</h3>
                <p className="text-sm text-[#4A4860] leading-relaxed mb-7 flex-1 font-sans">
                  We work with workplace and educator teams to find where AI is genuinely useful,
                  build workflows around their real tasks, and set shared standards for quality and
                  responsible use.
                </p>
                <Link
                  href="/teams"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#0D0C18] hover:text-[#E8693A] transition-colors font-sans group self-start"
                >
                  AI upskilling for teams
                  <span className="w-6 h-px bg-current transition-all group-hover:w-10" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="bg-[#F9F5EE] border border-black/8 rounded-3xl p-8 md:p-9 h-full flex flex-col">
                <h3 className="font-serif text-2xl font-bold text-[#0D0C18] mb-3">
                  Young people
                </h3>
                <p className="text-sm text-[#4A4860] leading-relaxed mb-7 flex-1 font-sans">
                  Our creative AI bootcamps give children aged 8 to 17 hands-on experience with AI
                  and digital tools, working through four stages from first ideas to finished
                  projects they can explain themselves.
                </p>
                <Link
                  href="/kids-ai-bootcamps"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#0D0C18] hover:text-[#E8693A] transition-colors font-sans group self-start"
                >
                  Kids AI bootcamps
                  <span className="w-6 h-px bg-current transition-all group-hover:w-10" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHAT WE BELIEVE */}
      <section className="bg-[#F9F5EE] px-6 md:px-14 py-20 md:py-24 border-y border-black/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-14 items-start">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#0B4D5F] mb-4 block font-sans">
              How we work
            </span>
            <h2 className="font-serif text-[clamp(1.9rem,3.6vw,3rem)] font-bold text-[#0D0C18] tracking-tight leading-tight mb-10">
              Confident with AI, and still in charge of the work.
            </h2>
            <div className="space-y-7">
              {beliefs.map((b) => (
                <div key={b.title}>
                  <h3 className="font-serif text-xl font-bold text-[#0D0C18] mb-2">{b.title}</h3>
                  <p className="text-sm md:text-base text-[#4A4860] leading-relaxed max-w-xl font-sans">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <img
              src={asset(IMAGES.kidsCrafts)}
              alt="A hands-on creative workshop session in progress"
              width="1200"
              height="900"
              loading="lazy"
              decoding="async"
              className="rounded-3xl object-cover w-full aspect-[4/3] shadow-lg"
            />
          </Reveal>
        </div>
      </section>

      {/* H.E.R.O. */}
      <section className="bg-[#0B4D5F] px-6 md:px-14 py-20 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <img
              src={asset(IMAGES.pitchGroup)}
              alt="AkiliNest founders with H.E.R.O. programme organisers at the closing session in Nairobi"
              width="1400"
              height="787"
              loading="lazy"
              decoding="async"
              className="rounded-3xl object-cover w-full aspect-[21/9] shadow-lg mb-10"
            />
            <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-white/40 mb-4 block font-sans">
              Programme selection
            </span>
            <h2 className="font-serif text-[clamp(1.8rem,3.4vw,2.8rem)] font-bold text-white tracking-tight leading-tight mb-5">
              Selected for {HERO_2026.shortName}.
            </h2>
            <p className="text-base text-white/75 leading-relaxed mb-8 font-sans">
              {HERO_2026.selection} {HERO_2026.programme} is an acceleration and
              internationalisation programme supported by {HERO_2026.supporters.join(", ")}.
            </p>
            <Link
              href="/hero-2026"
              className="inline-flex items-center justify-center bg-white text-[#0B4D5F] font-bold text-sm px-8 py-4 rounded-full hover:bg-white/90 transition-all font-sans"
            >
              Read more about H.E.R.O. 2026
            </Link>
          </Reveal>
        </div>
      </section>

      {/* WHERE WE ARE */}
      <section className="bg-white px-6 md:px-14 py-20 md:py-24">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#0B4D5F] mb-4 block font-sans">
              Where we are
            </span>
            <h2 className="font-serif text-[clamp(1.8rem,3.4vw,2.6rem)] font-bold text-[#0D0C18] tracking-tight leading-tight mb-10">
              Based in Nairobi, working across Kenya.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: "Team sessions", value: "On site at your offices, or at our Nairobi space" },
              { label: "Kids bootcamps", value: VENUE },
              { label: "Get in touch", value: "akilinest@gmail.com · +254 702 820 845" },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 70}>
                <div className="bg-[#F9F5EE] border border-black/8 rounded-2xl p-6 h-full">
                  <span className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#0B4D5F] mb-2 block font-sans">
                    {item.label}
                  </span>
                  <p className="text-sm text-[#0D0C18] leading-relaxed font-sans">{item.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TeamCTA />
    </>
  );
}
