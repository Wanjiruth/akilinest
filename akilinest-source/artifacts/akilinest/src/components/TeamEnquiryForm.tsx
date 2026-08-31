import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { teamEnquiryInterests, teamSizeOptions } from "@/content/teams";

const WHATSAPP_NUMBER = "254702820845";

type TeamEnquiryFormProps = {
  /** Pre-selects the interest dropdown, e.g. from the educator page. */
  defaultInterest?: string;
};

/**
 * Team-side enquiry form. Posts to VITE_API_URL when configured, and otherwise
 * hands off to WhatsApp so an enquiry is never silently lost.
 */
export default function TeamEnquiryForm({ defaultInterest }: TeamEnquiryFormProps) {
  const { toast } = useToast();
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    teamSize: "",
    interest: defaultInterest ?? (teamEnquiryInterests[teamEnquiryInterests.length - 1] as string),
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.company || !form.name || !form.email) {
      toast({
        title: "Please add your organisation, name and work email",
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const payload = { ...form, source: "team-enquiry" };

      if (apiUrl) {
        const res = await fetch(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error("Server error");
        setForm({
          company: "",
          name: "",
          email: "",
          phone: "",
          teamSize: "",
          interest: defaultInterest ?? "Not sure yet",
          message: "",
        });
        toast({
          title: "Enquiry sent",
          description: "We will get back to you shortly to arrange a discovery call.",
        });
      } else {
        const lines = [
          `Team enquiry from ${form.name} at ${form.company}.`,
          `Work email: ${form.email}`,
          form.phone ? `Phone: ${form.phone}` : null,
          form.teamSize ? `Team size: ${form.teamSize}` : null,
          `Interested in: ${form.interest}`,
          form.message ? `Notes: ${form.message}` : null,
        ].filter(Boolean);
        const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
        if (typeof window !== "undefined") window.open(waUrl, "_blank", "noopener,noreferrer");
        toast({
          title: "Opening WhatsApp",
          description: "Send the message to reach us with your enquiry.",
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
    <form onSubmit={handleSubmit} className="space-y-5" data-testid="form-team-enquiry">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="te-company" className={labelClass}>
            Organisation <span className="text-[#E8693A]">*</span>
          </label>
          <input
            id="te-company"
            type="text"
            required
            placeholder="Your company or school"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className={inputClass}
            data-testid="input-team-company"
          />
        </div>
        <div>
          <label htmlFor="te-name" className={labelClass}>
            Your name <span className="text-[#E8693A]">*</span>
          </label>
          <input
            id="te-name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClass}
            data-testid="input-team-name"
          />
        </div>
        <div>
          <label htmlFor="te-email" className={labelClass}>
            Work email <span className="text-[#E8693A]">*</span>
          </label>
          <input
            id="te-email"
            type="email"
            required
            placeholder="you@organisation.co.ke"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClass}
            data-testid="input-team-email"
          />
        </div>
        <div>
          <label htmlFor="te-phone" className={labelClass}>
            Phone
          </label>
          <input
            id="te-phone"
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={inputClass}
            data-testid="input-team-phone"
          />
        </div>
        <div>
          <label htmlFor="te-size" className={labelClass}>
            Team size
          </label>
          <select
            id="te-size"
            value={form.teamSize}
            onChange={(e) => setForm({ ...form, teamSize: e.target.value })}
            className={inputClass}
            data-testid="select-team-size"
          >
            <option value="">Select team size</option>
            {teamSizeOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="te-interest" className={labelClass}>
            Interested in
          </label>
          <select
            id="te-interest"
            value={form.interest}
            onChange={(e) => setForm({ ...form, interest: e.target.value })}
            className={inputClass}
            data-testid="select-team-interest"
          >
            {teamEnquiryInterests.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="te-message" className={labelClass}>
          What would you like AI to help your team with?
        </label>
        <textarea
          id="te-message"
          rows={4}
          placeholder="The work that repeats every week is usually the best place to start."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${inputClass} resize-none`}
          data-testid="textarea-team-message"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        data-testid="button-team-submit"
        className="w-full bg-[#E8693A] hover:bg-[#C4561A] disabled:opacity-60 text-white font-bold text-sm py-4 rounded-full transition-all font-sans"
      >
        {submitting ? "Sending…" : "Request a discovery call"}
      </button>

      <p className="text-xs text-[#5C5A70] text-center font-sans">
        We use your details only to reply to this enquiry.
      </p>
    </form>
  );
}
