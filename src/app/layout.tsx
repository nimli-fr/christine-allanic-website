import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Formations And Co | Bilan de comp\u00e9tences \u2014 Christine Allanic, certification Qualiopi",
  description:
    "Bilan de comp\u00e9tences certifi\u00e9 Qualiopi avec Christine Allanic. Accompagnement professionnel pour reconversion, transition professionnelle, r\u00e9orientation et rebond professionnel. Formations SST, Bien-\u00eatre et Service en salle. \u00c9ligible CPF & OPCO.",
  keywords: [
    "bilan de comp\u00e9tences",
    "accompagnement professionnel",
    "reconversion",
    "reconnaissance",
    "transition professionnelle",
    "coaching carri\u00e8re",
    "d\u00e9veloppement de carri\u00e8re",
    "accompagnement pour retrouver confiance",
    "rebond professionnel",
    "orientation",
    "r\u00e9orientation",
    "formation",
    "Qualiopi",
    "CPF",
    "OPCO",
    "SST",
    "Christine Allanic",
    "Formations And Co",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
