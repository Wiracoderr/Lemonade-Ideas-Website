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
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    <div className="bg-green-50 dark:bg-gray-800 p-8 text-center relative rounded-lg">
                        <i className="fas fa-quote-left text-primary dark:text-green-500 text-4xl mb-6"></i>
                        <h3 className="font-bold text-lg mb-4 text-primary dark:text-white">BRANDING THAT MAKES A STATEMENT!</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            Lemonade Ideas helped us completely rebrand our business with a new logo, messaging, and brand identity. The results were stunning – we now have a strong, recognizable brand that resonates with our target audience. We&apos;ve received so many compliments!
                        </p>
                        <div className="font-bold text-xs uppercase mb-4 text-primary dark:text-green-400">FNATHAN R., CO-FOUNDER OF A TECH STARTUP</div>
                        <div className="flex justify-center items-center gap-2">
                            <img alt="Google" className="h-6" src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" />
                            <div className="text-yellow-400 text-xs">
                                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <div className="bg-green-50 dark:bg-gray-800 p-8 text-center relative rounded-lg">
                        <i className="fas fa-quote-left text-primary dark:text-green-500 text-4xl mb-6"></i>
                        <h3 className="font-bold text-lg mb-4 text-primary dark:text-white">THE BEST MARKETING AGENCY WE&apos;VE WORKED WITH!</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            We&apos;ve worked with multiple marketing agencies in the past, but none have delivered the results that Lemonade Ideas has. From SEO to Google Ads, website design to branding, their team is top-notch. They genuinely care about our success.
                        </p>
                        <div className="font-bold text-xs uppercase mb-4 text-primary dark:text-green-400">SAMANTHA J., COO OF A B2B SAAS COMPANY</div>
                        <div className="flex justify-center items-center gap-2">
                            <img alt="Google" className="h-6" src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" />
                            <div className="text-yellow-400 text-xs">
                                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <div className="bg-green-50 dark:bg-gray-800 p-8 text-center relative rounded-lg">
                        <i className="fas fa-quote-left text-primary dark:text-green-500 text-4xl mb-6"></i>
                        <h3 className="font-bold text-lg mb-4 text-primary dark:text-white">SOCIAL MEDIA THAT CREATES REAL ENGAGEMENT!</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            We tried running social media ourselves but struggled to gain traction. Lemonade Ideas took over our content strategy, and in just three months, our Instagram following doubled, engagement tripled, and we started generating sales directly.
                        </p>
                        <div className="font-bold text-xs uppercase mb-4 text-primary dark:text-green-400">OLIVIA S., OWNER OF A HANDMADE JEWELRY BRAND</div>
                        <div className="flex justify-center items-center gap-2">
                            <img alt="Google" className="h-6" src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" />
                            <div className="text-yellow-400 text-xs">
                                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="bg-primary hover:bg-primary-light text-white font-bold py-3 px-8 rounded text-sm uppercase transition duration-300 inline-block" href="#">Read More Reviews</a>
            </div>
        </section>
    );
}
