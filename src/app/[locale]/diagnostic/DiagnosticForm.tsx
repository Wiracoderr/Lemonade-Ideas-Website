"use client";

import { useState, FormEvent } from "react";

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

export default function DiagnosticForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    website: "",
    businessType: "",
    monthlyBudget: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Fake API call as this is not connected to any backend yet
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0f0d] px-4 overflow-hidden">
        {/* Optimized radial glow instead of blur */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-20"
          style={{ background: 'radial-gradient(circle, #FED52B 0%, transparent 70%)' }}
        />

        <div className="relative text-center max-w-lg mx-auto animate-[fadeUp_0.6s_ease-out]">
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-[#FED52B] to-[#e6c020] flex items-center justify-center shadow-[0_0_60px_rgba(254,213,43,0.3)]">
            <svg className="w-10 h-10 text-[#1E3A1A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            Application Received!
          </h2>
          <p className="text-lg text-white/60 leading-relaxed mb-8">
            Our marketing experts will manually analyze your website and data. We&apos;ll be reaching out shortly to schedule your free diagnostic session.
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

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-3xl p-8 md:p-10 space-y-5 shadow-2xl shadow-black/20"
    >
      <div className="mb-2">
        <h2
          className="text-2xl font-black text-white tracking-tight"
          style={{ fontFamily: "var(--font-oswald), sans-serif" }}
        >
          Request Your Diagnostic
        </h2>
        <p className="text-white/35 text-sm mt-1">
          Fill in your details below so we can begin the analysis
        </p>
      </div>

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <label className="block text-white/50 text-xs font-semibold uppercase tracking-wider mb-1.5">
            Company Name <span className="text-[#FED52B]">*</span>
          </label>
          <input
            type="text"
            name="company"
            required
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

        <div className="relative">
          <label className="block text-white/50 text-xs font-semibold uppercase tracking-wider mb-1.5">
            Website URL
            <span className="text-white/25 normal-case tracking-normal ml-1 text-[0.65rem]">
              (optional)
            </span>
          </label>
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            onFocus={() => setFocusedField("website")}
            onBlur={() => setFocusedField(null)}
            placeholder="https://yoursite.com"
            className={`w-full bg-white/[0.05] border rounded-xl px-4 py-3 text-white placeholder:text-white/20 text-sm transition-all duration-300 outline-none ${
                focusedField === "website"
                ? "border-[#FED52B]/60 shadow-[0_0_20px_rgba(254,213,43,0.08)]"
                : "border-white/10 hover:border-white/20"
            }`}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
      </div>

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

      <div className="relative">
        <label className="block text-white/50 text-xs font-semibold uppercase tracking-wider mb-2.5">
          Monthly Marketing Budget <span className="text-[#FED52B]">*</span>
        </label>
        <div className="grid grid-cols-2 gap-3">
          {[
            { value: "under_1k", label: "< $1,000" },
            { value: "1k_3k", label: "$1k - $3k" },
            { value: "3k_5k", label: "$3k - $5k" },
            { value: "5k_plus", label: "$5k+" },
          ].map((option) => (
            <label
              key={option.value}
              className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl border cursor-pointer transition-all duration-300 text-sm font-medium ${
                formData.monthlyBudget === option.value
                  ? "border-[#FED52B]/60 bg-[#FED52B]/10 text-[#FED52B] shadow-[0_0_20px_rgba(254,213,43,0.06)]"
                  : "border-white/10 text-white/40 hover:border-white/20 hover:text-white/60"
              }`}
            >
              <input
                type="radio"
                name="monthlyBudget"
                value={option.value}
                required
                checked={formData.monthlyBudget === option.value}
                onChange={handleChange}
                className="sr-only"
              />
              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                formData.monthlyBudget === option.value ? "border-[#FED52B]" : "border-white/20"
              }`}>
                {formData.monthlyBudget === option.value && (
                  <div className="w-2 h-2 rounded-full bg-[#FED52B]" />
                )}
              </div>
              {option.label}
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-gradient-to-r from-[#FED52B] to-[#e6c020] text-[#1E3A1A] font-black uppercase text-sm tracking-wider py-4 rounded-xl transition-all duration-300 mt-2 ${
          isSubmitting ? "opacity-75 cursor-not-allowed" : "hover:shadow-[0_8px_40px_rgba(254,213,43,0.25)] hover:-translate-y-0.5 active:translate-y-0"
        }`}
        style={{ fontFamily: "var(--font-oswald), sans-serif" }}
      >
        {isSubmitting ? "Processing..." : "Request Free Diagnostic"}
      </button>

      <p className="text-white/20 text-[0.65rem] text-center leading-relaxed pt-1">
        By submitting, you agree to receive marketing communications from Lemonade Ideas. Unsubscribe anytime.
      </p>
    </form>
  );
}
