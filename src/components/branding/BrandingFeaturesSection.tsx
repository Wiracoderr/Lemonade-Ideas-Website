import React from 'react';

export default function BrandingFeaturesSection() {
    return (
        <section className="py-20 px-4 bg-white dark:bg-gray-900 relative overflow-hidden font-sans">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16 relative">
                    <span className="text-[#38b04d] font-[Oswald] font-bold uppercase tracking-widest text-sm mb-4 block">
                        OUR APPROACH
                    </span>
                    <h2 className="text-3xl md:text-5xl font-[Oswald] font-black text-[#143d1f] dark:text-white uppercase mb-8 relative z-10 tracking-tight leading-[1.1]">
                        EVERYTHING YOU NEED FOR SUCCESSFUL BRANDING AND STRATEGY—AND MORE
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
                            We understand the frustration of long, complicated onboarding processes. That&apos;s why we&apos;ve created a simple, efficient process to get things moving quickly so you can start seeing results sooner.
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
                            We believe in earning your trust, not forcing it. Our services come with no long-term contracts, allowing you to work with us on your terms. We&apos;re confident that the value we provide will keep you coming back.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#eff8fa] dark:bg-gray-800 p-8 rounded-sm text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                        <div className="text-[#143d1f] dark:text-[#facc15] text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fas fa-calendar-check"></i>
                        </div>
                        <h3 className="font-[Oswald] font-bold text-[22px] uppercase mb-4 text-[#143d1f] dark:text-white tracking-wide">
                            AFFORDABLE PRICING
                        </h3>
                        <p className="text-[14px] text-gray-600 dark:text-gray-400 leading-[1.8] font-medium font-[Arial]">
                            Our pricing is designed to be both competitive and accessible for businesses of all sizes. We believe high-quality branding and strategy should be within reach, with no hidden fees—just transparent, budget-friendly options.
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
                            When we create your strategy, we include everything: brand positioning, messaging, audience research, content planning, and tailored marketing initiatives. We leave no detail overlooked, ensuring your brand stands out and performs.
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
                            We don&apos;t believe in a &quot;set it and forget it&quot; mindset. Our team continuously evaluates your branding and strategy performance, making data-driven adjustments to maximize your impact and align with your evolving goals.
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
                            How will you know your strategy is working? We provide regular updates and reports, tracking key metrics such as engagement, reach, conversions, and revenue growth. You&apos;ll see tangible proof of your success and how your efforts contribute to your business goals. Let us help you take your brand and strategy to the next level with an approach built for results and long-term growth!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
