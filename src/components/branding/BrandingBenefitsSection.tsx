import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function BrandingBenefitsSection() {
    const t = useTranslations("Branding");
    return (
        <section className="bg-white py-24 px-5 font-sans">
            <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                
                {/* Image Side */}
                <div className="relative w-full flex justify-center lg:justify-end">
                    {/* Desktop Image */}
                    <div className="relative w-full max-w-[500px] aspect-square hidden md:block">
                        <Image
                            alt="Branding and Strategy Plan"
                            fill
                            className="object-contain"
                            src="/images/branding-benefits.webp"
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            unoptimized={true}
                        />
                    </div>
                    {/* Mobile Image */}
                    <div className="relative w-full max-w-[500px] aspect-square block md:hidden">
                        <Image
                            alt="Branding and Strategy Plan Mobile"
                            fill
                            className="object-contain"
                            src="/images/branding-benefits-mobile.webp"
                            sizes="100vw"
                        />
                    </div>
                </div>

                {/* Text Side */}
                <div className="w-full max-w-[550px]">
                    <div className="border-l-[5px] border-[#3AAB43] pl-5 mb-6">
                        <h2 className="text-[28px] md:text-[36px] font-[Oswald] font-bold uppercase text-[#1E3A1A] leading-[1.1] tracking-normal">
                            {t('ben_title')}
                        </h2>
                    </div>
                    <p className="text-gray-600 text-[15px] md:text-[16px] leading-relaxed font-[Arial] text-justify">
                        {t('ben_desc')}
                    </p>
                </div>

            </div>
        </section>
    );
}
