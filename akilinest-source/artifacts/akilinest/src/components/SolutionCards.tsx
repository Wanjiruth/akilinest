import { Reveal } from "@/components/Reveal";
import type { Solution } from "@/content/pathways";

/**
 * The four solutions under a pathway. Each card states the goal, what we do,
 * what the organisation gets, and carries its own call to action.
 */
export default function SolutionCards({ solutions }: { solutions: readonly Solution[] }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {solutions.map((s, i) => (
        <Reveal key={s.key} delay={i * 70}>
          <div className="bg-white border border-black/8 rounded-3xl p-8 md:p-9 h-full flex flex-col">
            <span className="font-serif text-sm font-bold text-[#0B4D5F]/50 tabular-nums mb-3 block">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#0D0C18] tracking-tight leading-snug mb-5">
              {s.name}
            </h3>

            <div className="mb-5">
              <span className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#E8693A] mb-1.5 block font-sans">
                The goal
              </span>
              <p className="text-sm md:text-base text-[#0D0C18] leading-relaxed font-sans">{s.goal}</p>
            </div>

            <div className="mb-6">
              <span className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#0B4D5F] mb-1.5 block font-sans">
                What we do
              </span>
              <p className="text-sm text-[#4A4860] leading-relaxed font-sans">{s.whatWeDo}</p>
            </div>

            <div className="mt-auto pt-6 border-t border-black/8">
              <span className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#0B4D5F] mb-3 block font-sans">
                What you get
              </span>
              <ul className="space-y-2.5 mb-6">
                {s.gets.map((g) => (
                  <li key={g} className="flex items-start gap-2.5">
                    <span aria-hidden className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0B4D5F] shrink-0" />
                    <span className="text-sm text-[#0D0C18] leading-relaxed font-sans">{g}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#enquire"
                data-testid={`cta-${s.key}`}
                className="inline-flex items-center justify-center w-full border-2 border-[#0B4D5F]/15 hover:border-[#0B4D5F] hover:bg-[#0B4D5F] hover:text-white text-[#0B4D5F] font-bold text-sm px-6 py-3 rounded-full transition-all font-sans"
              >
                {s.cta}
              </a>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
