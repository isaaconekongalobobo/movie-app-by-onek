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
  description:
    "Plateforme de streaming idéale pour vous relaxer avec une variété de films, séries et animés provenant de différents univers cinématographiques.",
  icons: {
    icon: "https://res.cloudinary.com/do2qnb4zc/image/upload/v1751194581/theMovieApp_lk2iyw.png",
  },
  openGraph: {
    title: "The Movie App by Onek",
    description:
      "Profitez d’un univers riche en films, séries et animés sur une seule plateforme.",
    url: "https://movie-app-by-onek-ws.onrender.com",
    siteName: "The Movie App",
    images: [
      {
        url: "https://res.cloudinary.com/do2qnb4zc/image/upload/v1751194581/theMovieApp_lk2iyw.png", // ✅ Image 1200x630 en .jpg ou .png
        width: 1200,
        height: 630,
        alt: "Aperçu de The Movie App",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Movie App by Onek",
    description:
      "Films, séries et animés pour tous les goûts. Découvrez l’univers Onek.",
    images: ["https://res.cloudinary.com/do2qnb4zc/image/upload/v1751194581/theMovieApp_lk2iyw.png"],
    creator: "@Isaaconek",
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
