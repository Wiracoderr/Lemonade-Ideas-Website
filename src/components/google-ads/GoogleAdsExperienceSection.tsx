import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function GoogleAdsExperienceSection() {
    const t = useTranslations('GoogleAds');
    return (
        <section className="relative w-full font-sans flex flex-col lg:flex-row bg-[#1E3A1A]">
            {/* Desktop Background Image (Right side) */}
            <div className="hidden lg:block absolute top-0 right-0 w-[55%] xl:w-[60%] h-full z-0">
                <div className="relative w-full h-full">
                    <Image 
                        src="/images/google-ads-challenges.webp" 
                        alt="Paid Advertising Strategy" 
                        fill 
                        className="object-cover object-[0_20%]"
                        sizes="(max-width: 1280px) 55vw, 60vw"
                    />
                </div>
            </div>

            {/* Content Container (Left side) */}
            <div className="relative z-10 w-full lg:w-[60%] xl:w-[55%] bg-[#1E3A1A] text-white py-16 lg:py-24 px-5 lg:pl-16 xl:pl-32 lg:pr-24 xl:pr-32 flex flex-col justify-center lg:[clip-path:polygon(0_0,100%_0,85%_100%,0_100%)]">
                <div className="max-w-[800px] lg:max-w-2xl mx-auto lg:mx-0">
                    <h2 className="text-[28px] md:text-[32px] lg:text-[40px] font-black uppercase mb-6 leading-[1.1] tracking-normal lg:text-left text-center">
                        {t('exp_title')}
                    </h2>
                    <p className="text-[#e2e8f0] text-sm lg:text-base font-medium leading-relaxed lg:text-left text-center">
                        {t('exp_desc')}
                    </p>
                </div>
            </div>
            
            {/* Mobile Image (stack below text) */}
            <div className="lg:hidden w-full h-[300px] relative">
                 <Image 
                    src="/images/google-ads-challenges-mobile.webp" 
                    alt="Paid Advertising Strategy Mobile" 
                    fill 
                    className="object-cover object-center"
                    sizes="100vw"
                />
            </div>
        </section>
    );
}
