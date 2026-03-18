"use client";

import React, { useState } from "react";
import { ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function FaqSection({ faqs }: { faqs: { question: string, answer: string }[] }) {
    const t = useTranslations("SEO");
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <section className="py-20 px-4 relative overflow-hidden border-t border-gray-100 dark:border-gray-700">
            {/* Background color and texture to match SEO Timeline */}
            <div className="absolute inset-0 bg-[#eff8fa] dark:bg-gray-900 z-0"></div>
            <div className="absolute inset-0 opacity-40 z-0 mix-blend-multiply dark:mix-blend-screen bg-[url(/images/layer-1.png)] bg-[length:45%_100%] bg-left bg-no-repeat"></div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-16 relative">
                    <div className="absolute inset-0 flex items-center justify-center opacity-5 dark:opacity-10 pointer-events-none -mt-4">
                        <span className="text-6xl md:text-9xl font-[Oswald] font-bold uppercase text-gray-500 tracking-tighter whitespace-nowrap">
                            {t('seo_faq_wm')}
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-[Oswald] font-bold uppercase text-[#1E3A1A] dark:text-white relative z-10 tracking-tight">
                        {t('seo_faq_title')}
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {faqs.map((faq, index) => {
                        const isOpen = openFaqIndex === index;

                        return (
                            <div key={index} className="flex flex-col rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 transition-all h-fit">
                                {/* Question Button */}
                                <div
                                    className={`bg-white dark:bg-gray-800 p-6 flex justify-between items-center cursor-pointer hover:shadow-md transition-all group ${isOpen ? '' : 'hover:border-[#FED52B]'}`}
                                    onClick={() => toggleFaq(index)}
                                >
                                    <span className="font-[Oswald] font-bold text-base uppercase text-gray-800 dark:text-gray-200 tracking-wide pr-4">
                                        {faq.question}
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
