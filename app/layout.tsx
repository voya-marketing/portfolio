import type { Metadata } from "next";
import { Hanken_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken"
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains"
});

export const metadata: Metadata = {
  title: "VOYA Marketing Portfolio",
  description:
    "Cinematic portfolio for VOYA Marketing: reels, posts, and stories.",
  openGraph: {
    title: "VOYA Marketing Portfolio",
    description:
      "Premium reels, posts, and story portfolios for modern brands.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${hanken.variable} ${jetbrains.variable}`}>
        {children}
      </body>
    </html>
  );
}
