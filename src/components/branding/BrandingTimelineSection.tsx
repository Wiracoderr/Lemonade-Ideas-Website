import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function BrandingTimelineSection() {
    const t = useTranslations("Branding");
    return (
        <section className="bg-[#eef8fd] py-20 px-5 font-sans">
            <div className="mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left Side: Images Stack */}
                    <div className="order-2 lg:order-1 flex flex-col gap-6">
                        {/* Desktop Image 1 */}
                        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg hidden md:block">
                            <Image
                                src="/images/branding-timeline-1.webp"
                                alt="Branding Idea Trust"
                                fill
                                className="object-cover"
                                sizes="(min-width: 1024px) 50vw, 100vw"
                                unoptimized={true}
                            />
                        </div>
                        {/* Mobile Image 1 */}
                        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg block md:hidden">
                            <Image
                                src="/images/branding-timeline-1-mobile.webp"
                                alt="Branding Idea Trust Mobile"
                                fill
                                className="object-cover"
                                sizes="100vw"
                            />
                        </div>
                        {/* Desktop Image 2 */}
                        <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden shadow-lg hidden md:block">
                            <Image
                                src="/images/branding-timeline-2.webp"
                                alt="Brand Marketing Technology"
                                fill
                                className="object-cover"
                                sizes="(min-width: 1024px) 50vw, 100vw"
                                unoptimized={true}
                            />
                        </div>
                        {/* Mobile Image 2 */}
                        <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden shadow-lg block md:hidden">
                            <Image
                                src="/images/branding-timeline-2-mobile.webp"
                                alt="Brand Marketing Technology Mobile"
                                fill
                                className="object-cover"
                                sizes="100vw"
                            />
                        </div>
                        {/* Desktop Image 3 */}
                        <div className="relative w-full aspect-square md:aspect-[4/3] rounded-xl overflow-hidden shadow-lg hidden md:block">
                            <Image
                                src="/images/branding-timeline-3.webp"
                                alt="Brand Concept Tree"
                                fill
                                className="object-cover"
                                sizes="(min-width: 1024px) 50vw, 100vw"
                                unoptimized={true}
                            />
                        </div>
                        {/* Mobile Image 3 */}
                        <div className="relative w-full aspect-square md:aspect-[4/3] rounded-xl overflow-hidden shadow-lg block md:hidden">
                            <Image
                                src="/images/branding-timeline-3-mobile.webp"
                                alt="Brand Concept Tree Mobile"
                                fill
                                className="object-cover"
                                sizes="100vw"
                            />
                        </div>
                    </div>

                    {/* Right Side: Text Content */}
                    <div className="order-1 lg:order-2">
                        <div className="border-l-4 border-[#3AAB43] pl-6 mb-8">
                            <h2 className="text-3xl font-black uppercase text-[#1E3A1A] font-[Oswald]">{t('time_title')}</h2>
                        </div>
                        <div className="space-y-6 lg:space-y-8 pl-0 lg:pl-2">
                            <p className="text-[14px] md:text-[15px] text-gray-700 mb-6 leading-relaxed">
                                {t('time_desc')}
                            </p>

                            <div className="relative">
                                <h3 className="font-bold text-[#1E3A1A] font-[Oswald] uppercase text-[16px] md:text-[18px] mb-2 tracking-wide">{t('t1_title')}</h3>
                                <p className="text-[14px] text-gray-700 leading-relaxed mb-3">
                                    {t('t1_desc')}
                                </p>
                                <ul className="list-disc list-inside text-[13px] text-gray-700 space-y-2 mb-3 ml-2">
                                    <li>{t('t1_i1')}</li>
                                    <li>{t('t1_i2')}</li>
                                    <li>{t('t1_i3')}</li>
                                    <li>{t('t1_i4')}</li>
                                </ul>
                                <p className="text-[13px] text-gray-500 italic mt-2">{t('t1_note')}</p>
                            </div>

                            <div className="relative">
                                <h3 className="font-bold text-[#1E3A1A] font-[Oswald] uppercase text-[16px] md:text-[18px] mb-2 tracking-wide">{t('t2_title')}</h3>
                                <p className="text-[14px] text-gray-700 leading-relaxed mb-3">
                                    {t('t2_desc')}
                                </p>
                                <ul className="list-disc list-inside text-[13px] text-gray-700 space-y-2 mb-3 ml-2">
                                    <li>{t('t2_i1')}</li>
                                    <li>{t('t2_i2')}</li>
                                    <li>{t('t2_i3')}</li>
                                </ul>
                                <p className="text-[13px] text-gray-500 italic mt-2">{t('t2_note')}</p>
                            </div>

                            <div className="relative">
                                <h3 className="font-bold text-[#1E3A1A] font-[Oswald] uppercase text-[16px] md:text-[18px] mb-2 tracking-wide">{t('t3_title')}</h3>
                                <p className="text-[14px] text-gray-700 leading-relaxed mb-3">
                                    {t('t3_desc')}
                                </p>
                                <ul className="list-disc list-inside text-[13px] text-gray-700 space-y-2 mb-3 ml-2">
                                    <li>{t('t3_i1')}</li>
                                    <li>{t('t3_i2')}</li>
                                    <li>{t('t3_i3')}</li>
                                </ul>
                                <p className="text-[13px] text-gray-500 italic mt-2">{t('t3_note')}</p>
                            </div>

                            <div className="relative">
                                <h3 className="font-bold text-[#1E3A1A] font-[Oswald] uppercase text-[16px] md:text-[18px] mb-2 tracking-wide">{t('t4_title')}</h3>
                                <p className="text-[14px] text-gray-700 leading-relaxed mb-3">
                                    {t('t4_desc')}
                                </p>
                                <ul className="list-disc list-inside text-[13px] text-gray-700 space-y-2 mb-4 ml-2">
                                    <li>{t('t4_i1')}</li>
                                    <li>{t('t4_i2')}</li>
                                    <li>{t('t4_i3')}</li>
                                </ul>
                                <p className="text-[14px] text-gray-700 leading-relaxed mt-4">
                                    {t('t4_note')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
