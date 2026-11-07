import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Imagem de compartilhamento (WhatsApp, Instagram, Facebook, LinkedIn etc.).
export const alt = "Dra. Raquel Paulina · Advogada Previdenciária em Penedo/AL e Propriá/SE";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const photo = await readFile(join(process.cwd(), "public/assets/foto.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#161616",
          color: "#ffffff",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 64px",
            borderLeft: "14px solid #c9a84c",
          }}
        >
          <div style={{ fontSize: 24, letterSpacing: 6, color: "#c9a84c", textTransform: "uppercase" }}>
            Advocacia Previdenciária
          </div>
          <div style={{ fontSize: 76, fontWeight: 700, marginTop: 18, lineHeight: 1.05 }}>Dra. Raquel Paulina</div>
          <div style={{ fontSize: 32, marginTop: 28, color: "#f1d9d6", lineHeight: 1.3 }}>
            INSS · RPPS · Aposentadoria · BPC/LOAS · Revisões
          </div>
          <div style={{ fontSize: 26, marginTop: 40, color: "#d9d1cf" }}>
            Penedo (AL) · Propriá (SE) · Online em todo o Brasil
          </div>
          <div style={{ fontSize: 22, marginTop: 14, color: "#b39661" }}>OAB/SE 11.080</div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photoSrc} alt="" width={460} height={630} style={{ objectFit: "cover", objectPosition: "top" }} />
      </div>
    ),
    size,
  );
}
