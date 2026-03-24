"use client";

import React, { useState } from 'react';
import { Link } from '@/i18n/routing';
import { motion, AnimatePresence } from 'framer-motion';
import { HardHat, Building2, Wrench, ShieldCheck, FileText, Camera, Pencil, CheckCircle2, ChevronRight, PlaySquare, CalendarDays, UploadCloud, MapPin, Loader2, Sparkles, LayoutTemplate, Briefcase } from 'lucide-react';

// Options Data
const steps = [
  { id: 1, title: 'Company Scale', icon: <Building2 className="w-5 h-5" /> },
  { id: 2, title: 'Local SEO', icon: <MapPin className="w-5 h-5" /> },
  { id: 3, title: 'Modules', icon: <Wrench className="w-5 h-5" /> },
  { id: 4, title: 'Add-ons', icon: <HardHat className="w-5 h-5" /> },
  { id: 5, title: 'Brand & Media', icon: <Sparkles className="w-5 h-5" /> },
  { id: 6, title: 'Copywriting', icon: <FileText className="w-5 h-5" /> }
];

export default function ConstructionQuoteCalculator() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showLeadGate, setShowLeadGate] = useState(false);
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // States
  const [scale, setScale] = useState<string>('');
  const [seo, setSeo] = useState<string>('');
  const [mod, setMod] = useState<string>('');
  const [addons, setAddons] = useState<string[]>([]);
  const [brand, setBrand] = useState<string>('');
  const [drone, setDrone] = useState<boolean>(false);
  const [copy, setCopy] = useState<string>('');

  const [leadData, setLeadData] = useState({ name: '', businessName: '', email: '', phone: '', website: '' });

  // Prices
  const scalePrices: Record<string, number> = {
    'scale-landing': 1500,
    'scale-small': 3500,
    'scale-mid': 4250,
    'scale-large': 4750,
    'scale-xlarge': 5500
  };

  const seoPrices: Record<string, number> = {
    'seo-none': 0,
    'seo-city-5': 800,
    'seo-city-15': 1800,
    'seo-city-30': 3000
  };

  const modPrices: Record<string, number> = {
    'mod-none': 0,
    'mod-estimator': 1500,
    'mod-portal': 2500
  };

  const addonPrices: Record<string, number> = {
    'feat-portfolio': 800,
    'feat-planroom': 1200,
    'feat-careers': 800,
    'feat-ada': 500
  };

  const brandPrices: Record<string, number> = {
    'brand-none': 0,
    'brand-basic': 800,
    'brand-book': 2500
  };

  const dronePrice = 600;

  const copyPrices: Record<string, number> = {
    'copy-none': 0,
    'copy-10': 1200,
    'copy-25': 2500,
    'copy-50': 4000
  };

  // Handlers
  const handleScaleSelect = (id: string) => setScale(id);
  const handleSeoSelect = (id: string) => setSeo(id);
  const handleModSelect = (id: string) => setMod(id);
  const handleBrandSelect = (id: string) => setBrand(id);
  const handleCopySelect = (id: string) => setCopy(id);

  const toggleAddon = (id: string) => {
    setAddons(prev => prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]);
  };

  const toggleDrone = () => setDrone(!drone);

  const calculateTotals = () => {
    const scaleTotal = scalePrices[scale] || 0;
    const seoTotal = seoPrices[seo] || 0;
    const modTotal = modPrices[mod] || 0;
    const addonsTotal = addons.reduce((acc, a) => acc + (addonPrices[a] || 0), 0);
    const brandTotal = brandPrices[brand] || 0;
    const droneTotal = drone ? dronePrice : 0;
    const copyTotal = copyPrices[copy] || 0;

    const subtotal = scaleTotal + seoTotal + modTotal + addonsTotal + brandTotal + droneTotal + copyTotal;

    let discount = 0;
    let label = '';

    // Rule A: Master Builder Bundle
    const hasRuleAScale = ['scale-mid', 'scale-large', 'scale-xlarge'].includes(scale);
    const hasRuleASeo = ['seo-city-15', 'seo-city-30'].includes(seo);
    const hasRuleAMod = ['mod-estimator', 'mod-portal'].includes(mod);
    const hasRuleAAddon = addons.includes('feat-portfolio');
    const hasRuleACopy = ['copy-25', 'copy-50'].includes(copy);

    const ruleA = hasRuleAScale && hasRuleASeo && hasRuleAMod && hasRuleAAddon && hasRuleACopy;

    // Rule B: The Complete Digital Rebrand
    const ruleB = (brand === 'brand-book') && drone && ['copy-10', 'copy-25', 'copy-50'].includes(copy) && !ruleA;

    if (ruleA) {
      discount = subtotal * 0.15;
      label = '🏗️ Master Builder Bundle (-15%)';
    } else if (ruleB) {
      discount = 900;
      label = '🏗️ Complete Digital Rebrand (-$900)';
    }

    const net = subtotal - discount;

    const round50 = (val: number) => Math.round(val / 50) * 50;
    const minRange = round50(net);
    const maxRange = round50(net * 1.25);

    return {
      scaleTotal, seoTotal, modTotal, addonsTotal, brandTotal, droneTotal, copyTotal, subtotal, discount, label, minRange, maxRange, net
    };
  };

  const handleNext = () => {
    if (currentStep < 6) {
      setCurrentStep(s => s + 1);
    } else {
      setShowLeadGate(true);
    }
  };

  const submitLead = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingLead(true);
    setTimeout(() => {
      setIsSubmittingLead(false);
      setShowLeadGate(false);
      setShowResults(true);
    }, 1500);
  };

  // UI Components
  const OptionCard = ({
    active, onClick, title, desc, icon
  }: {
    active: boolean, onClick: () => void, title: string, desc: string, icon: React.ReactNode
  }) => (
    <div
      onClick={onClick}
      className={`relative p-5 md:p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 flex items-start gap-4 hover:shadow-md
        ${active ? 'border-[#1E3A1A] bg-[#1E3A1A]/5 shadow-[0_0_15px_rgba(30,58,26,0.1)]' : 'border-slate-200 hover:border-slate-300 bg-white'}`}
    >
      <div className={`p-3 rounded-lg shrink-0 ${active ? 'bg-[#1E3A1A] text-white' : 'bg-slate-100 text-slate-600'}`}>
        {icon}
      </div>
      <div className="pr-10">
        <h4 className={`text-base md:text-[17px] font-bold mb-1 leading-snug ${active ? 'text-slate-900' : 'text-slate-700'}`}>{title}</h4>
        {desc && <p className="text-sm text-slate-500 leading-relaxed font-medium mt-1.5">{desc}</p>}
      </div>
      <div className={`absolute top-1/2 -translate-y-1/2 right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0
        ${active ? 'border-[#1E3A1A] bg-[#1E3A1A]' : 'border-slate-300'}
      `}>
        {active && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
      </div>
    </div>
  );

  const CheckboxCard = ({
    checked, onChange, title, desc, icon
  }: {
    checked: boolean, onChange: () => void, title: string, desc: string, icon: React.ReactNode
  }) => (
    <div
      onClick={() => onChange()}
      className={`relative p-5 md:p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 flex items-start gap-4 hover:shadow-md
        ${checked ? 'border-[#1E3A1A] bg-[#1E3A1A]/5 shadow-[0_0_15px_rgba(30,58,26,0.1)]' : 'border-slate-200 hover:border-slate-300 bg-white'}`}
    >
      <div className={`p-3 rounded-lg shrink-0 ${checked ? 'bg-[#1E3A1A] text-white' : 'bg-slate-100 text-slate-600'}`}>
        {icon}
      </div>
      <div className="pr-10">
        <h4 className={`text-base md:text-[17px] font-bold mb-1 leading-snug ${checked ? 'text-slate-900' : 'text-slate-700'}`}>{title}</h4>
        {desc && <p className="text-sm text-slate-500 leading-relaxed font-medium mt-1.5">{desc}</p>}
      </div>
      <div className={`absolute top-1/2 -translate-y-1/2 right-4 w-6 h-6 rounded border-2 flex items-center justify-center shrink-0
        ${checked ? 'border-[#1E3A1A] bg-[#1E3A1A]' : 'border-slate-300'}
      `}>
        {checked && <CheckCircle2 className="w-4 h-4 text-white" />}
      </div>
    </div>
  );

  if (showResults) {
    const totals = calculateTotals();

    const itemNames: Record<string, string> = {
      'scale-landing': 'Trade Landing Pad (1-3 Pages)',
      'scale-small': 'Standard Contractor Profile (4-10 Pages)',
      'scale-mid': 'Mid-Market Authority Site (11-25 Pages)',
      'scale-large': 'Regional Dominator (26-50 Pages)',
      'scale-xlarge': 'Enterprise Market Presence (51-100 Pages)',
      'seo-none': 'Standard Site Structure',
      'seo-city-5': 'Local SEO Starter (5 City Pages)',
      'seo-city-15': 'County Takeover (15 City Pages)',
      'seo-city-30': 'California Regional Dominance (30 City Pages)',
      'mod-none': 'Standard Contact & RFQ Forms Only',
      'mod-estimator': 'Dynamic Cost Estimator',
      'mod-portal': 'Secure Client / Investor Portal',
      'feat-portfolio': 'Dynamic Project Portfolio',
      'feat-planroom': 'Private Plan Room',
      'feat-careers': 'Recruitment & ATS Hub',
      'feat-ada': 'ADA Compliance Suite',
      'brand-none': 'Client Provided Established Brand Guidelines',
      'brand-basic': 'Essential Brand Refresh',
      'brand-book': 'Comprehensive Brand Guidelines',
      'copy-none': 'Client Provides Text Content',
      'copy-10': 'Local SEO Copywriting - Up to 10 Pages',
      'copy-25': 'Advanced Local SEO Copywriting - Up to 25 Pages',
      'copy-50': 'Premium Local SEO Copywriting - Up to 50 Pages'
    };

    return (
      <div className="font-sans">
        <motion.div
           initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}
           className="max-w-4xl w-full mx-auto bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-100"
        >
          <div className="bg-[#1E3A1A] text-white p-8 md:p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat z-0"></div>
            <div className="relative z-10 flex flex-col items-center">
              <span className="bg-yellow-500/20 text-yellow-400 font-bold tracking-widest uppercase text-xs px-4 py-1.5 rounded-full mb-6 inline-block ring-1 ring-yellow-500/50">Blueprint Prepared for {leadData.businessName || leadData.name || 'You'}</span>
              <h2 className="text-3xl md:text-5xl font-black mb-1 opacity-95">Estimated Configuration</h2>
              <div className="text-4xl md:text-[5rem] font-black text-white mt-8 tracking-tighter leading-none">
                ${totals.minRange.toLocaleString()} <span className="text-2xl md:text-4xl text-white/50 font-medium mx-2 md:mx-4">-</span> ${totals.maxRange.toLocaleString()}
              </div>
              <span className="text-xl md:text-2xl font-bold text-white/60 tracking-widest uppercase mt-4">USD</span>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8 border-b pb-4">
              Itemized Project Architecture
            </h3>

            <div className="space-y-6 mb-12">
              {scale && (
                <div className="flex justify-between items-start text-slate-700">
                  <div className="flex flex-col pr-4">
                     <span className="font-bold text-lg">1. Digital Foundation</span>
                     <span className="text-slate-500 mt-1">{itemNames[scale]}</span>
                  </div>
                </div>
              )}
              {seo && (
                <div className="flex justify-between items-start text-slate-700 pt-6 border-t border-slate-100">
                  <div className="flex flex-col pr-4">
                     <span className="font-bold text-lg">2. Local SEO Targeting</span>
                     <span className="text-slate-500 mt-1">{itemNames[seo]}</span>
                  </div>
                 </div>
              )}
              {mod && (
                 <div className="flex justify-between items-start text-slate-700 pt-6 border-t border-slate-100">
                   <div className="flex flex-col pr-4">
                     <span className="font-bold text-lg">3. Conversion Modules</span>
                     <span className="text-slate-500 mt-1">{itemNames[mod]}</span>
                   </div>
                 </div>
              )}
              {addons.length > 0 && (
                <div className="pt-6 border-t border-slate-100">
                  <span className="font-bold text-lg text-slate-700 block mb-3">4. Construction Add-ons</span>
                  <div className="space-y-3">
                    {addons.map(a => (
                      <div key={a} className="flex justify-between items-start text-slate-600 ml-4 pl-4 border-l-2 border-slate-200">
                        <span>{itemNames[a]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {(brand || drone) && (
                <div className="pt-6 border-t border-slate-100">
                  <span className="font-bold text-lg text-slate-700 block mb-3">5. Brand & Media</span>
                  <div className="space-y-3">
                    {brand && (
                      <div className="flex justify-between items-start text-slate-600 ml-4 pl-4 border-l-2 border-slate-200">
                         <span>{itemNames[brand]}</span>
                      </div>
                    )}
                    {drone && (
                      <div className="flex justify-between items-start text-slate-600 ml-4 pl-4 border-l-2 border-slate-200">
                         <span>Drone & Jobsite Media Optimization</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
              {copy && (
                 <div className="flex justify-between items-start text-slate-700 pt-6 border-t border-slate-100">
                   <div className="flex flex-col pr-4">
                     <span className="font-bold text-lg">6. Content Strategy</span>
                     <span className="text-slate-500 mt-1">{itemNames[copy]}</span>
                   </div>
                 </div>
              )}

              {totals.discount > 0 && (
                <div className="flex justify-between items-center text-lg font-bold text-white bg-[#1E3A1A] p-6 rounded-2xl mt-8 shadow-md">
                  <span>{totals.label}</span>
                </div>
              )}
            </div>

            <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200 mb-10">
              <strong className="text-slate-900 block mb-2 text-lg">Managed Hosting & Continuous Maintenance</strong>
              <p className="text-slate-600 leading-relaxed font-medium text-[15px]">
                High-performance construction websites require ongoing security, fast hosting for heavy drone media, and routine maintenance to rank locally in California. Our managed Site-Plan hosting starts at $149/month. A final binding proposal will be provided after our blueprint discovery call.
              </p>
            </div>

            <Link href="https://calendly.com/lemonadeideas-consultation/30min?month=2026-03" target="_blank" rel="noopener noreferrer" className="w-full bg-[#fed034] hover:bg-yellow-400 text-[#1E3A1A] font-black text-lg uppercase tracking-widest py-5 rounded-2xl transition-all shadow-lg hover:shadow-xl flex justify-center items-center gap-3">
              Schedule Blueprint Discovery Call <ChevronRight className="w-6 h-6" />
            </Link>
            <button
               onClick={() => {setShowResults(false); setCurrentStep(1);}}
               className="w-full mt-6 text-slate-500 hover:text-slate-800 font-bold uppercase tracking-wider text-sm transition"
            >
               Restart Configuration
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  if (showLeadGate) {
     return (
        <div className="font-sans">
           <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-2xl mx-auto w-full bg-white p-8 md:p-14 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-slate-100 text-center relative overflow-hidden">
               {isSubmittingLead && (
                  <div className="absolute inset-0 bg-white/95 z-50 flex flex-col items-center justify-center backdrop-blur-sm">
                     <Loader2 className="w-12 h-12 text-[#1E3A1A] animate-spin mb-4" />
                     <p className="font-bold text-slate-800 text-lg uppercase tracking-widest animate-pulse">Calculating Scope...</p>
                  </div>
               )}
               <div className="w-20 h-20 bg-yellow-500/10 rounded-[2rem] flex items-center justify-center mx-auto mb-8">
                  <FileText className="w-10 h-10 text-yellow-500" />
               </div>
               <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Almost Done</h3>
               <p className="text-slate-500 mb-10 leading-relaxed font-medium text-lg">Where should we send your preliminary estimate? Enter your details below to reveal your itemized quote range.</p>

               <form onSubmit={submitLead} className="text-left">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-xs font-bold text-[#1E3A1A] mb-2 pl-1">Business Name</label>
                      <input type="text" className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 focus:border-[#1E3A1A] focus:ring-0 transition-colors bg-slate-50 focus:bg-white text-slate-800 font-medium" value={leadData.businessName} onChange={(e) => setLeadData({...leadData, businessName: e.target.value})} />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#1E3A1A] mb-2 pl-1">Your Name *</label>
                      <input required type="text" className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 focus:border-[#1E3A1A] focus:ring-0 transition-colors bg-slate-50 focus:bg-white text-slate-800 font-medium" value={leadData.name} onChange={(e) => setLeadData({...leadData, name: e.target.value})} />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#1E3A1A] mb-2 pl-1">Business Email {leadData.phone ? '' : '*'}</label>
                      <input required={!leadData.phone} type="email" className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 focus:border-[#1E3A1A] focus:ring-0 transition-colors bg-slate-50 focus:bg-white text-slate-800 font-medium" value={leadData.email} onChange={(e) => setLeadData({...leadData, email: e.target.value})} />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#1E3A1A] mb-2 pl-1">Business Phone {leadData.email ? '' : '*'}</label>
                      <input required={!leadData.email} type="tel" className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 focus:border-[#1E3A1A] focus:ring-0 transition-colors bg-slate-50 focus:bg-white text-slate-800 font-medium" value={leadData.phone} onChange={(e) => setLeadData({...leadData, phone: e.target.value})} />
                    </div>
                  </div>
                  <div className="mb-5">
                      <label className="block text-xs font-bold text-[#1E3A1A] mb-2 pl-1">Website URL</label>
                      <input type="text" placeholder="www.yourwebsite.com" className="w-full md:w-[calc(50%-10px)] px-5 py-4 rounded-xl border-2 border-slate-200 focus:border-[#1E3A1A] focus:ring-0 transition-colors bg-slate-50 focus:bg-white text-slate-800 font-medium" value={leadData.website} onChange={(e) => setLeadData({...leadData, website: e.target.value})} />
                  </div>
                  
                  {(!leadData.email && !leadData.phone) && (
                     <p className="text-red-500 text-xs font-bold mb-4 mt-2 px-1">* Please provide either an Email or a Phone Number.</p>
                  )}

                  <button type="submit" className="w-full bg-[#1E3A1A] hover:bg-[#2a5139] text-white font-black py-5 mt-4 rounded-xl uppercase tracking-widest shadow-lg transition-all hover:shadow-xl text-lg relative overflow-hidden group">
                     <span className="relative z-10 flex items-center justify-center gap-2">Reveal Pricing <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" /></span>
                  </button>
                  <button type="button" onClick={() => setShowLeadGate(false)} className="w-full text-center mt-6 text-sm text-slate-400 hover:text-slate-600 font-bold uppercase tracking-wider transition">
                     Go Back Edit Selection
                  </button>
               </form>
           </motion.div>
        </div>
     );
  }

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8 font-sans">
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-black text-[#1E3A1A] uppercase tracking-tight mb-4 text-center md:text-left">Build Your Blueprint</h2>
        <p className="text-slate-500 font-medium text-lg text-center md:text-left">Select your requirements to instantly generate an estimated quote.</p>
        
        {/* Progress Timeline */}
        <div className="hidden lg:flex items-center justify-between mt-12 relative px-4">
          <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-1 bg-slate-200 -z-10 rounded-full"></div>
          <div className="absolute left-6 top-1/2 -translate-y-1/2 h-1 bg-yellow-500 -z-10 rounded-full transition-all duration-500" style={{ width: `calc((100% - 3rem) * ${(currentStep - 1) / 5})` }}></div>
          
          {steps.map((s) => (
            <div 
              key={s.id} 
              onClick={() => {
                if (currentStep === 1 && !scale && s.id > 1) return;
                setCurrentStep(s.id);
              }}
              className={`flex flex-col items-center gap-3 transition-transform bg-slate-50 px-3 ${
                (currentStep === 1 && !scale && s.id > 1) ? 'cursor-not-allowed opacity-60' : 'cursor-pointer hover:-translate-y-1'
              }`}
            >
              <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center bg-white transition-all shadow-sm
                ${currentStep === s.id ? 'border-yellow-500 text-yellow-500 scale-110' : 
                  currentStep > s.id ? 'border-[#1E3A1A] bg-[#1E3A1A] text-white' : 'border-slate-200 text-slate-400'}
              `}>
                {currentStep > s.id ? <CheckCircle2 className="w-6 h-6" /> : s.icon}
              </div>
              <span className={`text-xs font-bold uppercase tracking-widest whitespace-nowrap mt-2 
                 ${currentStep === s.id ? 'text-[#1E3A1A]' : currentStep > s.id ? 'text-slate-700' : 'text-slate-400'}`}>{s.title}</span>
            </div>
          ))}
        </div>

        {/* Mobile Progress Text */}
        <div className="lg:hidden mt-8 flex justify-center">
           <div className="inline-flex items-center gap-3 bg-white px-5 py-2.5 rounded-full border border-slate-200 shadow-sm">
             <div className="font-bold text-[#1E3A1A] text-xs uppercase tracking-wider">Step {currentStep} <span className="text-slate-300 mx-1">of</span> 6</div>
           </div>
        </div>
      </div>

      <div className="bg-white rounded-[2rem] p-6 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 min-h-[400px]">
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{duration: 0.3}} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-8 border-b pb-4 border-slate-100">1. Website Scale & Digital Architecture</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <OptionCard active={scale === 'scale-landing'} onClick={() => handleScaleSelect('scale-landing')} icon={<LayoutTemplate className="w-6 h-6"/>}
                  title="Trade Landing Pad (1-3 Pages)" desc="Ideal for specialized single-trade subcontractors (e.g., just Roofing or HVAC) needing quick validation and basic contact info." />
                <OptionCard active={scale === 'scale-small'} onClick={() => handleScaleSelect('scale-small')} icon={<Building2 className="w-6 h-6"/>}
                  title="Standard Contractor Profile (4-10 Pages)" desc="The industry standard. Covers Home, About Us, 4-5 Core Services, Contact, and a basic Portfolio." />
                <OptionCard active={scale === 'scale-mid'} onClick={() => handleScaleSelect('scale-mid')} icon={<Briefcase className="w-6 h-6"/>}
                  title="Mid-Market Authority Site (11-25 Pages)" desc="Crucial for Google ranking. Includes dedicated 'Service Silo' pages for every single specialty you offer, plus deep case studies." />
                <OptionCard active={scale === 'scale-large'} onClick={() => handleScaleSelect('scale-large')} icon={<HardHat className="w-6 h-6"/>}
                  title="Regional Dominator (26-50 Pages)" desc="Extensive architecture featuring detailed team bios, investor relations, deep service breakdowns, and massive project galleries." />
                <OptionCard active={scale === 'scale-xlarge'} onClick={() => handleScaleSelect('scale-xlarge')} icon={<ShieldCheck className="w-6 h-6"/>}
                  title="Enterprise Market Presence (51-100 Pages)" desc="Required for vast resource centers, historical portfolios, safety compliance hubs, and massive sub-contractor networks." />
              </div>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{duration: 0.3}} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-4">2. Local SEO & Territory Expansion</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-8 max-w-3xl pb-4 border-b border-slate-100 font-medium">Construction is hyper-local. We build dedicated, SEO-optimized landing pages targeting specific wealthy California counties or cities (e.g., &apos;Kitchen Remodeler in Orange County&apos;).</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <OptionCard active={seo === 'seo-none'} onClick={() => handleSeoSelect('seo-none')} icon={<MapPin className="w-6 h-6"/>}
                  title="Standard Site Structure" desc="No dedicated city pages. We will only target your primary HQ location." />
                <OptionCard active={seo === 'seo-city-5'} onClick={() => handleSeoSelect('seo-city-5')} icon={<MapPin className="w-6 h-6"/>}
                  title="Local SEO Starter (5 City Pages)" desc="We generate 5 custom geo-targeted pages to capture leads in neighboring high-income cities." />
                <OptionCard active={seo === 'seo-city-15'} onClick={() => handleSeoSelect('seo-city-15')} icon={<MapPin className="w-6 h-6"/>}
                  title="County Takeover (15 City Pages)" desc="Aggressive local SEO capture across a major region (e.g., dominating all of Orange County, LA County, or the Bay Area)." />
                <OptionCard active={seo === 'seo-city-30'} onClick={() => handleSeoSelect('seo-city-30')} icon={<MapPin className="w-6 h-6"/>}
                  title="California Regional Dominance (30 City Pages)" desc="Massive multi-county targeting across Southern or Northern California to ensure you appear everywhere your clients search." />
              </div>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{duration: 0.3}} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-8 border-b pb-4 border-slate-100">3. Conversion & Operations Modules</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <OptionCard active={mod === 'mod-none'} onClick={() => handleModSelect('mod-none')} icon={<FileText className="w-6 h-6"/>}
                  title="Standard Contact & RFQ Forms Only" desc="Basic lead capture structure." />
                <OptionCard active={mod === 'mod-estimator'} onClick={() => handleModSelect('mod-estimator')} icon={<CalendarDays className="w-6 h-6"/>}
                  title="Dynamic Cost Estimator" desc="Interactive multi-step conditional form to pre-qualify leads by budget, timeline, and CA zip code before you waste time driving to a site." />
                <OptionCard active={mod === 'mod-portal'} onClick={() => handleModSelect('mod-portal')} icon={<ShieldCheck className="w-6 h-6"/>}
                  title="Secure Client / Investor Portal" desc="Private login for homeowners to track daily logs, view drone updates, and legally approve Change Orders online." />
              </div>
            </motion.div>
          )}

          {currentStep === 4 && (
            <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{duration: 0.3}} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-8 border-b pb-4 border-slate-100">4. Industry-Specific Add-ons</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <CheckboxCard checked={addons.includes('feat-portfolio')} onChange={() => toggleAddon('feat-portfolio')} icon={<PlaySquare className="w-6 h-6"/>}
                  title="Dynamic Project Portfolio" desc="Filterable galleries by Res/Com, with interactive Before & After visual sliders." />
                <CheckboxCard checked={addons.includes('feat-planroom')} onChange={() => toggleAddon('feat-planroom')} icon={<UploadCloud className="w-6 h-6"/>}
                  title="Private Plan Room" desc="Secure area with password protection for your subcontractors to download blueprints & submit bids." />
                <CheckboxCard checked={addons.includes('feat-careers')} onChange={() => toggleAddon('feat-careers')} icon={<Building2 className="w-6 h-6"/>}
                  title="Recruitment & ATS Hub" desc="Solve labor shortages by attracting top tradesmen with a dedicated careers and application portal." />
                <CheckboxCard checked={addons.includes('feat-ada')} onChange={() => toggleAddon('feat-ada')} icon={<ShieldCheck className="w-6 h-6"/>}
                  title="ADA Compliance Suite" desc="Crucial for California businesses to mitigate digital accessibility lawsuit risks from predatory law firms." />
              </div>
            </motion.div>
          )}

          {currentStep === 5 && (
            <motion.div key="step5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{duration: 0.3}} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-8 border-b pb-4 border-slate-100">5. Brand Authority & Media</h3>
              <div className="space-y-8">
                 <div>
                   <h4 className="font-bold text-slate-900 mb-5 uppercase tracking-wider text-[13px]">Brand Package (Select One)</h4>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                     <OptionCard active={brand === 'brand-none'} onClick={() => handleBrandSelect('brand-none')} icon={<CheckCircle2 className="w-6 h-6"/>}
                       title="I have established brand guidelines" desc="Client will provide high-res vector logos and colors." />
                     <OptionCard active={brand === 'brand-basic'} onClick={() => handleBrandSelect('brand-basic')} icon={<Pencil className="w-6 h-6"/>}
                       title="Essential Brand Refresh" desc="Primary Logo modernization, Corporate Color Palette formulation, and Typography Stack." />
                     <OptionCard active={brand === 'brand-book'} onClick={() => handleBrandSelect('brand-book')} icon={<FileText className="w-6 h-6"/>}
                       title="Comprehensive Brand Guidelines" desc="Full Corporate Identity System, Brand Book PDF, Truck Wrap Mockups, and Hardhat Decal designs." />
                   </div>
                 </div>

                 <div className="pt-8 border-t border-slate-100">
                   <h4 className="font-bold text-slate-900 mb-5 uppercase tracking-wider text-[13px]">Visual Media (Optional)</h4>
                   <div className="grid grid-cols-1">
                     <CheckboxCard checked={drone} onChange={toggleDrone} icon={<Camera className="w-6 h-6"/>}
                       title="Drone & Jobsite Media Optimization" desc="We professionally edit, color-grade, and compress your raw site footage for high-speed, cinematic web headers." />
                   </div>
                 </div>
              </div>
            </motion.div>
          )}

          {currentStep === 6 && (
            <motion.div key="step6" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{duration: 0.3}} className="space-y-6 h-full">
              <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-4">6. Technical SEO Copywriting</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-8 max-w-3xl pb-4 border-b border-slate-100 font-medium">Do you need our technical copywriters to write the persuasive, CA-compliant text for your website based on your trade?</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
                <OptionCard active={copy === 'copy-none'} onClick={() => handleCopySelect('copy-none')} icon={<FileText className="w-6 h-6"/>}
                  title="Client writes text content" desc="You provide all finalized, SEO-ready text content." />
                <OptionCard active={copy === 'copy-10'} onClick={() => handleCopySelect('copy-10')} icon={<Pencil className="w-6 h-6"/>}
                  title="Local SEO Copywriting" desc="Up to 10 Pages written by our construction experts." />
                <OptionCard active={copy === 'copy-25'} onClick={() => handleCopySelect('copy-25')} icon={<Pencil className="w-6 h-6"/>}
                  title="Advanced Local SEO Copywriting" desc="Up to 25 Pages for expanded site architectures." />
                <OptionCard active={copy === 'copy-50'} onClick={() => handleCopySelect('copy-50')} icon={<Briefcase className="w-6 h-6"/>}
                  title="Premium Local SEO Copywriting" desc="Up to 50 Pages for regional dominant authorities." />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-10 pt-8 border-t border-slate-100 flex justify-between items-center relative z-10">
          {currentStep > 1 ? (
            <button 
              onClick={() => setCurrentStep(s => s - 1)}
              className="text-slate-500 hover:text-[#1E3A1A] font-bold uppercase tracking-widest text-sm transition flex items-center gap-2 group p-2 -ml-2"
            >
              <ChevronRight className="w-5 h-5 rotate-180 transition-transform group-hover:-translate-x-1" /> Back
            </button>
          ) : <div></div>}
          
          <button 
            onClick={handleNext}
            disabled={(!scale && currentStep === 1) || (!seo && currentStep === 2) || (!mod && currentStep === 3) || (!brand && currentStep === 5) || (!copy && currentStep === 6)}
            className={`bg-[#1E3A1A] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest flex items-center gap-3 transition-all shadow-[0_8px_20px_rgba(30,58,26,0.15)]
              ${((!scale && currentStep === 1) || (!seo && currentStep === 2) || (!mod && currentStep === 3) || (!brand && currentStep === 5) || (!copy && currentStep === 6)) ? 'opacity-40 cursor-not-allowed' : 'hover:bg-[#2A4F24] hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(30,58,26,0.25)]'}
            `}
          >
            {currentStep === 6 ? 'Reveal Estimate' : 'Continue'} <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
