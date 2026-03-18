import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { BrandFacebook, BrandInstagram, BrandYoutube, BrandLinkedin } from "./SocialIcons";

export default function Footer() {
    const t = useTranslations("Footer");

    return (
        <div className="bg-[#eef7f8] text-[#1E3A1A] pt-16 pb-12 font-sans">
            <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Column 1: Logo & CTA */}
                    <div className="flex flex-col">
                        <Link href="/" className="inline-block self-start mb-6 w-auto cursor-pointer hover:opacity-90 transition-opacity">
                            <Image src="/logos/PNGs - SVGs/SVG/Asset 2.svg" width={200} height={32} alt="Lemonade Ideas Marketing Agency" className="h-8 w-auto object-contain" />
                        </Link>
                        <p className="text-xs font-bold mb-6 max-w-[200px] leading-relaxed opacity-90">
                            {t('tagline')}
                        </p>
                        <Link href="/get-started" className="font-bold text-sm flex items-center gap-1 hover:text-green-700 transition">
                            {t('scheduleCall')} <span className="text-green-700 text-lg leading-none">&raquo;</span>
                        </Link>
                    </div>

                    {/* Column 2: Contact Details */}
                    <div>
                        <h4 className="font-bold text-[13px] mb-6 uppercase tracking-wide">{t('contactDetails')}</h4>
                        <ul className="space-y-4 text-[13px] font-semibold opacity-90">
                            <li><a href="tel:+14248773789" className="flex items-center gap-3 hover:text-green-700 transition"><i className="fas fa-phone-alt text-green-700"></i> +1 (424) 877-3789</a></li>
                            <li><a href="mailto:sales@lemonadeideas.com" className="flex items-center gap-3 hover:text-green-700 transition"><i className="fa-regular fa-envelope text-green-700"></i> sales@lemonadeideas.com</a></li>
                            <li className="leading-relaxed pt-2">
                                209 21st Place Santa Monica 90402<br />California USA
                            </li>
                        </ul>
                        <div className="flex gap-2 mt-6">
                            <Link href="https://www.facebook.com/lemonadeidea/" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#1E3A1A] text-white flex items-center justify-center hover:bg-green-700 transition-colors">
                                <BrandFacebook size={14} />
                            </Link>
                            <Link href="https://www.instagram.com/lemonade.ideas" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#1E3A1A] text-white flex items-center justify-center hover:bg-green-700 transition-colors">
                                <BrandInstagram size={14} />
                            </Link>
                            <Link href="https://www.youtube.com/channel/UC1G5NWz9UbHE2L5HeIVJ2Xg" aria-label="YouTube" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#1E3A1A] text-white flex items-center justify-center hover:bg-green-700 transition-colors">
                                <BrandYoutube size={14} />
                            </Link>
                            <Link href="http://www.linkedin.com/in/lemonade-ideas-080122348" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#1E3A1A] text-white flex items-center justify-center hover:bg-green-700 transition-colors">
                                <BrandLinkedin size={14} />
                            </Link>
                        </div>
                    </div>

                    {/* Column 3: Our Services */}
                    <div>
                        <h4 className="font-bold text-[13px] mb-6 uppercase tracking-wide">{t('ourServices')}</h4>
                        <ul className="space-y-3 text-[13px] font-medium text-gray-700 mb-6">
                            <li><Link className="hover:text-[#1E3A1A] hover:font-bold transition" href="/seochatgpt">{t('service_seoChatgpt')}</Link></li>
                            <li><Link className="hover:text-[#1E3A1A] hover:font-bold transition" href="/seo">{t('service_seo')}</Link></li>
                            <li><Link className="hover:text-[#1E3A1A] hover:font-bold transition" href="/google-ads">{t('service_googleAds')}</Link></li>
                            <li><Link className="hover:text-[#1E3A1A] hover:font-bold transition" href="/website">{t('service_website')}</Link></li>
                            <li><Link className="hover:text-[#1E3A1A] hover:font-bold transition" href="/social-media-management">{t('service_smm')}</Link></li>
                            <li><Link className="hover:text-[#1E3A1A] hover:font-bold transition" href="/branding">{t('service_branding')}</Link></li>
                        </ul>
                        <Link href="/contact" className="inline-block bg-[#1E3A1A] text-white font-bold py-2 px-6 text-xs uppercase rounded hover:bg-[#3AAB43] transition">{t('contactUs')}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
