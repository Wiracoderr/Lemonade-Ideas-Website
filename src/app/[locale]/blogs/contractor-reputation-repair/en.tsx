import React from "react";
import CTASection from "@/components/seo/CTASection";
import Link from "next/link";
import Image from "next/image";
import BlogNavigation from "@/components/blog/BlogNavigation";
import { Shield, ArrowRight, Facebook, Instagram, Youtube, Linkedin, Activity, Database, AlertTriangle, Key, Search, AlertOctagon, CheckCircle2, ShieldCheck, Siren, Wrench, TrendingUp, Scale } from 'lucide-react';

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
              <Wrench className="w-4 h-4" /> Reputation Reconstruction
            </span>
          </div>
          <h1 className="text-[2.2rem] md:text-[3.5rem] font-[Oswald] font-extrabold uppercase leading-[1.15] tracking-[0.5px] mb-[30px] text-[#ffffff] drop-shadow-lg">
            Contractor Reputation Repair: The Institutional-Grade Playbook for Rebuilding Digital Authority After a Crisis
          </h1>
          <div className="flex items-center justify-center gap-[20px] text-[0.95rem] font-medium text-[#c0c0c0]">
            <span className="flex items-center gap-[6px]">
              <Shield className="text-[#FED52B] text-[0.85rem]" />
              <span className="text-white font-semibold">Lemonade Ideas</span>
            </span>
            <span className="text-[#666]">|</span>
            <span className="flex items-center gap-[8px]">
              <Database className="text-[1.1em] text-[#FED52B]" />
              <span className="text-white">April 10, 2026</span>
            </span>
            <span className="text-[#666] hidden md:inline">|</span>
            <span className="hidden md:flex items-center gap-[8px]">
              <Activity className="text-[1.1em] text-[#FED52B]" />
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
              A commercial contractor's reputation is not a soft asset. It is the single most consequential variable in the procurement evaluation equation. When that reputation sustains catastrophic damage—a viral safety incident, a cluster of aggressive negative reviews, a public dispute with a major client, or a regulatory enforcement action—the digital wreckage persists indefinitely. The algorithm does not forgive. It does not forget. And every day that passes without systematic repair operations, the gap between your firm and your competitors widens into a chasm that no amount of operational excellence can bridge.
            </p>
          </div>

          <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
            <Image
              src="/images/blogs/contractor-reputation-repair/hero.png"
              alt="Construction crane silhouetted against a moody sky with a digital reputation score overlay rising from red to green"
              title="The Reputation Reconstruction Command"
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

          <div className="prose prose-lg max-w-none text-[#444] text-justify prose-headings:font-['Oswald',sans-serif] prose-p:text-[1.1rem] prose-p:leading-[1.8] prose-p:mb-[30px] prose-a:text-[#3AAB43] hover:prose-a:text-[#1E3A1A] prose-strong:text-[#1E3A1A] prose-strong:font-bold prose-ul:list-none prose-ul:pl-0 prose-li:relative prose-li:pl-[28px] prose-li:mb-[15px]">

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-8 mb-6 uppercase tracking-wide">
              The Anatomy of Reputational Catastrophe
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              Reputational damage for a commercial contractor does not follow the gradual erosion model that most businesses experience. It detonates. A subcontractor files a public lien and posts the documentation across construction industry forums. A former project manager leaves the firm and publishes a series of detailed one-star reviews across Google, Yelp, and The Blue Book, alleging systemic safety violations and payment disputes. A local news station runs a segment about a project delay that names your firm and includes interviews with frustrated municipal officials. A regulatory agency publishes a citation on a publicly searchable database.
            </p>

            <p>
              Each of these events creates a permanent digital artifact that the Google algorithm indexes, weights, and serves to every person who searches for your firm's name for years to come. The half-life of a negative news article on Google is effectively infinite. A Yelp review from 2019 will still appear on the first page of results for your firm's name in 2026. A CSLB citation from five years ago will still surface in the "About this business" section of your Google Business Profile. The internet has a perfect, merciless memory, and the algorithm's ranking system is specifically designed to amplify negative signals about businesses that it classifies as potentially untrustworthy.
            </p>

            <div className="bg-[#fff5f5] p-[30px] rounded-[16px] mb-[40px] relative overflow-hidden group border border-[#ffebeb]">
              <AlertOctagon className="absolute top-[-20%] right-[-10%] text-[10rem] text-[#ff0000] opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500" />
              <h4 className="text-[#d32f2f] font-bold mb-[15px] relative z-10 flex items-center gap-3 text-xl">
                <Siren /> The Compounding Effect
              </h4>
              <p className="relative z-10 m-0 text-[#555]">
                Reputational damage compounds algorithmically. When your Google Business Profile drops from 4.7 to 3.2 stars after a review attack, Google reduces your local search visibility. Reduced visibility means fewer new clients, which means fewer new positive reviews, which means your rating stagnates at 3.2 indefinitely. Meanwhile, competitors with clean profiles absorb the search volume you lost, generating more positive reviews and widening the gap. Without active intervention, this death spiral is permanent.
              </p>
            </div>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-12 mb-6 uppercase tracking-wide">
              Phase 1: The Forensic Assessment
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              Before any repair work can begin, you need a comprehensive, objective forensic assessment of the total damage landscape. This is not a casual scroll through your Google reviews. It is a systematic audit of every digital surface where your firm's reputation is visible, scored, or indexed. The assessment encompasses your Google Business Profile and its complete review history, your Yelp business page, your Facebook reviews, your Better Business Bureau profile and complaint history, your CSLB license status page, The Blue Book listing, Procore directory page, ENR contractor registry, Dodge project database, local Chamber of Commerce profiles, and a full Google SERP analysis of branded search results for your firm's name across the first three pages.
            </p>

            <p>
              The forensic assessment quantifies the damage across three dimensions: review profile damage (star ratings, negative review count and recency, response rate), search result contamination (negative articles, forum posts, complaint board listings appearing on branded searches), and directory authority erosion (outdated information, duplicate listings, negative indicators on industry-specific platforms). Each dimension receives a severity score that determines the prioritization and intensity of the repair campaign.
            </p>

            <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
              <Image
                src="/images/blogs/contractor-reputation-repair/image-1.png"
                alt="Professional crisis management team reviewing reputation audit reports with red warning highlights in a dark boardroom"
                title="The Forensic Crisis Assessment"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
            </div>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-12 mb-6 uppercase tracking-wide">
              Phase 2: Aggressive Review Profile Reconstruction
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              The most visible component of contractor reputation repair is reconstructing the review profile on your Google Business Profile. This operates on two parallel tracks: suppression of illegitimate negative content and acceleration of authentic positive review velocity. The suppression track targets every negative review that violates Google's content policies—reviews posted by non-customers, reviews containing defamatory language, reviews clearly posted by competitors or personal grudge holders, and reviews referencing events that demonstrably did not occur. Each flagging submission is accompanied by documented evidence, sworn declarations, and detailed policy violation citations.
            </p>

            <p>
              Simultaneously, the velocity track deploys a structured campaign to systematically solicit authentic reviews from your satisfied commercial clients. But this is not a mass email blast asking for generic five-star reviews. Each solicitation is personalized, timed to coincide with positive project milestones (successful inspections, on-time deliveries, punch list completion), and includes specific guidance encouraging the reviewer to mention the project type, geographic location, and the specific value your firm delivered. This structured approach yields reviews that carry significant algorithmic weight because they contain the specific semantic signals—commercial construction keywords, geographic markers, project-type identifiers—that reinforce your authority in the exact search categories where you need to recover visibility.
            </p>

            <div className="bg-[#f0f9ff] border-l-[5px] border-[#0077b5] p-[30px] rounded-r-[12px] mb-[40px] shadow-sm">
              <div className="flex items-start gap-[15px]">
                <div className="bg-[#0077b5]/20 p-[10px] rounded-full mt-1">
                  <Key className="text-[#005582] text-[1.2rem]" />
                </div>
                <div>
                  <h4 className="text-[#1E3A1A] font-bold text-[1.2rem] m-0 mb-[10px]">Review Reconstruction Timeline</h4>
                  <ul className="m-0 mt-[10px] space-y-[10px] text-[#555] text-[1rem] leading-[1.6]">
                    <li className="flex items-start gap-3"><CheckCircle2 className="text-[#005582] mt-1 shrink-0 w-4 h-4" /><span><strong>Weeks 1–4:</strong> Flag all policy-violating reviews. Respond strategically to every existing negative review using the 4-Principle Protocol. Begin outreach to recent satisfied clients.</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="text-[#005582] mt-1 shrink-0 w-4 h-4" /><span><strong>Weeks 5–12:</strong> Sustain review velocity at 8–12 new authentic reviews per month. Monitor flagging outcomes and re-submit where necessary. Initial star rating recovery begins.</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="text-[#005582] mt-1 shrink-0 w-4 h-4" /><span><strong>Weeks 13–24:</strong> Transition from crisis recovery to maintenance velocity. Star rating should be approaching pre-crisis levels. Negative reviews are now visually buried beneath months of positive content.</span></li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-12 mb-6 uppercase tracking-wide">
              Phase 3: Search Result Decontamination
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              When a potential client Googles your firm's name, the first page of results determines their initial perception. If that first page includes a negative news article, a complaint board listing, or a forum thread detailing a dispute, your firm has already lost the evaluation before any human interaction occurs. Search result decontamination is the process of systematically pushing negative content off the first page of branded search results by creating and optimizing a constellation of high-authority, positive-signal digital assets that outrank the negative content.
            </p>

            <p>
              This strategy—known as Online Reputation Management (ORM) content suppression—involves creating or optimizing profiles on platforms that Google inherently trusts and ranks highly: LinkedIn corporate pages, Crunchbase profiles, industry association membership pages, press releases distributed through high-authority wire services, authored articles on industry publications, optimized social media profiles, and a strategically structured company blog producing keyword-rich content about your completed commercial projects. Each of these assets is optimized to rank for your firm's branded search terms, progressively displacing negative content from page one to page two, where fewer than 5% of searchers ever look.
            </p>

            <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
              <Image
                src="/images/blogs/contractor-reputation-repair/image-2.png"
                alt="Laptop on a dark concrete desk showing a Google Business Profile with a 4.8 star rating surrounded by architectural blueprints"
                title="The Recovered Profile"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
            </div>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-12 mb-6 uppercase tracking-wide">
              Phase 4: Directory Authority Rebuilding
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              The third pillar of contractor reputation repair addresses the industry-specific directory ecosystem that institutional buyers consult during their vendor evaluation process. When your firm experienced its reputational crisis, the ripple effects likely contaminated your profiles across The Blue Book, Procore, Dodge, ENR, and regional association directories. Some of these platforms may have received their own negative reviews or complaint submissions. Others may simply reflect outdated information that you neglected to maintain during the crisis period.
            </p>

            <p>
              Directory authority rebuilding requires a systematic review and refresh of every industry-specific profile, ensuring that your Master NAP data is consistent, your project portfolio is current, your certifications and licensing information are up to date, and your profile descriptions reflect your current capabilities and market position. On platforms that support reviews or recommendations—The Blue Book and Procore both have endorsement systems—targeted solicitation campaigns from verified commercial clients should be deployed to establish positive social proof on the exact platforms where procurement directors conduct their due diligence.
            </p>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-12 mb-6 uppercase tracking-wide">
              The Legal Dimension: When to Escalate
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              Certain categories of reputational damage require legal intervention rather than marketing solutions. Defamatory reviews that contain demonstrably false statements of fact—not opinions, but verifiable factual claims that are untrue—may be actionable under California defamation law. Coordinated review attacks from identifiable competitors constitute unfair business practices under California Business and Professions Code Section 17200. Former employees who post confidential project information or make false claims about safety violations may be subject to cease-and-desist orders or civil litigation.
            </p>

            <p>
              The decision to escalate to legal intervention should be made in consultation with an attorney who specializes in business reputation law and understands the specific dynamics of the construction industry. Legal action is not a first resort—it is expensive, slow, and can itself generate negative publicity if not managed carefully. But when the damage involves clearly actionable conduct—provable defamation, coordinated competitor attacks, breach of confidentiality agreements—legal intervention can produce permanent content removal that no amount of review velocity or ORM suppression can achieve through marketing channels alone.
            </p>

            <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
              <Image
                src="/images/blogs/contractor-reputation-repair/image-3.png"
                alt="Serious executive shaking hands with a satisfied client in front of a newly completed modern commercial building"
                title="The Reputation Restored"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
            </div>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-12 mb-6 uppercase tracking-wide">
              The Permanent Defense Architecture
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              Once the acute repair phase is complete—typically 6 to 12 months for a severe reputational crisis—the focus shifts to building a permanent defense architecture that prevents future crises from escalating to the same level of damage. This architecture has three components: continuous monitoring, proactive content generation, and crisis response readiness.
            </p>

            <p>
              Continuous monitoring deploys automated sentiment analysis tools that scan every review platform, social media channel, industry forum, and news source for mentions of your firm's name, executive names, and project names. Any negative mention triggers an immediate alert to the reputation management team, enabling a response within hours rather than weeks. Proactive content generation maintains a steady pipeline of positive digital assets—blog posts, case studies, press releases, industry article contributions, project completion announcements—that continuously strengthen the positive content moat protecting your branded search results from future contamination.
            </p>

            <p>
              Crisis response readiness maintains a pre-approved response protocol for each category of reputational threat—negative reviews, media inquiries, regulatory actions, social media incidents—so that when the next crisis occurs, the response is immediate, coordinated, and strategically aligned with your firm's legal and commercial interests. The firms that build this architecture do not merely survive reputational crises. They emerge from them algorithmically stronger than they were before, having converted the crisis into an opportunity to rebuild their digital presence with intentionality and strategic precision that their pre-crisis profile never had.
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
              Rebuild Your Authority. Reclaim Your Pipeline.
            </h4>
            <p className="text-[#555] text-[1.1rem] mb-[30px] max-w-[600px] leading-[1.6]">
              Lemonade Ideas executes institutional-grade reputation repair campaigns for elite commercial contractors. We conduct forensic assessments, reconstruct review profiles, decontaminate search results, and build permanent defense architectures that prevent future crises from reaching critical mass.
            </p>

            <Link
              href="/contact"
              className="inline-block bg-[#FED52B] text-[#1E3A1A] font-bold text-[1.1rem] px-[40px] py-[18px] rounded-[50px] uppercase tracking-[1px] shadow-[0_10px_20px_rgba(254,213,43,0.3)] hover:shadow-[0_15px_25px_rgba(254,213,43,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
              Deploy Reputation Repair <ArrowRight className="ml-2" />
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

      <BlogNavigation currentSlug="contractor-reputation-repair" />

      <CTASection />
    </div>
  );
}
