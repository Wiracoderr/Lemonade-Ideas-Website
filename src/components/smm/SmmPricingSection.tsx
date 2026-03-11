"use client";
import React from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';

export default function SmmPricingSection() {
    return (
        <section className="py-24 bg-white font-sans" data-purpose="pricing">
            <div className="container mx-auto px-4 text-center mb-12">
                <h2 className="text-5xl md:text-7xl font-black text-gray-100 uppercase select-none mb-[-1.5rem]">Pricing</h2>
                <p className="text-gray-600 font-bold relative z-10 text-lg">Know exactly what you&apos;re getting and how much it costs—no surprises.</p>
            </div>
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="bg-blue-50/50 rounded-xl overflow-hidden shadow-sm border border-blue-100">
                    <div className="p-8 text-center border-b border-blue-100">
                        <h3 className="text-[#0d2a1a] font-black uppercase tracking-tight text-lg">Our pricing is structured to help you succeed. Once we get your campaign running smoothly you will see a reduction in our management fee.</h3>
                    </div>
                    <div className="bg-[#34a853] py-3 text-center">
                        <span className="text-white font-black uppercase text-sm tracking-widest">Social Media Management Plan</span>
                    </div>
                    <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-blue-200">
                        {/* Tier 1 */}
                        <div className="p-10 text-center flex flex-col items-center">
                            <h4 className="font-black text-[#0d2a1a] uppercase text-sm tracking-wide">Starter Package</h4>
                            <div className="text-5xl font-black text-[#0d2a1a] my-6">$1000</div>
                            <ul className="text-left w-full space-y-4 text-[15px] text-gray-600 font-semibold mb-8 flex-1">
                                <li className="flex items-start gap-3"><Check size={20} className="text-[#34a853] shrink-0 mt-0.5" /> 1-2 platforms</li>
                                <li className="flex items-start gap-3"><Check size={20} className="text-[#34a853] shrink-0 mt-0.5" /> 10-15 posts / month</li>
                                <li className="flex items-start gap-3"><Check size={20} className="text-[#34a853] shrink-0 mt-0.5" /> Basic Engagement</li>
                                <li className="flex items-start gap-3"><Check size={20} className="text-[#34a853] shrink-0 mt-0.5" /> Monthly reporting</li>
                            </ul>
                        </div>
                        {/* Tier 2 */}
                        <div className="p-10 text-center flex flex-col items-center bg-white shadow-inner">
                            <h4 className="font-black text-[#0d2a1a] uppercase text-sm tracking-wide">Growth Package</h4>
                            <div className="text-5xl font-black text-[#0d2a1a] my-6">$1500</div>
                            <ul className="text-left w-full space-y-4 text-[15px] text-gray-600 font-semibold mb-8 flex-1">
                                <li className="flex items-start gap-3"><Check size={20} className="text-[#34a853] shrink-0 mt-0.5" /> 2-3 platforms</li>
                                <li className="flex items-start gap-3"><Check size={20} className="text-[#34a853] shrink-0 mt-0.5" /> 20-25 posts / month</li>
                                <li className="flex items-start gap-3"><Check size={20} className="text-[#34a853] shrink-0 mt-0.5" /> Engagement + basic ad management</li>
                                <li className="flex items-start gap-3"><Check size={20} className="text-[#34a853] shrink-0 mt-0.5" /> Bi-weekly reporting</li>
                            </ul>
                        </div>
                        {/* Tier 3 */}
                        <div className="p-10 text-center flex flex-col items-center">
                            <h4 className="font-black text-[#0d2a1a] uppercase text-sm tracking-wide">Comprehensive Package</h4>
                            <div className="text-5xl font-black text-[#0d2a1a] my-6">$3000</div>
                            <ul className="text-left w-full space-y-4 text-[15px] text-gray-600 font-semibold mb-8 flex-1">
                                <li className="flex items-start gap-3"><Check size={20} className="text-[#34a853] shrink-0 mt-0.5" /> 3+ platforms</li>
                                <li className="flex items-start gap-3"><Check size={20} className="text-[#34a853] shrink-0 mt-0.5" /> 30+ posts / month</li>
                                <li className="flex items-start gap-3"><Check size={20} className="text-[#34a853] shrink-0 mt-0.5" /> Engagement, ads, influencer partnerships</li>
                                <li className="flex items-start gap-3"><Check size={20} className="text-[#34a853] shrink-0 mt-0.5" /> Weekly reporting and custom strategy</li>
                                <li className="flex items-start gap-3"><Check size={20} className="text-[#34a853] shrink-0 mt-0.5" /> Video creation &amp; editing (2 per month)</li>
                            </ul>
                        </div>
                    </div>
                    <Link href="#contact" className="block w-full bg-[#0d2a1a] text-center py-5 hover:bg-black transition-colors">
                        <span className="text-white font-black uppercase text-[15px] tracking-[0.2em]">GET STARTED →</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
