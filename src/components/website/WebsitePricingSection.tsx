export default function WebsitePricingSection() {
  return (
    <section className="py-20 bg-[#F3F8F2]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-300 mb-2 opacity-50 tracking-[0.5em]">PRICING</h2>
          <div className="w-20 h-1 bg-[#8DBF43] mx-auto mb-8"></div>
        </div>
        
        <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row max-w-5xl mx-auto border border-gray-100">
          <div className="p-10 md:w-2/3">
            <h3 className="text-2xl font-bold mb-4">Custom Design Package</h3>
            <p className="text-gray-500 mb-8 text-sm leading-relaxed">
              The process with over 500 successful website launches. Let us create a modern, high-performing website tailored to your needs.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 bg-[#8DBF43] rounded-full flex-shrink-0 flex items-center justify-center text-white text-[10px]">✓</span>
                  <p className="text-sm font-semibold text-gray-700">Custom Design Mockups: Unique designs created just for you.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 bg-[#8DBF43] rounded-full flex-shrink-0 flex items-center justify-center text-white text-[10px]">✓</span>
                  <p className="text-sm font-semibold text-gray-700">Custom WordPress Development: Fully tailored functionality.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 bg-[#8DBF43] rounded-full flex-shrink-0 flex items-center justify-center text-white text-[10px]">✓</span>
                  <p className="text-sm font-semibold text-gray-700">Up to 30 Development Hours: Ample time to build your ideal site.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 bg-[#8DBF43] rounded-full flex-shrink-0 flex items-center justify-center text-white text-[10px]">✓</span>
                  <p className="text-sm font-semibold text-gray-700">Dedicated Project Manager: A single point of contact.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 bg-[#8DBF43] rounded-full flex-shrink-0 flex items-center justify-center text-white text-[10px]">✓</span>
                  <p className="text-sm font-semibold text-gray-700">Empowered for post-launch management.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 bg-[#8DBF43] rounded-full flex-shrink-0 flex items-center justify-center text-white text-[10px]">✓</span>
                  <p className="text-sm font-semibold text-gray-700">$500 Credit For Digital Marketing Services.</p>
                </div>
              </div>
            </div>
            <p className="mt-8 text-sm text-gray-400 italic font-medium">
              Transform your website into a powerful tool for your business. Reach out to get started today!
            </p>
          </div>
          
          <div className="bg-[#1e3a1a] p-10 md:w-1/3 text-center flex flex-col justify-center items-center text-white">
            <span className="text-xs uppercase tracking-widest opacity-70 mb-2 font-bold">Starting at</span>
            <div className="text-5xl font-extrabold mb-8 text-[#8DBF43]">$3500</div>
            <a 
              href="https://calendly.com/lemonadeideas-consultation/30min?month=2026-03" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#8DBF43] text-[#1e3a1a] font-bold py-4 px-8 rounded-full text-xs uppercase hover:bg-white transition-colors tracking-widest w-full shadow-lg"
            >
              Get Instant Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
