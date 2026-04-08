"use client";

import React, { useState } from 'react';
import { Link } from '@/i18n/routing';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  MapPin, 
  Sparkles, 
  ChevronRight, 
  Target, 
  Network, 
  CheckCircle2, 
  FileText, 
  Loader2,
  Server,
  Megaphone
} from 'lucide-react';

// Options Data
const steps = [
  { id: 1, title: 'Brand', icon: <Sparkles className="w-5 h-5" /> },
  { id: 2, title: 'Social Media', icon: <Network className="w-5 h-5" /> },
  { id: 3, title: 'Hosting', icon: <Server className="w-5 h-5" /> },
  { id: 4, title: 'Organic SEO', icon: <MapPin className="w-5 h-5" /> },
  { id: 5, title: 'AIO (AI Search)', icon: <Target className="w-5 h-5" /> },
  { id: 6, title: 'Paid Ads', icon: <Megaphone className="w-5 h-5" /> }
];

export default function GrowthBlueprintEstimator() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showLeadGate, setShowLeadGate] = useState(false);
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // States
  const [brand, setBrand] = useState<string>('');
  const [social, setSocial] = useState<string>('');
  const [host, setHost] = useState<string>('');
  const [seo, setSeo] = useState<string>('');
  const [aio, setAio] = useState<string>('');
  const [ads, setAds] = useState<string>('');

  const [leadData, setLeadData] = useState({ name: '', businessName: '', email: '', phone: '', website: '' });

  // Prices (One-Time)
  const brandPrices: Record<string, number> = {
    'brand-none': 0,
    'brand-basic': 4700,
    'brand-standard': 14650,
    'brand-premium': 29300
  };

  // Prices (MRR)
  const socialPrices: Record<string, number> = {
    'social-none': 0,
    'social-starter': 1500,
    'social-leader': 2800,
    'social-enterprise': 0 // UI rule: Contact Sales, math = 0
  };

  const hostPrices: Record<string, number> = {
    'host-none': 0,
    'host-essentials': 95,
    'host-growth': 250,
    'host-performance': 495
  };

  const seoPrices: Record<string, number> = {
    'seo-none': 0,
    'seo-starter': 1125,
    'seo-scale': 1940
  };

  const aioPrices: Record<string, number> = {
    'aio-none': 0,
    'aio-standard': 1250,
    'aio-premium': 2100
  };

  const adsPrices: Record<string, number> = {
    'ads-none': 0,
    'ads-starter': 980,
    'ads-scale': 1540
  };

  const itemNames: Record<string, string> = {
    'brand-none': 'Existing Brand (Assets Provided)',
    'brand-basic': 'Basic Brand Foundation',
    'brand-standard': 'Standard Corporate Identity',
    'brand-premium': 'Premium Market Dominance',
    
    'social-none': 'In-House Management',
    'social-starter': 'Project Starter Social',
    'social-leader': 'Market Leader Social',
    'social-enterprise': 'Enterprise Ecosystem Social',

    'host-none': 'Self-Managed Hosting',
    'host-essentials': 'Essentials Hosting',
    'host-growth': 'Growth Hosting & Maintenance',
    'host-performance': 'Performance Hosting & Support',

    'seo-none': 'No Local SEO Required',
    'seo-starter': 'Base SEO Package',
    'seo-scale': 'Scale SEO Package',

    'aio-none': 'Traditional Search Only',
    'aio-standard': 'Standard AIO (AI LLM Optimization)',
    'aio-premium': 'Premium AIO (Advanced AI LLM Dominance)',

    'ads-none': 'No Paid Ads Management',
    'ads-starter': 'Starter Lead Generation Ads',
    'ads-scale': 'Scale Market Dominance Ads'
  };

  const calculateTotals = () => {
    const oneTimeTotal = brandPrices[brand] || 0;

    const socialVal = socialPrices[social] || 0;
    const hostVal = hostPrices[host] || 0;
    const seoVal = seoPrices[seo] || 0;
    const aioVal = aioPrices[aio] || 0;
    const adsVal = adsPrices[ads] || 0;

    const subtotalMonthly = socialVal + hostVal + seoVal + aioVal + adsVal;

    let discountMonthly = 0;
    let label = '';
    
    // Evaluation for Rule A: 3 MRR services from (Social, SEO, AIO, Ads)
    const activeMRRItems = [
      socialVal > 0 ? 1 : 0,
      seoVal > 0 ? 1 : 0,
      aioVal > 0 ? 1 : 0,
      adsVal > 0 ? 1 : 0
    ].reduce((a, b) => a + b, 0);

    if (activeMRRItems >= 3) {
      discountMonthly = subtotalMonthly * 0.10;
      label = '⚙️ Omnichannel Growth Bundle (-10% on Monthly Retainer)';
    }

    const netMonthly = subtotalMonthly - discountMonthly;

    return {
      oneTimeTotal,
      socialVal, hostVal, seoVal, aioVal, adsVal,
      subtotalMonthly,
      discountMonthly,
      netMonthly,
      label
    };
  };

  const handleNext = () => {
    if (currentStep < 6) {
      setCurrentStep(s => s + 1);
    } else {
      setShowLeadGate(true);
    }
  };

  const submitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingLead(true);

    try {
        const totals = calculateTotals();
        await fetch('/api/mailerlite', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                email: leadData.email, 
                name: leadData.name, 
                groupId: '184120509254862349', // General Quote
                fields: {
                    phone: leadData.phone || "",
                    company: leadData.businessName || "",
                    quoting_details: `B2B Blueprint Estimator -> Brand: ${brand}\nSocial: ${social}\nHost: ${host}\nSEO: ${seo}\nAIO: ${aio}\nAds: ${ads}`,
                    estimated_price: `$${totals.netMonthly.toString()} /mo`
                }
            })
        });
    } catch(err) {
        console.error("Mailerite API error", err);
    }

    setTimeout(() => {
      setIsSubmittingLead(false);
      setShowLeadGate(false);
      setShowResults(true);
    }, 500);
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

  if (showResults) {
    const totals = calculateTotals();

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
              <h2 className="text-3xl md:text-5xl font-black mb-1 opacity-95">Growth Architecture Estimate</h2>
            </div>
          </div>

          <div className="p-8 md:p-12">
            
            {/* Split Invoice View */}
            
            <div className="mb-10">
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#1E3A1A] mb-4 border-b pb-2">
                1. Initial Investment (One-Time Setup)
                </h3>
                
                <div className="flex justify-between items-start text-slate-700 pt-4">
                  <div className="flex flex-col pr-4">
                     <span className="font-bold text-lg">{itemNames[brand] || 'Existing Brand Assets'}</span>
                     <span className="text-slate-500 mt-1">Brand Architecture & Strategy Phase</span>
                  </div>
                  <div className="text-xl font-bold">
                    {totals.oneTimeTotal === 0 ? '$0' : `$${totals.oneTimeTotal.toLocaleString()}`}
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mt-6 flex justify-between items-center">
                    <strong className="text-slate-900 text-lg uppercase tracking-wider font-bold">Total Initial Investment:</strong>
                    <div className="text-2xl font-black text-[#1E3A1A]">
                        ${totals.oneTimeTotal.toLocaleString()} <span className="text-sm font-bold text-slate-500 ml-1">USD</span>
                    </div>
                </div>
            </div>

            <div className="mb-12">
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#1E3A1A] mb-4 border-b pb-2">
                2. Your Monthly Growth Engine (MRR)
                </h3>
                
                <div className="space-y-4 pt-4 mb-6">
                    {social && (
                        <div className="flex justify-between items-center text-slate-700">
                            <span className="font-semibold">{itemNames[social]}</span>
                            <span className="font-bold">{social === 'social-enterprise' ? 'Contact Sales' : `$${totals.socialVal.toLocaleString()}`}</span>
                        </div>
                    )}
                    {host && (
                        <div className="flex justify-between items-center text-slate-700">
                            <span className="font-semibold">{itemNames[host]}</span>
                            <span className="font-bold">${totals.hostVal.toLocaleString()}</span>
                        </div>
                    )}
                    {seo && (
                         <div className="flex justify-between items-center text-slate-700">
                            <span className="font-semibold">{itemNames[seo]}</span>
                            <span className="font-bold">${totals.seoVal.toLocaleString()}</span>
                        </div>
                    )}
                    {aio && (
                         <div className="flex justify-between items-center text-slate-700">
                            <span className="font-semibold">{itemNames[aio]}</span>
                            <span className="font-bold">${totals.aioVal.toLocaleString()}</span>
                        </div>
                    )}
                    {ads && (
                         <div className="flex flex-col text-slate-700 mb-2">
                            <div className="flex justify-between items-center">
                                <span className="font-semibold">{itemNames[ads]}</span>
                                <span className="font-bold">${totals.adsVal.toLocaleString()}</span>
                            </div>
                            {ads !== 'ads-none' && (
                                <span className="text-xs text-slate-400 mt-1 font-medium italic">
                                    Note: Ad spend budgets are billed directly by Google/Meta and are not included in management fees.
                                </span>
                            )}
                        </div>
                    )}
                </div>

                {totals.discountMonthly > 0 && (
                    <div className="flex justify-between items-center text-[15px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 p-4 rounded-xl mt-4">
                        <span>{totals.label}</span>
                        <span>-${totals.discountMonthly.toLocaleString()}</span>
                    </div>
                )}
                
                {social === 'social-enterprise' && (
                    <div className="flex justify-between items-center text-sm font-bold text-orange-600 bg-orange-50 border border-orange-100 p-4 rounded-xl mt-4">
                        <span>* Custom Pricing Required for Enterprise Social. Contact Sales.</span>
                    </div>
                )}

                <div className="bg-[#1E3A1A] p-6 md:p-8 rounded-2xl border border-slate-200 mt-6 flex flex-col md:flex-row justify-between items-start md:items-center shadow-md">
                    <strong className="text-white text-lg uppercase tracking-wider font-bold mb-2 md:mb-0">Total Monthly Retainer:</strong>
                    <div className="text-3xl font-black text-white">
                        ${totals.netMonthly.toLocaleString()} <span className="text-base font-bold text-white/70 ml-1 uppercase tracking-wider">USD / month</span>
                    </div>
                </div>
            </div>

            <Link href="https://calendly.com/lemonadeideas-consultation/30min?month=2026-03" target="_blank" rel="noopener noreferrer" className="w-full bg-[#fed034] hover:bg-yellow-400 text-[#1E3A1A] font-black text-lg uppercase tracking-widest py-5 rounded-2xl transition-all shadow-lg hover:shadow-xl flex justify-center items-center gap-3">
              Schedule Blueprint Strategy Call <ChevronRight className="w-6 h-6" />
            </Link>
            
            <button
               onClick={() => {setShowResults(false); setCurrentStep(1);}}
               className="w-full text-center mt-6 text-slate-400 hover:text-slate-800 font-bold uppercase tracking-wider text-sm transition"
            >
               Restart Estimator
            </button>
          </div>
          
          <div className="bg-slate-50 border-t border-slate-100 p-6 text-center">
             <span className="text-slate-500 font-bold text-[15px]">Need to build a high-performance website from scratch? </span>
             <Link href="/website/instantquote" className="text-[#1E3A1A] hover:text-[#4caf50] font-black underline underline-offset-4 ml-1 transition-colors">
                 Calculate your Web Build Here
             </Link>
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
                     <p className="font-bold text-slate-800 text-lg uppercase tracking-widest animate-pulse">Calculating Architecture...</p>
                  </div>
               )}
               <div className="w-20 h-20 bg-yellow-500/10 rounded-[2rem] flex items-center justify-center mx-auto mb-8">
                  <FileText className="w-10 h-10 text-yellow-500" />
               </div>
               <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Final Step</h3>
               <p className="text-slate-500 mb-10 leading-relaxed font-medium text-lg">Where should we send your preliminary blueprint? Enter your details below to reveal your itemized quote.</p>

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
                     <span className="relative z-10 flex items-center justify-center gap-2">Draft My Growth Blueprint <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" /></span>
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
        <h2 className="text-3xl md:text-5xl font-black text-[#1E3A1A] uppercase tracking-tight mb-4 text-center md:text-left">Build Your Growth Blueprint</h2>
        <p className="text-slate-500 font-medium text-lg text-center md:text-left">Automate the estimation of your marketing foundation and MRR retainers.</p>
        
        {/* Progress Timeline */}
        <div className="hidden lg:flex items-center justify-between mt-12 relative px-4">
          <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-1 bg-slate-200 -z-10 rounded-full"></div>
          <div className="absolute left-6 top-1/2 -translate-y-1/2 h-1 bg-yellow-500 -z-10 rounded-full transition-all duration-500" style={{ width: `calc((100% - 3rem) * ${(currentStep - 1) / 5})` }}></div>
          
          {steps.map((s) => (
            <div 
              key={s.id} 
              onClick={() => {
                if (currentStep === 1 && !brand && s.id > 1) return;
                setCurrentStep(s.id);
              }}
              className={`flex flex-col items-center gap-3 transition-transform bg-transparent px-3 ${
                (currentStep === 1 && !brand && s.id > 1) ? 'cursor-not-allowed opacity-60' : 'cursor-pointer hover:-translate-y-1'
              }`}
            >
              <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center bg-white transition-all shadow-sm
                ${currentStep === s.id ? 'border-yellow-500 text-yellow-500 scale-110' : 
                  currentStep > s.id ? 'border-[#1E3A1A] bg-[#1E3A1A] text-white' : 'border-slate-200 text-slate-400'}
              `}>
                {currentStep > s.id ? <CheckCircle2 className="w-6 h-6" /> : s.icon}
              </div>
              <span className={`text-[11px] font-bold uppercase tracking-widest whitespace-nowrap mt-2 
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
          
          {/* STEP 1 */}
          {currentStep === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{duration: 0.3}} className="space-y-6">
              <span className="bg-yellow-500/20 text-yellow-600 font-bold tracking-widest uppercase text-[10px] px-3 py-1 rounded-full mb-1 inline-block">ONE-TIME INVESTMENT</span>
              <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-8 border-b pb-4 border-slate-100">1. Brand Architecture & Strategy</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <OptionCard active={brand === 'brand-none'} onClick={() => setBrand('brand-none')} icon={<CheckCircle2 className="w-6 h-6"/>}
                  title="Existing Brand" desc="We already have a solid, modern brand identity and high-res vector assets." />
                <OptionCard active={brand === 'brand-basic'} onClick={() => setBrand('brand-basic')} icon={<Building2 className="w-6 h-6"/>}
                  title="Basic Brand Foundation" desc="Fundamental visual identity and brand foundations (Logo Suite, typography, color palette, and basic guidelines)." />
                <OptionCard active={brand === 'brand-standard'} onClick={() => setBrand('brand-standard')} icon={<Sparkles className="w-6 h-6"/>}
                  title="Standard Corporate Identity" desc="Complete brand with practical applications. Includes Basic + competitor analysis, stationery design, social media graphic templates, and full brand manual." />
                <OptionCard active={brand === 'brand-premium'} onClick={() => setBrand('brand-premium')} icon={<Network className="w-6 h-6"/>}
                  title="Premium Market Dominance" desc="Advanced strategy & multimedia. Includes Standard + High-End Video Production, vehicle fleet wrap design, uniform design, and 3 months of brand consulting." />
              </div>
            </motion.div>
          )}

          {/* STEP 2 */}
          {currentStep === 2 && (
            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{duration: 0.3}} className="space-y-6">
              <span className="bg-[#1E3A1A]/10 text-[#1E3A1A] font-bold tracking-widest uppercase text-[10px] px-3 py-1 rounded-full mb-1 inline-block">MONTHLY MRR</span>
              <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-8 border-b pb-4 border-slate-100">2. Social Media & Jobsite Coverage</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <OptionCard active={social === 'social-none'} onClick={() => setSocial('social-none')} icon={<Server className="w-6 h-6"/>}
                  title="In-House Management" desc="We will handle social media natively." />
                <OptionCard active={social === 'social-starter'} onClick={() => setSocial('social-starter')} icon={<MapPin className="w-6 h-6"/>}
                  title="Project Starter" desc="Essential professional presence. IG, FB & Google My Business, 12 posts/month, monthly portfolio photo updates, and local optimization." />
                <OptionCard active={social === 'social-leader'} onClick={() => setSocial('social-leader')} icon={<Target className="w-6 h-6"/>}
                  title="Market Leader" desc="Dominance and lead capture. Adds LinkedIn, 20 posts/month, jobsite progress videos, testimonials, and talent attraction ad management." />
                <OptionCard active={social === 'social-enterprise'} onClick={() => setSocial('social-enterprise')} icon={<Network className="w-6 h-6"/>}
                  title="Enterprise Ecosystem" desc="Absolute digital dominance. Adds TikTok, YouTube Shorts, daily posts, documentary project coverage, full ad funnel, and real-time dashboard." />
              </div>
            </motion.div>
          )}

          {/* STEP 3 */}
          {currentStep === 3 && (
            <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{duration: 0.3}} className="space-y-6">
              <span className="bg-[#1E3A1A]/10 text-[#1E3A1A] font-bold tracking-widest uppercase text-[10px] px-3 py-1 rounded-full mb-1 inline-block">MONTHLY MRR</span>
              <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-8 border-b pb-4 border-slate-100">3. Hosting, Security & Maintenance</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <OptionCard active={host === 'host-none'} onClick={() => setHost('host-none')} icon={<Server className="w-6 h-6"/>}
                  title="Self-Managed Hosting" desc="We maintain our own scalable servers." />
                <OptionCard active={host === 'host-essentials'} onClick={() => setHost('host-essentials')} icon={<CheckCircle2 className="w-6 h-6"/>}
                  title="Essentials" desc="High-speed Flywheel hosting, proactive security scanning, daily cloud backups, and SSL." />
                <OptionCard active={host === 'host-growth'} onClick={() => setHost('host-growth')} icon={<Sparkles className="w-6 h-6"/>}
                  title="Growth" desc="Includes Essentials + 1 hour priority maintenance, content management hours, ADA compliance monitoring, and lead tracking audit." />
                <OptionCard active={host === 'host-performance'} onClick={() => setHost('host-performance')} icon={<Target className="w-6 h-6"/>}
                  title="Performance" desc="For massive deployments. Dedicated resource isolation, advanced Core Web Vitals technical optimization, and 24/7 premium support." />
              </div>
            </motion.div>
          )}

          {/* STEP 4 */}
          {currentStep === 4 && (
            <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{duration: 0.3}} className="space-y-6">
              <span className="bg-[#1E3A1A]/10 text-[#1E3A1A] font-bold tracking-widest uppercase text-[10px] px-3 py-1 rounded-full mb-1 inline-block">MONTHLY MRR</span>
              <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-8 border-b pb-4 border-slate-100">4. Organic SEO & Territory Expansion</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <OptionCard active={seo === 'seo-none'} onClick={() => setSeo('seo-none')} icon={<CheckCircle2 className="w-6 h-6"/>}
                  title="No Local SEO Required" desc="We do not need organic search focus at this time." />
                <OptionCard active={seo === 'seo-starter'} onClick={() => setSeo('seo-starter')} icon={<MapPin className="w-6 h-6"/>}
                  title="Base SEO Package" desc="Comprehensive content strategy, local link-building, and technical audit to dominate immediate local searches." />
                <OptionCard active={seo === 'seo-scale'} onClick={() => setSeo('seo-scale')} icon={<Target className="w-6 h-6"/>}
                  title="Scale SEO Package" desc="Massive territorial reach. Creation of hyper-local landing pages (multiple CA cities/counties) and aggressive content strategies to displace regional competitors." />
              </div>
            </motion.div>
          )}

          {/* STEP 5 */}
          {currentStep === 5 && (
            <motion.div key="step5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{duration: 0.3}} className="space-y-6">
              <div className="flex gap-2 mb-1">
                 <span className="bg-[#1E3A1A]/10 text-[#1E3A1A] font-bold tracking-widest uppercase text-[10px] px-3 py-1 rounded-full inline-block">MONTHLY MRR</span>
                 <span className="bg-fuchsia-600/10 text-fuchsia-700 font-bold tracking-widest uppercase text-[10px] px-3 py-1 rounded-full inline-block">Rank in ChatGPT, Gemini & Claude</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-8 border-b pb-4 border-slate-100">5. Artificial Intelligence Optimization (AIO)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <OptionCard active={aio === 'aio-none'} onClick={() => setAio('aio-none')} icon={<CheckCircle2 className="w-6 h-6"/>}
                  title="Traditional Search Only" desc="No AI LLM Optimization." />
                <OptionCard active={aio === 'aio-standard'} onClick={() => setAio('aio-standard')} icon={<Sparkles className="w-6 h-6"/>}
                  title="Standard AIO" desc="Brand authority calibration designed exclusively to make you the top 'recommendation' in AI LLM B2B queries." />
                <OptionCard active={aio === 'aio-premium'} onClick={() => setAio('aio-premium')} icon={<Network className="w-6 h-6"/>}
                  title="Premium AIO" desc="Advanced LLM dominance through deep reference architecture, Digital PR, and high-level technical positioning for AI engines." />
              </div>
            </motion.div>
          )}

          {/* STEP 6 */}
          {currentStep === 6 && (
            <motion.div key="step6" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{duration: 0.3}} className="space-y-6">
              <span className="bg-[#1E3A1A]/10 text-[#1E3A1A] font-bold tracking-widest uppercase text-[10px] px-3 py-1 rounded-full mb-1 inline-block">MONTHLY MRR</span>
              <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-8 border-b pb-4 border-slate-100">6. Google Ads Lead Generation</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
                <OptionCard active={ads === 'ads-none'} onClick={() => setAds('ads-none')} icon={<CheckCircle2 className="w-6 h-6"/>}
                  title="No Paid Ads Management" desc="" />
                <OptionCard active={ads === 'ads-starter'} onClick={() => setAds('ads-starter')} icon={<Target className="w-6 h-6"/>}
                  title="Starter (Lead Gen)" desc="Professional budget management. Rigorous conversion tracking, negative keyword filtering, and intent-based search ads. (Management fee only)." />
                <OptionCard active={ads === 'ads-scale'} onClick={() => setAds('ads-scale')} icon={<Network className="w-6 h-6"/>}
                  title="Scale (Market Dominance)" desc="Management of higher budgets with hyper-segmented strategies, retargeting campaigns, visual display, and advanced ROI dashboard. (Management fee only)." />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-10 pt-8 border-t border-slate-100 flex justify-between items-center relative z-10 w-full">
           <div className="w-1/4">
             {currentStep > 1 && (
               <button 
                 onClick={() => setCurrentStep(s => s - 1)}
                 className="text-slate-500 hover:text-[#1E3A1A] font-bold uppercase tracking-widest text-sm transition flex items-center gap-2 group p-2 -ml-2"
               >
                 <ChevronRight className="w-5 h-5 rotate-180 transition-transform group-hover:-translate-x-1" /> Back
               </button>
             )}
           </div>
          
          <button 
            onClick={handleNext}
            disabled={(!brand && currentStep === 1) || (!social && currentStep === 2) || (!host && currentStep === 3) || (!seo && currentStep === 4) || (!aio && currentStep === 5) || (!ads && currentStep === 6)}
            className={`bg-[#1E3A1A] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest flex items-center gap-3 transition-all shadow-[0_8px_20px_rgba(30,58,26,0.15)]
              ${((!brand && currentStep === 1) || (!social && currentStep === 2) || (!host && currentStep === 3) || (!seo && currentStep === 4) || (!aio && currentStep === 5) || (!ads && currentStep === 6)) ? 'opacity-40 cursor-not-allowed' : 'hover:bg-[#2A4F24] hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(30,58,26,0.25)]'}
            `}
          >
            {currentStep === 6 ? 'Review Blueprint' : 'Continue'} <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        
        {/* Persistent Warning Banner / Cross Sell */}
        {!showResults && !showLeadGate && (
          <div className="w-full mt-10 p-4 border border-slate-200 bg-slate-50 rounded-xl text-center">
             <span className="text-slate-600 font-bold text-sm">Need to build a high-performance website from scratch?</span>
             <Link href="/website/instantquote" className="text-[#1E3A1A] hover:text-green-700 font-black underline underline-offset-2 text-sm ml-2">
               Calculate your Web Build Here
             </Link>
          </div>
        )}
      </div>
    </div>
  );
}
