"use client";

import React, { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';

const LOADING_STEPS = [
  "Iniciando escáner avanzado del servidor...",
  "Extrayendo métricas Core Web Vitals...",
  "Evaluando SEO, Accesibilidad y Buenas Prácticas...",
  "Nuestros servidores responderán pronto..."
];

const LOADING_STEPS_EN = [
  "Initializing advanced server scanner...",
  "Extracting Core Web Vitals metrics...",
  "Evaluating SEO, Accessibility, and Best Practices...",
  "Our servers will respond soon..."
];

const SpeedGauge = ({ score, mode }: { score: number, mode: string }) => {
  const radius = 60;
  const stroke = 12;
  const cx = 100;
  const cy = 90;
  const arcLen = Math.PI * radius; 
  const progress = (score / 100) * arcLen;
  const offset = arcLen - progress;
  
  let color = "text-red-500";
  if (score >= 90) color = "text-green-500";
  else if (score >= 50) color = "text-[#FED52B]";

  return (
    <div className="relative w-full h-36 flex flex-col items-center overflow-visible">
      <svg viewBox="0 0 200 110" className="w-full drop-shadow-sm overflow-visible">
         <path d={`M ${cx - radius} ${cy} A ${radius} ${radius} 0 0 1 ${cx + radius} ${cy}`} fill="none" stroke="#f3f4f6" strokeWidth={stroke} strokeLinecap="round" />
         
         <motion.path 
           d={`M ${cx - radius} ${cy} A ${radius} ${radius} 0 0 1 ${cx + radius} ${cy}`} 
           fill="none" 
           stroke="currentColor" 
           strokeWidth={stroke} 
           strokeLinecap="round" 
           strokeDasharray={arcLen}
           initial={{ strokeDashoffset: arcLen }}
           animate={{ strokeDashoffset: offset }}
           transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
           className={color}
         />
      </svg>
      <div className="absolute top-[35%] flex flex-col items-center">
        <span className="text-3xl font-black text-[#1E3A1A] leading-none">{score}</span>
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1 text-center leading-tight">{mode}</span>
      </div>
    </div>
  );
};

export default function SeoReportTool() {
  const locale = useLocale();
  const isEs = locale === 'es';
  const steps = isEs ? LOADING_STEPS : LOADING_STEPS_EN;

  const [url, setUrl] = useState('');
  
  const [isLoading, setIsLoading] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [apiData, setApiData] = useState<any>(null);

  const [isUnlocked, setIsUnlocked] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: '', email: '', phone: '', website: '', message: '' });

  // Toggle for Desktop/Mobile viewer
  const [activeTab, setActiveTab] = useState<'mobile' | 'desktop'>('mobile');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('lemonade_global_unlocked') === 'true') {
        setIsUnlocked(true);
      }
    }
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isLoading) {
      interval = setInterval(() => {
        setCurrentStepIndex(prev => {
          if (prev < steps.length - 1) return prev + 1;
          return prev;
        });
      }, 3000);
    } else {
      setCurrentStepIndex(0);
    }
    return () => clearInterval(interval);
  }, [isLoading, steps.length]);

  const handleScan = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    let cleanUrl = url.trim();
    if (!/^https?:\/\//i.test(cleanUrl)) {
      cleanUrl = 'https://' + cleanUrl;
      setUrl(cleanUrl);
    }

    setIsLoading(true);
    setApiData(null);

    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: cleanUrl })
      });

      const json = await response.json();
      
      setIsLoading(false);
      if (json.success) {
        setApiData(json.data); 
      } else {
        alert(isEs ? "Error: " + json.error : "Error: " + json.error);
      }

    } catch (err) {
      console.error(err);
      setIsLoading(false);
      alert(isEs ? "Error Crítico de Red." : "Critical Network Error.");
    }
  };

  const [isSubmittingLead, setIsSubmittingLead] = useState(false);

  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    if (leadForm.name && leadForm.email) {
      setIsSubmittingLead(true);
      
      const payload = {
        name: leadForm.name,
        email: leadForm.email,
        phone: leadForm.phone || "",
        website: leadForm.website || url || "",
        message: leadForm.message || "CAPTURED LEAD: SEO Audit Web Diagnosis Engine"
      };

      try {
        // Send to Google Sheets Lead Tracker
        await fetch('/api/contact', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify(payload)
        });

        // Send to MailerLite Contact Group
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
                quoting_details: "Lead Magnet: Official SEO Audit"
             }
           })
        });
      } catch (err) {
        console.error("Lead capture network error", err);
      } // Ignore errors to unlock dashboard anyway to not ruin UX

      setIsSubmittingLead(false);
      setIsUnlocked(true);
      if (typeof window !== 'undefined') {
        localStorage.setItem('lemonade_global_unlocked', 'true');
      }
    }
  };

  const renderAuditCard = (title: string, isValid: boolean, failText?: string) => {
    return (
      <div className={`p-4 rounded-xl border-2 transition-all shadow-sm flex items-center justify-between ${isValid ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
        <div>
          <p className={`text-sm font-black uppercase tracking-wider ${isValid ? 'text-green-800' : 'text-red-800'}`}>{title}</p>
          {!isValid && failText && <p className="text-[10px] uppercase font-bold text-red-600 mt-1">{failText}</p>}
        </div>
        <span className={`text-2xl ml-4 ${isValid ? 'text-green-500' : 'text-red-500'}`}>{isValid ? '✅' : '❌'}</span>
      </div>
    );
  };

  // Safe data getter for the active tab
  const getActiveData = () => {
    if (!apiData) return null;
    return activeTab === 'mobile' ? apiData.mobile : apiData.desktop;
  };

  const currentData = getActiveData();

  return (
    <div className="max-w-[1200px] mx-auto p-4 md:p-8 bg-white border border-gray-100 shadow-2xl rounded-2xl text-gray-900 font-sans">
      
      {/* Dynamic Header */}
      <div className="text-center mb-10 mt-4">
        <h2 className="text-4xl md:text-5xl font-black text-[#1E3A1A] mb-4 uppercase tracking-tight flex items-center justify-center gap-4">
          <svg width="36" height="18" viewBox="0 0 24 12" fill="currentColor" className="text-[#FED52B] transform -rotate-12 mt-1">
            <path d="M 0 0 A 12 12 0 0 0 24 0 Z" />
          </svg>
          {isEs ? "Motor de Diagnóstico Web" : "Web Diagnosis Engine"} 
          <svg width="36" height="18" viewBox="0 0 24 12" fill="currentColor" className="text-[#FED52B] transform rotate-12 mt-1">
            <path d="M 0 0 A 12 12 0 0 0 24 0 Z" />
          </svg>
        </h2>
        <p className="text-lg font-bold text-gray-500 max-w-3xl mx-auto">
          {isEs 
            ? "Conectado a nuestra infraestructura de diagnóstico. Extrae las 4 métricas absolutas que dictan tu éxito o fracaso en la red."
            : "Connected to our deep diagnostic infrastructure. Extract the 4 absolute metrics dictating your success or failure online."}
        </p>
      </div>

      {/* Hero Form */}
      {!isLoading && !apiData && (
        <div className="bg-gray-50 px-8 py-10 rounded-2xl border border-gray-100 shadow-inner max-w-2xl mx-auto">
          <form onSubmit={handleScan} className="space-y-6">
            <div>
              <label className="block text-xs font-black text-gray-500 mb-2 uppercase tracking-widest pl-1 text-center">
                {isEs ? "Ingresa un Dominio o URL" : "Enter a Domain or URL"}
              </label>
              <input 
                type="text" 
                placeholder="remodelinglosangeles.com" 
                value={url} 
                onChange={(e) => setUrl(e.target.value)} 
                required 
                className="w-full p-5 bg-white border border-gray-300 rounded-xl font-black text-gray-800 focus:outline-none focus:ring-4 focus:ring-[#FED52B] focus:border-transparent transition-all shadow-sm text-center text-xl" 
              />
            </div>
            <button type="submit" className="w-full mt-4 bg-[#1E3A1A] hover:bg-black text-[#FED52B] font-black uppercase tracking-widest py-6 rounded-xl shadow-lg transition-transform hover:-translate-y-1 text-lg">
              {isEs ? "Obtener Reporte Oficial" : "Fetch Official Report"}
            </button>
          </form>
          <div className="flex justify-center mt-6">
             <span className="bg-gray-200 text-gray-500 text-[10px] uppercase font-black px-4 py-1 rounded-full border border-gray-300">
               Secured by Advanced Serverless Engine
             </span>
          </div>
        </div>
      )}

      {/* Loading Block */}
      {isLoading && (
        <div className="bg-gray-50 p-16 rounded-2xl border border-gray-100 flex flex-col items-center justify-center min-h-[400px]">
          <div className="relative w-32 h-32 mb-10">
            <div className="absolute inset-0 rounded-full border-[8px] border-gray-200"></div>
            <div className="absolute inset-0 rounded-full border-[8px] border-[#1E3A1A] border-t-transparent animate-spin"></div>
            <div className="absolute inset-3 rounded-full border-[6px] border-[#FED52B] border-b-transparent animate-spin-reverse delay-150"></div>
          </div>
          <h3 className="text-xl font-black text-[#1E3A1A] text-center uppercase tracking-widest transition-all">
            {steps[currentStepIndex]}
          </h3>
          <p className="text-sm font-semibold text-gray-500 mt-4 text-center">
             {isEs ? "Este proceso puede tardar hasta 5 minutos. Por favor no cierres la ventana." : "This process can take up to 5 minutes. Please do not close the window."}
          </p>
        </div>
      )}

      {/* Main Dashboard (Phase 4/5 Combined) */}
      {!isLoading && apiData && (
        <div className="relative mt-8 border-t-2 border-gray-100 pt-8">
          
          <div className={`transition-all duration-1000 ${!isUnlocked ? 'filter blur-[16px] select-none pointer-events-none opacity-20' : 'opacity-100'}`}>
            
             {/* Platform Toggle */}
             <div className="flex justify-center mb-10">
               <div className="bg-gray-100 p-2 rounded-xl inline-flex space-x-2 border border-gray-200 shadow-inner">
                 <button 
                   onClick={() => setActiveTab('mobile')} 
                   className={`px-8 py-3 rounded-lg font-black uppercase tracking-widest text-sm transition-all ${activeTab === 'mobile' ? 'bg-[#1E3A1A] text-[#FED52B] shadow-md' : 'text-gray-400 hover:text-gray-800'}`}
                 >
                   📱 {isEs ? "Móvil" : "Mobile"}
                 </button>
                 <button 
                   onClick={() => setActiveTab('desktop')} 
                   className={`px-8 py-3 rounded-lg font-black uppercase tracking-widest text-sm transition-all ${activeTab === 'desktop' ? 'bg-[#1E3A1A] text-[#FED52B] shadow-md' : 'text-gray-400 hover:text-gray-800'}`}
                 >
                   💻 {isEs ? "Escritorio" : "Desktop"}
                 </button>
               </div>
             </div>

             {/* Tab Content Display */}
             {currentData?.success === false ? (
                <div className="min-h-[300px] flex flex-col items-center justify-center p-8 bg-red-50 rounded-3xl border-2 border-red-200 border-dashed max-w-4xl mx-auto">
                    <span className="text-5xl mb-4">⚠️</span>
                    <h4 className="text-red-800 font-black text-2xl uppercase tracking-widest mb-2 text-center">
                      {isEs ? "Fallo en la conexión paralela" : "Parallel Connection Failed"}
                    </h4>
                    <p className="text-red-700 font-bold text-base text-center max-w-lg">
                      {isEs ? "El escáner no pudo renderizar esta vista debido a timeouts de la plataforma origen." : "The engine could not render this view due to origin server timeouts."}
                    </p>
                </div>
             ) : currentData && (
               <>
                 {/* Top 4 Performance Categories Grid */}
                 <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-gray-50 border border-gray-100 p-8 rounded-3xl shadow-sm mb-10">
                    <SpeedGauge score={currentData.scores.performance} mode={isEs ? "Rendimiento Core" : "Core Performance"} />
                    <SpeedGauge score={currentData.scores.seo} mode={isEs ? "SEO Oficial" : "Official SEO"} />
                    <SpeedGauge score={currentData.scores.bestPractices} mode={isEs ? "Mejores Prácticas" : "Best Practices"} />
                    <SpeedGauge score={currentData.scores.accessibility} mode={isEs ? "Accesibilidad" : "Accessibility"} />
                 </div>

                 {/* Bottom Split Section: Vitals & SEO Audits */}
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                    
                    {/* Left: Core Web Vitals Deep Dive */}
                    <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                      <h3 className="text-2xl font-black text-[#1E3A1A] mb-8 uppercase tracking-widest flex items-center gap-2">
                        ⏱️ Core Web Vitals
                      </h3>
                      <div className="space-y-6">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 flex justify-between items-center">
                           <div>
                             <p className="text-xs font-black uppercase text-gray-500 tracking-wider">First Contentful Paint</p>
                             <p className="text-[10px] text-gray-400 font-bold mt-1 max-w-[200px] leading-tight">
                               {isEs ? "Primer elemento renderizado visible" : "First visible rendered element"}
                             </p>
                           </div>
                           <p className="text-2xl font-black text-[#1E3A1A]">{currentData.metrics.fcp}</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 flex justify-between items-center">
                           <div>
                             <p className="text-xs font-black uppercase text-gray-500 tracking-wider">Largest Contentful Paint</p>
                             <p className="text-[10px] text-gray-400 font-bold mt-1 max-w-[200px] leading-tight">
                               {isEs ? "Tiempo al activo más colosal en pantalla" : "Time to largest asset placed on screen"}
                             </p>
                           </div>
                           <p className="text-2xl font-black text-[#1E3A1A]">{currentData.metrics.lcp}</p>
                        </div>
                      </div>
                    </div>

                    {/* Right: Explicit SEO Audits from Google */}
                    <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                      <h3 className="text-2xl font-black text-[#1E3A1A] mb-8 uppercase tracking-widest flex items-center gap-2">
                        🔍 {isEs ? "Certificación Técnica" : "Technical Certification"}
                      </h3>
                      <div className="space-y-4">
                         {renderAuditCard(
                            "<title> Tag Oficial", 
                            currentData.seoAudits.hasTitle, 
                            isEs ? "No detectado en la página" : "Not detected on the page"
                         )}
                         {renderAuditCard(
                            "<meta> Description", 
                            currentData.seoAudits.hasMetaDesc, 
                            isEs ? "Falta descripción o está rota" : "Missing or broken description"
                         )}
                         {renderAuditCard(
                            isEs ? "Libre de Bloqueos (Crawlable)" : "Bot Crawlable", 
                            currentData.seoAudits.isCrawlable, 
                            isEs ? "Bloqueado por robots.txt" : "Blocked by robots.txt"
                         )}
                         {renderAuditCard(
                            isEs ? "Enlaces Rastreables" : "Crawlable Anchors", 
                            currentData.seoAudits.crawlableAnchors, 
                            isEs ? "Enlaces rotos o mal formados" : "Broken or malformed links"
                         )}
                         {renderAuditCard(
                            isEs ? "Estatus del Servidor (HTTP)" : "Server Status (HTTP)", 
                            currentData.seoAudits.validHttpStatus, 
                            isEs ? "El servidor expuso códigos de error" : "The server exposed error codes"
                         )}
                      </div>
                    </div>
                 </div>
               </>
             )}
            
            <div className="mt-12 text-center pb-10">
               <button onClick={() => { setApiData(null); setUrl(''); }} className="text-[#1E3A1A] bg-[#FED52B] hover:bg-black hover:text-white px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest shadow-md transition-all">
                 {isEs ? "Nueva Búsqueda" : "New Search"}
               </button>
            </div>
          </div>

          {!isUnlocked && (
            <div className="absolute inset-x-0 top-0 flex items-start justify-center z-20 pt-20 pb-40 px-4">
              <div className="bg-white p-10 rounded-[32px] shadow-2xl border-4 border-gray-50 max-w-lg w-full relative transform transition-all">
                 <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#FED52B] text-[#1E3A1A] font-black py-3 px-10 rounded-xl shadow-xl text-sm uppercase tracking-widest text-center whitespace-nowrap">
                   {isEs ? "Desbloquea La Vía Rápida" : "Unlock Fast Track"}
                 </div>
                 
                 <h4 className="text-3xl font-black text-center text-[#1E3A1A] mt-6 mb-4 tracking-tight leading-tight">
                   {isEs ? "El Análisis Maestro" : "The Master Analysis"} <br/> 
                   <span className="text-[#FED52B]"> {isEs ? "Ha Concluido" : "Has Concluded"}</span>
                 </h4>
                 <p className="text-sm font-bold text-gray-500 text-center mb-8 px-4">
                   {isEs ? "Registra tu equipo para revelar los 4 cuadrantes de desempeño oficiales inmediatamente." : "Register your terminal to reveal the 4 official performance quadrants immediately."}
                 </p>

                 <form onSubmit={handleUnlock} className="space-y-4">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <input required type="text" placeholder={isEs ? "Nombre del Contratista *" : "Contractor Name *"} className="w-full p-4 bg-gray-50 border border-gray-200 font-black text-gray-800 rounded focus:border-[#1E3A1A] focus:outline-none focus:ring-1 focus:ring-[#1E3A1A] transition-all text-center placeholder-gray-400" value={leadForm.name} onChange={e => setLeadForm({...leadForm, name: e.target.value})} />
                     <input required type="email" placeholder={isEs ? "Correo Profesional *" : "Professional Email *"} className="w-full p-4 bg-gray-50 border border-gray-200 font-black text-gray-800 rounded focus:border-[#1E3A1A] focus:outline-none focus:ring-1 focus:ring-[#1E3A1A] transition-all text-center placeholder-gray-400" value={leadForm.email} onChange={e => setLeadForm({...leadForm, email: e.target.value})} />
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <input type="tel" placeholder={isEs ? "Teléfono (Opcional)" : "Phone Number (Optional)"} className="w-full p-4 bg-gray-50 border border-gray-200 font-black text-gray-800 rounded focus:border-[#1E3A1A] focus:outline-none focus:ring-1 focus:ring-[#1E3A1A] transition-all text-center placeholder-gray-400" value={leadForm.phone} onChange={e => setLeadForm({...leadForm, phone: e.target.value})} />
                     <input type="text" placeholder={isEs ? "Sitio Web (Opcional)" : "Website (Optional)"} className="w-full p-4 bg-gray-50 border border-gray-200 font-black text-gray-800 rounded focus:border-[#1E3A1A] focus:outline-none focus:ring-1 focus:ring-[#1E3A1A] transition-all text-center placeholder-gray-400" value={leadForm.website} onChange={e => setLeadForm({...leadForm, website: e.target.value})} />
                   </div>
                   <textarea rows={2} placeholder={isEs ? "Mensaje o pregunta rápida (Opcional)" : "Quick message or question (Optional)"} className="w-full p-4 bg-gray-50 border border-gray-200 font-black text-gray-800 rounded focus:border-[#1E3A1A] focus:outline-none focus:ring-1 focus:ring-[#1E3A1A] transition-all resize-none text-center placeholder-gray-400" value={leadForm.message} onChange={e => setLeadForm({...leadForm, message: e.target.value})} />
                   
                   <button disabled={isSubmittingLead} type="submit" className="w-full font-black uppercase tracking-widest bg-[#1E3A1A] hover:bg-black text-[#FED52B] py-6 rounded-xl shadow-[0_10px_20px_rgba(30,58,26,0.3)] transition-all mt-6 text-xl hover:-translate-y-1 disabled:opacity-50">
                     {isSubmittingLead ? "..." : (isEs ? "Desbloquear Tablero Oficial" : "Unlock Official Dashboard")}
                   </button>
                 </form>
              </div>
            </div>
          )}
        </div>
      )}

    </div>
  );
}
