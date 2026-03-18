import React from 'react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

const HostingArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#1E3A1A] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <path d="M8 9l5 5-5 5" />
        <path d="M14 17h2" />
    </svg>
);

const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#1E3A1A] shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

export default function HostingPricingSection() {
    const t = useTranslations('Hosting');

    const hostingPlans = [
        {
            title: t('plan1_title'),
            description: t('plan1_desc'),
            features: [
                { title: t('plan1_f1_title'), desc: t('plan1_f1_desc') },
                { title: t('plan1_f2_title'), desc: t('plan1_f2_desc') },
                { title: t('plan1_f3_title'), desc: t('plan1_f3_desc') },
                { title: t('plan1_f4_title'), desc: t('plan1_f4_desc') },
                { title: t('plan1_f5_title'), desc: t('plan1_f5_desc') },
                { title: t('plan1_f6_title'), desc: t('plan1_f6_desc') }
            ],
            price: "30",
            ctaLabel: t('btn_contact'),
            ctaLink: "/contact"
        },
        {
            title: t('plan2_title'),
            description: t('plan2_desc'),
            features: [
                { title: t('plan2_f1_title'), desc: t('plan2_f1_desc') },
                { title: t('plan2_f2_title'), desc: t('plan2_f2_desc') },
                { title: t('plan2_f3_title'), desc: t('plan2_f3_desc') },
                { title: t('plan2_f4_title'), desc: t('plan2_f4_desc') },
                { title: t('plan2_f5_title'), desc: t('plan2_f5_desc') },
                { title: t('plan2_f6_title'), desc: t('plan2_f6_desc') }
            ],
            price: "125",
            ctaLabel: t('btn_contact'),
            ctaLink: "/contact",
            footerText: t('plan2_footer')
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background "HOSTING" text watermark */}
            <div className="absolute top-0 left-0 w-full flex justify-center pointer-events-none select-none overflow-hidden z-0">
                <span className="text-[130px] md:text-[200px] lg:text-[280px] font-black text-[#f8f9fa] opacity-80 whitespace-nowrap leading-none font-display tracking-tight -mt-4 md:-mt-10">
                    {t('watermark')}
                </span>
            </div>

            <div className="container mx-auto px-4 max-w-5xl relative z-10">
                <div className="flex flex-col gap-16 lg:gap-24">
                    {hostingPlans.map((plan, index) => (
                        <div key={index} className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
                            
                            {/* Left Content Area */}
                            <div className="flex-1 w-full pt-4">
                                <div className="flex flex-row items-center gap-4 mb-6">
                                    <div className="border-2 border-[#1E3A1A] rounded-md p-2 hover:bg-gray-50 transition-colors shrink-0">
                                        <HostingArrowIcon />
                                    </div>
                                    <h3 className="text-[28px] sm:text-[34px] font-black text-[#1E3A1A] font-display uppercase tracking-tight leading-[1.1]">{plan.title}</h3>
                                </div>
                                <p className="text-gray-700 text-[13px] leading-relaxed mb-8 max-w-2xl">
                                    {plan.description}
                                </p>
                                
                                <h4 className="font-bold text-[#1E3A1A] mb-5 text-[15px]">{t('included')}</h4>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-6 text-[12px] text-gray-700">
                                    {plan.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-start gap-3">
                                            <div className="mt-[1px]"><CheckCircleIcon /></div>
                                            <span className="leading-tight">
                                                <span className="font-bold text-gray-900">{feature.title}</span>
                                                {feature.desc}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                
                                {plan.footerText && (
                                    <p className="mt-8 text-[11px] font-bold text-gray-900 leading-relaxed max-w-2xl">
                                        {plan.footerText}
                                    </p>
                                )}
                            </div>

                            {/* Right Dark Green Card Area */}
                            <div className="w-full lg:w-[340px] bg-[#163020] rounded-2xl p-10 flex flex-col justify-center items-center text-center shadow-2xl relative overflow-hidden shrink-0 lg:h-[400px]">
                                {/* Subtle diamond pattern background */}
                                <div className="absolute inset-0 opacity-[0.04]" style={{
                                    backgroundImage: `linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)`,
                                    backgroundSize: '20px 20px',
                                    backgroundPosition: '0 0, 10px 10px'
                                }}></div>
                                
                                <div className="relative z-10 w-full flex flex-col items-center justify-center gap-6">
                                    <div className="space-y-1">
                                        <p className="text-white text-[11px] font-bold uppercase tracking-[0.15em] mb-2">{t('low_price')}</p>
                                        <div className="flex items-baseline justify-center gap-[2px]">
                                            <span className="text-white text-[70px] leading-none font-black font-display tracking-tighter">${plan.price}</span>
                                            <span className="text-white text-[22px] font-bold font-display tracking-tight">{t('mo')}</span>
                                        </div>
                                    </div>
                                    
                                    <Link href={plan.ctaLink} className="mt-4 block w-full bg-[#fecd35] hover:bg-[#eab92d] text-[#1E3A1A] font-black py-3.5 px-6 text-[12px] uppercase tracking-wider transition rounded shadow-sm text-center">
                                        {plan.ctaLabel}
                                    </Link>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
