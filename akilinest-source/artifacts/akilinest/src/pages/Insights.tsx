import { Link } from "wouter";
import { Reveal } from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";
import { pageSeo } from "@/lib/pageSeo.mjs";
import TeamCTA from "@/components/TeamCTA";
import { AUDIENCE_LABELS, insights, type InsightAudience } from "@/content/insights";

const FILTERS: { key: InsightAudience; label: string }[] = [
  { key: "workplace", label: AUDIENCE_LABELS.workplace },
  { key: "educators", label: AUDIENCE_LABELS.educators },
  { key: "parents", label: AUDIENCE_LABELS.parents },
];

export default function Insights() {
  return (
    <>
      <PageMeta
        {...pageSeo("/insights")}
      />

      {/* HERO */}
      <section className="relative bg-[#F9F5EE] overflow-hidden border-b border-black/5">
        <div className="max-w-6xl mx-auto px-6 md:px-14 pt-32 md:pt-40 pb-14 md:pb-16">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[2px] uppercase text-[#0B4D5F] mb-6 block font-sans">
              Insights
            </span>
            <h1 className="font-serif text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.05] tracking-tight text-[#0D0C18] mb-6 max-w-3xl">
              Practical notes on using AI well.
            </h1>
            <p className="text-base md:text-lg text-[#4A4860] max-w-2xl leading-relaxed mb-8 font-sans">
              Short, founder-led pieces written from what we see in real workshops with Kenyan
              teams and classrooms. No generic AI commentary, no invented numbers, and every
              external figure carries its source.
            </p>
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <span
                  key={f.key}
                  className="text-[11px] font-bold tracking-[1px] uppercase text-[#0B4D5F] bg-white border border-black/8 px-3.5 py-1.5 rounded-full font-sans"
                >
                  {f.label} · {insights.filter((p) => p.audience === f.key).length}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="bg-white px-6 md:px-14 py-20 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {insights.map((post, i) => (
              <Reveal key={post.slug} delay={i * 60}>
                <Link href={`/insights/${post.slug}`} data-testid={`link-insight-${post.slug}`}>
                  <article className="group bg-[#F9F5EE] border border-black/8 rounded-3xl p-8 h-full flex flex-col hover:-translate-y-1 hover:shadow-lg transition-all cursor-pointer">
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <span className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#0B4D5F] font-sans">
                        {AUDIENCE_LABELS[post.audience]}
                      </span>
                      <span className="text-[11px] text-[#5C5A70] font-sans">{post.readTime}</span>
                    </div>
                    <h2 className="font-serif text-xl md:text-2xl font-bold text-[#0D0C18] mb-3 leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-sm text-[#4A4860] leading-relaxed mb-7 flex-1 font-sans">
                      {post.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-[#0D0C18] group-hover:text-[#E8693A] transition-colors font-sans">
                      Read it
                      <span aria-hidden className="transition-transform group-hover:translate-x-1">
                        &rarr;
                      </span>
                    </span>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PARENT GUIDES */}
      <section className="bg-[#F9F5EE] px-6 md:px-14 py-20 md:py-24 border-y border-black/5">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(1.8rem,3.4vw,2.6rem)] font-bold text-[#0D0C18] tracking-tight leading-tight mb-5">
              Looking for the parent guides?
            </h2>
            <p className="text-base text-[#4A4860] leading-relaxed mb-8 font-sans">
              Our writing for parents, on raising children who think for themselves in the AI era,
              lives in the AkiliNest blog.
            </p>
            <Link
              href="/blog"
              data-testid="link-insights-blog"
              className="inline-flex items-center justify-center bg-[#0B4D5F] text-white font-bold text-sm px-8 py-4 rounded-full hover:bg-[#1A7A97] transition-all font-sans"
            >
              Read the parent guides
            </Link>
          </Reveal>
        </div>
      </section>

      <TeamCTA />
    </>
  );
}
