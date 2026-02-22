"use client";

import Image from "next/image";

export default function MobileHero() {
    return (
        <section
            className="w-full h-[85vh] relative flex flex-col items-center justify-between pt-32 pb-16 px-6 overflow-hidden bg-[#1e3a1a] bg-[url('https://www.transparenttextures.com/patterns/tasky.png')]"
        >
            {/* Dark gradient overlay for extreme contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

            {/* Top Text Content */}
            <div className="relative z-10 w-full text-center flex flex-col items-center mt-8">
                <span className="text-yellow-400 font-bold tracking-[0.2em] text-xs mb-3 uppercase drop-shadow-md">
                    Welcome to Lemonade Ideas
                </span>
                <h1 className="text-white font-display font-black text-5xl sm:text-6xl leading-[1.05] tracking-tight uppercase max-w-sm drop-shadow-xl">
                    ALL YOU NEED IS <span className="text-yellow-400">FRESH</span> IDEAS.
                </h1>
                <p className="mt-4 text-white/90 font-medium text-sm leading-relaxed max-w-xs drop-shadow-md">
                    Premium internet marketing that&apos;s fast, affordable, and drives you real leads.
                </p>
            </div>

            {/* Centered App-like Image Focus */}
            <div className="relative z-10 w-full max-w-[280px] aspect-[3/4] my-auto flex items-center justify-center filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] opacity-95">
                {/* Using the first frame of the animation as the static optimized asset */}
                <Image
                    src="/frames/mobile/frame_000.webp"
                    alt="Fresh Lemonade"
                    width={800}
                    height={800}
                    className="object-contain w-full h-auto translate-y-8"
                    priority
                    fetchPriority="high"
                />
            </div>

            {/* Bottom App-like Call to Actions */}
            <div className="relative z-10 w-full flex flex-col gap-3 mt-auto">
                <a
                    href="#"
                    className="w-full bg-[#facc15] text-[#1e3a1a] font-bold py-4 rounded-lg text-[13px] uppercase tracking-wider shadow-[0_4px_20px_0_rgba(250,204,21,0.3)] text-center transition-transform active:scale-95"
                >
                    Speak With Our Expert
                </a>
                <a
                    href="#"
                    className="w-full bg-transparent border-2 border-white/80 text-white hover:bg-white hover:text-[#1e3a1a] font-bold py-4 rounded-lg text-[13px] uppercase tracking-wider text-center transition-transform active:scale-95"
                >
                    View Our Pricing
                </a>
            </div>

            {/* Aesthetic Lemon Decoration Layer */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/4 -left-10 w-40 h-40 bg-green-500/10 rounded-full blur-2xl pointer-events-none" />
        </section>
    );
}
