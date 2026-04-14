"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function MobileHero() {
    const t = useTranslations("Home");
    return (
        <div
            className="md:hidden relative w-full flex flex-col items-center pt-24 pb-16 px-6 overflow-hidden"
            style={{
                backgroundColor: "#1e3a1a",
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 5C20 5 25 10 25 15C25 20 20 25 20 25C20 25 15 20 15 15C15 10 20 5 20 5Z' fill='%23284d23' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`
            }}
        >
            {/* Dark gradient overlay for slight contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

            {/* Top Text Content */}
            <div className="relative z-10 w-full text-center flex flex-col items-center mt-6">
                <span className="text-[#FED52B] font-bold tracking-[0.2em] text-[10px] mb-2 uppercase drop-shadow-md">
                    {t('welcome')}
                </span>
                <h1 className="text-white font-display font-black text-[2.6rem] sm:text-5xl leading-[1.05] tracking-tight uppercase max-w-[320px] drop-shadow-xl px-2 text-center">
                    {t('headline_1')}<br />
                    <span className="text-[#FED52B]">{t('headline_2')}</span>{t('headline_3')}
                </h1>
                <p className="mt-4 text-white/90 font-medium text-xs sm:text-sm leading-relaxed max-w-[280px] drop-shadow-md mb-8">
                    {t('subheadline')}
                </p>

                {/* Buttons Component */}
                <div className="w-full max-w-[320px] flex flex-col gap-3">
                    <a
                        href="/schedule-a-call"
                        className="w-full bg-[#FED52B] text-[#1e3a1a] font-bold py-3.5 rounded-lg text-xs uppercase tracking-wider shadow-[0_4px_20px_0_rgba(250,204,21,0.3)] text-center transition-transform active:scale-95"
                    >
                        {t('speakWithExpert')}
                    </a>
                    <Link
                        href="/pricing"
                        className="w-full bg-transparent border-2 border-white/80 text-white hover:bg-white hover:text-[#1e3a1a] font-bold py-3.5 rounded-lg text-xs uppercase tracking-wider text-center transition-transform active:scale-95"
                    >
                        {t('viewPricing')}
                    </Link>
                </div>
            </div>
            {/* Aesthetic Lemon Decoration Layer */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#FED52B]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/4 -left-10 w-40 h-40 bg-green-500/10 rounded-full blur-2xl pointer-events-none" />
        </div>
    );
}
