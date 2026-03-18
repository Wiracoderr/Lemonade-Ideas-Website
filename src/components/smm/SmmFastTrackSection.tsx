import React from 'react';
import { useTranslations } from 'next-intl';

export default function SmmFastTrackSection() {
    const t = useTranslations('SMM');
    return (
        <section className="py-20 bg-white font-sans" data-purpose="fast-track">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 max-w-6xl">
                <div className="md:w-1/2 w-full">
                    {/* Responsive Picture Box for separate desktop/mobile intrinsic images */}
                    <div className="w-full relative aspect-[4/3] rounded-lg shadow-xl overflow-hidden">
                        <picture>
                             <source media="(max-width: 768px)" srcSet="/images/smm-fast-track-mobile.webp" />
                             <img 
                                 src="/images/smm-fast-track.webp" 
                                 alt="Person using tablet" 
                                 className="object-cover w-full h-full absolute inset-0" 
                                 loading="lazy"
                             />
                        </picture>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <div className="pl-6 border-l-8 border-[#1E3A1A]">
                        <h2 className="text-3xl font-extrabold text-[#1E3A1A] uppercase leading-none mb-4">
                            Get on the fast track to more leads and sales
                        </h2>
                        <p className="text-[#1E3A1A] leading-relaxed mb-6 font-medium text-[15px]">
                            With Social Media Management, you can showcase your business where it matters most—on the platforms your audience uses daily. We&apos;ll create and manage your campaigns the right way, crafting engaging content and strategies to boost your reach, engagement, and conversions. Plus, we&apos;ll continuously optimize your social media presence to deliver even better results over time, all at an affordable price.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
