import React from 'react';
import { useTranslations } from 'next-intl';

export default function SmmFeaturesSection() {
    const t = useTranslations('SMM');
    return (
        <section className="py-20 px-4 bg-white dark:bg-gray-900 relative overflow-hidden" data-purpose="features">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16 relative">
                    <div className="absolute inset-0 flex items-center justify-center opacity-5 dark:opacity-10 pointer-events-none -mt-8">
                        <span className="text-6xl md:text-[180px] font-[Oswald] font-bold uppercase text-gray-400 tracking-tighter leading-none whitespace-nowrap">
                            {t('features_approach')}
                        </span>
                    </div>
                    <h4 className="text-[#34a853] font-bold text-xs uppercase tracking-[0.3em] mb-4 relative z-10">
                        {t('features_approach_subtitle')}
                    </h4>
                    <h2 className="text-4xl md:text-5xl font-[Oswald] font-bold text-[#1E3A1A] dark:text-white uppercase relative z-10 tracking-tight flex flex-col items-center">
                        <span className="block mb-2">{t('features_title_line_1')}</span>
                        <span className="block">{t('features_title_line_2')}</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-[#eff8fa] dark:bg-gray-800 p-8 rounded-sm text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                        <div className="text-[#1E3A1A] dark:text-[#facc15] text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fas fa-clipboard-list"></i>
                        </div>
                        <h3 className="font-[Oswald] font-bold text-xl uppercase mb-4 text-[#1E3A1A] dark:text-white tracking-wide">
                            {t('features_card_1_title')}
                        </h3>
                        <p className="text-[13px] text-[#1E3A1A] dark:text-gray-400 leading-[1.8] font-medium">
                            {t('features_card_1_desc')}
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#eff8fa] dark:bg-gray-800 p-8 rounded-sm text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                        <div className="text-[#1E3A1A] dark:text-[#facc15] text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fas fa-file-signature"></i>
                        </div>
                        <h3 className="font-[Oswald] font-bold text-xl uppercase mb-4 text-[#1E3A1A] dark:text-white tracking-wide">
                            {t('features_card_2_title')}
                        </h3>
                        <p className="text-[13px] text-[#1E3A1A] dark:text-gray-400 leading-[1.8] font-medium">
                            {t('features_card_2_desc')}
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#eff8fa] dark:bg-gray-800 p-8 rounded-sm text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                        <div className="text-[#1E3A1A] dark:text-[#facc15] text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fas fa-credit-card"></i>
                        </div>
                        <h3 className="font-[Oswald] font-bold text-xl uppercase mb-4 text-[#1E3A1A] dark:text-white tracking-wide">
                            {t('features_card_3_title')}
                        </h3>
                        <p className="text-[13px] text-[#1E3A1A] dark:text-gray-400 leading-[1.8] font-medium">
                            {t('features_card_3_desc')}
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#eff8fa] dark:bg-gray-800 p-8 rounded-sm text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                        <div className="text-[#1E3A1A] dark:text-[#facc15] text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fas fa-calendar-alt"></i>
                        </div>
                        <h3 className="font-[Oswald] font-bold text-xl uppercase mb-4 text-[#1E3A1A] dark:text-white tracking-wide">
                            {t('features_card_4_title')}
                        </h3>
                        <p className="text-[13px] text-[#1E3A1A] dark:text-gray-400 leading-[1.8] font-medium">
                            {t('features_card_4_desc')}
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-[#eff8fa] dark:bg-gray-800 p-8 rounded-sm text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                        <div className="text-[#1E3A1A] dark:text-[#facc15] text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fas fa-cogs"></i>
                        </div>
                        <h3 className="font-[Oswald] font-bold text-xl uppercase mb-4 text-[#1E3A1A] dark:text-white tracking-wide">
                            {t('features_card_5_title')}
                        </h3>
                        <p className="text-[13px] text-[#1E3A1A] dark:text-gray-400 leading-[1.8] font-medium">
                            {t('features_card_5_desc')}
                        </p>
                    </div>

                    {/* Card 6 */}
                    <div className="bg-[#eff8fa] dark:bg-gray-800 p-8 rounded-sm text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                        <div className="text-[#1E3A1A] dark:text-[#facc15] text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fas fa-chart-line"></i>
                        </div>
                        <h3 className="font-[Oswald] font-bold text-xl uppercase mb-4 text-[#1E3A1A] dark:text-white tracking-wide">
                            {t('features_card_6_title')}
                        </h3>
                        <p className="text-[13px] text-[#1E3A1A] dark:text-gray-400 leading-[1.8] font-medium">
                            {t('features_card_6_desc')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
