"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function StitchLayout({ children }: { children?: React.ReactNode }) {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="font-body text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 z-20 relative">
            {children}
            <section className="relative bg-[#3a281e] py-24 lg:py-40 overflow-hidden min-h-[650px] flex items-center">
                {/* 1. Full-width Background Image (Office) - Hidden on mobile to optimize LCP */}
                <div className="absolute inset-0 z-0 hidden md:block">
                    <Image src="/images/hero-bg.jpg" alt="Background" fill sizes="100vw" className="object-cover object-center opacity-70" priority />
                </div>

                {/* 2. Authentic SVG Curved Background (Using User's Custom "Mesa de trabajo 1.svg" Vectors) */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none hidden lg:flex flex-col lg:flex-row items-center justify-center">
                    <svg
                        className="absolute inset-0 h-full w-full scale-[1.10] origin-center"
                        preserveAspectRatio="none"
                        viewBox="0 0 2827.17 1136.96"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1245.42,165.26c-54.04-66.95-121.2-122.75-197.52-163.48H449C246.54,109.83,108.65,324.01,108.65,570.59s134.59,455.59,333.05,564.86l-1.25,1.51h1610.79L1245.84,164.74l-.43.52Z"
                            fill="#1e3a29"
                        />
                    </svg>
                </div>

                {/* 3. Solid Ghost Text Watermark ("LEMONADE IDEAS" strictly centered inside the green mass) */}
                <div className="absolute inset-0 z-0 pointer-events-none hidden lg:flex items-center justify-center pl-[12%] pb-[8%]">
                    <svg width="70%" height="auto" viewBox="0 0 1200 200" preserveAspectRatio="xMidYMid meet" className="max-w-[1100px] opacity-100">
                        <text
                            x="50%"
                            y="140"
                            textAnchor="middle"
                            className="font-display font-black"
                            fontSize="130"
                            fill="rgba(255,255,255,0.06)"
                            letterSpacing="0.02em"
                        >
                            LEMONADE IDEAS
                        </text>
                    </svg>
                </div>

                <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center justify-between">
                    {/* Left Column (Text) */}
                    <div className="lg:w-[55%] mb-16 lg:mb-0 relative z-10 pl-2 lg:pl-8">
                        {/* 4. Dense Typography */}
                        <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[4.5rem] font-display font-black text-white leading-[1] mb-8 uppercase tracking-tight relative z-10">
                            INTERNET MARKETING<br />
                            THAT&apos;S <span className="text-[#ffcc33]">FAST</span>, <span className="text-[#ffcc33]">AFFORDABLE</span>,<br />
                            AND DRIVES YOU LEADS!
                        </h2>
                        <p className="text-white text-[15px] font-bold tracking-wide mb-12 opacity-100 drop-shadow-md">
                            Are you ready for &quot;Lemonade Ideas&quot;? We can&apos;t wait to help you grow.
                        </p>

                        {/* 5. Clean Buttons */}
                        <div className="flex flex-wrap items-center gap-x-10 gap-y-6">
                            <a className="bg-white text-[#1e3a29] hover:bg-gray-100 font-bold py-3.5 px-8 text-sm uppercase tracking-widest rounded shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition duration-300 inline-block font-sans" href="https://calendly.com/lemonadeideas-consultation/30min?month=2026-03" target="_blank" rel="noopener noreferrer">
                                SPEAK WITH OUR EXPERT
                            </a>
                            <a className="text-white hover:text-[#ffcc33] font-bold text-sm uppercase tracking-widest transition duration-300 inline-block drop-shadow-md font-sans" href="#">
                                SEE OUR PRICING
                            </a>
                        </div>
                    </div>

                    {/* Right Column (Video/Image Container) */}
                    <div className="lg:w-[45%] w-full relative z-10 flex justify-end pr-2 lg:pr-6">
                        {/* 6. Thick white frame, removed giant red play button (kept minimal) */}
                        <div className="bg-black/90 shadow-[0_30px_60px_rgba(0,0,0,0.6)] aspect-[16/10] w-full max-w-[580px] flex items-center justify-center relative overflow-hidden border-[4px] lg:border-[6px] border-white">
                            {!isPlaying ? (
                                <div
                                    className="absolute inset-0 z-20 cursor-pointer group"
                                    onClick={() => setIsPlaying(true)}
                                >
                                    <Image
                                        src="/YT-home.webp"
                                        alt="Watch Video"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Subtle play indicator instead of giant red block */}
                                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                                        <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                                            <svg className="w-8 h-8 text-[#1e3a29] fill-current ml-1" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <iframe
                                    className="w-full h-full absolute inset-0 z-30"
                                    src="https://www.youtube.com/embed/TZverr1QZUk?autoplay=1&rel=0"
                                    title="Lemonade Ideas Video"
                                    frameBorder="0"
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
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
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
                        <Link href="/seochatgpt" className="group relative min-h-[220px] sm:h-64 aspect-[4/3] sm:aspect-auto overflow-hidden rounded-lg shadow-lg cursor-pointer block">
                            <Image src="/services/SEO Chat GPT.avif" alt="SEO ChatGPT" width={400} height={256} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" sizes="(max-width: 768px) 50vw, 33vw" />
                            <div className="absolute inset-0 bg-black/40 transition duration-300 group-hover:bg-black/20"></div>
                            <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-black/90 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                                <h3 className="text-xl font-display font-bold text-yellow-400 mb-2">SEO CHATGPT</h3>
                                <span className="text-white text-sm font-bold uppercase tracking-wider border-b border-transparent group-hover:border-white pb-1 transition">Learn More</span>
                            </div>
                        </Link>
                        <div className="group relative min-h-[220px] sm:h-64 aspect-[4/3] sm:aspect-auto overflow-hidden rounded-lg shadow-lg cursor-pointer">
                            <Image src="/services/photo-1654277041042-8927699fcfd2.avif" alt="Google Ads Management" width={400} height={256} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" sizes="(max-width: 768px) 50vw, 33vw" />
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
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
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
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
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
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
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

            {/* Section 2 (Guaranteed Ranking Full Bleed) */}
            <div className="relative w-full mt-10 bg-[#1e3a29]">

                {/* DESKTOP VERSION (HTML + CSS Layout) - True Elementor Replica */}
                <div className="hidden lg:flex relative w-full overflow-hidden bg-[#ebf0f2] py-12 xl:py-20">

                    {/* Background Image: Absolute and covers the entire section padding area */}
                    <div className="absolute inset-0 w-full h-full z-0">
                        <Image
                            src="/images/Home-Image-SEO.avif"
                            alt="City connection guaranteed ranking"
                            fill
                            quality={100}
                            sizes="100vw"
                            className="object-cover object-center"
                            style={{ opacity: 0.9, mixBlendMode: 'multiply', transform: 'scaleX(-1)' }}
                        />
                    </div>

                    {/* Content Container: Flex to the right */}
                    <div className="relative z-10 w-full flex justify-end">

                        {/* The Solid Green Box: Standard rectangle, no complex clip-path that breaks content */}
                        <div className="w-[58%] xl:w-[52%] bg-[#1a3121] relative flex flex-col justify-center shadow-2xl">

                            {/* The Diagonal Cut Shape (Elementor Pseudo-element Replica) 
                                This is a purely decorative triangle attached to the left edge of the green box. 
                            */}
                            <div
                                className="absolute top-0 left-[-80px] xl:left-[-140px] w-[81px] xl:w-[141px] h-full bg-[#1a3121]"
                                style={{ clipPath: 'polygon(100% 0, 100% 100%, 0% 100%)' }}
                            ></div>

                            {/* Text Content */}
                            <div className="w-full py-16 xl:py-20 pr-8 xl:pr-32 pl-8 xl:pl-16 relative z-20">
                                <h3 className="text-[2.5rem] xl:text-[46px] font-black mb-4 font-display uppercase tracking-tight text-white leading-[1.05] drop-shadow-md">
                                    SEO CHATGPT™
                                </h3>
                                <h4 className="text-[15px] xl:text-[16.5px] font-bold mb-8 font-display text-white leading-relaxed pr-8 drop-shadow">
                                    With SEO CHATGPT™, You Don&apos;t Pay A Monthly Fee Until We Get You In Top AI Answers For 100+ Prompts.
                                </h4>
                                <ul className="mb-10 space-y-3.5 text-[13.5px] xl:text-[14.5px] font-bold text-white/95 list-none ml-1">
                                    <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1.5 before:h-1.5 before:bg-white before:rounded-full">Target hundreds of AI prompts simultaneously</li>
                                    <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1.5 before:h-1.5 before:bg-white before:rounded-full">Achieve AI presence quickly (typically within 7 weeks)</li>
                                    <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1.5 before:h-1.5 before:bg-white before:rounded-full">Clear, affordable, and fixed monthly pricing</li>
                                    <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1.5 before:h-1.5 before:bg-white before:rounded-full">No long-term contract or cancellation fees</li>
                                    <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1.5 before:h-1.5 before:bg-white before:rounded-full">100% AI-focused team for personalized service</li>
                                </ul>
                                <div>
                                    <a className="inline-block bg-[#f4f7f6] text-[#1e3a29] font-black py-4 px-10 text-[13px] uppercase tracking-wider hover:bg-white transition shadow-lg w-max" href="#">
                                        LEARN MORE
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* MOBILE VERSION (HTML Text) - Keeping exactly as was */}
                <div className="lg:hidden relative w-full min-h-[550px] flex items-center overflow-hidden bg-[#1e3a29]">
                    <div className="absolute top-0 left-0 w-[120%] h-full z-0">
                        <Image
                            src="/images/Home-Image-SEO.avif"
                            alt="City connection guaranteed ranking"
                            fill
                            quality={80}
                            sizes="(max-width: 768px) 100vw, 120vw"
                            className="object-cover object-left"
                            style={{ backgroundColor: '#f4f8fb' }}
                        />
                        <div className="absolute inset-0 bg-black/70 pointer-events-none"></div>
                    </div>

                    <div className="relative z-10 w-full flex justify-end">
                        <div className="w-full flex flex-col justify-center py-16 px-8 sm:px-12">
                            <div className="text-white w-full max-w-[650px]">
                                <h3 className="text-[2rem] sm:text-4xl font-black mb-6 font-display uppercase tracking-tight text-white leading-[1.05] drop-shadow-md">
                                    SEO CHATGPT™
                                </h3>
                                <h4 className="text-[15px] sm:text-[16px] font-bold mb-8 font-display opacity-100 leading-[1.5] drop-shadow">With SEO CHATGPT™, You Don&apos;t Pay A Monthly Fee Until We Get You In Top AI Answers For 100+ Prompts.</h4>
                                <ul className="space-y-3 mb-10 text-[13px] sm:text-[14px] font-semibold opacity-100 drop-shadow">
                                    <li className="flex items-start gap-3"><span className="text-[8px] mt-1.5 opacity-80">⚪</span><span>Target hundreds of AI prompts simultaneously</span></li>
                                    <li className="flex items-start gap-3"><span className="text-[8px] mt-1.5 opacity-80">⚪</span><span>Achieve AI presence quickly (typically within 7 weeks)</span></li>
                                    <li className="flex items-start gap-3"><span className="text-[8px] mt-1.5 opacity-80">⚪</span><span>Clear, affordable, and fixed monthly pricing</span></li>
                                    <li className="flex items-start gap-3"><span className="text-[8px] mt-1.5 opacity-80">⚪</span><span>No long-term contract or cancellation fees</span></li>
                                    <li className="flex items-start gap-3"><span className="text-[8px] mt-1.5 opacity-80">⚪</span><span>100% AI-focused team for personalized service</span></li>
                                </ul>
                                <a className="inline-block bg-[#f4f7f6] text-[#1e3a29] font-black py-4 px-10 text-[13px] uppercase tracking-wider hover:bg-white transition shadow-lg w-max" href="#">LEARN MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="py-20 bg-[#eef6f8] dark:bg-gray-800">
                <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <div className="border-l-0 lg:border-l-4 border-green-600 pl-0 lg:pl-6 mb-8 w-full">
                            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#1e3a29] dark:text-white uppercase mb-4">Google Ads Management (PPC)</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm mx-auto lg:mx-0">
                                See leads coming through in less than 2 weeks! With Google Ads, you can advertise your business where it matters most — at the very top of Google search results. Our campaigns age like a fine wine and only get better with time. Plus, our pricing drops off in month 4 - check it out!
                            </p>
                            <p className="font-bold text-gray-800 dark:text-gray-200 text-sm">
                                Hundreds of campaigns built.<br />
                                Millions of dollars made for our clients.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-8 mb-10 w-full">
                            <div className="flex flex-col items-center lg:items-start">
                                <div className="text-4xl lg:text-5xl font-bold text-green-500 mb-1">4,000+</div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">Monthly leads generated</p>
                            </div>
                            <div className="flex flex-col items-center lg:items-start">
                                <div className="text-4xl lg:text-5xl font-bold text-green-500 mb-1">90%</div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">Percentage of clients seeing leads in the first week</p>
                            </div>
                        </div>

                        <a className="bg-[#1e3a29] hover:bg-[#2e523e] text-white font-bold py-3 px-8 rounded text-sm uppercase transition duration-300 inline-block mb-8 lg:mb-0" href="#">Learn More</a>

                        {/* MOBILE-ONLY IMAGE INSERTION (Laptop with charts) */}
                        <div className="block lg:hidden relative w-full rounded-2xl overflow-hidden shadow-xl aspect-[4/3] mt-2 border-2 border-transparent">
                            <Image
                                src="/images/seo-mobile-opt.webp"
                                alt="SEO Laptop Analytics"
                                fill
                                sizes="(max-width: 768px) 50vw, 100vw"
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* DESKTOP-ONLY IMAGE (Original Dashboard) */}
                    <div className="hidden lg:flex lg:w-1/2">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl flex justify-center items-center h-[500px] w-full">
                            <Image
                                src="/images/ppc-dashboard.webp"
                                alt="PPC Analytics Dashboard"
                                fill
                                sizes="50vw"
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
                                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 100vw, 33vw"
                                className="object-contain p-4"
                            />
                        </div>
                        <div className="bg-[#fff7f0] dark:bg-gray-800 p-4 lg:p-8 rounded-lg flex items-center justify-center relative min-h-[250px]">
                            <Image
                                src="/portfolio/2.png"
                                alt="Portfolio Item 2"
                                fill
                                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 100vw, 33vw"
                                className="object-contain p-4"
                            />
                        </div>
                        <div className="bg-[#eaf7fd] dark:bg-gray-800 p-4 lg:p-8 rounded-lg flex items-center justify-center relative min-h-[250px]">
                            <Image
                                src="/portfolio/3.png"
                                alt="Portfolio Item 3"
                                fill
                                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 100vw, 33vw"
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

                        <div className="relative z-10 px-4 md:px-0 md:pl-[10%] mb-16 text-center md:text-left">
                            <h4 className="text-[1rem] font-black tracking-widest mb-4 uppercase text-[#d1e8da] font-display">ABOUT US</h4>
                            <h2 className="text-5xl md:text-6xl lg:text-[6.6rem] font-display font-black text-white leading-[0.9] uppercase max-w-5xl tracking-normal mx-auto md:mx-0">
                                WE BELIEVE BETTER RESULTS SHOULDN&apos;T <br className="hidden md:block" />
                                HAVE TO COST MORE.
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
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 relative z-10"
                    >
                        {/* Card 1 */}
                        <motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }} className="group bg-[#ffcc33] text-[#1e3a29] py-16 px-6 lg:py-24 lg:px-8 h-full text-center flex flex-col items-center hover:-translate-y-3 transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer">
                            <div className="text-xl font-black mb-8 tracking-wider uppercase font-display">01.</div>
                            <div className="text-5xl mb-12 relative flex justify-center w-full">
                                <span className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 origin-center opacity-0 group-hover:opacity-100"></span>
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                                    <path d="m9 12 2 2 4-4" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-black uppercase mb-6 font-display tracking-widest leading-none">IMPACT</h3>
                            <p className="text-[15px] leading-[1.6] font-semibold opacity-90 mx-auto max-w-[95%]">We focus on strategies that maximize impact on your visibility and growth.</p>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }} className="group bg-[#ffcc33] text-[#1e3a29] py-16 px-6 lg:py-24 lg:px-8 h-full text-center flex flex-col items-center hover:-translate-y-3 transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer">
                            <div className="text-xl font-black mb-8 tracking-wider uppercase font-display">02.</div>
                            <div className="text-5xl mb-12 relative flex justify-center w-full">
                                <span className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 origin-center opacity-0 group-hover:opacity-100"></span>
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                                    <path d="M8 3v3a2 2 0 0 1-2 2H3" />
                                    <path d="M21 8h-3a2 2 0 0 1-2-2V3" />
                                    <path d="M3 16h3a2 2 0 0 0 2 2v3" />
                                    <path d="M16 21v-3a2 2 0 0 0 2-2h3" />
                                    <path d="M12 9v6" />
                                    <path d="M9 12h6" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-black uppercase mb-6 font-display tracking-widest leading-none">AFFORDABILITY</h3>
                            <p className="text-[15px] leading-[1.6] font-semibold opacity-90 mx-auto max-w-[95%]">Our pricing is structured in a way that makes sense for both you based on what you are receiving.</p>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }} className="group bg-[#ffcc33] text-[#1e3a29] py-16 px-6 lg:py-24 lg:px-8 h-full text-center flex flex-col items-center hover:-translate-y-3 transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer">
                            <div className="text-xl font-black mb-8 tracking-wider uppercase font-display">03.</div>
                            <div className="text-5xl mb-12 relative flex justify-center w-full">
                                <span className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 origin-center opacity-0 group-hover:opacity-100"></span>
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 group-hover:rotate-90 transition-transform duration-500">
                                    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-black uppercase mb-6 font-display tracking-widest leading-none">NO CONTRACTS</h3>
                            <p className="text-[15px] leading-[1.6] font-semibold opacity-90 mx-auto max-w-[95%]">We believe great results, not contracts, are what should keep our clients around.</p>
                        </motion.div>

                        {/* Card 4 */}
                        <motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }} className="group bg-[#ffcc33] text-[#1e3a29] py-16 px-6 lg:py-24 lg:px-8 h-full text-center flex flex-col items-center hover:-translate-y-3 transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer">
                            <div className="text-xl font-black mb-8 tracking-wider uppercase font-display">04.</div>
                            <div className="text-5xl mb-12 relative flex justify-center w-full">
                                <span className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 origin-center opacity-0 group-hover:opacity-100"></span>
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 group-hover:-translate-y-2 transition-transform duration-300">
                                    <path d="M3 3v18h18" />
                                    <path d="m19 9-5 5-4-4-3 3" />
                                    <path d="M19 9h-6" />
                                    <path d="M19 9v6" />
                                    <circle cx="12" cy="6" r="3" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-black uppercase mb-6 font-display tracking-widest leading-none">RESPONSIVENESS</h3>
                            <p className="text-[15px] leading-[1.6] font-semibold opacity-90 mx-auto max-w-[95%]">Good communication is what builds a good relationship. We take pride in our level of responsiveness</p>
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
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
                        {/* Card 1: Plumbing */}
                        <div className="bg-[#e2edd3] dark:bg-gray-800 p-8 pt-14 pb-12 text-center relative rounded shadow-sm flex flex-col items-center h-full">
                            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-[#1e3a29] opacity-90">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>
                            <h3 className="font-display font-black text-xl md:text-[22px] mb-6 text-[#1e3a29] dark:text-white uppercase leading-[1.15] tracking-wide mt-2">
                                BRANDING THAT MAKES A STATEMENT!
                            </h3>
                            <p className="text-[15px] font-semibold text-gray-800 dark:text-gray-300 mb-10 leading-[1.8] px-2 flex-grow">
                                Lemonade Ideas helped us completely rebrand our plumbing business with a new logo, messaging, and identity. The results were stunning – we now have a strong brand that resonates with homeowners. We&apos;ve received so many compliments!
                            </p>
                            <div className="font-display font-bold text-[13px] tracking-wider uppercase mb-6 text-[#1e3a29] dark:text-green-400">
                                NATHAN R., OWNER OF A PLUMBING CO.
                            </div>
                            <div className="flex flex-col items-center justify-center gap-2 mt-auto">
                                <img alt="Google" className="h-[26px]" src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" />
                                <div className="flex gap-1 text-[#fbbc05]">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <div className="absolute bottom-6 right-6 text-black/10">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>
                        </div>

                        {/* Card 2: HVAC */}
                        <div className="bg-[#e2edd3] dark:bg-gray-800 p-8 pt-14 pb-12 text-center relative rounded shadow-sm flex flex-col items-center h-full">
                            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-[#1e3a29] opacity-90">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>
                            <h3 className="font-display font-black text-xl md:text-[22px] mb-6 text-[#1e3a29] dark:text-white uppercase leading-[1.15] tracking-wide mt-2">
                                THE BEST MARKETING AGENCY WE&apos;VE WORKED WITH!
                            </h3>
                            <p className="text-[15px] font-semibold text-gray-800 dark:text-gray-300 mb-10 leading-[1.8] px-2 flex-grow">
                                We&apos;ve worked with multiple agencies in the past, but none delivered the results Lemonade Ideas has. From SEO to Google Ads, their team is top-notch. They consistently go above and beyond to keep our HVAC dispatch board full.
                            </p>
                            <div className="font-display font-bold text-[13px] tracking-wider uppercase mb-6 text-[#1e3a29] dark:text-green-400">
                                SAMANTHA J., HVAC BUSINESS FOUNDER
                            </div>
                            <div className="flex flex-col items-center justify-center gap-2 mt-auto">
                                <img alt="Google" className="h-[26px]" src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" />
                                <div className="flex gap-1 text-[#fbbc05]">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <div className="absolute bottom-6 right-6 text-black/10">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>
                        </div>

                        {/* Card 3: General Contractor */}
                        <div className="bg-[#e2edd3] dark:bg-gray-800 p-8 pt-14 pb-12 text-center relative rounded shadow-sm flex flex-col items-center h-full">
                            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-[#1e3a29] opacity-90">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>
                            <h3 className="font-display font-black text-xl md:text-[22px] mb-6 text-[#1e3a29] dark:text-white uppercase leading-[1.15] tracking-wide mt-2">
                                SOCIAL MEDIA THAT CREATES REAL ENGAGEMENT!
                            </h3>
                            <p className="text-[15px] font-semibold text-gray-800 dark:text-gray-300 mb-10 leading-[1.8] px-2 flex-grow">
                                We tried running local ads ourselves but struggled to get qualified leads. Lemonade took over our content strategy, and in just months, our phone started ringing with high-ticket remodeling jobs. They know exactly how to connect with our audience!
                            </p>
                            <div className="font-display font-bold text-[13px] tracking-wider uppercase mb-6 text-[#1e3a29] dark:text-green-400">
                                MICHAEL S., GENERAL CONTRACTOR
                            </div>
                            <div className="flex flex-col items-center justify-center gap-2 mt-auto">
                                <img alt="Google" className="h-[26px]" src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" />
                                <div className="flex gap-1 text-[#fbbc05]">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <div className="absolute bottom-6 right-6 text-black/10">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
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

        </div>
    );
}
