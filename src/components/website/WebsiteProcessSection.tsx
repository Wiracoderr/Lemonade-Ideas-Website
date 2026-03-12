import Image from "next/image";

export default function WebsiteProcessSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-[#8DBF43] font-bold text-xs uppercase tracking-widest border-l-4 border-[#8DBF43] pl-4">
            Our Process
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold mt-4 uppercase tracking-widest">
            Collaborating to bring your vision to life
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#1e3a1a] text-[#8DBF43] rounded flex items-center justify-center">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </div>
              <div>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Step 1</span>
                <h3 className="text-xl font-bold mb-2 uppercase">Discovery</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  We&apos;ll connect with you to gather key details about your vision, goals, desired features, and style preferences.
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#1e3a1a] text-[#8DBF43] rounded flex items-center justify-center">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </div>
              <div>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Step 2</span>
                <h3 className="text-xl font-bold mb-2 uppercase">Development</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  We&apos;ll build your website and share the first draft for your feedback. After refining it based on your revisions, we&apos;ll prepare for launch.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#1e3a1a] text-[#8DBF43] rounded flex items-center justify-center">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </div>
              <div>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Step 3</span>
                <h3 className="text-xl font-bold mb-2 uppercase">Launch</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Our developers perform a final quality check for compatibility and optimization before launching your site for the world to see!
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative w-full aspect-[4/3] rounded-lg shadow-2xl overflow-hidden">
                <Image 
                    src="/images/website/website-process.jpg" 
                    alt="Website Development Process"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#8DBF43] p-6 rounded-lg text-white hidden md:block shadow-lg">
              <p className="font-bold text-lg uppercase tracking-wider">Fast &amp; Efficient</p>
              <p className="text-sm opacity-90 font-medium tracking-wide">Ready in as little as 4 weeks.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
