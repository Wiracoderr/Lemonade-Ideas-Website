"use client";

/**
 * CameraScroll.tsx — Performance-optimized scroll-driven animation
 *
 * Architecture decisions:
 * - Single <canvas> element (zero <img> nodes in DOM → dramatically lower TBT)
 * - Device-aware manifest: mobile WebP 400×400 (~18KB) vs desktop WebP 1080×1080 (~62KB)
 * - Tiered preloading: first 10 frames eager → rest lazy after hydration
 * - requestAnimationFrame-driven render loop (never blocks main thread)
 * - Passive scroll listener with manual progress tracking (no framer-motion subscription loop)
 * - Canvas DPR clamped to 2 to avoid 3×/4× renders on high-DPI mobile
 */

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useTransform, useMotionValue } from "framer-motion";

// ── Tunables ────────────────────────────────────────────────────────────────
const EAGER_FRAMES = 10;   // frames loaded before showing "ready"
const MOBILE_BREAKPOINT = 768; // px — matches Tailwind `md:`

// ── Helpers ─────────────────────────────────────────────────────────────────
function isMobileDevice(): boolean {
    if (typeof window === "undefined") return false;
    return window.innerWidth < MOBILE_BREAKPOINT;
}

function getManifestUrl(mobile: boolean): string {
    return mobile ? "/frames/mobile/manifest.json" : "/frames/desktop/manifest.json";
}

// Preload a single URL and resolve with an HTMLImageElement (or null on error)
function preloadImage(url: string): Promise<HTMLImageElement | null> {
    return new Promise((resolve) => {
        const img = new window.Image();
        img.src = url;
        img.onload = () => resolve(img);
        img.onerror = () => resolve(null); // graceful degradation
    });
}

// ── Component ────────────────────────────────────────────────────────────────
export default function CameraScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const rafIdRef = useRef<number>(0);

    // Loaded frame buffer — index-stable so we can render partial sets
    const framesRef = useRef<(HTMLImageElement | null)[]>([]);
    const frameIndexRef = useRef(0);
    const totalFramesRef = useRef(0);

    const [eagerReady, setEagerReady] = useState(false);  // first 10 frames loaded
    const [fullyLoaded, setFullyLoaded] = useState(false);  // all frames loaded
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [manifestError, setManifestError] = useState(false);

    const scrollYProgress = useMotionValue(0);

    // ── Scroll handler (passive, no state updates) ───────────────────────────
    const handleScroll = useCallback(() => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const scrollDistance = rect.height - window.innerHeight;
        const scrolled = -rect.top;
        const p = Math.max(0, Math.min(1, scrolled / (scrollDistance || 1)));
        scrollYProgress.set(p);

        const total = totalFramesRef.current;
        if (total > 0) {
            frameIndexRef.current = Math.min(total - 1, Math.floor(p * total));
        }
    }, [scrollYProgress]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll, { passive: true });
        handleScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, [handleScroll]);

    // ── Tiered frame loader ──────────────────────────────────────────────────
    useEffect(() => {
        let cancelled = false;

        async function load() {
            try {
                const mobile = isMobileDevice();
                const res = await fetch(getManifestUrl(mobile));
                if (!res.ok) throw new Error(`Manifest fetch failed: ${res.status}`);
                const urls: string[] = await res.json();

                totalFramesRef.current = urls.length;
                framesRef.current = new Array(urls.length).fill(null);

                // ── Tier 1: preload first EAGER_FRAMES synchronously ─────────
                const eagerUrls = urls.slice(0, EAGER_FRAMES);
                const eagerImgs = await Promise.all(eagerUrls.map(preloadImage));
                if (cancelled) return;
                eagerImgs.forEach((img, i) => { framesRef.current[i] = img; });
                setEagerReady(true);
                setLoadingProgress(Math.round((EAGER_FRAMES / urls.length) * 100));

                // ── Tier 2: stream the rest after hydration ──────────────────
                let loaded = EAGER_FRAMES;
                const restUrls = urls.slice(EAGER_FRAMES);

                await Promise.all(
                    restUrls.map((url, offset) =>
                        preloadImage(url).then((img) => {
                            if (cancelled) return;
                            framesRef.current[EAGER_FRAMES + offset] = img;
                            loaded++;
                            setLoadingProgress(Math.round((loaded / urls.length) * 100));
                        })
                    )
                );
                if (!cancelled) setFullyLoaded(true);
            } catch (err) {
                console.error("[CameraScroll] Error loading frames:", err);
                if (!cancelled) setManifestError(true);
            }
        }

        load();
        return () => { cancelled = true; };
    }, []);

    // ── Canvas render loop (RAF) ─────────────────────────────────────────────
    useEffect(() => {
        if (!eagerReady) return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Track canvas physical dimensions to skip redundant scale calls
        let lastW = 0, lastH = 0;

        const render = () => {
            const parent = canvas.parentElement;
            if (parent) {
                const dpr = Math.min(window.devicePixelRatio || 1, 2);
                const rect = parent.getBoundingClientRect();
                const physW = Math.round(rect.width * dpr);
                const physH = Math.round(rect.height * dpr);

                if (physW !== lastW || physH !== lastH) {
                    canvas.width = physW;
                    canvas.height = physH;
                    canvas.style.width = `${rect.width}px`;
                    canvas.style.height = `${rect.height}px`;
                    ctx.scale(dpr, dpr);
                    lastW = physW;
                    lastH = physH;
                }

                const img = framesRef.current[frameIndexRef.current];
                if (img) {
                    const w = rect.width;
                    const h = rect.height;
                    ctx.clearRect(0, 0, w, h);

                    // object-fit: cover
                    const imgAspect = img.naturalWidth / img.naturalHeight;
                    const canvasAspect = w / h;
                    let drawW = w, drawH = h, offX = 0, offY = 0;

                    if (imgAspect > canvasAspect) {
                        drawH = h;
                        drawW = h * imgAspect;
                        offX = (w - drawW) / 2;
                    } else {
                        drawW = w;
                        drawH = w / imgAspect;
                        offY = (h - drawH) / 2;
                    }

                    ctx.drawImage(img, offX, offY, drawW, drawH);

                    // Mask the "Veo" watermark (bottom-right corner)
                    ctx.fillStyle = "#020202";
                    ctx.fillRect(
                        offX + drawW - drawW * 0.2,
                        offY + drawH - drawH * 0.15,
                        drawW * 0.2,
                        drawH * 0.15
                    );
                }
            }

            rafIdRef.current = requestAnimationFrame(render);
        };

        render();
        return () => cancelAnimationFrame(rafIdRef.current);
    }, [eagerReady]);

    // ── Overlay animation ────────────────────────────────────────────────────
    const overlayOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);
    const overlayY = useTransform(scrollYProgress, [0, 0.05], [20, 0]);

    // ── Error state ──────────────────────────────────────────────────────────
    if (manifestError) {
        return (
            <div className="flex items-center justify-center h-screen w-full bg-[#020202] text-white font-sans text-xl">
                <p>⚠️ Missing manifest. Please run the build script.</p>
            </div>
        );
    }

    // ── Render ───────────────────────────────────────────────────────────────
    return (
        <div ref={containerRef} className="relative w-full" style={{ height: "420vh" }}>
            <div
                className="sticky top-0 h-screen w-full overflow-hidden flex flex-col md:flex-row items-center justify-between"
                style={{
                    backgroundColor: "#000000",
                    backgroundImage: 'url("https://www.transparenttextures.com/patterns/fabric-of-squares.png")',
                }}
            >
                {/* ── Left: Text Content ─────────────────────────────────── */}
                <motion.div
                    style={{ opacity: overlayOpacity, y: overlayY }}
                    className="relative z-20 flex flex-col items-center justify-center text-center p-6 w-full md:w-1/2 h-full"
                >
                    <h1 className="text-[2.6rem] md:text-[4.025rem] font-bold text-white tracking-tight leading-tight mt-16 md:mt-0">
                        All you need is <br />
                        <span className="text-[2.15rem] md:text-[3.16rem] text-white/70 font-light italic mt-2 block">
                            fresh ideas.
                        </span>
                    </h1>
                </motion.div>

                {/* ── Right: Canvas Animation ────────────────────────────── */}
                <div className="relative w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-4">
                    <div className="relative w-full max-w-[600px] aspect-square overflow-hidden flex items-center justify-center border-4 border-white rounded-lg shadow-2xl">

                        {/* Loading overlay — shown until first 10 frames are ready */}
                        {!eagerReady && (
                            <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#020202] backdrop-blur-md">
                                <span className="text-white text-2xl font-light mb-4 text-center">
                                    Loading Experience
                                </span>
                                <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-white transition-all duration-300"
                                        style={{ width: `${loadingProgress}%` }}
                                    />
                                </div>
                                <span className="text-white/60 mt-2 text-sm">{loadingProgress}%</span>
                            </div>
                        )}

                        {/* Subtle progress bar while remaining frames stream in */}
                        {eagerReady && !fullyLoaded && (
                            <div
                                className="absolute bottom-0 left-0 h-[2px] bg-white/40 z-30 transition-all duration-200"
                                style={{ width: `${loadingProgress}%` }}
                            />
                        )}

                        {/* Single canvas — zero img nodes in DOM */}
                        <canvas
                            ref={canvasRef}
                            className="absolute inset-0 z-10 w-full h-full"
                            aria-label="Animated product showcase"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
