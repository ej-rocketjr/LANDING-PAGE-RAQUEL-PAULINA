import Image from "next/image";
import { Icon } from "./Icons";
import { WHATSAPP_URL } from "./constants";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="wrap">
        <div className="copy">
          <h1 style={{ margin: 0 }}>
            <Image
              className="logo"
              src="/assets/Logotipo-Raquel.svg"
              alt="Raquel Paulina Advogada"
              width={268}
              height={160}
              priority
            />
            <span className="sr-only">
              Raquel Paulina, advogada previdenciária em Penedo (AL) e Propriá (SE)
            </span>
          </h1>
          <p className="lead">
            Problema com seu <b>benefício</b> do INSS ou da previdência do
            servidor público? Analisamos seu caso e mostramos o melhor caminho
            para resolver seu benefício.
          </p>
          <p className="loc">
            <Icon name="pin" />
            Atendimento presencial em Penedo (AL) e Propriá (SE), e online em
            todo o Brasil.
          </p>
          <div className="btns">
            <a className="b-wa" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <span>
                Atendimento escritório
                <br />
                agende aqui
              </span>
              <Icon name="wa" className="ico" />
            </a>
            <a className="b-ghost" href="#areas">
              Áreas de atuação <Icon name="down" />
            </a>
          </div>
          <p className="tag">
            Mais que advocacia, <b>compromisso em cada detalhe.</b>
          </p>
        </div>

        <div className="photo">
          <Image
            className="ghost"
            src="/assets/raquel-foto-de-perfil.svg"
            alt=""
            aria-hidden
            width={440}
            height={460}
          />
          <Image
            className="main"
            src="/assets/raquel-foto-de-perfil.svg"
            alt="Dra. Raquel Paulina"
            width={440}
            height={460}
            priority
          />
          <div className="nametag">
            <b>Dra. Raquel Paulina</b>
            <span>Especialista em Direito Previdenciário</span>
          </div>
          <div className="seal">
            <Image src="/assets/Logotipo-rp.svg" alt="" width={66} height={66} />
          </div>
        </div>
      </div>
    </section>
  );
}
