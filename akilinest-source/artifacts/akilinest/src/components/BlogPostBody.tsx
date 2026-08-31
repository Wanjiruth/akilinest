import type { BlogPost } from "@/content/blog";
import { Link } from "wouter";
import { SIGNUP_LABEL, WHATSAPP_URL } from "@/content/events";

export default function BlogPostBody({ post }: { post: BlogPost }) {
  return (
    <article className="max-w-none font-sans">
      {post.sections.map((section, i) => (
        <div key={i} className="mb-8">
          {section.heading ? (
            <h2 className="font-serif text-2xl font-bold text-[#0D0C18] mb-4">{section.heading}</h2>
          ) : null}
          {section.paragraphs.map((p, j) => (
            <p key={j} className="text-base text-[#4A4860] leading-relaxed mb-4 font-sans">
              {p}
            </p>
          ))}
        </div>
      ))}

      <div className="mt-12 p-8 bg-[#0B4D5F] rounded-2xl">
        <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-white/40 mb-3 font-sans">
          AkiliNest
        </p>
        <h3 className="font-serif text-2xl font-bold text-white mb-3">
          See the AkiliNest approach in action
        </h3>
        <p className="text-white/70 mb-7 max-w-lg font-sans">
          We run creative AI bootcamps for children aged 8 to 17 during the school holidays, and
          practical AI upskilling for workplace and educator teams.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <Link
            href="/kids-ai-bootcamps"
            className="block bg-white/8 border border-white/15 rounded-2xl p-5 hover:bg-white/12 transition-colors"
          >
            <span className="block font-serif text-lg font-bold text-white mb-1">
              For your child
            </span>
            <span className="block text-sm text-white/60 font-sans">
              Creative AI bootcamps, ages 8 to 17
            </span>
          </Link>
          <Link
            href="/teams/educators"
            className="block bg-white/8 border border-white/15 rounded-2xl p-5 hover:bg-white/12 transition-colors"
          >
            <span className="block font-serif text-lg font-bold text-white mb-1">
              For your school
            </span>
            <span className="block text-sm text-white/60 font-sans">
              AI upskilling for teaching teams
            </span>
          </Link>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex bg-[#E8693A] text-white font-bold text-sm px-8 py-4 rounded-full hover:-translate-y-0.5 transition-all font-sans"
          >
            {SIGNUP_LABEL}
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-white/10 border border-white/20 text-white font-semibold text-sm px-8 py-4 rounded-full hover:bg-white/15 transition-all font-sans"
          >
            WhatsApp AkiliNest
          </a>
        </div>
      </div>
    </article>
  );
}
