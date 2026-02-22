import type { Metadata } from "next";
import CameraScroll from "@/components/CameraScroll";
import StitchLayout from "@/components/StitchLayout";

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

export default function Home() {
    return (
        <main className="bg-white min-h-screen text-gray-900 font-sans">
            {/*
             * LCP hint: preload the first animation frame so the browser
             * fetches it in parallel with the JS bundle.
             * The <link> tags are injected via Next.js's <head> in layout.tsx
             * but we hint the priority from here via the component itself.
             */}
            {/* 1. SCROLLYTELLING HERO */}
            <CameraScroll />

            {/* 2. BRANDING SECTIONS */}
            <StitchLayout />
        </main>
    );
}
