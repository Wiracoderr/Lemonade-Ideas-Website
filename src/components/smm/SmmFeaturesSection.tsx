import React from 'react';

export default function SmmFeaturesSection() {
    return (
        <section className="py-24 bg-white font-sans" data-purpose="features">
            <div className="container mx-auto px-4 text-center mb-16">
                <h4 className="text-[#34a853] font-bold text-xs uppercase tracking-[0.3em] mb-4">Our Approach to Social Media Management</h4>
                <h2 className="text-4xl font-extrabold text-[#0d2a1a] uppercase max-w-4xl mx-auto leading-tight">
                    Everything you need to grow your presence—and then some
                </h2>
            </div>
            <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
                {/* Feature Card 1 */}
                <div className="bg-blue-50/50 p-8 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 mb-6 flex items-center justify-center bg-[#0d2a1a] text-white rounded-lg text-xl">📋</div>
                    <h3 className="font-black text-[#0d2a1a] uppercase mb-3 text-lg">Easy Onboarding</h3>
                    <p className="text-[15px] font-medium text-gray-600 leading-relaxed">We know your time is valuable, so we&apos;ve designed a streamlined onboarding process that&apos;s simple and efficient. This way, we can get your social media strategy up and running quickly, so you see results faster.</p>
                </div>
                {/* Feature Card 2 */}
                <div className="bg-blue-50/50 p-8 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 mb-6 flex items-center justify-center bg-[#0d2a1a] text-white rounded-lg text-xl">📝</div>
                    <h3 className="font-black text-[#0d2a1a] uppercase mb-3 text-lg">No Contract Required</h3>
                    <p className="text-[15px] font-medium text-gray-600 leading-relaxed">We don&apos;t believe in locking you into long-term contracts. You&apos;re free to leave at any time, but we&apos;re confident you&apos;ll stay when you see how we elevate your social media presence.</p>
                </div>
                {/* Feature Card 3 */}
                <div className="bg-blue-50/50 p-8 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 mb-6 flex items-center justify-center bg-[#0d2a1a] text-white rounded-lg text-xl">💳</div>
                    <h3 className="font-black text-[#0d2a1a] uppercase mb-3 text-lg">Affordable Monthly Fee</h3>
                    <p className="text-[15px] font-medium text-gray-600 leading-relaxed">Our pricing is competitive and designed with small businesses in mind. We believe effective social media management should be accessible and budget-friendly, with no surprise fees—just a clear, affordable monthly rate.</p>
                </div>
                {/* Feature Card 4 */}
                <div className="bg-blue-50/50 p-8 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 mb-6 flex items-center justify-center bg-[#0d2a1a] text-white rounded-lg text-xl">📅</div>
                    <h3 className="font-black text-[#0d2a1a] uppercase mb-3 text-lg">Campaign Creation</h3>
                    <p className="text-[15px] font-medium text-gray-600 leading-relaxed">Our social media campaigns include everything you need: content creation, audience targeting, platform setup, post scheduling.</p>
                </div>
                {/* Feature Card 5 */}
                <div className="bg-blue-50/50 p-8 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 mb-6 flex items-center justify-center bg-[#0d2a1a] text-white rounded-lg text-xl">⚙️</div>
                    <h3 className="font-black text-[#0d2a1a] uppercase mb-3 text-lg">Ongoing Optimization</h3>
                    <p className="text-[15px] font-medium text-gray-600 leading-relaxed">We don&apos;t believe in a &quot;set it and forget it&quot; approach. Our team of experts continuously monitors and optimizes your social media strategy based on real-time data. As we analyze what works best, we fine-tune your content and engagement tactics, ensuring your social media presence keeps improving and delivering better results over time.</p>
                </div>
                {/* Feature Card 6 */}
                <div className="bg-blue-50/50 p-8 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 mb-6 flex items-center justify-center bg-[#0d2a1a] text-white rounded-lg text-xl">📈</div>
                    <h3 className="font-black text-[#0d2a1a] uppercase mb-3 text-lg">Proven Results</h3>
                    <p className="text-[15px] font-medium text-gray-600 leading-relaxed">How do you know it&apos;s working? We provide detailed reports tracking key metrics like engagement, reach, followers, and conversions. You&apos;ll see the impact of your social media campaigns and how they contribute to your business goals. Let us handle your social media management so you can focus on running your business!</p>
                </div>
            </div>
        </section>
    );
}
