import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { EVENT_REGISTRATION_URL, SIGNUP_LABEL, VENUE, featuredEvent } from "@/content/events";

const rows = [
  { icon: Calendar, label: "Next session", value: featuredEvent.dates },
  { icon: Clock, label: "Time", value: featuredEvent.time },
  { icon: Users, label: "Ages", value: "6-17 · Limited spots" },
  { icon: MapPin, label: "Venue", value: VENUE },
];

export default function HeroSessionCard() {
  return (
    <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto bg-[#0B1220]/90 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-7 shadow-2xl">
      <h2 className="font-serif text-xl md:text-2xl font-bold text-white mb-1">Next session details</h2>
      <p className="text-sm text-white/45 mb-6 font-sans">Everything you need to sign up</p>

      <div className="space-y-4 mb-6">
        {rows.map((row) => (
          <div key={row.label} className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center shrink-0">
              <row.icon className="w-4 h-4 text-[#E8693A]" strokeWidth={2} />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] font-bold tracking-[1.5px] uppercase text-white/35 block mb-0.5 font-sans">
                {row.label}
              </span>
              <span className="text-sm text-white/85 leading-snug font-sans">{row.value}</span>
            </div>
          </div>
        ))}
        {featuredEvent.price && (
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#E8693A]/20 flex items-center justify-center shrink-0">
              <span className="text-xs font-bold text-[#E8693A] font-sans">i</span>
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-[1.5px] uppercase text-white/35 block mb-0.5 font-sans">
                Availability
              </span>
              <span className="text-sm text-white font-semibold font-sans">{featuredEvent.price}</span>
            </div>
          </div>
        )}
      </div>

      <a
        href={EVENT_REGISTRATION_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center bg-[#E8693A] hover:bg-[#C4561A] text-white font-bold text-sm px-6 py-3.5 rounded-full transition-all font-sans"
      >
        {SIGNUP_LABEL}
      </a>
      <p className="text-xs text-white/40 mt-4 text-center font-sans">
        Holiday camps run July and August · same sign-up form
      </p>
    </div>
  );
}
