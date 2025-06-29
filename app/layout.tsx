import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider, useUser } from "@clerk/nextjs";
import Header from "./components/header/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "The Movie App by Onek",
    template: "%s | The Movie App",
  },
  description: "Plateforme de streaming idéal pour vous relaxer avec une variété de films, séries et animés provenant de différents univers cinématographiques.",
  icons: {
    icon: "/logo.png",
  },
};


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="fr">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#010B1399]  text-white`}>
          <Header/>
          {children}
        </body>
      </html>      
    </ClerkProvider>

  );
}
