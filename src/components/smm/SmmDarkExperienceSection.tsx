import React from 'react';

export default function SmmDarkExperienceSection() {
    return (
        <section className="bg-[#0d2a1a] py-16 font-sans" data-purpose="experience">
            <div className="container mx-auto px-4 flex flex-col items-end">
                <div className="w-full md:w-1/2 p-8 md:p-12 bg-[#0a2014] rounded-2xl border border-white/10 shadow-2xl">
                    <h2 className="text-2xl font-extrabold text-white uppercase leading-snug mb-4">
                        Put our years of social media experience to work for your business
                    </h2>
                    <p className="text-gray-300 text-[15px] font-medium leading-relaxed">
                        We&apos;ve managed successful social media campaigns across a wide range of industries—from local businesses and professional services to e-commerce brands and national organizations. When we manage your social media, we bring years of expertise to create strategies tailored to your business&apos;s goals and audience.
                    </p>
                </div>
            </div>
        </section>
    );
}
