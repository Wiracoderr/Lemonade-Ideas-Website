import Image from "next/image";
import { Monitor, Search, Megaphone, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function WebsiteFeaturesSection() {
    const t = useTranslations("Website");
    return (
        <section className="py-20 px-4 bg-white relative overflow-hidden font-sans">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Top Header Section */}
                <div className="text-center mb-6 relative">
                    {/* Watermark text behind the main header */}
                    <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[80px] md:text-[140px] font-[Oswald] font-black text-gray-100 opacity-50 whitespace-nowrap z-0 select-none hidden sm:block">
                        {t('feat_watermark')}
                    </h2>
                    
                    <h2 className="text-3xl md:text-4xl font-[Oswald] font-black text-[#1E3A1A] uppercase relative z-10 tracking-tight leading-[1.1] mb-6">
                        {t('feat_title')}
                    </h2>
                    
                    <p className="max-w-4xl mx-auto text-[14.5px] text-gray-700 leading-relaxed font-[Arial] relative z-10">
                        {t('feat_desc')}
                    </p>
                    
                    {/* 3 Pill Highlights */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-10 relative z-10 w-full mx-auto">
                        <div className="bg-[#eef8fd] rounded-lg px-6 py-4 flex items-center justify-center gap-3 w-full">
                            <CheckCircle2 size={20} className="text-[#1E3A1A] fill-[#1E3A1A]/20 flex-shrink-0" />
                            <span className="font-bold text-[14px] md:text-[15px] text-[#1E3A1A] uppercase tracking-wide">{t('feat_pill1')}</span>
                        </div>
                        <div className="bg-[#eef8fd] rounded-lg px-6 py-4 flex items-center justify-center gap-3 w-full">
                            <CheckCircle2 size={20} className="text-[#1E3A1A] fill-[#1E3A1A]/20 flex-shrink-0" />
                            <span className="font-bold text-[14px] md:text-[15px] text-[#1E3A1A] uppercase tracking-wide">{t('feat_pill2')}</span>
                        </div>
                        <div className="bg-[#eef8fd] rounded-lg px-6 py-4 flex items-center justify-center gap-3 w-full">
                            <CheckCircle2 size={20} className="text-[#1E3A1A] fill-[#1E3A1A]/20 flex-shrink-0" />
                            <span className="font-bold text-[14px] md:text-[15px] text-[#1E3A1A] uppercase tracking-wide">{t('feat_pill3')}</span>
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
                                <div className="text-[#1E3A1A] mb-4">
                                    <Monitor size={32} />
                                </div>
                                <h3 className="font-[Oswald] font-extrabold text-[16px] uppercase mb-3 text-[#1E3A1A] tracking-wide">
                                    {t('feat_card1_title')}
                                </h3>
                                <p className="text-[12px] text-gray-700 leading-relaxed font-[Arial]">
                                    {t('feat_card1_desc')}
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-[#f3f9fb] p-8 rounded-sm text-left">
                                <div className="text-[#1E3A1A] mb-4">
                                    <Search size={32} />
                                </div>
                                <h3 className="font-[Oswald] font-extrabold text-[16px] uppercase mb-3 text-[#1E3A1A] tracking-wide">
                                    {t('feat_card2_title')}
                                </h3>
                                <p className="text-[12px] text-gray-700 leading-relaxed font-[Arial]">
                                    {t('feat_card2_desc')}
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-[#f3f9fb] p-8 rounded-sm text-left">
                                <div className="text-[#1E3A1A] mb-4">
                                    <Megaphone size={32} />
                                </div>
                                <h3 className="font-[Oswald] font-extrabold text-[16px] uppercase mb-3 text-[#1E3A1A] tracking-wide">
                                    {t('feat_card3_title')}
                                </h3>
                                <p className="text-[12px] text-gray-700 leading-relaxed font-[Arial]">
                                    {t('feat_card3_desc')}
                                </p>
                            </div>

                            {/* Card 4 */}
                            <div className="bg-[#f3f9fb] p-8 rounded-sm text-left">
                                <div className="text-[#1E3A1A] mb-4">
                                    <ShieldCheck size={32} />
                                </div>
                                <h3 className="font-[Oswald] font-extrabold text-[16px] uppercase mb-3 text-[#1E3A1A] tracking-wide">
                                    {t('feat_card4_title')}
                                </h3>
                                <p className="text-[12px] text-gray-700 leading-relaxed font-[Arial]">
                                    {t('feat_card4_desc')}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Text and Image */}
                    <div className="w-full lg:w-2/5 flex flex-col justify-start">
                        <h3 className="font-[Oswald] font-black text-[24px] md:text-[28px] uppercase mb-4 text-[#1E3A1A] tracking-tight leading-tight">
                            {t('feat_right_title')}
                        </h3>
                        <p className="text-[13px] text-gray-700 leading-relaxed font-[Arial] mb-8">
                            {t('feat_right_desc')}
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
