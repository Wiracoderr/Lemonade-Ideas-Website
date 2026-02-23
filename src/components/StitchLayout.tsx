"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BrandFacebook, BrandInstagram, BrandYoutube, BrandLinkedin } from './SocialIcons';

export default function StitchLayout() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="font-body text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 z-20 relative">
            <section className="relative bg-[#1e3a29] py-20 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center"></div>
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#1e3a29] via-[#1e3a29] to-transparent opacity-90"></div>
                <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 mb-10 lg:mb-0">
                        <div className="text-white border-2 border-white/20 inline-block px-4 py-1 text-4xl mb-6 font-display font-bold uppercase tracking-widest opacity-30 select-none">
                            Lemonade Ideas
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-display font-bold text-white leading-tight mb-6 whitespace-nowrap">
                            INTERNET MARKETING<br />
                            THAT&apos;S <span className="text-yellow-400">FAST</span>, <span className="text-yellow-400">AFFORDABLE</span>,<br />
                            AND DRIVES YOU LEADS!
                        </h2>
                        <p className="text-white text-lg mb-8 opacity-90 font-light">
                            Are you ready for &quot;Lemonade Ideas&quot;? We can&apos;t wait to help you grow.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a className="bg-white text-[#1e3a29] hover:bg-gray-100 font-bold py-3 px-8 rounded shadow-lg transition duration-300" href="#">
                                SPEAK WITH OUR EXPERT
                            </a>
                            <a className="border-2 border-white text-white hover:bg-white hover:text-[#1e3a29] font-bold py-3 px-8 rounded transition duration-300" href="#">
                                SEE OUR PRICING
                            </a>
                        </div>
                    </div>
                    <div className="lg:w-1/2 lg:pl-12 w-full">
                        {/* YouTube Facade for Mobile Performance Optimization */}
                        <div className="bg-black rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.3)] aspect-video w-full flex items-center justify-center relative overflow-hidden border-8 border-white p-1">
                            {!isPlaying ? (
                                <div
                                    className="absolute inset-0 z-20 cursor-pointer group"
                                    onClick={() => setIsPlaying(true)}
                                >
                                    <Image
                                        src="/YT-home.webp"
                                        alt="Watch Video"
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                                            <svg className="w-8 h-8 text-white fill-current ml-1" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <iframe
                                    className="w-full h-full absolute inset-0 bg-black z-30"
                                    src="https://www.youtube.com/embed/TZverr1QZUk?autoplay=1&rel=0"
                                    title="YouTube video embed"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
                <div className="absolute top-10 left-0 right-0 text-center select-none pointer-events-none hidden md:block">
                    <span className="text-[12rem] font-display font-bold text-gray-100 dark:text-gray-800 opacity-100 uppercase leading-none">Services</span>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-4xl lg:text-5xl font-display font-bold text-center text-[#1e3a29] dark:text-white mb-16 uppercase">
                        Internet Marketing Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Service Cards */}
                        <div className="group relative min-h-[220px] sm:h-64 aspect-[4/3] sm:aspect-auto overflow-hidden rounded-lg shadow-lg cursor-pointer">
                            <Image
                                src="/services/SEO.avif"
                                alt="SEO"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover transition duration-500 group-hover:scale-110"
                            />
                            {/* Base overlay for dark contrast */}
                            <div className="absolute inset-0 bg-black/40 transition duration-300 group-hover:bg-black/20"></div>
                            {/* Bottom 20% blur/gradient for text legibility like Stitch */}
                            <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-black/90 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                                <h3 className="text-xl font-display font-bold text-yellow-400 mb-2">SEO</h3>
                                <span className="text-white text-sm font-bold uppercase tracking-wider border-b border-transparent group-hover:border-white pb-1 transition">Learn More</span>
                            </div>
                        </div>
                        <div className="group relative min-h-[220px] sm:h-64 aspect-[4/3] sm:aspect-auto overflow-hidden rounded-lg shadow-lg cursor-pointer">
                            <Image src="/services/SEO Chat GPT.avif" alt="SEO ChatGPT" width={400} height={256} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 33vw" />
                            <div className="absolute inset-0 bg-black/40 transition duration-300 group-hover:bg-black/20"></div>
                            <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-black/90 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                                <h3 className="text-xl font-display font-bold text-yellow-400 mb-2">SEO CHATGPT</h3>
                                <span className="text-white text-sm font-bold uppercase tracking-wider border-b border-transparent group-hover:border-white pb-1 transition">Learn More</span>
                            </div>
                        </div>
                        <div className="group relative min-h-[220px] sm:h-64 aspect-[4/3] sm:aspect-auto overflow-hidden rounded-lg shadow-lg cursor-pointer">
                            <Image src="/services/photo-1654277041042-8927699fcfd2.avif" alt="Google Ads Management" width={400} height={256} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 33vw" />
                            <div className="absolute inset-0 bg-black/40 transition duration-300 group-hover:bg-black/20"></div>
                            <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-black/90 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                                <h3 className="text-xl font-display font-bold text-yellow-400 mb-2">GOOGLE ADS MANAGEMENT</h3>
                                <span className="text-white text-sm font-bold uppercase tracking-wider border-b border-transparent group-hover:border-white pb-1 transition">Learn More</span>
                            </div>
                        </div>
                        <div className="group relative min-h-[220px] sm:h-64 aspect-[4/3] sm:aspect-auto overflow-hidden rounded-lg shadow-lg cursor-pointer">
                            <Image
                                src="/services/photo-1678690832311-bb6e361989ca.avif"
                                alt="Website Design"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover transition duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 transition duration-300 group-hover:bg-black/20"></div>
                            <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-black/90 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                                <h3 className="text-xl font-display font-bold text-yellow-400 mb-2">WEBSITE DESIGN</h3>
                                <span className="text-white text-sm font-bold uppercase tracking-wider border-b border-transparent group-hover:border-white pb-1 transition">Learn More</span>
                            </div>
                        </div>
                        <div className="group relative min-h-[220px] sm:h-64 aspect-[4/3] sm:aspect-auto overflow-hidden rounded-lg shadow-lg cursor-pointer">
                            <Image
                                src="/services/social media management.avif"
                                alt="Social Media Management"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover transition duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 transition duration-300 group-hover:bg-black/20"></div>
                            <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-black/90 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                                <h3 className="text-xl font-display font-bold text-yellow-400 mb-2">SOCIAL MEDIA MANAGEMENT</h3>
                                <span className="text-white text-sm font-bold uppercase tracking-wider border-b border-transparent group-hover:border-white pb-1 transition">Learn More</span>
                            </div>
                        </div>
                        <div className="group relative min-h-[220px] sm:h-64 aspect-[4/3] sm:aspect-auto overflow-hidden rounded-lg shadow-lg cursor-pointer">
                            <Image
                                src="/services/Branding.avif"
                                alt="Branding & Strategy"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover transition duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 transition duration-300 group-hover:bg-black/20"></div>
                            <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-black/90 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                                <h3 className="text-xl font-display font-bold text-yellow-400 mb-2">BRANDING & STRATEGY</h3>
                                <span className="text-white text-sm font-bold uppercase tracking-wider border-b border-transparent group-hover:border-white pb-1 transition">Learn More</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative h-auto lg:h-[500px] flex flex-col lg:flex-row bg-[#1e3a29] border-b-8 border-yellow-400 overflow-hidden">
                {/* Image on Mobile stacks neatly on top of the text block */}
                <div className="w-full lg:w-[55%] relative h-[250px] lg:h-full z-10">
                    <Image
                        src="/images/home-image.avif"
                        alt="City View"
                        fill
                        sizes="(max-width: 1024px) 100vw, 55vw"
                        className="object-cover md:scale-x-[-1]"
                    />

                </div>
                {/* On mobile: standard padding and no negative margins. On PC: strict overlap structure */}
                <div className="w-full lg:w-auto lg:flex-1 bg-[#1e3a29] relative flex items-center lg:-ml-28 lg:pl-32 p-8 lg:p-10 z-20">
                    <div className="absolute top-0 left-0 w-full h-full hidden lg:block" style={{
                        background: 'linear-gradient(to right, #1e3a29 0%, #1e3a29 40%, transparent 100%)',
                        zIndex: -1
                    }} />
                    <div className="relative z-30 text-white max-w-lg">
                        <h3 className="text-2xl font-bold mb-4 font-display">With GUARANTEED RANKING ™, You Don&apos;t Pay A Monthly Fee Until We Get You On Page 1 For 100+ Keywords.</h3>
                        <ul className="space-y-5 mb-8 text-[17.5px] font-medium opacity-90">
                            <li className="flex items-start">Target hundreds of keywords simultaneously</li>
                            <li className="flex items-start">Achieve rankings quickly (typically within 7 weeks)</li>
                            <li className="flex items-start">Clear, affordable, and fixed monthly pricing</li>
                            <li className="flex items-start">No long-term contract or cancellation fees</li>
                            <li className="flex items-start">100% U.S.-based team for personalized service</li>
                        </ul>
                        <a className="bg-white text-[#1e3a29] font-bold py-2 px-6 rounded text-sm hover:bg-gray-200 transition" href="#">LEARN MORE</a>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#eef6f8] dark:bg-gray-800">
                <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <div className="border-l-4 border-green-600 pl-6 mb-8">
                            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#1e3a29] dark:text-white uppercase mb-4">Google Ads Management (PPC)</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                                See leads coming through in less than 2 weeks! With Google Ads, you can advertise your business where it matters most — at the very top of Google search results. Our campaigns age like a fine wine and only get better with time. Plus, our pricing drops off in month 4 - check it out!
                            </p>
                            <p className="font-bold text-gray-800 dark:text-gray-200 text-sm">
                                Hundreds of campaigns built.<br />
                                Millions of dollars made for our clients.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-8 mb-8">
                            <div>
                                <div className="text-4xl lg:text-5xl font-bold text-green-500 mb-1">4,000+</div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">Monthly leads generated</p>
                            </div>
                            <div>
                                <div className="text-4xl lg:text-5xl font-bold text-green-500 mb-1">90%</div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">Percentage of clients seeing leads in the first week</p>
                            </div>
                        </div>
                        <a className="bg-[#1e3a29] hover:bg-[#2e523e] text-white font-bold py-3 px-8 rounded text-sm uppercase transition duration-300 inline-block" href="#">Learn More</a>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl flex justify-center items-center h-[300px] lg:h-[500px] w-full">
                            <Image
                                src="/images/ppc-dashboard.webp"
                                alt="PPC Analytics Dashboard"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 text-center select-none pointer-events-none opacity-50 hidden md:block">
                    <span className="text-[8rem] lg:text-[12rem] font-display font-bold text-gray-100 dark:text-gray-800 uppercase leading-none">Portfolio</span>
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-4xl lg:text-5xl font-display font-bold text-[#1e3a29] dark:text-white mb-4 uppercase inline-block bg-white dark:bg-gray-900 px-4">
                        Website Design
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
                        Our experienced team specializes in developing modern WordPress websites. Below are samples of our work:
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                        <div className="bg-[#eaf7fd] dark:bg-gray-800 p-4 lg:p-8 rounded-lg flex items-center justify-center relative min-h-[250px]">
                            <Image
                                src="/portfolio/1.png"
                                alt="Portfolio Item 1"
                                fill
                                sizes="(max-width: 1024px) 100vw, 33vw"
                                className="object-contain p-4"
                            />
                        </div>
                        <div className="bg-[#fff7f0] dark:bg-gray-800 p-4 lg:p-8 rounded-lg flex items-center justify-center relative min-h-[250px]">
                            <Image
                                src="/portfolio/2.png"
                                alt="Portfolio Item 2"
                                fill
                                sizes="(max-width: 1024px) 100vw, 33vw"
                                className="object-contain p-4"
                            />
                        </div>
                        <div className="bg-[#eaf7fd] dark:bg-gray-800 p-4 lg:p-8 rounded-lg flex items-center justify-center relative min-h-[250px]">
                            <Image
                                src="/portfolio/3.png"
                                alt="Portfolio Item 3"
                                fill
                                sizes="(max-width: 1024px) 100vw, 33vw"
                                className="object-contain p-4"
                            />
                        </div>
                    </div>
                    <a className="bg-[#1e3a29] hover:bg-[#2e523e] text-white font-bold py-3 px-10 rounded text-sm uppercase transition duration-300 inline-block" href="#">View More Example</a>
                </div>
            </section>

            <section className="bg-[#1e3a29] text-white pb-32 pt-24 lg:pt-36 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col mb-20 relative">
                        {/* Giant background text exactly as requested */}
                        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -z-0 opacity-[0.03] select-none pointer-events-none w-full flex-col justify-center hidden md:flex">
                            <span className="text-[12rem] md:text-[18rem] lg:text-[22rem] font-bold tracking-tighter leading-[0.8] font-display uppercase block -ml-4 whitespace-nowrap">
                                WHO WE
                            </span>
                            <span className="text-[12rem] md:text-[18rem] lg:text-[22rem] font-bold tracking-tighter leading-[0.8] font-display uppercase block ml-0 md:ml-32 whitespace-nowrap">
                                ARE
                            </span>
                        </div>

                        <div className="relative z-10 pl-4 lg:pl-[10%] mb-4">
                            <h4 className="text-[0.85rem] font-bold tracking-[0.2em] mb-4 uppercase text-white/90">ABOUT US</h4>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1] uppercase max-w-4xl tracking-tight">
                                WE BELIEVE BETTER<br className="hidden md:block" />
                                RESULTS SHOULDN&apos;T HAVE<br className="hidden md:block" />
                                TO COST MORE.
                            </h2>
                        </div>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.15 } }
                        }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
                    >
                        {/* Card 1 */}
                        <motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }} className="group bg-[#ffcc33] text-[#1e3a29] p-8 lg:p-10 text-center flex flex-col items-center hover:-translate-y-3 transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer">
                            <div className="text-xs font-bold mb-6 tracking-widest uppercase">01.</div>
                            <div className="text-5xl mb-8 relative flex justify-center w-full">
                                <span className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 origin-center opacity-0 group-hover:opacity-100"></span>
                                <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    <path d="M9 12l2 2 4-4"></path>
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold uppercase mb-4 font-display">IMPACT</h3>
                            <p className="text-[14px] leading-relaxed font-semibold opacity-90 mx-auto max-w-[90%]">We focus on strategies that maximize impact on your visibility and growth.</p>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }} className="group bg-[#ffcc33] text-[#1e3a29] p-8 lg:p-10 text-center flex flex-col items-center hover:-translate-y-3 transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer">
                            <div className="text-xs font-bold mb-6 tracking-widest uppercase">02.</div>
                            <div className="text-5xl mb-8 relative flex justify-center w-full">
                                <span className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 origin-center opacity-0 group-hover:opacity-100"></span>
                                <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                                    <path d="M12 21v-8" />
                                    <path d="M12 13V4" />
                                    <path d="M9 7l3-3 3 3" />
                                    <path d="M12 13l-5-5" />
                                    <path d="M4 10l3-2 2 3" />
                                    <path d="M12 13l5-5" />
                                    <path d="M20 10l-3-2-2 3" />
                                    <path d="M9 21h6" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold uppercase mb-4 font-display">AFFORDABILITY</h3>
                            <p className="text-[14px] leading-relaxed font-semibold opacity-90 mx-auto max-w-[90%]">Our pricing is structured in a way that makes sense for both you based on what you are receiving.</p>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }} className="group bg-[#ffcc33] text-[#1e3a29] p-8 lg:p-10 text-center flex flex-col items-center hover:-translate-y-3 transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer">
                            <div className="text-xs font-bold mb-6 tracking-widest uppercase">03.</div>
                            <div className="text-5xl mb-8 relative flex justify-center w-full">
                                <span className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 origin-center opacity-0 group-hover:opacity-100"></span>
                                <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 group-hover:rotate-90 transition-transform duration-500">
                                    <circle cx="12" cy="12" r="3"></circle>
                                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold uppercase mb-4 font-display">NO CONTRACTS</h3>
                            <p className="text-[14px] leading-relaxed font-semibold opacity-90 mx-auto max-w-[90%]">We believe great results, not contracts, are what should keep our clients around.</p>
                        </motion.div>

                        {/* Card 4 */}
                        <motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }} className="group bg-[#ffcc33] text-[#1e3a29] p-8 lg:p-10 text-center flex flex-col items-center hover:-translate-y-3 transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer">
                            <div className="text-xs font-bold mb-6 tracking-widest uppercase">04.</div>
                            <div className="text-5xl mb-8 relative flex justify-center w-full">
                                <span className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 origin-center opacity-0 group-hover:opacity-100"></span>
                                <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 group-hover:-translate-y-2 transition-transform duration-300">
                                    <path d="M6 20v-5"></path>
                                    <path d="M18 20v-8"></path>
                                    <path d="M12 20V4"></path>
                                    <path d="M8 8l4-4 4 4"></path>
                                    <path d="M4 20h16"></path>
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold uppercase mb-4 font-display">RESPONSIVENESS</h3>
                            <p className="text-[14px] leading-relaxed font-semibold opacity-90 mx-auto max-w-[90%]">Good communication is what builds a good relationship. We take pride in our level of responsiveness</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-white dark:bg-gray-900 border-t-8 border-yellow-400 overflow-hidden">
                <div className="container mx-auto px-4 text-center">
                    <div className="relative mb-16 inline-block">
                        <h2 className="text-4xl lg:text-5xl font-display font-bold text-[#1e3a29] dark:text-white uppercase relative z-10">
                            Hear What Our Clients Are Saying
                        </h2>
                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[5rem] lg:text-[8rem] font-bold text-gray-100 dark:text-gray-800 -z-0 whitespace-nowrap hidden md:block">REVIEWS</span>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                        <div className="bg-green-50 dark:bg-gray-800 p-8 text-center relative rounded-lg">
                            <i className="fas fa-quote-left text-[#1e3a29] dark:text-green-500 text-4xl mb-6"></i>
                            <h3 className="font-bold text-lg mb-4 text-[#1e3a29] dark:text-white">BRANDING THAT MAKES A STATEMENT!</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                Lemonade Ideas helped us completely rebrand our business with a new logo, messaging, and brand identity. The results were stunning – we now have a strong, recognizable brand that resonates with our target audience. We&apos;ve received so many compliments!
                            </p>
                            <div className="font-bold text-xs uppercase mb-4 text-[#1e3a29] dark:text-green-400">FNATHAN R., CO-FOUNDER OF A TECH STARTUP</div>
                            <div className="flex justify-center items-center gap-2">
                                <img alt="Google" width={24} height={24} className="h-6 w-auto" src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" />
                                <div className="text-yellow-400 text-xs">
                                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <div className="bg-green-50 dark:bg-gray-800 p-8 text-center relative rounded-lg">
                            <i className="fas fa-quote-left text-[#1e3a29] dark:text-green-500 text-4xl mb-6"></i>
                            <h3 className="font-bold text-lg mb-4 text-[#1e3a29] dark:text-white">THE BEST MARKETING AGENCY WE&apos;VE WORKED WITH!</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                We&apos;ve worked with multiple marketing agencies in the past, but none have delivered the results that Lemonade Ideas has. From SEO to Google Ads, website design to branding, their team is top-notch. They genuinely care about our success.
                            </p>
                            <div className="font-bold text-xs uppercase mb-4 text-[#1e3a29] dark:text-green-400">SAMANTHA J., COO OF A B2B SAAS COMPANY</div>
                            <div className="flex justify-center items-center gap-2">
                                <img alt="Google" width={24} height={24} className="h-6 w-auto" src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" />
                                <div className="text-yellow-400 text-xs">
                                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <div className="bg-green-50 dark:bg-gray-800 p-8 text-center relative rounded-lg">
                            <i className="fas fa-quote-left text-[#1e3a29] dark:text-green-500 text-4xl mb-6"></i>
                            <h3 className="font-bold text-lg mb-4 text-[#1e3a29] dark:text-white">SOCIAL MEDIA THAT CREATES REAL ENGAGEMENT!</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                We tried running social media ourselves but struggled to gain traction. Lemonade Ideas took over our content strategy, and in just three months, our Instagram following doubled, engagement tripled, and we started generating sales directly.
                            </p>
                            <div className="font-bold text-xs uppercase mb-4 text-[#1e3a29] dark:text-green-400">OLIVIA S., OWNER OF A HANDMADE JEWELRY BRAND</div>
                            <div className="flex justify-center items-center gap-2">
                                <img alt="Google" width={24} height={24} className="h-6 w-auto" src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" />
                                <div className="text-yellow-400 text-xs">
                                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="relative py-20 lg:py-28 bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/images/ppc-analytics-bg.webp')" }}>
                {/* Dark green overlay matrix effect */}
                <div className="absolute inset-0 bg-[#0c2a16]/50 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-green-900/20 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#0c2a16]/40 to-[#1e3a29]/55"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-12">
                        <h5 className="text-white font-bold tracking-widest text-2xl mb-2 uppercase">CONTACT US</h5>
                        <h2 className="text-white text-3xl md:text-5xl font-display font-bold uppercase tracking-wide mt-4">HAVE QUESTIONS? WE&apos;VE GOT ANSWERS!</h2>
                    </div>

                    <form className="max-w-4xl mx-auto flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="text" placeholder="Name" className="w-full bg-white rounded px-5 py-4 placeholder-gray-500 font-medium text-black focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                            <input type="email" placeholder="Email Address" className="w-full bg-white rounded px-5 py-4 placeholder-gray-500 font-medium text-black focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                            <input type="tel" placeholder="Phone" className="w-full bg-white rounded px-5 py-4 placeholder-gray-500 font-medium text-black focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                            <input type="text" placeholder="Website" className="w-full bg-white rounded px-5 py-4 placeholder-gray-500 font-medium text-black focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                        </div>
                        <textarea placeholder="Message" rows={5} className="w-full bg-white rounded px-5 py-4 placeholder-gray-500 font-medium text-black focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"></textarea>

                        <div className="mt-2 flex flex-col md:flex-row items-center justify-between gap-6 relative">
                            {/* Mock reCAPTCHA */}
                            <div className="bg-[#f9f9f9] border border-gray-300 p-3 py-2 rounded flex items-center justify-between shadow-sm w-[300px]">
                                <div className="flex items-center gap-3">
                                    <input type="checkbox" title="I am not a robot" className="w-6 h-6 ml-2 cursor-pointer bg-white border border-gray-300 rounded" />
                                    <span className="text-sm font-medium text-gray-700">I&apos;m not a robot</span>
                                </div>
                                <div className="flex flex-col items-center pr-2">
                                    <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" width={32} height={32} className="w-8 h-auto" alt="reCAPTCHA" />
                                    <span className="text-[8px] text-gray-500 mt-1">reCAPTCHA</span>
                                    <span className="text-[6px] text-gray-400">Privacy - Terms</span>
                                </div>
                            </div>

                            {/* Centered Submit Button */}
                            <div className="md:absolute md:left-1/2 md:-translate-x-1/2">
                                <button type="button" className="bg-[#facc15] hover:bg-[#eab308] text-[#1e3a29] font-bold py-3 px-12 rounded transition-colors text-[13px] uppercase tracking-wider shadow-[0_4px_14px_0_rgba(250,204,21,0.39)]">
                                    SUBMIT
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>

            <div className="bg-[#eef7f8] text-[#1e3a29] pt-16 pb-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Column 1: Logo & CTA */}
                        <div className="flex flex-col">
                            <img src="/logos/PNGs - SVGs/SVG/Asset 2.svg" width={200} height={32} alt="Lemonade Ideas Marketing Agency" className="h-8 w-auto mb-6 object-contain self-start" />
                            <p className="text-xs font-bold mb-6 max-w-[200px] leading-relaxed opacity-90">
                                SQUEEZE SUCCESS FOR EVERY CHALLENGE TO MAKE $$$
                            </p>
                            <a href="#" className="font-bold text-sm flex items-center gap-1 hover:text-green-700 transition">
                                SCHEDULE A CALL <span className="text-green-700 text-lg leading-none">&raquo;</span>
                            </a>
                        </div>

                        {/* Column 2: Contact Details */}
                        <div>
                            <h4 className="font-bold text-[13px] mb-6 uppercase tracking-wide">CONTACT DETAILS</h4>
                            <ul className="space-y-4 text-[13px] font-semibold opacity-90">
                                <li className="flex items-center gap-3"><i className="fas fa-phone-alt text-green-700"></i> +1 (424) 877-3789</li>
                                <li className="flex items-center gap-3"><i className="fa-regular fa-envelope text-green-700"></i> sales@lemonadeideas.com</li>
                                <li className="leading-relaxed pt-2">
                                    209 21st Place Santa Monica 90402<br />California USA
                                </li>
                            </ul>
                            <div className="flex gap-2 mt-6">
                                <a href="https://www.facebook.com/lemonadeidea/" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#1e3a29] text-white flex items-center justify-center hover:bg-green-700 transition-colors">
                                    <BrandFacebook size={14} />
                                </a>
                                <a href="https://www.instagram.com/lemonade.ideas" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#1e3a29] text-white flex items-center justify-center hover:bg-green-700 transition-colors">
                                    <BrandInstagram size={14} />
                                </a>
                                <a href="https://www.youtube.com/channel/UC1G5NWz9UbHE2L5HeIVJ2Xg" aria-label="YouTube" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#1e3a29] text-white flex items-center justify-center hover:bg-green-700 transition-colors">
                                    <BrandYoutube size={14} />
                                </a>
                                <a href="http://www.linkedin.com/in/lemonade-ideas-080122348" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#1e3a29] text-white flex items-center justify-center hover:bg-green-700 transition-colors">
                                    <BrandLinkedin size={14} />
                                </a>
                            </div>
                        </div>

                        {/* Column 3: Quick Links */}
                        <div>
                            <h4 className="font-bold text-[13px] mb-6 uppercase tracking-wide">QUICK LINKS</h4>
                            <ul className="space-y-3 text-[13px] font-medium text-gray-700">
                                <li><a className="hover:text-[#1e3a29] hover:font-bold transition" href="#">Reviews</a></li>
                                <li><a className="hover:text-[#1e3a29] hover:font-bold transition" href="#">White Label Resellers</a></li>
                                <li><a className="hover:text-[#1e3a29] hover:font-bold transition" href="#">Referral Program</a></li>
                                <li><a className="hover:text-[#1e3a29] hover:font-bold transition" href="#">Blogs</a></li>
                                <li><a className="hover:text-[#1e3a29] hover:font-bold transition" href="#">Terms of Service</a></li>
                            </ul>
                        </div>

                        {/* Column 4: Our Services */}
                        <div>
                            <h4 className="font-bold text-[13px] mb-6 uppercase tracking-wide">OUR SERVICES</h4>
                            <ul className="space-y-3 text-[13px] font-medium text-gray-700 mb-6">
                                <li><a className="hover:text-[#1e3a29] hover:font-bold transition" href="#">Guranteed Ranking™</a></li>
                                <li><a className="hover:text-[#1e3a29] hover:font-bold transition" href="#">SEO</a></li>
                                <li><a className="hover:text-[#1e3a29] hover:font-bold transition" href="#">Google Ads Management</a></li>
                                <li><a className="hover:text-[#1e3a29] hover:font-bold transition" href="#">Website Design</a></li>
                                <li><a className="hover:text-[#1e3a29] hover:font-bold transition" href="#">Social Media Management</a></li>
                                <li><a className="hover:text-[#1e3a29] hover:font-bold transition" href="#">Branding & Strategy</a></li>
                            </ul>
                            <a href="#" className="inline-block bg-[#1e3a29] text-white font-bold py-2 px-6 text-xs uppercase rounded hover:bg-green-800 transition">CONTACT US</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
