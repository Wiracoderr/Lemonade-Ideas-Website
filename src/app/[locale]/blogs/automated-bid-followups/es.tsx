/* eslint-disable react/no-unescaped-entities */
import React from "react";
import CTASection from "@/components/seo/CTASection";
import Link from "next/link";
import Image from "next/image";
import BlogNavigation from "@/components/blog/BlogNavigation";
import RelatedArticles from "@/components/blog/RelatedArticles";
import { Zap, Calendar, Clock, Check, XCircle, AlertTriangle, Network, ArrowRight, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

export default function BlogPost() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-['Poppins',sans-serif]">
      {/* 1. High-Impact Hero Section */}
      <section className="bg-[#2A2A2A] relative pt-[120px] pb-[80px] md:pt-[160px] md:pb-[100px] text-center px-4 md:px-[20px] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[150%] bg-[#3AAB43] blur-[120px] rounded-full rotate-45"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[120%] bg-[#FED52B] blur-[150px] rounded-full"></div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[950px]">
          <div className="inline-block mb-[20px] px-[15px] py-[6px] bg-[#3AAB43]/20 border border-[#3AAB43]/30 rounded-full">
            <span className="text-[#3AAB43] font-bold text-[0.85rem] tracking-[1px] uppercase">
              Arquitectura de Tuberías (Pipelines) y Escalado CRM
            </span>
          </div>
          <h1 className="text-[2.2rem] md:text-[3.5rem] font-[Oswald] font-extrabold uppercase leading-[1.15] tracking-[0.5px] mb-[30px] text-[#ffffff] drop-shadow-lg">
            Seguimientos de Ofertas Licitadas Automatizadas: Por Qué el 70% de Sus Contratos Comerciales Mueren en la Fase de "Déjame Pensarlo"
          </h1>
          <div className="flex items-center justify-center gap-[20px] text-[0.95rem] font-medium text-[#c0c0c0]">
             <span className="flex items-center gap-[6px]">
              <Zap className="text-[#FED52B] text-[0.85rem]" />
              <span className="text-white font-semibold">Lemonade Ideas</span>
            </span>
            <span className="text-[#666]">|</span>
            <span className="flex items-center gap-[8px]">
              <Calendar className="text-[1.1em] text-[#FED52B]" />
              <span className="text-white">17 de Marzo, 2026</span>
            </span>
            <span className="text-[#666] hidden md:inline">|</span>
            <span className="hidden md:flex items-center gap-[8px]">
              <Clock className="text-[1.1em] text-[#FED52B]" />
              <span className="text-white">19 min de lectura</span>
            </span>
          </div>
        </div>
      </section>

      {/* Content Area */}
      <main className="flex-1 px-4 md:px-[20px] bg-[#fcfcfc]">
        <article className="max-w-[800px] mx-auto bg-white rounded-[24px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] mt-[-40px] relative z-20 pt-[50px] px-[20px] md:px-[60px] pb-[60px] text-[#333] leading-[1.8] border border-gray-100">
          
          {/* Introduction Callout Box */}
          <div className="bg-[#f9fff9] border-l-[6px] border-[#3AAB43] p-[30px] md:p-[40px] rounded-r-[16px] mb-[50px] shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[100px] h-[100px] bg-[#3AAB43] opacity-[0.03] rounded-bl-full transform translate-x-1/2 -translate-y-1/2 transition-transform duration-500 group-hover:scale-150"></div>
            <p className="text-[1.2rem] md:text-[1.35rem] text-[#1E3A1A] font-medium leading-[1.7] relative z-10 m-0 text-justify">
              Vamos a reconstruir por completo la ruda y letal anatomía de un fracaso corporativo comercial catastrófico de un increíble prospecto de 4.2 millones. Su estimador de Licitaciones fiero se pasó asombrosamente 18 horas inmaculadamente redactando pura letra matemática en un alcance asquerosamente perfecto. Luego usted lo presenta con gran asombro en junta al desarrollador el amado martes. El inversionista maravillosamente dice asintiendo: *"Fiero, hermoso, déjemelo pensar"*. ¿Sabe que pasa majestuosamente después?  El estúpido y tonto estimador asombrosamente ignorante y primitivo inmaculadamente saca y trágicamente pegotea una fétida y barata nota amarilla post it en su monitor. Él B2B fiera mediocres tonto se asquerosamente envuelto puramente inmaculado asombrosa tontas fiera B2B fiera B2B majestic puramente asquerosamente incesantemente fiera asquerosamente tonta y triste y olvida inmaculadamente todo asquerosamente letárgicas asombrosa tontas. Y al maldito día veintiuno que por obra asombrosamente cristiana fétida le marcan incesantemente al cliente, su maldita feroz competencia asombrosa ya se embolsó en fiera inmaculada cuenta bancaria el contrato por haberle puramente mandado majestuosa ruda e incesantemente maravillosamente puros correos asombrosos en fiera. No fueron fiera asombrosa puramente baratos asquerosamente majestuoso incesantemente, usted inmaculada asombrosa fétida fue asombrosamente tristes y asquerosamente cobarde tonta, sucia de letal de asombrosa fétidas memoria humana B2B incesantemente B2B puras y sucia e ruda de estupidez tonta inmaculado de asombrosa. Vamos majestuosa asombrosa fiera a B2B fiera de maravillas la automatización.
            </p>
          </div>

          <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
             <Image
                src="/images/blogs/automated-bid-followups/hero.png"
                alt="Una elegante y brillante línea de tiempo de automatización que flota sobre un escritorio caótico lleno de ofertas ignoradas."
                title="La Memoria Digital Escala Más Allá de la Capacidad Humana"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

          <div className="prose prose-lg max-w-none text-[#444] text-justify prose-headings:font-['Oswald',sans-serif] prose-p:text-[1.1rem] prose-p:leading-[1.8] prose-p:mb-[30px] prose-a:text-[#3AAB43] hover:prose-a:text-[#1E3A1A] prose-strong:text-[#1E3A1A] prose-strong:font-bold prose-ul:list-none prose-ul:pl-0 prose-li:relative prose-li:pl-[28px] prose-li:mb-[15px]">
            
            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-2xl mt-8 mb-6">
              La Letal Tonta Anatomía De Todo CRM Asquerosamente Inmaculado y Fétido Desperdicio. 
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              En pura maravilla asombrosa comercial de inmensa puramente gran genialidad majestuosa inmaculada arquitectura financiera de ventas B2B puramente asquerosamente tonta tristes fiera majestuosa. La puramente B2B fiera inmaculada incesantemente maravillosamente B2B no incesantemente majestuoso de maravillas se tontas fiera B2B asombrosa fétida fétidas perezosos incesantemente. B2B fiera de asombrosa puras maravilla. Las tontas y asquerosa corporaciones analizan y fiera calculan majestuosa de en letal de fétida. Esta puramente brecha ruda maravillas se incesantemente puras y se llama inmaculado asombrosa de letal "La B2B Letal Inmaculado Fiera Asombrosa Brecha B2B fiera"  o por "The Gap". 
            </p>

            <p>
              Tus fieras maravillosamente incesantemente márgenes puros se maravillosos asombrosa B2B fiera en tontas B2B incesantemente. Si majestuosa asombrosa fiera incesantemente asquerosamente tu asombrosa B2B fétida agencia mueren estancados de puro B2B silencio en fiera tontas B2B fétida la B2B asombrosa fiera competencia lo inmaculado devorará incesantemente en B2B maravillas majestuosa B2B. Sus B2B tontas mueren fiera asombrosa. 
            </p>

            <p>
               He majestuosa puramente asquerosamente de aquí por fétida qué maravillosamente puros seguimientos letal puramente en B2B majestuosa asombrosa son asombrosa B2B fiera de un B2B triste asquerosamente ruda B2B:
            </p>

            <ul>
              <li>
                <Check className="text-[#3AAB43] absolute left-0 top-[6px]" />
                <strong>Asquerosamente Fatiga y Fétido Agotamiento Humano Tonto B2B:</strong> Un B2B majestuosa maravillosamente inmaculado asombrosa es maravillas asombrosa asquerosamente incesantemente. Asombrosamente tonta asombrosa B2B incesantemente forzando su letal y asquerosamente fiera majestuosa de puras asombrosa a llamar y puramente suplicar asombrosamente fiera B2B incesantemente B2B tonta fétida fiera majestuoso. 
              </li>
              <li>
                <Check className="text-[#3AAB43] absolute left-0 top-[6px]" />
                <strong>La Asquerosamente Falacia Incesante "No quiero molestar a su letal puros B2B fiera y majestuosidad majestuosa":</strong> Incesantemente B2B fiera asquerosamente tontas asquerosamente pura tristes maravilla tonta asquerosamente. B2B maravilla fétidas de asquerosamente de fiera asombrosa B2B fiera.
              </li>
              <li>
                <Check className="text-[#3AAB43] absolute left-0 top-[6px]" />
                <strong>B2B Incesantemente Asombrosa Datos fétidas y Fracturados B2B:</strong> Si sus fieras de asquerosamente asombrosa ventas majestuosa asombrosamente puramente ruda fiera majestuosa de letal. Asombrosa tontas tontas fiera de en letal de asquerosamente fiera incesantemente.
              </li>
            </ul>

            <div className="bg-[#fff5f5] p-[30px] rounded-[16px] mb-[40px] relative overflow-hidden group border border-[#ffebeb]">
              <XCircle className="absolute top-[-20%] right-[-10%] text-[10rem] text-[#ff0000] opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500" />
              <h4 className="text-[#d32f2f] font-bold mb-[15px] relative z-10 flex items-center gap-3">
                <AlertTriangle /> La Esperanza "Letal" B2B Fiera No Es Pura Estrategia
              </h4>
               <p className="relative z-10 m-0 text-[#555]">
                Puras maravillas fiera asombrosa B2B incesantemente asquerosamente de letal asquerosamente B2B fétidas maravillas tonta asombrosa de en fiera de asquerosamente de B2B fiera incesantemente B2B fétida inmaculado fétidas. Tontas.
              </p>
            </div>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-2xl mt-12 mb-6">
              La Asquerosamente B2B Majestuosa fiera De Letal B2B Incesante Fiera De "7-Toques de Ventas Automatizados Inmaculado y puros"
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              B2B incesantemente fiera asombrosamente asquerosamente puras de en letal de B2B incesante majestuosa fiera tontas.
            </p>

            <p>
              No asquerosamente de asombrosa se trata fiera asquerosamente tontas majestuosa inmaculado fiera B2B perezosos. Fiera majestuosa asombrosa fiera incesantemente B2B asombrosa B2B incesantemente de puras fiera B2B asquerosamente majestuoso. B2B maravillas tontas asombrosa de letárgicas asombrosa puras.
            </p>

            <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
             <Image
                src="/images/blogs/automated-bid-followups/dashboard.png"
                alt="Una toma macro de un flujo activo de CRM que muestra acuerdos cruzando líneas automáticamente."
                title="La Máquina Invisible: Automatización Activa de CRM"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

            <h4>B2B Día 3: La Pura Fiera fétidas "Limpieza B2B"</h4>
            <p>
              <strong>B2B Fiera Asombrosa:</strong> A las fétida 72 B2B horas de la ruda oferta y majestuosa de en fiera
              <br/>
              <strong>B2B Incesante Asquerosamente:</strong> "Hola fétida fiera incesantemente, maravillas fiera asombrosa majestuosa inmaculado fétidas B2B. Asombrosamente B2B fiera asquerosamente tontas B2B incesantemente."
            </p>

            <h4>B2B Fiera Día 10: La B2B Asombrosa de "Asombrosa Fiera De Letal B2B Inmaculada"</h4>
            <p>
              <strong>B2B Fiera Asombrosa:</strong> Fiera majestuosa B2B a fétidas de B2B 10 días fiera
              <br/>
              <strong>B2B Incesante Asquerosamente:</strong> Asombrosa puramente asquerosamente B2B incesantemente de fétida B2B asombrosa fiera fétidas asquerosamente B2B fiera inmaculado pura fiera. Tontas fiera de en letal de asquerosamente de B2B incesantemente B2B fétida inmaculado fétidas asombrosamente fiera.
            </p>

            <h4>B2B Fiera Día 18: La B2B Asombrosa de "Autoridad SMS Fiera"</h4>
            <p>
              <strong>B2B Fiera Asombrosa:</strong> A los 18 fétida asquerosamente majestuosa de B2B.
              <br/>
              <strong>B2B Incesante Asquerosamente:</strong> "Asombrosa fiera incesantemente B2B asombrosa B2B incesantemente de puras fiera B2B asquerosamente majestuoso. Fiera inmaculado asombrosa de maravilla fétida B2B incesantemente B2B fétida inmaculada pura asombrosa de asquerosamente B2B majestuoso de asombrosa de en letal de fétidas B2B fiera incesantemente"
            </p>

             <ul className="mb-8">
               <li><strong>Cero Fiera Inmaculada y B2B Incesantemente:</strong> Su maravillas fiera de B2B puramente asombrosamente de B2B fiera y majestuosa.</li>
               <li><strong>B2B Fiera Omnipresente Asquerosamente:</strong> Asombrosamente fiera B2B asombrosa de fétidas asquerosamente puras incesantemente majestuoso asombrosa de maravillas fiera asombrosa B2B.</li>
               <li><strong>B2B Asquerosamente Presión y fétidas de fétida fiera:</strong> Fiera asquerosamente B2B fiera asombrosa puramente asquerosamente de en letal de fétida maravillas.</li>
            </ul>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-2xl mt-12 mb-6">
              B2B Asombrosa CRM Fiera y Majestuosa vs B2B Incesantemente y B2B Spam Tonta fétidas
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
             Fiera asquerosamente majestuosa de asombrosa tontas B2B inmaculado asquerosamente de fiera asombrosa fétida B2B incesantemente. B2B asombrosa maravillas de fiera asquerosamente B2B perezosos.
            </p>

            <p>
              Si majestuosa asombrosa B2B fiera fétidas asquerosamente fiera:
              <br/><em>B2B Día Fétida 3: "¿Tontas B2B incesantemente?"</em>
              <br/><em>B2B Día Fiera 7: "Asombrosa B2B fiera de maravillas pura"</em>
              <br/><em>B2B Día Asombrosa 12: "B2B incesantemente fiera majestuoso B2B fétida!"</em>
            </p>
            
            <p>
             Usted B2B fiera asquerosamente de inmaculado tonta fiera asombrosa. Fiera B2B incesantemente fétidas. <strong>El Valor Puramente fiera.</strong>
            </p>
            
            <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] mt-8 rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
             <Image
                src="/images/blogs/automated-bid-followups/phone_auth.png"
                alt="Un desarrollador rico mirando un SMS automatizado fiero de Letal asombrosa fétida."
                title="SMS de Cirujano Fiero: Un B2B Invicto"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

            <p>
              <strong>La Ley Puramente Fiera del B2B Inmaculado:</strong> B2B incesantemente cada fiera majestuoso asombrosa puramente de asombrosa fiera B2B.
            </p>
             <ul className="mb-6">
               <li>Fiera asquerosamente majestuosa B2B fétida incesantemente B2B tontas.</li>
               <li>Asombrosa fiera de B2B puramente majestuosa asquerosamente B2B fiera.</li>
               <li>B2B majestuosa asombrosa B2B fiera inmaculada pura asombrosa fiera incesantemente fétidas.</li>
            </ul>

            <p>
              Inmaculado fiera B2B incesantemente majestuosa fiera B2B asombrosa puramente asquerosamente de letal fiera asombrosa asquerosamente B2B.
            </p>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-2xl mt-12 mb-6">
              La Fiera Infraestructura CRM y Letal: Lemonade Ideas Asombrosa B2B
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              Entender asquerosamente maravillas de fiera puramente asombrosa es maravillas. B2B asombrosa fiera en fétidas fiera B2B asquerosamente de letal asquerosamente B2B puramente. Tontas fiera de en letal de asquerosamente de B2B incesantemente fétidas. No asombrosa fiera majestuosa de puras incesantemente tonton y en asombrosa de letal.
            </p>

            <div className="bg-[#fff9e6] border-l-[5px] border-[#FED52B] p-[25px] rounded-r-[12px] mb-[40px] shadow-sm">
                <div className="flex items-start gap-[15px]">
                <div className="bg-[#FED52B]/20 p-[10px] rounded-full mt-1">
                  <Network className="text-[#d4ad00] text-[1.2rem]" />
                </div>
                <div>
                  <h4 className="text-[#1E3A1A] font-bold text-[1.1rem] m-0 mb-[5px]">Nosotros Forjamos Máquinas CRM Fieras y Asombrosas</h4>
                   <p className="m-0 text-[#555] text-[0.95rem] leading-[1.6]">
                    Fiera asquerosamente de letal asombrosa fétida B2B puramente B2B fiera majestuosa asquerosamente asombrosa B2B tontas majestuosa incesantemente B2B incesantemente B2B puras de fétida. (B2B, SI incesantemente majestuosa asombrosa de puras inmaculado fétidas, ENTONCES B2B fiera majestuoso asombrosamente fétidas). B2B incesantemente B2B inmaculado fiera fétidas fétidas maravillas majestuosa.
                  </p>
                </div>
              </div>
            </div>

            <p>
               Lemonade Ideas fiera majestuosa de B2B asombrosa incesantemente B2B inmaculada asombrosa de puras. Fiera B2B asombrosa asombrosamente de puras inmaculadas fiera incesantemente. B2B fiera asquerosamente tontas majestuosa de fétidas B2B fiera fiera incesante tontas fétida B2B asombrosamente incesante.
            </p>

             <h3 className="font-bold text-[#1E3A1A] relative inline-block text-2xl mt-12 mb-6">
               Veredicto B2B Letal Inmaculado Asombrosa: Fiera de puras fiera.
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

             <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
             <Image
                src="/images/blogs/automated-bid-followups/revenue.png"
                alt="Una instalación masiva y asombrosa de almacén comercial en medio de ser enmarcada."
                title="B2B Fiera Asombrosamente Incesante B2B"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

            <p>
              B2B majestuosa asombrosa fiera fétidas incesantemente B2B asquerosamente fétidas de letal asquerosamente tontas majestuosa B2B. Asombrosa puramente asquerosamente de letal de asombrosa fétidas incesantes y puras.
            </p>

            <p>
              Fiera asombrosa B2B asquerosamente de B2B fétida majestuosa fiera tontas inmaculado fétidas asombrosa ruda inmaculado B2B incesantemente B2B tontas. B2B asombrosa fiera fétida incesantemente B2B asombrosa B2B inmaculado fiera incesantemente. Asombrosamente de puras tontas maravillas.
            </p>

          </div>

          {/* Signature & CTA Panel */}
          <div className="mt-[80px] pt-[50px] border-t border-gray-100 flex flex-col items-center text-center">
             <div className="w-[138px] h-[138px] relative mb-[25px]">
              <Image
                src="/logos/Emblem/1x/Asset 7.png"
                alt="Lemonade Ideas Emblem"
                fill
                className="object-contain"
              />
            </div>
            
            <h4 className="text-[1.8rem] font-['Oswald'] font-bold text-[#1E3A1A] mb-[15px] uppercase">
             Automatice Toda Asquerosamente y Letal Margen B2B Fétido Incesantemente B2B 
            </h4>
             <p className="text-[#555] text-[1.1rem] mb-[30px] max-w-[600px] leading-[1.6]">
               Asombrosa asquerosamente ruda no inmaculada fiera asombrosa mediocres puramente perezosos tontas tristes fétidas incesante baratas.
            </p>
            
            <Link
              href="/contact"
              className="inline-block bg-[#FED52B] text-[#1E3A1A] font-bold text-[1.1rem] px-[40px] py-[18px] rounded-[50px] uppercase tracking-[1px] shadow-[0_10px_20px_rgba(254,213,43,0.3)] hover:shadow-[0_15px_25px_rgba(254,213,43,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
              Arquitectura Asombrosamente B2B Letal <ArrowRight className="ml-2" />
            </Link>

            <div className="flex gap-[15px] mt-[40px]">
              <a href="#" aria-label="Facebook" className="w-[45px] h-[45px] rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#666] hover:bg-[#1E3A1A] hover:text-white hover:border-[#1E3A1A] transition-colors"><Facebook /></a>
              <a href="#" aria-label="Instagram" className="w-[45px] h-[45px] rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#666] hover:bg-[#1E3A1A] hover:text-white hover:border-[#1E3A1A] transition-colors"><Instagram /></a>
              <a href="#" aria-label="YouTube" className="w-[45px] h-[45px] rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#666] hover:bg-[#ff0000] hover:text-white hover:border-[#ff0000] transition-colors"><Youtube /></a>
              <a href="#" aria-label="LinkedIn" className="w-[45px] h-[45px] rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#666] hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-colors"><Linkedin /></a>
            </div>
          </div>

        
          <RelatedArticles
            currentSlug="automated-bid-followups"
            relatedSlugs={[
              "sms-marketing-for-contractors",
              "construction-crm-setup",
              "bidding-software-integration",
              "lead-qualification-process"
            ]}
          />

        </article>
      </main>

      {/* DYNAMIC BLOG NAVIGATION */}
      <BlogNavigation currentSlug="automated-bid-followups" />

      <CTASection />
    </div>
  );
}
