import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { TEAM_CTA_LABEL, TEAM_CTA_LABEL_SHORT } from "@/content/teams";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "For Teams", href: "/teams" },
  { name: "Kids Bootcamps", href: "/kids-ai-bootcamps" },
  { name: "Insights", href: "/insights" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

/** A nav link is active on its own route and on any route nested beneath it. */
function isActive(location: string, href: string): boolean {
  return location === href || location.startsWith(`${href}/`);
}

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-[#F9F5EE]/95 backdrop-blur-md transition-all duration-300 ${
          isScrolled ? "shadow-sm border-b border-black/8" : "border-b border-black/5"
        }`}
      >
        <div
          className={`max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between gap-4 transition-all duration-300 ${
            isScrolled ? "h-[4.25rem]" : "h-[4.75rem] md:h-20"
          }`}
        >
          <Link
            href="/"
            data-testid="link-home-logo"
            className="flex items-center shrink-0"
            aria-label="AkiliNest home"
          >
            <img
              src={`${import.meta.env.BASE_URL}logo-wordmark.png`}
              alt="AkiliNest"
              width="587"
              height="437"
              loading="eager"
              decoding="async"
              className={`w-auto object-contain transition-all duration-300 ${
                isScrolled ? "h-11 md:h-12" : "h-12 md:h-16"
              }`}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1 justify-end flex-1 min-w-0">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-[13px] px-3.5 py-2 rounded-lg transition-all whitespace-nowrap font-sans ${
                  isActive(location, link.href)
                    ? "text-[#0B4D5F] font-bold"
                    : "text-[#0D0C18]/75 hover:text-[#0D0C18] font-semibold"
                }`}
                data-testid={`link-nav-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.name}
                {isActive(location, link.href) && (
                  <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#E8693A]" />
                )}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-[#E8693A] hover:bg-[#C4561A] text-white px-5 py-2.5 rounded-full text-[12px] font-bold transition-all ml-3 whitespace-nowrap shadow-sm hover:shadow-md font-sans"
              data-testid="button-nav-cta"
            >
              {TEAM_CTA_LABEL}
            </Link>
          </nav>

          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <Link
              href="/contact"
              className="bg-[#E8693A] hover:bg-[#C4561A] text-white px-4 py-2 rounded-full text-[11px] font-bold transition-all whitespace-nowrap font-sans"
              data-testid="button-nav-cta-mobile"
            >
              {TEAM_CTA_LABEL_SHORT}
            </Link>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="flex flex-col justify-center items-center w-9 h-9 gap-[5px]"
              data-testid="button-hamburger"
            >
              <span
                className={`block w-5 h-[2px] bg-[#0D0C18] rounded-full transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block w-5 h-[2px] bg-[#0D0C18] rounded-full transition-all duration-300 ${
                  menuOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-[2px] bg-[#0D0C18] rounded-full transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-[#0D0C18]/50 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        <div
          className={`absolute top-0 right-0 h-full w-72 bg-[#F9F5EE] shadow-2xl flex flex-col transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-black/8">
            <img
              src={`${import.meta.env.BASE_URL}logo-wordmark.png`}
              alt="AkiliNest"
              width="587"
              height="437"
              loading="eager"
              decoding="async"
              className="h-11 w-auto object-contain"
            />
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="text-[#0D0C18]/40 hover:text-[#0D0C18] text-2xl leading-none"
            >
              &times;
            </button>
          </div>

          <nav className="flex flex-col px-4 py-6 gap-1 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm px-4 py-3 rounded-xl transition-all font-semibold font-sans ${
                  isActive(location, link.href)
                    ? "bg-[#0B4D5F]/10 text-[#0B4D5F]"
                    : "text-[#0D0C18]/75 hover:text-[#0D0C18] hover:bg-black/5"
                }`}
                data-testid={`link-mobile-nav-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="px-6 pb-8">
            <Link
              href="/contact"
              className="block w-full text-center bg-[#E8693A] hover:bg-[#C4561A] text-white px-5 py-3.5 rounded-full text-sm font-bold transition-all font-sans"
              data-testid="button-mobile-cta"
            >
              {TEAM_CTA_LABEL}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
