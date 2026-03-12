import Image from "next/image";

export default function WebsitePortfolioSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6 uppercase tracking-widest">
          Recently Launched Websites
        </h2>
        <p className="text-gray-500 mb-12 max-w-3xl mx-auto">
          We&apos;ve partnered with hundreds of local businesses across every industry to bring their web presence to life. Below is just a small sample of our work, where our passion for what we do is evident in not only the end result, but the kind words from our clients.
        </p>

        {/* Device Mockup Carousel Simulation */}
        <div className="relative max-w-5xl mx-auto flex items-center justify-center gap-4">
          <div className="flex items-end justify-center gap-4 md:gap-8">
            {/* Tablet Mockup */}
            <div className="hidden md:block w-48 h-64 bg-gray-200 rounded-xl overflow-hidden border-8 border-gray-800 relative shadow-xl">
              <Image 
                src="/images/website/portfolio-tablet.jpg" 
                alt="Tablet Portfolio Work"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Desktop Mockup */}
            <div className="w-full md:w-[600px] h-[350px] bg-gray-200 rounded-xl overflow-hidden border-[12px] border-gray-800 relative shadow-2xl">
              <Image 
                src="/images/website/portfolio-desktop.jpg" 
                alt="Desktop Portfolio Work"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 600px"
              />
              <div className="absolute bottom-0 w-full h-8 bg-gray-800 flex items-center justify-center">
                <div className="w-16 h-1 bg-gray-700 rounded"></div>
              </div>
            </div>
            
            {/* Mobile Mockup */}
            <div className="hidden md:block w-32 h-64 bg-gray-200 rounded-[2rem] overflow-hidden border-[6px] border-gray-800 relative shadow-xl">
              <Image 
                src="/images/website/portfolio-mobile.jpg" 
                alt="Mobile Portfolio Work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
