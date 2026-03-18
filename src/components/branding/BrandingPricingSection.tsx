import React from 'react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function BrandingPricingSection() {
    const t = useTranslations("Branding");
    return (
        <section className="py-24 px-4 bg-[#eff8fa] relative overflow-hidden font-sans" id="pricing">
            <div className="max-w-[1240px] mx-auto">
                <div className="mb-12 flex flex-col items-center text-center">
                    <div className="relative w-full flex justify-center items-center mb-10 pt-8">
                        <span className="text-7xl md:text-9xl font-[Oswald] font-bold uppercase text-white tracking-widest absolute select-none pointer-events-none opacity-80 whitespace-nowrap">
                            {t('price_wm')}
                        </span>
                        <h3 className="relative z-10 text-sm md:text-base text-gray-500 uppercase tracking-widest font-bold mt-2">
                            {t('price_sub')}
                        </h3>
                    </div>

                    <p className="text-[#1E3A1A] w-full text-[16px] md:text-[18px] lg:text-[20px] font-[Oswald] font-bold text-center tracking-wide leading-[1.6] uppercase max-w-5xl mx-auto">
                        {t('price_desc')}
                    </p>
                </div>

                <div className="bg-[#f0f9fa] rounded-2xl shadow-xl overflow-hidden border border-gray-200 mt-8">
                    {/* Top Green Banner */}
                    <div className="bg-[#3AAB43] py-5 text-center shadow-inner">
                        <h3 className="text-white font-[Oswald] font-bold text-2xl md:text-3xl uppercase tracking-widest text-shadow-sm">
                            {t('price_title')}
                        </h3>
                    </div>

                    {/* Split White Cards - 3 Columns */}
                    <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {/* Column 1 - Basic */}
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center">
                            <div className="mb-6 pb-6 border-b border-dotted border-gray-300 w-full">
                                <h4 className="text-xl md:text-[22px] font-[Oswald] font-bold uppercase text-gray-900 mb-3 tracking-wide">{t('basic_pkg')}</h4>
                                <div className="flex justify-center items-center">
                                    <span className="text-4xl font-bold text-[#1E3A1A] font-[Oswald]">{t('basic_val')}</span>
                                </div>
                            </div>
                            <ul className="space-y-5 text-[14px] text-gray-600 font-[Arial] flex-grow text-left w-full pl-2">
                                <li className="flex items-start pb-5 border-b border-dotted border-gray-200">
                                    <CheckCircle className="text-[#1E3A1A] mr-4 text-lg mt-0.5" />
                                    <span className="leading-snug">{t('basic_i1')}</span>
                                </li>
                                <li className="flex items-start pb-5 border-b border-dotted border-gray-200">
                                    <CheckCircle className="text-[#1E3A1A] mr-4 text-lg mt-0.5" />
                                    <span className="leading-snug">{t('basic_i2')}</span>
                                </li>
                                <li className="flex items-start pb-5 border-b border-dotted border-gray-200">
                                    <CheckCircle className="text-[#1E3A1A] mr-4 text-lg mt-0.5" />
                                    <span className="leading-snug">{t('basic_i3')}</span>
                                </li>
                                <li className="flex items-start pb-2 border-none">
                                    <CheckCircle className="text-[#1E3A1A] mr-4 text-lg mt-0.5" />
                                    <span className="leading-snug">{t('basic_i4')}</span>
                                </li>
                            </ul>
                        </div>

                        {/* Column 2 - Standard */}
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center">
                            <div className="mb-6 pb-6 border-b border-dotted border-gray-300 w-full">
                                <h4 className="text-xl md:text-[22px] font-[Oswald] font-bold uppercase text-gray-900 mb-3 tracking-wide">{t('std_pkg')}</h4>
                                <div className="flex justify-center items-center">
                                    <span className="text-4xl font-bold text-[#1E3A1A] font-[Oswald]">{t('std_val')}</span>
                                </div>
                            </div>
                            <ul className="space-y-5 text-[14px] text-gray-600 font-[Arial] flex-grow text-left w-full pl-2">
                                <li className="flex items-start pb-5 border-b border-dotted border-gray-200">
                                    <CheckCircle className="text-[#1E3A1A] mr-4 text-lg mt-0.5" />
                                    <span className="leading-snug">{t('std_i1')}</span>
                                </li>
                                <li className="flex items-start pb-5 border-b border-dotted border-gray-200">
                                    <CheckCircle className="text-[#1E3A1A] mr-4 text-lg mt-0.5" />
                                    <span className="leading-snug">{t('std_i2')}</span>
                                </li>
                                <li className="flex items-start pb-5 border-b border-dotted border-gray-200">
                                    <CheckCircle className="text-[#1E3A1A] mr-4 text-lg mt-0.5" />
                                    <span className="leading-snug">{t('std_i3')}</span>
                                </li>
                                <li className="flex items-start pb-2 border-none">
                                    <CheckCircle className="text-[#1E3A1A] mr-4 text-lg mt-0.5" />
                                    <span className="leading-snug">{t('std_i4')}</span>
                                </li>
                            </ul>
                        </div>
                        
                        {/* Column 3 - Premium */}
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center">
                            <div className="mb-6 pb-6 border-b border-dotted border-gray-300 w-full">
                                <h4 className="text-xl md:text-[22px] font-[Oswald] font-bold uppercase text-gray-900 mb-3 tracking-wide">{t('prem_pkg')}</h4>
                                <div className="flex justify-center items-center">
                                    <span className="text-4xl font-bold text-[#1E3A1A] font-[Oswald]">{t('prem_val')}</span>
                                </div>
                            </div>
                            <ul className="space-y-5 text-[14px] text-gray-600 font-[Arial] flex-grow text-left w-full pl-2">
                                <li className="flex items-start pb-5 border-b border-dotted border-gray-200">
                                    <CheckCircle className="text-[#1E3A1A] mr-4 text-lg mt-0.5" />
                                    <span className="leading-snug">{t('prem_i1')}</span>
                                </li>
                                <li className="flex items-start pb-5 border-b border-dotted border-gray-200">
                                    <CheckCircle className="text-[#1E3A1A] mr-4 text-lg mt-0.5" />
                                    <span className="leading-snug">{t('prem_i2')}</span>
                                </li>
                                <li className="flex items-start pb-2 border-none">
                                    <CheckCircle className="text-[#1E3A1A] mr-4 text-lg mt-0.5" />
                                    <span className="leading-snug">{t('prem_i3')}</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Get Started Button */}
                    <div className="px-6 md:px-8 pb-8 pt-2">
                        <Link href="/get-started" className="w-full bg-[#1E3A1A] text-white py-4 rounded-xl font-[Oswald] font-bold text-lg uppercase tracking-widest hover:bg-[#3AAB43] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3 decoration-none">
                            {t('price_btn')} <ArrowRight />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
