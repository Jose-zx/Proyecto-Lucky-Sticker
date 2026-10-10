import { ChevronDown } from "lucide-react";
import { site } from "../content";

const Sunburst = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white"
       strokeWidth="2" strokeLinecap="round" aria-label={site.name} role="img">
    <path d="M12 2v5M12 17v5M2 12h5M17 12h5M4.9 4.9l3.5 3.5M15.6 15.6l3.5 3.5M19.1 4.9l-3.5 3.5M8.4 15.6l-3.5 3.5" />
  </svg>
);

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-transparent px-6 py-4">
      <a href="/" aria-label={site.name}><Sunburst /></a>

      <div className="hidden md:flex items-center gap-8 font-sans text-sm font-medium text-white/80">
        {site.nav.map((item, i) => (
          <a key={item} href="#" className="flex items-center gap-1 hover:text-white transition-colors">
            {item}
            {i === 0 && <ChevronDown size={16} />}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-6 font-sans text-sm">
        <a href="#" className="hidden sm:block font-medium text-white/80 hover:text-white transition-colors">
          {site.demo}
        </a>
        <a href="#" className="rounded-full bg-white px-5 py-2.5 font-semibold text-black">
          {site.signup}
        </a>
      </div>
    </nav>
  );
}
