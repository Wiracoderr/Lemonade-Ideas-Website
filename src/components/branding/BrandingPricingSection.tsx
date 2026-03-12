import React from 'react';
import Link from 'next/link';

export default function BrandingPricingSection() {
    return (
        <section className="py-24 px-4 bg-[#eff8fa] relative overflow-hidden font-sans" id="pricing">
            <div className="max-w-[1240px] mx-auto">
                <div className="mb-12 flex flex-col items-center text-center">
                    <div className="relative w-full flex justify-center items-center mb-10 pt-8">
                        <span className="text-7xl md:text-9xl font-[Oswald] font-bold uppercase text-white tracking-widest absolute select-none pointer-events-none opacity-80 whitespace-nowrap">
                            Pricing
                        </span>
                        <h3 className="relative z-10 text-sm md:text-base text-gray-500 uppercase tracking-widest font-bold mt-2">
                            Know exactly what you&apos;re getting and how much it costs—no surprises.
                        </h3>
                    </div>

                    <p className="text-[#143d1f] w-full text-[16px] md:text-[18px] lg:text-[20px] font-[Oswald] font-bold text-center tracking-wide leading-[1.6] uppercase max-w-5xl mx-auto">
                        OUR PRICING IS DESIGNED WITH YOUR SUCCESS IN MIND. AS WE BUILD AND REFINE YOUR BRAND STRATEGY, YOU&apos;LL SEE A REDUCTION IN OUR MANAGEMENT FEE ONCE WE&apos;VE ESTABLISHED A STRONG FOUNDATION AND YOUR STRATEGY IS DELIVERING RESULTS.
                    </p>
                </div>

                <div className="bg-[#f0f9fa] rounded-2xl shadow-xl overflow-hidden border border-gray-200 mt-8">
                    {/* Top Green Banner */}
                    <div className="bg-[#38b04d] py-5 text-center shadow-inner">
                        <h3 className="text-white font-[Oswald] font-bold text-2xl md:text-3xl uppercase tracking-widest text-shadow-sm">
                            BRANDING & STRATEGY PLAN
                        </h3>
                    </div>

                    {/* Split White Cards - 3 Columns */}
                    <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {/* Column 1 - Basic */}
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center">
                            <div className="mb-6 pb-6 border-b border-dotted border-gray-300 w-full">
                                <h4 className="text-xl md:text-[22px] font-[Oswald] font-bold uppercase text-gray-900 mb-3 tracking-wide">BASIC PACKAGE</h4>
                                <div className="flex justify-center items-center">
                                    <span className="text-4xl font-bold text-[#143d1f] font-[Oswald]">$4999</span>
                                </div>
                            </div>
                            <ul className="space-y-5 text-[14px] text-gray-600 font-[Arial] flex-grow text-left w-full pl-2">
                                <li className="flex items-start pb-5 border-b border-dotted border-gray-200">
                                    <i className="fas fa-check-circle text-[#143d1f] mr-4 text-lg mt-0.5"></i>
                                    <span className="leading-snug">Establish your brand voice, messaging, and core values.</span>
                                </li>
                                <li className="flex items-start pb-5 border-b border-dotted border-gray-200">
                                    <i className="fas fa-check-circle text-[#143d1f] mr-4 text-lg mt-0.5"></i>
                                    <span className="leading-snug">Design visuals and content that align with your brand identity.</span>
                                </li>
                                <li className="flex items-start pb-5 border-b border-dotted border-gray-200">
                                    <i className="fas fa-check-circle text-[#143d1f] mr-4 text-lg mt-0.5"></i>
                                    <span className="leading-snug">Craft a strategy tailored to audience targeting and engagement.</span>
                                </li>
                                <li className="flex items-start pb-2 border-none">
                                    <i className="fas fa-check-circle text-[#143d1f] mr-4 text-lg mt-0.5"></i>
                                    <span className="leading-snug">Implement tracking systems to measure performance and growth.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Column 2 - Standard */}
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center">
                            <div className="mb-6 pb-6 border-b border-dotted border-gray-300 w-full">
                                <h4 className="text-xl md:text-[22px] font-[Oswald] font-bold uppercase text-gray-900 mb-3 tracking-wide">STANDARD PACKAGE</h4>
                                <div className="flex justify-center items-center">
                                    <span className="text-4xl font-bold text-[#143d1f] font-[Oswald]">$14,999</span>
                                </div>
                            </div>
                            <ul className="space-y-5 text-[14px] text-gray-600 font-[Arial] flex-grow text-left w-full pl-2">
                                <li className="flex items-start pb-5 border-b border-dotted border-gray-200">
                                    <i className="fas fa-check-circle text-[#143d1f] mr-4 text-lg mt-0.5"></i>
                                    <span className="leading-snug">Identifying what resonates with your audience.</span>
                                </li>
                                <li className="flex items-start pb-5 border-b border-dotted border-gray-200">
                                    <i className="fas fa-check-circle text-[#143d1f] mr-4 text-lg mt-0.5"></i>
                                    <span className="leading-snug">Optimize content for better engagement.</span>
                                </li>
                                <li className="flex items-start pb-5 border-b border-dotted border-gray-200">
                                    <i className="fas fa-check-circle text-[#143d1f] mr-4 text-lg mt-0.5"></i>
                                    <span className="leading-snug">Align strategies with brand goals.</span>
                                </li>
                                <li className="flex items-start pb-2 border-none">
                                    <i className="fas fa-check-circle text-[#143d1f] mr-4 text-lg mt-0.5"></i>
                                    <span className="leading-snug">Millions of dollars of ad spend spent... you&apos;re in good hands</span>
                                </li>
                            </ul>
                        </div>
                        
                        {/* Column 3 - Premium */}
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center">
                            <div className="mb-6 pb-6 border-b border-dotted border-gray-300 w-full">
                                <h4 className="text-xl md:text-[22px] font-[Oswald] font-bold uppercase text-gray-900 mb-3 tracking-wide">PREMIUM PACKAGE</h4>
                                <div className="flex justify-center items-center">
                                    <span className="text-4xl font-bold text-[#143d1f] font-[Oswald]">$29,999</span>
                                </div>
                            </div>
                            <ul className="space-y-5 text-[14px] text-gray-600 font-[Arial] flex-grow text-left w-full pl-2">
                                <li className="flex items-start pb-5 border-b border-dotted border-gray-200">
                                    <i className="fas fa-check-circle text-[#143d1f] mr-4 text-lg mt-0.5"></i>
                                    <span className="leading-snug">Experiment with creative strategies to enhance brand presence.</span>
                                </li>
                                <li className="flex items-start pb-5 border-b border-dotted border-gray-200">
                                    <i className="fas fa-check-circle text-[#143d1f] mr-4 text-lg mt-0.5"></i>
                                    <span className="leading-snug">Refine visuals and messaging to align with your brand identity and objectives.</span>
                                </li>
                                <li className="flex items-start pb-2 border-none">
                                    <i className="fas fa-check-circle text-[#143d1f] mr-4 text-lg mt-0.5"></i>
                                    <span className="leading-snug">Provide comprehensive brand strategy, market research, visual and messaging overhaul, and implementation support.</span>
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
    );
}
