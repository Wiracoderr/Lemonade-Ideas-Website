import Link from "next/link";
import { BrandFacebook, BrandInstagram, BrandYoutube, BrandLinkedin } from "./SocialIcons";

export default function Footer() {
    return (
        <div className="bg-[#eef7f8] text-[#1e3a29] pt-16 pb-12 font-sans">
            <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Column 1: Logo & CTA */}
                    <div className="flex flex-col">
                        <Link href="/" className="inline-block self-start mb-6 w-auto cursor-pointer hover:opacity-90 transition-opacity">
                            <img src="/logos/PNGs - SVGs/SVG/Asset 2.svg" width={200} height={32} alt="Lemonade Ideas Marketing Agency" className="h-8 w-auto object-contain" />
                        </Link>
                        <p className="text-xs font-bold mb-6 max-w-[200px] leading-relaxed opacity-90">
                            SQUEEZE SUCCESS FOR EVERY CHALLENGE TO MAKE $$$
                        </p>
                        <Link href="#" className="font-bold text-sm flex items-center gap-1 hover:text-green-700 transition">
                            SCHEDULE A CALL <span className="text-green-700 text-lg leading-none">&raquo;</span>
                        </Link>
                    </div>

                    {/* Column 2: Contact Details */}
                    <div>
                        <h4 className="font-bold text-[13px] mb-6 uppercase tracking-wide">CONTACT DETAILS</h4>
                        <ul className="space-y-4 text-[13px] font-semibold opacity-90">
                            <li className="flex items-center gap-3"><i className="fas fa-phone-alt text-green-700"></i> +1 (424) 877-3789</li>
                            <li className="flex items-center gap-3"><i className="fa-regular fa-envelope text-green-700"></i> sales@lemonadeideas.com</li>
                            <li className="leading-relaxed pt-2">
                                209 21st Place Santa Monica 90402<br />California USA
                            </li>
                        </ul>
                        <div className="flex gap-2 mt-6">
                            <Link href="https://www.facebook.com/lemonadeidea/" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#1e3a29] text-white flex items-center justify-center hover:bg-green-700 transition-colors">
                                <BrandFacebook size={14} />
                            </Link>
                            <Link href="https://www.instagram.com/lemonade.ideas" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#1e3a29] text-white flex items-center justify-center hover:bg-green-700 transition-colors">
                                <BrandInstagram size={14} />
                            </Link>
                            <Link href="https://www.youtube.com/channel/UC1G5NWz9UbHE2L5HeIVJ2Xg" aria-label="YouTube" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#1e3a29] text-white flex items-center justify-center hover:bg-green-700 transition-colors">
                                <BrandYoutube size={14} />
                            </Link>
                            <Link href="http://www.linkedin.com/in/lemonade-ideas-080122348" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#1e3a29] text-white flex items-center justify-center hover:bg-green-700 transition-colors">
                                <BrandLinkedin size={14} />
                            </Link>
                        </div>
                    </div>

                    {/* Column 3: Quick Links */}
                    <div>
                        <h4 className="font-bold text-[13px] mb-6 uppercase tracking-wide">QUICK LINKS</h4>
                        <ul className="space-y-3 text-[13px] font-medium text-gray-700">
                            <li><Link className="hover:text-[#1e3a29] hover:font-bold transition" href="#">Reviews</Link></li>
                            <li><Link className="hover:text-[#1e3a29] hover:font-bold transition" href="#">White Label Resellers</Link></li>
                            <li><Link className="hover:text-[#1e3a29] hover:font-bold transition" href="#">Referral Program</Link></li>
                            <li><Link className="hover:text-[#1e3a29] hover:font-bold transition" href="#">Blogs</Link></li>
                            <li><Link className="hover:text-[#1e3a29] hover:font-bold transition" href="#">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Our Services */}
                    <div>
                        <h4 className="font-bold text-[13px] mb-6 uppercase tracking-wide">OUR SERVICES</h4>
                        <ul className="space-y-3 text-[13px] font-medium text-gray-700 mb-6">
                            <li><Link className="hover:text-[#1e3a29] hover:font-bold transition" href="/seochatgpt">SEO ChatGPT™</Link></li>
                            <li><Link className="hover:text-[#1e3a29] hover:font-bold transition" href="/seo">SEO</Link></li>
                            <li><Link className="hover:text-[#1e3a29] hover:font-bold transition" href="#">Google Ads Management</Link></li>
                            <li><Link className="hover:text-[#1e3a29] hover:font-bold transition" href="#">Website Design</Link></li>
                            <li><Link className="hover:text-[#1e3a29] hover:font-bold transition" href="/social-media-management">Social Media Management</Link></li>
                            <li><Link className="hover:text-[#1e3a29] hover:font-bold transition" href="/branding">Branding & Strategy</Link></li>
                        </ul>
                        <Link href="#" className="inline-block bg-[#1e3a29] text-white font-bold py-2 px-6 text-xs uppercase rounded hover:bg-green-800 transition">CONTACT US</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
