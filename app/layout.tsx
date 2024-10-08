import type { Metadata, Viewport } from "next";
import { Quicksand } from "next/font/google";
import { CustomProvider } from 'rsuite';

import 'rsuite/dist/rsuite-no-reset.min.css';
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";

import Menu from "@components/Menu";
import Footer from "@components/Footer";
import { ToastContainer } from "react-toastify";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  // Also supported by less commonly used
  interactiveWidget: 'resizes-visual',
}
const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Célia Ribeiro Alves",
  description: "Cursos, mentorias e projetos pessoais visando auto-conhecimento e auto-realização. Célia Ribeiro Alves é atriz, produtora, professora e terapeuta.",
  keywords: "terapia, autoconhecimento, auto-conhecimento, vergonha, público, falar em público, timidez, mentoria, saúde mental",
  robots: "index, follow",
  authors: [{ name: "Atauã Pinali Doederlein <ataua.doederlein@gmail.com>", url: "https://github.com/ataua" }],
  formatDetection: {
    telephone: true,
    email: true
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isClient = typeof window !== 'undefined';
  return (
    <html lang="en">
      <body className={isClient ? quicksand.className : ''}>
        <CustomProvider>
          <Menu />
          <main className="flex min-h-screen h-full flex-col items-center justify-between">
            {children}
          </main>
          <Footer />
        </CustomProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
