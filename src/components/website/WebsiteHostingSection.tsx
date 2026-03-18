import { Terminal } from "lucide-react";
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function WebsiteHostingSection() {
  const t = useTranslations("Website");
  return (
    <section className="pt-24 pb-24 bg-white relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Watermark */}
        <div className="absolute top-0 left-0 right-0 flex justify-center pointer-events-none z-0">
          <span className="text-[100px] md:text-[180px] font-[Oswald] font-black text-gray-50 opacity-80 leading-none uppercase tracking-widest select-none -mt-8">
            {t('host_wm')}
          </span>
        </div>

        <div className="relative z-10 mt-12 lg:mt-24 space-y-20 lg:space-y-32">
          
          {/* First Package - Hosting */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
            {/* Left Content */}
            <div className="flex-1 lg:pr-4 flex flex-col justify-center">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-6">
                <div className="text-[#1E3A1A] shrink-0 border-[2.5px] border-[#1E3A1A] rounded-lg p-2.5 flex items-center justify-center">
                  <Terminal size={32} strokeWidth={2.5} />
                </div>
                <div>
                  <h2 className="text-[28px] md:text-[36px] font-[Oswald] font-black text-[#1E3A1A] uppercase leading-[1.1] tracking-wide">
                    {t('host_title_1')}
                  </h2>
                </div>
              </div>
              
              <p className="text-[14px] text-gray-700 font-medium leading-[1.7] mb-8 max-w-3xl">
                {t('host_desc_1')}
              </p>

              <h4 className="text-[17px] font-bold text-[#1E3A1A] mb-6">
                {t('price_inc')}
              </h4>

              <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 bg-[#1E3A1A] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <p className="text-[13px] text-gray-700 leading-relaxed font-bold">{t('host_i1')}</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 bg-[#1E3A1A] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <p className="text-[13px] text-gray-700 leading-relaxed font-bold">{t('host_i2')}</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 bg-[#1E3A1A] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <p className="text-[13px] text-gray-700 leading-relaxed font-bold">{t('host_i3')}</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 bg-[#1E3A1A] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <p className="text-[13px] text-gray-700 leading-relaxed font-bold">{t('host_i4')}</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 bg-[#1E3A1A] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <p className="text-[13px] text-gray-700 leading-relaxed font-bold">{t('host_i5')}</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 bg-[#1E3A1A] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <p className="text-[13px] text-gray-700 leading-relaxed font-bold">{t('host_i6')}</p>
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="w-full lg:w-[420px] shrink-0 mt-8 lg:mt-0">
              <div className="bg-[#1E3A1A] rounded-[1.25rem] overflow-hidden relative shadow-2xl h-full min-h-[420px] flex flex-col items-center justify-center p-12">
                <div 
                  className="absolute inset-0 opacity-[0.25] pointer-events-none mix-blend-overlay" 
                  style={{ backgroundImage: "linear-gradient(45deg, transparent 48%, rgba(0,0,0,0.4) 50%, transparent 52%), linear-gradient(-45deg, transparent 48%, rgba(0,0,0,0.4) 50%, transparent 52%)", backgroundSize: "60px 60px" }}
                ></div>
                <div 
                  className="absolute inset-0 opacity-[0.4] pointer-events-none mix-blend-overlay" 
                  style={{ backgroundImage: "linear-gradient(90deg, transparent 48%, rgba(0,0,0,0.3) 50%, transparent 52%)", backgroundSize: "120px 120px" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A1A]/10 to-[#0e2112]/90 pointer-events-none"></div>
                
                <div className="relative z-10 text-center flex flex-col items-center w-full">
                  <span className="text-white font-[Oswald] font-bold text-[16px] uppercase tracking-widest mb-3 drop-shadow-md">
                    {t('host_p1_start')}
                  </span>
                  <div className="text-white font-[Oswald] font-black text-[72px] leading-none mb-12 drop-shadow-xl tracking-tight">
                    {t('host_p1_val')}<span className="text-[40px]">{t('host_p1_mo')}</span>
                  </div>
                  
                  <Link 
                    href="https://calendly.com/lemonadeideas-consultation/30min?month=2026-03" 
                    target="_blank" 
                    className="bg-[#fed034] hover:bg-white text-[#1E3A1A] font-[Oswald] font-bold py-4 px-8 rounded shadow-[0_10px_20px_rgba(0,0,0,0.15)] text-[15px] uppercase tracking-wider transition-colors w-[85%] text-center"
                  >
                    {t('host_p1_btn')}
                  </Link>
                </div>
              </div>
            </div>
            
          </div>

          {/* Second Package - Hosting + Maintenance */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
            {/* Left Content */}
            <div className="flex-1 lg:pr-4 flex flex-col justify-center">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-6">
                <div className="text-[#1E3A1A] shrink-0 border-[2.5px] border-[#1E3A1A] rounded-lg p-2.5 flex items-center justify-center">
                  <Terminal size={32} strokeWidth={2.5} />
                </div>
                <div>
                  <h2 className="text-[28px] md:text-[36px] font-[O Oswald] font-black text-[#1E3A1A] uppercase leading-[1.1] tracking-wide">
                    {t('host_title_2')}
                  </h2>
                </div>
              </div>
              
              <p className="text-[14px] text-gray-700 font-medium leading-[1.7] mb-8 max-w-3xl">
                {t('host_desc_2')}
              </p>

              <h4 className="text-[17px] font-bold text-[#1E3A1A] mb-6">
                {t('price_inc')}
              </h4>

              <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 bg-[#1E3A1A] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <p className="text-[13px] text-gray-700 leading-relaxed"><span className="font-bold text-[#1E3A1A]">{t('host2_i1_str')}</span>{t('host2_i1_txt')}</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 bg-[#1E3A1A] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <p className="text-[13px] text-gray-700 leading-relaxed"><span className="font-bold text-[#1E3A1A]">{t('host2_i2_str')}</span>{t('host2_i2_txt')}</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 bg-[#1E3A1A] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <p className="text-[13px] text-gray-700 leading-relaxed"><span className="font-bold text-[#1E3A1A]">{t('host2_i3_str')}</span>{t('host2_i3_txt')}</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 bg-[#1E3A1A] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <p className="text-[13px] text-gray-700 leading-relaxed"><span className="font-bold text-[#1E3A1A]">{t('host2_i4_str')}</span>{t('host2_i4_txt')}</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 bg-[#1E3A1A] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <p className="text-[13px] text-gray-700 leading-relaxed"><span className="font-bold text-[#1E3A1A]">{t('host2_i5_str')}</span>{t('host2_i5_txt')}</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 bg-[#1E3A1A] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <p className="text-[13px] text-gray-700 leading-relaxed"><span className="font-bold text-[#1E3A1A]">{t('host2_i6_str')}</span>{t('host2_i6_txt')}</p>
                </div>
              </div>

              <p className="text-[13px] font-bold text-[#1E3A1A] leading-relaxed max-w-2xl">
                {t('host2_btm')}
              </p>
            </div>

            {/* Right Card */}
            <div className="w-full lg:w-[420px] shrink-0 mt-8 lg:mt-0">
              <div className="bg-[#1E3A1A] rounded-[1.25rem] overflow-hidden relative shadow-2xl h-full min-h-[420px] flex flex-col items-center justify-center p-12">
                <div 
                  className="absolute inset-0 opacity-[0.25] pointer-events-none mix-blend-overlay" 
                  style={{ backgroundImage: "linear-gradient(45deg, transparent 48%, rgba(0,0,0,0.4) 50%, transparent 52%), linear-gradient(-45deg, transparent 48%, rgba(0,0,0,0.4) 50%, transparent 52%)", backgroundSize: "60px 60px" }}
                ></div>
                <div 
                  className="absolute inset-0 opacity-[0.4] pointer-events-none mix-blend-overlay" 
                  style={{ backgroundImage: "linear-gradient(90deg, transparent 48%, rgba(0,0,0,0.3) 50%, transparent 52%)", backgroundSize: "120px 120px" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A1A]/10 to-[#0e2112]/90 pointer-events-none"></div>
                
                <div className="relative z-10 text-center flex flex-col items-center w-full">
                  <span className="text-white font-[Oswald] font-bold text-[16px] uppercase tracking-widest mb-3 drop-shadow-md">
                    {t('host_p1_start')}
                  </span>
                  <div className="text-white font-[Oswald] font-black text-[72px] leading-none mb-12 drop-shadow-xl tracking-tight">
                    {t('host_p2_val')}<span className="text-[40px]">{t('host_p1_mo')}</span>
                  </div>
                  
                  <Link 
                    href="https://calendly.com/lemonadeideas-consultation/30min?month=2026-03" 
                    target="_blank" 
                    className="bg-[#fed034] hover:bg-white text-[#1E3A1A] font-[Oswald] font-bold py-4 px-8 rounded shadow-[0_10px_20px_rgba(0,0,0,0.15)] text-[15px] uppercase tracking-wider transition-colors w-[85%] text-center"
                  >
                    {t('host_p1_btn')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
