import { Link } from "wouter";
import { Reveal } from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";
import EventCTA from "@/components/EventCTA";
import { events, EVENT_REGISTRATION_URL, holidayCampsFlyer, SIGNUP_LABEL, VENUE, WHATSAPP_URL } from "@/content/events";
import { asset, IMAGES } from "@/lib/images";

export default function Events() {
  const featured = events.find((e) => e.featured);
  const camps = events.filter((e) => !e.featured);

  return (
    <>
      <PageMeta
        title="Holiday Camps & Taster Sessions June-August 2026 | AkiliNest"
        description="Register for AkiliNest events in Nairobi. June 27 taster KSh 2,000. Holiday camps July-August 2026 at heARTspace. Ages 6-17. Limited spots."
        path="/events"
        keywords={["holiday camps kids Nairobi", "creative classes children Nairobi", "AkiliNest events", "after school activities Kenya"]}
      />

      {/* FULL-PAGE VIDEO BACKGROUND */}
      <div className="fixed inset-0 w-full h-full -z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src={`${import.meta.env.BASE_URL}space.mp4`} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#0D0C18]/70" />
      </div>

      {/* HERO */}
      <div className="relative min-h-[52vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C18]/60 to-transparent" />
        <div className="relative z-10 px-6 md:px-14 pb-12 pt-28">
          <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-white/35 mb-3 block">Events</span>
          <h1 className="font-serif text-[clamp(2.4rem,5vw,5rem)] font-bold text-white tracking-tight leading-tight mb-3">Where the<br />learning begins</h1>
          <p className="text-base text-white/60 max-w-lg leading-relaxed">Taster sessions, holiday camps, and weekend programmes for children and parents in Nairobi.</p>
        </div>
      </div>

      {/* CONTENT — transparent bg so video shows through */}
      <section className="relative z-10 px-6 md:px-14 py-20">
        <div className="max-w-6xl mx-auto space-y-8">
          {featured && (
            <Reveal>
              <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-[1fr_0.7fr]">
                <div className="p-8 md:p-10">
                  <span className="inline-block bg-[#E8693A] text-white text-xs font-bold tracking-[1.5px] uppercase px-4 py-2 rounded-full mb-5">{featured.badge}</span>
                  <h2 className="font-serif text-[clamp(1.8rem,3vw,2.4rem)] font-bold text-white mb-3">{featured.title}</h2>
                  <p className="text-base text-white/70 leading-relaxed mb-6">{featured.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {[
                      { label: "Date", value: featured.dates },
                      { label: "Time", value: featured.time },
                      { label: "Price", value: featured.price ?? "N/A" },
                      { label: "Venue", value: VENUE },
                    ].map((row) => (
                      <div key={row.label}>
                        <span className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#1A7A97] block mb-1">{row.label}</span>
                        <span className="text-sm text-white/80">{row.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {featured.highlights.map((h) => (
                      <span key={h} className="text-xs text-white/70 bg-white/10 border border-white/15 px-3 py-1.5 rounded-full">{h}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <a href={EVENT_REGISTRATION_URL} target="_blank" rel="noopener noreferrer" className="inline-flex bg-[#E8693A] hover:bg-[#C4561A] text-white font-bold text-sm px-8 py-4 rounded-full transition-all font-sans">
                      {SIGNUP_LABEL}
                    </a>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex bg-white/10 border border-white/20 text-white font-semibold text-sm px-8 py-4 rounded-full hover:bg-white/20 transition-all font-sans">
                      WhatsApp AkiliNest
                    </a>
                  </div>
                </div>
                {featured.image && (
                  <div className="relative flex items-center justify-center bg-white/5 p-4 lg:max-w-[220px]">
                    <img
                      src={asset(featured.image)}
                      alt="June 27 taster session flyer"
                      className="max-h-[200px] w-full object-contain"
                    />
                  </div>
                )}
              </div>
            </Reveal>
          )}

          <Reveal delay={80}>
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 mb-10">
              <span className="inline-block bg-[#7F5AF0]/30 text-[#7BCFE8] text-xs font-bold tracking-[1.5px] uppercase px-4 py-2 rounded-full mb-5">
                Holiday Camps
              </span>
              <h3 className="font-serif text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-white mb-3">
                {holidayCampsFlyer.tagline}
              </h3>
              <p className="text-base text-white/70 leading-relaxed mb-6 max-w-2xl">
                {holidayCampsFlyer.subtitle}. {holidayCampsFlyer.ages}. Think first, create boldly, use AI wisely.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                {holidayCampsFlyer.intakes.map((intake) => (
                  <div key={intake.dates} className="bg-white/8 border border-white/12 rounded-xl px-4 py-3">
                    <span className="text-[10px] font-bold uppercase tracking-wide text-[#7BCFE8] block mb-1">{intake.month}</span>
                    <span className="text-sm text-white/85">{intake.dates}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mb-8">
                {[holidayCampsFlyer.time, holidayCampsFlyer.duration, ...holidayCampsFlyer.highlights].map((item) => (
                  <span key={item} className="text-xs text-white/70 bg-white/10 border border-white/15 px-3 py-1.5 rounded-full">
                    {item}
                  </span>
                ))}
              </div>
              <a
                href={EVENT_REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-[#E8693A] hover:bg-[#C4561A] text-white font-bold text-sm px-8 py-4 rounded-full transition-all font-sans"
              >
                {SIGNUP_LABEL}
              </a>
            </div>

            <h3 className="font-serif text-2xl font-bold text-white mb-6">Choose your intake</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {camps.map((camp) => (
                <div key={camp.id} className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-white/25 transition-colors">
                  <span className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#7BCFE8] block mb-2">{camp.badge}</span>
                  <h4 className="font-serif text-lg font-bold text-white mb-2">{camp.title}</h4>
                  <p className="text-sm text-[#1A7A97] font-semibold mb-1">{camp.dates}</p>
                  <p className="text-sm text-white/55 mb-4">{camp.time}{camp.duration ? ` · ${camp.duration}` : ""}</p>
                  <p className="text-sm text-white/65 leading-relaxed mb-4">{camp.description}</p>
                  <a href={EVENT_REGISTRATION_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#E8693A] hover:text-white transition-colors font-sans">
                    {SIGNUP_LABEL}
                  </a>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden">
              <div className="p-6">
                <h3 className="font-serif text-lg font-bold text-white mb-2">The venue</h3>
                <p className="text-sm text-white/65 leading-relaxed mb-2">{VENUE}</p>
                <p className="text-sm text-white/50">Teal walls, parquet floors, children&apos;s art gallery, fairy lights. Intimate and hands-on.</p>
              </div>
              <div className="relative min-h-[200px]">
                <img src={asset(IMAGES.eventSpace)} alt="heARTspace event venue Nairobi" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <h3 className="font-serif text-lg font-bold text-white mb-2">AkiliNest weekend programmes coming soon</h3>
              <p className="text-sm text-white/50 leading-relaxed mb-4">Weekend sessions across all four stages. Join the early access list to be first to know.</p>
              <Link href="/contact" className="text-sm font-semibold text-[#1A7A97] hover:text-white transition-colors">
                Get early access →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <EventCTA />
    </>
  );
}
