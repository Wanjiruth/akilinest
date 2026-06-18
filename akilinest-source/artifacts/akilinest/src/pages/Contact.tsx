import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Reveal } from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";
import { eventInterestOptions } from "@/content/events";

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", stage: "", interest: eventInterestOptions[0], message: "" });
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast({ title: "Please fill in your name and email", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      if (apiUrl) {
        const res = await fetch(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        if (res.ok) {
          setForm({ name: "", email: "", stage: "", interest: eventInterestOptions[0], message: "" });
          toast({ title: "Message sent", description: "We'll be in touch shortly. Thank you for your interest in AkiliNest." });
        } else {
          throw new Error("Server error");
        }
      } else {
        // Fallback: open WhatsApp chat (user must complete send)
        const message = `Hello, I'm ${form.name} (${form.email}). Stage: ${form.stage || 'N/A'}. Interest: ${form.interest}. Message: ${form.message || 'N/A'}.`;
        const waNumber = '254702820845';
        const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
        if (typeof window !== 'undefined') window.open(waUrl, '_blank', 'noopener,noreferrer');
        setForm({ name: "", email: "", stage: "", interest: eventInterestOptions[0], message: "" });
        toast({ title: "Opening WhatsApp", description: "You'll be redirected to WhatsApp to send your message." });
      }
    } catch (err) {
      console.error(err);
      toast({ title: "Something went wrong", description: "Please email us directly at akilinest@gmail.com", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass = "w-full px-4 py-3 border-2 border-black/8 rounded-xl font-sans text-sm text-[#0D0C18] bg-white outline-none focus:border-[#0B4D5F] transition-colors font-light placeholder:text-[#5C5A70]/50";

  return (
    <>
      <PageMeta
        title="Contact & Register | AkiliNest Nairobi"
        description="Register your child for AkiliNest programmes, holiday camps, or taster sessions. WhatsApp 0702 820 845 or email akilinest@gmail.com."
        path="/contact"
        keywords={["register AkiliNest", "contact creative studio Nairobi", "enrol child Nairobi"]}
      />
      <div className="relative" style={{ height: "40vh", minHeight: "280px" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D0C18] to-[#1A2030]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/80 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-14 pb-12 pt-24">
          <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-white/35 mb-3 block">Get in Touch</span>
          <h1 className="font-serif text-[clamp(2.4rem,5vw,5rem)] font-black text-white tracking-tight leading-tight">Let's talk about<br />your child's future.</h1>
        </div>
      </div>

      <section className="bg-[#0D0C18] px-6 md:px-14 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 items-start">
          <Reveal>
            <h2 className="font-serif text-3xl font-black text-white mb-4">We are based in Nairobi</h2>
            <p className="text-base text-white/50 leading-relaxed font-light mb-8">Sessions run on weekends at HeartSpace on Kabernet Road. Holiday camps run Monday to Friday across all four stages. Reach out to learn more or to get on our early access list.</p>
            <div className="space-y-4">
              {[
                { icon: "Loc", label: "Location", val: "HeartSpace, Kabarnet Road (Opp. Rose of Sharon), Nairobi", href: undefined },
                { icon: "Mail", label: "Email", val: "akilinest@gmail.com", href: "mailto:akilinest@gmail.com" },
                { icon: "Tel", label: "WhatsApp", val: "0702820845", href: "https://wa.me/254702820845" },
                { icon: "Web", label: "Website", val: "akilinest.co.ke", href: undefined },
              ].map((row) => (
                <div key={row.label} className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-white/6 rounded-xl flex items-center justify-center text-sm shrink-0">{row.icon}</div>
                  <div>
                    <span className="text-[10px] font-bold tracking-[1.5px] uppercase text-white/30 block">{row.label}</span>
                    {row.href ? (
                      <a href={row.href} data-testid={`link-contact-${row.label.toLowerCase()}`} className="text-sm text-white/70 hover:text-white transition-colors font-light">{row.val}</a>
                    ) : (
                      <span className="text-sm text-white/70 font-light">{row.val}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form onSubmit={handleSubmit} className="bg-[#F9F5EE] rounded-3xl p-8 md:p-10 space-y-5">
              <div>
                <label className="block text-xs font-bold text-[#0D0C18] mb-2">Your name</label>
                <input type="text" placeholder="e.g. Amina Kariuki" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} data-testid="input-contact-name" />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#0D0C18] mb-2">Email address</label>
                <input type="email" placeholder="your@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} data-testid="input-contact-email" />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#0D0C18] mb-2">Child's stage</label>
                <select value={form.stage} onChange={(e) => setForm({ ...form, stage: e.target.value })} className={inputClass} data-testid="select-contact-stage">
                  <option value="">Select a stage</option>
                  <option>Ages 6 to 8: Sprouts</option>
                  <option>Ages 9 to 11: Explorers</option>
                  <option>Ages 12 to 14: Builders</option>
                  <option>Ages 15 to 17: Innovators</option>
                  <option>Parent Series only</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-[#0D0C18] mb-2">I am interested in</label>
                <select value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })} className={inputClass} data-testid="select-contact-interest">
                  {eventInterestOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-[#0D0C18] mb-2">Message (optional)</label>
                <textarea rows={4} placeholder="Anything you would like us to know..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClass} resize-none`} data-testid="textarea-contact-message" />
              </div>
              <button type="submit" disabled={submitting} data-testid="button-contact-submit" className="w-full bg-[#0B4D5F] hover:bg-[#1A7A97] disabled:opacity-60 text-white font-bold text-sm py-4 rounded-full transition-all">
                {submitting ? "Sending…" : "Send message"}
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
