import type { Metadata } from "next";
import { useTranslations } from 'next-intl';
import ContactForm from '@/components/forms/ContactForm';

export const metadata: Metadata = {
    title: "Contact Us | Lemonade Ideas",
    description: "Get in touch with a Lemonade Ideas marketing expert. We offer digital marketing, SEO, and website design services.",
};

export default function ContactPage() {
    const t = useTranslations('Contact');
    return (
        <main className="min-h-screen bg-white font-['Poppins',sans-serif]">
            {/* Top Text Section */}
            <section className="bg-white pt-[120px] pb-16 md:pt-[160px] md:pb-24 text-center px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-[24px] md:text-[32px] lg:text-[38px] font-[Oswald] font-bold uppercase leading-snug tracking-wide text-[#1E3A1A] mb-4">
                        {t('title1')}<br />
                        {t('title2')}
                    </h1>
                    <div className="flex justify-center w-full mt-4">
                        <img src="/images/layer-1.png" alt="underline decour" className="h-4 object-contain opacity-90" width={180} />
                    </div>
                </div>
            </section>

            {/* Split Middle Section */}
            <section className="flex flex-col md:flex-row w-full">
                {/* Left Side: Form */}
                <div className="w-full md:w-1/2 bg-[#f2f8f9] p-8 md:p-14 lg:p-20 xl:p-24 flex flex-col justify-center">
                    <h2 className="text-[20px] md:text-[24px] lg:text-[28px] font-[Oswald] font-bold uppercase text-[#1E3A1A] mb-8 lg:mb-10">
                        {t('email_us')}
                    </h2>
                    <ContactForm />
                </div>

                {/* Right Side: Why Work With Us */}
                <div className="w-full md:w-1/2 bg-[#222222] p-8 md:p-14 lg:p-20 xl:p-24 flex flex-col justify-center text-white">
                    <h2 className="text-[20px] md:text-[24px] lg:text-[28px] font-[Oswald] font-bold uppercase mb-4 text-white">
                        {t('why_title')}
                    </h2>
                    <p className="text-[13px] md:text-[14px] leading-relaxed mb-10 text-[#d1d5db]">
                        {t('why_desc')}
                    </p>

                    <div className="flex flex-col gap-8">
                        {/* Item 1 */}
                        <div className="flex items-start gap-4">
                            <div className="mt-1 flex-shrink-0 text-[#FED52B] text-[18px]">
                                <i className="fas fa-check-circle"></i>
                            </div>
                            <div>
                                <h3 className="font-bold text-[#FED52B] text-[15px] mb-1.5">{t('reason1_title')}</h3>
                                <p className="text-[13px] text-[#9ca3af] leading-relaxed">
                                    {t('reason1_desc')}
                                </p>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="flex items-start gap-4">
                            <div className="mt-1 flex-shrink-0 text-[#FED52B] text-[18px]">
                                <i className="fas fa-check-circle"></i>
                            </div>
                            <div>
                                <h3 className="font-bold text-[#FED52B] text-[15px] mb-1.5">{t('reason2_title')}</h3>
                                <p className="text-[13px] text-[#9ca3af] leading-relaxed">
                                    {t('reason2_desc')}
                                </p>
                            </div>
                        </div>

                        {/* Item 3 */}
                        <div className="flex items-start gap-4">
                            <div className="mt-1 flex-shrink-0 text-[#FED52B] text-[18px]">
                                <i className="fas fa-check-circle"></i>
                            </div>
                            <div>
                                <h3 className="font-bold text-[#FED52B] text-[15px] mb-1.5">{t('reason3_title')}</h3>
                                <p className="text-[13px] text-[#9ca3af] leading-relaxed">
                                    {t('reason3_desc')}
                                </p>
                            </div>
                        </div>

                        {/* Item 4 */}
                        <div className="flex items-start gap-4">
                            <div className="mt-1 flex-shrink-0 text-[#FED52B] text-[18px]">
                                <i className="fas fa-check-circle"></i>
                            </div>
                            <div>
                                <h3 className="font-bold text-[#FED52B] text-[15px] mb-1.5">{t('reason4_title')}</h3>
                                <p className="text-[13px] text-[#9ca3af] leading-relaxed">
                                    {t('reason4_desc')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Contact CTA Section */}
            <section className="bg-[#143d1f] py-24 md:py-32 px-4 relative overflow-hidden">
                {/* Texture Map Overlay */}
                <div
                    className="absolute inset-0 opacity-[0.45] pointer-events-none"
                    style={{
                        backgroundImage: "url('/images/Texture.png')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                ></div>

                {/* Light glow effects */}
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-[#1f562e] rounded-full blur-3xl opacity-50 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-[#1f562e] rounded-full blur-3xl opacity-50 pointer-events-none"></div>

                <div className="max-w-5xl mx-auto text-center relative z-10 text-white">
                    <h2 className="text-[26px] md:text-[36px] lg:text-[42px] font-[Oswald] font-bold uppercase leading-tight tracking-wide text-white mb-6">
                        {t('talk_title')}
                    </h2>

                    {/* Hand-drawn yellow underline SVG graphic */}
                    <div className="flex justify-center mb-14 w-full">
                        <img src="/images/layer-1.png" alt="underline" width={200} height={16} className="h-4 object-contain opacity-90" />
                    </div>

                    <a
                        href="https://calendly.com/lemonadeideas-consultation/30min?month=2026-03" target="_blank" rel="noopener noreferrer"
                        className="bg-[#facc15] text-[#143d1f] font-[Oswald] font-bold uppercase px-6 md:px-8 py-4 rounded-xl shadow-[0_4px_20px_rgba(250,204,21,0.2)] hover:bg-white hover:text-[#143d1f] hover:shadow-[0_4px_30px_rgba(255,255,255,0.4)] transition-all duration-300 transform hover:-translate-y-1 inline-flex flex-row items-center justify-center tracking-wide group gap-4 md:gap-6 w-[90%] md:w-auto mx-auto"
                    >
                        <img src="/images/icon-call.svg" alt="Phone Outline Icon" className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] object-contain shrink-0" />
                        <div className="flex flex-col items-start text-left pt-1">
                            <span className="text-[9px] md:text-[11px] mb-[2px] tracking-[0.10em] md:tracking-[0.15em] opacity-80 group-hover:opacity-100 font-sans font-semibold">{t('talk_sub')}</span>
                            <span className="text-[20px] md:text-[26px] leading-none tracking-normal">{t('talk_action')}</span>
                        </div>
                    </a>
                </div>
            </section>
        </main>
    );
}
