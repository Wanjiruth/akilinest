import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { EVENT_REGISTRATION_URL, SIGNUP_LABEL_SHORT } from "@/content/events";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Programme", href: "/programme" },
    { name: "Events", href: "/events" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0B1220]/95 backdrop-blur-md shadow-lg"
            : "bg-gradient-to-b from-[#0B1220]/85 to-transparent"
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
            className="flex items-center shrink-0 w-[148px] md:w-[200px]"
          >
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="AkiliNest"
              width="400"
              height="120"
              loading="eager"
              decoding="async"
              className={`w-full h-auto object-contain object-left transition-all duration-300 ${
                isScrolled ? "max-h-11 md:max-h-12" : "max-h-14 md:max-h-[3.75rem]"
              }`}
            />
          </Link>

          <nav className="hidden md:flex items-center gap-0.5 justify-end flex-1 min-w-0">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-[12px] px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
                  location === link.href
                    ? "text-[#E8693A] font-bold"
                    : "text-white/90 hover:text-white font-semibold"
                }`}
                data-testid={`link-nav-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.name}
                {location === link.href && (
                  <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#E8693A]" />
                )}
              </Link>
            ))}
            <a
              href={EVENT_REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E8693A] hover:bg-[#C4561A] text-white px-5 py-2.5 rounded-full text-[12px] font-bold transition-all ml-2 whitespace-nowrap shadow-sm hover:shadow-md font-sans"
              data-testid="button-nav-cta"
            >
              {SIGNUP_LABEL_SHORT}
            </a>
          </nav>

          <div className="flex md:hidden items-center gap-2 shrink-0">
            <a
              href={EVENT_REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E8693A] hover:bg-[#C4561A] text-white px-4 py-2 rounded-full text-[11px] font-bold transition-all whitespace-nowrap font-sans"
              data-testid="button-nav-cta-mobile"
            >
              {SIGNUP_LABEL_SHORT}
            </a>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              className="flex flex-col justify-center items-center w-9 h-9 gap-[5px]"
              data-testid="button-hamburger"
            >
              <span className={`block w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-400 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />

        <div
          className={`absolute top-0 right-0 h-full w-72 bg-[#0B1220] shadow-2xl flex flex-col transition-transform duration-400 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/8">
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="AkiliNest"
              width="140"
              height="40"
              loading="eager"
              decoding="async"
              className="h-10 w-auto max-w-[140px] object-contain"
            />
            <button onClick={() => setMenuOpen(false)} className="text-white/50 hover:text-white text-2xl leading-none">
              &times;
            </button>
          </div>

          <nav className="flex flex-col px-4 py-6 gap-1 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm px-4 py-3 rounded-xl transition-all font-semibold ${
                  location === link.href
                    ? "bg-[#E8693A]/15 text-[#E8693A]"
                    : "text-white/75 hover:text-white hover:bg-white/5"
                }`}
                data-testid={`link-mobile-nav-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="px-6 pb-8">
            <a
              href={EVENT_REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#E8693A] hover:bg-[#C4561A] text-white px-5 py-3.5 rounded-full text-sm font-bold transition-all font-sans"
              data-testid="button-mobile-cta"
            >
              Sign up now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
