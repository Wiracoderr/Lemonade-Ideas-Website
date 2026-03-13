import dynamic from "next/dynamic";
import type { Metadata } from "next";
import MobileHero from '@/components/MobileHero';
import {setRequestLocale} from 'next-intl/server';

// CameraScroll is desktop-only (hidden on mobile via CSS).
// ssr: false ensures its heavy JS bundle (framer-motion + canvas logic)
// is never downloaded or executed on mobile devices.
import CameraScroll from "@/components/CameraScroll";

// Dynamically import the heavy below-the-fold layout
const StitchLayout = dynamic(() => import("@/components/StitchLayout"), {
    loading: () => <div className="min-h-screen bg-white" />,
    ssr: true, // we still want to render the HTML from server, but defer the heavy JS hydration 
});

// ── ISR: revalidate every 24 h → eliminates cold-start latency on Vercel ──
export const revalidate = 86400;

// ── Page metadata ─────────────────────────────────────────────────────────
export const metadata: Metadata = {
    title: "Lemonade Ideas — Fresh Creative Agency",
    description:
        "Lemonade Ideas is a creative marketing agency that turns bold ideas into fresh digital experiences.",
    openGraph: {
        title: "Lemonade Ideas — Fresh Creative Agency",
        description:
            "Lemonade Ideas is a creative marketing agency that turns bold ideas into fresh digital experiences.",
        type: "website",
    },
};

export default async function Home({
    params
}: {
    params: Promise<{locale: string}>
}) {
    const {locale} = await params;
    setRequestLocale(locale);

    return (
        <main className="bg-white min-h-screen text-gray-900 font-sans">
            {/* 1. SCROLLYTELLING HERO */}
            {/* Desktop Hero (Hidden on Mobile) */}
            <div className="hidden md:block">
                <CameraScroll />
            </div>

            {/* Mobile App Hero (Hidden on Desktop) */}
            <div className="block md:hidden">
                <MobileHero />
            </div>

            {/* 2. BRANDING SECTIONS (Dynamically Loaded) */}
            <StitchLayout />
        </main>
    );
}
