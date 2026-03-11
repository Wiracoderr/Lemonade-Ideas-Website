import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
  preload: true,
  fallback: ['system-ui', 'arial'],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: true,
  fallback: ['sans-serif'],
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
      <head>
        {/*
         * LCP Resource Hints
         * Preconnect + preload the first animation frame (frame_000.webp)
         * for both mobile and desktop branches so the browser fetches it
         * immediately — before the JS bundle executes.
         *
         * The `imagesrcset` attribute tells the browser which variant to
         * preload based on viewport width, matching the JS logic in CameraScroll.
         */}
        <link
          rel="preload"
          as="image"
          href="/frames/desktop/frame_000.webp"
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore — imagesrcset / imagesizes are valid HTML but not yet in React types
          imageSrcSet="/frames/mobile/frame_000.webp 767w, /frames/desktop/frame_000.webp 768w"
          imageSizes="(max-width: 767px) 400px, 1080px"
          fetchPriority="high"
        />
        {/* Font Awesome globally loaded for standard icons via CSS to prevent render blocking on mobile */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
          fetchPriority="low"
        />
      </head>
      <body
        className={`${inter.variable} ${oswald.variable} antialiased selection:bg-yellow-500/30 bg-[#020202] text-white/90 flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

// CACHE BUST: 2026-03-10T21:49:00
