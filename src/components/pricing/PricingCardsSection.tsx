import React from 'react';
import Link from 'next/link';

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#1e3a29] shrink-0" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

const SeoLaptopIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#1e3a29] shrink-0 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="12" rx="1" ry="1"></rect>
      <path d="M2 20h20"></path>
       <rect x="4" y="5" width="16" height="10" fill="none" stroke="none"></rect>
      <text x="12" y="11" dominantBaseline="middle" textAnchor="middle" fontSize="5px" fontWeight="900" stroke="none" fill="#1e3a29" style={{fontFamily: 'sans-serif'}}>SEO</text>
      <line x1="8" y1="14" x2="16" y2="14" strokeWidth="1.5"></line>
  </svg>
);

const GoogleAdsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#1e3a29] shrink-0 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path>
        <path d="M5.8 15.2 2 13h4.6M14 10l-2 2M21 7l-2-2-9 9 2 2z"></path>
        <rect x="4" y="6" width="6" height="5" transform="rotate(-45 7 8.5)" stroke="currentColor" fill="none"></rect>
        <text x="6" y="8.5" transform="rotate(-45 6 8.5)" dominantBaseline="middle" textAnchor="middle" fontSize="3.5px" fontWeight="900" stroke="none" fill="#1e3a29" style={{fontFamily: 'sans-serif'}}>AD</text>
        <path d="M22 2 11 13"></path>
    </svg>
);

const WebsiteDesignIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 text-[#1e3a29] shrink-0 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        {/* Desktop Monitor */}
        <rect x="2" y="3" width="16" height="11" rx="1" ry="1"></rect>
        <line x1="6" y1="14" x2="14" y2="14"></line>
        <line x1="10" y1="18" x2="10" y2="14"></line>
        <line x1="7" y1="18" x2="13" y2="18"></line>
        {/* Layout lines in desktop */}
        <line x1="4" y1="5" x2="16" y2="5" strokeWidth="1"></line>
        <line x1="4" y1="7" x2="8" y2="7" strokeWidth="1"></line>
        <line x1="4" y1="9" x2="13" y2="9" strokeWidth="1"></line>
        {/* Mobile Phone */}
        <rect x="15" y="8" width="5" height="10" rx="1" ry="1" fill="#fff" stroke="currentColor"></rect>
        {/* Layout lines in phone */}
        <line x1="16" y1="10" x2="19" y2="10" strokeWidth="1"></line>
        <line x1="16" y1="12" x2="19" y2="12" strokeWidth="1"></line>
        <line x1="16" y1="14" x2="19" y2="14" strokeWidth="1"></line>
    </svg>
);

const SocialMediaIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#1e3a29] shrink-0 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        {/* Weibo-like / network icon structure */}
         <path d="M12 21c-4.4 0-8-3.6-8-8 0-4.4 3.6-8 8-8s8 3.6 8 8c0 1.2-.3 2.3-.8 3.3"></path>
         <path d="M9 14.5c.8.3 1.8.5 2.8.5 2.8 0 5-2.2 5-5s-2.2-5-5-5c-2.8 0-5 2.2-5 5 0 1 .3 2 .8 2.8"></path>
         <circle cx="12" cy="10" r="1.5" fill="currentColor"></circle>
         {/* WiFi like signals on top right */}
         <path d="M18 5c1 .9 1.6 2.2 1.6 3.5"></path>
         <path d="M20 3c1.6 1.4 2.5 3.5 2.5 5.7"></path>
    </svg>
);

const BrandingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 text-[#1e3a29] shrink-0 fill-none stroke-current stroke-1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" strokeWidth="2"></circle>
        <circle cx="12" cy="12" r="7.5" fill="none" strokeWidth="0.5"></circle>
        {/* Gear / Emblem notches */}
        <path d="M12 2v2"></path>
        <path d="M12 20v2"></path>
        <path d="M2 12h2"></path>
        <path d="M20 12h2"></path>
        <path d="M4.9 4.9l1.4 1.4"></path>
        <path d="M17.7 17.7l1.4 1.4"></path>
        <path d="M4.9 19.1l1.4-1.4"></path>
        <path d="M17.7 4.9l-1.4 1.4"></path>
        
        {/* Inner geometric star/spokes */}
        <path d="M12 5v14" strokeWidth="1.5"></path>
        <path d="M5 12h14" strokeWidth="1.5"></path>
        <circle cx="12" cy="12" r="3.5" fill="#1e3a29" stroke="none"></circle>
        <circle cx="12" cy="12" r="1.5" fill="#fff" stroke="none"></circle>
    </svg>
);


const pricingPlans = [
    {
        title: "SEO CHAT - GPT",
        icon: <SeoLaptopIcon />,
        description: "Dominate AI-powered search results with our GEO SEO Service — built to boost visibility across every local market. We optimize for hundreds of geo-specific keywords so your business appears on top when customers search through Google or AI-driven engines. With our performance-based model, you only pay for proven results. Get top rankings fast and grow your presence city by city.",
        features: [
            "AI-optimized local GEO landing experiences",
            "AI and Google local rank tracking",
            "Dedicated AI GEO search strategist",
            "Works for any industry and business size"
        ],
        fees: [
            { label: "STARTUP FEE", amount: "$1750" },
            { label: "MONTHLY FEE", amount: "$450" }
        ],
        ctaPrimary: "GET STARTED",
        ctaSecondary: "CONTACT US"
    },
    {
        title: "SEO PACKAGES",
        icon: <SeoLaptopIcon />,
        description: "Looking for a long-term solution to growing your organic search presence? Look no further. Our SEO packages combine the most important factors in into a single offering to best optimize your business. SEO takes time, so these campaigns run in 6 month cycles to maximize performance.",
        features: [
            "Localized landing pages (from our RankGuarantee™ offering)",
            "Monthly Blogs",
            "On-page SEO",
            "Google Business Profile Managemnet",
            "Local Citations Creation",
            "Dedicated Account Management"
        ],
        fees: [
            { label: "STARTING AT", amount: "$1000" },
            { label: "MONTH 2+", amount: "$750" }
        ],
        ctaPrimary: "GET STARTED",
        ctaSecondary: "CONTACT US"
    },
    {
        title: "GOOGLE ADS MANAGEMENT (PPC)",
        icon: <GoogleAdsIcon />,
        description: "Get calls fast like a water faucet. Let us set up and manage your campaign to make it a success. Search ads, display ads, video ads, retargeting, & more (even Bing Ads!)",
        features: [
            "Campaign creation",
            "Landing page creation",
            "Monthly campaign management",
            "Call and form tracking",
            "Monthly reporting",
            "Dedicated account management"
        ],
        fees: [
            { label: "MONTH 1", amount: "$1000" },
            { label: "MONTH 2+", amount: "$750" }
        ],
        ctaPrimary: "GET STARTED",
        ctaSecondary: "CONTACT US"
    },
    {
        title: "WEBSITE DESIGN/DEVELOPMENT",
        icon: <WebsiteDesignIcon />,
        description: "Whether you have no website or an outdated one, after building and launching 500+ websites, we have the recipe for success when it comes to a modern website.",
        features: [
            "Custom designed mockups",
            "Custom developed on WordPress",
            "Up to 40 hours included (standard hourly rate is $125/hr)",
            "Dedicated project manager",
            "Empowered for successful post-launch management",
            "Includes $500 towards Lemonade Ideas digital marketing services"
        ],
        fees: [
            { label: "STARTING AT", amount: "$3500" }
        ],
        ctaPrimary: "GET INSTANT QUOTE",
        ctaSecondary: "CONTACT US"
    },
    {
        title: "SOCIAL MEDIA MANAGEMENT",
        icon: <SocialMediaIcon />,
        description: "Build a strong online presence and connect with your audience like never before. Our Social Media Management services are designed to enhance engagement, grow your following, and ensure your brand shines across all platforms.",
        features: [
            "Platform-specific content creation (Instagram, Facebook, LinkedIn, etc.)",
            "Social media calendar development",
            "Monthly performance reporting",
            "Audience engagement and community management",
            "Dedicated account manager",
            "Tailored strategies to align with your business goals and drive measurable results"
        ],
        fees: [
            { label: "STARTING AT", amount: "$1000" }
        ],
        ctaPrimary: "GET STARTED",
        ctaSecondary: "CONTACT US"
    },
    {
        title: "BRANDING & STRATEGY",
        icon: <BrandingIcon />,
        description: "Create a powerful and cohesive brand that leaves a lasting impression. Our Branding & Strategy services focus on building a strong identity and delivering a roadmap for your marketing success.",
        features: [
            "Logo design and visual identity creation",
            "Development of brand identity and messaging",
            "Competitor analysis and market research",
            "Comprehensive brand guidelines document",
            "Strategic marketing roadmap",
            "Dedicated brand strategist"
        ],
        fees: [
            { label: "STARTING AT", amount: "$5000" }
        ],
        ctaPrimary: "GET STARTED",
        ctaSecondary: "CONTACT US"
    }
];

export default function PricingCardsSection() {
    return (
        <section className="py-24 bg-[#eaf4f4]">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex flex-col gap-12">
                    {pricingPlans.map((plan, index) => (
                        <div key={index} className="flex flex-col lg:flex-row bg-white rounded-xl overflow-hidden shadow-sm">
                            {/* Left Content */}
                            <div className="flex-1 p-8 lg:p-12">
                                <div className="flex flex-col sm:flex-row items-start gap-6 mb-6">
                                    <div className="mt-1 shrink-0">
                                       {plan.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-3xl sm:text-4xl font-black text-[#1e3a29] font-display uppercase tracking-tight mb-4">{plan.title}</h3>
                                        <p className="text-gray-700 text-sm leading-relaxed">
                                            {plan.description}
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="ml-0 sm:ml-[72px]">
                                    <h4 className="font-bold text-[#1e3a29] mb-4 text-[15px]">What&apos;s Included?</h4>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-[13px] text-gray-700">
                                        {plan.features.map((feature, fIndex) => (
                                            <li key={fIndex} className="flex items-start gap-3">
                                                <div className="mt-[2px]"><CheckIcon /></div>
                                                <span className="leading-tight font-medium text-gray-800">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            
                            {/* Right Pricing Panel */}
                            <div className="w-full lg:w-[320px] bg-[#163a24] relative overflow-hidden flex flex-col justify-center p-12 text-center shrink-0">
                                {/* Diagonal Lines Pattern Background */}
                                <div className="absolute inset-0 z-0 opacity-[0.03]" style={{
                                    backgroundImage: 'repeating-linear-gradient(45deg, #ffffff, #ffffff 1px, transparent 1px, transparent 20px)'
                                }}></div>
                                <div className="absolute inset-0 z-0 opacity-[0.03]" style={{
                                    backgroundImage: 'repeating-linear-gradient(-45deg, #ffffff, #ffffff 1px, transparent 1px, transparent 20px)'
                                }}></div>

                                <div className="relative z-10 w-full flex flex-col items-center justify-center h-full gap-8">
                                    <div className="space-y-8 w-full">
                                        {plan.fees.map((fee, feeIndex) => (
                                            <div key={feeIndex}>
                                                <p className="text-white text-[11px] font-bold uppercase tracking-widest mb-1">{fee.label}</p>
                                                <p className="text-white text-5xl font-black font-display tracking-tight">{fee.amount}</p>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <div className="w-full space-y-4 mt-2">
                                        <Link href="/get-started" className="block w-full bg-[#ffcc33] hover:bg-[#e6b82e] text-[#1e3a29] font-black py-3.5 px-6 text-[11px] uppercase tracking-wider rounded transition">
                                            {plan.ctaPrimary}
                                        </Link>
                                        <Link href="/contact" className="block w-full bg-transparent border border-white hover:bg-white/10 text-white font-bold py-3.5 px-6 text-[11px] uppercase tracking-wider rounded transition">
                                            {plan.ctaSecondary}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
