import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function GoogleAdsBenefitsSection() {
    const t = useTranslations('GoogleAds');
    return (
        <section className="bg-white py-24 px-5 font-sans">
            <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                
                {/* Image Side */}
                <div className="relative w-full flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-[500px] aspect-square">
                        {/* Desktop Image */}
                        <Image
                            alt="Google Ads Setup"
                            fill
                            className="object-contain hidden lg:block"
                            src="/images/fono-accel.avif"
                            sizes="50vw"
                        />
                        {/* Mobile Image */}
                        <Image
                            alt="Google Ads Setup Mobile"
                            fill
                            className="object-contain block lg:hidden"
                            src="/images/fono-accel-mobile.avif"
                            sizes="100vw"
                        />
                    </div>
                </div>

                {/* Text Side */}
                <div className="w-full max-w-[550px]">
                    <div className="border-l-[5px] border-[#3AAB43] pl-5 mb-6">
                        <h2 className="text-[28px] md:text-[36px] font-[Oswald] font-bold uppercase text-[#1E3A1A] leading-[1.1] tracking-normal">
                            {t('benefits_title')}
                        </h2>
                    </div>
                    <p className="text-gray-600 text-[15px] md:text-[16px] leading-relaxed font-[Arial]">
                        {t('benefits_desc')}
                    </p>
                </div>

            </div>
        </section>
    );
}
