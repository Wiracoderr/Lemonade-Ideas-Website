import React from "react";
import CTASection from "@/components/seo/CTASection";
import Link from "next/link";
import Image from "next/image";
import BlogNavigation from "@/components/blog/BlogNavigation";
import RelatedArticles from "@/components/blog/RelatedArticles";
import { PenTool, Target, Crosshair, AlertTriangle, Check, ArrowRight, Facebook, Instagram, Youtube, Linkedin, TrendingUp, Shield, FileText } from 'lucide-react';

export default function BlogPost() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-['Poppins',sans-serif]">
      
      {/* 1. High-Impact Hero Section */}
      <section className="bg-[#1A1A1A] relative pt-[120px] pb-[80px] md:pt-[160px] md:pb-[100px] text-center px-4 md:px-[20px] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[150%] bg-[#3AAB43] blur-[120px] rounded-full rotate-45"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[120%] bg-[#FED52B] blur-[150px] rounded-full"></div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1000px]">
          <div className="inline-block mb-[20px] px-[15px] py-[6px] bg-[#3AAB43]/20 border border-[#3AAB43]/30 rounded-full">
            <span className="text-[#3AAB43] font-bold text-[0.85rem] tracking-[1px] uppercase flex items-center gap-2">
              <PenTool className="w-4 h-4" /> B2B Lethal Copywriting
            </span>
          </div>
          <h1 className="text-[2.2rem] md:text-[3.5rem] font-[Oswald] font-extrabold uppercase leading-[1.15] tracking-[0.5px] mb-[30px] text-[#ffffff] drop-shadow-lg">
            Stop Writing Like a Handyman: Why Corporate "Fluff" is Killing Your $30M Pipeline 
          </h1>
          <div className="flex items-center justify-center gap-[20px] text-[0.95rem] font-medium text-[#c0c0c0]">
             <span className="flex items-center gap-[6px]">
              <Target className="text-[#FED52B] text-[0.85rem]" />
              <span className="text-white font-semibold">Lemonade Ideas</span>
            </span>
            <span className="text-[#666]">|</span>
            <span className="flex items-center gap-[8px]">
              <FileText className="text-[1.1em] text-[#FED52B]" />
              <span className="text-white">April 9, 2026</span>
            </span>
            <span className="text-[#666] hidden md:inline">|</span>
            <span className="hidden md:flex items-center gap-[8px]">
              <TrendingUp className="text-[1.1em] text-[#FED52B]" />
              <span className="text-white">16 min read</span>
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
              Commercial developers looking to award aggressive $30M contracts DO NOT care about your "family-owned values," your "passion for building," or your "commitment to excellence." Every single amateur contractor with a registered LLC uses that exact same tired, ChatGPT-generated rhetoric. They care about your unshakeable bonding capacity, your safety EMR rating, your specialized sub-contractor network, and your brutal adherence to municipal compliance. If your B2B website copywriting does not instantly execute this financial language, you will forfeit institutional credibility the second they land on your homepage.
            </p>
          </div>

          <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
             <Image
                src="/images/blogs/b2b-website-copywriting/hero.png"
                alt="A premium tablet displaying a stark, black-and-white capability statement in front of a massive high-rise construction pour."
                title="The Executive Vocabulary"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

          <div className="prose prose-lg max-w-none text-[#444] text-justify prose-headings:font-['Oswald',sans-serif] prose-p:text-[1.1rem] prose-p:leading-[1.8] prose-p:mb-[30px] prose-a:text-[#3AAB43] hover:prose-a:text-[#1E3A1A] prose-strong:text-[#1E3A1A] prose-strong:font-bold prose-ul:list-none prose-ul:pl-0 prose-li:relative prose-li:pl-[28px] prose-li:mb-[15px]">
            
            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-8 mb-6 uppercase tracking-wide">
              The Language of a $50M General Contractor
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              Elite B2B website copywriting operates on a completely different psychological plane than consumer-facing residential marketing. A homeowner remodeling their kitchen is looking for aesthetic reassurance and a friendly face. A private equity director funding a 200,000 sq-ft industrial logistics park is looking for <strong>risk mitigation</strong>. Period.
            </p>

            <p>
              When an institutional investor reads your website, their internal monologue is singular: "Is this contractor competent enough to execute this complex structural footprint without getting us sued, going over budget, or delaying the delivery schedule?" 
            </p>

            <p>
              If your homepage headline says: <em>"We build beautiful spaces that you will love for a lifetime,"</em> you have instantly signaled that you operate in the minor leagues. 
            </p>

            <div className="bg-[#fff5f5] p-[30px] rounded-[16px] mb-[40px] relative overflow-hidden group border border-[#ffebeb]">
               <AlertTriangle className="absolute top-[-20%] right-[-10%] text-[10rem] text-[#ff0000] opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500" />
               <h4 className="text-[#d32f2f] font-bold mb-[15px] relative z-10 flex items-center gap-3 text-xl">
                 <Crosshair /> The Generative AI Death Trap
               </h4>
                <p className="relative z-10 m-0 text-[#555]">
                 There is an epidemic of construction owners generating their entire "About Us" and "Services" pages using free ChatGPT prompts. Board members and architects can detect robotic, soulless AI grammar instantly. Phrases like "In the dynamic world of modern construction..." or "We leverage synergistic teamwork..." are massive red flags. It proves your firm lacks original executive thought and is too lazy to invest in strategic communication. It is a devastating brand killer.
               </p>
             </div>

            <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
             <Image
                src="/images/blogs/b2b-website-copywriting/image-1.png"
                alt="A stressed commercial project manager crossing out weak corporate text with a red pen."
                title="Eradicating Useless Fluff"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>
            
            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-12 mb-6 uppercase tracking-wide">
              The Vocabulary of Elite Procurement
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              To dominate B2B lead generation, your copy must be laced with the exact lexicon used by the Board of Directors, municipal procurement officers, and Tier-1 architects. You must rewrite your service pages to focus ruthlessly on operational execution.
            </p>

            <ul>
               <li>
                 <Check className="text-[#3AAB43] absolute left-0 top-[6px]" />
                 <strong>Safety & EMR:</strong> Don't say "Safety is our priority." State explicitly: "Our active EMR rating sits at 0.65, delivering an immediate reduction in overarching project insurance premiums."
              </li>
              <li>
                 <Check className="text-[#3AAB43] absolute left-0 top-[6px]" />
                  <strong>Value Engineering:</strong> Don't say "We save you money." Say: "We deploy aggressive pre-construction D-B-B value engineering, historically optimizing material logistics to shave 14% off standard architectural estimates."
              </li>
               <li>
                 <Check className="text-[#3AAB43] absolute left-0 top-[6px]" />
                  <strong>Compliance & Prevailing Wage:</strong> "We execute 100% compliant, audited prevailing wage frameworks, insulating your structural asset from Title III and municipal labor litigation."
              </li>
            </ul>

            <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
             <Image
                src="/images/blogs/b2b-website-copywriting/image-2.png"
                alt="A high-net-worth investor reviewing a construction contract on a matte black laptop showing EMR RATING 0.65 APPROVED."
                title="The Metrics Investors Trust"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-12 mb-6 uppercase tracking-wide">
              The Pre-Qualification Filter: Weaponizing Words
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              Effective B2B copywriting is not about appealing to everyone. <strong>It is about intentional alienation.</strong> If your firm specializes in $10M+ commercial build-outs, your copywriting should actively intimidate and repel a small-time entrepreneur looking for a cheap $20k storefront renovation.
            </p>

            <p>
              Your sub-headlines and capability statements must act as an invisible, ruthless bouncer. When your website states: "Executing elite institutional developments starting at a baseline of $2M," you instantly eliminate tire-kickers. You save your estimating team hundreds of hours of wasted bidding, and you prove to the 8-figure clients that you exclusively operate in their weight class.
            </p>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-12 mb-6 uppercase tracking-wide">
              The "Sentry Tone" Protocol
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              At Lemonade Ideas, we construct web presence using an architecture we call the "Sentry Tone". This is an aggressive, uncompromising editorial style designed specifically for heavy industrial and commercial B2B. It strips away all adjectives and focuses purely on verbs, numbers, and undeniable outcomes. It does not ask for the contract; it commands the contract by proving an absolute dominance in structural logistics.
            </p>

            <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
             <Image
                src="/images/blogs/b2b-website-copywriting/image-3.png"
                alt="A sleek modern smartphone on a steel I-beam showing a high-end dashboard with ELITE B2B COPY."
                title="Deployment of the Sentry Tone"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-12 mb-6 uppercase tracking-wide">
              Eradicate Softness from Your Digital Presence
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              Look at your website right now. If it reads like a brochure for a residential handyman, you are actively degrading your brand equity every single day. Your firm moves earth, erects steel, and builds skylines. 
            </p>

            <p>
              It is time to execute B2B website copywriting that matches the brutality and exact precision of your engineering. Replace "family-owned" with "institutionally trusted." Replace "good work" with "zero-defect execution." Write for the boardrooms. Write for the investors. Command the $30M pipeline.
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
             Speak The Language of Multi-Million Dollar Capital
            </h4>
             <p className="text-[#555] text-[1.1rem] mb-[30px] max-w-[600px] leading-[1.6]">
               Stop letting cheap, generated text ruin your institutional credibility. Lemonade Ideas architects your entire brand voice using the highly-aggressive Sentry Tone, engineered purely to terrorize your competitors and close Tier-1 developers.
            </p>
            
            <Link
              href="/contact"
              className="inline-block bg-[#FED52B] text-[#1E3A1A] font-bold text-[1.1rem] px-[40px] py-[18px] rounded-[50px] uppercase tracking-[1px] shadow-[0_10px_20px_rgba(254,213,43,0.3)] hover:shadow-[0_15px_25px_rgba(254,213,43,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
              Deploy Elite Copywriting <ArrowRight className="ml-2" />
            </Link>

          </div>
        
          <RelatedArticles
            currentSlug="b2b-website-copywriting"
            relatedSlugs={[
              "blueprint-web-design",
              "commercial-bid-writing",
              "inbound-marketing-commercial-contractors",
              "construction-lead-magnets"
            ]}
          />

        </article>
      </main>

      {/* DYNAMIC BLOG NAVIGATION */}
      <BlogNavigation currentSlug="b2b-website-copywriting" />

      <CTASection />
    </div>
  );
}
