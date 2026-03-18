import React from "react";
import CTASection from "@/components/seo/CTASection";
import Link from "next/link";
import Image from "next/image";
import BlogNavigation from "@/components/blog/BlogNavigation";
import { Zap, Calendar, Clock, XCircle, AlertTriangle, X, Check, Lightbulb, ArrowRight, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

export default function BlogPost() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-['Poppins',sans-serif]">
      

      {/* 1. High-Impact Hero Section */}
      <section className="bg-[#2A2A2A] relative pt-[120px] pb-[80px] md:pt-[160px] md:pb-[100px] text-center px-4 md:px-[20px] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[150%] bg-[#3AAB43] blur-[120px] rounded-full rotate-45"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[120%] bg-[#FED52B] blur-[150px] rounded-full"></div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[900px]">
          <div className="inline-block mb-[20px] px-[15px] py-[6px] bg-[#3AAB43]/20 border border-[#3AAB43]/30 rounded-full">
            <span className="text-[#3AAB43] font-bold text-[0.85rem] tracking-[1px] uppercase">
              Brand Authority
            </span>
          </div>
          <h1 className="text-[2.2rem] md:text-[3.5rem] font-[Oswald] font-extrabold uppercase leading-[1.15] tracking-[0.5px] mb-[30px] text-[#ffffff] drop-shadow-lg">
            Beyond the Highlight Reel: Why B2B Construction Case Studies Actually Close Deals
          </h1>
          <div className="flex items-center justify-center gap-[20px] text-[0.95rem] font-medium text-[#c0c0c0]">
            <span className="flex items-center gap-[6px]">
              <Zap className="text-[#FED52B] text-[0.85rem]" />
              <span className="text-white font-semibold">Lemonade Ideas</span>
            </span>
            <span className="text-[#666]">|</span>
            <span className="flex items-center gap-[8px]">
              <Calendar className="text-[1.1em] text-[#FED52B]" />
              <span className="text-white">March 14, 2026</span>
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
              You don&apos;t lose $2 million commercial bids on price. You lose them on perceived risk. When a property manager or corporate stakeholder evaluates a stack of seemingly identical proposals, they aren&apos;t looking for the cheapest option—they&apos;re desperately searching for the safest one. The only way to mathematically eliminate that perceived risk is by handing them a meticulously structured construction case study.
            </p>
          </div>

          <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group">
            <Image
              src="/images/blogs/construction-case-studies/hero.png"
              alt="A sharp, high-resolution premium construction case study portfolio on a dark oak desk next to architect tools"
              title="A premium B2B construction case study acting as a heavy sales asset"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

          <div className="prose prose-lg max-w-none text-[#444] text-justify prose-headings:font-['Oswald',sans-serif] prose-p:text-[1.1rem] prose-p:leading-[1.8] prose-p:mb-[30px] prose-a:text-[#3AAB43] hover:prose-a:text-[#1E3A1A] prose-strong:text-[#1E3A1A] prose-strong:font-bold prose-ul:list-none prose-ul:pl-0 prose-li:relative prose-li:pl-[28px] prose-li:mb-[15px]">
            
            <p>
              I&apos;ve always felt that the construction industry fundamentally misunderstands what constitutes a "case study." Most contractors open up their WordPress backend, dump twelve iPhone photos of a finished corporate lobby, type a two-sentence caption like "Great job at the Smith building," and call it a day. 
            </p>

            <p>
              Does that sound familiar? It should, because 95% of your competitors are doing the exact same thing. But here&apos;s the kicker: commercial buyers do not care about your finished lobby photos. They care about how painful it was for the client to get that lobby built. They care if you stayed on budget. They care if you managed the supply chain delays effectively without driving the property manager insane.
            </p>

            <p>
              When an enterprise stakeholder reviews a bid, they are essentially buying peace of mind. A proper B2B construction case study is a psychological weapon designed to systematically disarm their objections before they even step into a sales call. We need to stop treating case studies as "portfolio galleries" and start treating them as your highest ROI sales assets.
            </p>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-2xl mt-12 mb-6">
              The Problem with the "Before & After" Trap
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              Look at a typical general contractor&apos;s website. You&apos;ll see a page titled "Our Work" featuring a slick slider comparing a gutted room to a finished room. It&apos;s visually appealing, sure. It validates that your crew physically knows how to install drywall and hang pendant lighting.
            </p>

            <p>
              Anyway, here is why that doesn&apos;t move the needle for a high-net-worth commercial buyer: it skips the entire journey.
            </p>

            <p>
              A $50,000 bathroom remodel homeowner might buy off a pretty picture. A $4.5 million commercial tilt-up client will not. The commercial buyer knows that the finished product is the absolute baseline expectation. What keeps that buyer awake at 3:00 AM isn&apos;t whether the concrete will cure—it&apos;s whether the electrical subcontractor is going to flake out, causing a massive delay that prevents their retail tenant from opening before Black Friday. 
            </p>

            <p>
              If your marketing only shows the end result, you are actively failing to answer the buyer&apos;s core anxiety. You&apos;re forcing them to assume that your project management process is fraught with the same exact friction they experienced with the last contractor they hired. You have to lift the hood and show them the engine.
            </p>

            <div className="bg-[#fff5f5] p-[30px] rounded-[16px] mb-[40px] relative overflow-hidden group border border-[#ffebeb]">
              <XCircle className="absolute top-[-20%] right-[-10%] text-[10rem] text-[#ff0000] opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500" />
              <h4 className="text-[#d32f2f] font-bold mb-[15px] relative z-10 flex items-center gap-3">
                <AlertTriangle /> The Fatal Flaw
              </h4>
              <p className="relative z-10 m-0 text-[#555]">
                When you only publish a gallery of completed photos, you instantly commoditize your business. The buyer looks at your photos, looks at your competitor&apos;s identical photos, and defaults to making their decision based entirely on whoever submitted the lowest bid. You give them nothing else to judge you on.
              </p>
            </div>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-2xl mt-12 mb-6">
              The Anatomy of a High-Ticket Construction Case Study
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <div className="relative w-full h-[350px] md:h-[400px] my-[40px] rounded-[16px] overflow-hidden shadow-md border border-gray-100 group">
                <Image
                  src="/images/blogs/construction-case-studies/executives.png"
                  alt="Construction executives wearing white hardhats reviewing an iPad graph metric on a commercial site"
                  title="Construction project managers reviewing data on an active commercial job site"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 800px"
                  loading="lazy"
                />
            </div>

            <p>
              If we want to build a marketing asset that justifies a 15% price premium over the localized competition, we need to structure the narrative correctly. We have to tell a very specific story. Personally, I think every case study must follow the "Hero&apos;s Journey" framework. 
            </p>

            <p>
              And to be absolutely clear: you are not the hero of the story. Your client is the hero. Your construction firm is Yoda. You are the invisible, highly competent guide who gave them the tools to survive the project.
            </p>

            <p>
              Here is the exact framework to structure your case studies.
            </p>

            <h4 className="text-[#1E3A1A] font-bold mt-8 mb-[10px] text-[1.2rem]">1. The Strategic Headline</h4>
            <p>
              Stop naming your case studies after the address. "123 Main Street Reno" is a terrible title. Your headline needs to clearly state the industry, the specific problem, and the quantifiable outcome.
            </p>
            <ul>
              <li><X className="text-red-500 absolute left-0 top-[6px]" /> <strong>Weak:</strong> The TechCorp Office Buildout</li>
              <li><Check className="text-[#3AAB43] absolute left-0 top-[6px]" /> <strong>Strong:</strong> How We Delivered TechCorp&apos;s 40,000 Sq Ft Headquarters 3 Weeks Early Despite Global Supply Chain Bottlenecks</li>
            </ul>

            <h4 className="text-[#1E3A1A] font-bold mt-8 mb-[10px] text-[1.2rem]">2. The Agonizing Challenge</h4>
            <p>
              This is where the magic happens. Before you say a single word about drywall or steel beams, you have to describe the business pain your client was in. Why did they hire you? Did their previous contractor abandon the job halfway? Were they facing a hard deadline to move out of their old lease, putting them at risk of losing $100,000 a month in operational downtime?
            </p>
            <p>
              The more vivid and agonizing you make the initial challenge sound, the more valuable your solution becomes by contrast. When a prospective client reads the challenge section, they should ideally nod their head and think, <em>"Wow, that is exactly the nightmare scenario I am terrified of experiencing."</em>
            </p>

            <h4 className="text-[#1E3A1A] font-bold mt-8 mb-[10px] text-[1.2rem]">3. The Methodology (The Invisible Work)</h4>
            <p>
              This is not a list of materials used. This section is where you demonstrate your operational superiority. How did you communicate with the client? What specific software (Procore, Buildertrend) did you use to give them daily transparency? 
            </p>
            <p>
              Did you find black mold behind a wall on day three? Don&apos;t hide it. Expose it. Talk about how your incredibly agile project management team identified the mold, immediately halted framing, safely removed it over a weekend, and still managed to keep the master schedule entirely intact. Real buyers don&apos;t expect perfection. They expect professional problem-solving when chaos inevitably strikes. Demonstrating how you navigate issues builds infinitely more trust than pretending everything went flawlessly.
            </p>

            <div className="bg-[#fff9e6] border-l-[5px] border-[#FED52B] p-[25px] rounded-r-[12px] mb-[40px] shadow-sm mt-8">
              <div className="flex items-start gap-[15px]">
                <div className="bg-[#FED52B]/20 p-[10px] rounded-full mt-1">
                  <Lightbulb className="text-[#d4ad00] text-[1.2rem]" />
                </div>
                <div>
                  <h4 className="text-[#1E3A1A] font-bold text-[1.1rem] m-0 mb-[5px]">The 2,500+ Word Commitment</h4>
                  <p className="m-0 text-[#555] text-[0.95rem] leading-[1.6]">
                    You simply cannot convey this level of complex project methodology in a 400-word blurb. The highest converting case studies are deeply immersive, often crossing the 2,500 word threshold. They act as whitepapers. The more detail you provide about your problem-solving capabilities, the more an enterprise client trusts you with an 8-figure budget. They want to read the specifics.
                  </p>
                </div>
              </div>
            </div>

            <h4 className="text-[#1E3A1A] font-bold mt-8 mb-[10px] text-[1.2rem]">4. The ROI and Financial Impact</h4>
            <p>
              Never close a case study simply by saying the client was "happy." You must translate the operational success into financial data. 
            </p>
            <p>
              If you got a restaurant open two weeks ahead of schedule, that isn&apos;t just "good timing." That is two extra weeks of gross revenue for the franchise owner. Do the math. Explicitly state: <em>"By compressing the construction timeline by 14 days, the client was able to generate an estimated $120,000 in early operational revenue."</em>
            </p>
            <p>
              Plus, if you value-engineered a HVAC solution that saved them a quarter million dollars on the initial estimate, highlight that. Speak the language of the CFO, not just the language of the architect.
            </p>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-2xl mt-12 mb-6">
              Strategic Client Selection: Who Do You Interview?
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <div className="relative w-full h-[350px] md:h-[400px] my-[40px] rounded-[16px] overflow-hidden shadow-md border border-gray-100 group">
                <Image
                  src="/images/blogs/construction-case-studies/blueprints.png"
                  alt="A high-end matte black presentation folder sitting entirely on top of commercial architectural blueprints"
                  title="Presenting commercial construction data over complex project blueprints"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 800px"
                  loading="lazy"
                />
            </div>

            <p>
              Not every successful project deserves a 2,500-word deep dive. Writing these assets requires serious time and capital, so you must select your subjects with hyper-focused precision. 
            </p>

            <p>
              Look into your internal CRM and ask yourself: what specific type of project do we want to build exactly ten more of next year? If your goal is to break into healthcare facility construction, do not write a case study about the coffee shop you built. Write the case study about the small dental clinic you renovated, and blow it completely out of proportion.
            </p>

            <p>
              You need to physically schedule an interview with the client. Send them the questions in advance, hop on a Zoom call, hit record, and let them talk. Often, the client will identify pain points and value drivers that your internal project managers missed completely. 
            </p>

            <p>
              Ask them questions like:
            </p>
            <ul>
              <li><Check className="text-[#3AAB43] absolute left-0 top-[6px]" /> What was your absolute biggest fear before hiring us?</li>
              <li><Check className="text-[#3AAB43] absolute left-0 top-[6px]" /> Was there a specific moment during construction where you realized you made the right choice?</li>
              <li><Check className="text-[#3AAB43] absolute left-0 top-[6px]" /> How has the new space tangibly impacted your business operations?</li>
            </ul>
            <p>
              Take their exact transcriptions and weave them densely throughout the article as pull-quotes. Nothing builds trust faster than a high-status client verifying your claims in their own native vocabulary.
            </p>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-2xl mt-12 mb-6">
              Integrating Video: The Ultimate Trust Accelerator
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              While a 2,500-word written document is non-negotiable for appeasing the analytical, numbers-driven corporate buyer (usually the CFO or procurement director), you have to cater to the emotional buyer as well. That is where video integration comes into play.
            </p>

            <p>
              But here's the kicker: I am not talking about a drone montage set to generic corporate rock music. I am entirely referring to a highly structured, emotionally resonant documentary-style interview with the client. Video proves that the person giving the testimonial is a real, breathing executive who is genuinely thrilled with your work.
            </p>

            <p>
              When a property manager watches a two-minute clip of a fellow property manager explaining how your superintendents maintained an impeccably clean site and communicated daily, their psychological barrier drops instantly. They think, <em>"If these guys took care of him like that, they'll take care of me too."</em> You should embed this video directly at the top of the written case study. 
            </p>

            <p>
              If your client agrees to a written interview, always push for a video interview on the same day. Hire a local videographer for a few hours. It will cost you $1,500. When that video helps you close a $3.2 million contract the following quarter, that $1,500 expenditure becomes the highest ROI investment your marketing department has ever made. Anyway, don't overcomplicate the production. Just get them on camera speaking their truth.
            </p>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-2xl mt-12 mb-6">
              How to Train Your Project Managers to Spot Case Study Gold
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              One of the biggest bottlenecks construction firms face when trying to build these assets is a complete disconnect between the marketing department and the actual job site. The marketing coordinator, sitting in a comfortable office, has no idea that the framing crew just executed a miraculous architectural workaround on Tuesday afternoon. 
            </p>

            <p>
              Does that sound familiar? The solution is to turn your Project Managers and Superintendents into forward-deployed storytellers.
            </p>

            <p>
              You don't need them to write the marketing copy. You just need them to capture the raw data. Implement a mandatory "Friday Win" protocol. Every Friday afternoon, every PM must upload one high-quality smartphone photo of a complex detail or a resolved issue, accompanied by a two-sentence explanation in a shared Slack channel or Procore directory. 
            </p>

            <p>
              Over a six-month commercial build, this protocol generates an absolute treasure trove of highly specific, technical problem-solving data. When the project finishes, the marketing team doesn't have to scramble to remember what happened; they just pull the timeline of Friday Wins.
            </p>

            <p>
              Plus, this fundamentally changes the culture of your field teams. When superintendents know that their ingenious on-the-fly problem solving is being documented and used to win future multi-million dollar deals, their pride of ownership skyrockets. They stop seeing themselves as just builders and start seeing themselves as vital revenue generators for the enterprise.
            </p>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-2xl mt-12 mb-6">
              The Architecture of The "Before, During, and After" Narrative
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              I can't stress this enough: the middle phase—the "During"—is where you actively differentiate your brand. Anyone can take a picture of an empty lot (the Before) and a finished luxury retail storefront (the After). However, it takes supreme operational confidence to document the messy, chaotic middle and show exactly how you controlled it.
            </p>

            <p>
              When writing the "During" phase, focus heavily on your proprietary systems. Did you utilize 3D BIM modeling to clash-detect the HVAC ductwork against the structural steel before a single piece of metal was ordered? If so, feature a screenshot of that 3D model right in the case study. Explain how that single hour of virtual modeling prevented a $40,000 mistake and a three-week delay in the field.
            </p>

            <p>
              Showcase your safety protocols. Upload a photo of your pristine, perfectly organized job site with clearly marked walking paths and harnessed workers. A clean job site screams "competence" to a high-end commercial developer. It silently communicates that if you care this much about sweeping the floors and stacking the lumber, you definitely care about the structural integrity of the foundation.
            </p>
            
            <p>
              By heavily over-indexing on the "During" phase, you force the prospective buyer to compare your organized, highly-communicative process against the chaotic, completely silent process they usually experience with your competitors. You make the competitor's silence deafening.
            </p>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-2xl mt-12 mb-6">
              Distributing the Asset for Maximum Pipeline Velocity
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <div className="relative w-full h-[350px] md:h-[400px] my-[40px] rounded-[16px] overflow-hidden shadow-md border border-gray-100 group">
                <Image
                  src="/images/blogs/construction-case-studies/boardroom.png"
                  alt="Glass-walled boardroom with screen glowing a bar chart labeled Project ROI for construction marketing"
                  title="Presenting ROI metrics to executives for a premium construction contract"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 800px"
                  loading="lazy"
                />
            </div>

            <p>
              A beautifully crafted case study sitting passively on your website's hidden sub-menu is utterly useless. A case study is an active weapon. You have to aggressively inject it into your sales pipeline.
            </p>

            <p>
              The bottom line here is distribution. Once the case study is finalized on your website, you must atomize it and deploy it across every single touchpoint.
            </p>

            <p>
              <strong>1. The Pre-Meeting Shock and Awe:</strong> When a prospective commercial client books an initial consultation with your estimating team, do not just send a calendar invite. Set up an automated CRM trigger that immediately emails them a PDF version of your most relevant case study.
            </p>
            <p>
              The email should read: <em>"Looking forward to our meeting on Tuesday to discuss your corporate buildout. In the meantime, I&apos;ve attached a brief case study detailing how we recently completed a very similar 40,000 sq ft project two weeks ahead of schedule for [Brand Name]. Give it a quick read so you understand how our project management team operates under pressure."</em>
            </p>
            <p>
              By the time they jump on the Zoom call, they are no longer treating you as a vendor. They are treating you as an established expert. The power dynamic shifts entirely in your favor.
            </p>

            <p>
              <strong>2. LinkedIn Omnipresence for B2B Development:</strong> Your business development team needs to slice the 2,500-word case study into five separate, highly targeted LinkedIn posts. 
            </p>
            <p>
              One post strictly discusses how you handled the supply chain delay. Another post highlights the pull-quote from the happy CEO. Tag the client's company. Tag the architects you collaborated with. You aren&apos;t just proving your worth to the prospect; you&apos;re proving your worth to the entire localized commercial real estate network online.
            </p>

            <p>
              <strong>3. Retargeting Ad Fuel:</strong> When a user visits your website&apos;s "Services" page but fails to fill out a contact form, they are actively researching contractors. Hit them with a Meta or Google display ad retargeting campaign. But don&apos;t serve them a generic ad saying "Call us for a free quote." Serve them a graphic linking directly to the case study with the headline: <em>"See how we saved CommercialCorp $250k on their tenant finish."</em> 
            </p>
            <p>
              You are dragging them back into your ecosystem not through brute-force sales tactics, but through undeniable, documented competence.
            </p>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-2xl mt-12 mb-6">
              The Math Always Wins: Escape the Commodity Trap
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              Ultimately, relying on shared lead services or outdated rolodex networking forces you to play a volume game. You are submitting random bids, crossing your fingers, and hoping the client doesn&apos;t just default to the cheapest subcontractor in the stack. 
            </p>

            <p>
              Building dense, highly psychological case studies requires an upfront investment of time and strategy. I won't pretend it's easy. It requires extracting the actual data, interviewing busy clients, writing thousands of compelling words, and formatting it all smoothly into your digital infrastructure. 
            </p>

            <p>
              But what is the alternative? The alternative is spending the next ten years trying to shave pennies off your margins to win projects from clients who don't actually respect your operational expertise.
            </p>

            <p>
              A premium case study proves that you don&apos;t just build things. You solve deeply complex, high-stakes business problems using construction as the medium. When you reposition your brand identity around that fundamental truth, the conversation immediately shifts away from "How much does it cost?" to "When can your team start?"
            </p>
          </div>

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
              Stop Bidding. Start Positioning.
            </h4>
            <p className="text-[#555] text-[1.1rem] mb-[30px] max-w-[600px] leading-[1.6]">
              If you want to stop competing on price and start commanding premium margins by weaponizing your past successes, we need to completely overhaul your digital assets. Let's architect a proper B2B engine.
            </p>
            
            <Link
              href="/contact"
              className="inline-block bg-[#FED52B] text-[#1E3A1A] font-bold text-[1.1rem] px-[40px] py-[18px] rounded-[50px] uppercase tracking-[1px] shadow-[0_10px_20px_rgba(254,213,43,0.3)] hover:shadow-[0_15px_25px_rgba(254,213,43,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
              Request a Strategy Session <ArrowRight className="ml-2" />
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
      <BlogNavigation currentSlug="construction-case-studies" />

      <CTASection />
    </div>
  );
}
