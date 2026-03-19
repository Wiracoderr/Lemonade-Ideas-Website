import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import {notFound} from 'next/navigation';
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../globals.css";

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
  metadataBase: new URL('https://lemonadeideas.com'),
  title: "Lemonade Ideas | Build your dreams",
  description: "Internet marketing that is fast, affordable, and drives you leads.",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const {locale} = await params;
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <meta name="color-scheme" content="light" />
        <link rel="preconnect" href="https://www.transparenttextures.com" />
        {/*
         * LCP Preload: Hero images (Critical path for PageSpeed)
         */}
        <link
          rel="preload"
          as="image"
          href="/images/hero-bg-desktop.webp"
          /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
          /* @ts-ignore — imagesrcset / imagesizes are valid HTML but not yet in React types */
          imageSrcSet="/images/hero-bg-mobile.webp 767w, /images/hero-bg-desktop.webp 768w"
          imageSizes="100vw"
          fetchPriority="high"
        />
        {/* Font Awesome legacy CSS has been purged natively */}
      </head>
      <body
        className={`${inter.variable} ${oswald.variable} antialiased selection:bg-yellow-500/30 bg-[#020202] text-white/90 flex flex-col min-h-screen`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}

// CACHE BUST: 2026-03-10T21:49:05
