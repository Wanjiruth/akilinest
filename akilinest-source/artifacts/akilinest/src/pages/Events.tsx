import { Link } from "wouter";
import { Reveal } from "@/components/Reveal";

export default function Events() {
  return (
    <>
      {/* PAGE HERO */}
      <div className="relative h-[52vh] min-h-[340px] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D0C18] to-[#0B4D5F]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/80 to-transparent" />
        <div className="relative z-10 px-6 md:px-14 pb-12 pt-28">
          <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-white/35 mb-3 block">Events</span>
          <h1 className="font-serif text-[clamp(2.4rem,5vw,5rem)] font-black text-white tracking-tight leading-tight mb-3">Where the<br />learning begins</h1>
          <p className="text-base text-white/60 max-w-lg font-light leading-relaxed">Live sessions, pilot cohorts, and experiences for children and parents in Nairobi.</p>
        </div>
      </div>

      <section className="bg-[#0D0C18] px-6 md:px-14 py-20">
        <div className="max-w-2xl">
          <Reveal>
            <div className="bg-white/4 border border-white/8 rounded-3xl overflow-hidden">
              {/* EVENT HEADER */}
              <div className="bg-[#0B4D5F] p-10 relative overflow-hidden">
                <div className="absolute -right-14 -bottom-14 w-56 h-56 bg-white/5 rounded-full" />
                <span className="inline-block bg-white/15 text-white text-xs font-bold tracking-[1.5px] uppercase px-4 py-2 rounded-full mb-5">Open Enrolment</span>
                <h2 className="font-serif text-[clamp(1.8rem,3vw,2.4rem)] font-black text-white mb-3 relative z-10">AkiliNest Sprouts:<br />First Cohort</h2>
                <p className="text-base text-white/60 font-light relative z-10">The beginning of something remarkable. Join the first group of Sprouts.</p>
              </div>

              {/* EVENT DETAILS */}
              <div className="p-10 space-y-6">
                {[
                  { label: "Venue", value: "HeartSpace, Kabernet Road, Nairobi" },
                  { label: "The Space", value: "Teal walls, parquet floors, children's art gallery, fairy lights" },
                  { label: "Who it's for", value: "Children aged 6 to 8, Sprouts stage" },
                  { label: "Cohort size", value: "20 children, two instructors, intimate and hands-on" },
                ].map((row) => (
                  <div key={row.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/6 rounded-xl flex items-center justify-center text-[10px] font-bold text-white/35 shrink-0 font-serif">{row.label.slice(0, 3)}</div>
                    <div>
                      <span className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#1A7A97] block mb-1">{row.label}</span>
                      <span className="text-sm text-white/75 font-light">{row.value}</span>
                    </div>
                  </div>
                ))}

                <div className="h-px bg-white/7 my-2" />

                <Link href="/contact" data-testid="button-event-register" className="inline-flex items-center gap-2 bg-[#0B4D5F] hover:bg-[#1A7A97] text-white font-bold text-sm px-8 py-4 rounded-full transition-all">
                  Register your child's interest
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-8 bg-white/3 border border-white/6 rounded-2xl p-6">
              <h3 className="font-serif text-lg font-black text-white mb-2">More events coming soon</h3>
              <p className="text-sm text-white/45 font-light leading-relaxed mb-4">We are planning weekend sessions across all four stages, plus holiday camps running Monday to Friday. Get on the early access list to be the first to know.</p>
              <Link href="/contact" data-testid="button-events-earlyaccess" className="text-sm font-semibold text-[#1A7A97] hover:text-white transition-colors">
                Get early access →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
