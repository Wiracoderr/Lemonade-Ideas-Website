"use client";

import React from "react";
import { useTranslations } from 'next-intl';
import Image from 'next/image';

// A helper component to wrap text safely without linking "SEO" anymore as requested
const SEOText = ({ children }: { children: React.ReactNode }) => {
    return <>{children}</>;
};

interface CTASectionProps {
    subtitleContent?: React.ReactNode;
}

export default function CTASection({ subtitleContent }: CTASectionProps) {
    const t = useTranslations("SEO");
    const defaultSubtitle = (
        <span dangerouslySetInnerHTML={{ __html: t.raw('seo_cta_desc') }} />
    );

    return (
        <section className="bg-[#1E3A1A] py-24 px-4 relative overflow-hidden">
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

            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-[#3AAB43] rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-[#3AAB43] rounded-full blur-3xl opacity-50 pointer-events-none"></div>

            <div className="max-w-5xl mx-auto text-center relative z-10 text-white">
                <h2 className="text-[24px] md:text-[39px] lg:text-[45px] font-[Oswald] font-bold uppercase leading-tight mb-6 tracking-normal" dangerouslySetInnerHTML={{ __html: t.raw('seo_cta_title') }}>
                </h2>

                {/* Hand-drawn yellow underline SVG graphic */}
                <div className="flex justify-center mb-10 w-full">
                    <Image src="/images/layer-1.png" alt="underline" width={200} height={16} className="h-4 w-auto object-contain opacity-90" />
                </div>

                <p className="mb-14 text-white text-[15px] md:text-[17px] lg:text-[18px] max-w-4xl mx-auto font-[Arial] leading-[1.8]">
                    {subtitleContent || defaultSubtitle}
                </p>

                <a
                    href="https://calendly.com/lemonadeideas-consultation/30min?month=2026-03" target="_blank" rel="noopener noreferrer"
                    className="bg-[#FED52B] text-[#1E3A1A] font-[Oswald] font-bold uppercase px-6 py-4 rounded-xl shadow-[0_0_30px_rgba(250,204,21,0.2)] hover:bg-white hover:text-[#1E3A1A] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-300 transform hover:-translate-y-1 inline-flex flex-row items-center mx-auto tracking-wide group gap-5"
                >
                    <Image src="/images/icon-call.svg" alt="Phone Outline Icon" width={50} height={50} className="w-[50px] h-[50px] object-contain shrink-0" />
                    <div className="flex flex-col items-start pr-4 pt-1">
                        <span className="text-[11px] mb-[2px] tracking-[0.15em] opacity-80 group-hover:opacity-100 font-sans font-semibold">{t('seo_cta_btn_up')}</span>
                        <span className="text-[26px] leading-none tracking-normal">{t('seo_cta_btn_down')}</span>
                    </div>
                </a>
            </div>
        </section>
    );
}
