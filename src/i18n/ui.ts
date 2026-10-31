export const languages = {
  en: "English",
  es: "Español",
};

export const defaultLang = "en";

export const ui = {
  en: {
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",
    "footer.contact": "Contact",

    "bio.seo.title": "Gadmin — Sell and Conty agencies",
    "bio.seo.description":
      "Gadmin runs your sales and your finances. Sell closes WhatsApp sales 24 hours a day. Conty turns every inflow and outflow into a clear decision.",
    "bio.seo.keywords":
      "gadmin, gadmin sell, gadmin conty, agency, whatsapp sales, finances, smes, business owner",
    "bio.headline": "The agency for the person behind the business",
    "bio.tagline":
      "We handle your sales. We organize your money. We give you your time back.",
    "bio.ecosystem.title": "The Gadmin agencies",
    "bio.sell.name": "Sell",
    "bio.sell.badge": "24/7",
    "bio.sell.tagline":
      "We answer, follow up, and close sales on WhatsApp at any hour.",
    "bio.conty.name": "Conty",
    "bio.conty.badge": "Finance",
    "bio.conty.tagline":
      "Every cent in and out, measured and turned into next week's decision.",
    "bio.ecosystem.sync": "Sell, Conty, or both",
    "bio.links.sell": "I want Sell on my WhatsApp",
    "bio.links.conty": "I want clarity on my money",
    "bio.links.gadmin": "I want my business to grow",
    "bio.links.email": "contacto@gadmin.app",
    "bio.links.tiktok": "Go to TikTok",
    "bio.links.instagramSell": "Go to Sell on Instagram",
    "bio.links.instagram": "Go to Instagram",
  },

  es: {
    "footer.privacy": "Privacidad",
    "footer.terms": "Términos",
    "footer.contact": "Contacto",

    "bio.seo.title": "Gadmin — Agencias Sell y Conty",
    "bio.seo.description":
      "Gadmin opera tu atención comercial y tus finanzas. Sell cierra ventas en WhatsApp las 24 horas. Conty ordena cada ingreso y cada gasto para que decidas con claridad.",
    "bio.seo.keywords":
      "gadmin, gadmin sell, gadmin conty, agencia, whatsapp, ventas, finanzas, pymes, dueño de negocio",
    "bio.headline": "Agencia para quien está detrás del negocio",
    "bio.tagline":
      "Atendemos tus ventas. Ordenamos tu dinero. Te devolvemos el tiempo.",
    "bio.ecosystem.title": "Las agencias de Gadmin",
    "bio.sell.name": "Sell",
    "bio.sell.badge": "24/7",
    "bio.sell.tagline":
      "Respondemos, damos seguimiento y cerramos ventas en WhatsApp a cualquier hora.",
    "bio.conty.name": "Conty",
    "bio.conty.badge": "Finanzas",
    "bio.conty.tagline":
      "Cada ingreso y cada gasto, medidos y convertidos en la decisión de la semana.",
    "bio.ecosystem.sync": "Sell, Conty o las dos",
    "bio.links.sell": "Quiero que Sell atienda mi WhatsApp",
    "bio.links.conty": "Quiero claridad sobre mi dinero",
    "bio.links.gadmin": "Quiero que mi negocio crezca",
    "bio.links.email": "contacto@gadmin.app",
    "bio.links.tiktok": "Ir a TikTok",
    "bio.links.instagramSell": "Ir al Instagram de Sell",
    "bio.links.instagram": "Ir a Instagram",
  },
} as const;

export type Lang = keyof typeof ui;
export type TranslationKey = keyof typeof ui.en;
