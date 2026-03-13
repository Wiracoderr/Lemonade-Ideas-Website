import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function SmmExperienceSection() {
    const t = useTranslations('SMM');
    return (
        <section className="relative bg-[#0d2a1a] py-20 lg:py-28 overflow-hidden font-sans" data-purpose="experience-split">
            <div className="container mx-auto px-4 flex items-center relative z-10">
                <div className="w-full lg:w-[55%] xl:w-[60%] lg:pr-12">
                    <h2 className="text-[28px] md:text-3xl lg:text-[40px] font-black text-white uppercase leading-[1.1] mb-6">
                        {t('experience_title')}
                    </h2>
                    <p className="text-gray-200 mt-6 max-w-2xl text-[19.5px] font-medium leading-[1.6]">
                        {t('experience_desc')}
                    </p>
                </div>
            </div>
            
            {/* Right Background Image with Diagonal Cut */}
            <div 
                className="absolute top-0 right-0 h-full w-full lg:w-[48%] z-0 hidden lg:block"
                style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)" }}
            >
                <Image
                    src="/images/smm-experience.webp"
                    alt="Social Media Management Experience"
                    fill
                    className="object-cover"
                    sizes="50vw"
                />
            </div>
            
            {/* Mobile Image */}
            <div className="relative w-full aspect-video mt-12 lg:hidden block">
                 <Image
                    src="/images/smm-experience-mobile.webp"
                    alt="Social Media Management Experience"
                    fill
                    className="object-cover"
                    sizes="100vw"
                />
            </div>
        </section>
    );
}
