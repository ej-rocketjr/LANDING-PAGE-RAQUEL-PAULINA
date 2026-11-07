import type { Metadata, Viewport } from "next";
import { Alegreya_Sans, Cinzel, Lora, Marcellus, Poppins, Roboto } from "next/font/google";
import IconSprite from "./components/Icons";
import JsonLd from "./components/JsonLd";
import { KEYWORDS, SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "./site";
import "./globals.css";

const marcellus = Marcellus({ variable: "--font-marcellus", subsets: ["latin"], weight: "400", display: "swap" });
const cinzel = Cinzel({ variable: "--font-cinzel", subsets: ["latin"], weight: ["500", "600"], display: "swap" });
const lora = Lora({ variable: "--font-lora", subsets: ["latin"], weight: ["600", "700"], display: "swap" });
const roboto = Roboto({ variable: "--font-roboto", subsets: ["latin"], weight: ["400", "500", "700"], display: "swap" });
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});
const alegreya = Alegreya_Sans({
  variable: "--font-alegreya-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  keywords: KEYWORDS,
  applicationName: SITE_NAME,
  authors: [{ name: "Raquel Paulina" }],
  creator: "Raquel Paulina",
  publisher: "Raquel Paulina Advocacia",
  category: "legal",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  formatDetection: { telephone: true, email: true, address: true },
};

export const viewport: Viewport = {
  themeColor: "#161616",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const fonts = [marcellus, cinzel, lora, roboto, poppins, alegreya].map((f) => f.variable).join(" ");
  return (
    <html lang="pt-BR" className={fonts}>
      <body>
        <JsonLd />
        <IconSprite />
        {children}
      </body>
    </html>
  );
}
