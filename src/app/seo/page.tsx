"use client";

import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

// Dynamic imports for below-the-fold content to improve main thread activity metrics (TBT/LCP optimization)
const PerformanceSection = dynamic(() => import("@/components/seo/PerformanceSection"), { ssr: true });
const TimelineSection = dynamic(() => import("@/components/seo/TimelineSection"), { ssr: true });
const PricingSection = dynamic(() => import("@/components/seo/PricingSection"), { ssr: true });
const FaqSection = dynamic(() => import("@/components/seo/FaqSection"), { ssr: true });
const CTASection = dynamic(() => import("@/components/seo/CTASection"), { ssr: true });

// A helper component to wrap text safely without linking "SEO" anymore as requested
const SEOText = ({ children }: { children: React.ReactNode }) => {
    return <>{children}</>;
};

// (Assuming we are inside the SEOLandingPage component, we need to add the state variable)
export default function SEOLandingPage() {
    const [isPlaying, setIsPlaying] = useState(false);

    const faqs = [
        // ... (data already injected above)
        {
            question: "HOW MUCH DO YOUR SERVICES COST?",
            answer: "Pricing ranges based on your needs. For example, if you want to generate 1 call weekly, that's going to cost less than generating 10 calls weekly. Most clients pay between $400-$1000/month for the management of their SEO and/or Google Ads campaigns (not including ad spend, a third party cost, which will vary based on your overall budget)."
        },
        {
            question: "DO YOU PROVIDE A FREE CONSULTATION?",
            answer: "Of course! Call or email us any time to schedule a time to talk. We can discuss your campaigns, what's working and what's not, and what your goals are. We will then develop a plan with benchmarks and costs and answer any questions that you have. We aim to be very transparent and make sure everything makes sense before moving forward."
        },
        {
            question: "WHAT MAKES YOU DIFFERENT THAN OTHER COMPANIES?",
            answer: "Our goal is to provide you with excellent service while not breaking the bank. All of our services are reasonably priced and aim to drive as much value to your business as possible. We also offer performance-based plans which is not common, so that's something that differentiates our company as well."
        },
        {
            question: "DO YOU OFFER PERFORMANCE-BASED MARKETING SERVICES?",
            answer: "We do! We offer performance-based SEO options where we only charge you our monthly management fee if we're able to get you on page 1 of Google. Reach out to us to discuss the details and we can see if this service would make sense for your business."
        },
        {
            question: "HOW FAST CAN YOU GET ME ON PAGE 1 OF GOOGLE?",
            answer: "It depends on the service. With Google Ads, we can get you prime placement at the top of page 1 immediately for practically anything since you \"pay-per-click\". With RankGuarantee™, we can get on page 1 organically within 60 days for lower competition, long tail keywords. With our SEO Packages, we can get you on page 1 for higher competition keywords within 6-12 or so months. Generally national campaigns take longer, as would super competitive industries."
        },
        {
            question: "DO YOU REQUIRE LONG-TERM CONTRACTS?",
            answer: "We do not. All of our clients are month-to-month and are not locked in. We have always been like this and plan to continue operating like this moving forward. Why? Because we figure if a client wants to stick around with us, it's because they're happy and we're doing our job. At no point do we want a client to be unhappy and be forced to work with us... that wouldn't be fun for either party."
        }
    ];

    return (
        <div className="bg-[#eef8fd] dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans antialiased">
            {/* ... Existing header ... */}
            <div className="bg-[#eef8fd] w-full py-4 px-4 flex flex-col sm:flex-row items-center justify-center gap-6 shadow-sm z-50 relative">
                <div className="text-[#0a2e15] font-[Oswald] font-bold text-[1.35rem] md:text-2xl uppercase tracking-wider">
                    <SEOText>FIND OUT WHY YOUR COMPANY NEEDS SEO OPTIMIZATION</SEOText>
                </div>
                <button className="bg-[#0a2e15] text-white px-8 py-3 text-sm font-bold uppercase rounded-sm hover:bg-green-900 transition shadow-md" onClick={() => setIsPlaying(true)}>
                    Watch Video
                </button>
            </div>

            <header className="bg-[#143d1f] text-white relative overflow-hidden">
                {/* Background Image & Green Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/picture-for-google-ads1.webp"
                        alt="SEO Strategy"
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                    />
                    {/* Dark Green overlay at 60% opacity to give a strong green tint */}
                    <div className="absolute inset-0 bg-[#143d1f]/80"></div>
                </div>

                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat z-0"></div>
                <div className="max-w-7xl mx-auto px-4 pt-16 pb-28 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-16">
                        <div className="w-full lg:w-[45%] space-y-5">
                            <h1 className="text-[26px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-[Oswald] font-bold uppercase leading-[1.1] tracking-normal drop-shadow-sm text-white">
                                FROM START TO FINISH:<br />
                                YOUR COMPLETE SEO STRATEGY
                            </h1>
                            <p className="text-[14px] md:text-[17px] lg:text-[18.5px] font-bold text-white leading-[1.5] font-[Arial] drop-shadow-sm">
                                Our structured SEO approach ensures lasting growth<br className="hidden lg:block" />
                                in your organic search presence. Keep reading to see<br className="hidden lg:block" />
                                how we make it happen!
                            </p>
                            <p className="text-[14px] md:text-[17px] lg:text-[18.5px] font-bold text-white leading-[1.5] font-[Arial] mt-6 drop-shadow-sm">
                                Read below to learn how we do it!
                            </p>
                        </div>
                        <div className="w-full lg:w-[55%] pl-0">
                            {/* Click to play video component structurally matching homepage with a white border and straight edges */}
                            <div className="aspect-video bg-black/90 shadow-[0_30px_60px_rgba(0,0,0,0.6)] w-full max-w-[900px] flex items-center justify-center relative overflow-hidden border-[4px] lg:border-[6px] border-white ml-auto">
                                {!isPlaying ? (
                                    <div
                                        className="absolute inset-0 z-20 cursor-pointer group"
                                        onClick={() => setIsPlaying(true)}
                                    >
                                        <Image
                                            src="/images/SEO_para_video.jpg"
                                            alt="Watch Video"
                                            fill
                                            className="object-cover scale-[1.03] transition-transform duration-700 group-hover:scale-[1.08]"
                                        />
                                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                                            <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                                                <svg className="w-8 h-8 text-[#143d1f] fill-current ml-1" viewBox="0 0 24 24">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <iframe
                                        className="w-full h-full absolute inset-0 z-30"
                                        src="https://www.youtube.com/embed/ZeiacMBFa6Y?autoplay=1&rel=0"
                                        title="Lemonade Ideas SEO Video"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute bottom-0 left-0 right-0 h-32 bg-white dark:bg-gray-900"
                    style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
                ></div>
            </header>


            <PerformanceSection />
            <TimelineSection />
            <PricingSection />
            <FaqSection faqs={faqs} />
            <CTASection />

            {/* Script tag injection for Font Awesome */}
            <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js" defer></script>
        </div>
    );
}
