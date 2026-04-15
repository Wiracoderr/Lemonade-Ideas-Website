"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import dynamic from "next/dynamic";

// Dynamic imports for below-the-fold content to improve main thread activity metrics (TBT/LCP optimization)
const PerformanceSection = dynamic(() => import("@/components/seo/PerformanceSection"), { ssr: true });
const TimelineSection = dynamic(() => import("@/components/seo/TimelineSection"), { ssr: true });
const PricingSection = dynamic(() => import("@/components/seo/PricingSection"), { ssr: true });
const FaqSection = dynamic(() => import("@/components/seo/FaqSection"), { ssr: true });
const CTASection = dynamic(() => import("@/components/seo/CTASection"), { ssr: true });

// A helper component to wrap text safely without linking "SEO" anymore as requested
const SEOText = ({ children }: { children: React.ReactNode }) => {
    return <>{children}</>;
};

// (Assuming we are inside the SEOLandingPage component, we need to add the state variable)
export default function SEOLandingPage() {
    const t = useTranslations("SEO");
    const [isPlaying, setIsPlaying] = useState(false);

    const faqs = [
        // ... (data already injected above)
        {
            question: t('faq1_q'),
            answer: t('faq1_a')
        },
        {
            question: t('faq2_q'),
            answer: t('faq2_a')
        },
        {
            question: t('faq3_q'),
            answer: t('faq3_a')
        },
        {
            question: t('faq4_q'),
            answer: t('faq4_a')
        },
        {
            question: t('faq5_q'),
            answer: t('faq5_a')
        },
        {
            question: t('faq6_q'),
            answer: t('faq6_a')
        }
    ];

    return (
        <div className="bg-[#eef8fd] dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans antialiased">
            {/* ... Existing header ... */}
            <div className="bg-[#eef8fd] w-full py-4 px-4 flex flex-col sm:flex-row items-center justify-center gap-6 shadow-sm z-50 relative">
                <div className="text-[#1E3A1A] font-[Oswald] font-bold text-[1.35rem] md:text-2xl uppercase tracking-wider">
                    <SEOText>{t('seo_page_title')}</SEOText>
                </div>
                <button className="bg-[#1E3A1A] text-white px-8 py-3 text-sm font-bold uppercase rounded-sm hover:bg-[#3AAB43] transition shadow-md" onClick={() => setIsPlaying(true)}>
                    {t('seo_btn_video')}
                </button>
            </div>

            <header className="bg-[#1E3A1A] text-white relative overflow-hidden">
                {/* Background Image & Green Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/picture-for-google-ads1.webp"
                        alt="SEO Strategy"
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                    />
                    {/* Dark Green overlay at 60% opacity to give a strong green tint */}
                    <div className="absolute inset-0 bg-[#1E3A1A]/80"></div>
                </div>

                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat z-0"></div>
                <div className="max-w-7xl mx-auto px-4 pt-16 pb-28 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-16">
                        <div className="w-full lg:w-[45%] space-y-5">
                            <h1 className="text-[26px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-[Oswald] font-bold uppercase leading-[1.1] tracking-normal drop-shadow-sm text-white" dangerouslySetInnerHTML={{ __html: t.raw('seo_hero_title') }}>
                            </h1>
                            <p className="text-[14px] md:text-[17px] lg:text-[18.5px] font-bold text-white leading-[1.5] font-[Arial] drop-shadow-sm" dangerouslySetInnerHTML={{ __html: t.raw('seo_hero_p1') }}>
                            </p>
                            <p className="text-[14px] md:text-[17px] lg:text-[18.5px] font-bold text-white leading-[1.5] font-[Arial] mt-6 drop-shadow-sm" dangerouslySetInnerHTML={{ __html: t.raw('seo_hero_p2') }}>
                            </p>
                        </div>
                        <div className="w-full lg:w-[55%] pl-0">
                            {/* Click to play video component structurally matching homepage with a white border and straight edges */}
                            <div className="aspect-video bg-black/90 shadow-[0_30px_60px_rgba(0,0,0,0.6)] w-full max-w-[900px] flex items-center justify-center relative overflow-hidden border-[4px] lg:border-[6px] border-white ml-auto">
                                {!isPlaying ? (
                                    <div
                                        className="absolute inset-0 z-20 cursor-pointer group"
                                        onClick={() => setIsPlaying(true)}
                                    >
                                        <Image
                                            src="/images/SEO_para_video.jpg"
                                            alt="Watch Video"
                                            fill
                                            className="object-cover scale-[1.03] transition-transform duration-700 group-hover:scale-[1.08]"
                                            priority
                                            fetchPriority="high"
                                        />
                                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                                            <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                                                <svg className="w-8 h-8 text-[#1E3A1A] fill-current ml-1" viewBox="0 0 24 24">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <iframe
                                        className="w-full h-full absolute inset-0 z-30"
                                        src="https://www.youtube.com/embed/ZeiacMBFa6Y?autoplay=1&rel=0"
                                        title="Lemonade Ideas SEO Video"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute bottom-0 left-0 right-0 h-32 bg-white dark:bg-gray-900"
                    style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
                ></div>
            </header>


            <PerformanceSection />
            <TimelineSection />
            <PricingSection />
            <FaqSection faqs={faqs} />
            <CTASection />

            {/* Removed blocking FontAwesome script tag, it's now handled via CSS in layout.tsx */}
        </div>
    );
}
