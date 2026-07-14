import Image from "next/image";
import { WHATSAPP_URL } from "./constants";

const points = [
  "100% online para todo o Brasil",
  "Primeira consulta sem custo",
  "Honorários de êxito",
];

export default function CtaBanner() {
  return (
    <section id="contato" className="bg-ink py-20 text-white">
      <div className="mx-auto flex max-w-[896px] flex-col items-center px-6 text-center">
        <h2 className="font-sans text-3xl font-bold text-gold">
          Não sabe se tem direito? A gente analisa pra você.
        </h2>

        <ul className="mt-8 flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row sm:gap-8">
          {points.map((p) => (
            <li key={p} className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-white" />
              <span className="font-body text-base font-medium text-white">
                {p}
              </span>
            </li>
          ))}
        </ul>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex h-15 items-center gap-2 rounded-2xl bg-green px-8 py-4 font-sans text-lg uppercase text-green-ink shadow-[0px_4px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] transition-transform hover:-translate-y-0.5"
        >
          <Image
            src="/assets/imgIcon4.svg"
            alt=""
            aria-hidden
            width={20}
            height={20}
            className="size-5"
          />
          Conversar pelo WhatsApp
        </a>
      </div>
    </section>
  );
}
