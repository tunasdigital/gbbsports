import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GBB Sports | Escolinha de Esportes",
  description: "Escolinha de Futebol e Handebol para alunos do Colégio Adventista de Itajaí.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
