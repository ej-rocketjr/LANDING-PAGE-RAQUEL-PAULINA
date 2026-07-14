"use client";

import { useState } from "react";
import Image from "next/image";
import { WHATSAPP_URL } from "./constants";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Áreas de Atuação", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

function Logo() {
  return (
    <Image
      src="/assets/logo.svg"
      alt="Raquel Paulina — Advocacia Previdenciária"
      width={66}
      height={42}
      className="h-25 w-auto"
    />
  );
}

function WhatsAppButton({
  onClick,
  className = "",
}: {
  onClick?: () => void;
  className?: string;
}) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-[4px] bg-green px-4 py-2 font-body text-sm text-heading transition-transform hover:-translate-y-0.5 ${className}`}
    >
      <Image
        src="/assets/imgIcon.svg"
        alt=""
        aria-hidden
        width={15}
        height={15}
        className="size-[15px]"
      />
      WhatsApp
    </a>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-ink border-b border-white/10">
      <div className="mx-auto flex max-w-[1152px] items-center justify-between px-6 py-4">
        {/* Brand */}
        <a href="#inicio" onClick={close} aria-label="Início">
          <Logo />
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-sans text-base text-cream/70 transition-colors hover:text-cream"
            >
              {l.label}
            </a>
          ))}
          <WhatsAppButton />
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Abrir menu"
          aria-expanded={open}
          className="flex size-10 items-center justify-center text-cream lg:hidden"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden
          >
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>

      {/* Mobile menu — full-screen overlay */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col bg-ink transition-opacity duration-300 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {/* Overlay top bar */}
        <div className="flex items-center justify-between px-6 py-4">
          <a href="#inicio" onClick={close} aria-label="Início">
            <Logo />
          </a>
          <button
            type="button"
            onClick={close}
            aria-label="Fechar menu"
            className="flex size-10 items-center justify-center text-cream"
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Overlay links */}
        <nav className="flex flex-1 flex-col justify-center gap-2 px-6">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              className="group flex items-baseline gap-4 border-b border-white/10 py-5 transition-colors hover:border-gold/40"
            >
              <span className="font-mono text-xs text-gold-muted">
                0{i + 1}
              </span>
              <span className="font-display text-3xl text-cream transition-colors group-hover:text-gold">
                {l.label}
              </span>
            </a>
          ))}
        </nav>

        {/* Overlay footer CTA */}
        <div className="px-6 pb-10">
          <WhatsAppButton onClick={close} className="w-full py-3.5 text-base" />
        </div>
      </div>
    </header>
  );
}
