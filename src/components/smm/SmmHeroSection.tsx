"use client";
import React, { useState } from 'react';
import Image from 'next/image';

export default function SmmHeroSection() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <header className="bg-[#0d2a1a] text-white relative overflow-hidden font-sans" data-purpose="hero">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
                <picture>
                    <source media="(max-width: 768px)" srcSet="/images/smm-bg-mobile.webp" />
                    <img 
                        src="/images/smm-bg.webp" 
                        alt="SMM Strategy Background" 
                        className="object-cover object-center w-full h-full absolute inset-0"
                        fetchPriority="high"
                    />
                </picture>
                {/* Dark Green overlay at 80% opacity to give a strong green tint */}
                <div className="absolute inset-0 bg-[#0d2a1a]/80"></div>
            </div>

            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat z-0"></div>
            
            <div className="max-w-7xl mx-auto px-4 pt-16 pb-28 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-16">
                    <div className="w-full lg:w-[45%] space-y-5">
                        <h1 className="text-[26px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-[Oswald] font-bold uppercase leading-[1.3] md:leading-[1.2] tracking-normal drop-shadow-sm text-white">
                            BOOST YOUR SOCIAL MEDIA <br className="hidden lg:block" />
                            PRESENCE AND DRIVE <br className="hidden lg:block" />
                            RESULTS <span className="text-[#ccff00]">FAST WITH EXPERT <br className="hidden lg:block" />
                            MANAGEMENT</span>
                        </h1>
                    </div>
                    <div className="w-full lg:w-[55%] pl-0">
                        {/* Video box structurally matching homepage with a white border and straight edges */}
                        <div className="aspect-video bg-black/40 shadow-[0_30px_60px_rgba(0,0,0,0.6)] w-full max-w-[900px] flex items-center justify-center relative overflow-hidden border-[2px] lg:border-[4px] border-white/20 hover:border-white/50 transition-colors ml-auto cursor-pointer group rounded-lg lg:rounded-xl">
                            {!isPlaying ? (
                                <div
                                    className="absolute inset-0 z-20 cursor-pointer group"
                                    onClick={() => setIsPlaying(true)}
                                >
                                    <Image
                                        src="/images/smm-video-thumb.webp"
                                        alt="Watch SMM Video"
                                        fill
                                        className="object-cover scale-[1.03] transition-transform duration-700 group-hover:scale-[1.08]"
                                    />
                                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                                        <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                                            <svg className="w-8 h-8 text-[#0d2a1a] fill-current ml-1" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <iframe
                                    className="w-full h-full absolute inset-0 z-30"
                                    src="https://www.youtube.com/embed/krwqlVm6TqA?autoplay=1&rel=0"
                                    title="Lemonade Ideas SMM Video"
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
    );
}
