"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useTransform, useMotionValue } from "framer-motion";
import Image from "next/image";

export default function CameraScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [frames, setFrames] = useState<HTMLImageElement[]>([]);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [manifestError, setManifestError] = useState(false);

    const scrollYProgress = useMotionValue(0);
    const frameIndexRef = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const scrollDistance = rect.height - window.innerHeight;
            const scrolled = -rect.top;
            const p = Math.max(0, Math.min(1, scrolled / (scrollDistance || 1)));
            scrollYProgress.set(p);

            if (frames.length > 0) {
                frameIndexRef.current = Math.min(
                    frames.length - 1,
                    Math.floor(p * frames.length)
                );
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);
        // Initial check
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, [frames.length, scrollYProgress]);

    useEffect(() => {
        async function loadManifest() {
            try {
                const res = await fetch("/frames/manifest.json");
                if (!res.ok) throw new Error("Manifest not found");
                const urls: string[] = await res.json();

                let loadedCount = 0;
                const loadedFrames: HTMLImageElement[] = [];

                const promises = urls.map((url, index) => {
                    return new Promise<void>((resolve, reject) => {
                        const img = new window.Image();
                        img.src = url;
                        img.onload = () => {
                            loadedFrames[index] = img;
                            loadedCount++;
                            setLoadingProgress(Math.floor((loadedCount / urls.length) * 100));
                            resolve();
                        };
                        img.onerror = reject;
                    });
                });

                await Promise.all(promises);
                setFrames(loadedFrames);
                setIsLoaded(true);
            } catch (err) {
                console.error("Error loading frames:", err);
                setManifestError(true);
            }
        }
        loadManifest();
    }, []);

    useEffect(() => {
        if (!isLoaded || frames.length === 0) return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;

        const render = () => {
            const parent = canvas.parentElement;
            if (parent) {
                const dpr = Math.min(window.devicePixelRatio || 1, 2);
                const rect = parent.getBoundingClientRect();

                if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
                    canvas.width = rect.width * dpr;
                    canvas.height = rect.height * dpr;
                    canvas.style.width = `${rect.width}px`;
                    canvas.style.height = `${rect.height}px`;
                    ctx.scale(dpr, dpr);
                }

                const img = frames[frameIndexRef.current];
                if (img) {
                    ctx.clearRect(0, 0, rect.width, rect.height);

                    const imgAspect = img.width / img.height;
                    const canvasAspect = rect.width / rect.height;
                    let drawWidth = rect.width;
                    let drawHeight = rect.height;
                    let offsetX = 0;
                    let offsetY = 0;

                    if (imgAspect > canvasAspect) {
                        // Image is relatively wider. Scale to fit height, crop width (cover).
                        drawHeight = rect.height;
                        drawWidth = rect.height * imgAspect;
                        offsetX = (rect.width - drawWidth) / 2;
                        offsetY = 0;
                    } else {
                        // Image is relatively taller. Scale to fit width, crop height (cover).
                        drawWidth = rect.width;
                        drawHeight = rect.width / imgAspect;
                        offsetX = 0;
                        offsetY = (rect.height - drawHeight) / 2;
                    }

                    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

                    // Mask the "Veo" watermark in the bottom right corner with the background color
                    ctx.fillStyle = "#020202";
                    const maskWidth = drawWidth * 0.2; // Cover 20% of width
                    const maskHeight = drawHeight * 0.15; // Cover 15% of height
                    ctx.fillRect(
                        offsetX + drawWidth - maskWidth,
                        offsetY + drawHeight - maskHeight,
                        maskWidth,
                        maskHeight
                    );
                }
            }
            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => cancelAnimationFrame(animationFrameId);
    }, [isLoaded, frames]);

    // The text fades in slightly at the beginning of the scroll and then stays fully visible (opacity 1) for the rest.
    const overlayOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);
    const overlayY = useTransform(scrollYProgress, [0, 0.05], [20, 0]);

    if (manifestError) {
        return (
            <div className="flex items-center justify-center h-screen w-full bg-[#020202] text-white font-sans text-xl">
                <p>⚠️ Missing manifest. Please run the build script.</p>
            </div>
        );
    }

    return (
        <div ref={containerRef} className="relative w-full" style={{ height: "420vh" }}>
            <div
                className="sticky top-0 h-screen w-full overflow-hidden flex flex-col md:flex-row items-center justify-between"
                style={{
                    backgroundColor: '#000000',
                    backgroundImage: 'url("https://www.transparenttextures.com/patterns/fabric-of-squares.png")'
                }}
            >
                {/* Left side: Text Content */}
                <motion.div
                    style={{ opacity: overlayOpacity, y: overlayY }}
                    className="relative z-20 flex flex-col items-center justify-center text-center p-6 w-full md:w-1/2 h-full"
                >
                    <h1 className="text-[2.6rem] md:text-[4.025rem] font-bold text-white tracking-tight leading-tight mt-16 md:mt-0">
                        All you need is <br />
                        <span className="text-[2.15rem] md:text-[3.16rem] text-white/70 font-light italic mt-2 block">fresh ideas.</span>
                    </h1>
                </motion.div>

                {/* Right side: Animation */}
                <div className="relative w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-4">
                    <div className="relative w-full max-w-[600px] aspect-square overflow-hidden flex items-center justify-center border-4 border-white rounded-lg shadow-2xl">
                        {!isLoaded && (
                            <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#020202] backdrop-blur-md">
                                <span className="text-white text-2xl font-light mb-4 text-center">Loading Experience</span>
                                <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-white transition-all duration-300"
                                        style={{ width: `${loadingProgress}%` }}
                                    />
                                </div>
                                <span className="text-white/60 mt-2 text-sm">{loadingProgress}%</span>
                            </div>
                        )}
                        <canvas ref={canvasRef} className="absolute inset-0 z-10 w-full h-full" />
                    </div>
                </div>


            </div>
        </div>
    );
}
