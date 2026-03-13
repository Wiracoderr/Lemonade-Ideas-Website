import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function WebsitePortfolioSection() {
  const t = useTranslations("Website");
  return (
    <section className="py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-[32px] md:text-[42px] font-[Oswald] font-black text-[#0f2e15] uppercase tracking-tight leading-[1.1] mb-6">
          {t('port_title')}
        </h2>
        <p className="text-[14.5px] text-gray-700 font-medium leading-relaxed max-w-3xl mx-auto mb-16">
          {t('port_desc')}
        </p>

        {/* Unified Portfolio Showcase Image */}
        <div className="relative w-full max-w-6xl mx-auto">
          <Image 
            src="/images/website/portfolio-showcase.webp" 
            alt="Lemonade Ideas Portfolio Showcase on Multiple Devices"
            width={1200}
            height={675}
            quality={90}
            className="w-full h-auto object-contain mx-auto"
            sizes="(max-width: 1280px) 100vw, 1200px"
          />
        </div>
      </div>
    </section>
  );
}
