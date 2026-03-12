import Image from "next/image";

export default function WebsiteHeroSection() {
  return (
    <section className="relative h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <Image 
        alt="Website Design Hero Background" 
        src="/images/website/website-hero-bg.jpg" 
        fill
        className="object-cover"
        priority
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center sm:text-left">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 uppercase tracking-wider">
            Looking for a new <span className="text-[#8DBF43]">website?</span> You&apos;re in the perfect place!
          </h1>
          <div className="w-24 h-1 bg-[#8DBF43] mb-6 mx-auto sm:mx-0"></div>
        </div>
      </div>
    </section>
  );
}
