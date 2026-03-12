export default function WebsiteHostingSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-200 mb-2 opacity-50 tracking-[0.5em]">HOSTING</h2>
          <div className="w-20 h-1 bg-[#8DBF43] mx-auto mb-12"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Basic Hosting */}
          <div className="flex flex-col md:flex-row bg-[#F3F8F2] rounded-lg overflow-hidden border border-gray-100 shadow-md">
            <div className="p-8 md:w-2/3">
              <div className="text-[#8DBF43] mb-4">
                <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-widest text-[#1e3a1a]">Our Website Hosting Package</h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                In today&apos;s digital age, your website needs to be fast, reliable, and always online. We use Flywheel to ensure top-tier performance.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1e3a1a] tracking-wide">
                  <span className="text-[#8DBF43]">✓</span> Speed Optimization
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#1e3a1a] tracking-wide">
                  <span className="text-[#8DBF43]">✓</span> One Hour of Free Maintenance Each Month
                </div>
              </div>
            </div>
            
            <div className="bg-[#1e3a1a] p-8 md:w-1/3 flex flex-col items-center justify-center text-center">
              <span className="text-[10px] text-[#8DBF43] uppercase tracking-widest font-bold mb-1">Low Price Of</span>
              <div className="text-white text-3xl font-extrabold mb-6">$30<span className="text-lg text-gray-400 font-normal">/mo</span></div>
              <a 
                href="https://calendly.com/lemonadeideas-consultation/30min?month=2026-03" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#8DBF43] text-[#1e3a1a] font-bold py-3 px-6 rounded-full text-[10px] uppercase tracking-widest hover:bg-white transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
          
          {/* Hosting + Maintenance */}
          <div className="flex flex-col md:flex-row bg-[#F3F8F2] rounded-lg overflow-hidden border border-gray-100 shadow-md">
            <div className="p-8 md:w-2/3">
              <div className="text-[#8DBF43] mb-4">
                <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-widest text-[#1e3a1a]">Website Hosting + 1 Hr Maintenance</h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Our most popular package. Whether you need a brand-new website or want to transfer your existing site, we&apos;ve got you covered.
              </p>
              
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center gap-2 text-[10px] font-bold text-[#1e3a1a] tracking-wide">
                  <span className="text-[#8DBF43]">✓</span> Monthly Security Checkups
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold text-[#1e3a1a] tracking-wide">
                  <span className="text-[#8DBF43]">✓</span> Daily Backups
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold text-[#1e3a1a] tracking-wide">
                  <span className="text-[#8DBF43]">✓</span> Flywheel Hosting
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold text-[#1e3a1a] tracking-wide">
                  <span className="text-[#8DBF43]">✓</span> Monthly Reports
                </div>
              </div>
            </div>
            
            <div className="bg-[#1e3a1a] p-8 md:w-1/3 flex flex-col items-center justify-center text-center">
              <span className="text-[10px] text-[#8DBF43] uppercase tracking-widest font-bold mb-1">Low Price Of</span>
              <div className="text-white text-3xl font-extrabold mb-6">$125<span className="text-lg text-gray-400 font-normal">/mo</span></div>
              <a 
                href="https://calendly.com/lemonadeideas-consultation/30min?month=2026-03" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#8DBF43] text-[#1e3a1a] font-bold py-3 px-6 rounded-full text-[10px] uppercase tracking-widest hover:bg-white transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
