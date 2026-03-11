import React from 'react';

export default function SmmAddOnsSection() {
    return (
        <section className="py-20 bg-white font-sans" data-purpose="add-ons">
            <div className="container mx-auto px-4 flex justify-end">
                <div className="w-full md:w-1/2 bg-[#eef8fd] p-10 md:p-14 rounded-2xl text-[#0d2a1a] shadow-2xl">
                    <h2 className="text-2xl md:text-3xl font-extrabold uppercase mb-6 leading-tight">Explore our social media add-ons</h2>
                    <p className="text-[15px] text-gray-700 mb-10 font-medium">Looking to expand your social media presence and increase your reach? We offer the following add-ons to enhance your campaign:</p>
                    <ul className="space-y-8">
                        <li>
                            <strong className="text-[#0a2e15] uppercase block mb-2 text-lg">Increased PPC Budget ($5k+):</strong>
                            <p className="text-gray-600 font-medium leading-relaxed">Perfect for businesses aiming to scale and maximize exposure across platforms.</p>
                        </li>
                        <li>
                            <strong className="text-[#0a2e15] uppercase block mb-2 text-lg">Bing Ads Management:</strong>
                            <p className="text-gray-600 font-medium leading-relaxed">Extend your reach by adding platforms like Pinterest, LinkedIn, or TikTok to your campaign.</p>
                        </li>
                        <li>
                            <strong className="text-[#0a2e15] uppercase block mb-2 text-lg">Local Service Ads:</strong>
                            <p className="text-gray-600 font-medium leading-relaxed">Ideal for businesses focusing on specific regions or service areas to connect with local audiences.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
