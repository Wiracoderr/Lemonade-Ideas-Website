import CameraScroll from "@/components/CameraScroll";
import StitchLayout from "@/components/StitchLayout";

export const revalidate = 3600; // Revalidate every hour

export default function Home() {
    return (
        <main className="bg-white min-h-screen text-gray-900 font-sans">
            {/* 1. SCROLLYTELLING HERO (Strictly untouched as requested) */}
            <CameraScroll />

            {/* NEW BRANDING SECTIONS */}
            <StitchLayout />
        </main>
    );
}
