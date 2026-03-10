"use client";

import React from "react";

// A helper component to wrap text safely without linking "SEO" anymore as requested
const SEOText = ({ children }: { children: React.ReactNode }) => {
    return <>{children}</>;
};

interface CTASectionProps {
    subtitleContent?: React.ReactNode;
}

export default function CTASection({ subtitleContent }: CTASectionProps) {
    const defaultSubtitle = (
        <SEOText>Along with SEO, Lemonade Ideas drives real results through pay-per-click<br className="hidden md:block" /> advertising and website development. Contact us to discover what could benefit<br className="hidden md:block" /> your business the most.</SEOText>
    );

    return (
        <section className="bg-[#143d1f] py-24 px-4 relative overflow-hidden">
            {/* Texture Map Overlay */}
            <div
                className="absolute inset-0 opacity-[0.45] pointer-events-none"
                style={{
                    backgroundImage: "url('/images/Texture.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            ></div>

            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-[#1f562e] rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-[#1f562e] rounded-full blur-3xl opacity-50 pointer-events-none"></div>

            <div className="max-w-5xl mx-auto text-center relative z-10 text-white">
                <h2 className="text-[24px] md:text-[39px] lg:text-[45px] font-[Oswald] font-bold uppercase leading-tight mb-6 tracking-normal">
                    &quot;GROW YOUR BUSINESS&quot; &amp; &quot;GAIN VISIBILITY&quot;<br />
                    <span className="text-[#facc15] mt-1 inline-block">WITH LEMONADE IDEAS!</span>
                </h2>

                {/* Hand-drawn yellow underline SVG graphic */}
                <div className="flex justify-center mb-10 w-full">
                    <img src="/images/layer-1.png" alt="underline" className="h-4 object-contain opacity-90" />
                </div>

                <p className="mb-14 text-white text-[15px] md:text-[17px] lg:text-[18px] max-w-4xl mx-auto font-[Arial] leading-[1.8]">
                    {subtitleContent || defaultSubtitle}
                </p>

                <a
                    href="https://calendly.com/lemonadeideas-consultation/30min?month=2026-03" target="_blank" rel="noopener noreferrer"
                    className="bg-[#facc15] text-[#143d1f] font-[Oswald] font-bold uppercase px-6 py-4 rounded-xl shadow-[0_0_30px_rgba(250,204,21,0.2)] hover:bg-white hover:text-[#143d1f] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-300 transform hover:-translate-y-1 inline-flex flex-row items-center mx-auto tracking-wide group gap-5"
                >
                    <img src="/images/icon-call.svg" alt="Phone Outline Icon" className="w-[50px] h-[50px] object-contain shrink-0" />
                    <div className="flex flex-col items-start pr-4 pt-1">
                        <span className="text-[11px] mb-[2px] tracking-[0.15em] opacity-80 group-hover:opacity-100 font-sans font-semibold">SPEAK WITH OUR EXPERT</span>
                        <span className="text-[26px] leading-none tracking-normal">SCHEDULE A CALL</span>
                    </div>
                </a>
            </div>
        </section>
    );
}
