export default function MarketingFeatures() {
    return (
        <section className="bg-primary text-white pb-20 pt-32 relative">
            <div className="container mx-auto px-4 relative -top-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-secondary text-primary p-8 text-center rounded shadow-lg transform hover:-translate-y-2 transition duration-300">
                        <div className="text-sm font-bold mb-4 opacity-70">01.</div>
                        <div className="text-4xl mb-4"><i className="fas fa-check-circle"></i></div>
                        <h3 className="text-xl font-bold uppercase mb-4 font-display">IMPACT</h3>
                        <p className="text-sm leading-relaxed opacity-90">We focus on strategies that maximize impact on your visibility and growth.</p>
                    </div>
                    <div className="bg-secondary text-primary p-8 text-center rounded shadow-lg transform hover:-translate-y-2 transition duration-300">
                        <div className="text-sm font-bold mb-4 opacity-70">02.</div>
                        <div className="text-4xl mb-4"><i className="fas fa-arrows-alt"></i></div>
                        <h3 className="text-xl font-bold uppercase mb-4 font-display">AFFORDABILITY</h3>
                        <p className="text-sm leading-relaxed opacity-90">Our pricing is structured in a way that makes sense for both you based on what you are receiving.</p>
                    </div>
                    <div className="bg-secondary text-primary p-8 text-center rounded shadow-lg transform hover:-translate-y-2 transition duration-300">
                        <div className="text-sm font-bold mb-4 opacity-70">03.</div>
                        <div className="text-4xl mb-4"><i className="fas fa-file-signature"></i></div>
                        <h3 className="text-xl font-bold uppercase mb-4 font-display">NO CONTRACTS</h3>
                        <p className="text-sm leading-relaxed opacity-90">We believe great results, not contracts, are what should keep our clients around.</p>
                    </div>
                    <div className="bg-secondary text-primary p-8 text-center rounded shadow-lg transform hover:-translate-y-2 transition duration-300">
                        <div className="text-sm font-bold mb-4 opacity-70">04.</div>
                        <div className="text-4xl mb-4"><i className="fas fa-signal"></i></div>
                        <h3 className="text-xl font-bold uppercase mb-4 font-display">RESPONSIVENESS</h3>
                        <p className="text-sm leading-relaxed opacity-90">Good communication is what builds a good relationship. We take pride in our level of responsiveness.</p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl lg:text-5xl font-display font-bold uppercase leading-tight max-w-4xl mx-auto">
                    <span className="text-white opacity-60 text-sm block mb-4 tracking-widest font-body">ABOUT US</span>
                    We Believe Better Results Shouldn&apos;t Have To Cost More.
                </h2>
                <div className="absolute bottom-0 left-10 text-9xl font-bold text-white opacity-5 hidden lg:block pointer-events-none">CHOICE</div>
            </div>
        </section>
    );
}
