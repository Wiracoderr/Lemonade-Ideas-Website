import React from "react";
import CTASection from "@/components/seo/CTASection";
import Link from "next/link";
import Image from "next/image";
import BlogNavigation from "@/components/blog/BlogNavigation";
import RelatedArticles from "@/components/blog/RelatedArticles";
import { Shield, Check, ArrowRight, AlertTriangle, Key, Facebook, Instagram, Youtube, Linkedin, Activity, Database, Target, TrendingUp, BarChart3, Zap } from 'lucide-react';

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
              <Target className="w-4 h-4" /> Revenue Architecture
            </span>
          </div>
          <h1 className="text-[2.2rem] md:text-[3.5rem] font-[Oswald] font-extrabold uppercase leading-[1.15] tracking-[0.5px] mb-[30px] text-[#ffffff] drop-shadow-lg">
            Construction Sales Funnel: The 5-Stage Revenue Machine That Converts Cold Prospects Into $5M Signed Contracts
          </h1>
          <div className="flex items-center justify-center gap-[20px] text-[0.95rem] font-medium text-[#c0c0c0]">
             <span className="flex items-center gap-[6px]">
              <Shield className="text-[#FED52B] text-[0.85rem]" />
              <span className="text-white font-semibold">Lemonade Ideas</span>
            </span>
            <span className="text-[#666]">|</span>
            <span className="flex items-center gap-[8px]">
              <Database className="text-[1.1em] text-[#FED52B]" />
              <span className="text-white">April 16, 2026</span>
            </span>
            <span className="text-[#666] hidden md:inline">|</span>
            <span className="hidden md:flex items-center gap-[8px]">
              <Activity className="text-[1.1em] text-[#FED52B]" />
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
              You don't have a sales problem. You have an architecture problem. The average general contractor receives an inbound inquiry — whether from a Google search, a referral, or a cold RFP — and then proceeds to improvise. Maybe they send a generic capabilities deck. Maybe they schedule a phone call that meanders for 45 minutes with no structure. Maybe they submit an estimate and then wait in silence for three weeks, hoping the prospect calls back. This isn't a sales process. It's a prayer. And prayer doesn't generate $50M annual backlogs. A systematically engineered sales funnel does. The firms consistently closing $5M+ commercial contracts aren't better builders — they're better architects of the buyer's decision journey. They've mapped every psychological stage a procurement director passes through, from initial awareness to signed contract, and they've placed precision-engineered conversion mechanisms at every transition point.
            </p>
          </div>

          <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
             <Image
                src="/images/blogs/construction-sales-funnel/hero.png"
                alt="A glass-walled corporate war room at night with a floor-to-ceiling digital dashboard displaying a sophisticated multi-stage sales funnel visualization glowing in green and gold."
                title="The Revenue Architecture Command Center"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

          <div className="prose prose-lg max-w-none text-[#444] text-justify prose-headings:font-['Oswald',sans-serif] prose-p:text-[1.1rem] prose-p:leading-[1.8] prose-p:mb-[30px] prose-a:text-[#3AAB43] hover:prose-a:text-[#1E3A1A] prose-strong:text-[#1E3A1A] prose-strong:font-bold prose-ul:list-none prose-ul:pl-0 prose-li:relative prose-li:pl-[28px] prose-li:mb-[15px]">
            
            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-8 mb-6 uppercase tracking-wide">
              Why Most Contractors Don't Have a Funnel
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              The construction industry has operated on handshake deals, word-of-mouth referrals, and relationship-based selling for over a century. And honestly, that worked — when the competitive landscape consisted of fifteen local firms and every developer already knew your superintendent by first name. But the market has changed structurally. Private equity has entered commercial construction. National firms are bidding on regional projects through digital pre-qualification platforms. Procurement has become formalized, data-driven, and process-oriented. The developer who hired you because your dads played golf together has been replaced by a VP of Capital Projects who manages a $400M portfolio and evaluates vendors through weighted scoring matrices.
            </p>

            <p>
              In this environment, the contractor without a systematic funnel is bringing a handshake to a data fight. You're competing against firms that have mapped their entire buyer journey, instrumented every touchpoint with conversion tracking, and can tell you — with mathematical precision — that their average prospect requires 7.3 touchpoints across 42 days before they request a formal proposal. These firms don't "hope" for deals. They engineer them.
            </p>

            <p>
              A construction sales funnel isn't a marketing gimmick borrowed from Silicon Valley. It's the formalization of something every successful GC already does intuitively — guiding a prospect from "I've never heard of you" to "Here's a $5M signed contract" through a deliberate sequence of trust-building interactions. The difference is that the intuitive approach is inconsistent, unmeasurable, and completely dependent on the personality of whoever answers the phone. A formal funnel is consistent, measurable, and scalable across your entire business development team.
            </p>

            <div className="bg-[#fff5f5] p-[30px] rounded-[16px] mb-[40px] relative overflow-hidden group border border-[#ffebeb]">
               <AlertTriangle className="absolute top-[-20%] right-[-10%] text-[10rem] text-[#ff0000] opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500" />
               <h4 className="text-[#d32f2f] font-bold mb-[15px] relative z-10 flex items-center gap-3 text-xl">
                 <Shield /> The "Estimate and Pray" Death Spiral
               </h4>
                <p className="relative z-10 m-0 text-[#555]">
                 The most destructive pattern in commercial construction sales is what we call the "Estimate and Pray" cycle. A prospect requests a bid. You spend 40+ hours assembling a detailed take-off, subcontractor quotes, and schedule. You submit a $3.2M proposal — and then you wait. No follow-up sequence. No nurture campaign. No strategic re-engagement. Just silence. Meanwhile, the prospect is actively comparing your bid with four other GCs who ARE following up systematically. Three weeks later, you learn you lost the project. Not because your price was wrong, but because the winning contractor maintained psychological proximity throughout the decision window while you vanished into the digital void.
               </p>
            </div>

            <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
             <Image
                src="/images/blogs/construction-sales-funnel/image-1.png"
                alt="An executive desk with an architectural blueprint partially unrolled alongside a laptop showing a CRM pipeline view with deal stages and dollar values, with a cup of black coffee."
                title="Pipeline Intelligence"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-12 mb-6 uppercase tracking-wide">
              Stage 1: Awareness — The First Digital Handshake
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              The top of your funnel is where cold prospects first encounter your brand. In 2026, this happens almost exclusively through digital channels: Google search results, LinkedIn content, industry publications, and occasionally paid advertising. The goal at this stage is singular — capture attention and establish initial credibility. You're not selling anything yet. You're simply making the prospect aware that your firm exists and that you possess a level of expertise worth investigating further.
            </p>

            <p>
              The awareness stage requires two categories of assets. First, you need discoverable content — blog articles, case studies, and thought leadership pieces that rank in search results for terms your ideal prospects are searching. When a property developer in Orange County searches "how to evaluate commercial general contractors," your comprehensive, 3,000-word guide should be the first result they encounter. Second, you need social proof assets — project photography, video testimonials, and industry certifications prominently displayed on your website — that immediately validate your firm's capabilities the moment a prospect lands on any page.
            </p>

            <p>
              The critical KPI at this stage is brand impression quality, not volume. Ten thousand website visitors from irrelevant searches are worth less than fifty visitors from procurement professionals actively researching GCs for a specific project. Your awareness content must be precision-targeted to attract only the caliber of prospect your firm is designed to serve. This means writing content that speaks in the language of institutional procurement — discussing GMP contracts, design-build delivery methods, preconstruction value engineering, and bonding capacity — not "5 things to look for in a contractor" listicles aimed at homeowners.
            </p>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-12 mb-6 uppercase tracking-wide">
              Stage 2: Interest — The Trust Acceleration Engine
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              Once a prospect is aware of your firm, the funnel's job is to convert passive awareness into active interest. This is where most contractors completely fail. They have a website that provides basic company information — an "About" page, a "Services" page, and a contact form — and then they wait for the prospect to make the first move. That's like building a showroom with no salespeople and expecting customers to write their own purchase orders.
            </p>

            <p>
              The interest stage requires what we call "trust acceleration assets." These are high-value resources that a prospect can consume to deepen their understanding of your firm's capabilities and approach. The most effective trust accelerators for commercial contractors include: detailed project case studies with quantified outcomes (not just pretty photos — actual data showing schedule adherence, budget performance, and client satisfaction metrics), downloadable capability statements formatted for institutional review, video walkthroughs of active or recently completed projects narrated by your project executive, and a regularly updated blog demonstrating deep industry expertise.
            </p>

            <div className="bg-[#f0f9ff] border-l-[5px] border-[#0077b5] p-[30px] rounded-r-[12px] mb-[40px] shadow-sm">
                <div className="flex items-start gap-[15px]">
                <div className="bg-[#0077b5]/20 p-[10px] rounded-full mt-1">
                  <Key className="text-[#005582] text-[1.2rem]" />
                </div>
                <div>
                  <h4 className="text-[#1E3A1A] font-bold text-[1.2rem] m-0 mb-[5px]">The Lead Magnet Mechanism</h4>
                   <p className="m-0 text-[#555] text-[1rem] leading-[1.6]">
                    The transition from awareness to interest must include a lead capture mechanism. For commercial construction, the highest-converting lead magnets are project-specific — a "Commercial Tenant Improvement Cost Estimator" calculator, a downloadable "Pre-Construction Planning Checklist for Property Developers," or an invitation to a quarterly "Market Conditions Briefing" webinar. These assets provide genuine value while simultaneously capturing contact information that feeds your CRM pipeline. The prospect receives actionable intelligence; you receive a qualified lead with explicit intent signals.
                  </p>
                </div>
              </div>
            </div>

            <p>
              Every trust acceleration asset must include a clear next step. A case study should end with an invitation to discuss a similar project. A capability statement should include a direct link to schedule a preconstruction consultation. A blog article should link to related service pages that move the prospect deeper into the funnel. Dead ends kill momentum. Every piece of content is a stepping stone, and every stepping stone must point toward the next one.
            </p>

            <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
             <Image
                src="/images/blogs/construction-sales-funnel/image-2.png"
                alt="A high-end corporate meeting between a construction executive and a property developer through a glass conference room wall, with documents and tablets visible on the table."
                title="The Strategic Engagement Session"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-12 mb-6 uppercase tracking-wide">
              Stage 3: Evaluation — The Competitive Elimination Round
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              This is the stage where your prospect is actively comparing you against two to four other general contractors. They've narrowed their shortlist and are now conducting deep due diligence. Every interaction during the evaluation stage is a high-stakes audition. The prospect is evaluating not just your price and capabilities, but your responsiveness, professionalism, communication quality, and cultural fit.
            </p>

            <p>
              The winning strategy during the evaluation stage is what we call "asymmetric information advantage." While your competitors are sending generic proposals and waiting for phone calls, you should be proactively delivering value that demonstrates exactly how you would perform during the actual project. This includes: a preliminary schedule analysis showing you've already thought through the project's critical path, a preconstruction risk assessment identifying potential cost or schedule threats the prospect hasn't considered, references from clients in the same industry vertical (not just general references — a healthcare developer wants to hear from other healthcare developers), and a transparent fee structure that demonstrates your firm's financial sophistication.
            </p>

            <ul>
               <li>
                 <Check className="text-[#3AAB43] absolute left-0 top-[6px]" />
                 <strong>Response Time Protocol:</strong> During the evaluation stage, response time is a proxy for project execution quality. If a prospect sends a follow-up question and receives a response in 4 hours versus 48 hours, they extrapolate that responsiveness to how your team would handle RFIs during construction. We implement automated CRM triggers that alert your BD team within 15 minutes of any prospect engagement — email opens, website visits, proposal downloads — so they can respond while the prospect's attention is still focused.
              </li>
              <li>
                 <Check className="text-[#3AAB43] absolute left-0 top-[6px]" />
                  <strong>Competitive Differentiation Framework:</strong> Every proposal must answer the prospect's unspoken question: "Why should I choose you over the other three GCs who submitted similar numbers?" Your differentiation must be specific and quantifiable — not "we provide great service" but "our projects have averaged 4.2% under GMP across 23 completed projects in the last 36 months, with zero liquidated damages claims."
              </li>
               <li>
                 <Check className="text-[#3AAB43] absolute left-0 top-[6px]" />
                  <strong>Stakeholder Mapping:</strong> In commercial construction deals, the person you're pitching is rarely the sole decision maker. There's typically a development partner, a lender representative, an architect, and sometimes legal counsel — all of whom have veto power. Your funnel must identify and address each stakeholder's specific concerns. The CFO cares about bonding capacity and financial stability. The architect cares about your VDC capabilities and willingness to collaborate. The developer cares about your track record with similar project types.
              </li>
            </ul>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-12 mb-6 uppercase tracking-wide">
              Stage 4: Decision — Engineering the Close
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              The decision stage is where deals are won or lost — and it's where the absence of a formal funnel is most catastrophic. The prospect has evaluated all their options. They have two or three "acceptable" contractors on their shortlist. The final decision often comes down to factors that have nothing to do with price: perceived risk, personal rapport with the project team, clarity of the proposed execution plan, and confidence that the contractor will actually deliver what they've promised.
            </p>

            <p>
              Your decision-stage strategy must eliminate perceived risk. Commercial construction clients are making commitments of $2M to $50M+ with a contractor they've known for weeks or months — not years. That's an enormous leap of faith. Your job is to reduce the size of that leap through systematic risk mitigation assets: a detailed preconstruction playbook showing exactly how you'll manage the first 90 days, a proposed preliminary schedule cross-referenced with your current workload to demonstrate available capacity, insurance and bonding documentation pre-assembled for their lender review, and an introduction to the actual project team who would be assigned — not your BD team, but the superintendent and project manager who will live on their jobsite for the next 18 months.
            </p>

            <p>
              The most powerful closing mechanism in commercial construction is what we call the "Reverse Risk Guarantee." Instead of asking the prospect to trust that you'll perform, you proactively identify the three biggest risks to their project and present a documented mitigation strategy for each. "Based on our analysis, the three risks to this project timeline are permitting delays with the municipality, steel procurement lead times, and weather impact during the foundation phase. Here's our specific protocol for managing each one." This transforms the conversation from "Should we hire this contractor?" to "This contractor has already started solving our problems."
            </p>

            <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
             <Image
                src="/images/blogs/construction-sales-funnel/image-3.png"
                alt="An overhead photograph of a dark executive desk with a matte black proposal folder, a high-end pen, a smartphone showing an email notification, and business cards."
                title="The Close — Contract Execution"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-12 mb-6 uppercase tracking-wide">
              Stage 5: Retention — The Hidden Revenue Multiplier
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              Most contractors treat a signed contract as the end of the sales process. Elite firms treat it as the beginning of the retention funnel — a systematized approach to transforming single-project clients into lifetime commercial relationships that generate repeat business, referrals, and case study content. The cost of acquiring a new commercial client through your entire funnel is substantial — estimated between $15,000 and $45,000 in total sales and marketing investment per closed deal. The cost of retaining an existing client who already trusts your firm? Nearly zero.
            </p>

            <p>
              Your retention funnel should include: a structured post-occupancy review conducted 6 months after project completion (this identifies any warranty items while simultaneously demonstrating ongoing commitment), quarterly "market conditions" updates sent to your client database that position your firm as a continued resource (not sales pitches — genuine market intelligence), and anniversary project celebrations that reinforce the relationship and create social media content opportunities. Every completed project should generate at minimum three deliverables for your funnel: a detailed case study with performance metrics, a video testimonial from the client, and a reference commitment for future prospect conversations.
            </p>

            <p>
              The math on retention is brutal in its simplicity. If your firm closes 8 new commercial clients per year at an average contract value of $4M, that's $32M in annual revenue. If your retention rate is 40% (meaning 40% of those clients hire you again within 3 years), that's an additional $12.8M in revenue that required almost zero sales investment. If your retention rate is 75% — which is achievable with a systematic retention funnel — that's $24M in repeat revenue. The difference between a 40% and 75% retention rate is $11.2M in annual revenue generated entirely through post-close relationship management that costs less than a single BD salary.
            </p>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-12 mb-6 uppercase tracking-wide">
              The Lemonade Standard: Revenue by Design
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              We don't build marketing campaigns. We architect revenue systems. The construction sales funnel we design for elite GCs is not a PowerPoint diagram — it's a living, instrumented, continuously optimized machine that operates across your website, CRM, email sequences, content library, and business development team. Every stage is measured. Every conversion point is tracked. Every leak is identified and repaired. The result is a predictable, scalable pipeline that removes the chaos from business development and replaces it with mathematical certainty.
            </p>

            <p>
              The contractors who partner with Lemonade Ideas don't wonder where their next project is coming from. They can look at their CRM dashboard and see exactly how many prospects are in each stage of the funnel, what the aggregate pipeline value is, what the projected close rate is based on historical data, and when each deal is expected to convert. That's not sales. That's engineering. And engineering is what your firm does best — so let's apply that same discipline to how you acquire revenue.
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
             Architect Your Revenue Machine
            </h4>
             <p className="text-[#555] text-[1.1rem] mb-[30px] max-w-[600px] leading-[1.6]">
               Stop improvising your sales process. Engineer a systematic pipeline that converts cold prospects into signed contracts. Book your strategic session below.
            </p>
            
            <Link
              href="/contact"
              className="inline-block bg-[#FED52B] text-[#1E3A1A] font-bold text-[1.1rem] px-[40px] py-[18px] rounded-[50px] uppercase tracking-[1px] shadow-[0_10px_20px_rgba(254,213,43,0.3)] hover:shadow-[0_15px_25px_rgba(254,213,43,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
              Build Your Funnel <ArrowRight className="ml-2 inline" />
            </Link>

            <div className="flex gap-[15px] mt-[40px]">
              <a href="https://facebook.com" className="w-[45px] h-[45px] rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#666] hover:bg-[#1E3A1A] hover:text-white hover:border-[#1E3A1A] transition-colors"><Facebook /></a>
              <a href="https://instagram.com" className="w-[45px] h-[45px] rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#666] hover:bg-[#1E3A1A] hover:text-white hover:border-[#1E3A1A] transition-colors"><Instagram /></a>
              <a href="https://youtube.com" className="w-[45px] h-[45px] rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#666] hover:bg-[#ff0000] hover:text-white hover:border-[#ff0000] transition-colors"><Youtube /></a>
              <a href="https://linkedin.com" className="w-[45px] h-[45px] rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#666] hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-colors"><Linkedin /></a>
            </div>
          </div>

          <RelatedArticles
            currentSlug="construction-sales-funnel"
            relatedSlugs={[
              "pipeline-velocity-builders",
              "high-ticket-closing",
              "lead-qualification-process",
              "construction-crm-setup"
            ]}
          />

        </article>
      </main>
      <BlogNavigation currentSlug="construction-sales-funnel" />
      <CTASection />
    </div>
  );
}
