import React from 'react';

export default function SmmExperienceSection() {
    return (
        <section className="bg-[#0d2a1a] py-20 overflow-hidden font-sans" data-purpose="feature-overlap">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2 mb-12 md:mb-0">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-white uppercase leading-snug italic">
                        &quot;I&apos;ve tried social media management before. What makes this different?&quot;
                    </h2>
                    <p className="text-gray-200 mt-6 max-w-2xl text-[19.5px] font-medium leading-relaxed">
                        Social media management can be incredibly effective when done right, and that&apos;s where we shine. With experience running hundreds of successful campaigns, we know how to craft strategies that deliver real results. Whether you&apos;re starting fresh or need help refining your current approach, we&apos;ll ensure your social media presence is optimized for success. Already have an existing campaign? Let us review it and provide expert recommendations to help you reach your goals!
                    </p>
                </div>
                <div className="md:w-1/2 flex justify-center relative">
                    {/* 3D Social Icons Simulation */}
                    <div className="grid grid-cols-3 gap-4 rotate-12 transform hover:rotate-0 transition-transform duration-700">
                        <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-blue-900/50">f</div>
                        <div className="w-16 h-16 bg-pink-500 rounded-xl flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-pink-900/50">📸</div>
                        <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-red-900/50">▶</div>
                        <div className="w-16 h-16 bg-sky-400 rounded-xl flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-sky-900/50">🐦</div>
                        <div className="w-16 h-16 bg-blue-800 rounded-xl flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-blue-900/50">in</div>
                        <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-green-900/50">💬</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
