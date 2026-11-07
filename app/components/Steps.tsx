function MagnifierArt() {
  return (
    <svg viewBox="0 0 170 170" aria-hidden="true">
      <circle cx="72" cy="72" r="54" fill="#efd9a0" stroke="#f3eadb" strokeWidth="8" />
      <circle cx="72" cy="72" r="46" fill="#e9cf8a" />
      <path d="M46 54a32 32 0 0 1 34-20" stroke="#fff" strokeWidth="6" strokeLinecap="round" fill="none" opacity=".8" />
      <path d="M110 112l28 28" stroke="#a8893a" strokeWidth="14" strokeLinecap="round" />
    </svg>
  );
}

function DocumentArt() {
  return (
    <svg viewBox="0 0 170 170" aria-hidden="true">
      <path d="M48 18h58l26 26v110H48Z" fill="#ece8ee" />
      <path d="M106 18v26h26Z" fill="#d9d3dc" />
      <path d="M90 66l-14 6v10c0 8 6 13 14 15 8-2 14-7 14-15V72Z" fill="#c9a84c" />
      <path d="M66 118h48M66 132h18M92 132h14" stroke="#161616" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

function ChatArt() {
  return (
    <svg viewBox="0 0 170 170" aria-hidden="true">
      <rect x="30" y="24" width="58" height="40" rx="8" fill="#ece8ee" />
      <path d="M44 60l-6 16 18-12Z" fill="#ece8ee" />
      <rect x="76" y="38" width="64" height="42" rx="8" fill="#e9cf8a" />
      <path d="M124 76l6 16-18-12Z" fill="#e9cf8a" />
      <circle cx="68" cy="110" r="12" fill="#c9a84c" />
      <circle cx="102" cy="106" r="12" fill="#e2bf62" />
      <path d="M48 148c0-14 9-22 20-22s20 8 20 22Z" fill="#161616" />
      <path d="M82 148c0-14 9-22 20-22s20 8 20 22Z" fill="#2b2b2b" />
    </svg>
  );
}

const steps = [
  {
    art: <MagnifierArt />,
    title: "Análise aprofundada do caso",
    desc: "Analisamos seu histórico previdenciário com critério, considerando todos os aspectos do caso. A primeira consulta é sem custo.",
  },
  {
    art: <DocumentArt />,
    title: "Estratégia jurídica personalizada",
    desc: "Mostramos o melhor caminho para o seu benefício e organizamos toda a documentação necessária.",
  },
  {
    art: <ChatArt />,
    title: "Acompanhamento até o resultado",
    desc: "Você acompanha cada etapa do processo com clareza e transparência, junto ao INSS ou ao RPPS.",
  },
];

export default function Steps() {
  return (
    <section className="steps-sec">
      <div className="wrap">
        <span className="eyebrow">Passo a passo</span>
        <h2 className="title">Entenda como funciona nosso atendimento</h2>
        <div className="steps">
          {steps.map((step) => (
            <article className="step" key={step.title}>
              {step.art}
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
