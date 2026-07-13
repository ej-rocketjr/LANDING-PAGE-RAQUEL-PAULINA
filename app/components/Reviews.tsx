import Image from "next/image";

type Review = {
  platform: string;
  rating: string;
  logo: string;
  logoWidth: number;
  avatar: string;
  name: string;
  role: string;
  text: string;
  readMore?: boolean;
};

const reviews: Review[] = [
  {
    platform: "Google",
    rating: "/assets/imgRating.svg",
    logo: "/assets/imgLogosGoogle.svg",
    logoWidth: 56,
    avatar: "/assets/imgUserProfile.jpg",
    name: "William Thomas",
    role: "Director, Thomas & Partners",
    text: "A truly outstanding experience. They understood our vision and executed it flawlessly.",
    readMore: true,
  },
  {
    platform: "Trustpilot",
    rating: "/assets/imgRating.svg",
    logo: "/assets/imgFrame1984077859.svg",
    logoWidth: 64,
    avatar: "/assets/imgUserProfile1.jpg",
    name: "John Smith",
    role: "CEO, Tech Innovations Inc",
    text: "Exceptional service! The team exceeded our expectations and delivered a top-notch product on time.",
  },
  {
    platform: "Facebook",
    rating: "/assets/imgRating1.svg",
    logo: "/assets/imgFrame1984077858.svg",
    logoWidth: 100,
    avatar: "/assets/imgUserProfile2.jpg",
    name: "Mia Anderson",
    role: "Social Media Manager",
    text: "Their team delivered beyond expectations. Highly responsive and creative!",
  },
  {
    platform: "Yelp",
    rating: "/assets/imgRating2.svg",
    logo: "/assets/imgYelpLogoSvg1.png",
    logoWidth: 40,
    avatar: "/assets/imgUserProfile3.jpg",
    name: "Isabella Turner",
    role: "Project Manager",
    text: "Everything was seamless from start to finish. Highly impressed!",
  },
];

export default function Reviews() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[1152px] px-6">
        {/* Aggregate rating */}
        <div className="flex flex-col items-center text-center">
          <h2 className="font-sans text-3xl font-bold text-black">EXCELENTE</h2>
          <div className="mt-2 flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <img
                key={i}
                src="/assets/imgStar2.svg"
                alt=""
                aria-hidden
                className="size-8"
              />
            ))}
          </div>
          <p className="mt-2 font-sans text-base text-black">
            com base em <span className="font-bold">126 avaliações</span>
          </p>
          <img
            src="/assets/imgRectangle8.png"
            alt="Google"
            className="mt-2 h-10 w-auto"
          />
        </div>

        {/* Review cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r) => (
            <article
              key={r.platform}
              className="flex flex-col gap-3.5 rounded-2xl bg-panel p-5"
            >
              <img
                src={r.rating}
                alt={`Avaliação em ${r.platform}`}
                className="h-5 w-auto"
              />
              <div className="flex items-center gap-3.5">
                <div className="relative size-9 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={r.avatar}
                    alt={r.name}
                    fill
                    sizes="36px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="font-body text-sm font-semibold text-[#1a1a1a]">
                    {r.name}
                  </p>
                  <p className="font-body text-[10px] text-black/50">{r.role}</p>
                </div>
              </div>
              <p className="font-body text-sm leading-snug text-[#1a1a1a]">
                {r.text}
                {r.readMore && (
                  <span className="text-[#1a1a1a]/50"> Read more</span>
                )}
              </p>
              <div className="mt-auto flex flex-col gap-1.5">
                <p className="font-body text-[10px] text-black/50">Posted on</p>
                <img
                  src={r.logo}
                  alt={r.platform}
                  style={{ width: r.logoWidth }}
                  className="h-[18px] object-contain object-left"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
