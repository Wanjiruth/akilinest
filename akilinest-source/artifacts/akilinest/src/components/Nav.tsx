import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Programme", href: "/programme" },
    { name: "Parent Series", href: "/pis" },
    { name: "Events", href: "/events" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white ${
        isScrolled
          ? "shadow-[0_2px_20px_rgba(0,0,0,0.08)] py-2"
          : "border-b border-black/5 py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
        {/* LOGO */}
        <Link href="/" data-testid="link-home-logo" className="shrink-0">
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="AkiliNest"
            className={`object-contain transition-all duration-300 ${
              isScrolled ? "h-10 md:h-12" : "h-11 md:h-14"
            }`}
          />
        </Link>

        {/* NAV LINKS */}
        <nav className="flex items-center gap-0.5 md:gap-1 flex-wrap justify-end">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative text-[11px] md:text-[12px] px-2 md:px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
                location === link.href
                  ? "text-[#E8693A] font-bold"
                  : "text-[#0F172A]/75 hover:text-[#0F172A] font-semibold"
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
            className="bg-[#E8693A] hover:bg-[#C4561A] text-white px-4 md:px-5 py-2 rounded-full text-[11px] md:text-[12px] font-bold transition-all ml-1 whitespace-nowrap shadow-sm hover:shadow-md"
            data-testid="button-nav-cta"
          >
            Get in Touch
          </Link>
        </nav>
      </div>
    </header>
  );
}
