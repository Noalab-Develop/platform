import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

/**
 * Fonte principal (texto geral / navegação)
 * Muito usada em SaaS, Dev e produtos B2B
 */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

/**
 * Fonte para títulos / headers
 * Mais moderna e com personalidade
 */
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Noalab | CTO as a Service",
  description:
    "CTO as a Service com foco em engenharia de software, arquitetura, integrações, segurança e IA.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`
          ${inter.variable}
          ${sora.variable}
          antialiased
          bg-[#0A2540]
        `}
      >
        {children}
      </body>
    </html>
  );
}