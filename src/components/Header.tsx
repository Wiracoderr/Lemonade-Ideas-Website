"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, FileText, Menu, X } from "lucide-react";
import { BrandFacebook, BrandInstagram, BrandYoutube, BrandLinkedin } from "./SocialIcons";

export default function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMobileMenuOpen]);

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
                                <Link href="https://www.facebook.com/lemonadeidea/" className="bg-white text-[#0f3b1b] p-1.5 rounded-full hover:bg-yellow-400 transition-colors flex items-center justify-center">
                                    <BrandFacebook size={12} />
                                </Link>
                                <Link href="https://www.instagram.com/lemonade.ideas" className="bg-white text-[#0f3b1b] p-1.5 rounded-full hover:bg-yellow-400 transition-colors flex items-center justify-center">
                                    <BrandInstagram size={12} />
                                </Link>
                                <Link href="https://www.youtube.com/channel/UC1G5NWz9UbHE2L5HeIVJ2Xg" className="bg-white text-[#0f3b1b] p-1.5 rounded-full hover:bg-yellow-400 transition-colors flex items-center justify-center">
                                    <BrandYoutube size={12} />
                                </Link>
                                <Link href="http://www.linkedin.com/in/lemonade-ideas-080122348" className="bg-white text-[#0f3b1b] p-1.5 rounded-full hover:bg-yellow-400 transition-colors flex items-center justify-center">
                                    <BrandLinkedin size={12} />
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
                        width={256}
                        height={64}
                        className="object-contain object-left w-64 h-auto"
                        priority
                        fetchPriority="high"
                    />
                </Link>

                {/* Links (Hidden on Mobile) */}
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

                {/* CTA (Hidden on Mobile) */}
                <button className="hidden lg:block bg-[#0f3b1b] hover:bg-[#164e26] text-white px-6 py-3 text-xs font-bold tracking-widest transition-colors rounded-sm ml-4">
                    VIEW OUR PRICING
                </button>

                {/* Mobile Hamburger Button */}
                <button
                    className="lg:hidden text-[#0f3b1b] p-2"
                    onClick={() => setIsMobileMenuOpen(true)}
                    aria-label="Open Menu"
                >
                    <Menu size={28} />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed inset-0 z-[200] bg-[#1e3a29] text-white flex flex-col"
                    >
                        {/* Mobile Menu Header */}
                        <div className="flex items-center justify-between p-6">
                            <span className="font-display font-bold text-xl text-yellow-400 tracking-widest uppercase">
                                MENU
                            </span>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-white p-2 hover:text-yellow-400 transition-colors"
                                aria-label="Close Menu"
                            >
                                <X size={32} />
                            </button>
                        </div>

                        {/* Mobile Menu Links */}
                        <div className="flex-1 flex flex-col items-center justify-center gap-6 px-6 overflow-y-auto pb-12">
                            <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold uppercase tracking-wide hover:text-yellow-400 transition-colors">SEO</Link>
                            <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold uppercase tracking-wide hover:text-yellow-400 transition-colors">SEO ChatGpt</Link>
                            <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold uppercase tracking-wide hover:text-yellow-400 transition-colors">Google Ads</Link>
                            <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold uppercase tracking-wide hover:text-yellow-400 transition-colors">Social Media (SMM)</Link>
                            <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold uppercase tracking-wide hover:text-yellow-400 transition-colors">Branding</Link>
                            <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold uppercase tracking-wide hover:text-yellow-400 transition-colors">Websites</Link>
                            <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold uppercase tracking-wide hover:text-yellow-400 transition-colors">Blogs</Link>
                            <div className="w-16 h-1 bg-yellow-400 my-4" />
                            <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl text-yellow-400 font-bold uppercase tracking-wide hover:text-white transition-colors">Contact Us</Link>

                            {/* Mobile Menu CTA */}
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="mt-4 w-full max-w-[280px] bg-yellow-400 text-[#1e3a29] font-bold py-4 rounded text-sm tracking-widest uppercase hover:bg-white transition-colors"
                            >
                                VIEW OUR PRICING
                            </button>

                            <div className="flex gap-6 mt-8">
                                <Link href="https://www.facebook.com/lemonadeidea/" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-yellow-400"><BrandFacebook size={24} /></Link>
                                <Link href="https://www.instagram.com/lemonade.ideas" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-yellow-400"><BrandInstagram size={24} /></Link>
                                <Link href="https://www.youtube.com/channel/UC1G5NWz9UbHE2L5HeIVJ2Xg" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-yellow-400"><BrandYoutube size={24} /></Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
