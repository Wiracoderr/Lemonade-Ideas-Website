import React from 'react';
import { useTranslations } from 'next-intl';

export default function GoogleAdsFeaturesSection() {
    const t = useTranslations('GoogleAds');
    return (
        <section className="py-20 px-4 bg-white dark:bg-gray-900 relative overflow-hidden font-sans">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16 relative">
                    <span className="text-[#38b04d] font-[Oswald] font-bold uppercase tracking-widest text-sm mb-4 block">
                        {t('feat_watermark')}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-[Oswald] font-black text-[#143d1f] dark:text-white uppercase mb-8 relative z-10 tracking-tight">
                        {t('feat_title')}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {/* Card 1 */}
                    <div className="bg-[#eff8fa] dark:bg-gray-800 p-8 rounded-sm text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                        <div className="text-[#143d1f] dark:text-[#facc15] text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fas fa-clipboard-check"></i>
                        </div>
                        <h3 className="font-[Oswald] font-bold text-[22px] uppercase mb-4 text-[#143d1f] dark:text-white tracking-wide">
                            {t('feat_card1_title')}
                        </h3>
                        <p className="text-[14px] text-gray-600 dark:text-gray-400 leading-[1.8] font-medium font-[Arial]">
                            {t('feat_card1_desc')}
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#eff8fa] dark:bg-gray-800 p-8 rounded-sm text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                        <div className="text-[#143d1f] dark:text-[#facc15] text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fas fa-file-contract"></i>
                        </div>
                        <h3 className="font-[Oswald] font-bold text-[22px] uppercase mb-4 text-[#143d1f] dark:text-white tracking-wide">
                            {t('feat_card2_title')}
                        </h3>
                        <p className="text-[14px] text-gray-600 dark:text-gray-400 leading-[1.8] font-medium font-[Arial]">
                            {t('feat_card2_desc')}
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#eff8fa] dark:bg-gray-800 p-8 rounded-sm text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                        <div className="text-[#143d1f] dark:text-[#facc15] text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fas fa-calendar-check"></i>
                        </div>
                        <h3 className="font-[Oswald] font-bold text-[22px] uppercase mb-4 text-[#143d1f] dark:text-white tracking-wide">
                            {t('feat_card3_title')}
                        </h3>
                        <p className="text-[14px] text-gray-600 dark:text-gray-400 leading-[1.8] font-medium font-[Arial]">
                            {t('feat_card3_desc')}
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#eff8fa] dark:bg-gray-800 p-8 rounded-sm text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                        <div className="text-[#143d1f] dark:text-[#facc15] text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fas fa-sitemap"></i>
                        </div>
                        <h3 className="font-[Oswald] font-bold text-[22px] uppercase mb-4 text-[#143d1f] dark:text-white tracking-wide">
                            {t('feat_card4_title')}
                        </h3>
                        <p className="text-[14px] text-gray-600 dark:text-gray-400 leading-[1.8] font-medium font-[Arial]">
                            {t('feat_card4_desc')}
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-[#eff8fa] dark:bg-gray-800 p-8 rounded-sm text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                        <div className="text-[#143d1f] dark:text-[#facc15] text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fas fa-cogs"></i>
                        </div>
                        <h3 className="font-[Oswald] font-bold text-[22px] uppercase mb-4 text-[#143d1f] dark:text-white tracking-wide">
                            {t('feat_card5_title')}
                        </h3>
                        <p className="text-[14px] text-gray-600 dark:text-gray-400 leading-[1.8] font-medium font-[Arial]">
                            {t('feat_card5_desc')}
                        </p>
                    </div>

                    {/* Card 6 */}
                    <div className="bg-[#eff8fa] dark:bg-gray-800 p-8 rounded-sm text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                        <div className="text-[#143d1f] dark:text-[#facc15] text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fas fa-laptop-code"></i>
                        </div>
                        <h3 className="font-[Oswald] font-bold text-[22px] uppercase mb-4 text-[#143d1f] dark:text-white tracking-wide">
                            {t('feat_card6_title')}
                        </h3>
                        <p className="text-[14px] text-gray-600 dark:text-gray-400 leading-[1.8] font-medium font-[Arial]">
                            {t('feat_card6_desc')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
