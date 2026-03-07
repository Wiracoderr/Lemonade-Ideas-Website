"use client";

import React from "react";

// A helper component to wrap text safely without linking "SEO" anymore as requested
const SEOText = ({ children }: { children: React.ReactNode }) => {
    return <>{children}</>;
};

export default function PerformanceSection() {
    return (
        <section className="py-20 px-4 bg-white dark:bg-gray-900 relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16 relative">
                    <div className="absolute inset-0 flex items-center justify-center opacity-5 dark:opacity-10 pointer-events-none -mt-8">
                        <span className="text-6xl md:text-[180px] font-[Oswald] font-bold uppercase text-gray-400 tracking-tighter leading-none whitespace-nowrap">
                            PERFORMANCE
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-[Oswald] font-bold text-[#143d1f] dark:text-white uppercase mb-8 relative z-10 tracking-tight">
                        OUR APPROACH: STEADY, SUSTAINABLE GROWTH
                    </h2>
                    <p className="max-w-5xl mx-auto text-gray-700 dark:text-gray-300 relative z-10 text-base md:text-[15px] font-medium font-[Inter] leading-relaxed">
                        A stunning website is only effective if people can find it. Your goal is to grow, and we&apos;re here to help you achieve it. By following Google&apos;s best practices and targeting the most relevant search terms, we ensure your business reaches the right audience at the right time. Backed by years of experience and data-driven strategies, you can trust us to deliver real, measurable results for your SEO campaign.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Card 1 */}
                    <div className="bg-[#eff8fa] dark:bg-gray-800 p-8 rounded-sm text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                        <div className="text-[#143d1f] dark:text-[#facc15] text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fas fa-search"></i>
                        </div>
                        <h3 className="font-[Oswald] font-bold text-xl uppercase mb-4 text-[#143d1f] dark:text-white tracking-wide">
                            KEYWORD RESEARCH
                        </h3>
                        <p className="text-[13px] text-gray-600 dark:text-gray-400 leading-[1.8] font-medium">
                            Effective keyword targeting goes beyond search volume. We focus on relevance, intent, and competition to identify the search terms that offer the greatest potential for your unique business.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#eff8fa] dark:bg-gray-800 p-8 rounded-sm text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                        <div className="text-[#143d1f] dark:text-[#facc15] text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fas fa-laptop-code"></i>
                        </div>
                        <h3 className="font-[Oswald] font-bold text-xl uppercase mb-4 text-[#143d1f] dark:text-white tracking-wide">
                            <SEOText>ON-PAGE SEO</SEOText>
                        </h3>
                        <p className="text-[13px] text-gray-600 dark:text-gray-400 leading-[1.8] font-medium">
                            Every page and image on your site holds valuable opportunities for optimization. We&apos;ll handle the details to ensure your website follows Google&apos;s best practices, making the most of every opportunity.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#eff8fa] dark:bg-gray-800 p-8 rounded-sm text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                        <div className="text-[#143d1f] dark:text-[#facc15] text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fas fa-map-marked-alt"></i>
                        </div>
                        <h3 className="font-[Oswald] font-bold text-xl uppercase mb-4 text-[#143d1f] dark:text-white tracking-wide">
                            <SEOText>LOCAL SEO PAGES</SEOText>
                        </h3>
                        <p className="text-[13px] text-gray-600 dark:text-gray-400 leading-[1.8] font-medium">
                            Customized, highly-optimized local landing pages help you connect with customers in specific areas. We pair relevant keywords (e.g., plumber, plumbing) with communities in your service area (e.g., Santa Monica, Downtown LA) to create tailored pages for each location.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#eff8fa] dark:bg-gray-800 p-8 rounded-sm text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                        <div className="text-[#143d1f] dark:text-[#facc15] text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fas fa-pen-fancy"></i>
                        </div>
                        <h3 className="font-[Oswald] font-bold text-xl uppercase mb-4 text-[#143d1f] dark:text-white tracking-wide">
                            CONTENT MARKETING
                        </h3>
                        <p className="text-[13px] text-gray-600 dark:text-gray-400 leading-[1.8] font-medium">
                            Great content marketing starts with understanding your business and the challenges you solve for your customers. We&apos;ll transform this insight into engaging, click-worthy content that enhances your domain authority and attracts the right audience.
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-[#eff8fa] dark:bg-gray-800 p-8 rounded-sm text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                        <div className="text-[#143d1f] dark:text-[#facc15] text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fas fa-store"></i>
                        </div>
                        <h3 className="font-[Oswald] font-bold text-xl uppercase mb-4 text-[#143d1f] dark:text-white tracking-wide">
                            GOOGLE BUSINESS PROFILE
                        </h3>
                        <p className="text-[13px] text-gray-600 dark:text-gray-400 leading-[1.8] font-medium">
                            For local businesses, a well-optimized Google Business Profile is key to appearing in map-based search results. Regular updates and posts keep your profile active, helping drive traffic and showing Google you&apos;re ready for business.
                        </p>
                    </div>

                    {/* Card 6 */}
                    <div className="bg-[#eff8fa] dark:bg-gray-800 p-8 rounded-sm text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                        <div className="text-[#143d1f] dark:text-[#facc15] text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fas fa-list-ul"></i>
                        </div>
                        <h3 className="font-[Oswald] font-bold text-xl uppercase mb-4 text-[#143d1f] dark:text-white tracking-wide">
                            LOCAL CITATIONS
                        </h3>
                        <p className="text-[13px] text-gray-600 dark:text-gray-400 leading-[1.8] font-medium">
                            Every mention of your business name, phone number, and address online counts as a local citation. We&apos;ll help you secure and maintain accurate listings on directories like YP.com, Yelp, FourSquare, and more to strengthen your local presence.
                        </p>
                    </div>

                    {/* Card 7 */}
                    <div className="bg-[#eff8fa] dark:bg-gray-800 p-8 rounded-sm text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                        <div className="text-[#143d1f] dark:text-[#facc15] text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fas fa-users"></i>
                        </div>
                        <h3 className="font-[Oswald] font-bold text-xl uppercase mb-4 text-[#143d1f] dark:text-white tracking-wide">
                            SOCIAL MEDIA
                        </h3>
                        <p className="text-[13px] text-gray-600 dark:text-gray-400 leading-[1.8] font-medium">
                            Active social media profiles linking back to your website enhance your online visibility and contribute to your domain authority. They also build trust with potential customers researching your business.
                        </p>
                    </div>

                    {/* Card 8 */}
                    <div className="bg-[#eff8fa] dark:bg-gray-800 p-8 rounded-sm text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                        <div className="text-[#143d1f] dark:text-[#facc15] text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                            <i className="fas fa-star"></i>
                        </div>
                        <h3 className="font-[Oswald] font-bold text-xl uppercase mb-4 text-[#143d1f] dark:text-white tracking-wide">
                            GOOGLE REVIEWS
                        </h3>
                        <p className="text-[13px] text-gray-600 dark:text-gray-400 leading-[1.8] font-medium">
                            Studies show that 93% of consumers consult Google reviews before making a purchase, and 77% are willing to leave a review if asked. We make it simple for satisfied customers to share their experiences and boost your online reputation.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
