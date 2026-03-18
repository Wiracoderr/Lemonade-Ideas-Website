import React from "react";
import CTASection from "@/components/seo/CTASection";
import Link from "next/link";
import Image from "next/image";
import BlogNavigation from "@/components/blog/BlogNavigation";
import { Zap, Calendar, Clock, XCircle, AlertTriangle, Lightbulb, ArrowRight, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

export default function BlogPost() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-['Poppins',sans-serif]">
      {/* 1. High-Impact Hero Section */}
      <section className="bg-[#2A2A2A] relative pt-[120px] pb-[80px] md:pt-[160px] md:pb-[100px] text-center px-4 md:px-[20px] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[150%] bg-[#3AAB43] blur-[120px] rounded-full rotate-45"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[120%] bg-[#FED52B] blur-[150px] rounded-full"></div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[950px]">
          <div className="inline-block mb-[20px] px-[15px] py-[6px] bg-[#3AAB43]/20 border border-[#3AAB43]/30 rounded-full">
            <span className="text-[#3AAB43] font-bold text-[0.85rem] tracking-[1px] uppercase">
              B2B Event Strategy
            </span>
          </div>
          <h1 className="text-[2.2rem] md:text-[3.5rem] font-[Oswald] font-extrabold uppercase leading-[1.15] tracking-[0.5px] mb-[30px] text-[#ffffff] drop-shadow-lg">
            Trade Show Marketing: Why 90% of Contractors Burn Cash (And How to Actually ROI)
          </h1>
          <div className="flex items-center justify-center gap-[20px] text-[0.95rem] font-medium text-[#c0c0c0]">
             <span className="flex items-center gap-[6px]">
              <Zap className="text-[#FED52B] text-[0.85rem]" />
              <span className="text-white font-semibold">Lemonade Ideas</span>
            </span>
            <span className="text-[#666]">|</span>
            <span className="flex items-center gap-[8px]">
              <Calendar className="text-[1.1em] text-[#FED52B]" />
              <span className="text-white">March 18, 2026</span>
            </span>
            <span className="text-[#666] hidden md:inline">|</span>
            <span className="hidden md:flex items-center gap-[8px]">
              <Clock className="text-[1.1em] text-[#FED52B]" />
              <span className="text-white">20 min read</span>
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
              There is a horrific tradition in commercial construction. Once a year, mid-market contractors pay $15,000 for a 10x10 booth at a regional trade show, buy $2,000 worth of branded pens, and stand around for three days hoping a developer miraculously drops a $10M contract onto their pop-up table. This is not marketing. This is paying five figures to socialize with your competitors. If you are a high-level B2B commercial contractor, the physical booth is the absolute least important part of the trade show. The real money is made in the invisible, hyper-technical data capture pipeline deployed three weeks before the show begins and ruthlessly executed six months after it ends. It is time to stop handing out stress balls and start engineering a digital CRM dragnet.
            </p>
          </div>

          <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
             <Image
                src="/images/blogs/trade-show-marketing/hero.png"
                alt="A buzzing, dimly lit B2B convention floor with a glowing, premium commercial construction booth"
                title="The Modern B2B Battleground"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

          <div className="prose prose-lg max-w-none text-[#444] text-justify prose-headings:font-['Oswald',sans-serif] prose-p:text-[1.1rem] prose-p:leading-[1.8] prose-p:mb-[30px] prose-a:text-[#3AAB43] hover:prose-a:text-[#1E3A1A] prose-strong:text-[#1E3A1A] prose-strong:font-bold prose-ul:list-none prose-ul:pl-0 prose-li:relative prose-li:pl-[28px] prose-li:mb-[15px]">
            
            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-2xl mt-8 mb-6">
              The Fallacy of the "Foot Traffic" Strategy
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              The fundamental flaw most contractors make is believing their job at a trade show is to attract random foot traffic. You do not want random foot traffic. If you are selling $5 Million tilt-up warehouse builds, you only care about the 12 directors of real estate development who are attending that show. Every minute your VP of Sales spends talking to a residential roofing salesman is a minute wasted.
            </p>

            <p>
              To dominate trade shows, you must completely shift your mindset: The trade show is simply a physical anchor point to execute a highly targeted digital sniper campaign. 
            </p>

            <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
             <Image
                src="/images/blogs/trade-show-marketing/card.png"
                alt="A cinematic close-up hand-off of a sleek, heavy metal business card"
                title="Forget the Pens. Execute the Exchange."
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-2xl mt-12 mb-6">
              Phase 1: Pre-Show Digital Targeting (T-Minus 3 Weeks)
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              Your marketing begins three weeks before the lanyard is printed. You must secure the attendee list (or build a probable attendee list via LinkedIn scraping) and run aggressive Account-Based Marketing (ABM).
            </p>

            <div className="bg-[#fff5f5] p-[30px] rounded-[16px] mb-[40px] relative overflow-hidden group border border-[#ffebeb]">
              <XCircle className="absolute top-[-20%] right-[-10%] text-[10rem] text-[#ff0000] opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500" />
              <h4 className="text-[#d32f2f] font-bold mb-[15px] relative z-10 flex items-center gap-3">
                <AlertTriangle /> The "Stop By Our Booth" Trap
              </h4>
               <p className="relative z-10 m-0 text-[#555]">
                Never send an email that says, "We will be at Booth #402, come say hi!" Executives delete those instantly. Instead, send a targeted cold email: "John, I see you're attending the West Coast Commercial Real Estate Expo. Given your firm's recent acquisition of the Irvine industrial park, I've prepared a brief on how we optimized concrete tilt-up schedules to save 14 days on a comparable build. I have 10 minutes available at 2:00 PM on Tuesday. Let's talk cost compression, not brochures." You are selling high-level financial value, not a booth visit.
              </p>
            </div>

            <p>
              Simultaneously, you launch LinkedIn Ads geo-fenced around the zip codes of the target companies, featuring thought-leadership content exactly matching your outreach cadence. By the time the show starts, your brand is already a known authority in their subconscious.
            </p>


            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-2xl mt-12 mb-6">
              Phase 2: The Geo-Fenced Convention Assault
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
               Once the event begins, your digital infrastructure must go into overdrive. If thousands of industry professionals are walking the floor, you need to capture their digital footprint without them ever visiting your booth.
            </p>

            <h4 className="bg-[#f4fbf4] rounded-[10px] border border-[#e2efe2] p-[15px] flex items-center mb-4 text-[#1E3A1A] font-bold">
               <span className="w-8 h-8 rounded-full bg-[#3AAB43] text-white flex items-center justify-center mr-3 flex-shrink-0">1</span>
               The Hyper-Local IP Net
            </h4>
            
            <p className="mb-8">
               You must draw a digital geographic fence around the convention center (and the associated premium hotels). Any mobile device within that radius that matches your B2B demographic criteria should be blanketed with your display ads. But these ads don't say "Visit Our Booth." They offer massive, gated value: "Download the 2026 Commercial Construction Cost Inflation Index." When they download it from their hotel room, your CRM captures their data. You just generated a lead without shaking a hand.
            </p>

             <h4 className="bg-[#f4fbf4] rounded-[10px] border border-[#e2efe2] p-[15px] flex items-center mb-4 text-[#1E3A1A] font-bold">
               <span className="w-8 h-8 rounded-full bg-[#3AAB43] text-white flex items-center justify-center mr-3 flex-shrink-0">2</span>
               Booth Technology OVER Booth Aesthetics
            </h4>
            
            <p className="mb-8">
              At the actual booth, eradicate paper. Do not have paper brochures. When an executive approaches, your sales team should carry high-end tablets connected directly to your CRM. "I can actually send you our case study on the Irvine logic park right now—what's your best email?" Boom. The data goes straight into HubSpot or Salesforce, immediately triggering a pre-written background automation sequence. No business cards to lose on the flight home.
            </p>

            <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
             <Image
                src="/images/blogs/trade-show-marketing/crm.png"
                alt="A digital CRM pipeline glowing on a sleek industrial tablet"
                title="Surgical Data Capture"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-2xl mt-12 mb-6">
              Phase 3: The Ruthless Post-Show Pipeline
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              95% of trade show ROI is squandered on the Thursday after the show. Most contractors collect 50 business cards, put them in a drawer because they are "busy catching up on emails," and call three of them a month later when the lead has gone colder than the Arctic. 
            </p>

            <p>
              Your post-show follow-up must be a mechanized, unyielding weapon.
            </p>

             <div className="bg-[#fff9e6] border-l-[5px] border-[#FED52B] p-[25px] rounded-r-[12px] mb-[40px] shadow-sm">
                <div className="flex items-start gap-[15px]">
                <div className="bg-[#FED52B]/20 p-[10px] rounded-full mt-1">
                  <Lightbulb className="text-[#d4ad00] text-[1.2rem]" />
                </div>
                <div>
                  <h4 className="text-[#1E3A1A] font-bold text-[1.1rem] m-0 mb-[5px]">The 14-Day Drip Sequence</h4>
                   <p className="m-0 text-[#555] text-[0.95rem] leading-[1.6]">
                    Because your leads were inputted directly into your CRM on the floor, the automation begins immediately. On Day 2 (while they are traveling home), they get an email: "Great meeting you at the Expo. Here is the data on steel pricing we discussed." On Day 5, they get a case study. On Day 10, your VP of Sales gets an automated task alert in the CRM to call their direct line. You maintain absolute omnipresence while your competitors are still unpacking their suitcases.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-2xl mt-12 mb-6">
              The True Math of Trade Show ROI
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
             <Image
                src="/images/blogs/trade-show-marketing/handshake.png"
                alt="A sharp, high-end firm handshake between two executives sealing a B2B deal"
                title="The Only Metric That Matters"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

            <p className="mb-10">
              When you stop treating a trade show as a physical event and start treating it as a localized digital data heist, your ROI goes exponential. You can take that $15,000 budget and justify it 100x over. The booth is merely the bait. The geo-fenced ads, the pre-show ABM cold email targeting, and the ruthless CRM follow-up are the steel trap. Don't go to another convention center until your digital infrastructure is built to dominate it.
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
              Stop Handing Out Pens. Build a Pipeline.
            </h4>
             <p className="text-[#555] text-[1.1rem] mb-[30px] max-w-[600px] leading-[1.6]">
               Are you a high-end commercial contractor wasting massive marketing budgets on trade booths with zero trackable ROI? You are fighting a digital war with analog tactics. Lemonade Ideas architects the CRM integrations and ruthless targeted campaigns that turn convention floors into guaranteed B2B revenue pipelines.
            </p>
            
            <Link
              href="/contact"
              className="inline-block bg-[#FED52B] text-[#1E3A1A] font-bold text-[1.1rem] px-[40px] py-[18px] rounded-[50px] uppercase tracking-[1px] shadow-[0_10px_20px_rgba(254,213,43,0.3)] hover:shadow-[0_15px_25px_rgba(254,213,43,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
              Command The Convention Floor Now <ArrowRight className="ml-2" />
            </Link>

            <div className="flex gap-[15px] mt-[40px]">
              <a href="#" className="w-[45px] h-[45px] rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#666] hover:bg-[#1E3A1A] hover:text-white hover:border-[#1E3A1A] transition-colors"><Facebook /></a>
              <a href="#" className="w-[45px] h-[45px] rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#666] hover:bg-[#1E3A1A] hover:text-white hover:border-[#1E3A1A] transition-colors"><Instagram /></a>
              <a href="#" className="w-[45px] h-[45px] rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#666] hover:bg-[#ff0000] hover:text-white hover:border-[#ff0000] transition-colors"><Youtube /></a>
              <a href="#" className="w-[45px] h-[45px] rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#666] hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-colors"><Linkedin /></a>
            </div>
          </div>

        </article>
      </main>

      {/* DYNAMIC BLOG NAVIGATION */}
      <BlogNavigation currentSlug="trade-show-marketing" />

      <CTASection />
    </div>
  );
}
