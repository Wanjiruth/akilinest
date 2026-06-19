import { Link } from "wouter";
import { Reveal } from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";
import { WHATSAPP_URL, VENUE } from "@/content/events";

export default function Privacy() {
  return (
    <>
      <PageMeta
        title="Privacy Policy | AkiliNest"
        description="How AkiliNest collects, uses, and protects your personal information. Your privacy matters to us."
        path="/privacy"
      />
      <div className="relative h-[30vh] min-h-[220px] flex flex-col justify-end overflow-hidden bg-gradient-to-br from-[#0B4D5F] to-[#0D0C18]">
        <div className="relative z-10 px-6 md:px-14 pb-10 pt-24">
          <h1 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-bold text-white tracking-tight">Privacy Policy</h1>
          <p className="text-sm text-white/50 mt-2">Last updated: June 2026</p>
        </div>
      </div>
      <section className="bg-[#F9F5EE] px-6 md:px-14 py-16">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <Reveal>
            <h2>Information We Collect</h2>
            <p>When you contact AkiliNest via our website, WhatsApp, email, or registration forms, we collect the personal information you provide: your name, email address, phone number, and your child's age or stage. We use this information solely to communicate with you about AkiliNest programmes, events, and enrolment.</p>

            <h2>How We Use Your Information</h2>
            <ul>
              <li>To respond to your enquiries and registrations</li>
              <li>To send programme updates, event reminders, and enrolment confirmations</li>
              <li>To improve our services and offerings</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2>Data Sharing</h2>
            <p>We do not sell, trade, or share your personal information with third parties except where required by law or with service providers who assist in operating our programmes (e.g., Google Forms for registration, WhatsApp for communication). These providers are contractually bound to protect your data.</p>

            <h2>Data Retention</h2>
            <p>We retain your personal information for as long as necessary to provide our services and communicate with you. You may request deletion of your data at any time by contacting us.</p>

            <h2>Your Rights</h2>
            <p>Under Kenyan data protection law (Data Protection Act, 2019), you have the right to: access your personal data, correct inaccurate data, request deletion of your data, withdraw consent at any time, and lodge a complaint with the Office of the Data Protection Commissioner.</p>

            <h2>Security</h2>
            <p>We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction.</p>

            <h2>Contact Us</h2>
            <p>For any questions about this privacy policy or to exercise your data rights, contact us at <a href="mailto:akilinest@gmail.com">akilinest@gmail.com</a> or WhatsApp <a href={WHATSAPP_URL}>+254 702 820 845</a>.</p>

            <p className="text-sm text-[#5C5A70] mt-8"><Link href="/" className="text-[#0B4D5F] hover:underline">← Back to home</Link></p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
