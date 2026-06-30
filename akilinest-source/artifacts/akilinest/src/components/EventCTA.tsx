import { EVENT_REGISTRATION_URL, SIGNUP_LABEL, featuredEvent, holidayCampsFlyer, WHATSAPP_URL } from "@/content/events";

export default function EventCTA() {
  return (
    <section className="bg-[#0B4D5F] px-6 md:px-14 py-20 relative overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/3 rounded-full" />
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-white/35 mb-4 block font-sans">
          AkiliNest · Limited Spots
        </span>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-bold text-white tracking-tight leading-tight mb-4">
          Reserve your child&apos;s spot today
        </h2>
        <p className="text-base text-white/70 leading-relaxed mb-2 font-sans">
          <strong className="text-white">{featuredEvent.title}</strong>
        </p>
        <p className="text-sm text-white/55 leading-relaxed mb-2 font-sans">
          July 19-31 &amp; August 5-16 &amp; 17-28, 2026 · {featuredEvent.time}
        </p>
        <p className="text-sm text-white/45 leading-relaxed mb-6 font-sans">
          {holidayCampsFlyer.subtitle}. Four intakes, choose what fits your schedule.
        </p>

        <div className="flex flex-col items-center gap-4">
          <a
            href={EVENT_REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-[#E8693A] text-white font-bold text-base px-10 py-4 rounded-full hover:bg-[#C4561A] hover:-translate-y-0.5 hover:shadow-xl transition-all font-sans"
          >
            {SIGNUP_LABEL}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/50 hover:text-white/80 transition-colors font-sans underline underline-offset-4"
          >
            Prefer WhatsApp? Message us instead
          </a>
        </div>
      </div>
    </section>
  );
}
