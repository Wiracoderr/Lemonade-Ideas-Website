"use client";

import { useState, useEffect, useTransition } from "react";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { m, LazyMotion, domAnimation, AnimatePresence } from "framer-motion";
import { Mail, Phone, FileText, Menu, X } from "lucide-react";
import { BrandFacebook, BrandInstagram, BrandYoutube, BrandLinkedin, BrandTiktok } from "./SocialIcons";

export default function Header() {
    const pathname = usePathname();
    const router = useRouter();
    const locale = useLocale();
    const t = useTranslations("Header");
    const [, startTransition] = useTransition();
    const [isVisible, setIsVisible] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const switchLocale = (nextLocale: string) => {
        startTransition(() => {
            router.replace(pathname, {locale: nextLocale});
        });
    };

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
            <LazyMotion features={domAnimation}>
            <AnimatePresence>
                {isVisible && (
                    <m.div
                        initial={{ scaleY: 1, opacity: 1 }}
                        animate={{ scaleY: 1, opacity: 1 }}
                        exit={{ scaleY: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ transformOrigin: "top", overflow: "hidden", height: 40 }}
                        className="flex w-full relative"
                    >
                        <div className="flex w-full h-10 text-[11px] font-semibold tracking-wide">
                            {/* Left Side (Light Blue) */}
                            <div className="flex-1 bg-[#f2f9fa] text-[#1E3A1A] flex items-center justify-end pr-8 gap-8 relative z-10">
                                <div className="flex items-center gap-2">
                                    <Mail size={14} />
                                    <a href="mailto:sales@lemonadeideas.com" className="hover:text-yellow-600">sales@lemonadeideas.com</a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Phone size={14} className="fill-[#1E3A1A]" />
                                    <Link href="/get-started" className="hover:text-yellow-600">{t('scheduleCall')}</Link>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FileText size={14} className="fill-[#1E3A1A]" />
                                    <span>{t('topBarTagline')}</span>
                                </div>
                            </div>

                            {/* Right Side (Dark Green Slanted) */}
                            <div
                                className="w-[380px] bg-[#1E3A1A] text-white flex items-center pl-10 gap-3 relative z-20"
                                style={{ clipPath: "polygon(20px 0, 100% 0, 100% 100%, 0% 100%)", marginLeft: "-20px" }}
                            >
                                <span className="text-[10px] tracking-wider font-bold mr-2">{t('followUs')}</span>
                                <Link href="https://www.facebook.com/lemonadeidea/" aria-label="Facebook" className="bg-white text-[#1E3A1A] p-1.5 rounded-full hover:bg-[#FED52B] transition-colors flex items-center justify-center">
                                    <BrandFacebook size={12} />
                                </Link>
                                <Link href="https://www.instagram.com/lemonade.ideas" aria-label="Instagram" className="bg-white text-[#1E3A1A] p-1.5 rounded-full hover:bg-[#FED52B] transition-colors flex items-center justify-center">
                                    <BrandInstagram size={12} />
                                </Link>
                                <Link href="https://www.youtube.com/channel/UC1G5NWz9UbHE2L5HeIVJ2Xg" aria-label="YouTube" className="bg-white text-[#1E3A1A] p-1.5 rounded-full hover:bg-[#FED52B] transition-colors flex items-center justify-center">
                                    <BrandYoutube size={12} />
                                </Link>
                                <Link href="http://www.linkedin.com/in/lemonade-ideas-080122348" aria-label="LinkedIn" className="bg-white text-[#1E3A1A] p-1.5 rounded-full hover:bg-[#FED52B] transition-colors flex items-center justify-center">
                                    <BrandLinkedin size={12} />
                                </Link>
                                <Link href="https://www.tiktok.com/@lemonade.ideas" aria-label="TikTok" className="bg-white text-[#1E3A1A] p-1.5 rounded-full hover:bg-[#FED52B] transition-colors flex items-center justify-center">
                                    <BrandTiktok size={12} />
                                </Link>
                            </div>
                        </div>
                    </m.div>
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
                    <Link href="/seo" className={`transition-colors ${pathname === '/seo' ? 'text-[#FED52B]' : 'text-gray-700 hover:text-[#1E3A1A]'}`}>{t('nav_seo')}</Link>
                    <Link href="/seochatgpt" className={`transition-colors ${pathname === '/seochatgpt' ? 'text-[#FED52B]' : 'text-gray-700 hover:text-[#1E3A1A]'}`}>{t('nav_seochatgpt')}</Link>
                    <Link href="/google-ads" className={`transition-colors ${pathname === '/google-ads' ? 'text-[#FED52B]' : 'text-gray-700 hover:text-[#1E3A1A]'}`}>{t('nav_googleAds')}</Link>
                    <Link href="/social-media-management" className={`transition-colors ${pathname === '/social-media-management' ? 'text-[#FED52B]' : 'text-gray-700 hover:text-[#1E3A1A]'}`}>{t('nav_smm')}</Link>
                    <Link href="/branding" className={`transition-colors ${pathname === '/branding' ? 'text-[#FED52B]' : 'text-gray-700 hover:text-[#1E3A1A]'}`}>{t('nav_branding')}</Link>
                    <Link href="/website" className={`transition-colors ${pathname === '/website' ? 'text-[#FED52B]' : 'text-gray-700 hover:text-[#1E3A1A]'}`}>{t('nav_websites')}</Link>
                    <Link href="/blogs" className={`transition-colors ${pathname === '/blogs' ? 'text-[#FED52B]' : 'text-gray-700 hover:text-[#1E3A1A]'}`}>{t('nav_blogs')}</Link>
                    <Link href="/free-tools" className={`transition-colors ${pathname === '/free-tools' ? 'text-[#FED52B]' : 'text-gray-700 hover:text-[#1E3A1A]'}`}>{locale === 'es' ? 'Herramientas' : 'Free Tools'}</Link>
                    <Link href="/contact" className={`transition-colors ${pathname === '/contact' ? 'text-[#FED52B]' : 'text-gray-700 hover:text-[#1E3A1A]'}`}>{t('nav_contact')}</Link>
                </nav>

                {/* CTA and Lang Switcher (Hidden on Mobile) */}
                <div className="hidden lg:flex items-center gap-4">
                    <div className="flex items-center gap-2 border border-gray-200 rounded-full px-3 py-1.5 bg-gray-50 shadow-sm">
                        <button onClick={() => switchLocale('en')} className={`transition-all hover:scale-110 w-6 h-6 rounded-full overflow-hidden border border-gray-200 flex items-center justify-center shrink-0 ${locale === 'en' ? 'opacity-100 ring-2 ring-offset-1 ring-green-600' : 'opacity-40 hover:opacity-100 grayscale hover:grayscale-0'}`} title="English" aria-label="English">
                            <Image src="https://flagcdn.com/w40/us.png" alt="US" width={40} height={27} className="w-full h-full object-cover object-center" unoptimized />
                        </button>
                        <div className="w-[1px] h-4 bg-gray-300"></div>
                        <button onClick={() => switchLocale('es')} className={`transition-all hover:scale-110 w-6 h-6 rounded-full overflow-hidden border border-gray-200 flex items-center justify-center shrink-0 ${locale === 'es' ? 'opacity-100 ring-2 ring-offset-1 ring-green-600' : 'opacity-40 hover:opacity-100 grayscale hover:grayscale-0'}`} title="Español" aria-label="Español">
                            <Image src="https://flagcdn.com/w40/mx.png" alt="MX" width={40} height={27} className="w-full h-full object-cover object-center" unoptimized />
                        </button>
                    </div>

                    <Link href="/pricing" className="bg-[#1E3A1A] text-white font-bold py-2.5 px-6 rounded text-sm uppercase tracking-wider hover:bg-[#2a5139] transition-colors duration-300">
                        {t('viewPricing')}
                    </Link>
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    className="lg:hidden text-[#1E3A1A] p-2"
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
                        <m.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-[190] bg-black/60"
                            onClick={() => setIsMobileMenuOpen(false)}
                            aria-hidden="true"
                        />

                        {/* Left-Side Drawer Menu */}
                        <m.div
                            initial={{ opacity: 0, x: "-100%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: "-100%" }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="fixed inset-y-0 left-0 w-[80%] max-w-sm z-[200] bg-[#f4f7f6] text-black flex flex-col shadow-2xl"
                        >
                            {/* Mobile Menu Header */}
                            <div className="flex items-center justify-between p-6 pb-8">
                                <div className="flex items-center">
                                    <Image src="/logos/SVG/Logo-2.svg" alt="Lemonade Ideas Logo" width={150} height={24} className="h-6 w-auto object-contain" />
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
                                {/* Mobile Language Switcher */}
                                <div className="flex items-center gap-4 border border-gray-200 rounded-full px-4 py-3 bg-white w-full justify-center shadow-sm">
                                    <button onClick={() => switchLocale('en')} className={`transition-all hover:scale-110 w-8 h-8 rounded-full overflow-hidden border border-gray-200 flex items-center justify-center shrink-0 ${locale === 'en' ? 'opacity-100 ring-2 ring-offset-2 ring-green-600' : 'opacity-40 hover:opacity-100 grayscale hover:grayscale-0'}`} title="English" aria-label="English">
                                        <Image src="https://flagcdn.com/w40/us.png" alt="US" width={40} height={27} className="w-full h-full object-cover object-center" unoptimized />
                                    </button>
                                    <div className="w-[1px] h-6 bg-gray-300"></div>
                                    <button onClick={() => switchLocale('es')} className={`transition-all hover:scale-110 w-8 h-8 rounded-full overflow-hidden border border-gray-200 flex items-center justify-center shrink-0 ${locale === 'es' ? 'opacity-100 ring-2 ring-offset-2 ring-green-600' : 'opacity-40 hover:opacity-100 grayscale hover:grayscale-0'}`} title="Español" aria-label="Español">
                                        <Image src="https://flagcdn.com/w40/mx.png" alt="MX" width={40} height={27} className="w-full h-full object-cover object-center" unoptimized />
                                    </button>
                                </div>

                                <Link href="/seo" onClick={() => setIsMobileMenuOpen(false)} className={`text-base font-bold tracking-wide transition-colors ${pathname === '/seo' ? 'text-[#FED52B]' : 'hover:text-[#1E3A1A]'}`}>{t('nav_seo')}</Link>
                                <Link href="/seochatgpt" onClick={() => setIsMobileMenuOpen(false)} className={`text-base font-bold tracking-wide transition-colors ${pathname === '/seochatgpt' ? 'text-[#FED52B]' : 'hover:text-[#1E3A1A]'}`}>{t('nav_seochatgpt')}</Link>
                                <Link href="/google-ads" onClick={() => setIsMobileMenuOpen(false)} className={`text-base font-bold tracking-wide transition-colors ${pathname === '/google-ads' ? 'text-[#FED52B]' : 'hover:text-[#1E3A1A]'}`}>{t('nav_googleAds')}</Link>
                                <Link href="/social-media-management" onClick={() => setIsMobileMenuOpen(false)} className={`text-base font-bold tracking-wide transition-colors ${pathname === '/social-media-management' ? 'text-[#FED52B]' : 'hover:text-[#1E3A1A]'}`}>{t('nav_smm')}</Link>
                                <Link href="/branding" onClick={() => setIsMobileMenuOpen(false)} className={`text-base font-bold tracking-wide transition-colors ${pathname === '/branding' ? 'text-[#FED52B]' : 'hover:text-[#1E3A1A]'}`}>{t('nav_branding')}</Link>
                                <Link href="/website" onClick={() => setIsMobileMenuOpen(false)} className={`text-base font-bold tracking-wide transition-colors ${pathname === '/website' ? 'text-[#FED52B]' : 'hover:text-[#1E3A1A]'}`}>{t('nav_websites')}</Link>
                                <Link href="/blogs" onClick={() => setIsMobileMenuOpen(false)} className={`text-base font-bold tracking-wide transition-colors ${pathname === '/blogs' ? 'text-[#FED52B]' : 'hover:text-[#1E3A1A]'}`}>{t('nav_blogs')}</Link>
                                <Link href="/free-tools" onClick={() => setIsMobileMenuOpen(false)} className={`text-base font-bold tracking-wide transition-colors ${pathname === '/free-tools' ? 'text-[#FED52B]' : 'hover:text-[#1E3A1A]'}`}>{locale === 'es' ? 'Herramientas' : 'Free Tools'}</Link>
                                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className={`text-base font-bold tracking-wide transition-colors ${pathname === '/contact' ? 'text-[#FED52B]' : 'hover:text-[#1E3A1A]'}`}>{t('nav_contact')}</Link>

                                <div className="mt-8 flex gap-6">
                                    <Link href="https://www.facebook.com/lemonadeidea/" aria-label="Facebook" onClick={() => setIsMobileMenuOpen(false)} className="text-[#1E3A1A] hover:text-yellow-500"><BrandFacebook size={24} /></Link>
                                    <Link href="https://www.instagram.com/lemonade.ideas" aria-label="Instagram" onClick={() => setIsMobileMenuOpen(false)} className="text-[#1E3A1A] hover:text-yellow-500"><BrandInstagram size={24} /></Link>
                                    <Link href="https://www.youtube.com/channel/UC1G5NWz9UbHE2L5HeIVJ2Xg" aria-label="YouTube" onClick={() => setIsMobileMenuOpen(false)} className="text-[#1E3A1A] hover:text-yellow-500"><BrandYoutube size={24} /></Link>
                                    <Link href="https://www.tiktok.com/@lemonade.ideas" aria-label="TikTok" onClick={() => setIsMobileMenuOpen(false)} className="text-[#1E3A1A] hover:text-yellow-500"><BrandTiktok size={24} /></Link>
                                </div>
                            </div>
                        </m.div>
                    </>
                )}
            </AnimatePresence>
            </LazyMotion>
        </header>
    );
}
