import Image from "next/image";
import { Monitor, Search, Megaphone, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function WebsiteFeaturesSection() {
    return (
        <section className="py-20 px-4 bg-white relative overflow-hidden font-sans">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Top Header Section */}
                <div className="text-center mb-6 relative">
                    {/* Watermark text behind the main header */}
                    <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[80px] md:text-[140px] font-[Oswald] font-black text-gray-100 opacity-50 whitespace-nowrap z-0 select-none hidden sm:block">
                        WEBSITES
                    </h2>
                    
                    <h2 className="text-3xl md:text-4xl font-[Oswald] font-black text-[#143d1f] uppercase relative z-10 tracking-tight leading-[1.1] mb-6">
                        AFFORDABLE WEBSITE DESIGN FOR SMALL BUSINESSES
                    </h2>
                    
                    <p className="max-w-4xl mx-auto text-[14.5px] text-gray-700 leading-relaxed font-[Arial] relative z-10">
                        Our expert in-house team creates sleek, modern WordPress websites tailored to your needs. Transform your online presence with a fast, professional, and user-friendly site that builds trust and encourages potential customers to reach out.
                    </p>
                    
                    {/* 3 Pill Highlights */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-10 relative z-10 w-full mx-auto">
                        <div className="bg-[#eef8fd] rounded-lg px-6 py-4 flex items-center justify-center gap-3 w-full">
                            <CheckCircle2 size={20} className="text-[#143d1f] fill-[#143d1f]/20 flex-shrink-0" />
                            <span className="font-bold text-[14px] md:text-[15px] text-[#143d1f] uppercase tracking-wide">AFFORDABLE PRICING</span>
                        </div>
                        <div className="bg-[#eef8fd] rounded-lg px-6 py-4 flex items-center justify-center gap-3 w-full">
                            <CheckCircle2 size={20} className="text-[#143d1f] fill-[#143d1f]/20 flex-shrink-0" />
                            <span className="font-bold text-[14px] md:text-[15px] text-[#143d1f] uppercase tracking-wide">WEBSITE CUSTOM DESIGN</span>
                        </div>
                        <div className="bg-[#eef8fd] rounded-lg px-6 py-4 flex items-center justify-center gap-3 w-full">
                            <CheckCircle2 size={20} className="text-[#143d1f] fill-[#143d1f]/20 flex-shrink-0" />
                            <span className="font-bold text-[14px] md:text-[15px] text-[#143d1f] uppercase tracking-wide">ONE-STOP SHOP</span>
                        </div>
                    </div>
                </div>

                {/* Two Column Layout Section */}
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 mt-6">
                    {/* Left Column - 2x2 Grid */}
                    <div className="w-full lg:w-3/5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                            {/* Card 1 */}
                            <div className="bg-[#f3f9fb] p-8 rounded-sm text-left">
                                <div className="text-[#143d1f] mb-4">
                                    <Monitor size={32} />
                                </div>
                                <h3 className="font-[Oswald] font-extrabold text-[16px] uppercase mb-3 text-[#143d1f] tracking-wide">
                                    RESPONSIVE, IN-HOUSE TEAM
                                </h3>
                                <p className="text-[12px] text-gray-700 leading-relaxed font-[Arial]">
                                    We&apos;re here to build you the best website in your industry—one that wows your customers and leaves your competition envious. But it&apos;s not just about looking great; it&apos;s about driving results...
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-[#f3f9fb] p-8 rounded-sm text-left">
                                <div className="text-[#143d1f] mb-4">
                                    <Search size={32} />
                                </div>
                                <h3 className="font-[Oswald] font-extrabold text-[16px] uppercase mb-3 text-[#143d1f] tracking-wide">
                                    SEO-OPTIMIZED
                                </h3>
                                <p className="text-[12px] text-gray-700 leading-relaxed font-[Arial]">
                                    Every site we create is built with targeted keywords to help you rank in search engines. When you launch, you&apos;ll have a strong SEO foundation ready to get you noticed online. But that&apos;s not all...
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-[#f3f9fb] p-8 rounded-sm text-left">
                                <div className="text-[#143d1f] mb-4">
                                    <Megaphone size={32} />
                                </div>
                                <h3 className="font-[Oswald] font-extrabold text-[16px] uppercase mb-3 text-[#143d1f] tracking-wide">
                                    SALES-DRIVEN DESIGN
                                </h3>
                                <p className="text-[12px] text-gray-700 leading-relaxed font-[Arial]">
                                    Our websites are designed to convert. We focus on turning visitors into qualified leads who are ready to buy. And since conversions rely on visibility, we ensure your site is fully optimized for SEO as well...
                                </p>
                            </div>

                            {/* Card 4 */}
                            <div className="bg-[#f3f9fb] p-8 rounded-sm text-left">
                                <div className="text-[#143d1f] mb-4">
                                    <ShieldCheck size={32} />
                                </div>
                                <h3 className="font-[Oswald] font-extrabold text-[16px] uppercase mb-3 text-[#143d1f] tracking-wide">
                                    STRESS-FREE MAINTENANCE
                                </h3>
                                <p className="text-[12px] text-gray-700 leading-relaxed font-[Arial]">
                                    Relax knowing we&apos;ve got your website covered. From regular updates to keep it running smoothly to security patches that protect against hacks, we handle it all—so you don&apos;t have to.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Text and Image */}
                    <div className="w-full lg:w-2/5 flex flex-col justify-start">
                        <h3 className="font-[Oswald] font-black text-[24px] md:text-[28px] uppercase mb-4 text-[#143d1f] tracking-tight leading-tight">
                            WHAT MAKES YOUR NEW LEMONADE IDEAS WEBSITE EXCEPTIONAL
                        </h3>
                        <p className="text-[13px] text-gray-700 leading-relaxed font-[Arial] mb-8">
                            We&apos;re committed to delivering a top-notch website at a price you&apos;ll love—without hidden fees or unnecessary meetings. You need a website, and we build them. It&apos;s as simple as that. Let us help your business connect with more customers where they are most: online. Reach out today and see how we can elevate your online presence!
                        </p>
                        <div className="relative w-full aspect-[4/3] rounded-xl border border-gray-100/50 overflow-hidden shadow-sm">
                            <Image 
                                src="/images/person-laptop-charts.webp" 
                                alt="Website Development Team collaborating around a monitor"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 40vw"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
