"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function SmmHeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const t = useTranslations("SMM");

  return (
    <div className="font-sans">
      {/* Top Banner mapping to Google Ads layout */}
      <div className="bg-[#eef8fd] w-full py-4 px-4 flex flex-col sm:flex-row items-center justify-center gap-6 shadow-sm z-50 relative">
        <div className="text-[#1E3A1A] font-[Oswald] font-bold text-[1.35rem] md:text-2xl uppercase tracking-wider">
          {t("hero_banner")}
        </div>
        <button
          className="bg-[#1E3A1A] text-white px-8 py-3 text-sm font-bold uppercase rounded-sm hover:bg-[#3AAB43] transition shadow-md"
          onClick={() => setIsPlaying(true)}
        >
          {t("hero_watch_video")}
        </button>
      </div>

      <header
        className="bg-[#1E3A1A] text-white relative overflow-hidden font-sans"
        data-purpose="hero"
      >
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet="/images/smm-bg-mobile-opt.webp"
            />
            <img
              src="/images/smm-bg.webp"
              alt="SMM Strategy Background"
              className="object-cover object-center w-full h-full absolute inset-0"
              fetchPriority="high"
            />
          </picture>
          {/* Dark Green overlay at 80% opacity to give a strong green tint */}
          <div className="absolute inset-0 bg-[#1E3A1A]/80"></div>
        </div>

        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat z-0"></div>

        {/* Desktop Layout */}
        <div className="max-w-7xl mx-auto px-4 pt-16 pb-28 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-16">
            {/* Text Section relative z-20 to be above the video on small overlap */}
            <div className="w-full lg:w-[45%] xl:w-[50%] space-y-5 relative z-20 flex flex-col items-center md:items-start text-center md:text-left">
              <h1
                className="text-[22px] md:text-[28px] lg:text-[34px] xl:text-[40px] font-[Oswald] font-bold uppercase leading-[1.2] tracking-normal drop-shadow-sm text-white max-w-[95%] sm:max-w-none mx-auto md:mx-0"
                dangerouslySetInnerHTML={{ __html: t.raw("hero_title") }}
              ></h1>
              <p className="text-[14px] md:text-[17px] lg:text-[18.5px] font-bold text-white leading-[1.5] font-[Arial] mt-6 drop-shadow-sm">
                {t("hero_desc")}
              </p>
            </div>

            {/* Video Section relative z-10 */}
            <div className="w-full lg:w-[55%] pl-0 relative z-10">
              {/* Video box structurally matching homepage with a white border and straight edges */}
              <div className="aspect-video bg-black/90 shadow-[0_30px_60px_rgba(0,0,0,0.6)] w-full max-w-[900px] flex items-center justify-center relative overflow-hidden border-[4px] lg:border-[6px] border-white ml-auto">
                {!isPlaying ? (
                  <div
                    className="absolute inset-0 z-20 cursor-pointer group"
                    onClick={() => setIsPlaying(true)}
                  >
                    <Image
                      src="/images/smm-video-thumb.webp"
                      alt="Watch SMM Video"
                      fill
                      className="object-cover scale-[1.03] transition-transform duration-700 group-hover:scale-[1.08]"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                      <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                        <svg
                          className="w-8 h-8 text-[#1E3A1A] fill-current ml-1"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  <iframe
                    className="w-full h-full absolute inset-0 z-30"
                    src="https://www.youtube.com/embed/krwqlVm6TqA?autoplay=1&rel=0"
                    title="Lemonade Ideas SMM Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* The slanted bottom edge */}
        <div
          className="hidden md:block absolute bottom-0 left-0 right-0 h-32 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
        ></div>
      </header>
    </div>
  );
}
