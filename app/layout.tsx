import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Crimson_Text, Lora } from "next/font/google";
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
  interactiveWidget: 'resizes-visual',
};

// Fonte principal para texto corrido - Inter (moderna, legível, profissional)
const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap'
});

// Fonte para títulos principais - Playfair Display (elegante, sofisticada)
const playfairDisplay = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap'
});

// Fonte para subtítulos - Crimson Text (clássica, acadêmica)
const crimsonText = Crimson_Text({ 
  subsets: ["latin"],
  weight: ['400', '600', '700'],
  variable: '--font-crimson',
  display: 'swap'
});

// Fonte para menu - Lora (legível, moderna, institucional)
const lora = Lora({ 
  subsets: ["latin"],
  variable: '--font-lora',
  display: 'swap'
});

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
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfairDisplay.variable} ${crimsonText.variable} ${lora.variable} font-sans`}>
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
