import dynamic from "next/dynamic";
import type { Metadata } from "next";
import {setRequestLocale} from 'next-intl/server';
import HeroSection from "@/components/HeroSection";

// CameraScroll is desktop-only (hidden on mobile via CSS).
// Removed per user request to maximize Desktop performance score.

// Dynamically import the heavy below-the-fold layout
const StitchLayout = dynamic(() => import("@/components/StitchLayout"), {
    loading: () => <div className="min-h-screen bg-white" />,
    ssr: true, // we still want to render the HTML from server, but defer the heavy JS hydration 
});

// ── ISR: revalidate every 24 h → eliminates cold-start latency on Vercel ──
export const revalidate = 86400;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return {
        title: "Lemonade Ideas — Fresh Creative Agency",
        description: "Lemonade Ideas is a creative marketing agency that turns bold ideas into fresh digital experiences.",
        alternates: {
            canonical: `/${locale}`,
            languages: {
                en: '/en',
                es: '/es'
            }
        },
        openGraph: {
            title: "Lemonade Ideas — Fresh Creative Agency",
            description: "Lemonade Ideas is a creative marketing agency that turns bold ideas into fresh digital experiences.",
            type: "website",
        },
    };
}

export default async function Home({
    params
}: {
    params: Promise<{locale: string}>
}) {
    const {locale} = await params;
    setRequestLocale(locale);

    return (
        <main className="bg-white min-h-screen text-gray-900 font-sans">
            {/* 1. HERO (Statically imported for fast LCP) */}
            <HeroSection />

            {/* 2. BRANDING SECTIONS (Dynamically Loaded) */}
            <StitchLayout />
        </main>
    );
}
