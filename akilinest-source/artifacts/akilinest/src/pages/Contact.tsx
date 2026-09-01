import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Reveal } from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";
import { pageSeo } from "@/lib/pageSeo.mjs";
import TeamEnquiryForm from "@/components/TeamEnquiryForm";
import { VENUE } from "@/content/events";
import { asset, IMAGES } from "@/lib/images";

const WHATSAPP_NUMBER = "254702820845";

const stageOptions = [
  "Ages 8 to 10 (Sprouts)",
  "Ages 11 to 12 (Explorers)",
  "Ages 13 to 14 (Builders)",
  "Ages 15 to 17 (Innovators)",
  "Not sure yet",
];

type Audience = "team" | "parent";

function ParentForm() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", stage: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast({ title: "Please add your name and email", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const payload = { ...form, source: "parent-waitlist" };
      if (apiUrl) {
        const res = await fetch(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error("Server error");
        setForm({ name: "", email: "", stage: "", message: "" });
        toast({
          title: "You are on the list",
          description: "We will let you know as soon as the next intake dates are confirmed.",
        });
      } else {
        const lines = [
          `Kids bootcamp waiting list: ${form.name} (${form.email}).`,
          form.stage ? `Age group: ${form.stage}` : null,
          form.message ? `Notes: ${form.message}` : null,
        ].filter(Boolean);
        const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
        if (typeof window !== "undefined") window.open(waUrl, "_blank", "noopener,noreferrer");
        toast({
          title: "Opening WhatsApp",
          description: "Send the message and we will add you to the waiting list.",
        });
      }
    } catch (err) {
      console.error(err);
      toast({
        title: "Something went wrong",
        description: "Please email us directly at akilinest@gmail.com",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass =
    "w-full px-4 py-3 border-2 border-black/8 rounded-xl font-sans text-sm text-[#0D0C18] bg-white outline-none focus:border-[#0B4D5F] transition-colors placeholder:text-[#5C5A70]/50";
  const labelClass = "block text-xs font-bold text-[#0D0C18] mb-2 font-sans";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" data-testid="form-parent-waitlist">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="pf-name" className={labelClass}>
            Your name <span className="text-[#E8693A]">*</span>
          </label>
          <input
            id="pf-name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClass}
            data-testid="input-parent-name"
          />
        </div>
        <div>
          <label htmlFor="pf-email" className={labelClass}>
            Email <span className="text-[#E8693A]">*</span>
          </label>
          <input
            id="pf-email"
            type="email"
            required
            placeholder="your@email.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClass}
            data-testid="input-parent-email"
          />
        </div>
      </div>

      <div>
        <label htmlFor="pf-stage" className={labelClass}>
          Your child&apos;s age group
        </label>
        <select
          id="pf-stage"
          value={form.stage}
          onChange={(e) => setForm({ ...form, stage: e.target.value })}
          className={inputClass}
          data-testid="select-parent-stage"
        >
          <option value="">Select an age group</option>
          {stageOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="pf-message" className={labelClass}>
          Anything you would like us to know
        </label>
        <textarea
          id="pf-message"
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${inputClass} resize-none`}
          data-testid="textarea-parent-message"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        data-testid="button-parent-submit"
        className="w-full bg-[#E8693A] hover:bg-[#C4561A] disabled:opacity-60 text-white font-bold text-sm py-4 rounded-full transition-all font-sans"
      >
        {submitting ? "Sending…" : "Join the waiting list"}
      </button>

      <p className="text-xs text-[#5C5A70] text-center font-sans">
        We use your details only to contact you about AkiliNest bootcamps.
      </p>
    </form>
  );
}

export default function Contact() {
  const [audience, setAudience] = useState<Audience>("team");

  const tabs: { key: Audience; label: string; hint: string }[] = [
    { key: "team", label: "For a team", hint: "Workplace or educator team" },
    { key: "parent", label: "For my child", hint: "Kids bootcamps, ages 8 to 17" },
  ];

  return (
    <>
      <PageMeta
        {...pageSeo("/contact")}
      />

      {/* HERO */}
      <section className="relative bg-[#F9F5EE] overflow-hidden border-b border-black/5">
        <div className="max-w-6xl mx-auto px-6 md:px-14 pt-32 md:pt-40 pb-12 md:pb-14">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[2px] uppercase text-[#0B4D5F] mb-6 block font-sans">
              Get in touch
            </span>
            <h1 className="font-serif text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.05] tracking-tight text-[#0D0C18] mb-6 max-w-3xl">
              Tell us what you are trying to do.
            </h1>
            <p className="text-base md:text-lg text-[#4A4860] max-w-2xl leading-relaxed font-sans">
              Whether you are looking at AI for your team or a bootcamp for your child, start here
              and we will come back to you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FORMS */}
      <section className="bg-white px-6 md:px-14 py-16 md:py-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-12 lg:gap-14 items-start">
          <Reveal>
            <div className="space-y-4 mb-10">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setAudience(tab.key)}
                  aria-pressed={audience === tab.key}
                  data-testid={`button-audience-${tab.key}`}
                  className={`w-full text-left px-6 py-5 rounded-2xl border-2 transition-all font-sans ${
                    audience === tab.key
                      ? "border-[#0B4D5F] bg-[#0B4D5F]/5"
                      : "border-black/8 hover:border-black/20"
                  }`}
                >
                  <span
                    className={`block font-serif text-lg font-bold mb-1 ${
                      audience === tab.key ? "text-[#0B4D5F]" : "text-[#0D0C18]"
                    }`}
                  >
                    {tab.label}
                  </span>
                  <span className="block text-sm text-[#4A4860]">{tab.hint}</span>
                </button>
              ))}
            </div>

            <img
              src={asset(IMAGES.eventSpace)}
              alt="The heARTspace venue on Kabarnet Road, Nairobi, where AkiliNest kids bootcamps run"
              width="1200"
              height="800"
              loading="lazy"
              decoding="async"
              className="rounded-2xl object-cover w-full aspect-[3/2] shadow-md mb-8"
            />

            <div className="space-y-5 border-t border-black/8 pt-8">
              <div>
                <span className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#0B4D5F] mb-1.5 block font-sans">
                  Email
                </span>
                <a
                  href="mailto:akilinest@gmail.com"
                  className="text-sm text-[#0D0C18] hover:text-[#E8693A] transition-colors font-sans"
                  data-testid="link-contact-email"
                >
                  akilinest@gmail.com
                </a>
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#0B4D5F] mb-1.5 block font-sans">
                  WhatsApp
                </span>
                <a
                  href="https://wa.me/254702820845"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#0D0C18] hover:text-[#E8693A] transition-colors font-sans"
                  data-testid="link-contact-whatsapp"
                >
                  +254 702 820 845
                </a>
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#0B4D5F] mb-1.5 block font-sans">
                  Kids bootcamp venue
                </span>
                <p className="text-sm text-[#0D0C18] leading-relaxed font-sans">{VENUE}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="bg-[#F9F5EE] border border-black/8 rounded-3xl p-7 md:p-9">
              <h2 className="font-serif text-2xl font-bold text-[#0D0C18] mb-2">
                {audience === "team" ? "Book a team discovery call" : "Join the waiting list"}
              </h2>
              <p className="text-sm text-[#4A4860] leading-relaxed mb-7 font-sans">
                {audience === "team"
                  ? "A short call to understand how your team works today and where AI could genuinely help."
                  : "Dates for the next kids bootcamp are being confirmed. Leave your details and we will contact you first."}
              </p>
              {audience === "team" ? <TeamEnquiryForm /> : <ParentForm />}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
