// Dados de contato centralizados: altere aqui e o site inteiro acompanha.

const WA_MESSAGE = encodeURIComponent(
  "Olá Dra. Raquel Paulina!\nGostaria de Agendar um Atendimento",
);

// WhatsApp do escritório de Penedo, usado em todos os botões de agendamento.
export const WHATSAPP_URL = `https://wa.me/5582991332000?text=${WA_MESSAGE}`;

export const OAB = "OAB/SE 11.080";
export const EMAIL = "raquelpaulinaadv@gmail.com";
export const INSTAGRAM = {
  handle: "@raquelpaulina.adv",
  url: "https://www.instagram.com/raquelpaulina.adv/",
};

export const PHONES = [
  { label: "(82) 99133-2000", city: "Penedo" },
  { label: "(79) 98815-9595", city: "Propriá" },
];

export const OFFICES = [
  {
    region: "Escritório Alagoas",
    city: "Penedo/AL",
    address: "Av. Getúlio Vargas, 259, Penedo/AL",
    mapsUrl: "https://maps.app.goo.gl/rDQ9M6P3wDcQLMEJ6",
    embedQuery: "Av. Getúlio Vargas, 259, Penedo - AL",
  },
  {
    region: "Escritório Sergipe",
    city: "Propriá/SE",
    address: "Rua Santo Amaro, 680, Propriá/SE",
    mapsUrl: "https://maps.app.goo.gl/h5vckKFQfZZTkDvy6",
    embedQuery: "Rua Santo Amaro, 680, Propriá - SE",
  },
];
