import { Reveal } from "@/components/Reveal";

type Reason = { title: string; desc: string };

export default function WhyPartner({
  heading,
  reasons,
}: {
  heading: string;
  reasons: readonly Reason[];
}) {
  return (
    <section className="bg-[#0B4D5F] px-6 md:px-14 py-20 md:py-24">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-white/40 mb-4 block font-sans">
            Why AkiliNest
          </span>
          <h2 className="font-serif text-[clamp(1.9rem,3.6vw,3rem)] font-bold text-white tracking-tight leading-tight mb-12 max-w-2xl">
            {heading}
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 70}>
              <div className="bg-white/8 border border-white/12 rounded-2xl p-7 h-full">
                <h3 className="font-serif text-xl font-bold text-white mb-3 leading-snug">
                  {r.title}
                </h3>
                <p className="text-sm text-white/75 leading-relaxed font-sans">{r.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
