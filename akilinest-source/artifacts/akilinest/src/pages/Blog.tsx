import { Link } from "wouter";
import { Reveal } from "@/components/Reveal";
import EventCTA from "@/components/EventCTA";
import PageMeta from "@/components/PageMeta";
import { blogPosts, CATEGORY_LABELS } from "@/content/blog";
export default function Blog() {
  const sorted = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <PageMeta
        title="Parent Guides & Insights for Raising Kids in the AI Era"
        description="Research-backed guides for Nairobi parents: AI safety, CBC gaps, extracurriculars, future skills, and creative programmes for children aged 6-17."
        path="/blog"
        keywords={[
          "parenting AI era Nairobi",
          "extracurricular activities kids Nairobi",
          "creative classes children Kenya",
          "CBC curriculum gaps",
          "ChatGPT safe for kids",
        ]}
      />

      <div className="relative h-[40vh] min-h-[280px] flex flex-col justify-end overflow-hidden bg-gradient-to-br from-[#0B4D5F] to-[#0D0C18]">
        <div className="relative z-10 px-6 md:px-14 pb-12 pt-28">
          <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-white/35 mb-3 block">
            For Parents
          </span>
          <h1 className="font-serif text-[clamp(2.2rem,5vw,4rem)] font-bold text-white tracking-tight leading-tight mb-3">
            Parent guides &amp; insights
          </h1>
          <p className="text-base text-white/60 max-w-xl leading-relaxed">
            Answers to what Nairobi parents actually search: AI safety, school gaps, weekend activities, and future skills.
          </p>
        </div>
      </div>

      <section className="bg-[#F9F5EE] px-6 md:px-14 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 mb-10">
            <Link
              href="/parents-guide"
              className="text-sm font-semibold bg-[#0B4D5F] text-white px-5 py-2.5 rounded-full hover:bg-[#1A7A97] transition-colors"
            >
              Nairobi Parent&apos;s Guide
            </Link>
            <Link
              href="/future-skills-report"
              className="text-sm font-semibold bg-white border border-[#0B4D5F]/20 text-[#0B4D5F] px-5 py-2.5 rounded-full hover:border-[#0B4D5F] transition-colors"
            >
            Future Skills Report 2026
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sorted.map((post, i) => (
              <Reveal key={post.slug} delay={i * 40}>
                <Link href={`/blog/${post.slug}`}>
                  <article className="bg-white border border-black/8 rounded-2xl p-6 h-full hover:-translate-y-1 hover:shadow-lg transition-all cursor-pointer flex flex-col">
                    <span className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#1A7A97] mb-2">
                      {CATEGORY_LABELS[post.category]}
                    </span>
                    <h2 className="font-serif text-lg font-bold text-[#0D0C18] mb-3 leading-snug flex-1">
                      {post.title}
                    </h2>
                    <p className="text-sm text-[#5C5A70] leading-relaxed mb-4 line-clamp-3">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-[#5C5A70]/70 mt-auto pt-4 border-t border-black/5">
                      <span>{post.readTime} read</span>
                      <span>{new Date(post.date).toLocaleDateString("en-KE", { month: "short", day: "numeric", year: "numeric" })}</span>
                    </div>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <EventCTA />
    </>
  );
}
