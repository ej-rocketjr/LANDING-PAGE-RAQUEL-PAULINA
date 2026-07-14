import Image from "next/image";
import { WHATSAPP_URL } from "./constants";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-ink text-white"
    >
      <div className="mx-auto grid max-w-[1152px] items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-8 lg:py-28">
        {/* Text column */}
        <div className="max-w-xl">
          <span className="inline-flex items-center rounded-full bg-[rgba(100,98,98,0.2)] px-3.5 py-1.5 font-sans text-[10px] uppercase tracking-[0.18em] text-gold border-[0.8px] border-white/10 backdrop-blur ">
            Assessoria jurídica especializada
          </span>
          

          <h1 className="mt-6 font-display text-4xl leading-[1.05] sm:text-[38px]">
            <span className="text-gold">
              Problema com seu benefício do INSS ou da{" "}
            </span>
            <span className="text-white">previdência do servidor público?</span>

            
          </h1>

          <p className="mt-6 max-w-md font-sans text-lg font-medium tracking-tight text-gold">
            Analisamos seu caso e mostramos o melhor caminho para resolver seu
            benefício
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-[5px] bg-green px-6 font-sans text-sm font-bold tracking-wide text-black shadow-[0px_4px_24px_0px_rgba(149,108,107,0.36)] transition-transform hover:-translate-y-0.5"
            >
              <Image
                src="/assets/imgIcon.svg"
                alt=""
                aria-hidden
                width={16}
                height={16}
                className="size-4"
              />
              Entre em contato
            </a>
            <a
              href="#servicos"
              className="inline-flex h-11 items-center justify-center rounded-[5px] border-[0.8px] border-gold bg-white/[0.13] px-6 font-sans text-sm font-bold tracking-wide text-[#d9d9d9] transition-colors hover:bg-white/20"
            >
              Conheça os serviços
            </a>
          </div>
        </div>

        {/* Photo column */}
        <div className="relative mx-auto w-full max-w-[410px]">
          <Image
            src="/assets/foto.jpg"
            alt="Drª. Raquel Paulina"
            width={425}
            height={511}
            priority
            sizes="(max-width: 1024px) 90vw, 410px"
            className="w-full h-auto rounded-[22px] object-cover"
          />
          <div className="absolute inset-x-4 bottom-4 flex flex-col items-center gap-1.5 rounded-[11px] bg-[rgba(100,98,98,0.4)] px-4 py-3 text-center backdrop-blur-sm">
            <p className="font-display text-xl tracking-wide text-white">
              Drª. Raquel Paulina
            </p>
            <p className="font-sans text-[13px] tracking-wide text-white/90">
              Advogado previdenciarista - OAB/SE 11.080
            </p>
          </div>
        </div>
      </div>

      {/* Diagonal divider into the white services section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-11">
        <svg
          viewBox="0 0 1152 44"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <path d="M0 44H1152V0L0 44Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
