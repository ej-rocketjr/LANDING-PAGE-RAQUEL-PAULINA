import Image from "next/image";

const highlights = [
  "Análise criteriosa de cada caso para a melhor estratégia",
  "Atendimento personalizado com foco total no cliente",
  "Honorários de êxito — você só paga se ganhar",
];

export default function About() {
  return (
    <section id="sobre" className="bg-ink py-24 text-white">
      <div className="mx-auto grid max-w-[1152px] items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        {/* Photo */}
        <div className="relative mx-auto aspect-square w-full max-w-[458px] overflow-hidden rounded-[10px]">
          <Image
            src="/assets/imgContainer.png"
            alt="Raquel Paulina, advogada previdenciária"
            width={434}
            height={543}
            sizes="(max-width: 1024px) 90vw, 600px"
            className="block h-full w-full object-cover object-top"
          />
        </div>

        {/* Text */}
        <div className="max-w-xl">
          <h2 className="font-display text-5xl text-gold">Raquel Paulina</h2>

          <span className="mt-4 inline-flex items-center rounded-[19px] bg-white/10 px-3.5 py-1.5 font-sans text-[10px] uppercase tracking-[0.18em] text-white">
            oab/al 00.000
          </span>

          <p className="mt-5 font-body text-base leading-relaxed text-cream/70">
            Advogada especializada em Direito Previdenciário com mais de 10 anos
            de experiência em casos complexos junto ao INSS e ao RPPS. Formada em
            Direito com pós-graduação em Direito Previdenciário.
          </p>

          <ul className="mt-8 flex flex-col gap-4">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold-muted" />
                <span className="font-body text-sm text-cream/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
