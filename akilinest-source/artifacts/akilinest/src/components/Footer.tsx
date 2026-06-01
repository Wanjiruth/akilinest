import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-[#09080F] border-t border-white/5 pt-16 pb-8 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <div className="lg:col-span-1">
            <Link href="/" data-testid="link-footer-logo" className="inline-block pt-8 pr-4">
              <img
                  src={`${import.meta.env.BASE_URL}logo.png`}
                  alt="AkiliNest"
                  className="h-12 md:h-14 object-contain mb-8 origin-left transform scale-[2] md:scale-[2.4]"
                />
            </Link>
            <p className="text-sm text-white/30 leading-relaxed max-w-[220px]">
              A thinking-first creative studio for children growing up in the AI era. Based in Nairobi, Kenya.
            </p>
          </div>
          <div>
            <h5 className="text-[10px] font-bold tracking-[2px] uppercase text-white/25 mb-5">Programmes</h5>
            <div className="flex flex-col gap-3">
              <Link href="/programme" className="text-sm text-white/40 hover:text-white transition-colors" data-testid="link-footer-sprouts">Sprouts, Ages 6–8</Link>
              <Link href="/programme" className="text-sm text-white/40 hover:text-white transition-colors" data-testid="link-footer-explorers">Explorers, Ages 9–11</Link>
              <Link href="/programme" className="text-sm text-white/40 hover:text-white transition-colors" data-testid="link-footer-builders">Builders, Ages 12–14</Link>
              <Link href="/programme" className="text-sm text-white/40 hover:text-white transition-colors" data-testid="link-footer-innovators">Innovators, Ages 15–17</Link>
            </div>
          </div>
          <div>
            <h5 className="text-[10px] font-bold tracking-[2px] uppercase text-white/25 mb-5">For Families</h5>
            <div className="flex flex-col gap-3">
              <Link href="/pis" className="text-sm text-white/40 hover:text-white transition-colors" data-testid="link-footer-pis">Parent Series</Link>
              <Link href="/events" className="text-sm text-white/40 hover:text-white transition-colors" data-testid="link-footer-events">Holiday Camps</Link>
              <Link href="/events" className="text-sm text-white/40 hover:text-white transition-colors" data-testid="link-footer-weekend">Weekend Sessions</Link>
              <Link href="/faq" className="text-sm text-white/40 hover:text-white transition-colors" data-testid="link-footer-faq">FAQ</Link>
            </div>
          </div>
          <div>
            <h5 className="text-[10px] font-bold tracking-[2px] uppercase text-white/25 mb-5">Contact</h5>
            <div className="flex flex-col gap-3">
              <a href="mailto:akilinest@gmail.com" className="text-sm text-white/40 hover:text-white transition-colors" data-testid="link-footer-email">akilinest@gmail.com</a>
              <span className="text-sm text-white/40">Nairobi, Kenya</span>
              <Link href="/contact" className="text-sm text-white/40 hover:text-white transition-colors" data-testid="link-footer-partnerships">Partnerships</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-white/5">
          <p className="text-xs text-white/20">© 2026 AkiliNest. All rights reserved.</p>
          <div className="flex gap-3">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" data-testid="link-footer-instagram" className="w-9 h-9 bg-white/5 hover:bg-white/12 rounded-lg flex items-center justify-center text-xs font-bold text-white/40 hover:text-white transition-all">IG</a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" data-testid="link-footer-linkedin" className="w-9 h-9 bg-white/5 hover:bg-white/12 rounded-lg flex items-center justify-center text-xs font-bold text-white/40 hover:text-white transition-all">LI</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
