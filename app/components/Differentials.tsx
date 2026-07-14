import Image from "next/image";

const items = [
  {
    icon: "/assets/imgIcon1.svg",
    title: "Foco em Previdenciário",
    desc: "Advocacia especializada exclusivamente em Direito Previdenciário — não somos generalistas.",
  },
  {
    icon: "/assets/imgIcon2.svg",
    title: "Transparência Total",
    desc: "Você acompanha cada etapa do processo com clareza, sem surpresas ou jargões jurídicos desnecessários.",
  },
  {
    icon: "/assets/imgIcon3.svg",
    title: "Atendimento Online",
    desc: "100% online para todo o Brasil. Sem necessidade de deslocamento, com a mesma qualidade do atendimento presencial.",
  },
];

export default function Differentials() {
  return (
    <section className="bg-panel py-20">
      <div className="mx-auto max-w-[1152px] px-6">
        <div className="flex flex-col items-center text-center">
          <p className="font-sans text-base font-semibold uppercase tracking-[0.12em] text-gold">
            Por que nos escolher
          </p>
          <h2 className="mt-3 font-sans text-3xl font-bold text-heading sm:text-4xl">
            Nossos diferenciais
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="flex flex-col items-start p-8">
              <div className="flex size-10 items-center justify-center rounded-[4px] bg-gold">
                <Image
                  src={item.icon}
                  alt=""
                  aria-hidden
                  width={24}
                  height={24}
                  className="size-6"
                />
              </div>
              <h3 className="mt-5 font-sans text-xl font-bold text-heading">
                {item.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-ink">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
