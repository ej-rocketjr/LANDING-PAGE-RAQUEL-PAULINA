# Site Raquel Paulina · Advocacia Previdenciária

Landing page em Next.js (App Router) com React e TypeScript.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Onde editar

- `app/components/constants.ts`: WhatsApp, telefones, e-mail, Instagram, OAB e endereços dos escritórios.
- `app/components/*.tsx`: cada seção da página (Hero, Diferenciais, Áreas, Depoimentos, Sobre, Passo a passo, Atendimento, Rodapé).
- `app/globals.css`: cores (variáveis no topo do arquivo) e estilos.
- `public/assets/`: logo, selo e fotos.

## Deploy na Vercel

Framework Preset: **Next.js**. Build Command, Output Directory e Install Command ficam no padrão.
O Root Directory deve apontar para a pasta onde está este `package.json`.
