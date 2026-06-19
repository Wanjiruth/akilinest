import { Reveal } from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";
import EventCTA from "@/components/EventCTA";
import { asset, IMAGES } from "@/lib/images";

export default function About() {
  return (
    <>
      <PageMeta
        title="About AkiliNest | Thinking-First Creative Studio Nairobi"
        description="Our philosophy: protect thinking, then use AI. Cognitive resilience training for children aged 6–17 in Nairobi, Kenya."
        path="/about"
        keywords={["AkiliNest about", "creative studio Nairobi children", "AI education philosophy"]}
      />

      <div className="relative h-[52vh] min-h-[340px] flex flex-col justify-end overflow-hidden">
        <img
          src={asset(IMAGES.parentLearning2)}
          alt="Parent and child learning together at home"
          width="1200"
          height="900"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B4D5F] via-[#0D0C18]/90 to-[#0D0C18]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/70 to-transparent" />
        <div className="relative z-10 px-6 md:px-14 pb-12 pt-28">
          <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-white/35 mb-3 block">About AkiliNest</span>
          <h1 className="font-serif text-[clamp(2.4rem,5vw,5rem)] font-bold text-white tracking-tight leading-tight mb-3">Our philosophy<br />in one line.</h1>
          <p className="text-base text-white/60">AI should not replace thinking. It should stretch it.</p>
        </div>
      </div>

      <section className="bg-[#F9F5EE] px-6 md:px-14 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#1A7A97] mb-4 block">Core Philosophy</span>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,3.5rem)] font-bold text-[#0D0C18] tracking-tight leading-tight mb-8">Protect thinking.<br />Then use AI.</h2>
            <div className="space-y-5 text-base text-[#4A4860] leading-relaxed">
              <p>In a world where AI gives instant answers, the real skill is thinking with clarity, depth, creativity, and independent judgment.</p>
              <p>AkiliNest is built to prevent cognitive offloading. Children do not outsource their reasoning here. They practice it.</p>
              <p>Our system is simple: think first, write ideas in their own words, use AI to challenge and expand thinking, then present and defend reasoning clearly.</p>
            </div>
            <blockquote className="border-l-4 border-[#E8693A] pl-5 mt-8 italic text-[#0B4D5F] text-lg font-medium leading-relaxed">
              AkiliNest is cognitive resilience training for the AI era.
            </blockquote>
          </Reveal>

          <Reveal delay={100}>
            <img
              src={asset(IMAGES.kidsCrafts)}
              alt="Children participating in a hands-on creative arts workshop"
              width="1200"
              height="900"
              loading="lazy"
              className="rounded-3xl object-cover w-full aspect-[4/3] mb-6 shadow-lg"
            />
            <div className="bg-[#0B4D5F] rounded-3xl p-10">
              <h3 className="font-serif text-2xl font-bold text-white leading-tight mb-4">What We Build</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-8">AI-empowered thinkers who reason independently, articulate clearly, and create boldly.</p>
              <div className="space-y-4">
                {[
                  "Thinking is the currency of the future.",
                  "AI should stretch thinking, not replace it.",
                  "No cognitive laziness: no copy-paste reasoning.",
                  "Creativity and articulation are trained intentionally.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-white/70 leading-snug">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8693A] mt-1.5 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-white/30 mb-4">Based in</p>
                <p className="text-base text-white font-medium">Nairobi, Kenya</p>
                <p className="text-sm text-white/50 mt-1">Serving children ages 6 to 17</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <EventCTA />
    </>
  );
}
