import { Link, useRoute } from "wouter";
import { Reveal } from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";
import BlogPostBody from "@/components/BlogPostBody";
import { getPostBySlug, CATEGORY_LABELS } from "@/content/blog";
import { canonicalUrl } from "@/lib/seo";
import NotFound from "./not-found";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const post = params?.slug ? getPostBySlug(params.slug) : undefined;

  if (!post) return <NotFound />;

  const path = `/blog/${post.slug}`;

  return (
    <>
      <PageMeta
        title={post.title}
        description={post.description}
        path={path}
        type="article"
        keywords={[post.searchQuery, "AkiliNest Nairobi", "parenting AI era"]}
        image={post.heroImage}
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
            url: canonicalUrl("/"),
          },
          mainEntityOfPage: canonicalUrl(path),
        }}
      />

      <div className="bg-[#F9F5EE] min-h-screen">
        <div className="bg-gradient-to-br from-[#0B4D5F] to-[#0D0C18] px-6 md:px-14 pt-32 pb-16">
          <div className="max-w-3xl mx-auto">
            <Link href="/blog" className="text-sm text-white/50 hover:text-white mb-6 inline-block">
              ← All parent guides
            </Link>
            <span className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#7BCFE8] block mb-3">
              {CATEGORY_LABELS[post.category]}
            </span>
            <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold text-white tracking-tight leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-base text-white/60 leading-relaxed mb-4">{post.description}</p>
            <div className="flex gap-4 text-sm text-white/40">
              <span>{post.readTime} read</span>
              <span>
                {new Date(post.date).toLocaleDateString("en-KE", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 md:px-14 py-16">
          <Reveal>
            <BlogPostBody post={post} />
          </Reveal>
        </div>
      </div>
    </>
  );
}
