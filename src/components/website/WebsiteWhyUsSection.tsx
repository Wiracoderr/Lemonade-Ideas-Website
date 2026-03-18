import Image from "next/image";

export default function WebsiteWhyUsSection() {
  return (
    <section className="py-20 bg-[#F3F8F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border-t-4 border-[#3AAB43]">
              <div className="mb-4 text-[#3AAB43]">
                <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </div>
              <h3 className="font-bold text-sm mb-2 uppercase tracking-widest">Responsive, In-House Team</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                We&apos;re here to build you the best website in your industry—one that wows your customers and leaves your competition envious.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border-t-4 border-[#3AAB43]">
              <div className="mb-4 text-[#3AAB43]">
                <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </div>
              <h3 className="font-bold text-sm mb-2 uppercase tracking-widest">SEO Optimized</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Every site we create is built with targeted keywords to help you rank in search engines. Get noticed online.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border-t-4 border-[#3AAB43]">
              <div className="mb-4 text-[#3AAB43]">
                <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </div>
              <h3 className="font-bold text-sm mb-2 uppercase tracking-widest">Sales-Driven Design</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Our websites are designed to convert. We focus on turning visitors into qualified leads who are ready to buy.
              </p>
            </div>
            
            {/* Card 4 */}
            <div className="bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border-t-4 border-[#3AAB43]">
              <div className="mb-4 text-[#3AAB43]">
                <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </div>
              <h3 className="font-bold text-sm mb-2 uppercase tracking-widest">Stress-Free Maintenance</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Relax knowing we&apos;ve got your website covered. From regular updates to security patches, we handle it all.
              </p>
            </div>
          </div>

          {/* Content & Image */}
          <div>
            <h2 className="text-3xl font-extrabold mb-6 leading-tight uppercase tracking-widest">
              What makes your new Lemonade Ideas website exceptional
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We&apos;re committed to delivering a top-notch website at a price you&apos;ll love—without hidden fees or unnecessary meetings. You need a website, and we build them. It&apos;s as simple as that. Let us help your business connect with more customers where they are most online.
            </p>
            <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-lg shadow-xl overflow-hidden">
              <Image 
                src="/images/website/website-team.jpg" 
                alt="Lemonade Ideas Team Working"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
