import Image from "next/image";
import { ShieldCheck, FileCode2, SearchCheck, Award } from "lucide-react";

export default function WebsitePerformanceSection() {
  return (
    <section className="relative bg-[#0a2e15] py-28 overflow-hidden font-sans">
      {/* Dynamic Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          alt="Tech Background" 
          src="/images/website/high-performing-bg.webp"
          fill
          quality={80}
          className="object-cover opacity-30"
          sizes="100vw"
        />
        {/* Dark Green Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a2e15]/90 via-[#0a2e15]/80 to-[#0a2e15]/90"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Split Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-white font-bold text-[11px] md:text-[12px] uppercase tracking-widest block mb-3">
              Successful Website Features
            </span>
            <h2 className="text-[32px] md:text-[42px] font-[Oswald] font-black text-white uppercase tracking-tight leading-[1.1] drop-shadow-sm">
              What makes a high-performing website?
            </h2>
          </div>
          <div className="max-w-lg lg:pt-6">
            <p className="text-gray-200 text-[13.5px] font-medium leading-relaxed drop-shadow-sm">
              It&apos;s one thing to have a website; it&apos;s another to have one that drives results. We focus not only on creating stunning websites but also on building longevity and ensuring your site grows your business and boosts your revenue.
            </p>
          </div>
        </div>
        
        {/* 4 Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1 */}
          <div className="bg-[#f6fbfe] p-8 lg:p-9 rounded-sm shadow-2xl flex flex-col group transition-transform hover:-translate-y-1">
            <div className="text-[#0a2e15] mb-5">
              <ShieldCheck size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-[#0a2e15] font-[Oswald] font-bold text-[18px] uppercase tracking-wide leading-tight mb-3">
              Website Security
            </h3>
            <p className="text-gray-700 text-[13px] font-medium leading-[1.6]">
              Stay protected from hackers! Our websites receive regular updates to safeguard against the latest threats.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-[#f6fbfe] p-8 lg:p-9 rounded-sm shadow-2xl flex flex-col group transition-transform hover:-translate-y-1">
            <div className="text-[#0a2e15] mb-5">
              <FileCode2 size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-[#0a2e15] font-[Oswald] font-bold text-[18px] uppercase tracking-wide leading-tight mb-3">
              Custom Functionality
            </h3>
            <p className="text-gray-700 text-[13px] font-medium leading-[1.6]">
              We avoid slow, restrictive templates and instead design custom features tailored to your needs—without unnecessary extras.
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-[#f6fbfe] p-8 lg:p-9 rounded-sm shadow-2xl flex flex-col group transition-transform hover:-translate-y-1">
            <div className="text-[#0a2e15] mb-5">
              <SearchCheck size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-[#0a2e15] font-[Oswald] font-bold text-[18px] uppercase tracking-wide leading-tight mb-3">
              SEO-Friendly Design
            </h3>
            <p className="text-gray-700 text-[13px] font-medium leading-[1.6]">
              A website is only valuable if it can be found. We build fast, functional sites optimized for search engines to help you rank higher.
            </p>
          </div>
          
          {/* Card 4 */}
          <div className="bg-[#f6fbfe] p-8 lg:p-9 rounded-sm shadow-2xl flex flex-col group transition-transform hover:-translate-y-1">
            <div className="text-[#0a2e15] mb-5">
              <Award size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-[#0a2e15] font-[Oswald] font-bold text-[18px] uppercase tracking-wide leading-tight mb-3">
              Distinctive Personality
            </h3>
            <p className="text-gray-700 text-[13px] font-medium leading-[1.6]">
              Forget boring, cookie-cutter designs. We create websites that reflect your unique business, ensuring you stand out and leave a lasting impression.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
