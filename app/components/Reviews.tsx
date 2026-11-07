import { Icon } from "./Icons";
import { WHATSAPP_URL } from "./constants";

// Avaliações reais do Google Meu Negócio do escritório.
const reviews = [
  {
    name: "Simone Idalino",
    text: "Um escritório sério, competente e comprometido com a justiça. Atendimento humano, profissionalismo e excelência em cada detalhe. Parabéns pelo trabalho impecável!",
  },
  {
    name: "Jaqueline Medeiros",
    text: "Ambiente de qualidade, excelente profissionais, ótimo atendimento recomendo, querem qualidade no seu serviço super indico.",
  },
  {
    name: "Heitor Gabryel",
    text: "Maravilhosa 🤩🤩",
  },
];

function ReviewCard({ name, text }: { name: string; text: string }) {
  return (
    <div className="shot">
      <div className="bubble">
        <div className="nm">
          {name} <span>Google</span>
        </div>
        <div className="stars">★★★★★</div>
        {text}
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="trust">
      <div className="wrap">
        <span className="eyebrow">Confiança</span>
        <h2 className="title">O que nossos clientes dizem</h2>
        <div className="shots">
          <ReviewCard {...reviews[0]} />
          <div className="shot big">
            <div className="bubble">
              <b>5,0</b>
              <div className="stars">★★★★★</div>
              com base em 7 avaliações no Google
            </div>
          </div>
          <ReviewCard {...reviews[1]} />
          <ReviewCard {...reviews[2]} />
        </div>
        <div className="center">
          <a className="b-dark" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            Solicitar atendimento <Icon name="wa" className="ico" />
          </a>
        </div>
      </div>
    </section>
  );
}
