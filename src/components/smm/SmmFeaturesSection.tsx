import React from 'react';

export default function SmmFeaturesSection() {
    return (
        <section className="py-20 px-4 bg-white dark:bg-gray-900 relative overflow-hidden" data-purpose="features">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16 relative">
                    <div className="absolute inset-0 flex items-center justify-center opacity-5 dark:opacity-10 pointer-events-none -mt-8">
                        <span className="text-6xl md:text-[180px] font-[Oswald] font-bold uppercase text-gray-400 tracking-tighter leading-none whitespace-nowrap">
                            APPROACH
                        </span>
                    </div>
                    <h4 className="text-[#34a853] font-bold text-xs uppercase tracking-[0.3em] mb-4 relative z-10">
                        Our Approach to Social Media Management
                    </h4>
                    <h2 className="text-4xl md:text-5xl font-[Oswald] font-bold text-[#143d1f] dark:text-white uppercase relative z-10 tracking-tight flex flex-col items-center">
                        <span className="block mb-2">EVERYTHING YOU NEED TO GROW YOUR</span>
                        <span className="block">PRESENCE—AND THEN SOME</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-[#eff8fa] dark:bg-gray-800 p-8 rounded-sm text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                        <div className="text-[#143d1f] dark:text-[#facc15] text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fas fa-clipboard-list"></i>
                        </div>
                        <h3 className="font-[Oswald] font-bold text-xl uppercase mb-4 text-[#143d1f] dark:text-white tracking-wide">
                            EASY ONBOARDING
                        </h3>
                        <p className="text-[13px] text-gray-600 dark:text-gray-400 leading-[1.8] font-medium">
                            We know your time is valuable, so we&apos;ve designed a streamlined onboarding process that&apos;s simple and efficient. This way, we can get your social media strategy up and running quickly, so you see results faster.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#eff8fa] dark:bg-gray-800 p-8 rounded-sm text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                        <div className="text-[#143d1f] dark:text-[#facc15] text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fas fa-file-signature"></i>
                        </div>
                        <h3 className="font-[Oswald] font-bold text-xl uppercase mb-4 text-[#143d1f] dark:text-white tracking-wide">
                            NO CONTRACT REQUIRED
                        </h3>
                        <p className="text-[13px] text-gray-600 dark:text-gray-400 leading-[1.8] font-medium">
                            We don&apos;t believe in locking you into long-term contracts. You&apos;re free to leave at any time, but we&apos;re confident you&apos;ll stay when you see how we elevate your social media presence.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#eff8fa] dark:bg-gray-800 p-8 rounded-sm text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                        <div className="text-[#143d1f] dark:text-[#facc15] text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fas fa-credit-card"></i>
                        </div>
                        <h3 className="font-[Oswald] font-bold text-xl uppercase mb-4 text-[#143d1f] dark:text-white tracking-wide">
                            AFFORDABLE MONTHLY FEE
                        </h3>
                        <p className="text-[13px] text-gray-600 dark:text-gray-400 leading-[1.8] font-medium">
                            Our pricing is competitive and designed with small businesses in mind. We believe effective social media management should be accessible and budget-friendly, with no surprise fees—just a clear, affordable monthly rate.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#eff8fa] dark:bg-gray-800 p-8 rounded-sm text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                        <div className="text-[#143d1f] dark:text-[#facc15] text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fas fa-calendar-alt"></i>
                        </div>
                        <h3 className="font-[Oswald] font-bold text-xl uppercase mb-4 text-[#143d1f] dark:text-white tracking-wide">
                            CAMPAIGN CREATION
                        </h3>
                        <p className="text-[13px] text-gray-600 dark:text-gray-400 leading-[1.8] font-medium">
                            Our social media campaigns include everything you need: content creation, audience targeting, platform setup, post scheduling.
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-[#eff8fa] dark:bg-gray-800 p-8 rounded-sm text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                        <div className="text-[#143d1f] dark:text-[#facc15] text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fas fa-cogs"></i>
                        </div>
                        <h3 className="font-[Oswald] font-bold text-xl uppercase mb-4 text-[#143d1f] dark:text-white tracking-wide">
                            ONGOING OPTIMIZATION
                        </h3>
                        <p className="text-[13px] text-gray-600 dark:text-gray-400 leading-[1.8] font-medium">
                            We don&apos;t believe in a &quot;set it and forget it&quot; approach. Our team of experts continuously monitors and optimizes your social media strategy based on real-time data. As we analyze what works best, we fine-tune your content and engagement tactics, ensuring your social media presence keeps improving and delivering better results over time.
                        </p>
                    </div>

                    {/* Card 6 */}
                    <div className="bg-[#eff8fa] dark:bg-gray-800 p-8 rounded-sm text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                        <div className="text-[#143d1f] dark:text-[#facc15] text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fas fa-chart-line"></i>
                        </div>
                        <h3 className="font-[Oswald] font-bold text-xl uppercase mb-4 text-[#143d1f] dark:text-white tracking-wide">
                            PROVEN RESULTS
                        </h3>
                        <p className="text-[13px] text-gray-600 dark:text-gray-400 leading-[1.8] font-medium">
                            How do you know it&apos;s working? We provide detailed reports tracking key metrics like engagement, reach, followers, and conversions. You&apos;ll see the impact of your social media campaigns and how they contribute to your business goals. Let us handle your social media management so you can focus on running your business!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
