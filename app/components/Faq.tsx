import Image from "next/image";
import { WHATSAPP_URL } from "./constants";

const faqs = [
  {
    q: "Quando devo procurar um advogado previdenciário?",
    a: "Sempre que tiver um benefício negado, com valor abaixo do esperado, ou antes de dar entrada em um pedido. Uma análise prévia evita erros e aumenta as chances de sucesso.",
  },
  {
    q: "Quais tipos de benefícios do INSS existem?",
    a: "Aposentadorias, auxílio-doença, aposentadoria por invalidez, pensão por morte, salário-maternidade, auxílio-reclusão e o BPC-LOAS, entre outros.",
  },
  {
    q: "Qual a idade mínima para se aposentar?",
    a: "Após a reforma da Previdência, 62 anos para mulheres e 65 anos para homens, com tempo mínimo de contribuição. Há regras de transição para quem já contribuía.",
  },
  {
    q: "Como funciona a revisão de benefício?",
    a: "Analisamos o cálculo e o histórico do seu benefício para identificar valores pagos a menor e, quando cabível, ingressamos com o pedido de revisão.",
  },
  {
    q: "Os honorários são cobrados antecipadamente?",
    a: "Não. Trabalhamos com honorários de êxito: você só paga se ganhar a causa. A primeira consulta é gratuita.",
  },
  {
    q: "O atendimento é feito para todo o Brasil?",
    a: "Sim. O atendimento é 100% online, com a mesma qualidade do presencial, para clientes de qualquer estado do país.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-white py-24">
      <div className="mx-auto grid max-w-[1152px] gap-12 px-6 lg:grid-cols-[1fr_508px] lg:gap-20">
        {/* Heading + CTA */}
        <div className="lg:pt-3">
          <h2 className="max-w-[330px] font-sans text-3xl font-semibold leading-tight text-heading">
            Dúvidas comuns sobre INSS e benefícios
          </h2>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 hidden h-15 w-fit items-center gap-2 rounded-2xl bg-green px-8 py-4 font-sans text-lg uppercase text-green-ink shadow-[0px_4px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] transition-transform hover:-translate-y-0.5 lg:inline-flex"
          >
            <Image
              src="/assets/imgIcon4.svg"
              alt=""
              aria-hidden
              width={20}
              height={20}
              className="size-5"
            />
            tirar minha dúvida
          </a>
        </div>

        {/* Accordion */}
        <div>
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group border-b border-[rgba(26,20,8,0.12)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between py-5 font-body text-base font-medium text-heading marker:hidden">
                {f.q}
                <Image
                  src="/assets/imgIcon5.svg"
                  alt=""
                  aria-hidden
                  width={18}
                  height={18}
                  className="size-[18px] shrink-0 transition-transform duration-200 group-open:rotate-180"
                />
              </summary>
              <p className="pb-5 font-body text-sm leading-relaxed text-body-muted">
                {f.a}
              </p>
            </details>
          ))}

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex h-15 w-fit items-center gap-2 rounded-2xl bg-green px-8 py-4 font-sans text-lg uppercase text-green-ink shadow-[0px_4px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] transition-transform hover:-translate-y-0.5 lg:hidden"
          >
            <Image
              src="/assets/imgIcon4.svg"
              alt=""
              aria-hidden
              width={20}
              height={20}
              className="size-5"
            />
            tirar minha dúvida
          </a>
        </div>
      </div>
    </section>
  );
}
