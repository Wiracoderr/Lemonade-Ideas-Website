"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function HeroSection() {
    const t = useTranslations("StitchLayout");
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="relative bg-[#3a281e] pt-28 pb-16 lg:py-40 overflow-hidden min-h-[650px] flex items-center">
            {/* 1. Full-width Background Image (Optimized for Desktop and Mobile) */}
            <div className="absolute inset-0 z-0 hidden md:block">
                <Image src="/images/hero-bg-desktop.webp" alt="Background Desktop" fill sizes="100vw" className="object-cover object-center opacity-70" priority />
            </div>
            <div className="absolute inset-0 z-0 md:hidden">
                <Image src="/images/hero-bg-mobile.webp" alt="Background Mobile" fill sizes="100vw" className="object-cover object-left opacity-100" priority fetchPriority="high" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10"></div>
            </div>

            {/* 2. Authentic SVG Curved Background (Using User's Custom "Mesa de trabajo 1.svg" Vectors) */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none hidden lg:flex flex-col lg:flex-row items-center justify-center">
                <svg
                    className="absolute inset-0 h-full w-full scale-[1.10] origin-center"
                    preserveAspectRatio="none"
                    viewBox="0 0 2827.17 1136.96"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1245.42,165.26c-54.04-66.95-121.2-122.75-197.52-163.48H449C246.54,109.83,108.65,324.01,108.65,570.59s134.59,455.59,333.05,564.86l-1.25,1.51h1610.79L1245.84,164.74l-.43.52Z"
                        fill="#1E3A1A"
                    />
                </svg>
            </div>

            {/* 3. Solid Ghost Text Watermark ("LEMONADE IDEAS" strictly centered inside the green mass) */}
            <div className="absolute inset-0 z-0 pointer-events-none hidden lg:flex items-center justify-center pl-[12%] pb-[8%]">
                <svg width="70%" height="auto" viewBox="0 0 1200 200" preserveAspectRatio="xMidYMid meet" className="max-w-[1100px] opacity-100">
                    <text
                        x="50%"
                        y="140"
                        textAnchor="middle"
                        className="font-display font-black"
                        fontSize="130"
                        fill="rgba(255,255,255,0.06)"
                        letterSpacing="0.02em"
                    >
                        {t('watermark_lemonade')}
                    </text>
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center justify-between">
                {/* Left Column (Text) */}
                <div className="w-full lg:w-[55%] lg:flex-none mb-12 lg:mb-0 relative z-10 lg:pl-8 flex flex-col items-center lg:items-start text-center lg:text-left min-h-[340px] lg:min-h-0">
                    {/* 4. Dense Typography */}
                    <h2 className="text-[2.4rem] sm:text-[3rem] md:text-[4rem] lg:text-[4.5rem] font-display font-black text-white leading-[1.05] lg:leading-[1] mb-6 lg:mb-8 uppercase tracking-tight relative z-10 drop-shadow-lg w-full">
                        {t.rich('hero_headline', {
                            br: () => <br />,
                            highlight: (chunks) => <span className="text-[#FED52B]">{chunks}</span>
                        })}
                    </h2>
                    <p className="text-white text-[15.5px] lg:text-[15px] font-bold tracking-wide mb-10 lg:mb-12 opacity-100 drop-shadow-md max-w-[310px] lg:max-w-none">
                        {t('hero_subheadline')}
                    </p>

                    {/* 5. Clean Buttons */}
                    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-x-10 gap-y-5 w-full mt-2 lg:mt-0">
                        <a className="inline-block bg-[#eaf4f7] text-[#1E3A1A] hover:bg-white font-black py-4 lg:py-3.5 px-8 text-[13.5px] lg:text-sm uppercase tracking-widest rounded shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition duration-300 font-sans text-center" href="/schedule-a-call">
                            {t('btn_speakExpert')}
                        </a>
                        <Link className="inline-block text-white hover:text-[#FED52B] font-black text-[14px] lg:text-sm uppercase tracking-widest transition duration-300 drop-shadow-md font-sans text-center" href="/pricing">
                            {t('btn_seePricing')}
                        </Link>
                    </div>
                </div>

                {/* Right Column (Video/Image Container) */}
                <div className="lg:w-[45%] lg:flex-none w-full relative z-10 flex justify-end pr-2 lg:pr-6">
                    {/* 6. Thick white frame, removed giant red play button (kept minimal) */}
                    <div className="bg-black/90 shadow-[0_30px_60px_rgba(0,0,0,0.6)] aspect-[16/10] w-full max-w-[580px] flex items-center justify-center relative overflow-hidden border-[4px] lg:border-[6px] border-white">
                        {!isPlaying ? (
                            <div
                                className="absolute inset-0 z-20 cursor-pointer group"
                                onClick={() => setIsPlaying(true)}
                            >
                                {/* Animated Video Thumbnail */}
                                <div className="absolute inset-0 z-0 overflow-hidden rounded-[2rem]">
                                    <Image src="/YT-home.webp" alt="Watch Video" fill sizes="(max-width: 1024px) 100vw, 50vw" quality={70} className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                </div>
                                {/* Subtle play indicator flattened DOM structure */}
                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                                    <svg className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full shadow-lg text-[#1E3A1A] fill-current transition-transform group-hover:scale-110 p-4 pl-5" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                        ) : (
                            <iframe
                                className="w-full h-full absolute inset-0 z-30"
                                src="https://www.youtube.com/embed/TZverr1QZUk?autoplay=1&rel=0"
                                title="Lemonade Ideas Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
