const areas = [
  "Aposentadorias",
  "Benefícios por Incapacidade",
  "Revisões de Benefício",
  "BPC-LOAS",
  "Servidores Públicos",
  "Pensões e Auxílios",
];

const phones = ["(79) 9604-4009", "(82) 9132-2000", "(79) 8815-9595", "(82) 8775-5904"];
const email = "raquelpaulinaadv@gmail.com";

const offices = [
  { region: "Alagoas", address: "Av. Getúlio Vargas, 259 Penedo / AL" },
  { region: "Sergipe", address: "Rua Santo Amaro, 680 Propria / SE" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-ink pb-8 pt-8 text-white">
      <div className="mx-auto max-w-[1152px] px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="max-w-[336px]">
            <p className="font-display text-3xl text-cream">Raquel Paulina</p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.1em] text-gold-muted">
              Advocacia Previdenciária
            </p>
            <p className="mt-4 font-sans text-sm leading-relaxed text-white">
              OAB/CE 00.000 — Especialista em Direito Previdenciário com mais de
              10 anos de atuação.
            </p>
          </div>

          {/* Áreas */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.1em] text-gold-muted">
              Áreas
            </h3>
            <ul className="mt-5 flex flex-col gap-2">
              {areas.map((a) => (
                <li key={a} className="font-sans text-sm text-white">
                  {a}
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-sans text-[11px] font-medium uppercase tracking-[0.1em] text-gold-muted">
              Contato
            </h3>
            <ul className="mt-5 flex flex-col gap-4">
              {phones.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <img
                    src="/assets/footerPhone.svg"
                    alt=""
                    aria-hidden
                    className="size-[15px]"
                  />
                  <span className="font-sans text-xs text-white">{p}</span>
                </li>
              ))}
              <li className="flex items-center gap-2">
                <img
                  src="/assets/footerMail.svg"
                  alt=""
                  aria-hidden
                  className="size-[15px]"
                />
                <a
                  href={`mailto:${email}`}
                  className="font-sans text-xs text-white hover:text-gold"
                >
                  {email}
                </a>
              </li>
            </ul>
          </div>

          {/* Escritórios */}
          <div className="flex gap-3">
            <img
              src="/assets/footerLoc.svg"
              alt=""
              aria-hidden
              className="mt-1 size-[15px] shrink-0"
            />
            <div>
              <h3 className="font-sans text-[10px] uppercase tracking-[0.2em] text-white">
                Escritórios
              </h3>
              <div className="mt-4 flex flex-col gap-4">
                {offices.map((o) => (
                  <div key={o.region}>
                    <p className="font-sans text-xs font-bold uppercase tracking-wide text-white">
                      {o.region}
                    </p>
                    <p className="mt-0.5 font-sans text-xs leading-relaxed text-white">
                      {o.address}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center gap-3 border-t border-[rgba(201,168,76,0.15)] pt-8 text-center">
          <p className="font-mono text-[10px] tracking-[0.1em] text-[rgba(240,234,216,0.25)]">
            © 2026 Raquel Pauline Advocacia · OAB/CE 00.000
          </p>
          <p className="max-w-sm font-body text-[11px] leading-relaxed text-[rgba(240,234,216,0.2)]">
            Conteúdo informativo. Não constitui oferta de serviços. OAB
            Provimento nº 205/2021.
          </p>
        </div>
      </div>
    </footer>
  );
}
