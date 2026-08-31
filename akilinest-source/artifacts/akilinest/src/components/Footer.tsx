import { Link } from "wouter";
import { VENUE, WHATSAPP_URL } from "@/content/events";
import { TEAM_CTA_LABEL } from "@/content/teams";

const footerLinks = {
  teams: [
    { label: "AkiliNest Teams", href: "/teams" },
    { label: "Corporate teams", href: "/teams/corporate" },
    { label: "Educator teams", href: "/teams/educators" },
    { label: "Book a discovery call", href: "/contact" },
  ],
  kids: [
    { label: "Kids AI bootcamps", href: "/kids-ai-bootcamps" },
    { label: "Programme stages", href: "/programme" },
    { label: "Parent Intelligence Series", href: "/pis" },
    { label: "Camps & events", href: "/events" },
    { label: "Parents' guide", href: "/parents-guide" },
  ],
  company: [
    { label: "About AkiliNest", href: "/about" },
    { label: "Insights", href: "/insights" },
    { label: "H.E.R.O. 2026", href: "/hero-2026" },
    { label: "Parent guides (blog)", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
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
                src={`${import.meta.env.BASE_URL}logo-wordmark-light.png`}
                alt="AkiliNest"
                width="587"
                height="437"
                loading="lazy"
                decoding="async"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </Link>
            <p className="font-serif text-lg md:text-xl font-bold text-white/90 leading-snug mb-3">
              Practical AI upskilling for Kenyan teams.
            </p>
            <p className="text-sm text-white/35 leading-relaxed font-sans">
              AI workflows and responsible everyday use for workplace and educator teams, plus
              creative AI bootcamps for young people aged 8 to 17.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center bg-[#E8693A] hover:bg-[#C4561A] text-white font-bold text-sm px-8 py-4 rounded-full transition-all font-sans self-start"
            data-testid="button-footer-cta"
          >
            {TEAM_CTA_LABEL}
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          <div>
            <h5 className="text-[10px] font-bold tracking-[1.5px] uppercase text-white/30 mb-5 font-sans">
              For Teams
            </h5>
            <div className="flex flex-col gap-1">
              {footerLinks.teams.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/45 hover:text-white transition-colors font-sans py-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-[10px] font-bold tracking-[1.5px] uppercase text-white/30 mb-5 font-sans">
              Kids Bootcamps
            </h5>
            <div className="flex flex-col gap-1">
              {footerLinks.kids.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/45 hover:text-white transition-colors font-sans py-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-[10px] font-bold tracking-[1.5px] uppercase text-white/30 mb-5 font-sans">
              Company
            </h5>
            <div className="flex flex-col gap-1">
              {footerLinks.company.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/45 hover:text-white transition-colors font-sans py-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h5 className="text-[10px] font-bold tracking-[1.5px] uppercase text-white/30 mb-5 font-sans">
              Contact
            </h5>
            <div className="flex flex-col gap-3 text-sm text-white/45 font-sans">
              <p className="leading-relaxed">{VENUE}</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors py-1"
                data-testid="link-footer-whatsapp"
              >
                +254 702 820 845
              </a>
              <a
                href="mailto:akilinest@gmail.com"
                className="hover:text-white transition-colors py-1"
                data-testid="link-footer-email"
              >
                akilinest@gmail.com
              </a>
              <Link
                href="/contact"
                className="hover:text-white transition-colors font-semibold text-[#E8693A] py-1"
                data-testid="link-footer-contact"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-6 border-t border-white/5">
          <p className="text-xs text-white/25 font-sans">
            &copy; 2026 AkiliNest. All rights reserved. Nairobi, Kenya.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-sans">
            <Link href="/privacy" className="text-white/30 hover:text-white/60 transition-colors py-1.5">
              Privacy policy
            </Link>
            <Link href="/terms" className="text-white/30 hover:text-white/60 transition-colors py-1.5">
              Terms of service
            </Link>
            <Link href="/faq" className="text-white/30 hover:text-white/60 transition-colors py-1.5">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
