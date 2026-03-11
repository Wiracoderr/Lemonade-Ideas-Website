import React from 'react';
import Image from 'next/image';

export default function GoogleAdsAddOnsSection() {
    return (
        <section className="relative w-full overflow-hidden bg-white mb-0 lg:mb-12">
            {/* Desktop Background Image (Left side) */}
            <div className="hidden lg:block absolute top-[10%] left-0 w-[55%] h-[80%] z-0">
                <Image 
                    src="/images/mesa-de-trabajo-1-100.webp"
                    alt="Explore Our Add-Ons"
                    fill
                    className="object-cover object-left"
                    loading="lazy"
                />
            </div>

            {/* Angled Dark Green Content Container Overlay (Floating on right side) */}
            <div className="relative z-10 w-full lg:w-[60%] lg:ml-auto bg-[#0d2814]
                            p-8 md:p-16 lg:p-20 xl:py-20 xl:px-24 mb-0 lg:my-20 xl:my-28 lg:mr-0
                            flex flex-col justify-center
                            [clip-path:none] lg:[clip-path:polygon(10%_0,100%_0,100%_100%,0%_100%)] shadow-2xl">
                
                <div className="lg:pl-16">
                    <div className="border-l-4 border-white pl-6 mb-8">
                        <h2 className="text-white font-[Oswald] font-extrabold text-[28px] md:text-4xl lg:text-5xl uppercase leading-tight mb-4 tracking-tight">
                            EXPLORE OUR ADD-ONS
                        </h2>
                        <p className="text-white/80 text-[15px] lg:text-base font-medium leading-relaxed italic border-t border-white/20 pt-4 mt-4 mb-6">
                            Looking to boost your campaign and maximize exposure? Lemonade Ideas offers the following add-ons:
                        </p>
                        <ul className="space-y-4 text-white/90 font-medium text-sm lg:text-[15px]">
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-sm bg-white shrink-0 mt-2"></span>
                                <div><strong>Increased PPC Budget ($5K+)</strong> - Ideal for larger campaigns aiming to generate even more leads.</div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-sm bg-white shrink-0 mt-2"></span>
                                <div><strong>Bing Ads Management</strong> - Tap into the second-largest search engine for additional clicks.</div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-sm bg-white shrink-0 mt-2"></span>
                                <div><strong>Local Service Ads</strong> - Perfect for service-area businesses looking to expand their reach.</div>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>

            {/* Mobile Specific Bottom Image */}
            <div className="w-full relative block lg:hidden h-[450px] md:h-[550px] order-last">
                <Image 
                    src="/images/mesa-de-trabajo-1-100.webp"
                    alt="Explore Our Add-Ons Mobile"
                    fill
                    className="object-cover"
                    loading="lazy"
                />
            </div>
        </section>
    );
}
