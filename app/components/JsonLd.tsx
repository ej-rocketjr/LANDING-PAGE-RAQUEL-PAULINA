import { EMAIL, INSTAGRAM, OAB, OFFICES, PHONES } from "./constants";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "../site";

// Dados estruturados (schema.org) para o Google entender o escritório,
// a advogada e os dois endereços de atendimento.
const ADDRESSES = [
  { street: "Av. Getúlio Vargas, 259", city: "Penedo", state: "AL" },
  { street: "Rua Santo Amaro, 680", city: "Propriá", state: "SE" },
];

const AREAS = [
  "Aposentadoria",
  "BPC/LOAS",
  "Auxílio por incapacidade",
  "Revisão de benefícios do INSS",
  "Empréstimos consignados",
  "Regime Próprio de Previdência Social (RPPS)",
  "Pensão por morte",
];

export default function JsonLd() {
  const attorneyId = `${SITE_URL}/#advogada`;

  const offices = OFFICES.map((office, i) => ({
    "@type": "LegalService",
    "@id": `${SITE_URL}/#escritorio-${ADDRESSES[i].city.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")}`,
    name: `Raquel Paulina Advocacia · ${office.city}`,
    url: SITE_URL,
    image: `${SITE_URL}/opengraph-image`,
    logo: `${SITE_URL}/assets/Logotipo-Raquel.svg`,
    description: SITE_DESCRIPTION,
    telephone: `+55 ${PHONES[i]?.label ?? PHONES[0].label}`,
    email: EMAIL,
    priceRange: "$$",
    hasMap: office.mapsUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESSES[i].street,
      addressLocality: ADDRESSES[i].city,
      addressRegion: ADDRESSES[i].state,
      addressCountry: "BR",
    },
    areaServed: [{ "@type": "Country", name: "Brasil" }],
    knowsAbout: AREAS,
    founder: { "@id": attorneyId },
    sameAs: [INSTAGRAM.url],
  }));

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: "pt-BR",
      },
      {
        "@type": "Person",
        "@id": attorneyId,
        name: "Raquel Paulina",
        honorificPrefix: "Dra.",
        jobTitle: "Advogada especialista em Direito Previdenciário",
        identifier: OAB,
        image: `${SITE_URL}/assets/foto.jpg`,
        email: EMAIL,
        url: SITE_URL,
        knowsAbout: AREAS,
        sameAs: [INSTAGRAM.url],
      },
      ...offices,
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Escapa "<" para evitar injeção de HTML no JSON.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
