import React from 'react';
import Image from 'next/image';

export default function SmmTimelineSection() {
    return (
        <section className="py-20 bg-blue-50/50 font-sans" data-purpose="timeline">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
                    {/* Left Side: Images Stack */}
                    <div className="space-y-6">
                        <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden shadow-lg">
                            <Image 
                                src="/images/smm-timeline-1.webp" 
                                alt="Building phase" 
                                fill 
                                className="object-cover" 
                                sizes="(max-width: 768px) 100vw, 50vw" 
                            />
                        </div>
                        <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden shadow-lg hidden md:block">
                            <Image 
                                src="/images/smm-timeline-2.webp" 
                                alt="Content phase" 
                                fill 
                                className="object-cover" 
                                sizes="50vw" 
                            />
                        </div>
                        <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden shadow-lg hidden md:block">
                            <Image 
                                src="/images/smm-timeline-3.webp" 
                                alt="Scaling phase" 
                                fill 
                                className="object-cover" 
                                sizes="50vw" 
                            />
                        </div>
                    </div>
                    
                    {/* Right Side: Content */}
                    <div className="space-y-8 flex flex-col justify-start">
                        {/* Heading & Intro */}
                        <div className="pl-6 border-l-8 border-[#0a2e15] mb-6">
                            <h2 className="text-[28px] lg:text-[32px] font-black text-[#0d2a1a] uppercase leading-[1.1]">
                                The Social Media Management Timeline
                            </h2>
                            <p className="text-[15px] text-gray-700 mt-4 font-medium leading-[1.5]">
                                We&apos;ve carefully crafted a timeline to set your social media strategy up for long-term success. We will keep you fully involved throughout the process.
                            </p>
                        </div>
                        
                        <div className="space-y-10 pl-2">
                            <div>
                                <h3 className="font-black text-[#0d2a1a] uppercase text-lg mb-2">Build - Month 1</h3>
                                <p className="text-[15px] font-medium text-gray-600 leading-[1.6]">We establish a strong foundation for your social media presence—setting up profiles, creating content calendars, identifying target audiences, and designing posts tailored to your brand.</p>
                                <p className="text-[12px] font-bold text-gray-500 mt-3 tracking-wide uppercase">30-Day Check-in: Review initial engagement and growth metrics with your Account Manager.</p>
                            </div>
                            <div>
                                <h3 className="font-black text-[#0d2a1a] uppercase text-lg mb-2">Learn - Month 2</h3>
                                <p className="text-[15px] font-medium text-gray-600 leading-[1.6]">Your social media campaigns go live, and we analyze performance—refining content strategies, adjusting posting schedules, and improving audience targeting to increase engagement and reach.</p>
                                <p className="text-[12px] font-bold text-gray-500 mt-3 tracking-wide uppercase">60-Day Check-in: Discuss performance updates and insights with your Account Manager.</p>
                            </div>
                            <div>
                                <h3 className="font-black text-[#0d2a1a] uppercase text-lg mb-2">Optimize - Month 3</h3>
                                <p className="text-[15px] font-medium text-gray-600 leading-[1.6]">We fine-tune strategies by focusing on top-performing posts, experimenting with new content formats, and improving ad performance (if applicable). By the end of month 3, you&apos;ll see measurable increases in engagement and audience growth.</p>
                                <p className="text-[12px] font-bold text-gray-500 mt-3 tracking-wide uppercase">90-Day Check-in: Assess progress and determine next steps to achieve your goals.</p>
                            </div>
                            <div>
                                <h3 className="font-black text-[#0d2a1a] uppercase text-lg mb-2">Manage &amp; Scale - Month 4+</h3>
                                <p className="text-[15px] font-medium text-gray-600 leading-[1.6]">We continue optimizing your strategy to boost your ROI and scale your online presence further.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

