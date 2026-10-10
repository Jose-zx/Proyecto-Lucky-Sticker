import { footer, site } from "../content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-14 text-white/70">
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold text-white">{site.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-[1.65]">Stickers numerados para participar en rifas verificadas.</p>
        </div>
        <nav aria-label="Legal" className="flex flex-col gap-3 text-sm">
          {footer.legal.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white transition-colors">{l.label}</a>
          ))}
        </nav>
        <div className="flex flex-col gap-3 text-sm">
          {footer.contact.map((c) => <span key={c}>{c}</span>)}
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-5xl border-t border-white/10 pt-6 text-xs text-white/50">
        <p>{footer.notice}</p>
        <p className="mt-2">© {new Date().getFullYear()} {site.name}. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
