export default function MarketingFooter() {
    return (
        <div className="bg-primary/95 text-white">
            <div className="py-12 text-center bg-primary">
                <p className="text-sm uppercase tracking-widest mb-2 opacity-80">CONTACT US</p>
                <h2 className="text-3xl lg:text-5xl font-display font-bold uppercase">HAVE QUESTIONS? WE&apos;VE GOT ANSWERS!</h2>
            </div>
            <div className="container mx-auto px-4 pb-12">
                <div className="bg-white/5 p-8 rounded-lg mb-16 border border-white/10 backdrop-blur-sm max-w-4xl mx-auto">
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input className="w-full p-3 rounded bg-white text-gray-800 border-none focus:ring-2 focus:ring-secondary" placeholder="Name" type="text" />
                            <input className="w-full p-3 rounded bg-white text-gray-800 border-none focus:ring-2 focus:ring-secondary" placeholder="Email Address" type="email" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input className="w-full p-3 rounded bg-white text-gray-800 border-none focus:ring-2 focus:ring-secondary" placeholder="Phone" type="tel" />
                            <input className="w-full p-3 rounded bg-white text-gray-800 border-none focus:ring-2 focus:ring-secondary" placeholder="Website" type="text" />
                        </div>
                        <textarea className="w-full p-3 rounded bg-white text-gray-800 border-none focus:ring-2 focus:ring-secondary" placeholder="Message" rows={4}></textarea>
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4">
                            <div className="bg-white text-gray-600 px-4 py-2 rounded flex items-center gap-2 border border-gray-300">
                                <div className="w-5 h-5 border-2 border-gray-300 rounded"></div>
                                <span className="text-xs">I&apos;m not a robot</span>
                                <div className="ml-auto flex flex-col items-center text-[0.5rem] leading-none text-gray-400">
                                    <img alt="recaptcha" className="w-5 mb-1 grayscale opacity-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQmqXwGPwhJsm_629y2N9EcZYz9DKHxoUBDE7mlvlSuL7T7eHRMN6F4M7QRj0QfJwIfC9BjYBTu4nk3HYBtGvq7MssI9Sl86pkEj8lQ0Yl8le4avCZYIjuKULGzu1Al2N3cPNbetfYTxm-gSwx7gwjTbr9x2Gl_7rjHFfwQL0U3xPZBzK9MrWy4ZXnqKE2j-bZZ69-P2yM7KZ2HOAUA-Cd1oMeO1KajrZR6hgyZZdjf6j4N_vtApkDi2nhcwbBSsg2dLYksvU4qqpK" />
                                    reCAPTCHA
                                </div>
                            </div>
                            <button className="bg-secondary text-primary font-bold py-3 px-10 rounded uppercase hover:bg-yellow-400 transition w-full md:w-auto shadow-lg" type="button">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white/20 pt-12">
                    <div>
                        <img
                            src="/logos/SVG/Logo-1.svg"
                            alt="Lemonade Ideas"
                            className="h-16 w-auto mb-6 -ml-4"
                        />
                        <p className="text-sm opacity-80 mb-6">SQUEEZE SUCCESS FOR EVERY CHALLENGE TO MAKE $$$</p>
                        <a className="font-bold text-sm hover:text-secondary transition flex items-center gap-1" href="#">SCHEDULE A CALL <i className="fas fa-angle-double-right text-xs"></i></a>
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
                        <div className="flex space-x-3 mt-6">
                            <a className="bg-primary-light hover:bg-secondary hover:text-primary transition rounded-full w-8 h-8 flex items-center justify-center" href="#"><i className="fab fa-facebook-f text-xs"></i></a>
                            <a className="bg-primary-light hover:bg-secondary hover:text-primary transition rounded-full w-8 h-8 flex items-center justify-center" href="#"><i className="fab fa-instagram text-xs"></i></a>
                            <a className="bg-primary-light hover:bg-secondary hover:text-primary transition rounded-full w-8 h-8 flex items-center justify-center" href="#"><i className="fab fa-youtube text-xs"></i></a>
                            <a className="bg-primary-light hover:bg-secondary hover:text-primary transition rounded-full w-8 h-8 flex items-center justify-center" href="#"><i className="fab fa-linkedin-in text-xs"></i></a>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-6 uppercase font-display">QUICK LINKS</h4>
                        <ul className="space-y-3 text-sm opacity-80">
                            <li><a className="hover:text-secondary transition" href="#">Reviews</a></li>
                            <li><a className="hover:text-secondary transition" href="#">White Label Resellers</a></li>
                            <li><a className="hover:text-secondary transition" href="#">Referral Program</a></li>
                            <li><a className="hover:text-secondary transition" href="#">Blogs</a></li>
                            <li><a className="hover:text-secondary transition" href="#">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-6 uppercase font-display">OUR SERVICES</h4>
                        <ul className="space-y-3 text-sm opacity-80 mb-6">
                            <li><a className="hover:text-secondary transition" href="#">Guaranteed Ranking™</a></li>
                            <li><a className="hover:text-secondary transition" href="#">SEO</a></li>
                            <li><a className="hover:text-secondary transition" href="#">Google Ads Management</a></li>
                            <li><a className="hover:text-secondary transition" href="/website">Website Design</a></li>
                            <li><a className="hover:text-secondary transition" href="#">Social Media Management</a></li>
                            <li><a className="hover:text-secondary transition" href="/branding">Branding & Strategy</a></li>
                        </ul>
                        <a className="bg-primary-light border border-white/20 hover:bg-white hover:text-primary transition font-bold py-2 px-6 rounded text-xs uppercase inline-block" href="#">CONTACT US</a>
                    </div>
                </div>
            </div>
            <div className="bg-black/20 py-4 text-center text-xs opacity-60">
                <p>© 2025 All Rights Reserved | Lemonade ideas</p>
            </div>
        </div>
    );
}
