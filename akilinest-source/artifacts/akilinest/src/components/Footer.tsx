import { Link } from "wouter";
import { EVENT_REGISTRATION_URL, SIGNUP_LABEL, VENUE, WHATSAPP_URL } from "@/content/events";

const footerLinks = {
  programmes: [
    { label: "Sprouts (Ages 6-8)", href: "/programme" },
    { label: "Explorers (Ages 9-11)", href: "/programme" },
    { label: "Builders (Ages 12-14)", href: "/programme" },
    { label: "Innovators (Ages 15-17)", href: "/programme" },
    { label: "Parent Intelligence Series", href: "/pis" },
    { label: "Holiday Camps & Events", href: "/events" },
  ],
  resources: [
    { label: "Parent Guides (Blog)", href: "/blog" },
    { label: "Nairobi Parent's Guide", href: "/parents-guide" },
    { label: "Future Skills Report 2026", href: "/future-skills-report" },
    { label: "FAQ", href: "/faq" },
  ],
  learn: [
    { label: "About AkiliNest", href: "/about" },
    { label: "Our Philosophy", href: "/about" },
    { label: "Full Programme Overview", href: "/programme" },
    { label: "Contact Us", href: "/contact" },
    { label: "Partner With Us", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#09080F] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-14 pb-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 mb-14 pb-10 border-b border-white/5">
          <div className="max-w-md">
            <Link href="/" data-testid="link-footer-logo" className="inline-block mb-5">
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="AkiliNest"
                width="400"
                height="120"
                loading="eager"
                decoding="async"
                className="h-16 md:h-20 w-auto max-w-[220px] object-contain object-left"
              />
            </Link>
            <p className="font-serif text-lg md:text-xl font-bold text-white/90 leading-snug mb-3">
              Raising original thinkers for the AI era in Nairobi.
            </p>
            <p className="text-sm text-white/35 leading-relaxed font-sans">
              Creative intelligence programmes for children aged 6-17. Think first, create boldly, use AI wisely.
            </p>
          </div>

          <a
            href={EVENT_REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center bg-[#E8693A] hover:bg-[#C4561A] text-white font-bold text-sm px-8 py-4 rounded-full transition-all font-sans self-start"
            data-testid="button-footer-signup"
          >
            {SIGNUP_LABEL}
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          <div>
            <h5 className="text-[10px] font-bold tracking-[1.5px] uppercase text-white/30 mb-5 font-sans">Programmes</h5>
            <div className="flex flex-col gap-2.5">
              {footerLinks.programmes.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/45 hover:text-white transition-colors font-sans"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-[10px] font-bold tracking-[1.5px] uppercase text-white/30 mb-5 font-sans">Resources</h5>
            <div className="flex flex-col gap-2.5">
              {footerLinks.resources.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/45 hover:text-white transition-colors font-sans"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-[10px] font-bold tracking-[1.5px] uppercase text-white/30 mb-5 font-sans">Learn</h5>
            <div className="flex flex-col gap-2.5">
              {footerLinks.learn.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/45 hover:text-white transition-colors font-sans"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h5 className="text-[10px] font-bold tracking-[1.5px] uppercase text-white/30 mb-5 font-sans">Contact</h5>
            <div className="flex flex-col gap-3 text-sm text-white/45 font-sans">
              <p className="leading-relaxed">{VENUE}</p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" data-testid="link-footer-whatsapp">
                +254 702 820 845
              </a>
              <a href="mailto:akilinest@gmail.com" className="hover:text-white transition-colors" data-testid="link-footer-email">
                akilinest@gmail.com
              </a>
              <Link href="/contact" className="hover:text-white transition-colors font-semibold text-[#E8693A]" data-testid="link-footer-contact">
                Get in touch
              </Link>
            </div>

            <div className="mt-6">
              <h6 className="text-[10px] font-bold tracking-[1.5px] uppercase text-white/25 mb-3 font-sans">Session times</h6>
              <div className="text-sm text-white/40 space-y-1 font-sans">
                <p>Mon-Fri: Holiday camps (July & August)</p>
                <p>Sat: Weekend programmes</p>
                <p>WhatsApp: Mon-Sat inquiries</p>
              </div>
            </div>
          </div>
        </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-6 border-t border-white/5">
          <p className="text-xs text-white/25 font-sans">© 2026 AkiliNest. All rights reserved. Nairobi, Kenya.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-sans">
            <Link href="/privacy" className="text-white/30 hover:text-white/60 transition-colors">
              Privacy policy
            </Link>
            <Link href="/terms" className="text-white/30 hover:text-white/60 transition-colors">
              Terms of service
            </Link>
            <Link href="/faq" className="text-white/30 hover:text-white/60 transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
