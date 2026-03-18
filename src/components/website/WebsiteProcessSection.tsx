import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function WebsiteProcessSection() {
  const t = useTranslations("Website");
  return (
    <section className="py-24 bg-[#eef9fd] relative overflow-hidden font-sans">
      {/* Decorative background lines to match the screenshot's faint watermark */}
      <div className="absolute left-0 top-0 bottom-0 w-[40%] pointer-events-none opacity-[0.03]">
        <svg viewBox="0 0 500 800" className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[150%] stroke-gray-900" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[...Array(25)].map((_, i) => (
            <path key={i} d={`M -100 ${i * 40} L 150 ${i * 40} L 350 ${200 + i * 40} L 600 ${200 + i * 40}`} strokeWidth="2" />
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Content */}
          <div className="space-y-10 pl-4 md:pl-8">
            {/* Header Area */}
            <div className="relative">
              {/* Green Corner Bracket using Borders */}
              <div className="absolute -left-6 -top-4 w-8 h-8 border-l-[4px] border-t-[4px] border-[#3AAB43]"></div>
              
              <span className="text-[#3AAB43] font-bold text-[12px] uppercase tracking-widest block mb-2">
                {t('proc_label')}
              </span>
              <h2 className="text-[32px] md:text-[38px] font-[Oswald] font-bold text-[#0f2e15] uppercase tracking-normal leading-[1.15]">
                {t('proc_title')}
              </h2>
              <p className="mt-4 text-[13px] md:text-[14px] text-gray-800 font-medium leading-relaxed max-w-xl">
                {t('proc_desc')}
              </p>
            </div>

            {/* Steps List */}
            <div className="space-y-7 mt-8">
              
              {/* Step 1 */}
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1E3A1A] rounded-xl flex items-center justify-center shadow-md">
                  <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                    <polyline points="6 10 10 6 14 10 18 6"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-[17px] font-[Oswald] font-bold uppercase tracking-wide leading-tight text-[#1E3A1A]">
                    <span className="text-[#3AAB43] block text-[11px] tracking-widest font-sans mb-0.5">{t('proc_s1_lbl')}</span>
                    {t('proc_s1_title')}
                  </h3>
                  <p className="mt-1.5 text-[12.5px] text-gray-600 font-medium leading-[1.6] max-w-sm">
                    {t('proc_s1_desc')}
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1E3A1A] rounded-xl flex items-center justify-center shadow-md">
                  <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="text-[17px] font-[Oswald] font-bold uppercase tracking-wide leading-tight text-[#1E3A1A]">
                    <span className="text-[#3AAB43] block text-[11px] tracking-widest font-sans mb-0.5">{t('proc_s2_lbl')}</span>
                    {t('proc_s2_title')}
                  </h3>
                  <p className="mt-1.5 text-[12.5px] text-gray-600 font-medium leading-[1.6] max-w-sm">
                    {t('proc_s2_desc')}
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1E3A1A] rounded-xl flex items-center justify-center shadow-md">
                  <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                    <polyline points="8 10 10 12 8 14"/>
                    <line x1="12" y1="14" x2="16" y2="14"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-[17px] font-[Oswald] font-bold uppercase tracking-wide leading-tight text-[#1E3A1A]">
                    <span className="text-[#3AAB43] block text-[11px] tracking-widest font-sans mb-0.5">{t('proc_s3_lbl')}</span>
                    {t('proc_s3_title')}
                  </h3>
                  <p className="mt-1.5 text-[12.5px] text-gray-600 font-medium leading-[1.6] max-w-[400px]">
                    {t('proc_s3_desc')}
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1E3A1A] rounded-xl flex items-center justify-center shadow-md">
                  <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
                    <path d="m12 15-3-3a22 22 0 0 1 3.82-13.06l.55-.54a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.54.55A22 22 0 0 1 15 12z"/>
                    <path d="m9 15 6-6"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-[17px] font-[Oswald] font-bold uppercase tracking-wide leading-tight text-[#1E3A1A]">
                    <span className="text-[#3AAB43] block text-[11px] tracking-widest font-sans mb-0.5">{t('proc_s4_lbl')}</span>
                    {t('proc_s4_title')}
                  </h3>
                  <p className="mt-1.5 text-[12.5px] text-gray-600 font-medium leading-[1.6] max-w-sm">
                    {t('proc_s4_desc')}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Stacked Images */}
          <div className="flex flex-col gap-6 w-full max-w-[500px] mt-6 lg:mt-4 mx-auto lg:ml-auto">
            <Image 
              src="/images/website/collab-1.webp" 
              alt="Web Design Mockups"
              width={600}
              height={337}
              quality={90}
              className="w-full h-auto rounded-3xl shadow-xl border border-gray-100/50 object-cover"
            />
            <Image 
              src="/images/website/collab-2.webp" 
              alt="Web Development Coding"
              width={600}
              height={337}
              quality={90}
              className="w-full h-auto rounded-3xl shadow-xl border border-gray-100/50 object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

