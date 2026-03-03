import Image from "next/image";

export default function MarketingServices() {
    return (
        <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
            <div className="absolute top-10 left-0 right-0 text-center select-none pointer-events-none">
                <span className="text-[12rem] font-display font-bold text-gray-50 dark:text-gray-800 opacity-80 uppercase leading-none">Services</span>
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-4xl lg:text-5xl font-display font-bold text-center text-primary dark:text-white mb-16 uppercase">
                    Internet Marketing Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="group relative h-64 overflow-hidden rounded-lg shadow-lg cursor-pointer">
                        <Image src="https://images.unsplash.com/photo-1432888117426-115f08ac4832?q=80&w=1000" alt="SEO" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black bg-opacity-60 transition duration-300 group-hover:bg-opacity-40"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                            <h3 className="text-xl font-display font-bold text-secondary mb-2">SEO</h3>
                            <span className="text-white text-sm font-bold uppercase tracking-wider border-b border-transparent group-hover:border-white pb-1 transition">Learn More</span>
                        </div>
                    </div>
                    <div className="group relative h-64 overflow-hidden rounded-lg shadow-lg cursor-pointer">
                        <Image src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000" alt="SEO ChatGPT" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black bg-opacity-60 transition duration-300 group-hover:bg-opacity-40"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                            <h3 className="text-xl font-display font-bold text-secondary mb-2">SEO CHATGPT</h3>
                            <span className="text-white text-sm font-bold uppercase tracking-wider border-b border-transparent group-hover:border-white pb-1 transition">Learn More</span>
                        </div>
                    </div>
                    <div className="group relative h-64 overflow-hidden rounded-lg shadow-lg cursor-pointer">
                        <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000" alt="Google Ads Management" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black bg-opacity-60 transition duration-300 group-hover:bg-opacity-40"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                            <h3 className="text-xl font-display font-bold text-secondary mb-2">GOOGLE ADS MANAGEMENT</h3>
                            <span className="text-white text-sm font-bold uppercase tracking-wider border-b border-transparent group-hover:border-white pb-1 transition">Learn More</span>
                        </div>
                    </div>
                    <div className="group relative h-64 overflow-hidden rounded-lg shadow-lg cursor-pointer">
                        <Image src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1000" alt="Website Design" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black bg-opacity-60 transition duration-300 group-hover:bg-opacity-40"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                            <h3 className="text-xl font-display font-bold text-secondary mb-2">WEBSITE DESIGN</h3>
                            <span className="text-white text-sm font-bold uppercase tracking-wider border-b border-transparent group-hover:border-white pb-1 transition">Learn More</span>
                        </div>
                    </div>
                    <div className="group relative h-64 overflow-hidden rounded-lg shadow-lg cursor-pointer">
                        <Image src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000" alt="Social Media Management" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black bg-opacity-60 transition duration-300 group-hover:bg-opacity-40"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                            <h3 className="text-xl font-display font-bold text-secondary mb-2">SOCIAL MEDIA MANAGEMENT</h3>
                            <span className="text-white text-sm font-bold uppercase tracking-wider border-b border-transparent group-hover:border-white pb-1 transition">Learn More</span>
                        </div>
                    </div>
                    <div className="group relative h-64 overflow-hidden rounded-lg shadow-lg cursor-pointer">
                        <Image src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000" alt="Branding & Strategy" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black bg-opacity-60 transition duration-300 group-hover:bg-opacity-40"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                            <h3 className="text-xl font-display font-bold text-secondary mb-2">BRANDING & STRATEGY</h3>
                            <span className="text-white text-sm font-bold uppercase tracking-wider border-b border-transparent group-hover:border-white pb-1 transition">Learn More</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section 2 inside guide (Guaranteed Ranking Full Bleed) */}
            <div className="relative w-full mt-10 bg-[#1e3a29]">

                {/* DESKTOP VERSION (Baked-in image + Hotspot) */}
                {/* This approach keeps the height constant, centering the massive 4213px image. 
                    Normal screens will crop the sides, and zooming out reveals them. */}
                <div className="hidden lg:flex w-full h-[550px] xl:h-[650px] 2xl:h-[700px] justify-center overflow-hidden bg-[#1e3a29] relative">
                    {/* Inner container locking the exact aspect ratio of the 4213x1080 original image */}
                    <div className="relative h-full aspect-[4213/1080] flex-shrink-0">
                        <Image
                            src="/images/Mesa de trabajo 1.webp"
                            alt="City connection guaranteed ranking"
                            fill
                            priority
                            quality={100}
                            sizes="(max-width: 3000px) 100vw, 4213px"
                            className="object-cover"
                        />
                        {/* Hotspot mapped exactly to the white "LEARN MORE" button area reported by the subagent */}
                        <a
                            href="#"
                            className="absolute z-10 block cursor-pointer transition-colors duration-300 hover:bg-white/20 rounded-sm"
                            style={{
                                left: '57%',
                                top: '72%',
                                width: '15%',
                                height: '8%'
                            }}
                            title="Learn More"
                            aria-label="Learn More about Guaranteed Ranking"
                        ></a>
                    </div>
                </div>

                {/* MOBILE VERSION (HTML Text) - Keeping exactly as was */}
                <div className="lg:hidden relative w-full min-h-[550px] flex items-center overflow-hidden bg-[#1e3a29]">
                    <div className="absolute top-0 left-0 w-[120%] h-full z-0">
                        <Image
                            src="/images/Mesa de trabajo 1.webp"
                            alt="City connection guaranteed ranking"
                            fill
                            priority
                            quality={100}
                            sizes="120vw"
                            className="object-cover object-left"
                        />
                        <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>
                    </div>

                    <div className="relative z-10 w-full flex justify-end">
                        <div className="w-full flex flex-col justify-center py-16 px-8 sm:px-12">
                            <div className="text-white w-full max-w-[650px]">
                                <h3 className="text-4xl font-black mb-6 font-display uppercase tracking-tight text-white leading-[1.05] drop-shadow-md">GUARANTEED RANKING&nbsp;™</h3>
                                <h4 className="text-[16px] font-bold mb-8 font-display opacity-100 leading-[1.5] drop-shadow">With GUARANTEED RANKING ™, You Don&apos;t Pay A Monthly Fee Until We Get You On Page 1 For 100+ Keywords.</h4>
                                <ul className="space-y-3 mb-10 text-[14px] font-semibold opacity-100 drop-shadow">
                                    <li className="flex items-start gap-3"><span className="text-xl leading-none">&bull;</span><span>Target hundreds of keywords simultaneously</span></li>
                                    <li className="flex items-start gap-3"><span className="text-xl leading-none">&bull;</span><span>Achieve rankings quickly (typically within 7 weeks)</span></li>
                                    <li className="flex items-start gap-3"><span className="text-xl leading-none">&bull;</span><span>Clear, affordable, and fixed monthly pricing</span></li>
                                    <li className="flex items-start gap-3"><span className="text-xl leading-none">&bull;</span><span>No long-term contract or cancellation fees</span></li>
                                    <li className="flex items-start gap-3"><span className="text-xl leading-none">&bull;</span><span>100% U.S.-based team for personalized service</span></li>
                                </ul>
                                <a className="inline-block bg-[#f4f7f6] text-[#0a2315] font-black py-4 px-10 text-[13px] uppercase tracking-wider hover:bg-white transition shadow-lg w-max" href="#">LEARN MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 3 PPC */}
            <div className="py-20 bg-surface-light dark:bg-surface-dark">
                <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <div className="border-l-4 border-green-600 pl-6 mb-8">
                            <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary dark:text-white uppercase mb-4">Google Ads Management (PPC)</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                                See leads coming through in less than 2 weeks! With Google Ads, you can advertise your business where it matters most — at the very top of Google search results. Our campaigns age like a fine wine and only get better with time. Plus, our pricing drops off in month 4 - check it out!
                            </p>
                            <p className="font-bold text-gray-800 dark:text-gray-200 text-sm">
                                Hundreds of campaigns built.<br />
                                Millions of dollars made for our clients.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-8 mb-8">
                            <div>
                                <div className="text-4xl lg:text-5xl font-bold text-green-500 mb-1">4,000+</div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">Monthly leads generated</p>
                            </div>
                            <div>
                                <div className="text-4xl lg:text-5xl font-bold text-green-500 mb-1">90%</div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">Percentage of clients seeing leads in the first week</p>
                            </div>
                        </div>
                        <a className="bg-primary hover:bg-primary-light text-white font-bold py-3 px-8 rounded text-sm uppercase transition duration-300 inline-block" href="#">Learn More</a>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-0 pb-[75%] sm:pb-[60%]">
                            <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800" alt="Analytics Dashboard" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 4 Portfolio */}
            <div className="py-24 bg-white dark:bg-gray-900 relative">
                <div className="absolute top-0 left-0 right-0 text-center select-none pointer-events-none opacity-50">
                    <span className="text-[8rem] lg:text-[12rem] font-display font-bold text-gray-100 dark:text-gray-800 uppercase leading-none">Portfolio</span>
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary dark:text-white mb-4 uppercase inline-block bg-white dark:bg-gray-900 px-4">
                        Website Design
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
                        Our experienced team specializes in developing modern WordPress websites. Below are samples of our work:
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg flex items-center justify-center relative min-h-[250px] shadow-lg overflow-hidden">
                            <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800" alt="Portfolio Item 1" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain p-4" />
                        </div>
                        <div className="bg-orange-50 dark:bg-gray-800 p-8 rounded-lg flex items-center justify-center relative min-h-[250px] shadow-lg overflow-hidden">
                            <Image src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800" alt="Portfolio Item 2" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain p-4" />
                        </div>
                        <div className="bg-blue-50 dark:bg-gray-800 p-8 rounded-lg flex items-center justify-center relative min-h-[250px] shadow-lg overflow-hidden">
                            <Image src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800" alt="Portfolio Item 3" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain p-4" />
                        </div>
                    </div>
                    <a className="bg-primary hover:bg-primary-light text-white font-bold py-3 px-8 rounded text-sm uppercase transition duration-300 inline-block" href="#">View More Example</a>
                </div>
            </div>
        </section>
    );
}
