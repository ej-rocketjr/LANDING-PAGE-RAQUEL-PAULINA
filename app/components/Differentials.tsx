import { Icon } from "./Icons";

const items = [
  {
    icon: "team",
    title: ["FOCO EM", "PREVIDENCIÁRIO"],
    desc: "Advocacia especializada exclusivamente em Direito Previdenciário. Não somos generalistas.",
  },
  {
    icon: "usercheck",
    title: ["TRANSPARÊNCIA", "TOTAL"],
    desc: "Você acompanha cada etapa do processo com clareza, sem surpresas ou jargões jurídicos desnecessários.",
  },
  {
    icon: "loc",
    title: ["ATENDIMENTO", "ONLINE"],
    desc: "100% online para todo o Brasil, com a mesma qualidade do atendimento presencial.",
  },
];

export default function Differentials() {
  return (
    <section className="diffs">
      <div className="wrap">
        <span className="eyebrow">Por que escolher</span>
        <h2 className="title">Nossos Diferenciais</h2>
        <div className="box">
          {items.map((item) => (
            <div className="diff" key={item.icon}>
              <Icon name={item.icon} />
              <h3>
                {item.title[0]}
                <br />
                {item.title[1]}
              </h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
