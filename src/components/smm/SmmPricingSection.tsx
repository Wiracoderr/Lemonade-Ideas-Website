"use client";
import React from 'react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function SmmPricingSection() {
    const t = useTranslations('SMM');
    return (
        <section className="py-24 px-4 bg-white relative overflow-hidden font-sans" id="pricing" data-purpose="pricing">
            <div className="max-w-[1240px] mx-auto">
                <div className="mb-6 flex flex-col items-center text-center">
                    <div className="relative w-full flex justify-center items-center mb-10 pt-8 mt-12">
                        <span className="text-7xl md:text-9xl font-[Oswald] font-bold uppercase text-gray-100 tracking-widest absolute select-none pointer-events-none opacity-80 whitespace-nowrap">
                            {t('pricing_watermark')}
                        </span>
                        <h2 className="relative z-10 text-4xl md:text-6xl font-[Oswald] font-bold uppercase text-[#143d1f] tracking-tight text-center">
                            {t('pricing_title')}
                        </h2>
                    </div>

                    <p className="text-[#333] w-full text-[15px] md:text-[16.8px] font-[Roboto] text-center tracking-wide leading-[1.8]">
                        {t('pricing_subtitle')}
                    </p>
                </div>

                <div className="bg-[#f0f9fa] rounded-2xl shadow-xl overflow-hidden border border-gray-100 mt-12 w-full max-w-[1400px]">
                    {/* Top Green Banner */}
                    <div className="bg-[#38a149] py-5 text-center shadow-inner">
                        <h3 className="text-white font-[Oswald] font-bold text-2xl md:text-3xl uppercase tracking-widest text-shadow-sm">
                            {t('pricing_plan_banner')}
                        </h3>
                    </div>

                    {/* Split White Cards - 3 columns for SMM */}
                    <div className="p-6 md:p-8 flex flex-col lg:flex-row gap-6 md:gap-8">
                        {/* Column 1: Starter */}
                        <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
                            <div className="text-center mb-6 pb-6 border-b border-dotted border-gray-300">
                                <h4 className="text-xl md:text-2xl font-[Oswald] font-bold uppercase text-gray-900 mb-4 tracking-wide">{t('pricing_starter_title')}</h4>
                                <div className="flex justify-center items-center gap-2">
                                    <span className="text-4xl md:text-5xl font-bold text-gray-900 font-[Oswald]">{t('pricing_starter_price')}</span>
                                </div>
                            </div>
                            <ul className="space-y-4 text-[13px] xl:text-[15px] text-gray-600 font-[Roboto] flex-grow">
                                <li className="flex items-start pb-4 border-b border-dotted border-gray-200">
                                    <i className="fas fa-check-circle text-[#2d7a36] mr-3 text-lg mt-0.5"></i>
                                    <span className="leading-snug">{t('pricing_starter_feature_1')}</span>
                                </li>
                                <li className="flex items-start pb-4 border-b border-dotted border-gray-200">
                                    <i className="fas fa-check-circle text-[#2d7a36] mr-3 text-lg mt-0.5"></i>
                                    <span className="leading-snug">{t('pricing_starter_feature_2')}</span>
                                </li>
                                <li className="flex items-start pb-4 border-b border-dotted border-gray-200">
                                    <i className="fas fa-check-circle text-[#2d7a36] mr-3 text-lg mt-0.5"></i>
                                    <span className="leading-snug">{t('pricing_starter_feature_3')}</span>
                                </li>
                                <li className="flex items-start pb-4 border-b border-dotted border-gray-200 border-none">
                                    <i className="fas fa-check-circle text-[#2d7a36] mr-3 text-lg mt-0.5"></i>
                                    <span className="leading-snug">{t('pricing_starter_feature_4')}</span>
                                </li>
                            </ul>
                        </div>

                        {/* Column 2: Growth */}
                        <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
                            <div className="text-center mb-6 pb-6 border-b border-dotted border-gray-300">
                                <h4 className="text-xl md:text-2xl font-[Oswald] font-bold uppercase text-gray-900 mb-4 tracking-wide">{t('pricing_growth_title')}</h4>
                                <div className="flex justify-center items-center gap-2">
                                    <span className="text-4xl md:text-5xl font-bold text-gray-900 font-[Oswald]">{t('pricing_growth_price')}</span>
                                </div>
                            </div>
                            <ul className="space-y-4 text-[13px] xl:text-[15px] text-gray-600 font-[Roboto] flex-grow">
                                <li className="flex items-start pb-4 border-b border-dotted border-gray-200">
                                    <i className="fas fa-check-circle text-[#2d7a36] mr-3 text-lg mt-0.5"></i>
                                    <span className="leading-snug">{t('pricing_growth_feature_1')}</span>
                                </li>
                                <li className="flex items-start pb-4 border-b border-dotted border-gray-200">
                                    <i className="fas fa-check-circle text-[#2d7a36] mr-3 text-lg mt-0.5"></i>
                                    <span className="leading-snug">{t('pricing_growth_feature_2')}</span>
                                </li>
                                <li className="flex items-start pb-4 border-b border-dotted border-gray-200">
                                    <i className="fas fa-check-circle text-[#2d7a36] mr-3 text-lg mt-0.5"></i>
                                    <span className="leading-snug">{t('pricing_growth_feature_3')}</span>
                                </li>
                                <li className="flex items-start pb-4 border-b border-dotted border-gray-200 border-none">
                                    <i className="fas fa-check-circle text-[#2d7a36] mr-3 text-lg mt-0.5"></i>
                                    <span className="leading-snug">{t('pricing_growth_feature_4')}</span>
                                </li>
                            </ul>
                        </div>
                        
                        {/* Column 3: Comprehensive */}
                        <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
                            <div className="text-center mb-6 pb-6 border-b border-dotted border-gray-300">
                                <h4 className="text-xl md:text-2xl font-[Oswald] font-bold uppercase text-gray-900 mb-4 tracking-wide">{t('pricing_comp_title')}</h4>
                                <div className="flex justify-center items-center gap-2">
                                    <span className="text-4xl md:text-5xl font-bold text-gray-900 font-[Oswald]">{t('pricing_comp_price')}</span>
                                </div>
                            </div>
                            <ul className="space-y-4 text-[13px] xl:text-[15px] text-gray-600 font-[Roboto] flex-grow">
                                <li className="flex items-start pb-4 border-b border-dotted border-gray-200">
                                    <i className="fas fa-check-circle text-[#2d7a36] mr-3 text-lg mt-0.5"></i>
                                    <span className="leading-snug">{t('pricing_comp_feature_1')}</span>
                                </li>
                                <li className="flex items-start pb-4 border-b border-dotted border-gray-200">
                                    <i className="fas fa-check-circle text-[#2d7a36] mr-3 text-lg mt-0.5"></i>
                                    <span className="leading-snug">{t('pricing_comp_feature_2')}</span>
                                </li>
                                <li className="flex items-start pb-4 border-b border-dotted border-gray-200">
                                    <i className="fas fa-check-circle text-[#2d7a36] mr-3 text-lg mt-0.5"></i>
                                    <span className="leading-snug">{t('pricing_comp_feature_3')}</span>
                                </li>
                                <li className="flex items-start pb-4 border-b border-dotted border-gray-200">
                                    <i className="fas fa-check-circle text-[#2d7a36] mr-3 text-lg mt-0.5"></i>
                                    <span className="leading-snug">{t('pricing_comp_feature_4')}</span>
                                </li>
                                <li className="flex items-start pb-4 border-b border-dotted border-gray-200 border-none">
                                    <i className="fas fa-check-circle text-[#2d7a36] mr-3 text-lg mt-0.5"></i>
                                    <span className="leading-snug">{t('pricing_comp_feature_5')}</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Get Started Button */}
                    <div className="px-6 md:px-8 pb-8 pt-2">
                        <Link href="/get-started" className="w-full bg-[#143d1f] text-white py-4 rounded-xl font-[Oswald] font-bold text-lg uppercase tracking-widest hover:bg-[#1f562e] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3 decoration-none">
                            {t('pricing_get_started')} <i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
