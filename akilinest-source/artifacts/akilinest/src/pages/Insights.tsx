import { Link } from "wouter";
import { Reveal } from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";
import TeamCTA from "@/components/TeamCTA";

/**
 * Founder-led articles. Each entry stays `published: false` until the article
 * is actually written; nothing here should read as live content before it is.
 */
const articles = [
  {
    title: "How Kenyan teams can use AI safely in everyday work",
    topic: "Workplace teams",
    summary:
      "Where the real risks sit for a small team, and the handful of habits that remove most of them.",
    published: false,
  },
  {
    title: "AI for teachers in Kenya: practical uses beyond lesson planning",
    topic: "Educator teams",
    summary:
      "Lesson plans are the obvious use. The bigger wins are in feedback, differentiation and administration.",
    published: false,
  },
  {
    title: "What should a workplace team never put into a public AI tool?",
    topic: "Responsible use",
    summary:
      "A short, practical list your team can agree on in one meeting, and why each item is on it.",
    published: false,
  },
  {
    title: "How to turn repetitive team work into practical AI workflows",
    topic: "Workflows",
    summary:
      "Finding the work that repeats every week, and turning it into something reusable rather than a one-off prompt.",
    published: false,
  },
  {
    title: "How parents can choose an AI bootcamp for their child",
    topic: "For parents",
    summary:
      "The questions worth asking any programme before you enrol, including ours.",
    published: false,
  },
];

export default function Insights() {
  return (
    <>
      <PageMeta
        title="Insights on Practical AI for Kenyan Teams | AkiliNest"
        description="Founder-led articles on using AI well at work and in the classroom: safe everyday use, practical workflows, and responsible AI habits for Kenyan teams."
        path="/insights"
        keywords={["AI upskilling Kenya", "AI training Kenya", "responsible AI use Kenya"]}
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
            <p className="text-base md:text-lg text-[#4A4860] max-w-2xl leading-relaxed font-sans">
              Short, founder-led pieces written from what we see in real workshops with Kenyan
              teams and classrooms. No generic AI commentary.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="bg-white px-6 md:px-14 py-20 md:py-24">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="font-serif text-[clamp(1.7rem,3.2vw,2.4rem)] font-bold text-[#0D0C18] tracking-tight leading-tight mb-3">
              In progress
            </h2>
            <p className="text-base text-[#4A4860] max-w-xl mb-12 font-sans leading-relaxed">
              These are the pieces we are writing next. They will appear here as they are
              published.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article, i) => (
              <Reveal key={article.title} delay={i * 60}>
                <article className="bg-[#F9F5EE] border border-black/8 rounded-3xl p-8 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#0B4D5F] font-sans">
                      {article.topic}
                    </span>
                    {!article.published && (
                      <span className="text-[10px] font-bold tracking-[1px] uppercase text-[#4A4860]/60 bg-black/5 px-2.5 py-1 rounded-full font-sans">
                        Coming soon
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#0D0C18] mb-3 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-sm text-[#4A4860] leading-relaxed font-sans">
                    {article.summary}
                  </p>
                </article>
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
              Our existing writing for parents, on raising children who think for themselves in the
              AI era, lives in the AkiliNest blog.
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
