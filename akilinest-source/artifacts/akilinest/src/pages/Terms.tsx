import { Link } from "wouter";
import { Reveal } from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";
import { WHATSAPP_URL } from "@/content/events";

export default function Terms() {
  return (
    <>
      <PageMeta
        title="Terms of Service | AkiliNest"
        description="Terms and conditions for AkiliNest programmes, enrolment, and website use."
        path="/terms"
      />
      <div className="relative h-[30vh] min-h-[220px] flex flex-col justify-end overflow-hidden bg-gradient-to-br from-[#0B4D5F] to-[#0D0C18]">
        <div className="relative z-10 px-6 md:px-14 pb-10 pt-24">
          <h1 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-bold text-white tracking-tight">Terms of Service</h1>
          <p className="text-sm text-white/50 mt-2">Last updated: June 2026</p>
        </div>
      </div>
      <section className="bg-[#F9F5EE] px-6 md:px-14 py-16">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <Reveal>
            <h2>Programme Enrolment</h2>
            <p>By enrolling your child in an AkiliNest programme, you agree to the following terms:</p>
            <ul>
              <li>All fees must be paid in full before the programme start date unless otherwise agreed.</li>
              <li>Your child must be within the stated age range for the programme stage.</li>
              <li>AkiliNest reserves the right to adjust schedules, facilitators, or venues with reasonable notice.</li>
              <li>Parents or guardians are responsible for the safe drop-off and pick-up of their children.</li>
            </ul>

            <h2>Cancellation & Refunds</h2>
            <ul>
              <li>Cancellations made 7 or more days before the programme start date: full refund minus a small administrative fee.</li>
              <li>Cancellations made 3–6 days before: 50% refund.</li>
              <li>Cancellations made less than 3 days before: no refund.</li>
              <li>AkiliNest reserves the right to cancel a programme if insufficient enrolment occurs. In this case, a full refund will be provided.</li>
            </ul>

            <h2>Behaviour & Safety</h2>
            <p>AkiliNest is committed to providing a safe, respectful, and inclusive environment for all children. We reserve the right to remove a child from a programme if their behaviour poses a risk to themselves or others, without refund.</p>

            <h2>Photography & Media</h2>
            <p>We occasionally take photographs and videos during our programmes for promotional purposes. We will seek explicit consent before using any images. You may opt out at any time.</p>

            <h2>Website Use</h2>
            <p>All content on this website (text, images, logos, videos) is the property of AkiliNest unless otherwise stated. You may not reproduce, distribute, or modify any content without written permission.</p>

            <h2>Liability</h2>
            <p>AkiliNest takes reasonable precautions to ensure the safety of all participants. However, we are not liable for loss, damage, or injury arising from participation in our programmes, except where caused by our negligence.</p>

            <h2>Governing Law</h2>
            <p>These terms are governed by the laws of the Republic of Kenya. Any disputes shall be resolved through mediation or the courts of Kenya.</p>

            <h2>Contact</h2>
            <p>For questions about these terms, contact <a href="mailto:akilinest@gmail.com">akilinest@gmail.com</a> or WhatsApp <a href={WHATSAPP_URL}>+254 702 820 845</a>.</p>

            <p className="text-sm text-[#5C5A70] mt-8"><Link href="/" className="text-[#0B4D5F] hover:underline">← Back to home</Link></p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
