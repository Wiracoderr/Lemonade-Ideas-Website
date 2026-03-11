import React from 'react';
import Image from 'next/image';

export default function GoogleAdsTimelineSection() {
    return (
        <section className="bg-[#eaf6fc] py-20 px-5 font-sans">
            <div className="mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="border-l-4 border-[#38b04d] pl-6 mb-8">
                            <h2 className="text-3xl font-black uppercase text-gray-900 font-sans">The Paid Ads Timeline</h2>
                        </div>
                        <div className="space-y-8 pl-2">
                            <p className="text-sm text-gray-600 mb-6">We have methodically mapped out a timeline that sets you up for success. The initial few months (~90 days) are critical in getting a successful paid ads campaign moving in the right direction so we make sure you are fully engaged during this period of time. Here is what you can expect:</p>
                            <div className="relative">
                                <h3 className="font-bold text-gray-900 uppercase text-sm mb-2">Build - Month 1</h3>
                                <p className="text-xs text-gray-600">We set up your Google Ads campaign with a solid foundation—landing pages, keywords, ads, extensions, and conversion tracking—to maximize leads at the lowest cost.</p>
                                <p className="text-xs text-gray-500 mt-2 italic">30-Day Check-In: Review initial performance with your Account Manager.</p>
                            </div>
                            <div className="relative">
                                <h3 className="font-bold text-gray-900 uppercase text-sm mb-2">Learn - Month 2</h3>
                                <p className="text-xs text-gray-600">Your campaign is live, and we optimize regularly—adding negative keywords, refining bids, and enhancing lead quality.</p>
                                <p className="text-xs text-gray-500 mt-2 italic">60-Day Check-In: Discuss performance updates with your Account Manager.</p>
                            </div>
                            <div className="relative">
                                <h3 className="font-bold text-gray-900 uppercase text-sm mb-2">Optimize - Month 3</h3>
                                <p className="text-xs text-gray-600">We refine further by focusing on high-performing ad groups and testing broader keywords. Our goal by the end of month 3 is to double your calls compared to any existing campaigns in your account.</p>
                                <p className="text-xs text-gray-500 mt-2 italic">90-Day Check-In: Evaluate campaign efficiency and results.</p>
                            </div>
                            <div className="relative">
                                <h3 className="font-bold text-gray-900 uppercase text-sm mb-2">Manage &amp; Scale - Month 4+ (Price Drop!)</h3>
                                <p className="text-xs text-gray-600">We continue optimizing AND lower your monthly management fee to increase your ROI.</p>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 flex justify-center w-full">
                        <div className="relative w-full max-w-[500px] aspect-[3/4] lg:ml-8 transform transition-transform hover:scale-105 duration-500">
                            {/* Desktop Image */}
                            <Image
                                src="/images/google-ads-timeline.avif"
                                alt="Paid Ads Timeline Breakdown"
                                fill
                                className="object-contain drop-shadow-2xl hidden lg:block"
                                sizes="50vw"
                            />
                            {/* Mobile Image */}
                            <Image
                                src="/images/google-ads-timeline-mobile.avif"
                                alt="Paid Ads Timeline Breakdown Mobile"
                                fill
                                className="object-contain drop-shadow-2xl block lg:hidden"
                                sizes="100vw"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
