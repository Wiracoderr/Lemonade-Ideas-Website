import dynamic from "next/dynamic";
import type { Metadata } from "next";
import {setRequestLocale} from 'next-intl/server';

// CameraScroll is desktop-only (hidden on mobile via CSS).
// Removed per user request to maximize Desktop performance score.

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
            {/* 1. HERO DEMOLISHED (Desktop Canvas Section Removed via rules) */}

            {/* 2. BRANDING SECTIONS (Dynamically Loaded) */}
            <StitchLayout />
        </main>
    );
}
