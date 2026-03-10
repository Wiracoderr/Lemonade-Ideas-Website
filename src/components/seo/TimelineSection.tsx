"use client";

import React from "react";
import Image from "next/image";

export default function TimelineSection() {
    return (
        <section className="py-20 px-4 relative border-y border-gray-100 dark:border-gray-700 overflow-hidden">
            {/* Background color and texture */}
            <div className="absolute inset-0 bg-[#eff8fa] dark:bg-gray-900 z-0"></div>
            <div className="absolute inset-0 opacity-40 z-0 mix-blend-multiply dark:mix-blend-screen bg-[url('/images/layer-1.png')] bg-[length:45%_100%] bg-left bg-no-repeat"></div>

            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center relative z-10">
                <div className="lg:w-1/2 space-y-10">
                    <div>
                        {/* Updated title with top-left green bracket accent */}
                        <div className="relative pl-6 pt-2 mb-6">
                            <div className="absolute left-0 top-0 w-8 h-8 border-l-[4px] border-t-[4px] border-green-700 rounded-tl-sm"></div>
                            <h2 className="text-3xl md:text-5xl font-[Oswald] font-bold uppercase text-[#143d1f] dark:text-white leading-[1.1] tracking-tight">
                                HOW LEMONADE IDEAS STANDS OUT IN SEO YOUR<br />
                                SEO TIMELINE
                            </h2>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 text-[15px] leading-relaxed font-[Roboto] max-w-lg">
                            With over a decade of experience, we&apos;ve fine-tuned our process to deliver maximum results with minimal hassle. Here&apos;s what you can expect:
                        </p>
                    </div>

                    {/* Timeline items without the grey bounding box */}
                    <div className="space-y-10">
                        <div className="flex gap-6 items-start group">
                            <div className="flex-shrink-0">
                                {/* Updated icon styling */}
                                <div className="w-[50px] h-[50px] bg-[#143d1f] dark:bg-gray-800 rounded-lg flex items-center justify-center text-[#facc15] text-xl group-hover:scale-110 transition-transform">
                                    <i className="fas fa-chart-line"></i>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-[Oswald] font-bold text-xl uppercase text-[#143d1f] dark:text-white tracking-wide">
                                    MONTH 1: CAMPAIGN SETUP & STRATEGY
                                </h3>
                                <p className="text-[14px] text-gray-700 dark:text-gray-400 mt-2 leading-relaxed">
                                    We&apos;ll collaborate with you to gain access to your online assets, conduct in-depth keyword research to identify the best search terms, and develop a comprehensive 6-month strategy to kickstart your campaign.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start group">
                            <div className="flex-shrink-0">
                                <div className="w-[50px] h-[50px] bg-[#143d1f] dark:bg-gray-800 rounded-lg flex items-center justify-center text-[#facc15] text-xl group-hover:scale-110 transition-transform">
                                    <i className="fas fa-cogs"></i>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-[Oswald] font-bold text-xl uppercase text-[#143d1f] dark:text-white tracking-wide">
                                    MONTHS 2-6: PLAN EXECUTION
                                </h3>
                                <p className="text-[14px] text-gray-700 dark:text-gray-400 mt-2 leading-relaxed">
                                    During this phase, we&apos;ll put the strategy into action, focusing on consistent execution to boost activity and drive measurable improvements in your search rankings by month six.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start group">
                            <div className="flex-shrink-0">
                                <div className="w-[50px] h-[50px] bg-[#143d1f] dark:bg-gray-800 rounded-lg flex items-center justify-center text-[#facc15] text-xl group-hover:scale-110 transition-transform">
                                    <i className="fas fa-chart-pie"></i>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-[Oswald] font-bold text-xl uppercase text-[#143d1f] dark:text-white tracking-wide">
                                    MONTH 7 AND BEYOND: ANALYZE, REFINE, OPTIMIZE
                                </h3>
                                <p className="text-[14px] text-gray-700 dark:text-gray-400 mt-2 leading-relaxed">
                                    From month seven onward, we&apos;ll evaluate the campaign&apos;s progress, provide actionable insights, and outline a refreshed 6-month strategy aimed at continuous growth in organic rankings and traffic.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/2 relative group px-4">
                    <Image
                        src="/images/person-laptop-charts.webp"
                        alt="Person working on laptop with charts"
                        width={800}
                        height={600}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="rounded-[2rem] shadow-2xl w-full object-cover h-[500px] md:h-[600px] border-8 border-white dark:border-gray-800 relative z-10"
                    />
                </div>
            </div>
        </section>
    );
}
