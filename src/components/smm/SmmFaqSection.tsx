"use client";
import React, { useState } from 'react';

const faqs = [
    {
        question: "Why should my business invest in social media management?",
        answer: "Social media management is crucial because it builds brand awareness, engages your local community, and drives targeted traffic to your funnel. It acts as digital word-of-mouth that establishes trust before a customer even contacts you."
    },
    {
        question: "How will I know if my social media strategy is working?",
        answer: "We provide comprehensive reporting that tracks key performance indicators (KPIs) such as reach, engagement rate, follower growth, and most importantly, website clicks and lead conversions."
    },
    {
        question: "How long does it take to see results from social media management?",
        answer: "While engagement and reach can improve within the first month, organic social media is a long-term play. Meaningful lead generation and consistent ROI typically take 3 to 6 months of sustained strategy and community building."
    },
    {
        question: "What does my monthly fee cover?",
        answer: "Your monthly fee covers strategy development, content creation (graphics and copywriting), strategic hashtags, post scheduling, community engagement (replying to comments/messages), and a monthly performance review."
    },
    {
        question: "How do you determine the social media ad budget?",
        answer: "Your ad budget is determined collaboratively based on your specific goals, the platforms we're targeting, your geographic radius, and the competitiveness of your industry. We typically recommend starting with a scalable baseline and increasing as we prove ROI."
    },
    {
        question: "Do you provide reporting?",
        answer: "Yes, depending on your selected tier, you will receive bi-weekly or monthly reports detailing exactly how your accounts are growing, what content resonates best, and transparent analytics on your return on investment."
    }
];

export default function SmmFaqSection() {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <section className="py-20 px-4 relative overflow-hidden border-t border-gray-100 dark:border-gray-700" data-purpose="faq">
            {/* Background color and texture to match SEO Timeline */}
            <div className="absolute inset-0 bg-[#eff8fa] dark:bg-gray-900 z-0"></div>
            <div className="absolute inset-0 opacity-40 z-0 mix-blend-multiply dark:mix-blend-screen bg-[url(/images/layer-1.png)] bg-[length:45%_100%] bg-left bg-no-repeat"></div>

            <div className="max-w-4xl mx-auto relative z-10">
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
    );
}
