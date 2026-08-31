import { Reveal } from "@/components/Reveal";

type FaqItem = { q: string; a: string };

type FaqProps = {
  items: readonly FaqItem[];
  heading?: string;
  eyebrow?: string;
  /** Cream when the section sits on white, white when it sits on cream. */
  surface?: "cream" | "white";
};

/**
 * Real questions only. The visible copy and the FAQPage structured data are
 * generated from the same array, so they can never drift apart.
 */
export default function Faq({
  items,
  heading = "Questions teams ask",
  eyebrow = "Before you book",
  surface = "white",
}: FaqProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const sectionBg = surface === "cream" ? "bg-[#F9F5EE]" : "bg-white";
  const cardBg = surface === "cream" ? "bg-white" : "bg-[#F9F5EE]";

  return (
    <section className={`${sectionBg} px-6 md:px-14 py-20 md:py-24 border-t border-black/5`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#0B4D5F] mb-4 block font-sans">
            {eyebrow}
          </span>
          <h2 className="font-serif text-[clamp(1.9rem,3.6vw,3rem)] font-bold text-[#0D0C18] tracking-tight leading-tight mb-10">
            {heading}
          </h2>
        </Reveal>

        <div className="flex flex-col gap-3">
          {items.map((item, i) => (
            <Reveal key={item.q} delay={i * 50}>
              <details className={`group ${cardBg} border border-black/8 rounded-2xl`}>
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none px-6 py-5 font-sans text-base font-semibold text-[#0D0C18]">
                  {item.q}
                  <span
                    aria-hidden
                    className="mt-1 shrink-0 text-[#0B4D5F] transition-transform duration-200 group-open:rotate-45 text-xl leading-none"
                  >
                    +
                  </span>
                </summary>
                <p className="px-6 pb-6 -mt-1 text-sm md:text-base text-[#4A4860] leading-relaxed font-sans">
                  {item.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
