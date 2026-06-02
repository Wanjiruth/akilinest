import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [location]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Programme", href: "/programme" },
    { name: "Parent Series", href: "/pis" },
    { name: "Events", href: "/events" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0B1220]/90 backdrop-blur-md shadow-lg py-2"
            : "bg-transparent py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between relative">
          {/* LOGO SPACER */}
          <div className="w-[110px] md:w-[150px] shrink-0" />

          {/* LOGO OVERLAY */}
          <Link href="/" data-testid="link-home-logo" className="absolute left-4 md:left-8 top-0 shrink-0 flex items-center">
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="AkiliNest"
              className={`object-contain transition-all duration-300 origin-top-left ${
                isScrolled ? "h-16 md:h-24 mt-2" : "h-24 md:h-[160px] mt-2 md:mt-3"
              }`}
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-0.5 md:gap-1 justify-end flex-1">
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
            <Link
              href="/contact"
              className="bg-[#E8693A] hover:bg-[#C4561A] text-white px-5 py-2 rounded-full text-[12px] font-bold transition-all ml-1 whitespace-nowrap shadow-sm hover:shadow-md"
              data-testid="button-nav-cta"
            >
              Get in Touch
            </Link>
          </nav>

          {/* MOBILE RIGHT — CTA + Hamburger */}
          <div className="flex md:hidden items-center gap-3 ml-auto">
            <Link
              href="/contact"
              className="bg-[#E8693A] hover:bg-[#C4561A] text-white px-4 py-2 rounded-full text-[11px] font-bold transition-all whitespace-nowrap"
              data-testid="button-nav-cta-mobile"
            >
              Get in Touch
            </Link>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              className="flex flex-col justify-center items-center w-8 h-8 gap-[5px] group"
              data-testid="button-hamburger"
            >
              <span className={`block w-6 h-[2px] bg-white rounded-full transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-6 h-[2px] bg-white rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block w-6 h-[2px] bg-white rounded-full transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-400 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />

        {/* Slide-in panel */}
        <div className={`absolute top-0 right-0 h-full w-72 bg-[#0B1220] shadow-2xl flex flex-col transition-transform duration-400 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}>
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/8">
            <span className="text-white font-bold text-sm tracking-wide">Menu</span>
            <button onClick={() => setMenuOpen(false)} className="text-white/50 hover:text-white text-2xl leading-none">&times;</button>
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
            <Link
              href="/contact"
              className="block w-full text-center bg-[#E8693A] hover:bg-[#C4561A] text-white px-5 py-3.5 rounded-full text-sm font-bold transition-all"
              data-testid="button-mobile-cta"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
