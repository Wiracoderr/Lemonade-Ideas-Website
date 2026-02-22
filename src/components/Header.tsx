"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, FileText, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

export default function Header() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Only show the top info bar when at the very top of the page
            if (currentScrollY <= 5) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="w-full sticky top-0 bg-white shadow-sm font-sans z-[100]">
            {/* TOP INFO BAR */}
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 40, opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="flex w-full overflow-hidden relative"
                    >
                        <div className="flex w-full h-10 text-[11px] font-semibold tracking-wide">
                            {/* Left Side (Light Blue) */}
                            <div className="flex-1 bg-[#f2f9fa] text-[#0f3b1b] flex items-center justify-end pr-8 gap-8 relative z-10">
                                <div className="flex items-center gap-2">
                                    <Mail size={14} />
                                    <a href="mailto:sales@lemonadeideas.com" className="hover:text-yellow-600">sales@lemonadeideas.com</a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Phone size={14} className="fill-[#0f3b1b]" />
                                    <Link href="#" className="hover:text-yellow-600">Schedule A Call</Link>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FileText size={14} className="fill-[#0f3b1b]" />
                                    <span>No Contracts. Affordable Prices. Built for Small Business.</span>
                                </div>
                            </div>

                            {/* Right Side (Dark Green Slanted) */}
                            <div
                                className="w-[380px] bg-[#0f3b1b] text-white flex items-center pl-10 gap-3 relative z-20"
                                style={{ clipPath: "polygon(20px 0, 100% 0, 100% 100%, 0% 100%)", marginLeft: "-20px" }}
                            >
                                <span className="text-[10px] tracking-wider font-bold mr-2">FOLLOW US ON :</span>
                                <Link href="https://www.facebook.com/lemonadeidea/" className="bg-white text-[#0f3b1b] p-1 rounded-full hover:bg-yellow-400 transition-colors">
                                    <Facebook size={12} className="fill-[#0f3b1b]" />
                                </Link>
                                <Link href="https://www.instagram.com/lemonade.ideas" className="bg-white text-[#0f3b1b] p-1 rounded-full hover:bg-yellow-400 transition-colors">
                                    <Instagram size={12} />
                                </Link>
                                <Link href="https://www.youtube.com/channel/UC1G5NWz9UbHE2L5HeIVJ2Xg" className="bg-white text-[#0f3b1b] p-1 rounded-full hover:bg-yellow-400 transition-colors">
                                    <Youtube size={12} className="fill-[#0f3b1b]" />
                                </Link>
                                <Link href="http://www.linkedin.com/in/lemonade-ideas-080122348" className="bg-white text-[#0f3b1b] p-1 rounded-full hover:bg-yellow-400 transition-colors">
                                    <Linkedin size={12} className="fill-[#0f3b1b]" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* MAIN NAV BAR */}
            <div className="max-w-[1400px] mx-auto px-6 h-[90px] flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="relative w-64 h-16 flex-shrink-0">
                    <Image
                        src="/logos/PNGs - SVGs/4x/Asset 2@4x-8.png"
                        alt="Lemonade Ideas"
                        fill
                        className="object-contain object-left"
                        priority
                    />
                </Link>

                {/* Links */}
                <nav className="hidden lg:flex items-center gap-5 text-[13px] font-bold text-gray-700 tracking-tight">
                    <Link href="#" className="hover:text-[#0f3b1b] transition-colors">SEO</Link>
                    <Link href="#" className="hover:text-[#0f3b1b] transition-colors">SEO ChatGpt</Link>
                    <Link href="#" className="hover:text-[#0f3b1b] transition-colors">Google Ads</Link>
                    <Link href="#" className="hover:text-[#0f3b1b] transition-colors">SMM</Link>
                    <Link href="#" className="hover:text-[#0f3b1b] transition-colors">Branding</Link>
                    <Link href="#" className="hover:text-[#0f3b1b] transition-colors">Websites</Link>
                    <Link href="#" className="hover:text-[#0f3b1b] transition-colors">Blogs</Link>
                    <Link href="#" className="hover:text-[#0f3b1b] transition-colors">Contact</Link>
                </nav>

                {/* CTA */}
                <button className="bg-[#0f3b1b] hover:bg-[#164e26] text-white px-6 py-3 text-xs font-bold tracking-widest transition-colors rounded-sm ml-4">
                    VIEW OUR PRICING
                </button>
            </div>
        </header>
    );
}
