import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  // Preload only the weights actually used → reduces font bytes
  weight: ["300", "400", "600", "700"],
  display: "swap",
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
          imagesrcset="/frames/mobile/frame_000.webp 767w, /frames/desktop/frame_000.webp 768w"
          imagesizes="(max-width: 767px) 400px, 1080px"
          fetchpriority="high"
        />
      </head>
      <body
        className={`${inter.variable} antialiased selection:bg-yellow-500/30 bg-[#020202] text-white/90`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
