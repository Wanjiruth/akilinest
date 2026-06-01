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
      className={`fixed top-0 md:top-4 left-0 md:left-1/2 md:-translate-x-1/2 w-full md:w-[95%] max-w-6xl z-50 transition-all duration-300 md:rounded-2xl md:border md:border-white/10 ${
        isScrolled ? "bg-[#483f2a]/95 backdrop-blur-md shadow-lg py-2" : "bg-[#6b6952] py-3 md:shadow-md"
      }`}
    >
      <div className="px-4 md:px-6 flex items-center justify-between gap-4">
        {/* LOGO */}
        <Link href="/" data-testid="link-home-logo" className="shrink-0">
          <div className="rounded-xl px-2 py-1 flex items-center justify-center backdrop-blur-sm transition-all duration-300">
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="AkiliNest"
              className={`object-contain drop-shadow-xl transition-all duration-300 ${
                isScrolled ? "h-10 md:h-14" : "h-12 md:h-16 lg:h-20"
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
              className={`text-[12px] md:text-[13px] font-medium px-2 md:px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                location === link.href
                  ? "text-[#E8693A]"
                  : "text-white/80 hover:text-white"
              }`}
              data-testid={`link-nav-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-[#E8693A] hover:bg-[#C4561A] text-white px-4 md:px-5 py-2 rounded-full text-[12px] md:text-[13px] font-bold transition-all ml-1 whitespace-nowrap shadow-sm"
            data-testid="button-nav-cta"
          >
            Get in Touch
          </Link>
        </nav>
      </div>
    </header>
  );
}
