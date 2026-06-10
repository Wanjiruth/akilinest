import type { BlogPost } from "@/content/blog";
import { EVENT_REGISTRATION_URL, SIGNUP_LABEL, WHATSAPP_URL } from "@/content/events";

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

      <div className="mt-12 p-8 bg-[#0B4D5F] rounded-2xl text-center">
        <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-white/40 mb-3 font-sans">AkiliNest</p>
        <h3 className="font-serif text-2xl font-bold text-white mb-3">See the AkiliNest approach in action</h3>
        <p className="text-white/70 mb-6 max-w-md mx-auto font-sans">
          Join our June 27 taster or holiday camps at heARTspace, Nairobi. AkiliNest trains children aged 6-17 to think first, then use AI wisely.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={EVENT_REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-[#E8693A] text-white font-bold text-sm px-8 py-4 rounded-full hover:-translate-y-0.5 transition-all font-sans"
          >
            {SIGNUP_LABEL}
          </a>
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
