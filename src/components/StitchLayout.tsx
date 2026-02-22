import React from 'react';

export default function StitchLayout() {
    return (
        <div className="font-body text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 z-20 relative">
            <section className="relative bg-[#1e3a29] py-20 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80')] bg-cover bg-center"></div>
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#1e3a29] via-[#1e3a29] to-transparent opacity-90"></div>
                <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 mb-10 lg:mb-0">
                        <div className="text-white border-2 border-white/20 inline-block px-4 py-1 text-4xl mb-6 font-display font-bold uppercase tracking-widest opacity-30 select-none">
                            Lemonade Ideas
                        </div>
                        <h2 className="text-4xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
                            INTERNET MARKETING THAT'S <span className="text-yellow-400">FAST</span>, <span className="text-yellow-400">AFFORDABLE</span>, AND DRIVES YOU LEADS!
                        </h2>
                        <p className="text-white text-lg mb-8 opacity-90 font-light">
                            Are you ready for "Lemonade Ideas"? We can't wait to help you grow.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a className="bg-white text-[#1e3a29] hover:bg-gray-100 font-bold py-3 px-8 rounded shadow-lg transition duration-300" href="#">
                                SPEAK WITH OUR EXPERT
                            </a>
                            <a className="border-2 border-white text-white hover:bg-white hover:text-[#1e3a29] font-bold py-3 px-8 rounded transition duration-300" href="#">
                                SEE OUR PRICING
                            </a>
                        </div>
                    </div>
                    <div className="lg:w-1/2 lg:pl-12 w-full relative z-20">
                        <div className="bg-white rounded-lg shadow-2xl p-2 aspect-video w-full">
                            <iframe
                                className="w-full h-full rounded bg-black"
                                src="https://www.youtube.com/embed/TZverr1QZUk?start=9"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
                <div className="absolute top-10 left-0 right-0 text-center select-none pointer-events-none">
                    <span className="text-[12rem] font-display font-bold text-gray-100 dark:text-gray-800 opacity-100 uppercase leading-none">Services</span>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-4xl lg:text-5xl font-display font-bold text-center text-[#1e3a29] dark:text-white mb-16 uppercase">
                        Internet Marketing Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Service Cards */}
                        <div className="group relative h-64 overflow-hidden rounded-lg shadow-lg cursor-pointer">
                            <img alt="SEO" className="w-full h-full object-cover transition duration-500 group-hover:scale-110" src="/services/SEO.avif" />
                            {/* Base overlay for dark contrast */}
                            <div className="absolute inset-0 bg-black/40 transition duration-300 group-hover:bg-black/20"></div>
                            {/* Bottom 20% blur/gradient for text legibility like Stitch */}
                            <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-black/90 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                                <h3 className="text-xl font-display font-bold text-yellow-400 mb-2">SEO</h3>
                                <span className="text-white text-sm font-bold uppercase tracking-wider border-b border-transparent group-hover:border-white pb-1 transition">Learn More</span>
                            </div>
                        </div>
                        <div className="group relative h-64 overflow-hidden rounded-lg shadow-lg cursor-pointer">
                            <img alt="SEO ChatGPT" className="w-full h-full object-cover transition duration-500 group-hover:scale-110" src="/services/SEO Chat GPT.avif" />
                            <div className="absolute inset-0 bg-black/40 transition duration-300 group-hover:bg-black/20"></div>
                            <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-black/90 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                                <h3 className="text-xl font-display font-bold text-yellow-400 mb-2">SEO CHATGPT</h3>
                                <span className="text-white text-sm font-bold uppercase tracking-wider border-b border-transparent group-hover:border-white pb-1 transition">Learn More</span>
                            </div>
                        </div>
                        <div className="group relative h-64 overflow-hidden rounded-lg shadow-lg cursor-pointer">
                            <img alt="Google Ads Management" className="w-full h-full object-cover transition duration-500 group-hover:scale-110" src="/services/photo-1654277041042-8927699fcfd2.avif" />
                            <div className="absolute inset-0 bg-black/40 transition duration-300 group-hover:bg-black/20"></div>
                            <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-black/90 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                                <h3 className="text-xl font-display font-bold text-yellow-400 mb-2">GOOGLE ADS MANAGEMENT</h3>
                                <span className="text-white text-sm font-bold uppercase tracking-wider border-b border-transparent group-hover:border-white pb-1 transition">Learn More</span>
                            </div>
                        </div>
                        <div className="group relative h-64 overflow-hidden rounded-lg shadow-lg cursor-pointer">
                            <img alt="Website Design" className="w-full h-full object-cover transition duration-500 group-hover:scale-110" src="/services/photo-1678690832311-bb6e361989ca.avif" />
                            <div className="absolute inset-0 bg-black/40 transition duration-300 group-hover:bg-black/20"></div>
                            <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-black/90 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                                <h3 className="text-xl font-display font-bold text-yellow-400 mb-2">WEBSITE DESIGN</h3>
                                <span className="text-white text-sm font-bold uppercase tracking-wider border-b border-transparent group-hover:border-white pb-1 transition">Learn More</span>
                            </div>
                        </div>
                        <div className="group relative h-64 overflow-hidden rounded-lg shadow-lg cursor-pointer">
                            <img alt="Social Media Management" className="w-full h-full object-cover transition duration-500 group-hover:scale-110" src="/services/social media management.avif" />
                            <div className="absolute inset-0 bg-black/40 transition duration-300 group-hover:bg-black/20"></div>
                            <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-black/90 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                                <h3 className="text-xl font-display font-bold text-yellow-400 mb-2">SOCIAL MEDIA MANAGEMENT</h3>
                                <span className="text-white text-sm font-bold uppercase tracking-wider border-b border-transparent group-hover:border-white pb-1 transition">Learn More</span>
                            </div>
                        </div>
                        <div className="group relative h-64 overflow-hidden rounded-lg shadow-lg cursor-pointer">
                            <img alt="Branding & Strategy" className="w-full h-full object-cover transition duration-500 group-hover:scale-110" src="/services/Branding.avif" />
                            <div className="absolute inset-0 bg-black/40 transition duration-300 group-hover:bg-black/20"></div>
                            <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-black/90 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                                <h3 className="text-xl font-display font-bold text-yellow-400 mb-2">BRANDING & STRATEGY</h3>
                                <span className="text-white text-sm font-bold uppercase tracking-wider border-b border-transparent group-hover:border-white pb-1 transition">Learn More</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative h-auto lg:h-[500px] flex flex-col lg:flex-row bg-[#1e3a29] border-b-8 border-yellow-400 overflow-hidden">
                <div className="lg:w-[55%] relative h-[300px] lg:h-full z-10">
                    <img alt="City View" className="w-full h-full object-cover scale-x-[-1]" src="/images/home-image.avif" />
                </div>
                <div className="lg:w-auto lg:flex-1 bg-[#1e3a29] relative flex items-center lg:-ml-28 lg:pl-32 p-10 z-20">
                    <div className="absolute inset-y-0 -left-16 lg:-left-24 w-32 lg:w-48 bg-[#1e3a29] transform -skew-x-12 hidden lg:block origin-bottom shadow-[-15px_0_20px_rgba(0,0,0,0.3)]"></div>
                    <div className="relative z-30 text-white max-w-lg">
                        <h3 className="text-2xl font-bold mb-4 font-display">With GUARANTEED RANKING ™, You Don't Pay A Monthly Fee Until We Get You On Page 1 For 100+ Keywords.</h3>
                        <ul className="space-y-5 mb-8 text-[17.5px] font-medium opacity-90">
                            <li className="flex items-start">Target hundreds of keywords simultaneously</li>
                            <li className="flex items-start">Achieve rankings quickly (typically within 7 weeks)</li>
                            <li className="flex items-start">Clear, affordable, and fixed monthly pricing</li>
                            <li className="flex items-start">No long-term contract or cancellation fees</li>
                            <li className="flex items-start">100% U.S.-based team for personalized service</li>
                        </ul>
                        <a className="bg-white text-[#1e3a29] font-bold py-2 px-6 rounded text-sm hover:bg-gray-200 transition" href="#">LEARN MORE</a>
                    </div>
                </div>
            </section>

            {/* Marketing Services List Section */}
            <section
                className="py-24 relative overflow-hidden"
                style={{
                    backgroundColor: '#eaf7fd',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Cg fill='none' stroke='%23d1e9f5' stroke-width='1.5' stroke-opacity='0.6'%3E%3Cpath d='M-100 100 L800 1000 M-100 150 L800 1050 M-100 200 L800 1100'/%3E%3Crect x='100' y='100' width='50' height='50' transform='rotate(45 125 125)'/%3E%3Ccircle cx='400' cy='300' r='100' stroke-dasharray='10 5'/%3E%3Cpath d='M0 0 L800 600' stroke-width='0.5'/%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                    position: 'relative'
                }}
            >
                <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <div className="border-l-4 border-green-600 pl-6 mb-8">
                            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#1e3a29] dark:text-white uppercase mb-4">Google Ads Management (PPC)</h2>
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
                        <a className="bg-[#1e3a29] hover:bg-[#2e523e] text-white font-bold py-3 px-8 rounded text-sm uppercase transition duration-300 inline-block" href="#">Learn More</a>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img alt="Analytics Dashboard" className="w-full h-auto object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoz-Lljn09Ihs3zBDm-3UqoNFlGOqJTWqJmuvDTuMpCm7BtdEsLJHuwpM8fyZwYLp2C9BC9ZYhObomoxk1yQT_7cvJfS0sg6FQ-8zYJEIxjgAs7Z1fUsVKuDwUqKbjCCG8sQyDBNnBaYT6zErGzrXtQEWrvlBRH1CAJrvT8GPGsCmC6x-eQiROZcsip8Iyu1knK_iQvUZ7vo3SCuZfRd1KzKocoL-ipUleFkuGcEAsh_gvbnrocjitIy8iPZ_9UeKaNExm_aO01UeA" />
                            <div className="absolute inset-0 bg-blue-900 bg-opacity-40 flex items-center justify-center">
                                <div className="border border-white/30 bg-white/10 backdrop-blur-sm p-4 rounded-lg w-3/4">
                                    <div className="flex items-end justify-between h-32 gap-2 mb-2">
                                        <div className="w-full bg-blue-400/50 h-[30%] rounded-t"></div>
                                        <div className="w-full bg-blue-400/60 h-[50%] rounded-t"></div>
                                        <div className="w-full bg-blue-400/80 h-[40%] rounded-t"></div>
                                        <div className="w-full bg-green-400 h-[80%] rounded-t shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
                                        <div className="w-full bg-blue-400/70 h-[60%] rounded-t"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white dark:bg-gray-900 relative">
                <div className="absolute top-0 left-0 right-0 text-center select-none pointer-events-none opacity-50">
                    <span className="text-[8rem] lg:text-[12rem] font-display font-bold text-gray-100 dark:text-gray-800 uppercase leading-none">Portfolio</span>
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-4xl lg:text-5xl font-display font-bold text-[#1e3a29] dark:text-white mb-4 uppercase inline-block bg-white dark:bg-gray-900 px-4">
                        Website Design
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
                        Our experienced team specializes in developing modern WordPress websites. Below are samples of our work:
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                        <div className="bg-[#e5f5fd] dark:bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
                            <img alt="Portfolio Item 1" className="w-full object-cover" src="/portfolio/1.png" />
                        </div>
                        <div className="bg-[#fff1e5] dark:bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
                            <img alt="Portfolio Item 2" className="w-full object-cover" src="/portfolio/2.png" />
                        </div>
                        <div className="bg-[#e5f5fd] dark:bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
                            <img alt="Portfolio Item 3" className="w-full object-cover" src="/portfolio/3.png" />
                        </div>
                    </div>
                    <a className="bg-[#1e3a29] hover:bg-[#2e523e] text-white font-bold py-3 px-8 rounded text-sm uppercase transition duration-300 inline-block" href="#">View More Example</a>
                </div>
            </section>

            <section className="bg-[#1e3a29] text-white pb-32 pt-20 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col mb-16 relative">
                        {/* Vertical Text decoration */}
                        <div className="absolute top-0 -left-10 md:left-0 h-full flex flex-col justify-start opacity-[0.03] select-none pointer-events-none">
                            <span style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }} className="text-8xl md:text-[10rem] font-bold tracking-widest leading-none font-display uppercase">WHO WE ARE</span>
                        </div>
                        <div className="z-10 pl-6 md:pl-32">
                            <h4 className="text-sm font-bold tracking-wider mb-4 uppercase">ABOUT US</h4>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight uppercase max-w-4xl">
                                WE BELIEVE BETTER RESULTS SHOULDN'T HAVE TO COST MORE.
                            </h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pl-0 md:pl-20 mt-12">
                        {/* Card 1 */}
                        <div className="bg-[#ffcc33] text-[#1e3a29] p-8 text-center rounded flex flex-col items-center">
                            <div className="text-sm font-bold mb-6">01.</div>
                            <div className="text-5xl mb-6">
                                {/* Using an SVG approximation for the seal with checkmark */}
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    <polyline points="9 12 11 14 15 10"></polyline>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold uppercase mb-4 font-display">IMPACT</h3>
                            <p className="text-sm leading-relaxed font-medium">We focus on strategies that maximize impact on your visibility and growth.</p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#ffcc33] text-[#1e3a29] p-8 text-center rounded flex flex-col items-center">
                            <div className="text-sm font-bold mb-6">02.</div>
                            <div className="text-5xl mb-6">
                                {/* SVG approximation for the diverging arrows */}
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 18v-6"></path>
                                    <path d="M12 12l-4-4"></path>
                                    <path d="M12 12l4-4"></path>
                                    <path d="M12 2v6"></path>
                                    <path d="M12 8L8 4"></path>
                                    <path d="M12 8l4-4"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold uppercase mb-4 font-display">AFFORDABILITY</h3>
                            <p className="text-sm leading-relaxed font-medium">Our pricing is structured in a way that makes sense for both you based on what you are receiving.</p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-[#ffcc33] text-[#1e3a29] p-8 text-center rounded flex flex-col items-center">
                            <div className="text-sm font-bold mb-6">03.</div>
                            <div className="text-5xl mb-6">
                                {/* SVG approximation for the gear tree network */}
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="3"></circle>
                                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold uppercase mb-4 font-display">NO CONTRACTS</h3>
                            <p className="text-sm leading-relaxed font-medium">We believe great results, not contracts, are what should keep our clients around.</p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-[#ffcc33] text-[#1e3a29] p-8 text-center rounded flex flex-col items-center">
                            <div className="text-sm font-bold mb-6">04.</div>
                            <div className="text-5xl mb-6">
                                {/* SVG approximation for the growing bar chart */}
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="20" x2="18" y2="10"></line>
                                    <line x1="12" y1="20" x2="12" y2="4"></line>
                                    <line x1="6" y1="20" x2="6" y2="14"></line>
                                    <polyline points="4 8 10 2 16 8"></polyline>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold uppercase mb-4 font-display">RESPONSIVENESS</h3>
                            <p className="text-sm leading-relaxed font-medium">Good communication is what builds a good relationship. We take pride in our level of responsiveness</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white dark:bg-gray-900 border-t-8 border-yellow-400">
                <div className="container mx-auto px-4 text-center">
                    <div className="relative mb-16 inline-block">
                        <h2 className="text-4xl lg:text-5xl font-display font-bold text-[#1e3a29] dark:text-white uppercase relative z-10">
                            Hear What Our Clients Are Saying
                        </h2>
                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[5rem] lg:text-[8rem] font-bold text-gray-100 dark:text-gray-800 -z-0 whitespace-nowrap">REVIEWS</span>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                        <div className="bg-green-50 dark:bg-gray-800 p-8 text-center relative rounded-lg">
                            <i className="fas fa-quote-left text-[#1e3a29] dark:text-green-500 text-4xl mb-6"></i>
                            <h3 className="font-bold text-lg mb-4 text-[#1e3a29] dark:text-white">BRANDING THAT MAKES A STATEMENT!</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                Lemonade Ideas helped us completely rebrand our business with a new logo, messaging, and brand identity. The results were stunning – we now have a strong, recognizable brand that resonates with our target audience. We've received so many compliments!
                            </p>
                            <div className="font-bold text-xs uppercase mb-4 text-[#1e3a29] dark:text-green-400">FNATHAN R., CO-FOUNDER OF A TECH STARTUP</div>
                            <div className="flex justify-center items-center gap-2">
                                <img alt="Google" className="h-6" src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" />
                                <div className="text-yellow-400 text-xs">
                                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <div className="bg-green-50 dark:bg-gray-800 p-8 text-center relative rounded-lg">
                            <i className="fas fa-quote-left text-[#1e3a29] dark:text-green-500 text-4xl mb-6"></i>
                            <h3 className="font-bold text-lg mb-4 text-[#1e3a29] dark:text-white">THE BEST MARKETING AGENCY WE'VE WORKED WITH!</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                We've worked with multiple marketing agencies in the past, but none have delivered the results that Lemonade Ideas has. From SEO to Google Ads, website design to branding, their team is top-notch. They genuinely care about our success.
                            </p>
                            <div className="font-bold text-xs uppercase mb-4 text-[#1e3a29] dark:text-green-400">SAMANTHA J., COO OF A B2B SAAS COMPANY</div>
                            <div className="flex justify-center items-center gap-2">
                                <img alt="Google" className="h-6" src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" />
                                <div className="text-yellow-400 text-xs">
                                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <div className="bg-green-50 dark:bg-gray-800 p-8 text-center relative rounded-lg">
                            <i className="fas fa-quote-left text-[#1e3a29] dark:text-green-500 text-4xl mb-6"></i>
                            <h3 className="font-bold text-lg mb-4 text-[#1e3a29] dark:text-white">SOCIAL MEDIA THAT CREATES REAL ENGAGEMENT!</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                We tried running social media ourselves but struggled to gain traction. Lemonade Ideas took over our content strategy, and in just three months, our Instagram following doubled, engagement tripled, and we started generating sales directly.
                            </p>
                            <div className="font-bold text-xs uppercase mb-4 text-[#1e3a29] dark:text-green-400">OLIVIA S., OWNER OF A HANDMADE JEWELRY BRAND</div>
                            <div className="flex justify-center items-center gap-2">
                                <img alt="Google" className="h-6" src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" />
                                <div className="text-yellow-400 text-xs">
                                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-[#1e3a29] text-white">
                <div className="py-12 text-center border-t border-white/10">
                    <h2 className="text-3xl lg:text-5xl font-display font-bold uppercase">HAVE QUESTIONS? WE'VE GOT ANSWERS!</h2>
                </div>
                <div className="container mx-auto px-4 pb-12">
                    <div className="flex justify-center mb-8">
                        <a className="bg-yellow-400 text-[#1e3a29] font-bold py-3 px-10 rounded uppercase hover:bg-yellow-500 transition shadow-lg" href="#">Schedule A Call</a>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white/20 pt-12">
                        <div>
                            <img
                                src="/logos/SVG/Asset-1.svg"
                                alt="Lemonade Ideas"
                                className="h-16 w-auto mb-6 -ml-4"
                            />
                            <p className="text-sm opacity-80 mb-6">SQUEEZE SUCCESS FOR EVERY CHALLENGE TO MAKE $$$</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-6 uppercase font-display">CONTACT DETAILS</h4>
                            <ul className="space-y-4 text-sm">
                                <li className="flex items-center gap-2"><i className="fas fa-phone-alt opacity-70"></i> +1 (424) 877-3789</li>
                                <li className="flex items-center gap-2"><i className="fas fa-envelope opacity-70"></i> sales@lemonadeideas.com</li>
                                <li className="opacity-80 leading-relaxed pt-2">
                                    209 21st Place Santa Monica 90402<br />California USA
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-6 uppercase font-display">QUICK LINKS</h4>
                            <ul className="space-y-3 text-sm opacity-80">
                                <li><a className="hover:text-yellow-400 transition" href="#">Reviews</a></li>
                                <li><a className="hover:text-yellow-400 transition" href="#">White Label Resellers</a></li>
                                <li><a className="hover:text-yellow-400 transition" href="#">Referral Program</a></li>
                                <li><a className="hover:text-yellow-400 transition" href="#">Blogs</a></li>
                                <li><a className="hover:text-yellow-400 transition" href="#">Terms of Service</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-6 uppercase font-display">OUR SERVICES</h4>
                            <ul className="space-y-3 text-sm opacity-80 mb-6">
                                <li><a className="hover:text-yellow-400 transition" href="#">Guaranteed Ranking™</a></li>
                                <li><a className="hover:text-yellow-400 transition" href="#">SEO</a></li>
                                <li><a className="hover:text-yellow-400 transition" href="#">Google Ads Management</a></li>
                                <li><a className="hover:text-yellow-400 transition" href="#">Website Design</a></li>
                                <li><a className="hover:text-yellow-400 transition" href="#">Social Media Management</a></li>
                                <li><a className="hover:text-yellow-400 transition" href="#">Branding & Strategy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bg-black/20 py-4 text-center text-xs opacity-60">
                    <p>© 2025 All Rights Reserved | Lemonade ideas</p>
                </div>
            </div>
        </div>
    );
}
