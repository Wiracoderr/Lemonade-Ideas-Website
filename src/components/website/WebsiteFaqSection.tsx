"use client";
import { useState } from 'react';

export default function WebsiteFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How much do your services cost?",
      answer: "Our website design packages start at $3500. We offer a transparent pricing structure based on your specific requirements and the complexity of the project."
    },
    {
      question: "What makes you different than other companies?",
      answer: "We focus on building completely custom, high-performing websites without relying on slow, generic templates. Our designs are sales-driven, built specifically to convert visitors into warm leads."
    },
    {
      question: "How fast can you get me on page 1 of Google?",
      answer: "While we build all our websites with SEO best practices from the start, ranking on Page 1 depends on your industry's competitiveness. We offer dedicated SEO services to help accelerate that process."
    },
    {
      question: "Do you provide a free consultation?",
      answer: "Yes! We offer a free 30-minute discovery call where we'll evaluate your current online presence and discuss exactly how a new website can impact your business growth."
    },
    {
      question: "Do you offer performance-based marketing services?",
      answer: "Yes, once your website is launched, we can discuss our digital marketing and advertising strategies designed to drive traffic and maximize your return on investment."
    },
    {
      question: "Do you require long-term contracts?",
      answer: "No. Our website build is a one-time project fee. While we offer monthly maintenance and hosting packages starting at $30/mo, they are operated on a month-to-month basis without long-term lock-ins."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center mb-12 uppercase tracking-widest text-[#1e3a1a]">
          Frequently Asked Questions
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* Left Column (First 3 FAQs) */}
          <div className="space-y-4">
            {faqs.slice(0, 3).map((faq, index) => {
              const globalIndex = index;
              const isOpen = openIndex === globalIndex;
              return (
                <div 
                  key={globalIndex} 
                  className={`border border-gray-200 rounded overflow-hidden transition-colors ${isOpen ? 'border-[#8DBF43]' : 'hover:border-[#8DBF43]'}`}
                >
                  <button 
                    onClick={() => handleToggle(globalIndex)}
                    className="w-full text-left p-4 flex justify-between items-center group cursor-pointer bg-white"
                  >
                    <span className="text-xs font-bold uppercase tracking-wide text-gray-800 pr-4 leading-relaxed">
                      {faq.question}
                    </span>
                    <span className={`text-[#8DBF43] transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-90' : ''}`}>
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <div className="p-4 pt-0 text-sm text-gray-600 border-t border-gray-100 leading-relaxed bg-gray-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column (Last 3 FAQs) */}
          <div className="space-y-4">
            {faqs.slice(3, 6).map((faq, index) => {
              const globalIndex = index + 3;
              const isOpen = openIndex === globalIndex;
              return (
                <div 
                  key={globalIndex} 
                  className={`border border-gray-200 rounded overflow-hidden transition-colors ${isOpen ? 'border-[#8DBF43]' : 'hover:border-[#8DBF43]'}`}
                >
                  <button 
                    onClick={() => handleToggle(globalIndex)}
                    className="w-full text-left p-4 flex justify-between items-center group cursor-pointer bg-white"
                  >
                    <span className="text-xs font-bold uppercase tracking-wide text-gray-800 pr-4 leading-relaxed">
                      {faq.question}
                    </span>
                    <span className={`text-[#8DBF43] transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-90' : ''}`}>
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <div className="p-4 pt-0 text-sm text-gray-600 border-t border-gray-100 leading-relaxed bg-gray-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
