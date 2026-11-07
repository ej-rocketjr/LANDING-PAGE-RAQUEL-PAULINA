import { Icon } from "./Icons";

const areas = [
  {
    icon: "retire",
    title: "APOSENTADORIAS",
    items: [
      "Aposentadoria por idade",
      "Aposentadoria por tempo de contribuição",
      "Aposentadoria especial",
      "Aposentadoria rural",
      "Análise do CNIS",
      "Planejamento previdenciário",
    ],
  },
  {
    icon: "care",
    title: "BENEFÍCIOS POR INCAPACIDADE",
    items: [
      "Auxílio-doença",
      "Aposentadoria por invalidez",
      "BPC-LOAS para idosos",
      "BPC-LOAS para pessoas com deficiência",
    ],
  },
  {
    icon: "review",
    title: "REVISÕES E CONSIGNADOS",
    items: [
      "Correção de valores incorretos",
      "Inclusão de vínculos no CNIS",
      "Revisão da vida toda",
      "Descontos indevidos no benefício",
      "Fraudes e empréstimos não autorizados",
    ],
  },
  {
    icon: "gov",
    title: "SERVIDORES E PENSÕES",
    items: [
      "Servidores públicos (RPPS)",
      "Pensão por morte",
      "Auxílio-reclusão",
      "Salário-maternidade",
    ],
  },
];

export default function PracticeAreas() {
  return (
    <section className="areas" id="areas">
      <div className="wrap">
        <span className="eyebrow">Como podemos te ajudar?</span>
        <h2 className="title">Conheça nossas áreas de atuação</h2>
        <div className="grid">
          {areas.map((area) => (
            <article className="acard" key={area.title}>
              <header>
                <Icon name={area.icon} />
                <h3>{area.title}</h3>
              </header>
              <ul>
                {area.items.map((item, i) => (
                  <li key={item}>
                    <Icon name="check" />
                    {item}
                    {i === area.items.length - 1 ? "." : ";"}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
      <Icon name="chev" className="notch-bottom" style={{ color: "var(--black)" }} />
    </section>
  );
}
