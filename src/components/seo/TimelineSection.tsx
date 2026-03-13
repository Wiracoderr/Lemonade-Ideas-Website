"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function TimelineSection() {
    const t = useTranslations("SEO");
    return (
        <section className="py-20 px-4 relative border-y border-gray-100 dark:border-gray-700 overflow-hidden">
            {/* Background color and texture */}
            <div className="absolute inset-0 bg-[#eff8fa] dark:bg-gray-900 z-0"></div>
            <div className="absolute inset-0 opacity-40 z-0 mix-blend-multiply dark:mix-blend-screen bg-[url(/images/layer-1.png)] bg-[length:45%_100%] bg-left bg-no-repeat"></div>

            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center relative z-10">
                <div className="lg:w-1/2 space-y-10">
                    <div>
                        {/* Updated title with top-left green bracket accent */}
                        <div className="relative pl-6 pt-2 mb-6">
                            <div className="absolute left-0 top-0 w-8 h-8 border-l-[4px] border-t-[4px] border-green-700 rounded-tl-sm"></div>
                            <h2 className="text-3xl md:text-5xl font-[Oswald] font-bold uppercase text-[#143d1f] dark:text-white leading-[1.1] tracking-tight" dangerouslySetInnerHTML={{ __html: t.raw('seo_time_title') }}>
                            </h2>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 text-[15px] leading-relaxed font-[Roboto] max-w-lg">
                            {t('seo_time_desc')}
                        </p>
                    </div>

                    {/* Timeline items without the grey bounding box */}
                    <div className="space-y-10">
                        <div className="flex gap-6 items-start group">
                            <div className="flex-shrink-0">
                                {/* Updated icon styling */}
                                <div className="w-[50px] h-[50px] bg-[#143d1f] dark:bg-gray-800 rounded-lg flex items-center justify-center text-[#facc15] text-xl group-hover:scale-110 transition-transform">
                                    <i className="fas fa-chart-line"></i>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-[Oswald] font-bold text-xl uppercase text-[#143d1f] dark:text-white tracking-wide">
                                    {t('seo_time_i1_t')}
                                </h3>
                                <p className="text-[14px] text-gray-700 dark:text-gray-400 mt-2 leading-relaxed">
                                    {t('seo_time_i1_d')}
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start group">
                            <div className="flex-shrink-0">
                                <div className="w-[50px] h-[50px] bg-[#143d1f] dark:bg-gray-800 rounded-lg flex items-center justify-center text-[#facc15] text-xl group-hover:scale-110 transition-transform">
                                    <i className="fas fa-cogs"></i>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-[Oswald] font-bold text-xl uppercase text-[#143d1f] dark:text-white tracking-wide">
                                    {t('seo_time_i2_t')}
                                </h3>
                                <p className="text-[14px] text-gray-700 dark:text-gray-400 mt-2 leading-relaxed">
                                    {t('seo_time_i2_d')}
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start group">
                            <div className="flex-shrink-0">
                                <div className="w-[50px] h-[50px] bg-[#143d1f] dark:bg-gray-800 rounded-lg flex items-center justify-center text-[#facc15] text-xl group-hover:scale-110 transition-transform">
                                    <i className="fas fa-chart-pie"></i>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-[Oswald] font-bold text-xl uppercase text-[#143d1f] dark:text-white tracking-wide">
                                    {t('seo_time_i3_t')}
                                </h3>
                                <p className="text-[14px] text-gray-700 dark:text-gray-400 mt-2 leading-relaxed">
                                    {t('seo_time_i3_d')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/2 relative group px-4">
                    <Image
                        src="/images/person-laptop-charts.webp"
                        alt="Person working on laptop with charts"
                        width={800}
                        height={600}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="rounded-[2rem] shadow-2xl w-full object-cover h-[500px] md:h-[600px] border-8 border-white dark:border-gray-800 relative z-10"
                    />
                </div>
            </div>
        </section>
    );
}
