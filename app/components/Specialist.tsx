import { Icon } from "./Icons";
import { BRAZIL_STATES, BRAZIL_VIEWBOX } from "./brazilStates";
import { WHATSAPP_URL } from "./constants";

// Estados com escritório presencial, destacados em dourado no mapa.
const PRESENCIAL = ["al", "se"];

export default function Specialist() {
  return (
    <section className="spec" id="contato">
      <div className="wrap">
        <div className="card">
          <div className="map">
            <svg viewBox={BRAZIL_VIEWBOX} role="img" aria-label="Mapa do Brasil com Alagoas e Sergipe em destaque">
              {BRAZIL_STATES.map((uf) => (
                <path key={uf.id} d={uf.d} className={PRESENCIAL.includes(uf.id) ? "on" : undefined} />
              ))}
              <path className="arc" d="M583 233 C 480 300, 380 360, 330 520" />
              <path className="arc" d="M573 247 C 520 330, 470 420, 420 600" />
              <path className="arc" d="M583 233 C 450 180, 300 160, 150 230" />
            </svg>
            <div className="tagp">
              Atendimento
              <br />
              presencial
              <br />
              AL · SE
            </div>
            <div className="online">
              <Icon name="pin" />
              <span>
                <b>Atendimento ONLINE</b>
                <br />
                em todo o Brasil
              </span>
            </div>
          </div>
          <div className="stext">
            <span className="pill">Atendimento especializado</span>
            <h3>Não sabe se tem direito? A gente analisa pra você.</h3>
            <p>
              Atuação exclusiva em Direito Previdenciário com foco em resultados
              concretos para cada situação, com primeira consulta sem custo e
              honorários de êxito.
            </p>
            <p>
              Pelo atendimento online, levamos para todo o Brasil a mesma
              qualidade do atendimento presencial oferecido nos nossos
              escritórios de Penedo (AL) e Propriá (SE), sem necessidade de
              deslocamento.
            </p>
            <a className="b-dark" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Falar com especialista <Icon name="wa" className="ico" style={{ width: 18, height: 18 }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
