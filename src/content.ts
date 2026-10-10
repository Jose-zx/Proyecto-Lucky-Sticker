// Todo el texto de la página en un solo lugar: cambia aquí nombre, precios y copys.
export const site = {
  name: "SuerteSticker",
  nav: ["Rifas", "Cómo funciona", "Ganadores", "Contacto"],
  demo: "Ver sorteos",
  signup: "Crear cuenta",
  pre: "Tu número de la suerte, en un sticker",
  title: "Gana Hoy",
  sub: "Compra tu sticker numerado, participa en rifas verificadas y sigue cada sorteo en vivo.",
  ctaPrimary: "Comprar mi sticker",
  ctaSecondary: "Ver rifas activas",
};

// PRECIOS DE EJEMPLO (COP): reemplázalos por los reales.
export const packs = [
  { id: "p3", qty: 3, price: 15000, featured: false, perks: ["3 números únicos", "Envío digital inmediato"] },
  { id: "p5", qty: 5, price: 22000, featured: true, perks: ["5 números únicos", "Envío digital inmediato", "Menor precio por sticker"] },
  { id: "p7", qty: 7, price: 28000, featured: false, perks: ["7 números únicos", "Envío digital inmediato", "El mejor precio por sticker"] },
];

export const footer = {
  legal: [
    { label: "Términos y condiciones", href: "#terminos" },
    { label: "Política de privacidad", href: "#privacidad" },
    { label: "Reglas de la rifa", href: "#reglas" },
  ],
  contact: ["soporte@tudominio.com", "WhatsApp: +57 000 000 0000"],
  notice: "Solo para mayores de 18 años. Juega con responsabilidad.",
};
