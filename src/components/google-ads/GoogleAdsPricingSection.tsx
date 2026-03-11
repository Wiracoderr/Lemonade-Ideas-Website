import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function GoogleAdsPricingSection() {
    return (
        <>
            <section className="relative w-full min-h-[700px] flex flex-col lg:flex-row lg:items-center bg-[#0d2814] lg:bg-black overflow-hidden group">
                
                {/* Desktop Full Width Background Image */}
                <div className="absolute inset-0 z-0 hidden lg:block">
                    <Image 
                        src="/images/mesa-de-trabajo-1-100.webp"
                        alt="Leverage Expertise"
                        fill
                        className="object-cover object-left"
                        loading="lazy"
                    />
                </div>

                {/* Angled Dark Green Content Container Overlay (Floating on right side) */}
                {/* Uses clip-path to create the angled left edge on large screens */}
                <div className="relative z-10 w-full lg:w-3/5 lg:ml-auto bg-[#0d2814]
                                p-8 md:p-16 lg:p-20 xl:py-24 xl:px-24 mb-0 lg:my-16 xl:my-24 lg:mr-0
                                flex flex-col justify-center
                                [clip-path:none] lg:[clip-path:polygon(10%_0,100%_0,100%_100%,0%_100%)]">
                    
                    <div className="lg:pl-16">
                        <div className="border-l-4 border-white pl-6 mb-8">
                            <h2 className="text-white font-[Oswald] font-extrabold text-3xl md:text-5xl uppercase leading-tight mb-4 tracking-tight">
                                LEVERAGE OUR YEARS OF EXPERTISE FOR YOUR BUSINESS
                            </h2>
                            <p className="text-white/80 text-lg md:text-xl font-medium leading-relaxed italic border-t border-white/20 pt-4 mt-4">
                                With experience creating hundreds of campaigns across diverse industries—ranging from local contractors and law firms to multimillion-dollar online stores—we bring a wealth of knowledge to your campaign, putting our expertise to work for your success.
                            </p>
                        </div>
                    </div>
                    
                </div>

                <div className="w-full relative block lg:hidden h-[450px] md:h-[550px] order-last">
                    <Image 
                        src="/images/mesa-de-trabajo-1-100-mobile.webp"
                        alt="Leverage Expertise Mobile"
                        fill
                        className="object-cover"
                        loading="lazy"
                    />
                </div>
            </section>
            
            {/* BEGIN: Pricing Section */}
            <section className="py-24 px-4 bg-white relative overflow-hidden mobile-content-visibility" id="pricing">
                <div className="max-w-[1240px] mx-auto">
                    <div className="mb-6 flex flex-col items-center text-center">
                        <div className="relative w-full flex justify-center items-center mb-10 pt-8">
                            <span className="text-7xl md:text-9xl font-[Oswald] font-bold uppercase text-gray-100 tracking-widest absolute select-none pointer-events-none opacity-80 whitespace-nowrap">
                                Pricing
                            </span>
                            <h3 className="relative z-10 text-sm md:text-base text-gray-500 uppercase tracking-widest font-bold mt-2">
                                Know exactly what you&apos;re getting and how much it costs—no surprises.
                            </h3>
                        </div>

                        <p className="text-[#333] w-full text-[15px] md:text-[16.8px] font-[Roboto] text-justify tracking-wide leading-[1.8]">
                            Our pricing is designed with your success in mind. As we build and refine your brand strategy, you&apos;ll see a reduction in our management fee once we&apos;ve established a strong foundation and your strategy is delivering results.
                        </p>
                    </div>

                    <div className="bg-[#f0f9fa] rounded-2xl shadow-xl overflow-hidden border border-gray-100 mt-12">
                        {/* Top Green Banner */}
                        <div className="bg-[#38a149] py-5 text-center shadow-inner">
                            <h3 className="text-white font-[Oswald] font-bold text-2xl md:text-3xl uppercase tracking-widest text-shadow-sm">
                                GOOGLE ADS MANAGEMENT PLAN
                            </h3>
                        </div>

                        {/* Split White Cards */}
                        <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8">
                            {/* Column 1 */}
                            <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
                                <div className="text-center mb-6 pb-6 border-b border-dotted border-gray-300">
                                    <h4 className="text-xl md:text-2xl font-[Oswald] font-bold uppercase text-gray-900 mb-4 tracking-wide">START UP - CAMPAIGN CREATION</h4>
                                    <div className="flex justify-center items-center gap-2">
                                        <span className="text-5xl font-bold text-gray-900 font-[Oswald]">$1000</span>
                                        <span className="text-sm font-bold text-gray-500 uppercase">(Month 1)</span>
                                    </div>
                                </div>
                                <ul className="space-y-4 text-[15px] text-gray-600 font-[Roboto] flex-grow">
                                    <li className="flex items-start pb-4 border-b border-dotted border-gray-200">
                                        <i className="fas fa-check-circle text-[#2d7a36] mr-4 text-lg mt-0.5"></i>
                                        <span className="leading-snug">Creation of account, campaign, ad groups, ads, etc.</span>
                                    </li>
                                    <li className="flex items-start pb-4 border-b border-dotted border-gray-200">
                                        <i className="fas fa-check-circle text-[#2d7a36] mr-4 text-lg mt-0.5"></i>
                                        <span className="leading-snug">Custom landing page creation (converts 2x the quantity of leads for the same ad spend compared to driving traffic directly to website)</span>
                                    </li>
                                    <li className="flex items-start pb-4 border-b border-dotted border-gray-200">
                                        <i className="fas fa-check-circle text-[#2d7a36] mr-4 text-lg mt-0.5"></i>
                                        <span className="leading-snug">Reporting and tracking setup (for all calls and form submissions)</span>
                                    </li>
                                    <li className="flex items-start pb-4 border-b border-dotted border-gray-200 border-none">
                                        <i className="fas fa-check-circle text-[#2d7a36] mr-4 text-lg mt-0.5"></i>
                                        <span className="leading-snug">Retargeting to drive traffic back to your website that didn&apos;t convert</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Column 2 */}
                            <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
                                <div className="text-center mb-6 pb-6 border-b border-dotted border-gray-300">
                                    <h4 className="text-xl md:text-2xl font-[Oswald] font-bold uppercase text-gray-900 mb-4 tracking-wide">COMPREHENSIVE PACKAGE</h4>
                                    <div className="flex justify-center items-center gap-2">
                                        <span className="text-5xl font-bold text-gray-900 font-[Oswald]">$750</span>
                                        <span className="text-sm font-bold text-gray-500 uppercase">(Months 2+)</span>
                                    </div>
                                </div>
                                <ul className="space-y-4 text-[15px] text-gray-600 font-[Roboto] flex-grow">
                                    <li className="flex items-start pb-4 border-b border-dotted border-gray-200">
                                        <i className="fas fa-check-circle text-[#2d7a36] mr-4 text-lg mt-0.5"></i>
                                        <span className="leading-snug">Weekly campaign management to optimize for an increased conversion rate and decreased cost per lead (campaign management turns to bi-weekly starting in month 4)</span>
                                    </li>
                                    <li className="flex items-start pb-4 border-b border-dotted border-gray-200">
                                        <i className="fas fa-check-circle text-[#2d7a36] mr-4 text-lg mt-0.5"></i>
                                        <span className="leading-snug">Recommended monthly ad spend of $1-5K</span>
                                    </li>
                                    <li className="flex items-start pb-4 border-b border-dotted border-gray-200">
                                        <i className="fas fa-check-circle text-[#2d7a36] mr-4 text-lg mt-0.5"></i>
                                        <span className="leading-snug">Dedicated account management</span>
                                    </li>
                                    <li className="flex items-start pb-4 border-b border-dotted border-gray-200 border-none">
                                        <i className="fas fa-check-circle text-[#2d7a36] mr-4 text-lg mt-0.5"></i>
                                        <span className="leading-snug">Millions of dollars of ad spend spent... you&apos;re in good hands</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Bottom Get Started Button */}
                        <div className="px-6 md:px-8 pb-8 pt-2">
                            <Link href="/get-started" className="w-full bg-[#143d1f] text-white py-4 rounded-xl font-[Oswald] font-bold text-lg uppercase tracking-widest hover:bg-[#1f562e] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3 decoration-none">
                                GET STARTED <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* END: Pricing Section */}
        </>
    );
}
