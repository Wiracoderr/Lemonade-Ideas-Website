import React from 'react';

export default function SmmHeroSection() {
    return (
        <section className="bg-[#0d2a1a] font-sans relative overflow-hidden py-20 lg:py-32" data-purpose="hero">
            {/* Abstract background graphics */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 border border-white rotate-45"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 border border-white -rotate-12"></div>
            </div>
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 relative z-10">
                <div className="lg:w-1/2">
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight uppercase">
                        Boost your social media presence and drive results <span className="text-[#ccff00]">fast with expert management</span>
                    </h1>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                    {/* Video Placeholder Container */}
                    <div className="w-full max-w-xl aspect-video bg-white/10 rounded-lg flex items-center justify-center relative group cursor-pointer border border-white/20">
                        <div className="w-16 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white shadow-lg transform transition-transform group-hover:scale-110">
                            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
