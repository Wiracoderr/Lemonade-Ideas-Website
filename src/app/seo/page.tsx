"use client";

import React, { useState } from "react";
import Image from "next/image";

// A helper component to wrap text safely without linking "SEO" anymore as requested
const SEOText = ({ children }: { children: React.ReactNode }) => {
    return <>{children}</>;
};

// (Assuming we are inside the SEOLandingPage component, we need to add the state variable)
export default function SEOLandingPage() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

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

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

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
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOHV42t8HQs5NXzKWUuisrYOkA5TLkbfQWl-aZhFI-X6r2WRxcDsrrMvaEKJZDNsza4nMpUdWPtKcA2n1ACQTFpbsFnQ2TM_dxS7TgLlyEy6YE4FwKDqfS-jhohLH6y9dwhwp4PbdCvsiwy_WWaxU-IavFtzLag1AHi8R7jGXqBCX5DjNX1s86e7nuoqI2VnftWPcguCxumgE4ZZu-JrnIucXzyMoqE40qsyMSFNjCwLn5qKlCoeRGaRWqUqO3C16uaWvWMv2d164"
                            alt="Person working on laptop with charts"
                            width={800}
                            height={600}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="rounded-[2rem] shadow-2xl w-full object-cover h-[500px] md:h-[600px] border-8 border-white dark:border-gray-800 relative z-10"
                        />
                    </div>
                </div>
            </section>

            <section className="py-24 px-4 bg-white dark:bg-gray-900 relative overflow-hidden" id="pricing">
                <div className="max-w-[1240px] mx-auto">
                    <div className="mb-6 flex flex-col items-center">
                        <div className="relative h-20 md:h-28 w-full flex justify-center items-center overflow-hidden mb-8">
                            <span className="text-6xl md:text-9xl font-[Oswald] font-bold uppercase text-gray-200 dark:text-gray-800 tracking-widest absolute select-none pointer-events-none opacity-80 whitespace-nowrap">
                                Pricing
                            </span>
                            <h2 className="relative z-10 text-4xl md:text-6xl font-[Oswald] font-bold uppercase text-[#143d1f] dark:text-white tracking-tight text-center">
                                <SEOText>SEO Pricing</SEOText>
                            </h2>
                        </div>

                        {/* New text: Justified, full width of the panel, precise typo sizing to hit 2 lines */}
                        <p className="text-[#333] dark:text-gray-300 w-full text-[15px] md:text-[16.8px] font-[Roboto] text-justify tracking-wide leading-[1.8]">
                            We combine content marketing (blogging), on-page SEO, local landing pages (similar to those found in RankGuarantee™), and to create a full-stack strategy with each sub-item serving a specific purpose. Our SEO campaigns are structured in 6 month cycles to create checkpoints to better optimize long-term performance.
                        </p>
                    </div>

                    <div className="bg-[#f0f9fa] dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
                        {/* Top Green Banner */}
                        <div className="bg-[#38a149] py-5 text-center shadow-inner">
                            <h3 className="text-white font-[Oswald] font-bold text-2xl md:text-3xl uppercase tracking-widest text-shadow-sm">
                                <SEOText>SEO Package</SEOText>
                            </h3>
                        </div>

                        {/* Split White Cards */}
                        <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8">
                            {/* Column 1 */}
                            <div className="flex-1 bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col">
                                <div className="text-center mb-6 pb-6 border-b border-dotted border-gray-300 dark:border-gray-700">
                                    <div className="flex justify-center items-center gap-2">
                                        <span className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-[Oswald]">$1000</span>
                                        <span className="text-sm font-bold text-gray-800 dark:text-gray-300">Startup</span>
                                    </div>
                                    <div className="text-sm text-gray-500 mt-2 font-[Roboto]">(Month 1)</div>
                                </div>
                                <ul className="space-y-4 text-[15px] text-gray-600 dark:text-gray-400 font-[Roboto] flex-grow">
                                    <li className="flex items-center pb-4 border-b border-dotted border-gray-200 dark:border-gray-800">
                                        <i className="fas fa-check-circle text-[#2d7a36] dark:text-[#facc15] mr-4 text-lg"></i>
                                        <span><SEOText>On-page SEO audit</SEOText></span>
                                    </li>
                                    <li className="flex items-center pb-4 border-b border-dotted border-gray-200 dark:border-gray-800">
                                        <i className="fas fa-check-circle text-[#2d7a36] dark:text-[#facc15] mr-4 text-lg"></i>
                                        <span>Keyword research</span>
                                    </li>
                                    <li className="flex items-center pb-4 border-b border-dotted border-gray-200 dark:border-gray-800">
                                        <i className="fas fa-check-circle text-[#2d7a36] dark:text-[#facc15] mr-4 text-lg"></i>
                                        <span>Content marketing strategy</span>
                                    </li>
                                    <li className="flex items-center pb-4 border-b border-dotted border-gray-200 dark:border-gray-800 border-none">
                                        <i className="fas fa-check-circle text-[#2d7a36] dark:text-[#facc15] mr-4 text-lg"></i>
                                        <span><SEOText>SEO roadmap (months 2-6)</SEOText></span>
                                    </li>
                                </ul>
                            </div>

                            {/* Column 2 */}
                            <div className="flex-1 bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col">
                                <div className="text-center mb-6 pb-6 border-b border-dotted border-gray-300 dark:border-gray-700">
                                    <div className="flex justify-center items-center gap-2">
                                        <span className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-[Oswald]">$750</span>
                                        <span className="text-sm font-bold text-gray-800 dark:text-gray-300">/ Month</span>
                                    </div>
                                    <div className="text-sm text-gray-500 mt-2 font-[Roboto]">(Month 2+)</div>
                                </div>
                                <ul className="space-y-4 text-[15px] text-gray-600 dark:text-gray-400 font-[Roboto] flex-grow">
                                    <li className="flex items-center pb-4 border-b border-dotted border-gray-200 dark:border-gray-800">
                                        <i className="fas fa-check-circle text-[#2d7a36] dark:text-[#facc15] mr-4 text-lg"></i>
                                        <span>2 monthly blog posts (~1000 words)</span>
                                    </li>
                                    <li className="flex items-center pb-4 border-b border-dotted border-gray-200 dark:border-gray-800">
                                        <i className="fas fa-check-circle text-[#2d7a36] dark:text-[#facc15] mr-4 text-lg"></i>
                                        <span>Creation of ~1000 optimized landing pages</span>
                                    </li>
                                    <li className="flex items-center pb-4 border-b border-dotted border-gray-200 dark:border-gray-800">
                                        <i className="fas fa-check-circle text-[#2d7a36] dark:text-[#facc15] mr-4 text-lg"></i>
                                        <span>On-page website optimization</span>
                                    </li>
                                    <li className="flex items-center pb-4 border-b border-dotted border-gray-200 dark:border-gray-800 border-none">
                                        <i className="fas fa-check-circle text-[#2d7a36] dark:text-[#facc15] mr-4 text-lg"></i>
                                        <span>Dedicated account management</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Bottom Get Started Button */}
                        <div className="px-6 md:px-8 pb-8 pt-2">
                            <a href="/get-started" className="w-full bg-[#143d1f] text-white py-4 rounded-xl font-[Oswald] font-bold text-lg uppercase tracking-widest hover:bg-[#1f562e] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3 decoration-none">
                                Get Started <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 relative overflow-hidden">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16 relative">
                        <div className="absolute inset-0 flex items-center justify-center opacity-5 dark:opacity-10 pointer-events-none -mt-4">
                            <span className="text-6xl md:text-9xl font-[Oswald] font-bold uppercase text-gray-500 tracking-tighter whitespace-nowrap">
                                FAQ
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-[Oswald] font-bold uppercase text-[#143d1f] dark:text-white relative z-10 tracking-tight">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {faqs.map((faq, index) => {
                            const isOpen = openFaqIndex === index;

                            return (
                                <div key={index} className="flex flex-col rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 transition-all h-fit">
                                    {/* Question Button */}
                                    <div
                                        className={`bg-white dark:bg-gray-800 p-6 flex justify-between items-center cursor-pointer hover:shadow-md transition-all group ${isOpen ? '' : 'hover:border-[#facc15]'}`}
                                        onClick={() => toggleFaq(index)}
                                    >
                                        <span className="font-[Oswald] font-bold text-base uppercase text-gray-800 dark:text-gray-200 tracking-wide pr-4">
                                            {faq.question}
                                        </span>
                                        <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center transition-colors shadow-sm ${isOpen ? 'bg-[#143d1f] text-white' : 'bg-[#143d1f] text-white group-hover:text-[#facc15]'}`}>
                                            <i className={`fas fa-chevron-down transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
                                        </div>
                                    </div>

                                    {/* Answer Dropdown Panel */}
                                    <div
                                        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                                    >
                                        <div className="overflow-hidden bg-[#143d1f] text-white">
                                            <div className="p-6 font-[Roboto] text-[15px] leading-relaxed tracking-wide shadow-inner">
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="bg-[#143d1f] py-24 px-4 relative overflow-hidden">
                {/* Texture Map Overlay */}
                <div
                    className="absolute inset-0 opacity-[0.45] pointer-events-none"
                    style={{
                        backgroundImage: "url('/images/Texture.png')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                ></div>

                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-[#1f562e] rounded-full blur-3xl opacity-50 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-[#1f562e] rounded-full blur-3xl opacity-50 pointer-events-none"></div>

                <div className="max-w-5xl mx-auto text-center relative z-10 text-white">
                    <h2 className="text-[24px] md:text-[39px] lg:text-[45px] font-[Oswald] font-bold uppercase leading-tight mb-6 tracking-normal">
                        &quot;GROW YOUR BUSINESS&quot; &amp; &quot;GAIN VISIBILITY&quot;<br />
                        <span className="text-[#facc15] mt-1 inline-block">WITH LEMONADE IDEAS!</span>
                    </h2>

                    {/* Hand-drawn yellow underline SVG graphic */}
                    <div className="flex justify-center mb-10 w-full">
                        <img src="/images/layer-1.png" alt="underline" className="h-4 object-contain opacity-90" />
                    </div>

                    <p className="mb-14 text-white text-[15px] md:text-[17px] lg:text-[18px] max-w-4xl mx-auto font-[Arial] leading-[1.8]">
                        <SEOText>Along with SEO, Lemonade Ideas drives real results through pay-per-click<br className="hidden md:block" /> advertising and website development. Contact us to discover what could benefit<br className="hidden md:block" /> your business the most.</SEOText>
                    </p>

                    <a
                        href="https://calendly.com/lemonadeideas-consultation/30min?month=2026-03" target="_blank" rel="noopener noreferrer"
                        className="bg-[#facc15] text-[#143d1f] font-[Oswald] font-bold uppercase px-6 py-4 rounded-xl shadow-[0_0_30px_rgba(250,204,21,0.2)] hover:bg-white hover:text-[#143d1f] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-300 transform hover:-translate-y-1 inline-flex flex-row items-center mx-auto tracking-wide group gap-5"
                    >
                        <img src="/images/icon-call.svg" alt="Phone Outline Icon" className="w-[50px] h-[50px] object-contain shrink-0" />
                        <div className="flex flex-col items-start pr-4 pt-1">
                            <span className="text-[11px] mb-[2px] tracking-[0.15em] opacity-80 group-hover:opacity-100 font-sans font-semibold">SPEAK WITH OUR EXPERT</span>
                            <span className="text-[26px] leading-none tracking-normal">SCHEDULE A CALL</span>
                        </div>
                    </a>
                </div>
            </section>

            {/* Script tag injection for Font Awesome */}
            <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js" defer></script>
        </div>
    );
}
