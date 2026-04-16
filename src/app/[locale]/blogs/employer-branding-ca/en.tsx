import React from "react";
import CTASection from "@/components/seo/CTASection";
import Link from "next/link";
import Image from "next/image";
import BlogNavigation from "@/components/blog/BlogNavigation";
import RelatedArticles from "@/components/blog/RelatedArticles";
import { Zap, Calendar, Clock, Check, ArrowRight, Facebook, Instagram, Youtube, Linkedin, HardHat, Cpu } from 'lucide-react';

export default function BlogPost() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-['Poppins',sans-serif]">
      
      {/* 1. High-Impact Hero Section */}
      <section className="bg-[#2A2A2A] relative pt-[120px] pb-[80px] md:pt-[160px] md:pb-[100px] text-center px-4 md:px-[20px] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[150%] bg-[#FED52B] blur-[120px] rounded-full rotate-45"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[120%] bg-[#3AAB43] blur-[150px] rounded-full"></div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1000px]">
          <div className="inline-block mb-[20px] px-[15px] py-[6px] bg-[#FED52B]/20 border border-[#FED52B]/30 rounded-full">
            <span className="text-[#FED52B] font-bold text-[0.85rem] tracking-[1px] uppercase flex items-center gap-2">
              <HardHat className="w-4 h-4" /> Talent Acquisition Warfare
            </span>
          </div>
          <h1 className="text-[2.2rem] md:text-[3.5rem] font-[Oswald] font-extrabold uppercase leading-[1.15] tracking-[0.5px] mb-[30px] text-[#ffffff] drop-shadow-lg">
            A $50M Backlog is Worthless Without the Elite Tier-1 Labor Force to Execute It.
          </h1>
          <div className="flex items-center justify-center gap-[20px] text-[0.95rem] font-medium text-[#c0c0c0]">
             <span className="flex items-center gap-[6px]">
              <Zap className="text-[#FED52B] text-[0.85rem]" />
              <span className="text-white font-semibold">Lemonade Ideas</span>
            </span>
            <span className="text-[#666]">|</span>
            <span className="flex items-center gap-[8px]">
              <Calendar className="text-[1.1em] text-[#FED52B]" />
              <span className="text-white">April 8, 2026</span>
            </span>
            <span className="text-[#666] hidden md:inline">|</span>
            <span className="hidden md:flex items-center gap-[8px]">
              <Clock className="text-[1.1em] text-[#FED52B]" />
              <span className="text-white">14 min read</span>
            </span>
          </div>
        </div>
      </section>

      {/* Content Area */}
      <main className="flex-1 px-4 md:px-[20px] bg-[#fcfcfc]">
        <article className="max-w-[800px] mx-auto bg-white rounded-[24px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] mt-[-40px] relative z-20 pt-[50px] px-[20px] md:px-[60px] pb-[60px] text-[#333] leading-[1.8] border border-gray-100">
          
          {/* Introduction Callout Box */}
          <div className="bg-[#f9fff9] border-l-[6px] border-[#3AAB43] p-[30px] md:p-[40px] rounded-r-[16px] mb-[50px] shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[100px] h-[100px] bg-[#3AAB43] opacity-[0.03] rounded-bl-full transform translate-x-1/2 -translate-y-1/2 transition-transform duration-500 group-hover:scale-150"></div>
            <p className="text-[1.2rem] md:text-[1.35rem] text-[#1E3A1A] font-medium leading-[1.7] relative z-10 m-0 text-justify">
              In the brutal California commercial construction market, your corporate vanity metrics mean absolutely nothing if you do not physically possess the human capital required to build the structure. Master electricians, senior project managers, and elite heavy-equipment operators in Los Angeles and San Francisco are incredibly rare commodities. They do not decide where to work based on a two-dollar-per-hour pay bump; they pick employers based on perceived operational stability, visual authority, and corporate dominance. If your &quot;Careers&quot; page looks like a cheap, generic template from 2012, you project massive weakness. Employer Branding is not a Human Resources metric; it is an aggressive, offensive weapon designed to systematically drain the top 1% of talent away from your competitors and lock them into your corporate ecosystem forever.
            </p>
          </div>

          <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
             <Image
                src="/images/blogs/employer-branding-ca/hero.png"
                alt="Cinematic shot of elite construction workers approaching a massive California jobsite"
                title="The Elite Task Force"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

          <div className="prose prose-lg max-w-none text-[#444] text-justify prose-headings:font-['Oswald',sans-serif] prose-p:text-[1.1rem] prose-p:leading-[1.8] prose-p:mb-[30px] prose-a:text-[#3AAB43] hover:prose-a:text-[#1E3A1A] prose-strong:text-[#1E3A1A] prose-strong:font-bold prose-ul:list-none prose-ul:pl-0 prose-li:relative prose-li:pl-[28px] prose-li:mb-[15px]">
            
            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-8 mb-6 uppercase tracking-wide">
              The Pipeline Paradox
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              California is currently experiencing one of the most savage infrastructure labor shortages in modern history. The state is pumping billions into civic development, healthcare facilities, and high-density residential towers, but the physical labor force required to pour that concrete and wire those grids is retiring faster than it is being replaced. 
            </p>

            <p>
              Your executives sit in boardrooms calculating projected margins on a $40M medical plaza, completely ignoring the terrifying reality that your current superintendents are stretched to their absolute physical limits. The paradox is devastating: You possess the operational capacity to bid, but you lack the biological manpower to build. If you cannot recruit elite operators faster than your competitors, your pipeline becomes a toxic liability.
            </p>

            <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
             <Image
                src="/images/blogs/employer-branding-ca/deficit.png"
                alt="Outdated paper job application next to a cheap cracked hard hat symbolizing HR decay"
                title="The Death of Antiquated HR"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-12 mb-6 uppercase tracking-wide">
              The End of &quot;We&apos;re Hiring&quot; Signs
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              If your current talent acquisition strategy involves posting an unformatted wall of text on Indeed or hanging a cheap vinyl banner on a chain-link fence that says &quot;Now Hiring Superintendents,&quot; you are actively poisoning your own brand. 
            </p>

            <p>
              You are emitting an aura of desperation. Elite performers—the guys who bring their own fiercely loyal six-man crews with them—do not respond to generic job boards. They are already employed. They are already making six figures at your competitor&apos;s site down the street. To extract them, you must engineer a psychological environment where working for your competitor feels like being trapped on a sinking, obsolete ship.
            </p>

            <div className="bg-[#fff9e6] border-l-[5px] border-[#FED52B] p-[25px] rounded-r-[12px] mb-[40px] shadow-sm">
                <div className="flex items-start gap-[15px]">
                <div className="bg-[#FED52B]/20 p-[10px] rounded-full mt-1">
                  <Cpu className="text-[#d4ad00] text-[1.2rem]" />
                </div>
                <div>
                  <h4 className="text-[#1E3A1A] font-bold text-[1.1rem] m-0 mb-[5px]">Visual Authority Is Currency</h4>
                   <p className="m-0 text-[#555] text-[0.95rem] leading-[1.6]">
                    A hyper-premium, cinematic digital footprint convinces a 20-year veteran foreman that your company is the undeniable future of the industry. This is not about HR; this is about asserting structural dominance and making your workplace look like an elite special forces unit.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-12 mb-6 uppercase tracking-wide">
              The Frictionless Bilingual Intake System
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              The lifeblood of California commercial construction is the Hispanic workforce. This is a statistical, indisputable fact. Yet, 90% of massive $50M contractors force extreme-level bilingual talent through a broken, unoptimized, English-only PDF application process that fails to load on a smartphone.
            </p>

            <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
             <Image
                src="/images/blogs/employer-branding-ca/attraction.png"
                alt="High-tech corporate HR portal displayed on a premium tablet operated by heavy machinery operator"
                title="Frictionless Technical Acquisition"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

            <p>
              You are bleeding the best labor in the state because your software stack is embarrassing. At Lemonade Ideas, we eradicate this bottleneck. We engineer natively localized, lightning-fast Next.js intake portals that allow a master foreman to submit his credentials directly from a job site in pristine, localized Spanish without a single microsecond of friction. When an applicant taps a button and physically sees an elite, lightning-fast mobile architecture interface, they immediately subconscious respect the company&apos;s operational competence.
            </p>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-12 mb-6 uppercase tracking-wide">
               The Sentry Culture Manifesto
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              We deploy the &quot;Sentry&quot; protocol to your employer branding. This means your careers portal, your LinkedIn presence, and your recruitment funnels are stripped of all corporate fluff. No stock photos of people pointing at whiteboards. We deploy aggressive, hyper-realistic, majestic imagery of your real workers dominating the skyline.
            </p>

            <ul>
               <li>
                 <Check className="text-[#3AAB43] absolute left-0 top-[6px]" />
                 <strong>Total Optical Dominance:</strong> High-end cinematic portraits of your foremen that command absolute respect and project an aura of total invincibility.
              </li>
              <li>
                 <Check className="text-[#3AAB43] absolute left-0 top-[6px]" />
                  <strong>Frictionless Capture:</strong> Millisecond-latency mobile intake funnels directly linked to your HR platforms, optimized identically for English and Spanish speakers natively.
              </li>
               <li>
                 <Check className="text-[#3AAB43] absolute left-0 top-[6px]" />
                  <strong>Psychological Warfare:</strong> We design your digital presence to be so overwhelmingly impressive that your competitor&apos;s executives panic when their top guys log onto your site.
              </li>
            </ul>

            <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
             <Image
                src="/images/blogs/employer-branding-ca/culture.png"
                alt="Portrait of a master construction foreman looking at the camera with absolute confidence"
                title="The Sentry Culture"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-12 mb-6 uppercase tracking-wide">
              The Sentry Decree: Engineer a Talent Monopoly
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              Stop managing HR. Start engineering an absolute monopoly on elite local talent. In a market this constrained, the company that controls the people controls the concrete, controls the bids, and dominates the skyline. Throw your antiquated recruitment PDFs in the trash. You need a high-octane digital capture ecosystem. Secure the talent, crush the competition, and build the empire.
            </p>

          </div>

          {/* Signature & CTA Panel */}
          <div className="mt-[80px] pt-[50px] border-t border-gray-100 flex flex-col items-center text-center">
             <div className="w-[138px] h-[138px] relative mb-[25px]">
              <Image
                src="/logos/Emblem/1x/Asset 7.png"
                alt="Lemonade Ideas Emblem"
                fill
                className="object-contain"
              />
            </div>
            
            <h4 className="text-[1.8rem] font-['Oswald'] font-bold text-[#1E3A1A] mb-[15px] uppercase">
             Deploy an Elite HR Acquisition System
            </h4>
             <p className="text-[#555] text-[1.1rem] mb-[30px] max-w-[600px] leading-[1.6]">
               Lemonade Ideas architects elite, lightning-fast, natively bilingual web applications that transform your recruitment infrastructure into an unavoidable talent magnet. 
            </p>
            
            <Link
              href="/contact"
              className="inline-block bg-[#FED52B] text-[#1E3A1A] font-bold text-[1.1rem] px-[40px] py-[18px] rounded-[50px] uppercase tracking-[1px] shadow-[0_10px_20px_rgba(254,213,43,0.3)] hover:shadow-[0_15px_25px_rgba(254,213,43,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
              Dominate Talent Acquisition <ArrowRight className="ml-2" />
            </Link>

            <div className="flex gap-[15px] mt-[40px]">
              <a href="#" className="w-[45px] h-[45px] rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#666] hover:bg-[#1E3A1A] hover:text-white hover:border-[#1E3A1A] transition-colors"><Facebook /></a>
              <a href="#" className="w-[45px] h-[45px] rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#666] hover:bg-[#1E3A1A] hover:text-white hover:border-[#1E3A1A] transition-colors"><Instagram /></a>
              <a href="#" className="w-[45px] h-[45px] rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#666] hover:bg-[#ff0000] hover:text-white hover:border-[#ff0000] transition-colors"><Youtube /></a>
              <a href="#" className="w-[45px] h-[45px] rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#666] hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-colors"><Linkedin /></a>
            </div>
          </div>

        
          <RelatedArticles
            currentSlug="employer-branding-ca"
            relatedSlugs={[
              "builder-brand-identity",
              "subcontractor-networking-ca",
              "multilingual-construction-sites",
              "construction-pr-agency"
            ]}
          />

        </article>
      </main>

      {/* DYNAMIC BLOG NAVIGATION */}
      <BlogNavigation currentSlug="employer-branding-ca" />

      <CTASection />
    </div>
  );
}
