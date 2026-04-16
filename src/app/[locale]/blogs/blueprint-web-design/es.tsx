import React from "react";
import CTASection from "@/components/seo/CTASection";
import Link from "next/link";
import Image from "next/image";
import BlogNavigation from "@/components/blog/BlogNavigation";
import RelatedArticles from "@/components/blog/RelatedArticles";
import { PenTool, Target, Layers, AlertTriangle, Check, ArrowRight, Facebook, Instagram, Youtube, Linkedin, TrendingUp, Shield, DraftingCompass } from 'lucide-react';

export default function BlogPost() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-['Poppins',sans-serif]">
      
      {/* 1. High-Impact Hero Section */}
      <section className="bg-[#1A1A1A] relative pt-[120px] pb-[80px] md:pt-[160px] md:pb-[100px] text-center px-4 md:px-[20px] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[150%] bg-[#3AAB43] blur-[120px] rounded-full rotate-45"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[120%] bg-[#FED52B] blur-[150px] rounded-full"></div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1000px]">
          <div className="inline-block mb-[20px] px-[15px] py-[6px] bg-[#3AAB43]/20 border border-[#3AAB43]/30 rounded-full">
            <span className="text-[#3AAB43] font-bold text-[0.85rem] tracking-[1px] uppercase flex items-center gap-2">
              <DraftingCompass className="w-4 h-4" /> Ingeniería Digital Estructural
            </span>
          </div>
          <h1 className="text-[2.2rem] md:text-[3.5rem] font-[Oswald] font-extrabold uppercase leading-[1.15] tracking-[0.5px] mb-[30px] text-[#ffffff] drop-shadow-lg">
            Blueprint Web Design: Por Qué una Constructora de $50M No Sobrevive con un Sitio Web de $500
          </h1>
          <div className="flex items-center justify-center gap-[20px] text-[0.95rem] font-medium text-[#c0c0c0]">
             <span className="flex items-center gap-[6px]">
              <Target className="text-[#FED52B] text-[0.85rem]" />
              <span className="text-white font-semibold">Lemonade Ideas</span>
            </span>
            <span className="text-[#666]">|</span>
            <span className="flex items-center gap-[8px]">
              <Layers className="text-[1.1em] text-[#FED52B]" />
              <span className="text-white">9 de Abril, 2026</span>
            </span>
            <span className="text-[#666] hidden md:inline">|</span>
            <span className="hidden md:flex items-center gap-[8px]">
              <TrendingUp className="text-[1.1em] text-[#FED52B]" />
              <span className="text-white">12 min de lectura</span>
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
              El diseño web comercial élite no es un mero ejercicio estético o gráfico; es un plano arquitectónico. Una superestructura de concreto de 50 pisos construida sobre un modelo CAD defectuoso colapsará inevitablemente. Esa misma física exacta aplica a su infraestructura digital corporativa. Si el sitio web de un contratista carece de flujos de interfaz agresivos, velocidades sub-milisegundo Next.js y un modelo de datos institucional a prueba de balas, toda su tubería orgánica de $50M colapsa en la primera interacción ejecutiva. Usted no necesita "renovar su web" con un estudiante de arte. Necesita ingeniería estructural digital de especialistas industriales.
            </p>
          </div>

          <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
             <Image
                src="/images/blogs/blueprint-web-design/hero.png"
                alt="Mesa de dibujo de lujo con planos arquitectónicos mezclándose con wireframes de UX/UI digitales."
                title="La Mesa de Diseño Digital"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

          <div className="prose prose-lg max-w-none text-[#444] text-justify prose-headings:font-['Oswald',sans-serif] prose-p:text-[1.1rem] prose-p:leading-[1.8] prose-p:mb-[30px] prose-a:text-[#3AAB43] hover:prose-a:text-[#1E3A1A] prose-strong:text-[#1E3A1A] prose-strong:font-bold prose-ul:list-none prose-ul:pl-0 prose-li:relative prose-li:pl-[28px] prose-li:mb-[15px]">
            
            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-8 mb-6 uppercase tracking-wide">
              La Estética de la Competencia Absoluta
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              Cuando un grupo de capital privado o un planificador municipal analiza su sitio web, no buscan ser entretenidos. Están ejecutando la debida diligencia sobre un gigantesco despliegue de capital. Están buscando razones para descalificarlo. La forma más rápida de ser eliminado es presentar un modelo web que parece diseñado por una planilla de $20.
            </p>

            <p>
              Su presencia digital debe emitir un aura de competencia brutal. Absolutamente cada detalle estructural —desde la jerarquía topográfica hasta cómo exponen sus pólizas de capacidad de unión— debe sentirse perfectamente diseñado. No se trata de "verse bonito"; se trata de proyectar un costo irreprochablemente caro y una organización asombrosamente militar.
            </p>

            <div className="bg-[#fff5f5] p-[30px] rounded-[16px] mb-[40px] relative overflow-hidden group border border-[#ffebeb]">
               <AlertTriangle className="absolute top-[-20%] right-[-10%] text-[10rem] text-[#ff0000] opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500" />
               <h4 className="text-[#d32f2f] font-bold mb-[15px] relative z-10 flex items-center gap-3 text-xl">
                 <DraftingCompass /> El Desastre de Plantillas "Arrastrar y Soltar"
               </h4>
                <p className="relative z-10 m-0 text-[#555]">
                 Usar Wix, temas baratos de WordPress o maquetadores arrastrar y soltar, es el equivalente en el diseño web corporativo a amarrar columnas maestras con bridas de plástico. El código resultante es tan obeso que despedaza toda la experiencia móvil. Cuando un gestor de activos experimenta desbordamientos de texto en su iPhone, instantáneamente asume que sus estándares en la obra también son paupérrimos.
               </p>
             </div>

            <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
             <Image
                src="/images/blogs/blueprint-web-design/image-1.png"
                alt="Constructor web barato generando error en una laptop antigua en un desastre organizativo."
                title="El Costo de las Plantillas Obesas"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>
            
            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-12 mb-6 uppercase tracking-wide">
              UI/UX Como Paredes de Carga Master
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              El Blueprint Web Design postula a la Interfaz de Usuario (UI) y su correspondendiente Experiencia (UX) como verdaderas paredes primarias de carga. Si un inversionista demorara 3 clics o más en ubicar el reporte EMR de calidad o sus logros financieros, la pared maestra colapsará bajo fricción y los clientes rebotarán fuera del dominio.
            </p>

            <ul>
               <li>
                 <Check className="text-[#3AAB43] absolute left-0 top-[6px]" />
                 <strong>Navegación Intimidante:</strong> Reestructuremos por completo sus menús. Elimine jerga barata como "Lo Que Hacemos" e impóngalos frente a "Logística y Capacidades Comerciales Élites".
              </li>
              <li>
                 <Check className="text-[#3AAB43] absolute left-0 top-[6px]" />
                  <strong>Imposición de Datos Fieros:</strong> No force ejecutivos canosísimos a navegar por bloques inmensos de texto corporativo. Convierta su experiencia masiva en gráficas financieras programadas dinámicamente.
              </li>
               <li>
                 <Check className="text-[#3AAB43] absolute left-0 top-[6px]" />
                  <strong>Librería de Cero Fricción:</strong> Lemonade Ideas introduce sus propios protocolos Next.js sobre infraestructura Vercel inyectando un rendimiento que destruirá la métrica de tiempos de la oposición por completo.
              </li>
            </ul>

            <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
             <Image
                src="/images/blogs/blueprint-web-design/image-2.png"
                alt="Ingeniero comercial en casco amarillo analizando infraestructuras digitales operadas desde una tablet."
                title="Ingeniería de Portales Digitales"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-12 mb-6 uppercase tracking-wide">
              Mecanismo Lemonade: Sentry Tone Codificado
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              En Lemonade, rechazamos frontalmente delegar el desarrollo clave a equipos artísticos que jamás comprenderán la dureza o exigencia de los magnates de la industria civil. Exigimos operaciones comandadas por arquitecturas modulares codificando explícitamente el mandato definitivo: autoridad, logística implacable e indexación destructora. Esta materialización del Sentry Tone asegura posicionamiento dominante.
            </p>

            <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
             <Image
                src="/images/blogs/blueprint-web-design/image-3.png"
                alt="Malla estructural de vigas soportando una pantalla con codificación en vivo implacable."
                title="Sinopsis de Acero y Código Matrix"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-12 mb-6 uppercase tracking-wide">
              Demoledor de Estructuras Defectuosas
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              Simplemente es inaceptable correr y ejecutar márgenes de ganancia anual de $50M sobre bases digitales con valor menor a $500. El esqueleto decrépito de la antigua web corporativa de su marca arruina brutalmente su ratio de éxito frente a los altos inversores del primer ciclo de vida corporativo de su gasoducto de leads.
            </p>

            <p>
              Derribe su vieja plataforma disfuncional. Levante una fortaleza. Inicie la operación para ejecutar un volumen de conversiones capaz de reestructurar y aplastar el ecosistema completo de sus competidores a corto, medio y largo espectro.
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
             Arme Sus Sistemas Computacionales Hoy
            </h4>
             <p className="text-[#555] text-[1.1rem] mb-[30px] max-w-[600px] leading-[1.6]">
               Ponga fin total la sangría interminable de credibilidad de su empresa de construcción. Lemonade Ideas domina la ingeniería comercial web con Next.js e internacionalización dual para crear un leviatán SEO altamente optimizado.
            </p>
            
            <Link
              href="/contact"
              className="inline-block bg-[#FED52B] text-[#1E3A1A] font-bold text-[1.1rem] px-[40px] py-[18px] rounded-[50px] uppercase tracking-[1px] shadow-[0_10px_20px_rgba(254,213,43,0.3)] hover:shadow-[0_15px_25px_rgba(254,213,43,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
              Iniciar Ejecución de Código <ArrowRight className="ml-2" />
            </Link>

          </div>
        
          <RelatedArticles
            currentSlug="blueprint-web-design"
            relatedSlugs={[
              "mobile-first-contractors-guide",
              "fast-loading-sites",
              "b2b-website-copywriting",
              "lead-capture-forms"
            ]}
          />

        </article>
      </main>

      {/* DYNAMIC BLOG NAVIGATION */}
      <BlogNavigation currentSlug="blueprint-web-design" />

      <CTASection />
    </div>
  );
}
