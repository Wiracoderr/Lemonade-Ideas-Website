"use client";

import { useState } from "react";

export default function MarketingHero() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="relative bg-primary py-20 lg:py-32 overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80')] bg-cover bg-center"></div>
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary via-primary to-transparent opacity-90"></div>
            <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 mb-10 lg:mb-0">

                    <h2 className="text-4xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
                        INTERNET MARKETING THAT&apos;S <span className="text-secondary">FAST</span>, <span className="text-secondary">AFFORDABLE</span>, AND DRIVES YOU LEADS!
                    </h2>
                    <p className="text-white text-lg mb-8 opacity-90 font-light">
                        Are you ready for &quot;Lemonade Ideas&quot;? We can&apos;t wait to help you grow.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded shadow-lg transition duration-300" href="#">
                            SPEAK WITH OUR EXPERT
                        </a>
                        <a className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold py-3 px-8 rounded transition duration-300" href="#">
                            SEE OUR PRICING
                        </a>
                    </div>
                </div>
                <div className="lg:w-1/2 lg:pl-12 w-full">
                    {/* Contenedor Click-to-Play optimizado para métricas LCP/TBT */}
                    <div
                        className="bg-black rounded-lg shadow-2xl aspect-video w-full flex items-center justify-center relative group cursor-pointer overflow-hidden"
                        onClick={() => setIsPlaying(true)}
                        aria-label="Play Video"
                        role="button"
                    >
                        {!isPlaying ? (
                            <>
                                {/* Preview estático usando etiqueta img normal para esquivar optimizadores que puedan bloquear la URL externa */}
                                <img
                                    src="https://i.ytimg.com/vi/TZverr1QZUk/hqdefault.jpg"
                                    alt="Video Preview"
                                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-300"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition"></div>

                                {/* Botón de Play falso con diseño YouTube */}
                                <div className="w-16 h-12 md:w-20 md:h-14 bg-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-red-500 transition-all duration-300 z-10">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white ml-1">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </>
                        ) : (
                            /* Embed real de YouTube cargado asíncronamente (inicia en seg 52) */
                            <iframe
                                className="w-full h-full absolute inset-0 bg-black"
                                src="https://www.youtube.com/embed/TZverr1QZUk?autoplay=1&start=52"
                                title="YouTube video embed"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
