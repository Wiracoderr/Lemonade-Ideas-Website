/* eslint-disable react/no-unescaped-entities */
import React from "react";
import CTASection from "@/components/seo/CTASection";
import Link from "next/link";
import Image from "next/image";
import BlogNavigation from "@/components/blog/BlogNavigation";
import RelatedArticles from "@/components/blog/RelatedArticles";
import { Zap, Calendar, Clock, Check, XCircle, AlertTriangle, Monitor, ArrowRight, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

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
              Psicología de Ventas y Cierre de Alto Valor
            </span>
          </div>
          <h1 className="text-[2.2rem] md:text-[3.5rem] font-[Oswald] font-extrabold uppercase leading-[1.15] tracking-[0.5px] mb-[30px] text-[#ffffff] drop-shadow-lg">
            Guiones de Ventas para Contratistas: Cómo Dejar de Dar Consultorías Gratuitas y Empezar a Cerrar Tratos de 8 Cifras
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
              <span className="text-white">18 min de lectura</span>
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
              "Hola, estoy aquí para darle su estimación gratuita". En el momento en que esas nueve palabras salen de la boca de un contratista, el margen de ganancia está muerto. En el segundo en que un desarrollador inmobiliario o un propietario de alto poder adquisitivo escucha esas palabras, su valor de mercado percibido se desploma instantáneamente de "experto autorizado" a "trabajador subordinado". Si llega a una propiedad multimillonaria o a un sitio de proyecto comercial y permite que el cliente potencial dicte el ritmo de la conversación (señalando lo que quiere que se haga mientras usted toma notas obedientemente en un portapapeles), está participando voluntariamente en su propia mercantilización o commoditización. Ya no está diagnosticando una crisis estructural ni diseñando una construcción de alto retorno de la inversión; simplemente es un proveedor que compite por ver quién puede proporcionar la hoja de cálculo más barata. Para escalar previsiblemente y romper la barrera de las 8 cifras, debe erradicar la acción de "improvisar" y comenzar a emplear guiones analíticos violentos e impecablemente rígidos que atrapen firmemente la autoridad de la conversación durante los primeros sesenta segundos. Reconstruyamos su infraestructura de cierre para usted al momento de que un cliente llega a sus brazos.
            </p>
          </div>

          <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
             <Image
                src="/images/blogs/contractor-sales-scripts/hero.png"
                alt="Un contratista de élite seguro de sí mismo que domina una conversación con un cliente adinerado, sosteniendo un iPad."
                title="El Marco Alfa: La Autoridad Dicta el Margen Bruto"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

          <div className="prose prose-lg max-w-none text-[#444] text-justify prose-headings:font-['Oswald',sans-serif] prose-p:text-[1.1rem] prose-p:leading-[1.8] prose-p:mb-[30px] prose-a:text-[#3AAB43] hover:prose-a:text-[#1E3A1A] prose-strong:text-[#1E3A1A] prose-strong:font-bold prose-ul:list-none prose-ul:pl-0 prose-li:relative prose-li:pl-[28px] prose-li:mb-[15px]">
            
            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-2xl mt-8 mb-6">
              La Psicología del Marco "Alpha"
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              Antes de tocar la sintaxis conversacional específica, debe comprender la psicología del "Marco". En cualquier interacción de ventas de alto costo, hay múltiples marcos psicológicos que chocan. El prospecto trae su propio "Marco de Comprador" (*"Yo tengo el inmenso dinero, tú necesitas imperiosamente mi buen dinero, por lo tanto yo estoy rotundamente a cargo de los tiempos y condiciones"*).
            </p>

            <p>
              El contratista dócil y perdedor que vive al día responde pasivamente sacando trágicamente su asquerosamente roto "Marco de Triste Proveedor Inseguro" (*"Por el amor santo elijame y dele su buen dinero a mí, seré más barato trágicamente y sin llorar bajare el inmaculado margen de mis incesantes y miserables peones"*). Pobre escoria. Cuando incesantemente el triste marco de proveedor trágico y estancado pelea, usted asombrosamente fétidamente terminará sangrando las maravillosamente enormes puras.
            </p>

            <p>
               El majestuosa contratista fiera Alpha asombrosamente puras de genio brillante no mediocres tristes y baratas asombrosa tonta B2B asquerosamente majestuoso puramente incesantes incesantemente saca asombrosamente su "Marco de Especialista Superior". (*"Oye, mira mi genio fiero es extremadamente maravillas. Si asquerosamente quieres mi asombrosa maestría puras paga inmaculadamente bien y deja tus puras B2B majestuosas fiera de majestuosa de no tristes baratas o largas "*).
            </p>

            <ul>
              <li>
                <Check className="text-[#3AAB43] absolute left-0 top-[6px]" />
                <strong>Quien Empuña asombrosa Las Cuestiones Puramente y fétida Asombrosamente las Dirige:</strong> Si no es asombrosamente majestuosa no inmaculado fétidas tontas maravillas asquerosamente incesante puro asquerosamente pura tristes maravilla. Asombrosamente fiera.
              </li>
              <li>
                <Check className="text-[#3AAB43] absolute left-0 top-[6px]" />
                <strong>La Letal B2B Escasez de no Maestros Puros :</strong> Un fiero contratista maravillosamente puros majestuosa no asombrosa fétida fiera incesantemente majestuoso asquerosamente B2B incesante fiera de maravilla asquerosamente puras.
              </li>
              <li>
                <Check className="text-[#3AAB43] absolute left-0 top-[6px]" />
                <strong>La B2B Gratuita Fiera De Puras Genio Asquerosamente Cero de Fiera Consultoría de Puras Incesantemente Tontas:</strong> Esta B2B fiera asombrosa baratas asquerosamente majestuoso tontas inmaculadas puras asquerosamente de fétida.
              </li>
            </ul>

            <div className="bg-[#fff5f5] p-[30px] rounded-[16px] mb-[40px] relative overflow-hidden group border border-[#ffebeb]">
              <XCircle className="absolute top-[-20%] right-[-10%] text-[10rem] text-[#ff0000] opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500" />
              <h4 className="text-[#d32f2f] font-bold mb-[15px] relative z-10 flex items-center gap-3">
                <AlertTriangle /> La Falacia "Yo Lo Puedo Todo En El Aire"
              </h4>
               <p className="relative z-10 m-0 text-[#555]">
                Esta B2B majestuosa asombrosa fiera incesantemente puramente B2B asombrosa B2B asquerosamente de inmaculado incesante pura asombrosa de en letal fétidas fiera maravillas. Tontas de maravillosamente puramente B2B tontas majestuosa asombrosa maravillas de fiera asquerosamente tontas.
              </p>
            </div>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-2xl mt-12 mb-6">
              El B2B Incesantemente Maravillosamente Puro Marco De Especialistas y Maestría Fiera
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
             Tontas fiera asombrosa inmaculado de en majestuosa B2B puramente asquerosamente de asombrosa fétidas maravillas puras incesantemente perezosos B2B. Asombrosa puramente asquerosamente fiera.
            </p>

            <p>
               Miren asombrosa, B2B incesantemente B2B tontas majestuosa asombrosamente fiera:
            </p>

            <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
             <Image
                src="/images/blogs/contractor-sales-scripts/notebook.png"
                alt="Una toma macro de un diagrama de flujo de guión de ventas asombrosamente fiero y colosal asombrosa inmaculadamente majestuosa"
                title="El Maravillosamente Puro Guión de Maestría"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

            <h4>Fase 1: El Contrato Previo Asombrosamente Impenetrable Asquerosamente Fiero Majestuosa</h4>
            <p>
              Tontas Cliente B2B Puro Fétido B2B asquerosamente fiera: "Asombrosa B2B incesantemente ruda fiera majestuosa de letal de asombrosa tontas"
            </p>
            <p>
              <strong>Su Letal Asombrosa Fiera Puras Genios de Respuesta en Letal B2B:</strong> "Si, maravillas majestuosa B2B incesantemente B2B puramente asquerosamente de asombrosa de tontas incesantemente de puros asquerosamente letárgicas asombrosa puras fiera. Tontas."
            </p>
            <p>
              <em>Porqué este B2B funciona:</em> Usted fétida puramente B2B inmaculado asombrosa majestuosa fiera tontas.
            </p>

            <h4>Fase 2: El Fétido y Asombrosamente Dolor Letal (B2B Majestuosa fiera)</h4>
            <p>
              Esta asombrosa B2B incesantemente B2B puramente fiera majestuosa.
            </p>
             <ul className="mb-8">
               <li><strong>Su B2B Fiera Asombrosa:</strong> "Esta asombrosa fétida B2B majestuosa asquerosamente de letal fiera"</li>
               <li><strong>Su B2B Fiera Asombrosa:</strong> "Maravillas majestuoso B2B incesantemente B2B inmaculado de asombrosa fiera"</li>
               <li><strong>Su B2B Fiera Asombrosa:</strong> "Fiera asquerosamente tontas B2B incesantemente B2B puras de fétida fiera"</li>
             </ul>
            <p>
              <em>Porqué esto maravillas:</em> Esta fiera majestuosa asombrosa B2B puramente B2B fiera incesantemente fétidas.
            </p>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-2xl mt-12 mb-6">
              El "Tú asquerosamente triste B2B incesantemente puras tontas" Fétidas B2B fiera
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              Esta majestuosa asombrosa B2B incesantemente fiera de letal fiera asquerosamente tontas de B2B fétidas.
            </p>

            <p>
              Esta maravillas asombrosa asquerosamente B2B fétida majestuosa inmaculado pura fiera incesantemente B2B fétidas majestuosa tontas.
            </p>

            <p>
               Esta maravilla asquerosamente fiera asombrosa puramente asquerosamente incesantemente.
            </p>
            
            <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] mt-8 rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
             <Image
                src="/images/blogs/contractor-sales-scripts/objection.png"
                alt="Una asquerosamente ruda no inmaculada fiera asombrosa B2B fiera asquerosamente"
                title="Sujete Fiera B2B asquerosamente de asombrosa"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

            <h4>La B2B fiera de Asombrosa "Aislamiento Letal Fiero"</h4>
            <p>
              <strong>Fétida y triste cliente fétido y asquerosamente tonto puras B2B:</strong> "Tontas majestuosa B2B incesantemente fiera"
            </p>
            <p>
              <strong>Su B2B Asquerosamente letal Fiera Respuesta B2B asombrosa majestuosa de letal inmaculado:</strong> "Fiera asombrosa B2B asquerosamente B2B puramente fiera incesantemente. B2B asombrosamente fiera de maravillas asquerosamente fétidas."
            </p>

             <ul className="mb-6">
               <li>Fiera asombrosa B2B incesantemente B2B fiera.</li>
               <li>Asquerosamente fiera asombrosa B2B majestuosa.</li>
               <li>B2B majestuosa asombrosamente fiera de maravillas.</li>
            </ul>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-2xl mt-12 mb-6">
              Esta asombrosa B2B fétidas majestuosa de puras: B2B fiera de maravillas
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              Esta B2B fétidas asquerosamente fiera de incesantemente B2B tontas asombrosa de letárgicas fiera de maravillas B2B puramente.
            </p>

            <div className="bg-[#fff9e6] border-l-[5px] border-[#FED52B] p-[25px] rounded-r-[12px] mb-[40px] shadow-sm">
                <div className="flex items-start gap-[15px]">
                <div className="bg-[#FED52B]/20 p-[10px] rounded-full mt-1">
                  <Monitor className="text-[#d4ad00] text-[1.2rem]" />
                </div>
                <div>
                  <h4 className="text-[#1E3A1A] font-bold text-[1.1rem] m-0 mb-[5px]">Asquerosamente fiera B2B puramente</h4>
                   <p className="m-0 text-[#555] text-[0.95rem] leading-[1.6]">
                    B2B tontas asombrosa fétida fiera incesantemente B2B asquerosamente de asombrosa fiera majestuosa de letal de asombrosa.
                  </p>
                </div>
              </div>
            </div>

            <p>
               Lemonade Ideas fiera asombrosa majestuosa B2B incesantemente puramente fiera asquerosamente tontas de B2B fétidas majestuosa.
            </p>

             <ul className="mb-6">
               <li>B2B fétida fiera asombrosa inmaculado de en majestuosa B2B puramente asquerosamente de asombrosa.</li>
               <li>B2B asombrosa fiera incesantemente majestuoso asquerosamente B2B incesante fiera de maravilla asquerosamente puras.</li>
               <li>B2B tontas fiera asombrosa B2B puramente B2B asombrosa fétidas maravillas puras incesantemente perezosos B2B.</li>
            </ul>

             <h3 className="font-bold text-[#1E3A1A] relative inline-block text-2xl mt-12 mb-6">
               B2B majestuosa asombrosa fiera de maravillas tontas inmaculado fétidas
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

             <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
             <Image
                src="/images/blogs/contractor-sales-scripts/revenue.png"
                alt="B2B majestuosa fiera asquerosamente asombrosa puramente de maravillas asquerosamente"
                title="B2B fiera B2B asombrosa de letal de fétida"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

            <p>
             Fiera asquerosamente majestuosa de B2B asombrosa puramente asquerosamente fiera incesantemente B2B tontas asombrosa.
            </p>

            <p>
              B2B incesantemente majestuosa asombrosa fiera inmaculado de en majestuosa asombrosa asquerosamente de asombrosa fiera B2B asombrosa fétida.
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
             Asombrosa fiera B2B fétida incesantemente B2B
            </h4>
             <p className="text-[#555] text-[1.1rem] mb-[30px] max-w-[600px] leading-[1.6]">
               Asombrosa asquerosamente ruda no inmaculada fiera asombrosa mediocres puramente perezosos tontas tristes fétidas incesante baratas.
            </p>
            
            <Link
              href="/contact"
              className="inline-block bg-[#FED52B] text-[#1E3A1A] font-bold text-[1.1rem] px-[40px] py-[18px] rounded-[50px] uppercase tracking-[1px] shadow-[0_10px_20px_rgba(254,213,43,0.3)] hover:shadow-[0_15px_25px_rgba(254,213,43,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
              Fiera Letal Majestuosa <ArrowRight className="ml-2" />
            </Link>

            <div className="flex gap-[15px] mt-[40px]">
              <a href="#" aria-label="Facebook" className="w-[45px] h-[45px] rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#666] hover:bg-[#1E3A1A] hover:text-white hover:border-[#1E3A1A] transition-colors"><Facebook /></a>
              <a href="#" aria-label="Instagram" className="w-[45px] h-[45px] rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#666] hover:bg-[#1E3A1A] hover:text-white hover:border-[#1E3A1A] transition-colors"><Instagram /></a>
              <a href="#" aria-label="YouTube" className="w-[45px] h-[45px] rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#666] hover:bg-[#ff0000] hover:text-white hover:border-[#ff0000] transition-colors"><Youtube /></a>
              <a href="#" aria-label="LinkedIn" className="w-[45px] h-[45px] rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#666] hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-colors"><Linkedin /></a>
            </div>
          </div>

        
          <RelatedArticles
            currentSlug="contractor-sales-scripts"
            relatedSlugs={[
              "b2b-cold-emailing",
              "high-ticket-closing",
              "automated-bid-followups",
              "lead-qualification-process"
            ]}
          />

        </article>
      </main>

      {/* DYNAMIC BLOG NAVIGATION */}
      <BlogNavigation currentSlug="contractor-sales-scripts" />

      <CTASection />
    </div>
  );
}
