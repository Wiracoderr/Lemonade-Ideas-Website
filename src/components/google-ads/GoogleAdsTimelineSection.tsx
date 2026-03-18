import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function GoogleAdsTimelineSection() {
    const t = useTranslations('GoogleAds');
    return (
        <section className="bg-[#eaf6fc] py-20 px-5 font-sans">
            <div className="mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="border-l-4 border-[#3AAB43] pl-6 mb-8">
                            <h2 className="text-3xl font-black uppercase text-gray-900 font-sans">{t('time_title')}</h2>
                        </div>
                        <div className="space-y-8 pl-2">
                            <p className="text-sm text-gray-600 mb-6">{t('time_desc')}</p>
                            <div className="relative">
                                <h3 className="font-bold text-gray-900 uppercase text-sm mb-2">{t('time_step1_title')}</h3>
                                <p className="text-xs text-gray-600">{t('time_step1_desc')}</p>
                                <p className="text-xs text-gray-500 mt-2 italic">{t('time_step1_sub')}</p>
                            </div>
                            <div className="relative">
                                <h3 className="font-bold text-gray-900 uppercase text-sm mb-2">{t('time_step2_title')}</h3>
                                <p className="text-xs text-gray-600">{t('time_step2_desc')}</p>
                                <p className="text-xs text-gray-500 mt-2 italic">{t('time_step2_sub')}</p>
                            </div>
                            <div className="relative">
                                <h3 className="font-bold text-gray-900 uppercase text-sm mb-2">{t('time_step3_title')}</h3>
                                <p className="text-xs text-gray-600">{t('time_step3_desc')}</p>
                                <p className="text-xs text-gray-500 mt-2 italic">{t('time_step3_sub')}</p>
                            </div>
                            <div className="relative">
                                <h3 className="font-bold text-gray-900 uppercase text-sm mb-2">{t('time_step4_title')}</h3>
                                <p className="text-xs text-gray-600">{t('time_step4_desc')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 flex justify-center w-full">
                        <div className="relative w-full max-w-[500px] aspect-[3/4] lg:ml-8 transform transition-transform hover:scale-105 duration-500">
                            {/* Desktop Image */}
                            <Image
                                src="/images/google-ads-timeline.avif"
                                alt="Paid Ads Timeline Breakdown"
                                fill
                                className="object-contain drop-shadow-2xl hidden lg:block"
                                sizes="50vw"
                            />
                            {/* Mobile Image */}
                            <Image
                                src="/images/google-ads-timeline-mobile.avif"
                                alt="Paid Ads Timeline Breakdown Mobile"
                                fill
                                className="object-contain drop-shadow-2xl block lg:hidden"
                                sizes="(max-width: 1024px) 400px, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
