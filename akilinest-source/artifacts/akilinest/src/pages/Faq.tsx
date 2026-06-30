import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";
import EventCTA from "@/components/EventCTA";

const faqs = [
  { tag: "On AI and effort", q: "Will AI make my child lazy?", a: "No. AI does not make children lazy. <strong>Poor learning systems do.</strong> When AI is used without a thinking structure, children skip the mental effort that builds capability. But when guided properly, AI actually increases curiosity and depth of thinking, because children have to direct it, question its outputs, and explain their reasoning afterwards. At AkiliNest, children think before AI is ever opened. The brain stays active throughout." },
  { tag: "On thinking habits", q: "Will my child stop thinking if they use AI?", a: "Only if AI replaces thinking. That is exactly why we design learning so that children must think first, AI only challenges their ideas, and they must explain their reasoning afterwards in their own words. Thinking is always the starting point. AI is never the shortcut." },
  { tag: "On risk", q: "Is AI dangerous for children's learning?", a: "AI is not dangerous. <strong>Unstructured use is.</strong> Like calculators did not destroy mathematics, AI will not destroy thinking, but it will change how thinking is trained. A child who learns to ask AI before thinking will lose the cognitive habit of reasoning independently. A child who learns to think first and use AI second will develop a more powerful combination than either alone." },
  { tag: "On the difference", q: "How is AkiliNest different from school?", a: "Schools mainly focus on memorisation, exams, and fixed answers. AkiliNest focuses on reasoning, creativity, articulation, and problem-solving in conditions of real-world uncertainty. We do not test children on what they remembered. We develop their ability to think when the answer is not given to them." },
  { tag: "On outcomes", q: "What will my child actually learn?", a: "Children learn how to think independently before reaching for any tool, use AI responsibly as a research and thinking partner, explain ideas clearly and confidently in their own words, solve real problems that do not have fixed answers, and build creative outputs they are genuinely proud of. Every week, they take something home that proves it." },
  { tag: "On the philosophy", q: "Why focus on thinking first?", a: "Because in the AI era, <strong>thinking is more valuable than information.</strong> Information is cheap and instantly available. Thinking (the ability to reason, form a position, identify a problem, and build a response) is rare and increasingly valuable. Children who can think first will use AI as an amplifier. Children who skip thinking will be replaced by the tools they depend on." },
  { tag: "On structure", q: "How do you prevent AI dependency?", a: "Through strict learning structure built into every session. No AI is used before a child has reasoned through the problem themselves. AI is then used as a challenger: something that questions and expands their thinking, not answers for them. After AI is used, children must re-explain everything in their own words. This three-step structure (think, use AI, express) is non-negotiable in every session." },
  { tag: "On age ranges", q: "What age does AkiliNest accept?", a: "AkiliNest accepts children aged 8 to 17, structured across four stages: Sprouts (8 to 10), Explorers (11 to 12), Builders (13 to 14), and Innovators (15 to 17). Each stage has its own curriculum, tools, and learning outcomes." },
  { tag: "On the session format", q: "What does a typical session look like?", a: "Sessions run on weekends, one hour and twenty minutes each. Every session begins with a thinking warm-up and a creative bridge question. The main activity involves independent reasoning, guided discussion, and creative work with intentional AI use. Every session ends with a reflection and a take-home creation, something physical or digital that parents can see." },
];

function FaqItem({ faq }: { faq: typeof faqs[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b-[1.5px] border-black/8 py-7 cursor-pointer" onClick={() => setOpen(!open)} data-testid={`faq-item-${faq.tag.toLowerCase().replace(/\s+/g, "-")}`}>
      <div className="flex items-start justify-between gap-6">
        <h3 className="font-serif text-lg font-black text-[#0D0C18] leading-snug">{faq.q}</h3>
        <button
          aria-label={open ? "Close answer" : "Open answer"}
          className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-0.5 transition-all ${open ? "bg-[#0B4D5F] text-white rotate-45" : "bg-[#E0F3F8] text-[#0B4D5F]"}`}
        >
          +
        </button>
      </div>
      {open && (
        <div className="mt-5">
          <span className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#1A7A97] bg-[#E0F3F8] px-3 py-1 rounded-full inline-block mb-4">{faq.tag}</span>
          <p className="text-base text-[#5C5A70] leading-relaxed font-light" dangerouslySetInnerHTML={{ __html: faq.a }} />
        </div>
      )}
    </div>
  );
}

export default function Faq() {
  return (
    <>
      <PageMeta
        title="FAQ: AI, Thinking & Programmes for Children in Kenya"
        description="Answers to what Kenyan parents actually ask: Is AI safe? Will my child stop thinking? How is AkiliNest different from school? Ages 8 to 17."
        path="/faq"
        keywords={["AkiliNest FAQ", "AI safe for kids", "creative programmes Nairobi", "children AI education Kenya"]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.a.replace(/<[^>]+>/g, ""),
            },
          })),
        }}
      />
      {/* PAGE HERO */}
      <div className="relative h-[52vh] min-h-[340px] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D0C18] to-[#1A2030]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/80 to-transparent" />
        <div className="relative z-10 px-6 md:px-14 pb-12 pt-28">
          <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-white/35 mb-3 block">Frequently Asked Questions</span>
          <h1 className="font-serif text-[clamp(2.4rem,5vw,5rem)] font-black text-white tracking-tight leading-tight mb-3">Questions parents<br />actually ask.</h1>
          <p className="text-base text-white/60 font-light max-w-lg">Honest answers about AI, children, thinking, and what AkiliNest does differently.</p>
        </div>
      </div>

      <section className="bg-[#F9F5EE] px-6 md:px-14 py-20">
        <div className="max-w-3xl">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-[#1A7A97] mb-4 block">Parent Questions</span>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,3.5rem)] font-black text-[#0D0C18] tracking-tight leading-tight mb-12">Everything you<br />need to know</h2>
          </Reveal>

          <Reveal>
            <div>
              {faqs.map((faq) => (
                <FaqItem key={faq.q} faq={faq} />
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="bg-[#0B4D5F] rounded-3xl p-10 mt-12">
              <h3 className="font-serif text-2xl font-black text-white mb-3">The AkiliNest commitment</h3>
              <p className="text-base text-white/60 leading-relaxed font-light">
                We don't teach children to rely on AI. We teach them to think deeply first, then use AI to go further than they ever could alone. We are not raising <span className="text-[#E8693A] font-semibold">AI users</span>. We are raising <span className="text-[#E8693A] font-semibold">thinking minds</span> in an AI world.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <EventCTA />
    </>
  );
}
