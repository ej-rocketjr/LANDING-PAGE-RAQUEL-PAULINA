// Sprite com todos os ícones do site. Renderizado uma vez no layout;
// os componentes usam <Icon name="..." /> para referenciar cada símbolo.

export function Icon({
  name,
  className,
  style,
}: {
  name: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg className={className} style={style} aria-hidden="true">
      <use href={`#i-${name}`} />
    </svg>
  );
}

export default function IconSprite() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <symbol id="i-wa" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.4-.3Z" />
      </symbol>
      <symbol id="i-pin" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.3 7 13 7 13s7-7.7 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
      </symbol>
      <symbol id="i-pin-o" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
          <circle cx="12" cy="9.5" r="2.6" />
        </g>
      </symbol>
      <symbol id="i-down" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="currentColor" />
        <path d="M12 7v9m-4-4 4 4 4-4" fill="none" stroke="#f8e8e6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </symbol>
      <symbol id="i-check" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" d="M4 12.5 9.5 18 20 6.5" />
      </symbol>
      <symbol id="i-chev" viewBox="0 0 110 36">
        <path d="M0 0h110L72 32a24 24 0 0 1-34 0Z" fill="currentColor" />
        <path d="M44 10l11 10 11-10" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </symbol>
      <symbol id="i-team" viewBox="0 0 64 48">
        <g fill="currentColor">
          <circle cx="14" cy="14" r="6" />
          <circle cx="30" cy="10" r="8" />
          <path d="M2 36c0-6 5-11 12-11s9 3 9 3l-3 10H2Z" />
          <path d="M16 42c0-9 6-16 14-16 4 0 7 1 9 3l-2 13Z" />
          <path d="M52 20l3 1 1 3 3 1-1 3 2 2-2 3 1 3-3 1-1 3-3-1-2 2-3-2-3 1-1-3-3-1 1-3-2-3 2-2-1-3 3-1 1-3 3 1 2-2Zm-2 9a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
        </g>
      </symbol>
      <symbol id="i-usercheck" viewBox="0 0 64 48">
        <g fill="currentColor">
          <circle cx="24" cy="14" r="10" />
          <path d="M4 46c0-11 9-18 20-18s20 7 20 18Z" />
          <path d="M42 24l4-4 5 5 10-10 4 4-14 14Z" />
        </g>
      </symbol>
      <symbol id="i-loc" viewBox="0 0 48 56">
        <path fill="currentColor" d="M24 2C13 2 4 11 4 22c0 15 20 32 20 32s20-17 20-32C44 11 35 2 24 2Zm0 28a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z" />
      </symbol>
      <symbol id="i-retire" viewBox="0 0 48 48">
        <g fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
          <circle cx="20" cy="20" r="14" />
          <path d="M30 30l12 12" />
          <path d="M24 14.5c-1-1.3-2.5-2-4.3-2-2.4 0-4.2 1.4-4.2 3.4 0 4.7 9 2.6 9 7.4 0 2-2 3.6-4.7 3.6-2 0-3.7-.9-4.6-2.3M20 10v3m0 14v3" />
        </g>
      </symbol>
      <symbol id="i-care" viewBox="0 0 48 48">
        <g fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M24 40S8 30 8 19a8 8 0 0 1 16-2 8 8 0 0 1 16 2c0 11-16 21-16 21Z" />
          <path d="M17 23h4l2-4 3 8 2-4h4" />
        </g>
      </symbol>
      <symbol id="i-review" viewBox="0 0 48 48">
        <g fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 6h20l8 8v28H10Z" />
          <path d="M30 6v8h8M16 22h16M16 29h10" />
          <path d="M34 40a6 6 0 1 0 0-12" />
          <path d="M34 26v3h3" />
        </g>
      </symbol>
      <symbol id="i-gov" viewBox="0 0 48 48">
        <g fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 18 24 8l18 10Z" />
          <path d="M10 22v14m9-14v14m10-14v14m9-14v14M6 40h36" />
        </g>
      </symbol>
      <symbol id="i-s-ret" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </g>
      </symbol>
      <symbol id="i-s-heart" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" d="M12 20s-8-5-8-11a4.5 4.5 0 0 1 8-2.6A4.5 4.5 0 0 1 20 9c0 6-8 11-8 11Z" />
      </symbol>
      <symbol id="i-s-doc" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
          <path d="M6 3h9l4 4v14H6Z" />
          <path d="M9 12h7M9 16h5" />
        </g>
      </symbol>
      <symbol id="i-s-bank" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9 12 4l9 5Z" />
          <path d="M5 11v7m4.7-7v7m4.6-7v7M19 11v7M3 21h18" />
        </g>
      </symbol>
      <symbol id="i-ig" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.3" cy="6.7" r="1" fill="currentColor" />
        </g>
      </symbol>
      <symbol id="i-mail" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </g>
      </symbol>
      <symbol id="i-shield" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
          <path d="M12 3 4 6v6c0 4.5 3.4 8 8 9 4.6-1 8-4.5 8-9V6Z" />
          <path d="M12 7.5 8 9v3c0 2.4 1.7 4.2 4 4.8 2.3-.6 4-2.4 4-4.8V9Z" />
        </g>
      </symbol>
      <symbol id="i-ext" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 4h6v6M20 4l-9 9" />
          <path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
        </g>
      </symbol>
      <symbol id="i-up" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" d="m6 15 6-6 6 6" />
      </symbol>
    </svg>
  );
}
