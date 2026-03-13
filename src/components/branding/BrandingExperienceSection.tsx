import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function BrandingExperienceSection() {
    const t = useTranslations("Branding");
    return (
        <section className="relative w-full font-sans flex flex-col lg:flex-row bg-[#153e20]">
            {/* Desktop Background Image (Right side) */}
            <div className="hidden lg:block absolute top-0 right-0 w-[55%] xl:w-[60%] h-full z-0">
                <div className="relative w-full h-full">
                    <Image 
                        src="/images/branding-experience-bg.webp" 
                        alt="Branding and Strategy Experience" 
                        fill 
                        className="object-cover object-[0_20%]"
                        sizes="(max-width: 1280px) 55vw, 60vw"
                        unoptimized={true}
                    />
                </div>
            </div>

            {/* Content Container (Left side) */}
            <div className="relative z-10 w-full lg:w-[60%] xl:w-[55%] bg-[#153e20] text-white py-16 lg:py-24 px-5 lg:pl-16 xl:pl-32 lg:pr-24 xl:pr-32 flex flex-col justify-center lg:[clip-path:polygon(0_0,100%_0,85%_100%,0_100%)]">
                <div className="max-w-[800px] lg:max-w-2xl mx-auto lg:mx-0">
                    <h2 className="text-[28px] md:text-[30px] lg:text-[34px] xl:text-[40px] font-[Oswald] font-black uppercase mb-6 leading-[1.15] tracking-wide lg:text-left text-center">
                        {t('exp_title')}
                    </h2>
                    <p className="text-[#e2e8f0] text-[15px] lg:text-[16px] font-[Arial] leading-relaxed mb-6 lg:text-left text-justify lg:text-justify">
                        {t('exp_p1')}
                    </p>
                    <p className="text-[#e2e8f0] text-[15px] lg:text-[16px] font-[Arial] leading-relaxed lg:text-left text-justify lg:text-justify">
                        {t('exp_p2')}
                    </p>
                </div>
            </div>
            
            {/* Mobile Image (stack below text) */}
            <div className="lg:hidden w-full h-[300px] relative">
                 <Image 
                    src="/images/branding-experience-mobile-bg.webp" 
                    alt="Branding and Strategy Experience Mobile" 
                    fill 
                    className="object-cover object-center"
                    sizes="100vw"
                />
            </div>
        </section>
    );
}
