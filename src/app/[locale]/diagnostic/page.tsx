import { setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import Image from "next/image";
import DiagnosticForm from "./DiagnosticForm";

export const metadata: Metadata = {
  title: "Free SEO & Marketing Diagnostic | Lemonade Ideas",
  description: "Get a free manual analysis of your current SEO and marketing strategy by one of our experts. Discover hidden opportunities to scale your construction business.",
};

export default async function DiagnosticPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-[#0a0f0d] relative overflow-hidden flex items-center justify-center px-4 py-12 md:py-0">

      {/* ── Ambient Background Elements (Optimized GPU Rendering) ── */}
      <div 
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, #1E3A1A 0%, transparent 60%)' }}
      />
      <div 
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none opacity-5"
        style={{ background: 'radial-gradient(circle, #FED52B 0%, transparent 60%)' }}
      />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-10"
        style={{ background: 'radial-gradient(circle, #1E3A1A 0%, transparent 60%)' }}
      />

      {/* ── Grid Pattern Overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Main Container ── */}
      <div className="relative w-full max-w-5xl mx-auto grid md:grid-cols-2 gap-0">

        {/* ── LEFT: Value Proposition (Static Server Rendered) ── */}
        <div className="flex flex-col justify-center py-10 md:py-16 md:pr-14">
          <div className="mb-10">
            <Image
              src="/logos/SVG/Logo-2.svg"
              alt="Lemonade Ideas"
              width={234}
              height={65}
              priority
              className="h-[52px] w-auto brightness-0 invert opacity-90"
            />
          </div>

          <div className="mb-3">
            <span className="inline-flex items-center gap-2 text-[#FED52B] text-xs font-bold uppercase tracking-[0.25em] bg-[#FED52B]/10 px-3 py-1.5 rounded-full">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
              Manual Expert Analysis
            </span>
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-[3.4rem] font-black text-white leading-[1.08] mb-5 tracking-tight font-oswald"
          >
            Get Your Free <span className="text-[#FED52B]">Marketing & SEO</span> Diagnostic
          </h1>

          <p className="text-base md:text-lg text-white/70 leading-relaxed mb-4 max-w-md font-semibold">
            Stop guessing where your leads are leaking. Let our experts analyze your digital presence.
          </p>

          <p className="text-sm md:text-base text-white/40 leading-relaxed mb-10 max-w-md">
            We will manually review your website, local SEO positioning, and current marketing efforts. This isn&apos;t an automated report; our team will build a tailored roadmap to highlight hidden opportunities to scale.
          </p>

          <div className="flex flex-col gap-4">
            {[
              "Expert manual analysis of your strategy",
              "Actionable growth and SEO insights",
              "100% free — no commitment required",
              "Data-driven customized roadmap",
            ].map((item, i) => (
               <div key={i} className="flex items-center gap-3 group">
                <div className="w-5 h-5 rounded-full bg-[#FED52B]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FED52B]/25 transition-colors">
                  <svg className="w-3 h-3 text-[#FED52B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-white/40 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Form Card (Client Component boundary) ── */}
        <div className="flex items-center">
          <DiagnosticForm />
        </div>
      </div>
    </div>
  );
}
