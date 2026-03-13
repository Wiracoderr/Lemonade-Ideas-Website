"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, FileText, Menu, X } from "lucide-react";
import { BrandFacebook, BrandInstagram, BrandYoutube, BrandLinkedin } from "./SocialIcons";

export default function Header() {
    const pathname = usePathname();
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
                        initial={{ scaleY: 0, opacity: 0 }}
                        animate={{ scaleY: 1, opacity: 1 }}
                        exit={{ scaleY: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ transformOrigin: "top", overflow: "hidden", height: 40 }}
                        className="flex w-full relative"
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
                                <Link href="https://www.facebook.com/lemonadeidea/" aria-label="Facebook" className="bg-white text-[#0f3b1b] p-1.5 rounded-full hover:bg-yellow-400 transition-colors flex items-center justify-center">
                                    <BrandFacebook size={12} />
                                </Link>
                                <Link href="https://www.instagram.com/lemonade.ideas" aria-label="Instagram" className="bg-white text-[#0f3b1b] p-1.5 rounded-full hover:bg-yellow-400 transition-colors flex items-center justify-center">
                                    <BrandInstagram size={12} />
                                </Link>
                                <Link href="https://www.youtube.com/channel/UC1G5NWz9UbHE2L5HeIVJ2Xg" aria-label="YouTube" className="bg-white text-[#0f3b1b] p-1.5 rounded-full hover:bg-yellow-400 transition-colors flex items-center justify-center">
                                    <BrandYoutube size={12} />
                                </Link>
                                <Link href="http://www.linkedin.com/in/lemonade-ideas-080122348" aria-label="LinkedIn" className="bg-white text-[#0f3b1b] p-1.5 rounded-full hover:bg-yellow-400 transition-colors flex items-center justify-center">
                                    <BrandLinkedin size={12} />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* MAIN NAV BAR */}
            <div className="max-w-[1400px] mx-auto px-4 lg:px-6 h-[80px] lg:h-[90px] flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="relative w-48 lg:w-64 h-12 lg:h-16 flex-shrink-0">
                    <Image
                        src="/logos/SVG/Logo-2.svg"
                        alt="Lemonade Ideas"
                        fill
                        className="object-contain object-left"
                        priority
                        fetchPriority="high"
                    />
                </Link>

                {/* Links (Hidden on Mobile) */}
                <nav className="hidden lg:flex items-center gap-5 text-[13px] font-bold tracking-tight">
                    <Link href="/seo" className={`transition-colors ${pathname === '/seo' ? 'text-[#ffb703]' : 'text-gray-700 hover:text-[#0f3b1b]'}`}>SEO</Link>
                    <Link href="/seochatgpt" className={`transition-colors ${pathname === '/seochatgpt' ? 'text-[#ffb703]' : 'text-gray-700 hover:text-[#0f3b1b]'}`}>SEO ChatGpt</Link>
                    <Link href="/google-ads" className={`transition-colors ${pathname === '/google-ads' ? 'text-[#ffb703]' : 'text-gray-700 hover:text-[#0f3b1b]'}`}>Google Ads</Link>
                    <Link href="/social-media-management" className={`transition-colors ${pathname === '/social-media-management' ? 'text-[#ffb703]' : 'text-gray-700 hover:text-[#0f3b1b]'}`}>SMM</Link>
                    <Link href="/branding" className={`transition-colors ${pathname === '/branding' ? 'text-[#ffb703]' : 'text-gray-700 hover:text-[#0f3b1b]'}`}>Branding</Link>
                    <Link href="/website" className={`transition-colors ${pathname === '/website' ? 'text-[#ffb703]' : 'text-gray-700 hover:text-[#0f3b1b]'}`}>Websites</Link>
                    <Link href="/blogs" className={`transition-colors ${pathname === '/blogs' ? 'text-[#ffb703]' : 'text-gray-700 hover:text-[#0f3b1b]'}`}>Blogs</Link>
                    <Link href="/contact" className={`transition-colors ${pathname === '/contact' ? 'text-[#ffb703]' : 'text-gray-700 hover:text-[#0f3b1b]'}`}>Contact</Link>
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
                    <>
                        {/* Dark Overlay Background */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-[190] bg-black/60"
                            onClick={() => setIsMobileMenuOpen(false)}
                            aria-hidden="true"
                        />

                        {/* Left-Side Drawer Menu */}
                        <motion.div
                            initial={{ opacity: 0, x: "-100%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: "-100%" }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="fixed inset-y-0 left-0 w-[80%] max-w-sm z-[200] bg-[#f4f7f6] text-black flex flex-col shadow-2xl"
                        >
                            {/* Mobile Menu Header */}
                            <div className="flex items-center justify-between p-6 pb-8">
                                <div className="flex items-center">
                                    <img src="/logos/SVG/Logo-2.svg" alt="Lemonade Ideas Logo" className="h-6 w-auto object-contain" />
                                </div>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-cyan-100 hover:text-cyan-300 transition-colors"
                                    aria-label="Close Menu"
                                >
                                    <X size={28} />
                                </button>
                            </div>

                            {/* Mobile Menu Links */}
                            <div className="flex-1 flex flex-col items-start gap-8 px-8 overflow-y-auto pb-12">
                                <Link href="/seo" onClick={() => setIsMobileMenuOpen(false)} className={`text-base font-bold tracking-wide transition-colors ${pathname === '/seo' ? 'text-[#ffb703]' : 'hover:text-[#1e3a29]'}`}>SEO</Link>
                                <Link href="/seochatgpt" onClick={() => setIsMobileMenuOpen(false)} className={`text-base font-bold tracking-wide transition-colors ${pathname === '/seochatgpt' ? 'text-[#ffb703]' : 'hover:text-[#1e3a29]'}`}>SEO ChatGpt</Link>
                                <Link href="/google-ads" onClick={() => setIsMobileMenuOpen(false)} className={`text-base font-bold tracking-wide transition-colors ${pathname === '/google-ads' ? 'text-[#ffb703]' : 'hover:text-[#1e3a29]'}`}>Google Ads</Link>
                                <Link href="/social-media-management" onClick={() => setIsMobileMenuOpen(false)} className={`text-base font-bold tracking-wide transition-colors ${pathname === '/social-media-management' ? 'text-[#ffb703]' : 'hover:text-[#1e3a29]'}`}>SMM</Link>
                                <Link href="/branding" onClick={() => setIsMobileMenuOpen(false)} className={`text-base font-bold tracking-wide transition-colors ${pathname === '/branding' ? 'text-[#ffb703]' : 'hover:text-[#1e3a29]'}`}>Branding</Link>
                                <Link href="/website" onClick={() => setIsMobileMenuOpen(false)} className={`text-base font-bold tracking-wide transition-colors ${pathname === '/website' ? 'text-[#ffb703]' : 'hover:text-[#1e3a29]'}`}>Websites</Link>
                                <Link href="/blogs" onClick={() => setIsMobileMenuOpen(false)} className={`text-base font-bold tracking-wide transition-colors ${pathname === '/blogs' ? 'text-[#ffb703]' : 'hover:text-[#1e3a29]'}`}>Blogs</Link>
                                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className={`text-base font-bold tracking-wide transition-colors ${pathname === '/contact' ? 'text-[#ffb703]' : 'hover:text-[#1e3a29]'}`}>Contact</Link>

                                <div className="mt-8 flex gap-6">
                                    <Link href="https://www.facebook.com/lemonadeidea/" aria-label="Facebook" onClick={() => setIsMobileMenuOpen(false)} className="text-[#1e3a29] hover:text-yellow-500"><BrandFacebook size={24} /></Link>
                                    <Link href="https://www.instagram.com/lemonade.ideas" aria-label="Instagram" onClick={() => setIsMobileMenuOpen(false)} className="text-[#1e3a29] hover:text-yellow-500"><BrandInstagram size={24} /></Link>
                                    <Link href="https://www.youtube.com/channel/UC1G5NWz9UbHE2L5HeIVJ2Xg" aria-label="YouTube" onClick={() => setIsMobileMenuOpen(false)} className="text-[#1e3a29] hover:text-yellow-500"><BrandYoutube size={24} /></Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
