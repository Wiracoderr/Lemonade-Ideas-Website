"use client";

import React from "react";
import { useTranslations } from 'next-intl';

// A helper component to wrap text safely without linking "SEO" anymore as requested
const SEOText = ({ children }: { children: React.ReactNode }) => {
    return <>{children}</>;
};

export default function PricingSection() {
    const t = useTranslations("SEO");
    return (
        <section className="py-24 px-4 bg-white dark:bg-gray-900 relative overflow-hidden" id="pricing">
            <div className="max-w-[1240px] mx-auto">
                <div className="mb-6 flex flex-col items-center">
                    <div className="relative h-20 md:h-28 w-full flex justify-center items-center overflow-hidden mb-8">
                        <span className="text-6xl md:text-9xl font-[Oswald] font-bold uppercase text-gray-200 dark:text-gray-800 tracking-widest absolute select-none pointer-events-none opacity-80 whitespace-nowrap">
                            {t('seo_price_wm')}
                        </span>
                        <h2 className="relative z-10 text-4xl md:text-6xl font-[Oswald] font-bold uppercase text-[#143d1f] dark:text-white tracking-tight text-center">
                            <SEOText>{t('seo_price_sub')}</SEOText>
                        </h2>
                    </div>

                    <p className="text-[#333] dark:text-gray-300 w-full text-[15px] md:text-[16.8px] font-[Roboto] text-justify tracking-wide leading-[1.8]">
                        {t('seo_price_desc')}
                    </p>
                </div>

                <div className="bg-[#f0f9fa] dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
                    {/* Top Green Banner */}
                    <div className="bg-[#38a149] py-5 text-center shadow-inner">
                        <h3 className="text-white font-[Oswald] font-bold text-2xl md:text-3xl uppercase tracking-widest text-shadow-sm">
                            <SEOText>{t('seo_price_title')}</SEOText>
                        </h3>
                    </div>

                    {/* Split White Cards */}
                    <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8">
                        {/* Column 1 */}
                        <div className="flex-1 bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col">
                            <div className="text-center mb-6 pb-6 border-b border-dotted border-gray-300 dark:border-gray-700">
                                <div className="flex justify-center items-center gap-2">
                                    <span className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-[Oswald]">{t('seo_pkg1_price')}</span>
                                    <span className="text-sm font-bold text-gray-800 dark:text-gray-300">{t('seo_pkg1_name')}</span>
                                </div>
                                <div className="text-sm text-gray-500 mt-2 font-[Roboto]">{t('seo_pkg1_time')}</div>
                            </div>
                            <ul className="space-y-4 text-[15px] text-gray-600 dark:text-gray-400 font-[Roboto] flex-grow">
                                <li className="flex items-center pb-4 border-b border-dotted border-gray-200 dark:border-gray-800">
                                    <i className="fas fa-check-circle text-[#2d7a36] dark:text-[#facc15] mr-4 text-lg"></i>
                                    <span><SEOText>{t('seo_pkg1_i1')}</SEOText></span>
                                </li>
                                <li className="flex items-center pb-4 border-b border-dotted border-gray-200 dark:border-gray-800">
                                    <i className="fas fa-check-circle text-[#2d7a36] dark:text-[#facc15] mr-4 text-lg"></i>
                                    <span>{t('seo_pkg1_i2')}</span>
                                </li>
                                <li className="flex items-center pb-4 border-b border-dotted border-gray-200 dark:border-gray-800">
                                    <i className="fas fa-check-circle text-[#2d7a36] dark:text-[#facc15] mr-4 text-lg"></i>
                                    <span>{t('seo_pkg1_i3')}</span>
                                </li>
                                <li className="flex items-center pb-4 border-b border-dotted border-gray-200 dark:border-gray-800 border-none">
                                    <i className="fas fa-check-circle text-[#2d7a36] dark:text-[#facc15] mr-4 text-lg"></i>
                                    <span><SEOText>{t('seo_pkg1_i4')}</SEOText></span>
                                </li>
                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div className="flex-1 bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col">
                            <div className="text-center mb-6 pb-6 border-b border-dotted border-gray-300 dark:border-gray-700">
                                <div className="flex justify-center items-center gap-2">
                                    <span className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-[Oswald]">{t('seo_pkg2_price')}</span>
                                    <span className="text-sm font-bold text-gray-800 dark:text-gray-300">{t('seo_pkg2_name')}</span>
                                </div>
                                <div className="text-sm text-gray-500 mt-2 font-[Roboto]">{t('seo_pkg2_time')}</div>
                            </div>
                            <ul className="space-y-4 text-[15px] text-gray-600 dark:text-gray-400 font-[Roboto] flex-grow">
                                <li className="flex items-center pb-4 border-b border-dotted border-gray-200 dark:border-gray-800">
                                    <i className="fas fa-check-circle text-[#2d7a36] dark:text-[#facc15] mr-4 text-lg"></i>
                                    <span>{t('seo_pkg2_i1')}</span>
                                </li>
                                <li className="flex items-center pb-4 border-b border-dotted border-gray-200 dark:border-gray-800">
                                    <i className="fas fa-check-circle text-[#2d7a36] dark:text-[#facc15] mr-4 text-lg"></i>
                                    <span>{t('seo_pkg2_i2')}</span>
                                </li>
                                <li className="flex items-center pb-4 border-b border-dotted border-gray-200 dark:border-gray-800">
                                    <i className="fas fa-check-circle text-[#2d7a36] dark:text-[#facc15] mr-4 text-lg"></i>
                                    <span>{t('seo_pkg2_i3')}</span>
                                </li>
                                <li className="flex items-center pb-4 border-b border-dotted border-gray-200 dark:border-gray-800 border-none">
                                    <i className="fas fa-check-circle text-[#2d7a36] dark:text-[#facc15] mr-4 text-lg"></i>
                                    <span>{t('seo_pkg2_i4')}</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Get Started Button */}
                    <div className="px-6 md:px-8 pb-8 pt-2">
                        <a href="/get-started" className="w-full bg-[#143d1f] text-white py-4 rounded-xl font-[Oswald] font-bold text-lg uppercase tracking-widest hover:bg-[#1f562e] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3 decoration-none">
                            {t('seo_price_btn')} <i className="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
