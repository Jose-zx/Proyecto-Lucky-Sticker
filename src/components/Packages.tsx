import { Check } from "lucide-react";
import { packs } from "../content";

const cop = new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 });

export default function Packages() {
  return (
    <section id="paquetes" className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-serif text-4xl leading-[1.1] sm:text-5xl">Elige tu paquete</h2>
        <p className="mt-4 max-w-xl text-lg leading-[1.65] text-white/70">
          Cada sticker trae un número único para la rifa. Más stickers, más oportunidades de ganar.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {packs.map((p) => (
            <article
              key={p.id}
              className={`flex flex-col rounded-2xl border p-8 ${
                p.featured ? "border-[#3054ff] bg-[#3054ff]/10" : "border-white/10 bg-white/[0.03]"
              }`}
            >
              {p.featured && <p className="mb-4 text-sm font-medium text-[#b4c0ff]">El más elegido</p>}
              <p className="font-serif text-7xl leading-none">{p.qty}</p>
              <p className="mt-2 text-white/70">stickers</p>

              <p className="mt-8 text-3xl font-semibold tracking-tight">{cop.format(p.price)}</p>
              <p className="mt-1 text-sm text-white/60">{cop.format(Math.round(p.price / p.qty))} por sticker</p>

              <ul className="mt-8 flex-1 space-y-3 text-sm text-white/80">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2">
                    <Check size={16} className="mt-0.5 shrink-0 text-[#b4c0ff]" />
                    {perk}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={`mt-8 rounded-full px-5 py-3 font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                  p.featured ? "bg-[#3054ff] text-white hover:bg-[#2040e0]" : "bg-white text-[#0a0400] hover:bg-white/90"
                }`}
              >
                Comprar {p.qty} stickers
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
