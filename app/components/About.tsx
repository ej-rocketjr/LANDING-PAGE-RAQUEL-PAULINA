import Image from "next/image";

export default function About() {
  return (
    <section className="about" id="sobre">
      <div className="wrap">
        <div className="acopy">
          <span className="eyebrow">Sobre nós</span>
          <h2>Especialista em Direito Previdenciário junto ao INSS e ao RPPS</h2>
          <p>
            Advogada especializada em Direito Previdenciário com mais de 10 anos
            de experiência em casos complexos junto ao INSS e ao RPPS. Formada em
            Direito com pós-graduação em Direito Previdenciário.
          </p>
          <p>
            Cada caso recebe uma análise criteriosa para a melhor estratégia, com
            atendimento personalizado e foco total no cliente. Trabalhamos com
            honorários de êxito: você só paga se ganhar.{" "}
            <b>Mais que advocacia, compromisso em cada detalhe.</b>
          </p>
          <div className="resp">
            <span>ADVOGADA RESPONSÁVEL</span>
            <b>DRA. RAQUEL PAULINA</b>
          </div>
        </div>
        <div className="aphoto">
          <Image
            src="/assets/imgContainer.png"
            alt="Dra. Raquel Paulina"
            width={434}
            height={543}
            sizes="(max-width: 820px) 90vw, 340px"
          />
        </div>
      </div>
      <div className="seal">
        <Image src="/assets/Logotipo-rp.svg" alt="" width={88} height={88} />
      </div>
    </section>
  );
}
