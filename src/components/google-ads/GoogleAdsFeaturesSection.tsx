import React from 'react';

export default function GoogleAdsFeaturesSection() {
    return (
        <section className="py-20 px-4 bg-white dark:bg-gray-900 relative overflow-hidden font-sans">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16 relative">
                    <span className="text-[#38b04d] font-[Oswald] font-bold uppercase tracking-widest text-sm mb-4 block">
                        OUR APPROACH
                    </span>
                    <h2 className="text-4xl md:text-5xl font-[Oswald] font-black text-[#143d1f] dark:text-white uppercase mb-8 relative z-10 tracking-tight">
                        EVERYTHING YOU NEED TO SUCCEED—AND THEN SOME
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {/* Card 1 */}
                    <div className="bg-[#eff8fa] dark:bg-gray-800 p-8 rounded-sm text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                        <div className="text-[#143d1f] dark:text-[#facc15] text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fas fa-clipboard-check"></i>
                        </div>
                        <h3 className="font-[Oswald] font-bold text-[22px] uppercase mb-4 text-[#143d1f] dark:text-white tracking-wide">
                            EASY ONBOARDING
                        </h3>
                        <p className="text-[14px] text-gray-600 dark:text-gray-400 leading-[1.8] font-medium font-[Arial]">
                            Lengthy and complicated onboarding processes can be frustrating. That&apos;s why we&apos;ve designed a streamlined process to get things up and running quickly, allowing you to start seeing results sooner.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#eff8fa] dark:bg-gray-800 p-8 rounded-sm text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                        <div className="text-[#143d1f] dark:text-[#facc15] text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fas fa-file-contract"></i>
                        </div>
                        <h3 className="font-[Oswald] font-bold text-[22px] uppercase mb-4 text-[#143d1f] dark:text-white tracking-wide">
                            NO CONTRACT REQUIRED
                        </h3>
                        <p className="text-[14px] text-gray-600 dark:text-gray-400 leading-[1.8] font-medium font-[Arial]">
                            We never lock you into a contract. You&apos;re free to leave anytime—but we&apos;re confident you&apos;ll stay once you see the impact we can have on your business.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#eff8fa] dark:bg-gray-800 p-8 rounded-sm text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                        <div className="text-[#143d1f] dark:text-[#facc15] text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fas fa-calendar-check"></i>
                        </div>
                        <h3 className="font-[Oswald] font-bold text-[22px] uppercase mb-4 text-[#143d1f] dark:text-white tracking-wide">
                            AFFORDABLE MONTHLY FEE
                        </h3>
                        <p className="text-[14px] text-gray-600 dark:text-gray-400 leading-[1.8] font-medium font-[Arial]">
                            Our pricing is competitive and designed with small businesses in mind. We believe Google Ads management should be both effective and affordable. With us, there are no hidden fees—just a straightforward monthly rate.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#eff8fa] dark:bg-gray-800 p-8 rounded-sm text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                        <div className="text-[#143d1f] dark:text-[#facc15] text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fas fa-sitemap"></i>
                        </div>
                        <h3 className="font-[Oswald] font-bold text-[22px] uppercase mb-4 text-[#143d1f] dark:text-white tracking-wide">
                            CAMPAIGN CREATION
                        </h3>
                        <p className="text-[14px] text-gray-600 dark:text-gray-400 leading-[1.8] font-medium font-[Arial]">
                            When we say campaign creation includes everything, we mean it: a custom landing page, keyword research, ad copywriting, extensions, conversion tracking, call tracking, and more. With us, you can trust that every detail is covered to set your campaign up for success.
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-[#eff8fa] dark:bg-gray-800 p-8 rounded-sm text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                        <div className="text-[#143d1f] dark:text-[#facc15] text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fas fa-cogs"></i>
                        </div>
                        <h3 className="font-[Oswald] font-bold text-[22px] uppercase mb-4 text-[#143d1f] dark:text-white tracking-wide">
                            ONGOING OPTIMIZATION
                        </h3>
                        <p className="text-[14px] text-gray-600 dark:text-gray-400 leading-[1.8] font-medium font-[Arial]">
                            We don&apos;t believe in a &quot;set it and forget it&quot; approach. Our skilled strategists continuously optimize your campaign using data-driven insights. As we refine and adjust over time, your campaign will keep improving to deliver even better results.
                        </p>
                    </div>

                    {/* Card 6 */}
                    <div className="bg-[#eff8fa] dark:bg-gray-800 p-8 rounded-sm text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                        <div className="text-[#143d1f] dark:text-[#facc15] text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fas fa-laptop-code"></i>
                        </div>
                        <h3 className="font-[Oswald] font-bold text-[22px] uppercase mb-4 text-[#143d1f] dark:text-white tracking-wide">
                            PROOF IT&apos;S ALL WORKING
                        </h3>
                        <p className="text-[14px] text-gray-600 dark:text-gray-400 leading-[1.8] font-medium font-[Arial]">
                            How can you tell if your campaign is delivering results? We meticulously track every call, contact form submission, and sale generated by your campaign. You&apos;ll have clear visibility into the metrics that matter most to you, so you can see the impact firsthand.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
