"use client";

import React, { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const COLORS = ['#1E3A1A', '#FED52B', '#2b8833', '#162812'];

export const BASE_SERVICES = [
  { id: 'home_remodeling', nameEn: 'Home Remodeling', nameEs: 'Remodelación de Casa', cpl: 185, cac: 1150 },
  { id: 'kitchen_remodeling', nameEn: 'Kitchen Remodeling', nameEs: 'Remodelación de Cocina', cpl: 225, cac: 1500 },
  { id: 'bathroom_remodeling', nameEn: 'Bathroom Remodeling', nameEs: 'Remodelación de Baño', cpl: 175, cac: 1150 },
  { id: 'new_construction', nameEn: 'New Construction', nameEs: 'Construcción Nueva', cpl: 275, cac: 3000 },
  { id: 'home_additions', nameEn: 'Home Additions', nameEs: 'Adiciones a Casas', cpl: 250, cac: 2250 },
  { id: 'drywall', nameEn: 'Drywall', nameEs: 'Paneles de Yeso (Drywall)', cpl: 52.5, cac: 225 },
  { id: 'flooring', nameEn: 'Flooring', nameEs: 'Pisos / Suelos', cpl: 75, cac: 375 },
  { id: 'roofing', nameEn: 'Roofing', nameEs: 'Techado', cpl: 225, cac: 900 },
  { id: 'electrical_contractors', nameEn: 'Electrical Contractors', nameEs: 'Contratista Eléctrico', cpl: 60, cac: 250 },
  { id: 'plumbing', nameEn: 'Plumbing', nameEs: 'Plomería', cpl: 50, cac: 200 },
  { id: 'hvac', nameEn: 'Air Conditioning and Heating', nameEs: 'Calefacción y Aire Acondicionado', cpl: 100, cac: 450 },
  { id: 'swimming_pool', nameEn: 'Swimming Pool', nameEs: 'Piscinas y Albercas', cpl: 175, cac: 1500 },
  { id: 'water_damage', nameEn: 'Water Damage Restoration', nameEs: 'Restauración por Daños de Agua', cpl: 250, cac: 1050 },
  { id: 'floor_damage', nameEn: 'Floor Damage Restoration', nameEs: 'Restauración de Daños en Pisos', cpl: 150, cac: 600 },
  { id: 'fire_damage', nameEn: 'Fire Damage Restoration', nameEs: 'Restauración por Incendio', cpl: 300, cac: 1400 },
  { id: 'commercial_remodeling', nameEn: 'Commercial Remodeling', nameEs: 'Remodelación Comercial', cpl: 350, cac: 3500 },
  { id: 'general_construction', nameEn: 'General Construction', nameEs: 'Construcción General', cpl: 257.5, cac: 2500 }
];

export const BASE_NETWORKS = [
  { id: 'google', name: 'Google (Search/LSA)', cpm: 3.50, ctr: 4.6, cpl: 235 },
  { id: 'facebook', name: 'Facebook', cpm: 8.50, ctr: 2.0, cpl: 92.50 },
  { id: 'instagram', name: 'Instagram', cpm: 7.00, ctr: 1.5, cpl: 90.00 },
  { id: 'tiktok', name: 'TikTok', cpm: 10.00, ctr: 1.15, cpl: 32.50 }
];

export interface NetworkResult {
  networkId: string;
  name: string;
  budget: number;
  impressions: number;
  clicks: number;
  leads: number;
  clients: number;
}

export interface CalculationResult {
  networks: NetworkResult[];
  totalBudget: number;
  totalImpressions: number;
  totalClicks: number;
  totalLeads: number;
  totalClients: number;
  blendedCpl: number;
  blendedCac: number;
}

export default function MarketingCalculator() {
  const locale = useLocale();
  const isEs = locale === 'es';

  // State: Core Selections
  const [serviceId, setServiceId] = useState('home_remodeling');
  const [selectedNetworks, setSelectedNetworks] = useState<string[]>(['google', 'facebook']);
  
  // State: Mode Toggle
  const [mode, setMode] = useState<'manual' | 'auto'>('manual');
  
  // State: Manual Mode Budgets
  const [manualBudgets, setManualBudgets] = useState<Record<string, number>>({
    google: 1500,
    facebook: 500,
    instagram: 0,
    tiktok: 0,
  });

  // State: Auto Mode Values
  const [totalBudget, setTotalBudget] = useState(3000);
  const [primaryGoal, setPrimaryGoal] = useState<'brand_awareness' | 'lead_gen'>('lead_gen');
  
  // State: Advanced Mode
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [variationMargin, setVariationMargin] = useState<number>(0); // -20 to 20 %

  const toggleNetwork = (netId: string) => {
    setSelectedNetworks(prev => 
      prev.includes(netId) ? prev.filter(id => id !== netId) : [...prev, netId]
    );
  };

  const handleManualBudgetChange = (netId: string, val: string) => {
    const num = parseFloat(val) || 0;
    setManualBudgets(prev => ({ ...prev, [netId]: num }));
  };

  // --- FASE 2: MOTOR DE CÁLCULO ---
  const calculateResults = (): CalculationResult => {
    const service = BASE_SERVICES.find(s => s.id === serviceId) || BASE_SERVICES[0];
    const efficiencyMultiplier = 1 + (variationMargin / 100);

    let activeBudgets: Record<string, number> = {};

    if (mode === 'manual') {
      selectedNetworks.forEach(netId => {
        activeBudgets[netId] = manualBudgets[netId] || 0;
      });
    } else {
      // Auto Optimizer Logic
      let totalScore = 0;
      const scores: Record<string, number> = {};
      
      selectedNetworks.forEach(netId => {
        const net = BASE_NETWORKS.find(n => n.id === netId);
        if (net) {
          if (primaryGoal === 'lead_gen') {
             // Score based on inverse of CPL (Cheaper CPL = Higher budget allocation)
             const effectiveCpl = (net.cpl + service.cpl) / 2;
             scores[netId] = 1 / effectiveCpl;
          } else {
             // Score based on inverse of CPM (Cheaper CPM = Higher budget allocation)
             scores[netId] = 1 / net.cpm;
          }
          totalScore += scores[netId];
        }
      });

      selectedNetworks.forEach(netId => {
        if (totalScore > 0) {
           activeBudgets[netId] = totalBudget * (scores[netId] / totalScore);
        } else {
           activeBudgets[netId] = totalBudget / selectedNetworks.length;
        }
      });
    }

    const networkResults: NetworkResult[] = selectedNetworks.map(netId => {
      const net = BASE_NETWORKS.find(n => n.id === netId);
      const budget = activeBudgets[netId] || 0;
      
      if (!net || budget <= 0) {
        return { networkId: netId, name: net?.name || netId, budget: 0, impressions: 0, clicks: 0, leads: 0, clients: 0 };
      }

      // Engine Projections
      const impressions = (budget / net.cpm) * 1000 * efficiencyMultiplier;
      const clicks = impressions * (net.ctr / 100);
      
      const effectiveCpl = (net.cpl + service.cpl) / 2;
      const leads = (budget / effectiveCpl) * efficiencyMultiplier;
      
      const cacMultiplier = effectiveCpl / service.cpl; 
      const effectiveCac = service.cac * cacMultiplier;
      const clients = (budget / effectiveCac) * efficiencyMultiplier;

      return {
        networkId: netId,
        name: net.name,
        budget,
        impressions: Math.round(impressions),
        clicks: Math.round(clicks),
        leads: Number(leads.toFixed(2)),
        clients: Number(clients.toFixed(2))
      };
    });

    const totalCalculatedBudget = networkResults.reduce((acc, curr) => acc + curr.budget, 0);
    const totalImpressions = networkResults.reduce((acc, curr) => acc + curr.impressions, 0);
    const totalClicks = networkResults.reduce((acc, curr) => acc + curr.clicks, 0);
    const totalLeads = networkResults.reduce((acc, curr) => acc + curr.leads, 0);
    const totalClients = networkResults.reduce((acc, curr) => acc + curr.clients, 0);

    return {
      networks: networkResults,
      totalBudget: totalCalculatedBudget,
      totalImpressions,
      totalClicks,
      totalLeads,
      totalClients,
      blendedCpl: totalLeads > 0 ? totalCalculatedBudget / totalLeads : 0,
      blendedCac: totalClients > 0 ? totalCalculatedBudget / totalClients : 0
    };
  };

  const results = calculateResults();
  // We'll prepare for Phase 3
  const [showResults, setShowResults] = useState(false);
  
  // Phase 3 States
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: '', email: '', phone: '', website: '', message: '' });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('lemonade_global_unlocked') === 'true') {
        setIsUnlocked(true);
      }
    }
  }, []);

  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    if(leadForm.name && leadForm.email) {
      setIsSubmittingLead(true);

      const payload = {
        name: leadForm.name,
        email: leadForm.email,
        phone: leadForm.phone || "",
        website: leadForm.website || "",
        message: leadForm.message || "CAPTURED LEAD: Marketing Calculator Web Diagnosis"
      };

      try {
        await fetch('/api/contact', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify(payload)
        });

        await fetch('/api/mailerlite', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({ 
             email: payload.email, 
             name: payload.name, 
             groupId: '184120526691633061',
             fields: {
                phone: payload.phone,
                company: payload.website,
                quoting_details: "Lead Magnet: Marketing Calculator"
             }
           })
        });
      } catch (err) { } // Fallback quietly

      setIsSubmittingLead(false);
      setIsUnlocked(true);
      if (typeof window !== 'undefined') {
        localStorage.setItem('lemonade_global_unlocked', 'true');
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white border border-gray-200 shadow-2xl rounded-2xl text-gray-900 font-sans">
      
      {/* BRANDING CALLED OUT: Professional navy blue, yellows, whites, dark grays */}
      <h2 className="text-3xl font-black text-[#1E3A1A] mb-2">
        {isEs ? "Calculadora de Presupuesto y Proyecciones" : "Marketing Budget & Projections Calculator"}
      </h2>
      <p className="text-sm font-semibold text-gray-500 mb-8 max-w-2xl">
        {isEs 
          ? "* Estas proyecciones ilustran los resultados potenciales con una estrategia de marketing y publicidad óptima y bien ejecutada en California."
          : "* These projections illustrate the potential results with an optimal and well-executed marketing and advertising strategy in California."}
      </p>

      <div className="space-y-8">
        
        {/* ROW 1: Service Selection */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
          <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">
            {isEs ? "1. Selecciona tu Área de Trabajo" : "1. Select your Trade/Service"}
          </label>
          <select 
            value={serviceId}
            onChange={(e) => setServiceId(e.target.value)}
            className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#FED52B] focus:border-transparent transition-all"
          >
            {BASE_SERVICES.map(s => (
              <option key={s.id} value={s.id}>{isEs ? s.nameEs : s.nameEn}</option>
            ))}
          </select>
        </div>

        {/* ROW 2: Networks Selection */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
          <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">
            {isEs ? "2. Redes Sociales a Utilizar" : "2. Social Media Networks"}
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {BASE_NETWORKS.map(net => {
              const isSelected = selectedNetworks.includes(net.id);
              return (
                <button
                  key={net.id}
                  onClick={() => toggleNetwork(net.id)}
                  className={`p-3 rounded-lg border-2 font-bold text-sm transition-all ${
                    isSelected 
                      ? 'border-[#1E3A1A] bg-[#1E3A1A] text-white shadow-md'
                      : 'border-gray-200 bg-white text-gray-600 hover:border-[#FED52B]'
                  }`}
                >
                  {net.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* ROW 3: Budget Mode Toggle */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-4 md:mb-0">
              {isEs ? "3. Configuración de Inversión" : "3. Investment Configuration"}
            </label>
            <div className="flex bg-gray-200 rounded-lg p-1">
              <button 
                onClick={() => setMode('manual')}
                className={`py-2 px-6 rounded-md font-bold text-xs uppercase tracking-wide transition-all ${mode === 'manual' ? 'bg-white shadow text-[#1E3A1A]' : 'text-gray-500 hover:text-gray-700'}`}
              >
                {isEs ? "Modo Manual" : "Manual Mode"}
              </button>
              <button 
                onClick={() => setMode('auto')}
                className={`flex items-center gap-2 py-2 px-6 rounded-md font-bold text-xs uppercase tracking-wide transition-all ${mode === 'auto' ? 'bg-[#FED52B] shadow text-[#1E3A1A]' : 'text-gray-500 hover:text-gray-700'}`}
              >
                ⚡ {isEs ? "Optimizador" : "Auto-Optimizer"}
              </button>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200">
            {mode === 'manual' ? (
              <div className="space-y-4">
                <p className="text-xs text-gray-500 font-semibold mb-4">
                  {isEs ? "Asigna el presupuesto mensual por cada red seleccionada:" : "Allocate monthly budget for each selected network:"}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {selectedNetworks.map(netId => {
                      const net = BASE_NETWORKS.find(n => n.id === netId);
                      return (
                        <div key={netId} className="flex items-center justify-between bg-white p-3 border border-gray-200 rounded-lg">
                          <span className="font-bold text-sm text-gray-700">{net?.name}</span>
                          <div className="relative w-32">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-bold">$</span>
                            <input 
                              type="number"
                              min="0"
                              value={manualBudgets[netId] || ''}
                              onChange={(e) => handleManualBudgetChange(netId, e.target.value)}
                              className="w-full pl-7 p-2 border border-gray-300 rounded font-bold text-gray-900 focus:outline-none focus:border-[#1E3A1A]"
                            />
                          </div>
                        </div>
                      )
                   })}
                   {selectedNetworks.length === 0 && (
                     <div className="text-sm text-red-500 font-bold col-span-2">
                       {isEs ? "Por favor selecciona al menos una red social." : "Please select at least one social network."}
                     </div>
                   )}
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-2 uppercase">
                    {isEs ? "Inversión Total Mensual ($)" : "Total Monthly Investment ($)"}
                  </label>
                  <input 
                    type="number"
                    min="500"
                    step="100"
                    value={totalBudget}
                    onChange={(e) => setTotalBudget(parseFloat(e.target.value) || 0)}
                    className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg font-bold text-xl text-gray-900 focus:outline-none focus:border-[#FED52B]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-2 uppercase">
                    {isEs ? "Objetivo Principal" : "Primary Goal"}
                  </label>
                  <select 
                    value={primaryGoal}
                    onChange={(e: any) => setPrimaryGoal(e.target.value)}
                    className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg font-bold text-gray-800 focus:outline-none focus:border-[#FED52B]"
                  >
                    <option value="lead_gen">{isEs ? "Generación de Leads (Priorizar conversiones)" : "Lead Gen (Prioritize conversions)"}</option>
                    <option value="brand_awareness">{isEs ? "Reconocimiento de Marca (Priorizar visibilidad)" : "Brand Awareness (Prioritize visibility)"}</option>
                  </select>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ADVANCED MODE (Collapsible) */}
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <button 
            onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
            className="w-full bg-gray-50 p-4 flex justify-between items-center text-sm font-bold text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <span className="uppercase tracking-wide">{isEs ? "⚙️ Configuraciones Avanzadas" : "⚙️ Advanced Settings"}</span>
            <span>{isAdvancedOpen ? '▲' : '▼'}</span>
          </button>
          
          {isAdvancedOpen && (
            <div className="p-6 bg-white space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-2">
                  {isEs ? `Ajuste de Margen de Conversión: ${variationMargin > 0 ? '+' : ''}${variationMargin}%` : `Conversion Margin Adjustment: ${variationMargin > 0 ? '+' : ''}${variationMargin}%`}
                </label>
                <input 
                  type="range"
                  min="-20"
                  max="20"
                  step="1"
                  value={variationMargin}
                  onChange={(e) => setVariationMargin(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#1E3A1A]"
                />
                <p className="text-[11px] text-gray-500 mt-2">
                  {isEs ? "* Puedes simular un escenario +/- 20% más optimista o pesimista respecto al promedio de California." : "* You can simulate a +/- 20% optimistic or pessimistic scenario compared to the California average."}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* CÁLCULO BUTTON FOR PHASE 3 */}
        {!showResults && (
          <div className="pt-6">
            <button 
              onClick={() => setShowResults(true)}
              className="w-full bg-[#1E3A1A] hover:bg-[#FED52B] hover:text-[#1E3A1A] text-white font-black py-4 px-6 rounded-xl transition-all duration-300 text-lg shadow-lg uppercase tracking-wide"
            >
              {isEs ? "Calcular Proyección" : "Calculate Projection"}
            </button>
          </div>
        )}

      </div>

      {/* PHASE 3: VISUALIZATION & LEAD GATE */}
      {showResults && (
        <div className="mt-16 border-t-2 border-gray-100 pt-16 relative" id="results-section">
          
          <div className={`transition-all duration-1000 ${!isUnlocked ? 'filter blur-xl select-none pointer-events-none opacity-30 mx-2' : 'opacity-100'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              
              {/* FUNNEL COLUMN */}
              <div>
                <h3 className="text-2xl font-black text-[#1E3A1A] mb-8 uppercase text-center">
                  {isEs ? "Proyección del Embudo" : "Funnel Projection"}
                </h3>
                <div className="relative w-full max-w-sm mx-auto">
                  
                  {/* Custom SVG Funnel built directly to avoid external visual deps */}
                  <svg viewBox="0 0 400 400" className="w-full drop-shadow-xl overflow-visible">
                     <defs>
                       <linearGradient id="funnel-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                         <stop offset="0%" stopColor="#FED52B" />
                         <stop offset="50%" stopColor="#40c34b" />
                         <stop offset="100%" stopColor="#1E3A1A" />
                       </linearGradient>
                       <clipPath id="funnel-clip">
                         <path d="M20,20 L380,20 L280,280 L280,380 L120,380 L120,280 Z" />
                       </clipPath>
                     </defs>
                     <path d="M20,20 L380,20 L280,280 L280,380 L120,380 L120,280 Z" fill="#f3f4f6" stroke="#e5e7eb" strokeWidth="4" />
                     <g clipPath="url(#funnel-clip)">
                        <motion.rect 
                          initial={{ y: -400 }} 
                          animate={isUnlocked ? { y: 0 } : { y: -400 }} 
                          transition={{ duration: 1.8, ease: "easeOut", delay: 0.3 }}
                          x="0" y="0" width="400" height="400" fill="url(#funnel-gradient)" 
                        />
                     </g>
                  </svg>

                  {/* Overlaid Data (appears when unlocked) */}
                  <div className={`absolute inset-0 flex flex-col pt-6 px-8 text-center pointer-events-none transition-opacity duration-1000 ${isUnlocked ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="mt-2">
                      <p className="text-sm font-bold opacity-80 drop-shadow-sm">{isEs ? "Impresiones" : "Impressions"}</p>
                      <p className="text-2xl font-black text-gray-900 drop-shadow-sm">{results.totalImpressions.toLocaleString()}</p>
                    </div>
                    <div className="mt-8">
                      <p className="text-sm font-bold opacity-80 drop-shadow-sm">{isEs ? "Clics al Sitio Web" : "Website Clicks"}</p>
                      <p className="text-2xl font-black text-gray-900 drop-shadow-sm">{results.totalClicks.toLocaleString()}</p>
                    </div>
                    <div className="mt-16">
                      <p className="text-sm font-bold text-white drop-shadow-md">{isEs ? "Leads Generados" : "Leads Generated"}</p>
                      <p className="text-2xl font-black text-white drop-shadow-md">{Math.floor(results.totalLeads).toLocaleString()}</p>
                    </div>
                    <div className="mt-5">
                      <p className="text-[11px] font-bold text-white uppercase tracking-wider drop-shadow-md">{isEs ? "Nuevos Clientes" : "New Clients"}</p>
                      <p className="text-xl font-black text-white drop-shadow-md">{Math.floor(results.totalClients).toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CHARTS & METRICS COLUMN */}
              <div>
                <h3 className="text-2xl font-black text-[#1E3A1A] mb-8 uppercase text-center">
                  {isEs ? "Distribución & Costos" : "Distribution & Costs"}
                </h3>
                
                <div className="h-[250px] w-full mb-8">
                  {typeof window !== 'undefined' && (
                    <ResponsiveContainer width="100%" height="100%">
                       <PieChart>
                         <Pie 
                           data={results.networks} 
                           dataKey="budget" 
                           nameKey="name" 
                           cx="50%" 
                           cy="50%" 
                           innerRadius={60}
                           outerRadius={90}
                           paddingAngle={5}
                           isAnimationActive={isUnlocked}
                         >
                           {results.networks.map((entry, index) => (
                             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                           ))}
                         </Pie>
                         <Tooltip formatter={(value: any) => `$${Number(value || 0).toLocaleString()}`} />
                         <Legend />
                       </PieChart>
                    </ResponsiveContainer>
                  )}
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl text-center shadow-sm">
                    <p className="text-xs font-bold text-gray-500 uppercase">{isEs ? "Inversión Tráfico" : "Traffic Budget"}</p>
                    <p className="text-2xl font-black text-[#1E3A1A]">${results.totalBudget.toLocaleString()}</p>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl text-center shadow-sm">
                    <p className="text-[10px] font-bold text-gray-400 uppercase leading-tight mb-1">{isEs ? "Ingresos Est. (Asume $10k/proyecto)" : "Est. Revenue (Assumes $10k/project)"}</p>
                    <p className="text-2xl font-black text-[#2b8833]">${(Math.floor(results.totalClients) * 10000).toLocaleString()}</p>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl text-center shadow-sm">
                    <p className="text-xs font-bold text-gray-500 uppercase">{isEs ? "Costo por Lead Promedio" : "Blended Cost per Lead"}</p>
                    <p className="text-2xl font-black text-[#1E3A1A]">${results.blendedCpl.toFixed(2)}</p>
                  </div>
                  <div className="bg-[#1E3A1A] text-white p-4 rounded-xl text-center shadow-md">
                    <p className="text-[11px] font-bold opacity-80 uppercase leading-tight mb-1 mt-1">{isEs ? "Costo por Adquisición" : "Customer Acquisition Cost"}</p>
                    <p className="text-3xl font-black text-[#FED52B]">${results.blendedCac.toFixed(2)}</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* THE LEAD GATE MODAL */}
          {!isUnlocked && (
            <div className="absolute inset-0 flex items-start justify-center z-20 pt-16">
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl border border-gray-100 max-w-lg w-full relative">
                 <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#FED52B] text-[#1E3A1A] font-black py-2 md:py-3 px-6 md:px-8 rounded-full shadow-lg text-sm md:text-base uppercase tracking-wider text-center w-max">
                   {isEs ? "Desbloquea tus Resultados" : "Unlock Your Results"}
                 </div>
                 
                 <h4 className="text-xl md:text-2xl font-black text-center text-[#1E3A1A] mt-6 mb-2">
                   {isEs ? "¡Tus proyecciones financieras están listas!" : "Your financial projections are ready!"}
                 </h4>
                 <p className="text-sm font-semibold text-gray-500 text-center mb-6">
                   {isEs ? "Ingresa tus datos para ver el análisis detallado del embudo y los costos exactos." : "Enter your details to reveal the detailed funnel analysis and exact costs."}
                 </p>

                 <form onSubmit={handleUnlock} className="space-y-4">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <input required type="text" placeholder={isEs ? "Nombre Completo *" : "Full Name *"} className="w-full p-4 bg-gray-50 border border-gray-200 font-bold rounded focus:border-[#1E3A1A] focus:outline-none focus:ring-1 focus:ring-[#1E3A1A] transition-all" value={leadForm.name} onChange={e => setLeadForm({...leadForm, name: e.target.value})} />
                     <input required type="email" placeholder={isEs ? "Correo Electrónico *" : "Email Address *"} className="w-full p-4 bg-gray-50 border border-gray-200 font-bold rounded focus:border-[#1E3A1A] focus:outline-none focus:ring-1 focus:ring-[#1E3A1A] transition-all" value={leadForm.email} onChange={e => setLeadForm({...leadForm, email: e.target.value})} />
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <input type="tel" placeholder={isEs ? "Teléfono (opcional)" : "Phone (optional)"} className="w-full p-4 bg-gray-50 border border-gray-200 font-bold rounded focus:border-[#1E3A1A] focus:outline-none focus:ring-1 focus:ring-[#1E3A1A] transition-all" value={leadForm.phone} onChange={e => setLeadForm({...leadForm, phone: e.target.value})} />
                     <input type="text" placeholder={isEs ? "Sitio Web (opcional)" : "Website (optional)"} className="w-full p-4 bg-gray-50 border border-gray-200 font-bold rounded focus:border-[#1E3A1A] focus:outline-none focus:ring-1 focus:ring-[#1E3A1A] transition-all" value={leadForm.website} onChange={e => setLeadForm({...leadForm, website: e.target.value})} />
                   </div>
                   <textarea rows={2} placeholder={isEs ? "Mensaje o pregunta rápida (opcional)" : "Quick message or question (optional)"} className="w-full p-4 bg-gray-50 border border-gray-200 font-bold rounded focus:border-[#1E3A1A] focus:outline-none focus:ring-1 focus:ring-[#1E3A1A] transition-all resize-none" value={leadForm.message} onChange={e => setLeadForm({...leadForm, message: e.target.value})} />
                   
                   <button disabled={isSubmittingLead} type="submit" className="w-full font-black uppercase tracking-widest bg-[#1E3A1A] hover:bg-black text-white py-4 rounded-lg shadow-md transition-all mt-6 text-lg hover:-translate-y-1 disabled:opacity-50">
                     {isSubmittingLead ? "..." : (isEs ? "Mostrar Proyecciones" : "Show Projections")}
                   </button>
                 </form>
                 <p className="text-[11px] font-semibold text-gray-400 text-center mt-6">
                   {isEs ? "Tus datos están seguros. Respetamos tu privacidad al 100%." : "Your info is safe. We respect your privacy 100%."}
                 </p>
              </div>
            </div>
          )}
        </div>
      )}

    </div>
  );
}
