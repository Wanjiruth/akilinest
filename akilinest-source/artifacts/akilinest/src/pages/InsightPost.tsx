import { Link, useRoute } from "wouter";
import { Reveal } from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";
import TeamCTA from "@/components/TeamCTA";
import NotFound from "@/pages/not-found";
import { AUDIENCE_LABELS, findInsight, insights } from "@/content/insights";
import { canonicalUrl } from "@/lib/seo";

/** Where each audience should be sent next, rather than one generic CTA. */
const NEXT_STEP = {
  workplace: { href: "/teams/corporate", label: "See how we work with workplace teams" },
  educators: { href: "/teams/educators", label: "See how we work with educator teams" },
  parents: { href: "/kids-ai-bootcamps", label: "See the kids bootcamps" },
} as const;

export default function InsightPost() {
  const [, params] = useRoute("/insights/:slug");
  const post = params?.slug ? findInsight(params.slug) : undefined;

  if (!post) return <NotFound />;

  const related = insights.filter((p) => p.slug !== post.slug).slice(0, 3);
  const next = NEXT_STEP[post.audience];
  const published = new Date(post.date);

  return (
    <>
      <PageMeta
        title={`${post.title} | AkiliNest`}
        description={post.description}
        path={`/insights/${post.slug}`}
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          author: { "@type": "Organization", name: "AkiliNest" },
          publisher: {
            "@type": "Organization",
            name: "AkiliNest",
            logo: { "@type": "ImageObject", url: canonicalUrl("/logo.png") },
          },
          mainEntityOfPage: canonicalUrl(`/insights/${post.slug}`),
        }}
      />

      {/* HEADER */}
      <section className="bg-[#F9F5EE] px-6 md:px-14 pt-32 md:pt-40 pb-12 md:pb-14 border-b border-black/5">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-6">
              <Link
                href="/insights"
                className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#0B4D5F]/70 hover:text-[#0B4D5F] transition-colors font-sans"
              >
                &larr; Insights
              </Link>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#0B4D5F] bg-[#0B4D5F]/8 px-3 py-1 rounded-full font-sans">
                {AUDIENCE_LABELS[post.audience]}
              </span>
              <span className="text-xs text-[#5C5A70] font-sans">
                <time dateTime={post.date}>
                  {published.toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                {" · "}
                {post.readTime}
              </span>
            </div>

            <h1 className="font-serif text-[clamp(2rem,4.4vw,3.4rem)] font-bold leading-[1.08] tracking-tight text-[#0D0C18] mb-5">
              {post.title}
            </h1>
            <p className="text-base md:text-lg text-[#4A4860] leading-relaxed font-sans">
              {post.description}
            </p>
          </Reveal>
        </div>
      </section>

      {/* BODY */}
      <article className="bg-white px-6 md:px-14 py-16 md:py-20">
        <div className="max-w-2xl mx-auto">
          {post.sections.map((section, i) => (
            <Reveal key={section.heading ?? i}>
              <div className="mb-10">
                {section.heading ? (
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0D0C18] tracking-tight leading-snug mb-4">
                    {section.heading}
                  </h2>
                ) : null}
                {section.paragraphs.map((p, j) => (
                  <p
                    key={j}
                    className="text-base md:text-lg text-[#4A4860] leading-relaxed mb-4 font-sans"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}

          <Reveal>
            <div className="border-t border-black/8 pt-8 mt-4">
              <Link
                href={next.href}
                data-testid="link-insight-next"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0D0C18] hover:text-[#E8693A] transition-colors font-sans group"
              >
                {next.label}
                <span className="w-6 h-px bg-current transition-all group-hover:w-10" />
              </Link>
            </div>
          </Reveal>
        </div>
      </article>

      {/* RELATED */}
      <section className="bg-[#F9F5EE] px-6 md:px-14 py-16 md:py-20 border-t border-black/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="font-serif text-2xl font-bold text-[#0D0C18] mb-8">Read next</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 60}>
                <Link href={`/insights/${p.slug}`}>
                  <article className="bg-white border border-black/8 rounded-2xl p-6 h-full hover:-translate-y-1 hover:shadow-lg transition-all cursor-pointer">
                    <span className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#0B4D5F] mb-3 block font-sans">
                      {AUDIENCE_LABELS[p.audience]}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#0D0C18] leading-snug">
                      {p.title}
                    </h3>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TeamCTA />
    </>
  );
}
