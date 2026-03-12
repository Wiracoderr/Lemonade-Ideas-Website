import Image from "next/image";

export default function WebsitePerformanceSection() {
  return (
    <section className="relative bg-[#1e3a1a] py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <Image 
          alt="Performance Background" 
          src="/images/website/website-performance-bg.jpg"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-[#8DBF43] text-xs font-bold uppercase tracking-widest">
              Successful Website Features
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-4 uppercase tracking-widest">
              What makes a high-performing website?
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-gray-300 text-sm leading-relaxed">
              It&apos;s one thing to have a website, it&apos;s another to have one that drives results. We focus not only on creating stunning websites but also on building longevity and ensuring your site grows your business.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="bg-white/10 p-8 rounded border border-white/20 hover:border-[#8DBF43] transition-colors group backdrop-blur-sm">
            <div className="w-10 h-10 text-[#8DBF43] mb-4 group-hover:scale-110 transition-transform">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </div>
            <h3 className="text-white font-bold text-sm mb-2 uppercase tracking-widest">Website Security</h3>
            <p className="text-gray-300 text-xs leading-relaxed">
              Stay protected from hackers! Our websites receive regular updates to safeguard against the latest threats.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-white/10 p-8 rounded border border-white/20 hover:border-[#8DBF43] transition-colors group backdrop-blur-sm">
            <div className="w-10 h-10 text-[#8DBF43] mb-4 group-hover:scale-110 transition-transform">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </div>
            <h3 className="text-white font-bold text-sm mb-2 uppercase tracking-widest">Custom Functionality</h3>
            <p className="text-gray-300 text-xs leading-relaxed">
              We avoid slow, restrictive templates and instead design custom features tailored to your needs—without unnecessary extras.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-white/10 p-8 rounded border border-white/20 hover:border-[#8DBF43] transition-colors group backdrop-blur-sm">
            <div className="w-10 h-10 text-[#8DBF43] mb-4 group-hover:scale-110 transition-transform">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </div>
            <h3 className="text-white font-bold text-sm mb-2 uppercase tracking-widest">SEO-Friendly Design</h3>
            <p className="text-gray-300 text-xs leading-relaxed">
              A website is only valuable if it can be found. We build fast, functional sites optimized for search engines to help you rank higher.
            </p>
          </div>
          
          {/* Feature 4 */}
          <div className="bg-white/10 p-8 rounded border border-white/20 hover:border-[#8DBF43] transition-colors group backdrop-blur-sm">
            <div className="w-10 h-10 text-[#8DBF43] mb-4 group-hover:scale-110 transition-transform">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </div>
            <h3 className="text-white font-bold text-sm mb-2 uppercase tracking-widest">Distinctive Personality</h3>
            <p className="text-gray-300 text-xs leading-relaxed">
              Forget boring, cookie-cutter designs. We create websites that reflect your unique business, ensuring you stand out and leave a lasting impression.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
