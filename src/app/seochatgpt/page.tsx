"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FaqSection from "@/components/seo/FaqSection";
import CTASection from "@/components/seo/CTASection";

// SEO metadata needs to be moved if we use "use client", but we can just use a separate layout/page pattern or accept the warning.
// Actually, in Next.js app router, you can't export metadata from a client component.
// To keep it simple and working like /seo/page.tsx, we'll just add "use client" and state.

export default function SeoChatGptPage() {
  const [isPlaying, setIsPlaying] = useState(false);

  const faqs = [
      {
          question: "HOW MUCH DO YOUR SERVICES COST?",
          answer: "Pricing ranges based on your needs. For example, if you want to generate 1 call weekly, that's going to cost less than generating 10 calls weekly. Most clients pay between $400-$1000/month for the management of their SEO and/or Google Ads campaigns (not including ad spend, a third party cost, which will vary based on your overall budget)."
      },
      {
          question: "DO YOU PROVIDE A FREE CONSULTATION?",
          answer: "Of course! Call or email us any time to schedule a time to talk. We can discuss your campaigns, what's working and what's not, and what your goals are. We will then develop a plan with benchmarks and costs and answer any questions that you have. We aim to be very transparent and make sure everything makes sense before moving forward."
      },
      {
          question: "WHAT MAKES YOU DIFFERENT THAN OTHER COMPANIES?",
          answer: "Our goal is to provide you with excellent service while not breaking the bank. All of our services are reasonably priced and aim to drive as much value to your business as possible. We also offer performance-based plans which is not common, so that's something that differentiates our company as well."
      },
      {
          question: "DO YOU OFFER PERFORMANCE-BASED MARKETING SERVICES?",
          answer: "We do! We offer performance-based SEO options where we only charge you our monthly management fee if we're able to get you on page 1 of Google. Reach out to us to discuss the details and we can see if this service would make sense for your business."
      },
      {
          question: "CAN I RANK WELL FOR TOP AI GEO PROMPTS?",
          answer: "Yes! While traditional SEO focuses on Google's top page, Generative Engine Optimization (GEO) targets the AI models powering ChatGpt, Gemini, and Claude. With our GEO optimization framework and \"Answer Assets\", we establish your brand as the primary authority so when users ask AI for recommendations in your industry, your business is the verified \"Source of Truth\" provided."
      },
      {
          question: "DO YOU REQUIRE LONG-TERM CONTRACTS?",
          answer: "We do not. All of our clients are month-to-month and are not locked in. We have always been like this and plan to continue operating like this moving forward. Why? Because we figure if a client wants to stick around with us, it's because they're happy and we're doing our job. At no point do we want a client to be unhappy and be forced to work with us... that wouldn't be fun for either party."
      }
  ];

  return (
    <div className="font-sans text-slate-900 overflow-x-hidden">
      {/* Inline styles for custom gradients/backgrounds extracted from HTML */}
      <style dangerouslySetInnerHTML={{__html: `
        .hero-overlay {
          background: linear-gradient(rgba(20, 59, 28, 0.9), rgba(20, 59, 28, 0.9)), url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80');
          background-size: cover;
          background-position: center;
        }
        .check-list li::before {
          content: '✓';
          color: #4caf50;
          font-weight: bold;
          margin-right: 0.5rem;
        }
        .grid-bg {
          background-image: radial-gradient(#4caf50 0.5px, transparent 0.5px);
          background-size: 20px 20px;
        }
      `}} />

      {/* BEGIN: Hero Section (Matching SEO Page Layout) */}
      <div className="bg-[#eef8fd] w-full py-4 px-4 flex flex-col sm:flex-row items-center justify-center gap-6 shadow-sm z-50 relative">
        <div className="text-[#0a2e15] font-[Oswald] font-bold text-[1.35rem] md:text-2xl uppercase tracking-wider">
            FIND OUT WHY YOUR COMPANY NEEDS GEO OPTIMIZATION
        </div>
        <button className="bg-[#0a2e15] text-white px-8 py-3 text-sm font-bold uppercase rounded-sm hover:bg-green-900 transition shadow-md" onClick={() => setIsPlaying(true)}>
            Watch Video
        </button>
      </div>

      <header className="bg-[#143d1f] text-white relative overflow-hidden">
        {/* Background Image & Green Overlay */}
        <div className="absolute inset-0 z-0">
            <Image
                src="/images/picture-for-google-ads1.webp"
                alt="SEO ChatGPT Strategy"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                fetchPriority="high"
            />
            {/* Dark Green overlay at 60% opacity to give a strong green tint */}
            <div className="absolute inset-0 bg-[#143d1f]/80"></div>
        </div>

        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat z-0"></div>
        <div className="max-w-7xl mx-auto px-4 pt-16 pb-28 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-16">
                <div className="w-full lg:w-[45%] space-y-5">
                    <h1 className="text-[26px] md:text-[36px] lg:text-[42px] font-[Oswald] font-bold uppercase leading-[1.1] tracking-normal drop-shadow-sm text-white">
                        OPTIMIZING WEBSITES TO BE FOUND AND CITED BY AI SEARCH ENGINES<br/>
                        (PERPLEXITY, CHATGPT, GEMINI, CLAUDE)
                    </h1>
                    <p className="text-[14px] md:text-[17px] lg:text-[18.5px] font-bold text-white leading-[1.5] font-[Arial] mt-6 drop-shadow-sm">
                        Here&apos;s the deal: We ensure your brand becomes the &quot;Source of Truth&quot; for 100+ AI-driven search queries before starting your monthly payments. Watch our video to discover how we teach AI to trust you!
                    </p>
                </div>
                <div className="w-full lg:w-[55%] pl-0">
                    {/* Click to play video component structurally matching homepage with a white border and straight edges */}
                    <div className="aspect-video bg-black/90 shadow-[0_30px_60px_rgba(0,0,0,0.6)] w-full max-w-[900px] flex items-center justify-center relative overflow-hidden border-[4px] lg:border-[6px] border-white ml-auto">
                        {!isPlaying ? (
                            <div
                                className="absolute inset-0 z-20 cursor-pointer group"
                                onClick={() => setIsPlaying(true)}
                            >
                                <Image
                                    src="/images/seo-chatgpt-thumb.jpg"
                                    alt="Watch Video"
                                    fill
                                    className="object-cover scale-[1.03] transition-transform duration-700 group-hover:scale-[1.08]"
                                />
                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                                    <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                                        <svg className="w-8 h-8 text-[#143d1f] fill-current ml-1" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <iframe
                                className="w-full h-full absolute inset-0 z-30"
                                src="https://www.youtube.com/embed/kJexotYET-o?autoplay=1&rel=0"
                                title="Lemonade Ideas SEO Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        )}
                    </div>
                </div>
            </div>
        </div>
        <div
            className="absolute bottom-0 left-0 right-0 h-32 bg-white"
            style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
        ></div>
      </header>
      {/* END: Hero Section */}

      {/* BEGIN: Intro Copy */}
      <section className="bg-white pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <p className="text-[#333] mb-8 font-medium leading-relaxed text-[14px] md:text-[16px] max-w-4xl mx-auto">
            With our AI SEO framework, we optimize your brand for the new decision-makers: AI search engines like this one. Instead of chasing &quot;plumber in San Diego&quot; or &quot;remodeling contractor near me&quot; with dozens of pages, we build a unified, authoritative digital footprint that AI models can understand, trust, and recommend.
          </p>
          <p className="text-[#333] font-medium leading-relaxed text-[14px] md:text-[16px] max-w-4xl mx-auto">
            Our system structures your content, proof, and reputation so that when someone asks an AI, &quot;Who&apos;s the most reliable home services provider in my area?&quot;, your company surfaces as a top, credible answer—not just a blue link. No outdated keyword-stuffing, no waiting forever for an algorithm update, just AI-ready visibility engineered for the way people search now.
          </p>
        </div>
      </section>
      {/* END: Intro Copy */}

      {/* BEGIN: GEO Framework */}
      <section className="bg-white pb-24 mobile-content-visibility">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-[#eff8fa] rounded-[24px] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-8 lg:gap-16 items-start relative overflow-hidden shadow-sm">
            
            {/* Left Image Area */}
            <div className="w-full lg:w-[45%] flex justify-center lg:justify-end mt-4 lg:mt-8 pr-4 lg:pr-8">
              <div className="relative w-[85%] sm:w-[320px] lg:max-w-[340px] aspect-[4/5] border-[6px] border-[#143d1f] overflow-hidden bg-white">
                <Image 
                  alt="Team Planning SEO ChatGPT" 
                  className="object-cover" 
                  src="/images/seo-chatgpt-geo-cropped.webp"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Right Content Area */}
            <div className="w-full lg:w-[55%] relative z-10 mt-8 lg:mt-0">
              <div className="border-l-[6px] border-[#4caf50] pl-4 lg:pl-6 mb-8">
                <h2 className="text-[26px] md:text-[32px] font-black text-[#143d1f] uppercase leading-[1.05] tracking-tight">
                  GENERATIVE ENGINE<br/>
                  OPTIMIZATION (GEO)<br/>
                  FRAMEWORK™
                </h2>
              </div>
              
              <p className="mt-4 text-slate-600 font-medium italic mb-8 text-[14px] md:text-[15px]">
                Here&apos;s our step-by-step process to get 100 keywords ranking on page 1 within 45-60 days:
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="font-black text-[#143d1f] uppercase text-[17px] mb-2 leading-tight">WEEK 1:</h3>
                  <p className="text-[#333] text-[14px] leading-relaxed">
                    AI Perception Audit &amp; Entity Mapping: We analyze how LLMs (Large Language Models) currently view your brand. We map your &quot;digital entities&quot; to ensure AI understands exactly who you are and what you offer.
                  </p>
                </div>
                <div>
                  <h3 className="font-black text-[#143d1f] uppercase text-[17px] mb-2 leading-tight">WEEKS 2-3:</h3>
                  <p className="text-[#333] text-[14px] leading-relaxed">
                    Structured Data &amp; Answer-Based Content: We rebuild your content architecture using &quot;Natural Language Processing&quot; (NLP) standards so AI bots can easily read, understand, and cite your data as the primary answer.
                  </p>
                </div>
                <div>
                  <h3 className="font-black text-[#143d1f] uppercase text-[17px] mb-2 leading-tight">WEEKS 4-12:</h3>
                  <p className="text-[#333] text-[14px] leading-relaxed">
                    Authority Building &amp; Citation Trust: We distribute your verified data across high-trust nodes that AI engines rely on for training. This teaches Perplexity and ChatGPT to trust your site as the expert source.
                  </p>
                </div>
                <div>
                  <h3 className="font-black text-[#143d1f] uppercase text-[17px] mb-2 leading-tight">MONTH 3 AND BEYOND:</h3>
                  <p className="text-[#333] text-[14px] leading-relaxed">
                    Generative Visibility Maintenance: AI models drift. We continuously update your semantic profile to ensure you remain the #1 cited recommendation in AI-generated responses.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      {/* END: GEO Framework */}

      {/* BEGIN: Feature Grid & City Background */}
      <section className="relative w-full overflow-hidden bg-[#0c1811] mobile-content-visibility">
        {/* Mobile Background Area - restricted height to prevent center-point from dropping below cards */}
        <div className="absolute top-0 left-0 right-0 h-[65vh] md:hidden z-0">
          <img
            src="/images/seochatgpt-banner-mobile.png"
            alt="City Skyline"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0c1811] to-transparent"></div>
        </div>

        {/* Desktop Background Area covering the entire section */}
        <div className="absolute inset-0 z-0 hidden md:block">
          <img
            src="/images/seochatgpt-banner.png"
            alt="City Skyline"
            className="w-full h-full object-cover object-center"
            style={{ objectPosition: 'center 40%' }}
          />
        </div>

        {/* 50/50 Layout using Spacer to push cards down over the single background */}
        <div className="relative z-10 w-full flex flex-col justify-end min-h-[550px]">
             {/* Upper empty half to reveal the city background */}
             <div className="w-full min-h-[35vh] md:min-h-[45vh]"></div>
             
             {/* Lower half Feature Grid */}
             <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                 {/* Card 1 */}
                 <div className="relative p-8 lg:p-12 overflow-hidden group border-t border-white/10 flex flex-col justify-center backdrop-blur-sm" style={{ backgroundColor: 'rgba(59, 159, 71, 0.6)' }}>
                     {/* Watermark Icon */}
                     <div className="absolute top-6 right-6 opacity-[0.2] w-48 h-48 transform group-hover:scale-110 transition-transform duration-500">
                         <Image src="/icons/Frame-29628-1.svg" alt="icon watermark" fill className="object-contain" />
                     </div>
                     <div className="relative z-10">
                         <div className="flex items-center gap-4 mb-4">
                             <div className="w-12 h-12 relative flex-shrink-0">
                                 <Image src="/icons/Frame-29628-1.svg" alt="icon" fill className="object-contain" />
                             </div>
                             <span className="text-[#ffd700] text-3xl md:text-4xl font-black">01.</span>
                         </div>
                         <h4 className="text-white font-[Oswald] font-bold uppercase text-2xl tracking-wide leading-tight mb-3">LLM INTENT<br/>MODELING</h4>
                         <p className="text-white/95 text-[15px] leading-relaxed font-[Arial]">
                             Instead of just keywords, we target &quot;conversation intents.&quot; We optimize your site to answer the complex, multi-part questions users ask AI chatbots.
                         </p>
                     </div>
                 </div>
                 {/* Card 2 */}
                 <div className="relative p-8 lg:p-12 overflow-hidden group border-t border-white/10 flex flex-col justify-center backdrop-blur-sm" style={{ backgroundColor: 'rgba(51, 143, 62, 0.6)' }}>
                     <div className="absolute top-6 right-6 opacity-[0.2] w-48 h-48 transform group-hover:scale-110 transition-transform duration-500">
                         <Image src="/icons/Frame-29629-1.svg" alt="icon watermark" fill className="object-contain" />
                     </div>
                     <div className="relative z-10">
                         <div className="flex items-center gap-4 mb-4">
                             <div className="w-12 h-12 relative flex-shrink-0">
                                 <Image src="/icons/Frame-29629-1.svg" alt="icon" fill className="object-contain" />
                             </div>
                             <span className="text-[#ffd700] text-3xl md:text-4xl font-black">02.</span>
                         </div>
                         <h4 className="text-white font-[Oswald] font-bold uppercase text-2xl tracking-wide leading-tight mb-3">FACT-BASED CONTENT<br/>STRUCTURING</h4>
                         <p className="text-white/95 text-[15px] leading-relaxed font-[Arial]">
                             AI loves facts, not fluff. We structure your content with highly specific data tables, direct answers, and schema markup that LLMs crave.
                         </p>
                     </div>
                 </div>
                 {/* Card 3 */}
                 <div className="relative p-8 lg:p-12 overflow-hidden group border-t border-white/10 flex flex-col justify-center backdrop-blur-sm" style={{ backgroundColor: 'rgba(43, 126, 54, 0.6)' }}>
                     <div className="absolute top-6 right-6 opacity-[0.2] w-48 h-48 transform group-hover:scale-110 transition-transform duration-500">
                         <Image src="/icons/Frame-29630-1.svg" alt="icon watermark" fill className="object-contain" />
                     </div>
                     <div className="relative z-10">
                         <div className="flex items-center gap-4 mb-4">
                             <div className="w-12 h-12 relative flex-shrink-0">
                                 <Image src="/icons/Frame-29630-1.svg" alt="icon" fill className="object-contain" />
                             </div>
                             <span className="text-[#ffd700] text-3xl md:text-4xl font-black">03.</span>
                         </div>
                         <h4 className="text-white font-[Oswald] font-bold uppercase text-2xl tracking-wide leading-tight mb-3">SOURCE CITATION<br/>TRACKING</h4>
                         <p className="text-white/95 text-[15px] leading-relaxed font-[Arial]">
                             We measure success by how often your brand is cited as the source in generative answers across Perplexity, Bing Chat, and Google SGE.
                         </p>
                     </div>
                 </div>
                 {/* Card 4 */}
                 <div className="relative p-8 lg:p-12 overflow-hidden group border-t border-white/10 flex flex-col justify-center backdrop-blur-sm" style={{ backgroundColor: 'rgba(33, 107, 42, 0.6)' }}>
                     <div className="absolute top-6 right-6 opacity-[0.2] w-48 h-48 transform group-hover:scale-110 transition-transform duration-500">
                         <Image src="/icons/Frame-29631-1.svg" alt="icon watermark" fill className="object-contain" />
                     </div>
                     <div className="relative z-10">
                         <div className="flex items-center gap-4 mb-4">
                             <div className="w-12 h-12 relative flex-shrink-0">
                                 <Image src="/icons/Frame-29631-1.svg" alt="icon" fill className="object-contain" />
                             </div>
                             <span className="text-[#ffd700] text-3xl md:text-4xl font-black">04.</span>
                         </div>
                         <h4 className="text-white font-[Oswald] font-bold uppercase text-2xl tracking-wide leading-tight mb-3">KNOWLEDGE GRAPH<br/>MANAGEMENT</h4>
                         <p className="text-white/95 text-[15px] leading-relaxed font-[Arial]">
                             We actively manage your entry in the Knowledge Graph, ensuring AI models have real-time, accurate data about your services and pricing.
                         </p>
                     </div>
                 </div>
             </div>
        </div>
      </section>
      {/* END: Feature Grid */}

      {/* BEGIN: Local AI Section */}
      <section className="w-full bg-white py-48 text-center mobile-content-visibility">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-[56px] md:text-[72px] font-[Oswald] font-bold text-[#143d1f] mb-12 uppercase tracking-tight leading-tight">
            HYPER-LOCAL AI RELEVANCE WHEN USERS ASK CHATGPT
          </h2>
          <p className="text-[#444] max-w-6xl mx-auto text-[26px] md:text-[30px] leading-relaxed">
            Whether it&apos;s &quot;the best [Plumber, Electrician, HVAC, Builder, Restoration Company] in [City]?&quot;, we ensure the AI&apos;s algorithm associates your brand with that specific location through semantic local signals.
          </p>
        </div>
      </section>
      {/* END: Local AI Section */}

      {/* BEGIN: Proven Strategies Section */}
      <section className="relative w-full min-h-[700px] flex flex-col lg:flex-row lg:items-center bg-[#113a1c] lg:bg-black overflow-hidden group">
        
        {/* Desktop Full Width Background Image */}
        <div className="absolute inset-0 z-0 hidden lg:block">
          <Image 
            src="/images/seo-chatgpt-strategies-optimized.webp"
            alt="Data Analytics Dashboard"
            fill
            className="object-cover object-left"
            loading="lazy"
          />
        </div>

        {/* Angled Dark Green Content Container Overlay (Floating on right side) */}
        {/* Uses clip-path to create the angled left edge on large screens */}
        <div className="relative z-10 w-full lg:w-3/5 lg:ml-auto bg-[#113a1c]
                        p-8 md:p-16 lg:p-20 xl:py-24 xl:px-24 mb-0 lg:my-16 xl:my-24 lg:mr-0
                        flex flex-col justify-center
                        [clip-path:none] lg:[clip-path:polygon(10%_0,100%_0,100%_100%,0%_100%)]">
            
            <div className="lg:pl-16">
              <div className="border-l-4 border-green-500/80 pl-6 mb-8">
                <h2 className="text-white font-[Oswald] font-extrabold text-3xl md:text-5xl uppercase leading-tight mb-4 tracking-tight">
                  PROVEN GEO STRATEGIES WITH REAL-TIME ALGORITHM ADAPTATION
                </h2>
                <p className="text-white/80 text-lg md:text-xl font-medium leading-relaxed italic">
                  We&apos;ve spent the last 10 years evolving with search. Now, we are pioneering the shift from &quot;Keyword Ranking&quot; to &quot;Generative Engine Optimization&quot; (GEO). We prepare your business for the future where AI answers the questions. Here is our competitive:
                </p>
              </div>

              <ul className="space-y-6 text-white/90 text-[15px] md:text-base leading-relaxed pl-6">
                <li className="list-disc">
                  <strong>AI engines optimize for &quot;E-E-A-T&quot; (Experience, Expertise, Authoritativeness, Trust).</strong> Paradoxically, the best way to leverage AI search is to provide deep human insights that AI cannot hallucinate. We start with human expertise, then wrap it in the advanced schema, JSON-LD, and vector-embedding structures that Perplexity and ChatGPT need to &quot;read&quot; and cite your site as a fact.
                </li>
                <li className="list-disc">
                  <strong>Full-Stack Digital Footprint:</strong> AI models validate your website by looking at your entire digital presence. As a full-service agency, we align your Social Media, PR, Reviews, and Ad signals into one unified &quot;Truth Signal.&quot; This cross-platform consistency forces AI engines to assign your brand a higher &quot;Confidence Score,&quot; leading to more citations and higher-quality traffic.
                </li>
                <li className="list-disc">
                  <strong>Holistic Signal Management:</strong> Full-Stack Digital Footprint: AI models validate your website by looking at your entire digital presence. As a full-service agency, we align your Social Media, PR, Reviews, and Ad signals into one unified &quot;Truth Signal.&quot; This cross-platform consistency forces AI engines to assign your brand a higher &quot;Confidence Score,&quot; leading to more citations and higher-quality traffic.
                </li>
              </ul>
            </div>
            
        </div>

        {/* Mobile Specific Bottom Image */}
        <div className="w-full relative block lg:hidden h-[450px] md:h-[550px]">
          <Image 
            src="/images/bg2-mobile.webp"
            alt="Data Analytics Mobile Dashboard"
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
      </section>
      {/* END: Proven Strategies Section */}

      {/* BEGIN: Pricing Section */}
      <section className="py-24 px-4 bg-white relative overflow-hidden mobile-content-visibility" id="pricing">
          <div className="max-w-[1240px] mx-auto">
              <div className="mb-6 flex flex-col items-center">
                  <div className="relative h-20 md:h-28 w-full flex justify-center items-center overflow-hidden mb-8">
                      <span className="text-6xl md:text-9xl font-[Oswald] font-bold uppercase text-gray-100 tracking-widest absolute select-none pointer-events-none opacity-80 whitespace-nowrap">
                          Pricing
                      </span>
                      <h2 className="relative z-10 text-4xl md:text-6xl font-[Oswald] font-bold uppercase text-[#143d1f] tracking-tight text-center">
                          GEO PRICING
                      </h2>
                  </div>

                  <p className="text-[#333] w-full text-[15px] md:text-[16.8px] font-[Roboto] text-justify tracking-wide leading-[1.8] max-w-4xl">
                      Our pricing is designed for verified results. The initial startup fee covers deep Entity Analysis, &quot;Answer Asset&quot; creation, and the deployment of approximately 100+ AI-Readable Verification Nodes. Monthly billing only begins once we have successfully secured 100+ Verified AI Citations or Page 1 Rankings for your brand. (See the video above for a breakdown of our Source-of-Truth strategy.)
                  </p>
              </div>

              <div className="bg-[#f0f9fa] rounded-2xl shadow-xl overflow-hidden border border-gray-100 mt-12">
                  {/* Top Green Banner */}
                  <div className="bg-[#38a149] py-5 text-center shadow-inner">
                      <h3 className="text-white font-[Oswald] font-bold text-2xl md:text-3xl uppercase tracking-widest text-shadow-sm">
                          GEO PACKAGE
                      </h3>
                  </div>

                  {/* Split White Cards */}
                  <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8">
                      {/* Column 1 */}
                      <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
                          <div className="text-center mb-6 pb-6 border-b border-dotted border-gray-300">
                              <div className="flex justify-center items-center gap-2">
                                  <span className="text-4xl md:text-5xl font-bold text-gray-900 font-[Oswald]">$1969</span>
                                  <span className="text-sm font-bold text-gray-800">One Time</span>
                              </div>
                              <div className="text-sm text-gray-500 mt-2 font-[Roboto]">(Startup/Buildout charge)</div>
                          </div>
                          <ul className="space-y-4 text-[15px] text-gray-600 font-[Roboto] flex-grow">
                              <li className="flex items-center pb-4 border-b border-dotted border-gray-200">
                                  <i className="fas fa-check-circle text-[#2d7a36] mr-4 text-lg"></i>
                                  <span>AI Entity Training</span>
                              </li>
                              <li className="flex items-center pb-4 border-b border-dotted border-gray-200">
                                  <i className="fas fa-check-circle text-[#2d7a36] mr-4 text-lg"></i>
                                  <span>100+ Answer Assets</span>
                              </li>
                              <li className="flex items-center pb-4 border-b border-dotted border-gray-200">
                                  <i className="fas fa-check-circle text-[#2d7a36] mr-4 text-lg"></i>
                                  <span>Schema &amp; Structured Data</span>
                              </li>
                              <li className="flex items-center pb-4 border-b border-dotted border-gray-200 border-none">
                                  <i className="fas fa-check-circle text-[#2d7a36] mr-4 text-lg"></i>
                                  <span>Generative Analytics</span>
                              </li>
                          </ul>
                      </div>

                      {/* Column 2 */}
                      <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
                          <div className="text-center mb-6 pb-6 border-b border-dotted border-gray-300">
                              <div className="flex justify-center items-center gap-2">
                                  <span className="text-4xl md:text-5xl font-bold text-gray-900 font-[Oswald]">$699</span>
                                  <span className="text-sm font-bold text-gray-800">/ Month</span>
                              </div>
                              <div className="text-sm text-gray-500 mt-2 font-[Roboto]">(100+ Confirmed AI Citations/Rankings)</div>
                          </div>
                          <ul className="space-y-4 text-[15px] text-gray-600 font-[Roboto] flex-grow">
                              <li className="flex items-center pb-4 border-b border-dotted border-gray-200">
                                  <i className="fas fa-check-circle text-[#2d7a36] mr-4 text-lg"></i>
                                  <span>Creating and hosting your landing pages</span>
                              </li>
                              <li className="flex items-center pb-4 border-b border-dotted border-gray-200">
                                  <i className="fas fa-check-circle text-[#2d7a36] mr-4 text-lg"></i>
                                  <span>Management of optimized landing pages</span>
                              </li>
                              <li className="flex items-center pb-4 border-b border-dotted border-gray-200">
                                  <i className="fas fa-check-circle text-[#2d7a36] mr-4 text-lg"></i>
                                  <span>Monthly rank tracking using industry leading analytics software</span>
                              </li>
                              <li className="flex items-center pb-4 border-b border-dotted border-gray-200 border-none">
                                  <i className="fas fa-check-circle text-[#2d7a36] mr-4 text-lg"></i>
                                  <span>Dedicated account management</span>
                              </li>
                          </ul>
                      </div>
                  </div>

                  {/* Bottom Get Started Button */}
                  <div className="px-6 md:px-8 pb-8 pt-2">
                      <Link href="/get-started" className="w-full bg-[#143d1f] text-white py-4 rounded-xl font-[Oswald] font-bold text-lg uppercase tracking-widest hover:bg-[#1f562e] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3 decoration-none">
                          Get Started <i className="fas fa-arrow-right"></i>
                      </Link>
                  </div>
              </div>
          </div>
      </section>
      {/* END: Pricing Section */}

      {/* BEGIN: FAQ Section */}
      <div className="mobile-content-visibility">
          <FaqSection faqs={faqs} />
      </div>
      {/* END: FAQ Section */}

      {/* BEGIN: CTA Section */}
      <div className="mobile-content-visibility">
          <CTASection 
              subtitleContent={
                  <>Along with GEO, Lemonade Ideas drives real results through pay-per-click<br className="hidden md:block" /> advertising and website development. Contact us to discover what could benefit<br className="hidden md:block" /> your business the most.</>
              } 
          />
      </div>
      {/* END: CTA Section */}
    </div>
  );
}
