import React from 'react';
import Image from 'next/image';

export default function BrandingBenefitsSection() {
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
                    <div className="border-l-[5px] border-[#38b04d] pl-5 mb-6">
                        <h2 className="text-[28px] md:text-[36px] font-[Oswald] font-bold uppercase text-[#0a2e15] leading-[1.1] tracking-normal">
                            ACCELERATE YOUR BRAND GROWTH AND ACHIEVE REAL RESULTS
                        </h2>
                    </div>
                    <p className="text-gray-600 text-[15px] md:text-[16px] leading-relaxed font-[Arial] text-justify">
                        With a well-crafted branding and strategy plan, you can position your business exactly where it matters most—at the forefront of your industry and in front of your ideal audience. We&apos;ll develop a tailored strategy that incorporates all the key elements for success, continuously refining and optimizing it to deliver impactful results over time. All of this is offered at a cost-effective price designed to meet your needs and goals.
                    </p>
                </div>

            </div>
        </section>
    );
}
