import React from "react";
import CTASection from "@/components/seo/CTASection";
import Link from "next/link";
import Image from "next/image";
import BlogNavigation from "@/components/blog/BlogNavigation";
import RelatedArticles from "@/components/blog/RelatedArticles";
import { PenTool, Target, Crosshair, AlertTriangle, Check, ArrowRight, Facebook, Instagram, Youtube, Linkedin, TrendingUp, Shield, FileText } from 'lucide-react';

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
              <PenTool className="w-4 h-4" /> Copywriting Letal B2B
            </span>
          </div>
          <h1 className="text-[2.2rem] md:text-[3.5rem] font-[Oswald] font-extrabold uppercase leading-[1.15] tracking-[0.5px] mb-[30px] text-[#ffffff] drop-shadow-lg">
            Deja de Escribir Como Principiante: Por Qué el "Relleno" Corporativo Destruye Tus Contratos de $30M 
          </h1>
          <div className="flex items-center justify-center gap-[20px] text-[0.95rem] font-medium text-[#c0c0c0]">
             <span className="flex items-center gap-[6px]">
              <Target className="text-[#FED52B] text-[0.85rem]" />
              <span className="text-white font-semibold">Lemonade Ideas</span>
            </span>
            <span className="text-[#666]">|</span>
            <span className="flex items-center gap-[8px]">
              <FileText className="text-[1.1em] text-[#FED52B]" />
              <span className="text-white">9 de Abril, 2026</span>
            </span>
            <span className="text-[#666] hidden md:inline">|</span>
            <span className="hidden md:flex items-center gap-[8px]">
              <TrendingUp className="text-[1.1em] text-[#FED52B]" />
              <span className="text-white">16 min de lectura</span>
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
              A los desarrolladores comerciales que buscan adjudicar contratos agresivos de 30 millones de dólares NO les importan tus "valores familiares", tu "pasión por construir" o tu "compromiso con la excelencia". Todos los contratistas aficionados usan esa misma retórica aburrida. A ellos les importa tu capacidad inquebrantable de emisión de fianzas, tu calificación de seguridad EMR y tu estricto cumplimiento municipal. Si el B2B website copywriting de tu web no ejecuta al instante este lenguaje financiero, perderás toda credibilidad institucional en el segundo que aterricen en tu página.
            </p>
          </div>

          <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
             <Image
                src="/images/blogs/b2b-website-copywriting/hero.png"
                alt="Una tableta de lujo mostrando en inglés un escrito corporativo impecable frente a una obra gigante."
                title="El Vocabulario Ejecutivo"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

          <div className="prose prose-lg max-w-none text-[#444] text-justify prose-headings:font-['Oswald',sans-serif] prose-p:text-[1.1rem] prose-p:leading-[1.8] prose-p:mb-[30px] prose-a:text-[#3AAB43] hover:prose-a:text-[#1E3A1A] prose-strong:text-[#1E3A1A] prose-strong:font-bold prose-ul:list-none prose-ul:pl-0 prose-li:relative prose-li:pl-[28px] prose-li:mb-[15px]">
            
            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-8 mb-6 uppercase tracking-wide">
              El Lenguaje de un Contratista de $50 Millones
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              El copywriting élite B2B opera en un plano psicológico diametralmente distinto al marketing residencial de consumo masivo. El dueño de casa remodelando su cocina busca tranquilidad estética. El director de capital privado financiando 20,000 metros de parque logístico busca <strong>mitigación extrema de riesgo</strong>. Punto.
            </p>

            <p>
              Cuando un inversor lee tu web, su monólogo interno es brutal: "¿Este contratista es lo suficientemente competente para ejecutar este plano sin meter a nuestra firma en una demanda legal, elevar los costos u olvidarse del cronograma?" 
            </p>

            <p>
              Si tu titular dice: <em>"Construimos hermosos espacios que amará para toda la vida,"</em> has demostrado automáticamente que juegas en las ligas menores de la construcción.
            </p>

            <div className="bg-[#fff5f5] p-[30px] rounded-[16px] mb-[40px] relative overflow-hidden group border border-[#ffebeb]">
               <AlertTriangle className="absolute top-[-20%] right-[-10%] text-[10rem] text-[#ff0000] opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500" />
               <h4 className="text-[#d32f2f] font-bold mb-[15px] relative z-10 flex items-center gap-3 text-xl">
                 <Crosshair /> La Trampa Mortal de la Inteligencia Artificial Básica
               </h4>
                <p className="relative z-10 m-0 text-[#555]">
                 Existe una epidemia de dueños de constructoras generando textos desde correos gratuitos de ChatGPT. Los inversores huelen esa copia robótica al instante. Si ven cosas como "En el dinámico mundo moderno de la construcción..." destruyes tu autoridad institucional frente a sus ojos. Demuestra una falta de postura ejecutiva original e incapacidad de invertir en un sistema de reclutamiento serio de prospectos. 
               </p>
             </div>

            <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
             <Image
                src="/images/blogs/b2b-website-copywriting/image-1.png"
                alt="Un ejecuvito rayando un guion malo de copia corporativa."
                title="Erradicando El Relleno"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>
            
            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-12 mb-6 uppercase tracking-wide">
              El Vocabulario de Compra Élite
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              Para dominar la generación de leads mediante el B2B website copywriting, tu texto debe utilizar sin piedad el léxico del que hablan las municipalidades.
            </p>

            <ul>
               <li>
                 <Check className="text-[#3AAB43] absolute left-0 top-[6px]" />
                 <strong>Seguridad Integral y EMR:</strong> No digas "La seguridad nos importa". Demuestra: "Nuestro EMR calificado en 0.65 otorga a su mesa directiva reducciones agresivas en la póliza general del proyecto."
              </li>
              <li>
                 <Check className="text-[#3AAB43] absolute left-0 top-[6px]" />
                  <strong>Ingeniería de Valor:</strong> Dile adiós a "Ahorramos dinero". Implanta esto: "Desplegamos una implacable re-ingeniería previa al contrato para reducir históricamente un 14% de las fallas arquitectónicas bases."
              </li>
               <li>
                 <Check className="text-[#3AAB43] absolute left-0 top-[6px]" />
                  <strong>Auditorías Implacables:</strong> "Ejecutamos en base fiera hacia los códigos y auditorías de obras, insulando por completo su capital matriz ante el Titulo III y las leyes municipales americanas."
              </li>
            </ul>

            <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
             <Image
                src="/images/blogs/b2b-website-copywriting/image-2.png"
                alt="Un alto ejecutivo mirando el estricto EMR test en inglés en su laptop mate."
                title="Métricas en Boardrooms"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-12 mb-6 uppercase tracking-wide">
              El Filtro Psicológico: Arma Letal
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              Hacer copywriting comercial <strong>se trata fundamentalmente de alienar intencionalmente.</strong> Si construyes parques de clase AAA, tus palabras deben repudiar y asustar inmediatamente al minúsculo negociante que busca remodelar una tiendita residencial.
            </p>

            <p>
              Tus encabezados son el portero élite que resguarda tus licitaciones. Filtrar fuertemente a clientes basura demuestra a los grandes magnates de clase A que operan exlusivamente en su liga de titanes.
            </p>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-12 mb-6 uppercase tracking-wide">
              Despliegue del "Sentry Tone" 
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              En Lemonade Ideas, operamos con una armadura discursiva que hemos nombrado el "Sentry Tone". Un estilo increíblemente oscuro, hiper-competente y extremadamente profesional que extermina adjetivos bonitos y dispara exclusivamente verbos duros, métricas asombrosas e institucionalidad militar.
            </p>

            <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
             <Image
                src="/images/blogs/b2b-website-copywriting/image-3.png"
                alt="Smartphone sobre vigas de acero mostrando el copiado de élite en inglés."
                title="Autoridad Digital B2B"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-12 mb-6 uppercase tracking-wide">
              Erradica la Extrema Debilidad de Tu Web
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              Mire su página de inmediato. Si parece ser un anuncio amigable, está activamente derramando millones en capital privado de inversiones.
            </p>

            <p>
              Imponga un copywriting corporativo implacable. Cancele frases genéricas y exija lenguaje institucional. Comande el gasoducto comercial millonario americano y no se conforme jamás.
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
             Comuníquese y Negocie en el Nivel 8 Cifras
            </h4>
             <p className="text-[#555] text-[1.1rem] mb-[30px] max-w-[600px] leading-[1.6]">
               Elimine el vocabulario que atrae prospectos residenciales inútiles. Lemonade Ideas inyecta en todo su esqueleto el Sentry Tone definitivo para aterrorizar operativamente a toda su competencia local.
            </p>
            
            <Link
              href="/contact"
              className="inline-block bg-[#FED52B] text-[#1E3A1A] font-bold text-[1.1rem] px-[40px] py-[18px] rounded-[50px] uppercase tracking-[1px] shadow-[0_10px_20px_rgba(254,213,43,0.3)] hover:shadow-[0_15px_25px_rgba(254,213,43,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
              Desplegar Copy Letal <ArrowRight className="ml-2" />
            </Link>

          </div>
        
          <RelatedArticles
            currentSlug="b2b-website-copywriting"
            relatedSlugs={[
              "blueprint-web-design",
              "commercial-bid-writing",
              "inbound-marketing-commercial-contractors",
              "construction-lead-magnets"
            ]}
          />

        </article>
      </main>

      {/* DYNAMIC BLOG NAVIGATION */}
      <BlogNavigation currentSlug="b2b-website-copywriting" />

      <CTASection />
    </div>
  );
}
