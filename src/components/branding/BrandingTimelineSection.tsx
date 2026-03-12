import React from 'react';
import Image from 'next/image';

export default function BrandingTimelineSection() {
    return (
        <section className="bg-[#eef8fd] py-20 px-5 font-sans">
            <div className="mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left Side: Images Stack */}
                    <div className="order-2 lg:order-1 flex flex-col gap-6">
                        {/* Desktop Image 1 */}
                        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg hidden md:block">
                            <Image
                                src="/images/branding-timeline-1.webp"
                                alt="Branding Idea Trust"
                                fill
                                className="object-cover"
                                sizes="(min-width: 1024px) 50vw, 100vw"
                                unoptimized={true}
                            />
                        </div>
                        {/* Mobile Image 1 */}
                        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg block md:hidden">
                            <Image
                                src="/images/branding-timeline-1-mobile.webp"
                                alt="Branding Idea Trust Mobile"
                                fill
                                className="object-cover"
                                sizes="100vw"
                            />
                        </div>
                        {/* Desktop Image 2 */}
                        <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden shadow-lg hidden md:block">
                            <Image
                                src="/images/branding-timeline-2.webp"
                                alt="Brand Marketing Technology"
                                fill
                                className="object-cover"
                                sizes="(min-width: 1024px) 50vw, 100vw"
                                unoptimized={true}
                            />
                        </div>
                        {/* Mobile Image 2 */}
                        <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden shadow-lg block md:hidden">
                            <Image
                                src="/images/branding-timeline-2-mobile.webp"
                                alt="Brand Marketing Technology Mobile"
                                fill
                                className="object-cover"
                                sizes="100vw"
                            />
                        </div>
                        {/* Desktop Image 3 */}
                        <div className="relative w-full aspect-square md:aspect-[4/3] rounded-xl overflow-hidden shadow-lg hidden md:block">
                            <Image
                                src="/images/branding-timeline-3.webp"
                                alt="Brand Concept Tree"
                                fill
                                className="object-cover"
                                sizes="(min-width: 1024px) 50vw, 100vw"
                                unoptimized={true}
                            />
                        </div>
                        {/* Mobile Image 3 */}
                        <div className="relative w-full aspect-square md:aspect-[4/3] rounded-xl overflow-hidden shadow-lg block md:hidden">
                            <Image
                                src="/images/branding-timeline-3-mobile.webp"
                                alt="Brand Concept Tree Mobile"
                                fill
                                className="object-cover"
                                sizes="100vw"
                            />
                        </div>
                    </div>

                    {/* Right Side: Text Content */}
                    <div className="order-1 lg:order-2">
                        <div className="border-l-4 border-[#38b04d] pl-6 mb-8">
                            <h2 className="text-3xl font-black uppercase text-[#0a2e15] font-[Oswald]">THE BRANDING & STRATEGY TIMELINE</h2>
                        </div>
                        <div className="space-y-6 lg:space-y-8 pl-0 lg:pl-2">
                            <p className="text-[14px] md:text-[15px] text-gray-700 mb-6 leading-relaxed">
                                We&apos;ve developed a streamlined timeline to help your brand grow and succeed across all platforms. The first 90 days are crucial for establishing a solid foundation, building momentum, and setting the stage for long-term success. Here&apos;s how we make it happen:
                            </p>

                            <div className="relative">
                                <h3 className="font-bold text-[#0a2e15] font-[Oswald] uppercase text-[16px] md:text-[18px] mb-2 tracking-wide">BUILD - MONTH 1</h3>
                                <p className="text-[14px] text-gray-700 leading-relaxed mb-3">
                                    We establish the core elements of your branding and strategy to create a cohesive identity that resonates with your audience.
                                </p>
                                <ul className="list-disc list-inside text-[13px] text-gray-700 space-y-2 mb-3 ml-2">
                                    <li>Define your brand voice, messaging, and core values.</li>
                                    <li>Create visuals and content that reflect your brand identity.</li>
                                    <li>Develop a tailored strategy for audience targeting and engagement.</li>
                                    <li>Set up tracking systems to monitor performance and progress.</li>
                                </ul>
                                <p className="text-[13px] text-gray-500 italic mt-2">30-Day Check-In: Review initial progress and brand alignment with your Account Manager.</p>
                            </div>

                            <div className="relative">
                                <h3 className="font-bold text-[#0a2e15] font-[Oswald] uppercase text-[16px] md:text-[18px] mb-2 tracking-wide">LEARN - MONTH 2</h3>
                                <p className="text-[14px] text-gray-700 leading-relaxed mb-3">
                                    With the strategy in action, we analyze performance to refine and improve.
                                </p>
                                <ul className="list-disc list-inside text-[13px] text-gray-700 space-y-2 mb-3 ml-2">
                                    <li>Identify which aspects of your branding and strategy resonate most with your audience.</li>
                                    <li>Optimize content delivery, scheduling, and formats for better engagement.</li>
                                    <li>Make adjustments to ensure alignment with your brand goals and objectives.</li>
                                </ul>
                                <p className="text-[13px] text-gray-500 italic mt-2">60-Day Check-In: Discuss insights, performance trends, and make strategic updates with your Account Manager.</p>
                            </div>

                            <div className="relative">
                                <h3 className="font-bold text-[#0a2e15] font-[Oswald] uppercase text-[16px] md:text-[18px] mb-2 tracking-wide">OPTIMIZE - MONTH 3</h3>
                                <p className="text-[14px] text-gray-700 leading-relaxed mb-3">
                                    We fine-tune your branding and strategy to maximize its impact and effectiveness.
                                </p>
                                <ul className="list-disc list-inside text-[13px] text-gray-700 space-y-2 mb-3 ml-2">
                                    <li>Focus on high-performing elements and build upon successful themes.</li>
                                    <li>Test creative approaches to elevate your brand presence.</li>
                                    <li>Further align visuals and messaging with your brand&apos;s unique identity and goals.</li>
                                </ul>
                                <p className="text-[13px] text-gray-500 italic mt-2">90-Day Check-In: Evaluate progress and map out a long-term branding and strategy plan.</p>
                            </div>

                            <div className="relative">
                                <h3 className="font-bold text-[#0a2e15] font-[Oswald] uppercase text-[16px] md:text-[18px] mb-2 tracking-wide">MANAGE & SCALE - MONTH 4+</h3>
                                <p className="text-[14px] text-gray-700 leading-relaxed mb-3">
                                    As your brand gains momentum, we scale your strategy for greater reach.
                                </p>
                                <ul className="list-disc list-inside text-[13px] text-gray-700 space-y-2 mb-4 ml-2">
                                    <li>Expand your audience and explore new branding opportunities.</li>
                                    <li>Maintain consistent engagement with top-quality content and campaigns.</li>
                                    <li>Continuously refine and optimize your branding efforts to support long-term growth.</li>
                                </ul>
                                <p className="text-[14px] text-gray-700 leading-relaxed mt-4">
                                    With our tailored approach, we don&apos;t just manage your brand; we elevate it. Our focus is on creating a strategy that drives results, fosters lasting success, and strengthens your business&apos;s presence in the market.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
