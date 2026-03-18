import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function SmmTimelineSection() {
    const t = useTranslations('SMM');
    return (
        <section className="py-20 bg-blue-50/50 font-sans" data-purpose="timeline">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
                    {/* Left Side: Images Stack */}
                    <div className="space-y-6">
                        <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden shadow-lg">
                            <Image 
                                src="/images/smm-timeline-1.webp" 
                                alt="Building phase" 
                                fill 
                                className="object-cover" 
                                sizes="(max-width: 768px) 100vw, 50vw" 
                                loading="lazy"
                            />
                        </div>
                        <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden shadow-lg hidden md:block">
                            <Image 
                                src="/images/smm-timeline-2.webp" 
                                alt="Content phase" 
                                fill 
                                className="object-cover" 
                                sizes="50vw" 
                                loading="lazy"
                            />
                        </div>
                        <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden shadow-lg hidden md:block">
                            <Image 
                                src="/images/smm-timeline-3.webp" 
                                alt="Scaling phase" 
                                fill 
                                className="object-cover" 
                                sizes="50vw" 
                                loading="lazy"
                            />
                        </div>
                    </div>
                    
                    {/* Right Side: Content */}
                    <div className="space-y-8 flex flex-col justify-start">
                        {/* Heading & Intro */}
                        <div className="pl-6 border-l-8 border-[#1E3A1A] mb-6">
                            <h2 className="text-[28px] lg:text-[32px] font-black text-[#1E3A1A] uppercase leading-[1.1]">
                                {t('timeline_title')}
                            </h2>
                            <p className="text-[15px] text-[#1E3A1A] mt-4 font-medium leading-[1.5]">
                                {t('timeline_desc')}
                            </p>
                        </div>
                        
                        <div className="space-y-10 pl-2">
                            <div>
                                <h3 className="font-black text-[#1E3A1A] uppercase text-lg mb-2">{t('timeline_month_1_title')}</h3>
                                <p className="text-[15px] font-medium text-[#1E3A1A] leading-[1.6]">{t('timeline_month_1_desc')}</p>
                                <p className="text-[12px] font-bold text-[#1E3A1A] mt-3 tracking-wide uppercase">{t('timeline_month_1_checkin')}</p>
                            </div>
                            <div>
                                <h3 className="font-black text-[#1E3A1A] uppercase text-lg mb-2">{t('timeline_month_2_title')}</h3>
                                <p className="text-[15px] font-medium text-[#1E3A1A] leading-[1.6]">{t('timeline_month_2_desc')}</p>
                                <p className="text-[12px] font-bold text-[#1E3A1A] mt-3 tracking-wide uppercase">{t('timeline_month_2_checkin')}</p>
                            </div>
                            <div>
                                <h3 className="font-black text-[#1E3A1A] uppercase text-lg mb-2">{t('timeline_month_3_title')}</h3>
                                <p className="text-[15px] font-medium text-[#1E3A1A] leading-[1.6]">{t('timeline_month_3_desc')}</p>
                                <p className="text-[12px] font-bold text-[#1E3A1A] mt-3 tracking-wide uppercase">{t('timeline_month_3_checkin')}</p>
                            </div>
                            <div>
                                <h3 className="font-black text-[#1E3A1A] uppercase text-lg mb-2">{t('timeline_month_4_title')}</h3>
                                <p className="text-[15px] font-medium text-[#1E3A1A] leading-[1.6]">{t('timeline_month_4_desc')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

