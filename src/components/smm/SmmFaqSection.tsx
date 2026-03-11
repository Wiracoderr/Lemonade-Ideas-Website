"use client";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-blue-50/30 font-sans" data-purpose="faq">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 relative">
                    <h2 className="text-6xl md:text-8xl font-black text-gray-100 uppercase select-none leading-none">FAQ</h2>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-[#0d2a1a] uppercase absolute inset-0 flex items-center justify-center">Frequently Asked Questions</h3>
                </div>
                <div className="max-w-4xl mx-auto space-y-4">
                    {/* FAQ Items */}
                    {faqs.map((faq, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden transition-all duration-300"
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full p-6 flex items-center justify-between text-left focus:outline-none"
                            >
                                <span className="font-bold text-sm md:text-base uppercase text-gray-800 tracking-wide pr-8">
                                    {faq.question}
                                </span>
                                <span className={`flex-shrink-0 bg-[#34a853] text-white w-8 h-8 flex items-center justify-center rounded-full transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    <ChevronDown size={16} strokeWidth={3} />
                                </span>
                            </button>
                            <div 
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="p-6 pt-0 text-gray-600 font-medium leading-relaxed text-[15px] border-t border-gray-50 mt-2">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
