export default function MarketingReviews() {
    return (
        <section className="py-24 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4 text-center">
                <div className="relative mb-16 inline-block">
                    <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary dark:text-white uppercase relative z-10">
                        Hear What Our Clients Are Saying
                    </h2>
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[5rem] lg:text-[8rem] font-bold text-gray-100 dark:text-gray-800 -z-0 whitespace-nowrap">REVIEWS</span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
                    {/* Card 1: Plumbing */}
                    <div className="bg-[#e2edd3] dark:bg-gray-800 p-8 pt-14 pb-12 text-center relative rounded shadow-sm flex flex-col items-center h-full">
                        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-[#1E3A1A] opacity-90">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                        </div>
                        <h3 className="font-display font-black text-xl md:text-[22px] mb-6 text-[#1E3A1A] dark:text-white uppercase leading-[1.15] tracking-wide mt-2">
                            BRANDING THAT MAKES A STATEMENT!
                        </h3>
                        <p className="text-[15px] font-semibold text-gray-800 dark:text-gray-300 mb-10 leading-[1.8] px-2 flex-grow">
                            Lemonade Ideas helped us completely rebrand our plumbing business with a new logo, messaging, and identity. The results were stunning – we now have a strong brand that resonates with homeowners. We&apos;ve received so many compliments!
                        </p>
                        <div className="font-display font-bold text-[13px] tracking-wider uppercase mb-6 text-[#1E3A1A] dark:text-green-400">
                            NATHAN R., OWNER OF A PLUMBING CO.
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2 mt-auto">
                            <img alt="Google" className="h-[26px]" src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" />
                            <div className="flex gap-1 text-[#FED52B]">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                        <div className="absolute bottom-6 right-6 text-black/10">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                        </div>
                    </div>

                    {/* Card 2: HVAC */}
                    <div className="bg-[#e2edd3] dark:bg-gray-800 p-8 pt-14 pb-12 text-center relative rounded shadow-sm flex flex-col items-center h-full">
                        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-[#1E3A1A] opacity-90">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                        </div>
                        <h3 className="font-display font-black text-xl md:text-[22px] mb-6 text-[#1E3A1A] dark:text-white uppercase leading-[1.15] tracking-wide mt-2">
                            THE BEST MARKETING AGENCY WE&apos;VE WORKED WITH!
                        </h3>
                        <p className="text-[15px] font-semibold text-gray-800 dark:text-gray-300 mb-10 leading-[1.8] px-2 flex-grow">
                            We&apos;ve worked with multiple agencies in the past, but none delivered the results Lemonade Ideas has. From SEO to Google Ads, their team is top-notch. They consistently go above and beyond to keep our HVAC dispatch board full.
                        </p>
                        <div className="font-display font-bold text-[13px] tracking-wider uppercase mb-6 text-[#1E3A1A] dark:text-green-400">
                            SAMANTHA J., HVAC BUSINESS FOUNDER
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2 mt-auto">
                            <img alt="Google" className="h-[26px]" src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" />
                            <div className="flex gap-1 text-[#FED52B]">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                        <div className="absolute bottom-6 right-6 text-black/10">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                        </div>
                    </div>

                    {/* Card 3: General Contractor */}
                    <div className="bg-[#e2edd3] dark:bg-gray-800 p-8 pt-14 pb-12 text-center relative rounded shadow-sm flex flex-col items-center h-full">
                        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-[#1E3A1A] opacity-90">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                        </div>
                        <h3 className="font-display font-black text-xl md:text-[22px] mb-6 text-[#1E3A1A] dark:text-white uppercase leading-[1.15] tracking-wide mt-2">
                            SOCIAL MEDIA THAT CREATES REAL ENGAGEMENT!
                        </h3>
                        <p className="text-[15px] font-semibold text-gray-800 dark:text-gray-300 mb-10 leading-[1.8] px-2 flex-grow">
                            We tried running local ads ourselves but struggled to get qualified leads. Lemonade took over our content strategy, and in just months, our phone started ringing with high-ticket remodeling jobs. They know exactly how to connect with our audience!
                        </p>
                        <div className="font-display font-bold text-[13px] tracking-wider uppercase mb-6 text-[#1E3A1A] dark:text-green-400">
                            MICHAEL S., GENERAL CONTRACTOR
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2 mt-auto">
                            <img alt="Google" className="h-[26px]" src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" />
                            <div className="flex gap-1 text-[#FED52B]">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                        <div className="absolute bottom-6 right-6 text-black/10">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <a className="bg-[#1E3A1A] hover:bg-[#284d23] text-white font-bold py-4 px-10 rounded text-sm uppercase transition duration-300 inline-block font-display tracking-widest" href="#">Read More Reviews</a>
            </div>
        </section>
    );
}
