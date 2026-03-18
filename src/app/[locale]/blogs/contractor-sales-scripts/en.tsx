/* eslint-disable react/no-unescaped-entities */
import React from "react";
import CTASection from "@/components/seo/CTASection";
import Link from "next/link";
import Image from "next/image";
import BlogNavigation from "@/components/blog/BlogNavigation";
import { Zap, Calendar, Clock, Check, XCircle, AlertTriangle, Monitor, ArrowRight, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

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
              Sales Psychology & High-Ticket Closing
            </span>
          </div>
          <h1 className="text-[2.2rem] md:text-[3.5rem] font-[Oswald] font-extrabold uppercase leading-[1.15] tracking-[0.5px] mb-[30px] text-[#ffffff] drop-shadow-lg">
            Contractor Sales Scripts: Stop Giving Free Consulting and Start Closing 8-Figure Deals
          </h1>
          <div className="flex items-center justify-center gap-[20px] text-[0.95rem] font-medium text-[#c0c0c0]">
             <span className="flex items-center gap-[6px]">
              <Zap className="text-[#FED52B] text-[0.85rem]" />
              <span className="text-white font-semibold">Lemonade Ideas</span>
            </span>
            <span className="text-[#666]">|</span>
            <span className="flex items-center gap-[8px]">
              <Calendar className="text-[1.1em] text-[#FED52B]" />
              <span className="text-white">March 17, 2026</span>
            </span>
            <span className="text-[#666] hidden md:inline">|</span>
            <span className="hidden md:flex items-center gap-[8px]">
              <Clock className="text-[1.1em] text-[#FED52B]" />
              <span className="text-white">18 min read</span>
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
              "Hi, I'm here to give you your free estimate." The moment those nine words leave a contractor's mouth, the margin is dead. The second a property developer or high-net-worth homeowner hears those words, your perceived market value instantly plummets from "authoritative expert" to "subservient laborer." If you arrive at a multi-million-dollar estate or a commercial project site and allow the prospect to dictate the pace of the conversation—pointing out what they want done while you obediently take notes on a clipboard—you are voluntarily participating in your own commoditization. You are no longer diagnosing a structural crisis or engineering a high-ROI build; you are simply a vendor competing entirely on who can provide the cheapest spreadsheet. To scale predictably past the 8-figure threshold, you must eradicate "winging it" and deploy ruthless, psychologically dominant contractor sales scripts that seize control of the negotiation frame within the first sixty seconds. Let's rebuild your closing infrastructure.
            </p>
          </div>

          <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
             <Image
                src="/images/blogs/contractor-sales-scripts/hero.png"
                alt="A confident, elite contractor dominating a conversation with a wealthy client, holding an iPad."
                title="The Alpha Frame: Authority Dictates Gross Margin"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

          <div className="prose prose-lg max-w-none text-[#444] text-justify prose-headings:font-['Oswald',sans-serif] prose-p:text-[1.1rem] prose-p:leading-[1.8] prose-p:mb-[30px] prose-a:text-[#3AAB43] hover:prose-a:text-[#1E3A1A] prose-strong:text-[#1E3A1A] prose-strong:font-bold prose-ul:list-none prose-ul:pl-0 prose-li:relative prose-li:pl-[28px] prose-li:mb-[15px]">
            
            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-2xl mt-8 mb-6">
              The Psychology of The Alpha Frame
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              Before we touch specific conversational syntax, you must understand the psychology of the "Frame." In any high-ticket sales interaction, there are multiple psychological frames colliding. The prospect brings the "Buyer Frame" (*"I have the money, you need my money, therefore I am in charge."*) 
            </p>

            <p>
              The amateur contractor brings the "Vendor Frame" (*"Please pick me, I will lower my price if you ask."*). When the Buyer Frame meets the Vendor Frame, the buyer always wins, and the contractor bleeds margin.
            </p>

            <p>
               The elite, 8-figure contractor brings the "Expert Frame" or "Doctor Frame." (*"I have specialized knowledge that you desperately need to solve a high-risk problem. My time is incredibly valuable, and I am evaluating whether or not you qualify to be my client."*) When the Expert Frame collides with the Buyer Frame, the buyer submits to the expert's authority, and price resistance evaporates.
            </p>

            <ul>
              <li>
                <Check className="text-[#3AAB43] absolute left-0 top-[6px]" />
                <strong>He Who Asks Questions Controls The Frame:</strong> If the client is asking you questions ("How long will this take?", "Why are you more expensive than the other guy?"), they are in control. Your sales script must be engineered to reverse the interrogator dynamic.
              </li>
              <li>
                <Check className="text-[#3AAB43] absolute left-0 top-[6px]" />
                <strong>Scarcity is Leverage:</strong> A contractor who is desperate for work telegraphs that desperation through body language, speed of speech, and willingness to discount. Authority requires a baseline willingness to walk away from a bad deal.
              </li>
              <li>
                <Check className="text-[#3AAB43] absolute left-0 top-[6px]" />
                <strong>Free Consulting is Weakness:</strong> If you spend 45 minutes walking around a property telling the client exactly how to fix their problem for free, they no longer need your expertise; they just need cheap labor to execute your free plan.
              </li>
            </ul>

            <div className="bg-[#fff5f5] p-[30px] rounded-[16px] mb-[40px] relative overflow-hidden group border border-[#ffebeb]">
              <XCircle className="absolute top-[-20%] right-[-10%] text-[10rem] text-[#ff0000] opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500" />
              <h4 className="text-[#d32f2f] font-bold mb-[15px] relative z-10 flex items-center gap-3">
                <AlertTriangle /> The "Wing It" Fallacy
              </h4>
               <p className="relative z-10 m-0 text-[#555]">
                Contractors constantly tell me, "I don't use scripts, I'm a natural people person. I just go out there and build a relationship." This is arrogant negligence. You are managing a multi-million dollar construction firm, not running a neighborhood barbecue. You wouldn't "wing" a structural foundation pour; you would follow the blueprints precisely. A sales script is the blueprint for the financial transaction. Refusing to use one guarantees inconsistent close rates and massive margin left on the table.
              </p>
            </div>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-2xl mt-12 mb-6">
              The "Doctor's Diagnosis" Script Framework
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              Stop performing "Free Estimates." Start performing "Structural Audits." The language you use entirely dictates the perceived value of your time. When you arrive at the project site, you must rip control away from the prospect gracefully but firmly.
            </p>

            <p>
               Here is the exact opening script framework to establish the Doctor Frame within the first two minutes:
            </p>

            <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
             <Image
                src="/images/blogs/contractor-sales-scripts/notebook.png"
                alt="A macro shot of a structured sales script flowchart on an iPad resting on blueprints."
                title="The Script is The Blueprint For Profit"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

            <h4>Phase 1: The Up-Front Contract (The Interruption)</h4>
            <p>
              Prospect: "Hey, thanks for coming out. Do you want me to just show you the backyard so you can give me a price?"
            </p>
            <p>
              <strong>Your Script:</strong> "John, great to meet you. Before we walk the property, let's take a step back. Usually, when I'm called out to a project of this magnitude, there are underlying structural or operational issues driving the timeline that aren't visible on the surface. If it's alright with you, I need to ask you some highly specific questions about the timeline, the budget allocations, and the ultimate goal you're trying to achieve before I even look at the site. Are you comfortable with that?"
            </p>
            <p>
              <em>Why this works:</em> You just rejected their offer to lead the tour. You demanded a sit-down conversation. You positioned your questions as deep, analytical requirements. You have taken the power position.
            </p>

            <h4>Phase 2: Pain Discovery (The Diagnosis)</h4>
            <p>
              Do not ask the client what they want; ask them what is hurting. If a commercial developer wants a warehouse retrofitted, do not ask them what color they want the epoxy floor. Ask them financial questions.
            </p>
             <ul className="mb-8">
               <li><strong>Your Script:</strong> "What happens to your Q3 logistics capacity if this retrofit is delayed by 45 days?"</li>
               <li><strong>Your Script:</strong> "I see you're requesting standard HVAC routing. Are you aware of the new Title 24 compliance liabilities kicking in next year? How are you mitigating that risk?"</li>
               <li><strong>Your Script:</strong> "Why now? You've owned this facility for four years. What is the financial urgency driving this capital expenditure today?"</li>
             </ul>
            <p>
              <em>Why this works:</em> You are forcing the prospect to articulate the financial consequences of their problem. You are no longer selling drywall and steel; you are selling risk mitigation and operational uptime. When they realize the problem is actually costing them $100,000 a month in inefficiency, your $400,000 bid suddenly looks like a bargain.
            </p>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-2xl mt-12 mb-6">
              Neutralizing The "Your Price is Too High" Objection
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              If a client tells you your price is too high, it does not mean they lack the money. It means your sales script failed to anchor the value against the risk of hiring a cheaper, incompetent alternative.
            </p>

            <p>
              When a prospect says, "I got a bid from another guy and he's 20% cheaper than you," an amateur contractor panics. They say, "Well, let me sharpen my pencil and see what I can do." (Translation: "My original price was a lie, and you just caught me.")
            </p>

            <p>
               An elite contractor leans into the objection and uses it to violently differentiate themselves from the commodity market.
            </p>
            
            <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] mt-8 rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
             <Image
                src="/images/blogs/contractor-sales-scripts/objection.png"
                alt="A tense boardroom moment where a high-end contractor calmly neutralizes a price objection."
                title="Hold The Line: Never Discount Due To Panic"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

            <h4>The "Risk Isolation" Script</h4>
            <p>
              <strong>Prospect:</strong> "Your bid came in at $1.2M. I have another firm offering to do it for $950k. I'd love to use you, but you need to come down on the price."
            </p>
            <p>
              <strong>Your Script:</strong> "John, I appreciate the transparency. I am never going to be the cheapest bid you receive on a project of this scale, and I want to explain exactly why that protects you. In commercial construction, a 20% price gap isn't a difference in overhead; it's a difference in scope omission. When a firm bids $950k on a $1.2M reality, they are either utilizing unlicensed sub-contractor labor, they are planning to hit you with $200k in aggressive change orders mid-project when you can't back out, or they simply lack the engineering competence to foresee the foundation issues we diagnosed in our audit. So, my question to you is: Are you looking for the cheapest initial piece of paper, or are you looking for absolute certainty that this facility opens on December 1st without a single legal or structural liability?"
            </p>

             <ul className="mb-6">
               <li>You did not apologize for your price.</li>
               <li>You framed the competitor's low price as a massive operational risk (which it usually is).</li>
               <li>You anchored your premium price to "absolute certainty" and "liability protection."</li>
            </ul>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-2xl mt-12 mb-6">
              The Infrastructure: Pre-Scripting With Digital Authority
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              Here is the ultimate secret of high-ticket sales: The most effective sales script in the world is useless if the prospect views you as an amateur before you even step onto their property.
            </p>

            <div className="bg-[#fff9e6] border-l-[5px] border-[#FED52B] p-[25px] rounded-r-[12px] mb-[40px] shadow-sm">
                <div className="flex items-start gap-[15px]">
                <div className="bg-[#FED52B]/20 p-[10px] rounded-full mt-1">
                  <Monitor className="text-[#d4ad00] text-[1.2rem]" />
                </div>
                <div>
                  <h4 className="text-[#1E3A1A] font-bold text-[1.1rem] m-0 mb-[5px]">Your Website is Your Pre-Script</h4>
                   <p className="m-0 text-[#555] text-[0.95rem] leading-[1.6]">
                    If a developer hits your website and it looks like it was built in 2012 by an intern—slow load times, broken imagery, no financial case studies—they have already anchored you as a "cheap commodity." When you show up to the meeting and attempt to use an authoritative script, cognitive dissonance occurs. Your physical presence does not match your digital reputation, and the deal dies.
                  </p>
                </div>
              </div>
            </div>

            <p>
              At Lemonade Ideas, we do not just build websites; we engineer omnipresent digital ecosystems that act as heavy artillery for your sales team. We build "The Pre-Script."
            </p>

             <ul className="mb-6">
               <li>Before you ever meet the client, they have already watched high-fidelity, drone-assisted case studies on your site proving your capacity for scale.</li>
               <li>They have already downloaded your meticulously designed "Commercial Project Preparedness Guide" (a lead magnet we build), establishing your firm as industry thought-leaders.</li>
               <li>They have already been routed through a sophisticated API form that demanded their budget parameters, filtering out the tire-kickers.</li>
            </ul>

             <h3 className="font-bold text-[#1E3A1A] relative inline-block text-2xl mt-12 mb-6">
               Final Verdict: Weaponize Your Presentation Now
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

             <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
             <Image
                src="/images/blogs/contractor-sales-scripts/revenue.png"
                alt="A firm handshake between an elite contractor and a real estate developer closing a massive project."
                title="The Closed Deal: When Authority Meets Opportunity"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

            <p>
             If your sales team is operating without rigid, ruthlessly tested contractor sales scripts, you are hemorrhaging money on every single consultation. Stop letting the prospect dictate the terms.
            </p>

            <p>
              When a property developer encounters an elite contractor who refuses to give a blind estimate—who instead demands a clinical, high-level analysis of the project's financial pain points—they immediately recognize an equal. They stop searching for the cheapest bid and start searching for the safest execution. That is when you command your premium margin. That is how you scale an 8-figure empire.
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
             Construct an Omnipresent Digital Foundation
            </h4>
             <p className="text-[#555] text-[1.1rem] mb-[30px] max-w-[600px] leading-[1.6]">
               Are you losing multi-million dollar contracts because your digital footprint paints you as a commodity? Lemonade Ideas architects absolute digital dominance for elite construction firms. We build the high-speed, conversion-optimized ecosystems that pre-frame your prospects, making your high-ticket sales scripts profoundly more effective.
            </p>
            
            <Link
              href="/contact"
              className="inline-block bg-[#FED52B] text-[#1E3A1A] font-bold text-[1.1rem] px-[40px] py-[18px] rounded-[50px] uppercase tracking-[1px] shadow-[0_10px_20px_rgba(254,213,43,0.3)] hover:shadow-[0_15px_25px_rgba(254,213,43,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
              Analyze My Infrastructure Now <ArrowRight className="ml-2" />
            </Link>

            <div className="flex gap-[15px] mt-[40px]">
              <a href="#" aria-label="Facebook" className="w-[45px] h-[45px] rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#666] hover:bg-[#1E3A1A] hover:text-white hover:border-[#1E3A1A] transition-colors"><Facebook /></a>
              <a href="#" aria-label="Instagram" className="w-[45px] h-[45px] rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#666] hover:bg-[#1E3A1A] hover:text-white hover:border-[#1E3A1A] transition-colors"><Instagram /></a>
              <a href="#" aria-label="YouTube" className="w-[45px] h-[45px] rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#666] hover:bg-[#ff0000] hover:text-white hover:border-[#ff0000] transition-colors"><Youtube /></a>
              <a href="#" aria-label="LinkedIn" className="w-[45px] h-[45px] rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#666] hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-colors"><Linkedin /></a>
            </div>
          </div>

        </article>
      </main>

      {/* DYNAMIC BLOG NAVIGATION */}
      <BlogNavigation currentSlug="contractor-sales-scripts" />

      <CTASection />
    </div>
  );
}
