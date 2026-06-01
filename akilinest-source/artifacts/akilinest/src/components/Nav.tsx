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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#E6E8EA] shadow-md py-1 border-b border-black/5" : "bg-[#E6E8EA]/95 py-1.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
        {/* LOGO */}
        <Link href="/" data-testid="link-home-logo" className="shrink-0">
          <div className="flex items-center justify-center transition-all duration-300">
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="AkiliNest"
              className={`object-contain transition-all duration-300 ${
                isScrolled ? "h-10 md:h-12" : "h-12 md:h-14 lg:h-16"
              }`}
            />
          </div>
        </Link>

        {/* ALL NAV LINKS — always visible */}
        <nav className="flex items-center gap-1 flex-wrap justify-end">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[11px] md:text-[12px] font-bold px-2 md:px-3 py-1 rounded-lg transition-colors whitespace-nowrap ${
                location === link.href
                  ? "text-[#E8693A]"
                  : "text-[#0F172A]/70 hover:text-[#0F172A]"
              }`}
              data-testid={`link-nav-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-[#E8693A] hover:bg-[#C4561A] text-white px-3 md:px-4 py-1.5 rounded-full text-[11px] md:text-[12px] font-black transition-all ml-1 whitespace-nowrap shadow-sm"
            data-testid="button-nav-cta"
          >
            Get in Touch
          </Link>
        </nav>
      </div>
    </header>
  );
}
