import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function BrandingStorySection() {
    const t = useTranslations("Branding");
    return (
        <section className="relative w-full min-h-[700px] flex flex-col lg:flex-row lg:items-center bg-[#1E3A1A] lg:bg-black overflow-hidden group">
            
            {/* Desktop Full Width Background Image */}
            <div className="absolute inset-0 z-0 hidden lg:block">
                <Image 
                    src="/images/branding-story-bg.webp"
                    alt="Build Your Brand Story"
                    fill
                    className="object-cover object-left"
                    loading="lazy"
                    unoptimized={true}
                />
            </div>

            {/* Angled Dark Green Content Container Overlay (Floating on right side) */}
            <div className="relative z-10 w-full lg:w-3/5 xl:w-[55%] lg:ml-auto bg-[#1E3A1A]
                            p-8 md:p-12 lg:p-16 xl:py-20 xl:px-20 mb-0 lg:my-16 xl:my-24 lg:mr-0
                            flex flex-col justify-center
                            [clip-path:none] lg:[clip-path:polygon(10%_0,100%_0,100%_100%,0%_100%)]">
                
                <div className="lg:pl-16">
                    <h2 className="text-white font-[Oswald] font-extrabold text-[28px] md:text-[34px] lg:text-[40px] uppercase leading-tight mb-4 tracking-normal">
                        {t('story_title')}
                    </h2>
                    <p className="text-white/90 text-[14px] md:text-[15px] font-[Arial] leading-[1.8] mb-8 lg:pr-8 text-justify lg:text-justify lg:text-left">
                        {t('story_desc')}
                    </p>
                    
                    <ul className="space-y-6 text-white text-[13px] md:text-[14px] font-[Arial] leading-[1.8] lg:pr-8 text-justify lg:text-justify lg:text-left">
                        <li className="flex items-start">
                             <span className="mr-3 mt-2 w-[5px] h-[5px] rounded-full bg-white flex-shrink-0 relative"></span>
                            <span><strong>{t('story_i1_t')}</strong>{t('story_i1_d')}</span>
                        </li>
                        <li className="flex items-start">
                             <span className="mr-3 mt-2 w-[5px] h-[5px] rounded-full bg-white flex-shrink-0 relative"></span>
                            <span><strong>{t('story_i2_t')}</strong>{t('story_i2_d')}</span>
                        </li>
                        <li className="flex items-start">
                             <span className="mr-3 mt-2 w-[5px] h-[5px] rounded-full bg-white flex-shrink-0 relative"></span>
                            <span><strong>{t('story_i3_t')}</strong>{t('story_i3_d')}</span>
                        </li>
                        <li className="flex items-start">
                             <span className="mr-3 mt-2 w-[5px] h-[5px] rounded-full bg-white flex-shrink-0 relative"></span>
                            <span><strong>{t('story_i4_t')}</strong>{t('story_i4_d')}</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="w-full relative block lg:hidden h-[450px] md:h-[550px] order-last">
                <Image 
                    src="/images/branding-story-mobile-bg.webp"
                    alt="Build Your Brand Story Mobile"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="100vw"
                />
            </div>
        </section>
    );
}
