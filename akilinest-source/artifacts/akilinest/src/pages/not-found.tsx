import { Link } from "wouter";
import PageMeta from "@/components/PageMeta";
import { WHATSAPP_URL } from "@/content/events";

export default function NotFound() {
  return (
    <>
      <PageMeta
        title="Page Not Found | AkiliNest"
        description="The page you're looking for doesn't exist. Visit AkiliNest home page or contact us on WhatsApp."
        path="/404"
      />

      <div className="min-h-screen w-full flex items-center justify-center bg-[#F9F5EE] px-6">
        <div className="text-center max-w-lg">
          <span className="text-[8rem] font-serif font-black text-[#0B4D5F]/10 leading-none block mb-2">404</span>
          <h1 className="font-serif text-4xl font-bold text-[#0D0C18] mb-4">Page not found</h1>
          <p className="text-base text-[#4A4860] mb-8 leading-relaxed">
            The page you're looking for doesn't exist or has been moved.<br />
            Let us help you find your way.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-[#E8693A] text-white font-bold text-sm px-8 py-4 rounded-full hover:bg-[#C4561A] transition-all"
            >
              Back to home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-[#0B4D5F] text-[#0B4D5F] font-semibold text-sm px-8 py-4 rounded-full hover:bg-[#0B4D5F] hover:text-white transition-all"
            >
              Contact us
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-black/8">
            <p className="text-sm text-[#5C5A70] mb-4">Popular pages:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { label: "Home", href: "/" },
                { label: "Programmes", href: "/programme" },
                { label: "Events", href: "/events" },
                { label: "Blog", href: "/blog" },
                { label: "FAQ", href: "/faq" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs font-semibold text-[#0B4D5F] bg-[#E0F3F8] px-4 py-2 rounded-full hover:bg-[#0B4D5F] hover:text-white transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
