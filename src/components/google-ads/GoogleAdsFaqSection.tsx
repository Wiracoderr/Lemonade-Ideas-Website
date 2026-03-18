"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';

const faqs = [
    {
        question: "How much do your services cost?",
        answer: "Our pricing varies based on the scope of the project and the services required. We offer competitive rates and customized packages to fit your specific needs and budget. For a detailed quote, please reach out to us directly."
    },
    {
        question: "Do you provide a free consultation?",
        answer: "Yes, we offer a complimentary initial consultation to understand your business goals, discuss potential strategies, and see how our services can best support your success."
    },
    {
        question: "What makes you different than other companies?",
        answer: "We differentiate ourselves through our commitment to transparency, data-driven strategies, and personalized service. We don't believe in one-size-fits-all solutions; instead, we tailor our approach to each client's unique objectives."
    },
    {
        question: "Do you offer performance-based marketing services?",
        answer: "While we focus on delivering measurable results, our pricing models are typically retainer or project-based rather than strictly performance-based. This allows us to dedicate the necessary resources to ensure long-term success."
    },
    {
        question: "How fast can you get me on page 1 of Google?",
        answer: "SEO is a long-term strategy, and there are no guaranteed timelines for reaching page 1. However, with our proven techniques, clients typically start seeing significant improvements in rankings and traffic within 3 to 6 months."
    },
    {
        question: "Do you require long-term contracts?",
        answer: "No, we do not require long-term contracts. We operate on a month-to-month basis because we believe our results should earn your continued business, not a legal obligation."
    }
];

export default function GoogleAdsFaqSection() {
    const t = useTranslations('GoogleAds');
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 px-4 relative overflow-hidden border-t border-gray-100 dark:border-gray-700">
            {/* Background color and texture to match SEO Timeline */}
            <div className="absolute inset-0 bg-[#eff8fa] dark:bg-gray-900 z-0"></div>
            <div className="absolute inset-0 opacity-40 z-0 mix-blend-multiply dark:mix-blend-screen bg-[url(/images/layer-1.png)] bg-[length:45%_100%] bg-left bg-no-repeat"></div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="relative text-center mb-16">
                    <span className="text-[100px] md:text-[140px] font-black uppercase text-gray-100 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 select-none pointer-events-none drop-shadow-sm z-0 w-full tracking-widest font-sans opacity-60">
                        {t('faq_watermark')}
                    </span>
                    <h2 className="relative z-10 text-3xl md:text-4xl font-black uppercase text-[#1E3A1A] flex items-center justify-center gap-4 font-sans tracking-tight">
                        <span className="w-12 h-1 bg-[#3AAB43] hidden md:block"></span>
                        {t('faq_title')}
                        <span className="w-12 h-1 bg-[#3AAB43] hidden md:block"></span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div key={index} className="flex flex-col rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 transition-all h-fit">
                                {/* Question Button */}
                                <div
                                    className={`bg-white dark:bg-gray-800 p-6 flex justify-between items-center cursor-pointer hover:shadow-md transition-all group ${isOpen ? '' : 'hover:border-[#FED52B]'}`}
                                    onClick={() => toggleFaq(index)}
                                >
                                    <span className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-[#3AAB43] transition-colors pr-8 font-[Oswald] uppercase tracking-wide">
                                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                        {t(`faq${index + 1}_q` as any) || faq.question}
                                    </span>
                                    <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center transition-colors shadow-sm ${isOpen ? 'bg-[#1E3A1A] text-white' : 'bg-[#1E3A1A] text-white group-hover:text-[#FED52B]'}`}>
                                        <ChevronDown size={18} strokeWidth={2.5} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                                    </div>
                                </div>

                                {/* Answer Dropdown Panel */}
                                <div
                                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                                >
                                    <div className="overflow-hidden bg-[#1E3A1A] text-white">
                                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                        <p className="p-6 font-[Roboto] text-[15px] leading-relaxed tracking-wide shadow-inner" dangerouslySetInnerHTML={{ __html: t.raw(`faq${index + 1}_a` as any) || faq.answer }}></p>
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
