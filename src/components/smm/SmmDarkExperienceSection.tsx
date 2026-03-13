import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function SmmDarkExperienceSection() {
    const t = useTranslations('SMM');
    return (
        <section className="relative w-full min-h-[500px] flex flex-col lg:flex-row lg:items-center bg-[#113a1c] lg:bg-black overflow-hidden group">
            
            {/* Desktop Full Width Background Image */}
            <div className="absolute inset-0 z-0 hidden lg:block">
                <Image 
                    src="/images/smm-expertise-bg.webp"
                    alt="Social Media Experience"
                    fill
                    className="object-cover object-left"
                    loading="lazy"
                />
            </div>

            {/* Angled Dark Green Content Container Overlay (Floating on right side) */}
            <div className="relative z-10 w-full lg:w-3/5 lg:ml-auto bg-[#113a1c]
                            p-8 md:p-16 lg:p-20 xl:py-24 xl:px-24 mb-0 lg:my-16 xl:my-24 lg:mr-0
                            flex flex-col justify-center
                            [clip-path:none] lg:[clip-path:polygon(10%_0,100%_0,100%_100%,0%_100%)]">
                
                <div className="lg:pl-16">
                    <div className="border-l-4 border-green-500/80 pl-6 mb-8">
                        <h2 className="text-white font-[Oswald] font-extrabold text-3xl md:text-4xl uppercase leading-tight mb-4 tracking-tight">
                            {t('dark_experience_title')}
                        </h2>
                        <p className="text-white/80 text-lg md:text-xl font-medium leading-relaxed italic">
                            {t('dark_experience_desc')}
                        </p>
                    </div>
                </div>
                
            </div>

            {/* Mobile Specific Bottom Image */}
            <div className="w-full relative block lg:hidden h-[400px] md:h-[500px]">
                <Image 
                    src="/images/smm-mobile-dark-section.webp"
                    alt="Social Media Experience Mobile"
                    fill
                    className="object-cover"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 85%)" }}
                    loading="lazy"
                />
            </div>
        </section>
    );
}
