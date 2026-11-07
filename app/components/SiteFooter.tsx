import Image from "next/image";
import { Icon } from "./Icons";
import { EMAIL, INSTAGRAM, OAB, OFFICES, PHONES } from "./constants";

// Mapa embutido do escritório principal (Penedo). Não precisa de chave de API.
const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(OFFICES[0].embedQuery)}&output=embed`;

export default function SiteFooter() {
  return (
    <>
      <div className="bar" />
      <footer className="foot">
        <svg className="notch-top" viewBox="0 0 52 26" aria-hidden="true">
          <path d="M0 0h52L26 26Z" fill="currentColor" />
        </svg>

        <div className="wrap cols">
          <Image
            className="flogo"
            src="/assets/Logotipo-Raquel.svg"
            alt="Raquel Paulina Advogada"
            width={285}
            height={170}
          />

          <div>
            <h2>Contatos:</h2>
            <ul>
              {PHONES.map((p) => (
                <li key={p.label}>
                  <Icon name="wa" />
                  {p.label} · {p.city}
                </li>
              ))}
              <li>
                <Icon name="ig" />
                <a href={INSTAGRAM.url} target="_blank" rel="noopener noreferrer">
                  {INSTAGRAM.handle}
                </a>
              </li>
              <li>
                <Icon name="mail" />
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
              {OFFICES.map((o, i) => (
                <li key={o.region} className={i === 0 ? "gap" : undefined}>
                  <Icon name="pin-o" />
                  {o.region}: {o.address}
                </li>
              ))}
              <li className="gap">
                <Icon name="shield" />
                {OAB}
              </li>
            </ul>
          </div>

          <div className="where">
            <h2>Onde nos encontrar:</h2>
            <div className="mapbox">
              <iframe
                src={MAP_EMBED}
                title={`Mapa do ${OFFICES[0].region}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="links">
                {OFFICES.map((o) => (
                  <a key={o.city} href={o.mapsUrl} target="_blank" rel="noopener noreferrer">
                    {o.city} no Maps <Icon name="ext" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="wrap bottom">
          <hr />
          <div className="copy">
            <p>
              Copyright {new Date().getFullYear()}. Todos os direitos reservados a{" "}
              <a href="https://rocketjr.com.br/" target="_blank" rel="noopener">
                Rocket Jr
              </a>
              .
            </p>
            <small>Raquel Paulina Advocacia · {OAB}</small>
          </div>
          <hr />
        </div>
      </footer>
      <a className="totop" href="#inicio" aria-label="Voltar ao topo">
        <Icon name="up" />
      </a>
    </>
  );
}
