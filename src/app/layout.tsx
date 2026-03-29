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
  title: "Formations And Co | Christine Allanic - Organisme de formation certifi\u00e9 Qualiopi",
  description:
    "Formations And Co - Organisme de formation certifi\u00e9 Qualiopi. Bilans de Comp\u00e9tences et Formations SST (Sant\u00e9 et S\u00e9curit\u00e9 au Travail). Christine Allanic, formatrice ind\u00e9pendante.",
  keywords: ["formation", "qualiopi", "bilan de comp\u00e9tences", "SST", "Christine Allanic", "Formations And Co"],
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
