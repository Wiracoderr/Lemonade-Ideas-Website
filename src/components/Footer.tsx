import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { BrandFacebook, BrandInstagram, BrandYoutube, BrandLinkedin } from "./SocialIcons";
import { Phone } from 'lucide-react';

export default function Footer() {
    const t = useTranslations("Footer");

    return (
        <footer className="font-sans">
            <div className="bg-[#eef7f8] text-gray-800 pt-16 pb-12">
                <div className="max-w-[1400px] mx-auto px-4 lg:px-6 pb-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        {/* Column 1: Logo & CTA */}
                        <div className="flex flex-col">
                            <Link href="/" className="inline-block self-start mb-6 w-auto cursor-pointer hover:opacity-90 transition-opacity">
                                <Image src="/logos/PNGs - SVGs/SVG/Asset 2.svg" width={200} height={32} alt="Lemonade Ideas Marketing Agency" className="h-8 w-auto object-contain" />
                            </Link>
                            <p className="text-[12.5px] font-extrabold mb-4 max-w-[200px] leading-snug text-gray-800 tracking-tight uppercase">
                                {t('tagline')}
                            </p>
                            <Link href="/get-started" className="font-bold text-[12.5px] text-[#122e0f] flex items-center gap-1 hover:text-[#40c34b] transition tracking-tight">
                                {t('scheduleCall')} <span className="text-[#122e0f] text-lg leading-none">&raquo;</span>
                            </Link>
                        </div>

                        {/* Column 2: Contact Details */}
                        <div>
                            <h4 className="font-black text-[14px] text-gray-950 mb-4 uppercase tracking-wide">{t('contactDetails')}</h4>
                            <ul className="space-y-2.5 text-[12.5px] font-semibold text-gray-800 opacity-95 leading-snug">
                                <li><a href="tel:+14248773789" className="flex items-center gap-2 hover:text-green-700 transition"><Phone strokeWidth={2.5} size={15} className="text-[#2b8833]" /> +1 (424) 877-3789</a></li>
                                <li><a href="mailto:sales@lemonadeideas.com" className="flex items-center gap-2 hover:text-green-700 transition"><i className="fa-regular fa-envelope text-[#122e0f] text-sm font-black"></i> sales@lemonadeideas.com</a></li>
                                <li className="pt-2 font-bold opacity-90">
                                    209 21st Place Santa Monica 90402<br />California USA
                                </li>
                            </ul>
                            <div className="flex gap-2 mt-6">
                                <Link href="https://www.facebook.com/lemonadeidea/" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="w-[28px] h-[28px] rounded-full bg-[#122e0f] text-white flex items-center justify-center hover:bg-[#40c34b] transition-colors">
                                    <BrandFacebook size={14} />
                                </Link>
                                <Link href="https://www.instagram.com/lemonade.ideas" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="w-[28px] h-[28px] rounded-full bg-[#122e0f] text-white flex items-center justify-center hover:bg-[#40c34b] transition-colors">
                                    <BrandInstagram size={14} />
                                </Link>
                                <Link href="https://www.youtube.com/channel/UC1G5NWz9UbHE2L5HeIVJ2Xg" aria-label="YouTube" target="_blank" rel="noopener noreferrer" className="w-[28px] h-[28px] rounded-full bg-[#122e0f] text-white flex items-center justify-center hover:bg-[#40c34b] transition-colors">
                                    <BrandYoutube size={14} />
                                </Link>
                                <Link href="http://www.linkedin.com/in/lemonade-ideas-080122348" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="w-[28px] h-[28px] rounded-full bg-[#122e0f] text-white flex items-center justify-center hover:bg-[#40c34b] transition-colors">
                                    <BrandLinkedin size={14} />
                                </Link>
                            </div>
                        </div>

                        {/* Column 3: Our Services */}
                        <div>
                            <h4 className="font-black text-[14px] text-gray-950 mb-4 uppercase tracking-wide">{t('ourServices')}</h4>
                            <ul className="space-y-2 text-[12.5px] font-medium text-gray-800 mb-6 w-full">
                                <li><Link className="hover:text-[#1E3A1A] transition hover:font-bold" href="/seochatgpt">{t('service_seoChatgpt')}</Link></li>
                                <li><Link className="hover:text-[#1E3A1A] transition hover:font-bold" href="/seo">{t('service_seo')}</Link></li>
                                <li><Link className="hover:text-[#1E3A1A] transition hover:font-bold" href="/google-ads">{t('service_googleAds')}</Link></li>
                                <li><Link className="hover:text-[#1E3A1A] transition hover:font-bold" href="/website">{t('service_website')}</Link></li>
                                <li><Link className="hover:text-[#1E3A1A] transition hover:font-bold" href="/social-media-management">{t('service_smm')}</Link></li>
                                <li><Link className="hover:text-[#1E3A1A] transition hover:font-bold" href="/branding">{t('service_branding')}</Link></li>
                            </ul>
                            <Link href="/contact" className="inline-block bg-[#122e0f] text-white font-bold py-2.5 px-6 text-[11px] uppercase rounded-[2px] hover:bg-[#40c34b] transition mt-1">{t('contactUs')}</Link>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Bottom Copyright Strip */}
            <div className="bg-[#122e0f] text-white py-3.5 text-center text-[11px] font-bold tracking-wider">
                &copy; 2025 All Rights Reserved | Lemonade Ideas
            </div>
        </footer>
    );
}
