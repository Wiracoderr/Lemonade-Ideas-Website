"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";

const BUSINESS_TYPES = [
  "Home Remodeling",
  "Kitchen Remodeling",
  "Bathroom Remodeling",
  "New Construction",
  "Home Additions",
  "Drywall",
  "Flooring",
  "Roofing",
  "Electrical Contractors",
  "Plumbing",
  "Air Conditioning and Heating",
  "Swimming Pool",
  "Water Damage Restoration",
  "Floor Damage Restoration",
  "Fire Damage Restoration",
  "Commercial Remodeling - General Contractor",
  "Handyman",
  "Other",
];

const ENGLISH_EBOOKS = [
  "/ebooks/7_Point_Landing_Page_Checklist_EN.pdf",
  "/ebooks/Synthetic_SEO_2026.pdf",
  "/ebooks/The_Architecture_of_High_Performance_Ideation_2026.pdf",
  "/ebooks/The_Architecture_of_Virality_2026.pdf",
];

const SPANISH_EBOOKS = [
  "/ebooks/7_Point_Landing_Page_Checklist_ES.pdf",
  "/ebooks/La_Arquitectura_de_la_Ideacion_de_Alto_Rendimiento_2026.pdf",
  "/ebooks/La_Arquitectura_de_la_Viralidad_2026.pdf",
  "/ebooks/SEO_Sintetico_2026.pdf",
];

export default function EbooksForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    businessType: "",
    wantsAdvisor: "",
    downloadLanguage: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Connect to MailerLite
    try {
      await fetch('/api/mailerlite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          name: formData.name,
          groupId: "184674410152592495",
          fields: {
            company: formData.company,
            phone: formData.phone,
            trade: formData.businessType,
            wants_advisor: formData.wantsAdvisor,
            download_language: formData.downloadLanguage
          }
        })
      });
    } catch (error) {
      console.error("Failed to subscribe:", error);
    }

    let ebooksToDownload: string[] = [];
    if (formData.downloadLanguage === "english" || formData.downloadLanguage === "both") {
      ebooksToDownload = [...ebooksToDownload, ...ENGLISH_EBOOKS];
    }
    if (formData.downloadLanguage === "spanish" || formData.downloadLanguage === "both") {
      ebooksToDownload = [...ebooksToDownload, ...SPANISH_EBOOKS];
    }

    ebooksToDownload.forEach((url, index) => {
      setTimeout(() => {
        const link = document.createElement("a");
        link.href = url;
        link.download = url.split('/').pop() || "ebook.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, index * 500);
    });

    setSubmitted(true);
  };

  /* ───────────── SUCCESS STATE ───────────── */
  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0f0d] px-4 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FED52B]/6 rounded-full blur-[180px] pointer-events-none" />

        <div className="relative text-center max-w-lg mx-auto animate-[fadeUp_0.6s_ease-out]">
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-[#FED52B] to-[#e6c020] flex items-center justify-center shadow-[0_0_60px_rgba(254,213,43,0.3)]">
            <svg className="w-10 h-10 text-[#1E3A1A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            You&apos;re In!
          </h2>
          <p className="text-lg text-white/60 leading-relaxed mb-8">
            Check your email — your 4 free ebooks are on their way. We&apos;ll also share exclusive growth strategies built for contractors like you.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-[#FED52B] font-bold hover:text-[#ffe16b] transition-colors text-sm uppercase tracking-widest"
          >
            <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            Back to Lemonade Ideas
          </a>
        </div>

        <style>{`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(24px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    );
  }

  /* ───────────── MAIN FORM ───────────── */
  return (
    <div className="min-h-screen bg-[#0a0f0d] relative overflow-hidden flex items-center justify-center px-4 py-12 md:py-0">

      {/* ── Ambient Background Elements ── */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1E3A1A]/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FED52B]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1E3A1A]/8 rounded-full blur-[200px] pointer-events-none" />

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

        {/* ── LEFT: Value Proposition ── */}
        <div className="flex flex-col justify-center py-10 md:py-16 md:pr-14">
          {/* Logo */}
          <div className="mb-10">
            <Image
              src="/logos/SVG/Logo-2.svg"
              alt="Lemonade Ideas"
              width={234}
              height={65}
              className="h-[52px] w-auto brightness-0 invert opacity-90"
            />
          </div>

          {/* Badge */}
          <div className="mb-3">
            <span className="inline-flex items-center gap-2 text-[#FED52B] text-xs font-bold uppercase tracking-[0.25em] bg-[#FED52B]/10 px-3 py-1.5 rounded-full">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
              4 Free Ebooks
            </span>
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-[3.4rem] font-black text-white leading-[1.08] mb-5 tracking-tight"
            style={{ fontFamily: "var(--font-oswald), sans-serif" }}
          >
            Dominate Your <span className="text-[#FED52B]">Market</span> With Data-Driven Strategies
          </h1>

          {/* 4 Ebooks highlight */}
          <p className="text-base md:text-lg text-white/70 leading-relaxed mb-4 max-w-md font-semibold">
            Not just 1, but <span className="text-[#FED52B] font-black">4 free ebooks</span> to improve your company&apos;s growth.
          </p>

          <p className="text-sm md:text-base text-white/40 leading-relaxed mb-10 max-w-md">
            Download our exclusive collection and discover the marketing frameworks that top contractors use to generate predictable leads and scale their business.
          </p>

          {/* Trust Signals */}
          <div className="flex flex-col gap-4">
            {[
              "Proven strategies for contractor growth",
              "Actionable data & real case studies",
              "4 comprehensive guides in one download",
              "100% free — no credit card required",
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

        {/* ── RIGHT: Form Card ── */}
        <div className="flex items-center">
          <form
            onSubmit={handleSubmit}
            className="w-full bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-3xl p-8 md:p-10 space-y-5 shadow-2xl shadow-black/20"
          >
            <div className="mb-2">
              <h2
                className="text-2xl font-black text-white tracking-tight"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                Get Your 4 Free Ebooks
              </h2>
              <p className="text-white/35 text-sm mt-1">
                Fill in your details below to download instantly
              </p>
            </div>

            {/* Name */}
            <div className="relative">
              <label className="block text-white/50 text-xs font-semibold uppercase tracking-wider mb-1.5">
                Full Name <span className="text-[#FED52B]">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                placeholder="John Smith"
                className={`w-full bg-white/[0.05] border rounded-xl px-4 py-3 text-white placeholder:text-white/20 text-sm transition-all duration-300 outline-none ${
                  focusedField === "name"
                    ? "border-[#FED52B]/60 shadow-[0_0_20px_rgba(254,213,43,0.08)]"
                    : "border-white/10 hover:border-white/20"
                }`}
              />
            </div>

            {/* Company */}
            <div className="relative">
              <label className="block text-white/50 text-xs font-semibold uppercase tracking-wider mb-1.5">
                Company Name
                <span className="text-white/25 normal-case tracking-normal ml-1 text-[0.65rem]">
                  (optional)
                </span>
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                onFocus={() => setFocusedField("company")}
                onBlur={() => setFocusedField(null)}
                placeholder="Your Company LLC"
                className={`w-full bg-white/[0.05] border rounded-xl px-4 py-3 text-white placeholder:text-white/20 text-sm transition-all duration-300 outline-none ${
                  focusedField === "company"
                    ? "border-[#FED52B]/60 shadow-[0_0_20px_rgba(254,213,43,0.08)]"
                    : "border-white/10 hover:border-white/20"
                }`}
              />
            </div>

            {/* Email */}
            <div className="relative">
              <label className="block text-white/50 text-xs font-semibold uppercase tracking-wider mb-1.5">
                Email <span className="text-[#FED52B]">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                placeholder="name@company.com"
                className={`w-full bg-white/[0.05] border rounded-xl px-4 py-3 text-white placeholder:text-white/20 text-sm transition-all duration-300 outline-none ${
                  focusedField === "email"
                    ? "border-[#FED52B]/60 shadow-[0_0_20px_rgba(254,213,43,0.08)]"
                    : "border-white/10 hover:border-white/20"
                }`}
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <label className="block text-white/50 text-xs font-semibold uppercase tracking-wider mb-1.5">
                Phone Number <span className="text-[#FED52B]">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => setFocusedField("phone")}
                onBlur={() => setFocusedField(null)}
                placeholder="(555) 123-4567"
                className={`w-full bg-white/[0.05] border rounded-xl px-4 py-3 text-white placeholder:text-white/20 text-sm transition-all duration-300 outline-none ${
                  focusedField === "phone"
                    ? "border-[#FED52B]/60 shadow-[0_0_20px_rgba(254,213,43,0.08)]"
                    : "border-white/10 hover:border-white/20"
                }`}
              />
            </div>

            {/* Business Type */}
            <div className="relative">
              <label className="block text-white/50 text-xs font-semibold uppercase tracking-wider mb-1.5">
                Type of Business <span className="text-[#FED52B]">*</span>
              </label>
              <div className="relative">
                <select
                  name="businessType"
                  required
                  value={formData.businessType}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("businessType")}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full bg-white/[0.05] border rounded-xl px-4 py-3 text-sm transition-all duration-300 outline-none appearance-none cursor-pointer ${
                    formData.businessType ? "text-white" : "text-white/20"
                  } ${
                    focusedField === "businessType"
                      ? "border-[#FED52B]/60 shadow-[0_0_20px_rgba(254,213,43,0.08)]"
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  <option value="" disabled className="bg-[#141a16] text-white/40">
                    Select your specialty...
                  </option>
                  {BUSINESS_TYPES.map((type) => (
                    <option
                      key={type}
                      value={type}
                      className="bg-[#141a16] text-white py-2"
                    >
                      {type}
                    </option>
                  ))}
                </select>
                <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>

            {/* Download Language Preference */}
            <div className="relative">
              <label className="block text-white/50 text-xs font-semibold uppercase tracking-wider mb-2.5">
                Preferred Ebook Language <span className="text-[#FED52B]">*</span>
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { value: "english", label: "English", flag: "🇺🇸" },
                  { value: "spanish", label: "Español", flag: "🇲🇽" },
                  { value: "both", label: "Both", flag: "🌎" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border cursor-pointer transition-all duration-300 text-sm font-medium ${
                      formData.downloadLanguage === option.value
                        ? "border-[#FED52B]/60 bg-[#FED52B]/10 text-[#FED52B] shadow-[0_0_20px_rgba(254,213,43,0.06)]"
                        : "border-white/10 text-white/40 hover:border-white/20 hover:text-white/60"
                    }`}
                  >
                    <input
                      type="radio"
                      name="downloadLanguage"
                      value={option.value}
                      required
                      checked={formData.downloadLanguage === option.value}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <span className="text-base">{option.flag}</span>
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            {/* Advisor Question */}
            <div className="relative">
              <label className="block text-white/50 text-xs font-semibold uppercase tracking-wider mb-2.5 leading-relaxed">
                Would you like to speak with an advisor for a personalized growth plan? <span className="text-[#FED52B]">*</span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: "yes", label: "Yes, I'm interested" },
                  { value: "no", label: "Not right now" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl border cursor-pointer transition-all duration-300 text-sm font-medium ${
                      formData.wantsAdvisor === option.value
                        ? "border-[#FED52B]/60 bg-[#FED52B]/10 text-[#FED52B] shadow-[0_0_20px_rgba(254,213,43,0.06)]"
                        : "border-white/10 text-white/40 hover:border-white/20 hover:text-white/60"
                    }`}
                  >
                    <input
                      type="radio"
                      name="wantsAdvisor"
                      value={option.value}
                      required
                      checked={formData.wantsAdvisor === option.value}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                      formData.wantsAdvisor === option.value ? "border-[#FED52B]" : "border-white/20"
                    }`}>
                      {formData.wantsAdvisor === option.value && (
                        <div className="w-2 h-2 rounded-full bg-[#FED52B]" />
                      )}
                    </div>
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-gradient-to-r from-[#FED52B] to-[#e6c020] text-[#1E3A1A] font-black uppercase text-sm tracking-wider py-4 rounded-xl transition-all duration-300 mt-2 ${
                isSubmitting ? "opacity-75 cursor-not-allowed" : "hover:shadow-[0_8px_40px_rgba(254,213,43,0.25)] hover:-translate-y-0.5 active:translate-y-0"
              }`}
              style={{ fontFamily: "var(--font-oswald), sans-serif" }}
            >
              {isSubmitting ? "Processing..." : "Download 4 Free Ebooks"}
            </button>

            <p className="text-white/20 text-[0.65rem] text-center leading-relaxed pt-1">
              By submitting, you agree to receive marketing communications from Lemonade Ideas. Unsubscribe anytime.
            </p>
          </form>
        </div>
      </div>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
