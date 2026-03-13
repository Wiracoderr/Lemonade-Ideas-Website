"use client";

import React from "react";
import { useTranslations } from 'next-intl';

// A helper component to wrap text safely without linking "SEO" anymore as requested
const SEOText = ({ children }: { children: React.ReactNode }) => {
    return <>{children}</>;
};

export default function PerformanceSection() {
    const t = useTranslations("SEO");
    return (
        <section className="py-20 px-4 bg-white dark:bg-gray-900 relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16 relative">
                    <div className="absolute inset-0 flex items-center justify-center opacity-5 dark:opacity-10 pointer-events-none -mt-8">
                        <span className="text-6xl md:text-[180px] font-[Oswald] font-bold uppercase text-gray-400 tracking-tighter leading-none whitespace-nowrap">
                            {t('seo_perf_bg')}
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-[Oswald] font-bold text-[#143d1f] dark:text-white uppercase mb-8 relative z-10 tracking-tight">
                        {t('seo_perf_title')}
                    </h2>
                    <p className="max-w-5xl mx-auto text-gray-700 dark:text-gray-300 relative z-10 text-base md:text-[15px] font-medium font-[Inter] leading-relaxed">
                        {t('seo_perf_desc')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Card 1 */}
                    <div className="bg-[#eff8fa] dark:bg-gray-800 p-8 rounded-sm text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                        <div className="text-[#143d1f] dark:text-[#facc15] text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fas fa-search"></i>
                        </div>
                        <h3 className="font-[Oswald] font-bold text-xl uppercase mb-4 text-[#143d1f] dark:text-white tracking-wide">
                            {t('seo_p_c1_t')}
                        </h3>
                        <p className="text-[13px] text-gray-600 dark:text-gray-400 leading-[1.8] font-medium">
                            {t('seo_p_c1_d')}
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#eff8fa] dark:bg-gray-800 p-8 rounded-sm text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                        <div className="text-[#143d1f] dark:text-[#facc15] text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fas fa-laptop-code"></i>
                        </div>
                        <h3 className="font-[Oswald] font-bold text-xl uppercase mb-4 text-[#143d1f] dark:text-white tracking-wide">
                            <SEOText>{t('seo_p_c2_t')}</SEOText>
                        </h3>
                        <p className="text-[13px] text-gray-600 dark:text-gray-400 leading-[1.8] font-medium">
                            {t('seo_p_c2_d')}
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#eff8fa] dark:bg-gray-800 p-8 rounded-sm text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                        <div className="text-[#143d1f] dark:text-[#facc15] text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fas fa-map-marked-alt"></i>
                        </div>
                        <h3 className="font-[Oswald] font-bold text-xl uppercase mb-4 text-[#143d1f] dark:text-white tracking-wide">
                            <SEOText>{t('seo_p_c3_t')}</SEOText>
                        </h3>
                        <p className="text-[13px] text-gray-600 dark:text-gray-400 leading-[1.8] font-medium">
                            {t('seo_p_c3_d')}
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#eff8fa] dark:bg-gray-800 p-8 rounded-sm text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                        <div className="text-[#143d1f] dark:text-[#facc15] text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fas fa-pen-fancy"></i>
                        </div>
                        <h3 className="font-[Oswald] font-bold text-xl uppercase mb-4 text-[#143d1f] dark:text-white tracking-wide">
                            {t('seo_p_c4_t')}
                        </h3>
                        <p className="text-[13px] text-gray-600 dark:text-gray-400 leading-[1.8] font-medium">
                            {t('seo_p_c4_d')}
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-[#eff8fa] dark:bg-gray-800 p-8 rounded-sm text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                        <div className="text-[#143d1f] dark:text-[#facc15] text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fas fa-store"></i>
                        </div>
                        <h3 className="font-[Oswald] font-bold text-xl uppercase mb-4 text-[#143d1f] dark:text-white tracking-wide">
                            {t('seo_p_c5_t')}
                        </h3>
                        <p className="text-[13px] text-gray-600 dark:text-gray-400 leading-[1.8] font-medium">
                            {t('seo_p_c5_d')}
                        </p>
                    </div>

                    {/* Card 6 */}
                    <div className="bg-[#eff8fa] dark:bg-gray-800 p-8 rounded-sm text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                        <div className="text-[#143d1f] dark:text-[#facc15] text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fas fa-list-ul"></i>
                        </div>
                        <h3 className="font-[Oswald] font-bold text-xl uppercase mb-4 text-[#143d1f] dark:text-white tracking-wide">
                            {t('seo_p_c6_t')}
                        </h3>
                        <p className="text-[13px] text-gray-600 dark:text-gray-400 leading-[1.8] font-medium">
                            {t('seo_p_c6_d')}
                        </p>
                    </div>

                    {/* Card 7 */}
                    <div className="bg-[#eff8fa] dark:bg-gray-800 p-8 rounded-sm text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                        <div className="text-[#143d1f] dark:text-[#facc15] text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fas fa-users"></i>
                        </div>
                        <h3 className="font-[Oswald] font-bold text-xl uppercase mb-4 text-[#143d1f] dark:text-white tracking-wide">
                            {t('seo_p_c7_t')}
                        </h3>
                        <p className="text-[13px] text-gray-600 dark:text-gray-400 leading-[1.8] font-medium">
                            {t('seo_p_c7_d')}
                        </p>
                    </div>

                    {/* Card 8 */}
                    <div className="bg-[#eff8fa] dark:bg-gray-800 p-8 rounded-sm text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                        <div className="text-[#143d1f] dark:text-[#facc15] text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fas fa-star"></i>
                        </div>
                        <h3 className="font-[Oswald] font-bold text-xl uppercase mb-4 text-[#143d1f] dark:text-white tracking-wide">
                            {t('seo_p_c8_t')}
                        </h3>
                        <p className="text-[13px] text-gray-600 dark:text-gray-400 leading-[1.8] font-medium">
                            {t('seo_p_c8_d')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
