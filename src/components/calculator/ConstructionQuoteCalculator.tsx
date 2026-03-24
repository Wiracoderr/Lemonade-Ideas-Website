"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { HardHat, Building2, Wrench, ShieldCheck, FileText, Camera, Pencil, CheckCircle2, ChevronRight, PlaySquare, CalendarDays, UploadCloud } from 'lucide-react';


// Options Data
const steps = [
  { id: 1, title: 'Company Scale', icon: <Building2 className="w-5 h-5" /> },
  { id: 2, title: 'Conversion Tools', icon: <Wrench className="w-5 h-5" /> },
  { id: 3, title: 'Functionalities', icon: <HardHat className="w-5 h-5" /> },
  { id: 4, title: 'Brand & Authority', icon: <ShieldCheck className="w-5 h-5" /> }
];

export default function ConstructionQuoteCalculator() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isEnterprise, setIsEnterprise] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // State
  const [scale, setScale] = useState<string>('');
  const [tool, setTool] = useState<string>('tool-none');
  const [features, setFeatures] = useState<string[]>([]);
  const [creatives, setCreatives] = useState<string[]>([]);


  // Prices 
  const scalePrices: Record<string, number> = {
    'essential': 2500,
    'standard': 4500,
    'growth': 7500,
    'enterprise': 0
  };

  const toolPrices: Record<string, number> = {
    'tool-none': 0,
    'tool-estimate': 1500,
    'tool-portal': 3500
  };

  const featurePrices: Record<string, number> = {
    'feat-portfolio': 1200,
    'feat-bidding': 2000,
    'feat-careers': 900
  };

  const creativePrices: Record<string, number> = {
    'creative-branding': 1500,
    'creative-media': 800,
    'creative-copy-std': 1500,
    'creative-copy-adv': 3000
  };

  // Handlers
  const handleScaleSelect = (id: string) => {
    setScale(id);
    if (id === 'enterprise') {
      setIsEnterprise(true);
    } else {
      setIsEnterprise(false);
    }
  };

  const handleToolSelect = (id: string) => {
    setTool(id);
  };

  const toggleFeature = (id: string) => {
    setFeatures(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const toggleCreative = (id: string) => {
    setCreatives(prev => {
      let next = [...prev];
      if (next.includes(id)) {
        return next.filter(c => c !== id);
      }
      
      // Mutually exclusive logic for copy
      if (id === 'creative-copy-std') {
        next = next.filter(c => c !== 'creative-copy-adv');
      }
      if (id === 'creative-copy-adv') {
        next = next.filter(c => c !== 'creative-copy-std');
      }
      
      next.push(id);
      return next;
    });
  };

  const calculateTotals = () => {
    const base = scalePrices[scale] || 0;
    const tools = toolPrices[tool] || 0;
    const addons = features.reduce((acc, f) => acc + (featurePrices[f] || 0), 0);
    const creativeCost = creatives.reduce((acc, c) => acc + (creativePrices[c] || 0), 0);

    const subtotal = base + tools + addons + creativeCost;
    
    let discount = 0;
    let label = '';

    // Rule A: The California Master Builder Bundle (15% Off Total)
    const hasMainSite = scale === 'standard' || scale === 'growth';
    const hasAdvTool = tool === 'tool-estimate' || tool === 'tool-portal';
    const hasPortfolio = features.includes('feat-portfolio');
    const hasCopy = creatives.includes('creative-copy-std') || creatives.includes('creative-copy-adv');

    const ruleA = hasMainSite && hasAdvTool && hasPortfolio && hasCopy;

    // Rule B: Brand & Showcase Synergy ($500 Flat)
    const hasBranding = creatives.includes('creative-branding');
    const hasDrone = creatives.includes('creative-media');
    
    const ruleB = hasBranding && hasDrone;

    if (ruleA) {
      discount = subtotal * 0.15;
      label = '🏗️ Master Builder Bundle (-15%)';
    } else if (ruleB) {
      discount = 500;
      label = '🏗️ Brand & Showcase Synergy (-$500)';
    }

    const net = subtotal - discount;
    
    // Round to nearest 50
    const round50 = (val: number) => Math.round(val / 50) * 50;
    
    const minRange = round50(net);
    const maxRange = round50(net * 1.20);

    return {
      base, tools, addons, creativeCost, subtotal, discount, label, minRange, maxRange, net
    };
  };

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(s => s + 1);
    else setShowResults(true);
  };


  // UI Components
  const OptionCard = ({ 
    active, onClick, title, desc, icon 
  }: { 
    active: boolean, onClick: () => void, title: string, desc: string, icon: React.ReactNode 
  }) => (
    <div 
      onClick={onClick}
      className={`relative p-5 md:p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 flex items-start gap-4
        ${active ? 'border-yellow-500 bg-yellow-500/5 shadow-[0_0_15px_rgba(234,179,8,0.15)]' : 'border-slate-200 hover:border-slate-300 bg-white'}`}
    >
      <div className={`p-3 rounded-lg ${active ? 'bg-yellow-500 text-white' : 'bg-slate-100 text-slate-600'}`}>
        {icon}
      </div>
      <div>
        <h4 className={`text-lg font-bold mb-1 ${active ? 'text-slate-900' : 'text-slate-700'}`}>{title}</h4>
        <p className="text-sm text-slate-500 leading-relaxed font-medium">{desc}</p>
      </div>
      {active && (
        <div className="absolute top-4 right-4">
          <CheckCircle2 className="w-6 h-6 text-yellow-500" />
        </div>
      )}
    </div>
  );

  const CheckboxCard = ({ 
    checked, onChange, disabled, title, desc, icon 
  }: { 
    checked: boolean, onChange: () => void, disabled?: boolean, title: string, desc: string, icon: React.ReactNode 
  }) => (
    <div 
      onClick={() => !disabled && onChange()}
      className={`relative p-5 md:p-6 rounded-xl border-2 transition-all duration-300 flex items-start gap-4
        ${disabled ? 'opacity-50 cursor-not-allowed border-slate-100 bg-slate-50' : 'cursor-pointer'}
        ${checked ? 'border-[#1E3A1A] bg-[#1E3A1A]/5 shadow-md' : (!disabled && 'border-slate-200 hover:border-slate-300 bg-white')}`}
    >
      <div className={`p-3 rounded-lg flex-shrink-0 ${checked ? 'bg-[#1E3A1A] text-white' : 'bg-slate-100 text-slate-600'}`}>
        {icon}
      </div>
      <div className="pr-8">
        <h4 className={`text-lg font-bold mb-1 ${checked ? 'text-slate-900' : 'text-slate-700'}`}>{title}</h4>
        <p className="text-sm text-slate-500 leading-relaxed font-medium">{desc}</p>
      </div>
      <div className={`absolute top-1/2 -translate-y-1/2 right-4 w-6 h-6 rounded border-2 flex items-center justify-center
        ${checked ? 'border-[#1E3A1A] bg-[#1E3A1A]' : 'border-slate-300'}
      `}>
        {checked && <CheckCircle2 className="w-4 h-4 text-white" />}
      </div>
    </div>
  );

  if (showResults) {
    const totals = calculateTotals();
    
    const itemNames: Record<string, string> = {
      'essential': 'Essential Trade / Subcontractor Profile',
      'standard': 'Standard General Contractor Site',
      'growth': 'Luxury Custom Builder / Commercial Firm',
      'enterprise': 'Enterprise Scale',
      'tool-none': 'Standard Contact & Quote Forms Only',
      'tool-estimate': 'Interactive Project Estimator & CRM Sync',
      'tool-portal': 'Secure Client / Investor Portal',
      'feat-portfolio': 'Dynamic Project Portfolio',
      'feat-bidding': 'Private Plan Room / Bidding Portal',
      'feat-careers': 'Recruitment & Careers Hub',
      'creative-branding': 'Construction Brand Identity',
      'creative-media': 'Drone & Jobsite Media Integration',
      'creative-copy-std': 'Construction Local SEO Copywriting',
      'creative-copy-adv': 'Advanced Local SEO Copywriting'
    };

    return (
      <div className="min-h-[80vh] flex items-center justify-center p-4 bg-slate-50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100"
        >
          <div className="bg-[#1E3A1A] text-white p-8 md:p-12 text-center relative overflow-hidden">
            {/* Background texture pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat z-0"></div>
            <div className="relative z-10">
              <Image src="/logos/SVG/Logo-2.svg" alt="Lemonade Ideas Logo" width={200} height={50} className="mx-auto mb-8 drop-shadow-md pb-2" style={{ filter: 'brightness(0) invert(1)' }} />
              <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm mb-3 block">Your Blueprint is Ready</span>
              <h2 className="text-3xl md:text-5xl font-black mb-2 opacity-90">Estimated Investment</h2>
              <div className="text-4xl md:text-6xl font-black text-yellow-500 mt-4 tracking-tighter">
                ${totals.minRange.toLocaleString()} <span className="text-2xl md:text-4xl text-white/50 font-medium mx-2">-</span> ${totals.maxRange.toLocaleString()} <span className="text-xl md:text-2xl text-white/50">USD</span>
              </div>
            </div>
          </div>
          
          <div className="p-8 md:p-12">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6 border-b pb-2">Itemized Project Architecture</h3>
            
            <div className="space-y-4 mb-8">
              {/* Scale */}
              {scale && (
                <div className="flex justify-between items-start text-slate-700">
                  <div className="flex flex-col pr-4">
                    <span className="font-bold text-lg">Digital Foundation</span>
                    <span className="text-sm text-slate-500">{itemNames[scale]}</span>
                  </div>
                  <span className="font-bold text-lg whitespace-nowrap">${scalePrices[scale]?.toLocaleString()}</span>
                </div>
              )}
              
              {/* Tool */}
              {tool && toolPrices[tool] > 0 && (
                <div className="flex justify-between items-start text-slate-700 pt-3 border-t border-slate-100">
                  <div className="flex flex-col pr-4">
                    <span className="font-bold text-lg">Conversion Engine</span>
                    <span className="text-sm text-slate-500">{itemNames[tool]}</span>
                  </div>
                  <span className="font-bold text-lg whitespace-nowrap">${toolPrices[tool]?.toLocaleString()}</span>
                </div>
              )}

              {/* Features */}
              {features.length > 0 && (
                <div className="pt-3 border-t border-slate-100">
                  <span className="font-bold text-lg text-slate-700 block mb-2">Construction Modules</span>
                  {features.map(f => (
                    <div key={f} className="flex justify-between items-start text-slate-600 mb-2 pl-4 border-l-2 border-slate-200">
                      <span className="text-sm pr-4">{itemNames[f]}</span>
                      <span className="font-medium whitespace-nowrap">${featurePrices[f]?.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Creatives */}
              {creatives.length > 0 && (
                <div className="pt-3 border-t border-slate-100">
                  <span className="font-bold text-lg text-slate-700 block mb-2">Brand Authority & Media</span>
                  {creatives.map(c => (
                    <div key={c} className="flex justify-between items-start text-slate-600 mb-2 pl-4 border-l-2 border-slate-200">
                      <span className="text-sm pr-4">{itemNames[c]}</span>
                      <span className="font-medium whitespace-nowrap">${creativePrices[c]?.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="border-t-2 border-slate-800 pt-4 mt-6">
                <div className="flex justify-between items-center text-xl font-black text-slate-900">
                  <span>Subtotal</span>
                  <span>${totals.subtotal.toLocaleString()}</span>
                </div>
              </div>

              {totals.discount > 0 && (
                <div className="flex justify-between items-center text-lg font-bold text-green-600 bg-green-50 p-4 rounded-lg mt-3 border border-green-100">
                  <span>{totals.label}</span>
                  <span>-${totals.discount.toLocaleString()}</span>
                </div>
              )}
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-8 italic text-slate-600 text-sm leading-relaxed">
              <strong className="text-slate-800 not-italic block mb-2">Note:</strong>
              High-performance construction websites require ongoing security, fast hosting for heavy drone media, and routine maintenance to rank locally in California. Our managed Site-Plan hosting starts at $149/month. A final binding proposal will be provided after our blueprint discovery call.
            </div>

            <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-black text-lg uppercase tracking-widest py-5 rounded-xl transition-all shadow-lg hover:shadow-xl flex justify-center items-center gap-2">
              Schedule Blueprint Discovery Call <ChevronRight className="w-6 h-6" />
            </button>
            <button
               onClick={() => setShowResults(false)}
               className="w-full mt-4 text-slate-500 hover:text-slate-800 font-bold uppercase tracking-wider text-sm transition"
            >
              Edit Quote
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8 font-sans">
      {/* Header & Progress */}
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-black text-[#1E3A1A] uppercase tracking-tight mb-2">Build Your Blueprint</h2>
        <p className="text-slate-500 font-medium">Select your requirements to instantly generate an estimated quote.</p>
        
        <div className="flex items-center justify-between mt-8 relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-200 -z-10 rounded-full"></div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-yellow-500 -z-10 rounded-full transition-all duration-500" style={{ width: `${((currentStep - 1) / 3) * 100}%` }}></div>
          
          {steps.map((s) => (
            <div 
              key={s.id} 
              onClick={() => {
                if (currentStep === 1 && !scale && s.id > 1) return;
                setCurrentStep(s.id);
              }}
              className={`flex flex-col items-center gap-2 transition-transform hover:scale-105 ${
                (currentStep === 1 && !scale && s.id > 1) ? 'cursor-not-allowed opacity-80' : 'cursor-pointer'
              }`}
            >
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full border-[3px] flex items-center justify-center bg-white transition-all
                ${currentStep === s.id ? 'border-yellow-500 text-yellow-500 shadow-md' : 
                  currentStep > s.id ? 'border-yellow-500 bg-yellow-500 text-white' : 'border-slate-200 text-slate-400'}
              `}>
                {currentStep > s.id ? <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" /> : s.icon}
              </div>
              <span className={`text-xs font-bold uppercase hidden md:block ${currentStep >= s.id ? 'text-slate-800' : 'text-slate-400'}`}>{s.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      {isEnterprise ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
          className="bg-[#1E3A1A] text-white p-10 md:p-16 rounded-3xl shadow-2xl text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat z-0"></div>
          <Building2 className="w-20 h-20 mx-auto mb-6 text-yellow-500 relative z-10" />
          <h3 className="text-3xl md:text-4xl font-black mb-4 uppercase relative z-10">Enterprise Custom Build</h3>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed font-medium relative z-10">
            A project of this scale requires custom ERP architecture, API integrations, and specialized database structuring. Please schedule a technical discovery call with our Director to map out your exact needs.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-black px-10 py-4 rounded-xl text-lg uppercase tracking-widest transition shadow-lg relative z-10">
            Book a Technical Call
          </button>
          
          <button onClick={() => {setIsEnterprise(false); setScale('');}} className="block mx-auto mt-8 text-white/50 hover:text-white underline text-sm font-medium relative z-10 transition">
            Go back and select a different scale
          </button>
        </motion.div>
      ) : (
        <div className="bg-slate-50/50 rounded-3xl p-6 md:p-10 border border-slate-200 shadow-sm relative">
          
          <AnimatePresence mode="wait">
            {/* STEP 1 */}
            {currentStep === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                <h3 className="text-2xl font-black text-slate-800 mb-6">1. Company Scale & Digital Foundation</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <OptionCard 
                    active={scale === 'essential'} onClick={() => handleScaleSelect('essential')} icon={<Wrench />}
                    title="Essential Trade / Subcontractor Profile" 
                    desc="1-3 sections. Ideal for Roofing, Plumbing, HVAC validation." 
                  />
                  <OptionCard 
                    active={scale === 'standard'} onClick={() => handleScaleSelect('standard')} icon={<Building2 />}
                    title="Standard General Contractor Site" 
                    desc="Up to 10 pages: Core Services, Trust Badges, Team intro." 
                  />
                  <OptionCard 
                    active={scale === 'growth'} onClick={() => handleScaleSelect('growth')} icon={<HardHat />}
                    title="Luxury Custom Builder / Commercial Firm" 
                    desc="Up to 25 pages, Deep Local CA SEO architecture." 
                  />
                  <OptionCard 
                    active={scale === 'enterprise'} onClick={() => handleScaleSelect('enterprise')} icon={<ShieldCheck />}
                    title="Enterprise Scale" 
                    desc="Custom API Integrations with Procore/BuilderTrend." 
                  />
                </div>
              </motion.div>
            )}

            {/* STEP 2 */}
            {currentStep === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                <h3 className="text-2xl font-black text-slate-800 mb-6">2. Conversion Engine & Client Tools</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <OptionCard 
                    active={tool === 'tool-none'} onClick={() => handleToolSelect('tool-none')} icon={<FileText />}
                    title="Standard Contact & Quote Forms Only" 
                    desc="Basic lead capture structure." 
                  />
                  <OptionCard 
                    active={tool === 'tool-estimate'} onClick={() => handleToolSelect('tool-estimate')} icon={<CalendarDays />}
                    title="Interactive Project Estimator & CRM Sync" 
                    desc="Dynamic multi-step quoting form to pre-qualify leads by budget and zip code." 
                  />
                  <OptionCard 
                    active={tool === 'tool-portal'} onClick={() => handleToolSelect('tool-portal')} icon={<ShieldCheck />}
                    title="Secure Client / Investor Portal" 
                    desc="Private login for homeowners to track daily logs, drone updates, and approve change orders." 
                  />
                </div>
              </motion.div>
            )}

            {/* STEP 3 */}
            {currentStep === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                <h3 className="text-2xl font-black text-slate-800 mb-2">3. Industry-Specific Functionalities</h3>
                <p className="text-slate-500 text-sm font-medium mb-6">Select all that apply to your operational needs.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <CheckboxCard 
                    checked={features.includes('feat-portfolio')} onChange={() => toggleFeature('feat-portfolio')} icon={<PlaySquare />}
                    title="Dynamic Project Portfolio" 
                    desc="Filterable galleries by Residential/Commercial, with interactive Before & After sliders." 
                  />
                  <CheckboxCard 
                    checked={features.includes('feat-bidding')} onChange={() => toggleFeature('feat-bidding')} icon={<UploadCloud />}
                    title="Private Plan Room / Bidding Portal" 
                    desc="Secure area for subcontractors to download blueprints & submit bids." 
                  />
                  <CheckboxCard 
                    checked={features.includes('feat-careers')} onChange={() => toggleFeature('feat-careers')} icon={<Building2 />}
                    title="Recruitment & Careers Hub" 
                    desc="Streamline subcontractor hiring and solve labor shortages." 
                  />
                </div>
              </motion.div>
            )}

            {/* STEP 4 */}
            {currentStep === 4 && (
              <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                <h3 className="text-2xl font-black text-slate-800 mb-2">4. Branding, Content & Authority</h3>
                <p className="text-slate-500 text-sm font-medium mb-6">Define how you want your brand presented to developers and homeowners.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <CheckboxCard 
                    checked={creatives.includes('creative-branding')} onChange={() => toggleCreative('creative-branding')} icon={<Pencil />}
                    title="Construction Brand Identity" 
                    desc="Premium Logo design, Truck Wrap mockups, Hardhat decals, Brand Guidelines." 
                  />
                  <CheckboxCard 
                    checked={creatives.includes('creative-media')} onChange={() => toggleCreative('creative-media')} icon={<Camera />}
                    title="Drone & Jobsite Media Integration" 
                    desc="We edit and optimize your raw drone/site footage for high-speed web headers." 
                  />
                  <CheckboxCard 
                    checked={creatives.includes('creative-copy-std')} 
                    onChange={() => toggleCreative('creative-copy-std')} 
                    icon={<FileText />}
                    title="Construction Local SEO Copywriting" 
                    desc="Persuasive, technical copy for up to 10 pages." 
                  />
                  <CheckboxCard 
                    checked={creatives.includes('creative-copy-adv')} 
                    onChange={() => toggleCreative('creative-copy-adv')} 
                    icon={<FileText />}
                    title="Advanced Local SEO Copywriting" 
                    desc="Up to 25 pages, targeting specific California territories and services." 
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-10 pt-6 border-t border-slate-200 flex justify-between items-center">
            {currentStep > 1 ? (
              <button 
                onClick={() => setCurrentStep(s => s - 1)}
                className="text-slate-500 hover:text-slate-800 font-bold uppercase tracking-wider text-sm transition"
              >
                Back
              </button>
            ) : <div></div>}
            
            <button 
              onClick={handleNext}
              disabled={!scale && currentStep === 1}
              className={`bg-[#1E3A1A] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest flex items-center gap-2 transition shadow-md
                ${(!scale && currentStep === 1) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#2A4F24] hover:shadow-lg'}
              `}
            >
              {currentStep === 4 ? 'Calculate Quote' : 'Continue'} <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}



    </div>
  );
}
