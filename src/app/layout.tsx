import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lemonade Ideas | Build your dreams",
  description: "Internet marketing that is fast, affordable, and drives you leads.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased selection:bg-yellow-500/30 bg-[#020202] text-white/90`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
