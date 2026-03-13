import React from 'react';
import Image from 'next/image';
import PricingCardsSection from '@/components/pricing/PricingCardsSection';
import HostingPricingSection from '@/components/pricing/HostingPricingSection';

export const metadata = {
    title: 'Pricing - Lemonade Ideas',
    description: 'Transparent and affordable pricing for our digital marketing services.',
};

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 font-body">
            
            <main>
                {/* Hero Section */}
                <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden bg-[#1a3121]">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/pricing_hero_banner.webp"
                            alt="Transparent & Affordable Pricing"
                            fill
                            priority
                            className="object-cover opacity-60 mix-blend-luminosity"
                            sizes="100vw"
                        />
                        {/* Overlay gradient to ensure text readability */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#1a3121]/90 via-[#1a3121]/60 to-transparent"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10 text-center">
                        {/* Outline text behind main text for the layered effect */}
                         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex justify-center pointer-events-none -mt-4">
                            <span 
                                className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-black uppercase tracking-widest font-display text-transparent"
                                style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.4)' }}
                            >
                                PRICING
                            </span>
                        </div>
                        
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-display drop-shadow-lg relative z-20">
                            TRANSPARENT & AFFORDABLE PRICING
                        </h1>
                    </div>
                </section>

                <PricingCardsSection />
                <HostingPricingSection />
            </main>
        </div>
    );
}
