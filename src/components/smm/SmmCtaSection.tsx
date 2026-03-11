import React from 'react';
import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function SmmCtaSection() {
    return (
        <section className="py-24 bg-white text-center font-sans" data-purpose="cta-bottom">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl lg:text-5xl font-black text-blue-50/50 uppercase leading-none mb-2">Grow your business with expert</h2>
                <h2 className="text-4xl lg:text-5xl font-black text-blue-50/50 uppercase leading-none mb-12">Social Media Management</h2>
                {/* CTA Button Box */}
                <div className="inline-block bg-[#ccff00] p-2 rounded-xl">
                    <Link href="#contact" className="bg-white px-10 py-5 rounded-lg flex items-center gap-4 hover:bg-gray-50 transition-colors group">
                        <span className="bg-[#ccff00] p-3 rounded-full text-[#0d2a1a] shadow-sm transform group-hover:scale-110 transition-transform">
                            <Phone size={24} className="fill-current" />
                        </span>
                        <div className="text-left">
                            <span className="block text-[11px] font-black uppercase text-gray-500 tracking-wider">Speak with our expert</span>
                            <span className="block text-xl font-black uppercase text-[#0d2a1a] tracking-tight">Schedule A Call</span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
