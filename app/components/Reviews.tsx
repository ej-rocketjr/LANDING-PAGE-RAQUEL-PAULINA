import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";

type Review = {
  name: string;
  meta: string;
  time: string;
  text: string;
  avatarColor: string;
};

const reviews: Review[] = [
  {
    name: "Simone Idalino",
    meta: "2 avaliações · 1 foto",
    time: "6 meses atrás",
    text: "Um escritório sério, competente e comprometido com a justiça. Atendimento humano, profissionalismo e excelência em cada detalhe. Parabéns pelo trabalho impecável!",
    avatarColor: "#8a6d3b",
  },
  {
    name: "Jaqueline Medeiros",
    meta: "1 avaliação",
    time: "um mês atrás",
    text: "Ambiente de qualidade, excelente profissionais, ótimo atendimento recomendo, querem qualidade no seu serviço super indico.",
    avatarColor: "#4a6b5a",
  },
  {
    name: "Heitor Gabryel",
    meta: "1 avaliação",
    time: "2 semanas atrás",
    text: "Maravilhosa 🤩🤩",
    avatarColor: "#5a5a8a",
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Reviews() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[1152px] px-6">
        {/* Aggregate rating */}
        <div className="flex flex-col items-center text-center">
          <h2 className="font-sans text-3xl font-bold text-black">EXCELENTE</h2>
          <div className="mt-2 flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Image
                key={i}
                src="/assets/imgStar2.svg"
                alt=""
                aria-hidden
                width={32}
                height={32}
                className="size-8"
              />
            ))}
          </div>
          <p className="mt-2 font-sans text-base text-black">
            com base em <span className="font-bold">7 avaliações</span>
          </p>
          <Image
            src="/assets/imgRectangle8.png"
            alt="Google"
            width={40}
            height={40}
            className="mt-2 h-10 w-auto"
          />
        </div>

        {/* Review carousel */}
        <Carousel
          opts={{ align: "start", loop: true }}
          className="mt-10 px-2"
        >
          <CarouselContent>
            {reviews.map((r) => (
              <CarouselItem
                key={r.name}
                className="sm:basis-1/2 lg:basis-1/3"
              >
                <article className="flex h-full flex-col gap-3.5 rounded-2xl bg-panel p-5">
                  <Image
                    src="/assets/imgRating.svg"
                    alt="Avaliação: 5 de 5 estrelas"
                    width={118}
                    height={21}
                    className="h-5 w-auto self-start"
                  />
                  <div className="flex items-center gap-3.5">
                    <div
                      className="flex size-9 shrink-0 items-center justify-center rounded-full font-body text-xs font-semibold text-white"
                      style={{ backgroundColor: r.avatarColor }}
                      aria-hidden
                    >
                      {getInitials(r.name)}
                    </div>
                    <div className="min-w-0">
                      <p className="font-body text-sm font-semibold text-[#1a1a1a]">
                        {r.name}
                      </p>
                      <p className="font-body text-[10px] text-black/50">
                        {r.meta} · {r.time}
                      </p>
                    </div>
                  </div>
                  <p className="font-body text-sm leading-snug text-[#1a1a1a]">
                    {r.text}
                  </p>
                  <div className="mt-auto flex flex-col gap-1.5">
                    <p className="font-body text-[10px] text-black/50">
                      Avaliação no
                    </p>
                    <Image
                      src="/assets/imgLogosGoogle.svg"
                      alt="Google"
                      width={56}
                      height={18}
                      className="h-[18px] w-auto self-start object-contain object-left"
                    />
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
