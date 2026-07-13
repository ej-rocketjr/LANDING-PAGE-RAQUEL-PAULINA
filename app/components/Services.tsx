const services = [
  {
    n: "01",
    title: "Aposentadorias",
    desc: "Aposentadoria por idade, por tempo de contribuição, especial, por invalidez e rural. Análise completa do histórico previdenciário.",
  },
  {
    n: "02",
    title: "Benefícios por Incapacidade",
    desc: "Auxílio-doença, aposentadoria por invalidez e benefício de prestação continuada para incapacitados permanentes.",
  },
  {
    n: "03",
    title: "Planejamento Previdenciário",
    desc: "Análise do CNIS e simulação das melhores datas e modalidades de aposentadoria para maximizar o valor do benefício.",
  },
  {
    n: "04",
    title: "BPC-LOAS",
    desc: "Benefício assistencial para idosos e pessoas com deficiência em situação de vulnerabilidade socioeconômica.",
  },
  {
    n: "05",
    title: "Revisões de Benefício",
    desc: "Correção de valores incorretos, inclusão de vínculos e remunerações no CNIS, revisão da vida toda e tese do marco temporal.",
  },
  {
    n: "06",
    title: "Servidores Públicos (RPPS)",
    desc: "Direitos previdenciários de servidores estaduais e municipais vinculados ao Regime Próprio de Previdência Social.",
  },
  {
    n: "07",
    title: "Empréstimos Consignados",
    desc: "Revisão e cancelamento de descontos indevidos em benefícios do INSS, incluindo fraudes e contratos não autorizados.",
  },
  {
    n: "08",
    title: "Pensões e Auxílios",
    desc: "Pensão por morte, auxílio-reclusão, salário-maternidade e demais benefícios para dependentes e familiares.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-white py-20">
      <div className="mx-auto max-w-[1152px] px-6">
        {/* Section header */}
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 border-b border-[rgba(26,20,8,0.12)] pb-8 text-center">
          <p className="font-sans text-base uppercase tracking-[0.12em] text-gold">
            como podemos te ajudar
          </p>
          <h2 className="font-sans text-3xl font-bold text-heading sm:text-4xl">
            O que posso fazer por você
          </h2>
          <p className="max-w-md font-body text-base text-body-muted">
            Atuação exclusiva em Direito Previdenciário com foco em resultados
            concretos para cada situação.
          </p>
        </div>

        {/* Cards grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article
              key={s.n}
              className="flex flex-col rounded-2xl bg-ink-card p-8 text-white"
            >
              <span className="font-mono text-[11px] tracking-[0.1em] text-gold-muted">
                {s.n}
              </span>
              <h3 className="mt-4 font-sans text-lg font-semibold text-gold">
                {s.title}
              </h3>
              <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-white/90">
                {s.desc}
              </p>
              <a
                href="#contato"
                className="mt-6 inline-flex w-fit items-center rounded-[4px] border border-white px-2.5 py-2 font-sans text-base font-bold text-gold transition-colors hover:border-gold hover:bg-white/5"
              >
                Saiba mais
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
