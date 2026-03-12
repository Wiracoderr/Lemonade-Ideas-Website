import { MonitorSmartphone } from "lucide-react";

export default function WebsitePricingSection() {
  return (
    <section className="pt-32 pb-16 bg-white relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Watermark */}
        <div className="absolute top-0 left-0 right-0 flex justify-center pointer-events-none z-0">
          <span className="text-[100px] md:text-[180px] font-[Oswald] font-black text-gray-50 opacity-80 leading-none uppercase tracking-widest select-none -mt-8">
            PRICING
          </span>
        </div>

        <div className="relative z-10 mt-12 lg:mt-24">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
            
            {/* Left Content */}
            <div className="flex-1 lg:pr-4 flex flex-col justify-center">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-6">
                <div className="text-[#102a14] shrink-0">
                  <MonitorSmartphone size={56} strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="text-[28px] md:text-[36px] font-[Oswald] font-black text-[#102a14] uppercase leading-[1.1] tracking-wide">
                    OUR PREMIER WEBSITE<br className="hidden md:block"/> DESIGN & DEVELOPMENT PACKAGE
                  </h2>
                </div>
              </div>
              
              <p className="text-[14px] text-gray-700 font-medium leading-[1.7] mb-8 max-w-3xl">
                Whether you&apos;re starting from scratch or need a refresh for an outdated site, we&apos;ve perfected the process with over 500 successful website launches. Let us create a modern, high-performing website tailored to your needs.
              </p>

              <h4 className="text-[17px] font-bold text-[#102a14] mb-6">
                What&apos;s Included?
              </h4>

              <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 mb-10">
                {/* Check List Items */}
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 bg-[#102a14] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <p className="text-[13px] text-gray-700 leading-relaxed"><span className="font-bold text-[#102a14]">Custom Design Mockups:</span> Unique designs created just for you.</p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 bg-[#102a14] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <p className="text-[13px] text-gray-700 leading-relaxed"><span className="font-bold text-[#102a14]">Dedicated Project Manager:</span> A single point of contact to guide you through the process.</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 bg-[#102a14] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <p className="text-[13px] text-gray-700 leading-relaxed"><span className="font-bold text-[#102a14]">Custom WordPress Development:</span> Fully tailored functionality on a trusted platform.</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 bg-[#102a14] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <p className="text-[13px] text-gray-700 leading-relaxed"><span className="font-bold text-[#102a14]">Empowered</span> for successful post-launch management</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 bg-[#102a14] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <p className="text-[13px] text-gray-700 leading-relaxed"><span className="font-bold text-[#102a14]">Up to 30 Development Hours:</span> Ample time to build your ideal site.</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 bg-[#102a14] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <p className="text-[13px] text-gray-700 leading-relaxed"><span className="font-bold text-[#102a14]">$500 Credit for Digital Marketing Services:</span> Kickstart your online presence with Lemonade Ideas.</p>
                </div>
              </div>

              <p className="text-[14px] font-bold text-[#102a14] leading-relaxed max-w-2xl">
                Transform your website into a powerful tool for your business. Reach out to get started today!
              </p>
            </div>

            {/* Right Card */}
            <div className="w-full lg:w-[420px] shrink-0 mt-8 lg:mt-0">
              <div className="bg-[#1c4024] rounded-[1.25rem] overflow-hidden relative shadow-2xl h-full min-h-[480px] flex flex-col items-center justify-center p-12">
                {/* Chevron/Line Background Pattern (Simulating Screenshot) */}
                <div 
                  className="absolute inset-0 opacity-[0.25] pointer-events-none mix-blend-overlay" 
                  style={{ 
                    backgroundImage: "linear-gradient(45deg, transparent 48%, rgba(0,0,0,0.4) 50%, transparent 52%), linear-gradient(-45deg, transparent 48%, rgba(0,0,0,0.4) 50%, transparent 52%)", 
                    backgroundSize: "60px 60px" 
                  }}
                ></div>
                <div 
                  className="absolute inset-0 opacity-[0.4] pointer-events-none mix-blend-overlay" 
                  style={{ 
                    backgroundImage: "linear-gradient(90deg, transparent 48%, rgba(0,0,0,0.3) 50%, transparent 52%)", 
                    backgroundSize: "120px 120px" 
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#1c4024]/10 to-[#0e2112]/90 pointer-events-none"></div>
                
                <div className="relative z-10 text-center flex flex-col items-center w-full">
                  <span className="text-white font-[Oswald] font-bold text-[16px] uppercase tracking-widest mb-3 drop-shadow-md">
                    STARTING AT
                  </span>
                  <div className="text-white font-[Oswald] font-black text-[72px] leading-none mb-12 drop-shadow-xl tracking-tight">
                    $3500
                  </div>
                  
                  <a 
                    href="https://calendly.com/lemonadeideas-consultation/30min?month=2026-03" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#fed034] hover:bg-white text-[#102a14] font-[Oswald] font-bold py-4 px-8 rounded shadow-[0_10px_20px_rgba(0,0,0,0.15)] text-[15px] uppercase tracking-wider transition-colors w-[90%] text-center"
                  >
                    GET INSTANT QUOTE
                  </a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
