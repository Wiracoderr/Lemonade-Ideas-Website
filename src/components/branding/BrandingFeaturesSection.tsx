import React from 'react';
import { useTranslations } from 'next-intl';
import { ClipboardCheck, FileText, CalendarCheck, Network, Settings, Laptop } from 'lucide-react';

export default function BrandingFeaturesSection() {
    const t = useTranslations("Branding");
    return (
        <section className="py-20 px-4 bg-white dark:bg-gray-900 relative overflow-hidden font-sans">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16 relative">
                    <span className="text-[#3AAB43] font-[Oswald] font-bold uppercase tracking-widest text-sm mb-4 block">
                        {t('feat_top')}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-[Oswald] font-black text-[#1E3A1A] dark:text-white uppercase mb-8 relative z-10 tracking-tight leading-[1.1]">
                        {t('feat_title')}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {/* Card 1 */}
                    <div className="bg-[#eff8fa] dark:bg-gray-800 p-8 rounded-sm text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                        <div className="text-[#1E3A1A] dark:text-[#FED52B] text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                            <ClipboardCheck />
                        </div>
                        <h3 className="font-[Oswald] font-bold text-[22px] uppercase mb-4 text-[#1E3A1A] dark:text-white tracking-wide">
                            {t('feat_c1_t')}
                        </h3>
                        <p className="text-[14px] text-gray-600 dark:text-gray-400 leading-[1.8] font-medium font-[Arial]">
                            {t('feat_c1_d')}
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#eff8fa] dark:bg-gray-800 p-8 rounded-sm text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                        <div className="text-[#1E3A1A] dark:text-[#FED52B] text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                            <FileText />
                        </div>
                        <h3 className="font-[Oswald] font-bold text-[22px] uppercase mb-4 text-[#1E3A1A] dark:text-white tracking-wide">
                            {t('feat_c2_t')}
                        </h3>
                        <p className="text-[14px] text-gray-600 dark:text-gray-400 leading-[1.8] font-medium font-[Arial]">
                            {t('feat_c2_d')}
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#eff8fa] dark:bg-gray-800 p-8 rounded-sm text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                        <div className="text-[#1E3A1A] dark:text-[#FED52B] text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                            <CalendarCheck />
                        </div>
                        <h3 className="font-[Oswald] font-bold text-[22px] uppercase mb-4 text-[#1E3A1A] dark:text-white tracking-wide">
                            {t('feat_c3_t')}
                        </h3>
                        <p className="text-[14px] text-gray-600 dark:text-gray-400 leading-[1.8] font-medium font-[Arial]">
                            {t('feat_c3_d')}
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#eff8fa] dark:bg-gray-800 p-8 rounded-sm text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                        <div className="text-[#1E3A1A] dark:text-[#FED52B] text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                            <Network />
                        </div>
                        <h3 className="font-[Oswald] font-bold text-[22px] uppercase mb-4 text-[#1E3A1A] dark:text-white tracking-wide">
                            {t('feat_c4_t')}
                        </h3>
                        <p className="text-[14px] text-gray-600 dark:text-gray-400 leading-[1.8] font-medium font-[Arial]">
                            {t('feat_c4_d')}
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-[#eff8fa] dark:bg-gray-800 p-8 rounded-sm text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                        <div className="text-[#1E3A1A] dark:text-[#FED52B] text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                            <Settings />
                        </div>
                        <h3 className="font-[Oswald] font-bold text-[22px] uppercase mb-4 text-[#1E3A1A] dark:text-white tracking-wide">
                            {t('feat_c5_t')}
                        </h3>
                        <p className="text-[14px] text-gray-600 dark:text-gray-400 leading-[1.8] font-medium font-[Arial]">
                            {t('feat_c5_d')}
                        </p>
                    </div>

                    {/* Card 6 */}
                    <div className="bg-[#eff8fa] dark:bg-gray-800 p-8 rounded-sm text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                        <div className="text-[#1E3A1A] dark:text-[#FED52B] text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                            <Laptop />
                        </div>
                        <h3 className="font-[Oswald] font-bold text-[22px] uppercase mb-4 text-[#1E3A1A] dark:text-white tracking-wide">
                            {t('feat_c6_t')}
                        </h3>
                        <p className="text-[14px] text-gray-600 dark:text-gray-400 leading-[1.8] font-medium font-[Arial]">
                            {t('feat_c6_d')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
