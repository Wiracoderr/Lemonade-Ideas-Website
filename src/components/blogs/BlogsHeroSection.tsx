"use client";

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function BlogsHeroSection() {
    const t = useTranslations('Blogs');
    return (
        <section className="relative w-full h-[360px] md:h-[440px] overflow-hidden bg-[#1E3A1A] flex items-center justify-center">
            {/* Background Image with Dark Green Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/person-laptop-charts.webp"
                    alt="Blogs Background"
                    fill
                    sizes="100vw"
                    priority
                    className="object-cover object-center opacity-40 mix-blend-luminosity"
                />
            </div>
            
            {/* Deep green tint to match screenshot exactly */}
            <div className="absolute inset-0 bg-[#0c2a16]/70 z-10 pointer-events-none"></div>

            {/* Giant Background Watermark "BLOGS" */}
            <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                <span className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-[Oswald] font-bold text-white/10 uppercase tracking-widest whitespace-nowrap select-none mt-2">
                    {t('hero_watermark')}
                </span>
            </div>

            {/* Foreground Solid Title */}
            <div className="relative z-30">
                <h1 className="text-[60px] md:text-[72px] lg:text-[80px] font-[Oswald] font-bold text-white uppercase tracking-tight text-center drop-shadow-md">
                    {t('hero_title')}
                </h1>
            </div>
        </section>
    );
}
