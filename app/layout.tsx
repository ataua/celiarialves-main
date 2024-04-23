import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@components/Nav";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}
const inter = Inter( { subsets: [ "latin" ] } );

export const metadata: Metadata = {
  title: "Célia Ribeiro Alves",
  description: "Cursos, mentorias e projetos pessoais visando auto-conhecimento e auto-realização. Célia Ribeiro Alves é atriz, produtora, professora e terapeuta.",
  keywords: "terapia, autoconhecimento, auto-conhecimento, vergonha, público, falar em público, timidez, mentoria, saúde mental",
  robots: "index, follow",
  authors: [ { name: "Atauã Pinali Doederlein <ataua.doederlein@gmail.com>", url: "https://github.com/ataua" } ],
  formatDetection: {
    telephone: true,
    email: true
  },
};

export default function RootLayout ( {
  children,
}: Readonly<{
  children: React.ReactNode;
}> ) {
  return (
    <html lang="en">
      <body className={ inter.className }>
        <Nav />
        { children }
      </body>
    </html>
  );
}
