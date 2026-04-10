import React from "react";
import CTASection from "@/components/seo/CTASection";
import Link from "next/link";
import Image from "next/image";
import BlogNavigation from "@/components/blog/BlogNavigation";
import { Zap, Calendar, Clock, Check, ArrowRight, Facebook, Instagram, Youtube, Linkedin, HardHat, Cpu } from 'lucide-react';

export default function BlogPostEs() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-['Poppins',sans-serif]">
      
      {/* 1. High-Impact Hero Section */}
      <section className="bg-[#2A2A2A] relative pt-[120px] pb-[80px] md:pt-[160px] md:pb-[100px] text-center px-4 md:px-[20px] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[150%] bg-[#FED52B] blur-[120px] rounded-full rotate-45"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[120%] bg-[#3AAB43] blur-[150px] rounded-full"></div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1000px]">
          <div className="inline-block mb-[20px] px-[15px] py-[6px] bg-[#FED52B]/20 border border-[#FED52B]/30 rounded-full">
            <span className="text-[#FED52B] font-bold text-[0.85rem] tracking-[1px] uppercase flex items-center gap-2">
              <HardHat className="w-4 h-4" /> Guerra por Adquisición de Talento
            </span>
          </div>
          <h1 className="text-[2.2rem] md:text-[3.5rem] font-[Oswald] font-extrabold uppercase leading-[1.15] tracking-[0.5px] mb-[30px] text-[#ffffff] drop-shadow-lg">
            Un Récord de $50M en Proyectos No Sirve Si Careces de la Fuerza Laboral de Élite para Ejecutarlo.
          </h1>
          <div className="flex items-center justify-center gap-[20px] text-[0.95rem] font-medium text-[#c0c0c0]">
             <span className="flex items-center gap-[6px]">
              <Zap className="text-[#FED52B] text-[0.85rem]" />
              <span className="text-white font-semibold">Lemonade Ideas</span>
            </span>
            <span className="text-[#666]">|</span>
            <span className="flex items-center gap-[8px]">
              <Calendar className="text-[1.1em] text-[#FED52B]" />
              <span className="text-white">8 de Abril, 2026</span>
            </span>
            <span className="text-[#666] hidden md:inline">|</span>
            <span className="hidden md:flex items-center gap-[8px]">
              <Clock className="text-[1.1em] text-[#FED52B]" />
              <span className="text-white">Lectura de 14 min</span>
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
              En el despiadado mercado de la construcción comercial de California, las métricas de vanidad corporativa no valen absolutamente un centavo si físicamente no posees el capital humano de choque requerido para erigir la estructura. Maestros electricistas, gerentes de proyectos senior y operadores de maquinaria pesada de élite en Los Ángeles y San Francisco son una anomalía en peligro de extinción. Ellos no definen dónde trabajar guiados por un ridículo aumento de dos dólares; su decisión fluye al rastrear instintivamente la dominancia corporativa y la incuestionable estabilidad operativa. Si tu pestaña de &quot;Carreras&quot; evoca la pobreza gráfica de un ridículo portal genérico de WordPress del año 2012, tu corporación sangra debilidad por cada pixel. El Employer Branding (Marca Empleadora) jamás debe considerarse una métrica de &quot;Recursos Humanos&quot;. El Employer Branding es artillería bélica diseñada estratégicamente para drenar agresivamente el top 1% de talento de tus rivales y atornillarlos bajo contrato en tu monopolio institucional.
            </p>
          </div>

          <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
             <Image
                src="/images/blogs/employer-branding-ca/hero.png"
                alt="Escena cinemática de obreros de élite aproximándose a un mega sitio de obra en California"
                title="La Unidad de Tareas de Élite"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

          <div className="prose prose-lg max-w-none text-[#444] text-justify prose-headings:font-['Oswald',sans-serif] prose-p:text-[1.1rem] prose-p:leading-[1.8] prose-p:mb-[30px] prose-a:text-[#3AAB43] hover:prose-a:text-[#1E3A1A] prose-strong:text-[#1E3A1A] prose-strong:font-bold prose-ul:list-none prose-ul:pl-0 prose-li:relative prose-li:pl-[28px] prose-li:mb-[15px]">
            
            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-8 mb-6 uppercase tracking-wide">
              La Paradoja del Embudo Corporativo
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              California padece en este mismo segundo el déficit de capital físico de obra y logística operativa más brutal y trémulo del siglo XXI. El Estado inyecta desenfrenadamente miles de millones hacia nuevas obras cívicas, rascacielos y hospitales; no obstante, el recurso muscular indispensable capacitado para verter, armar, soldar y conectar la infraestructura está jubilándose masivamente, sin recambios formidables a la vista. 
            </p>

            <p>
              Tus ejecutivos proyectan maravillas matemáticas para adjudicar la construcción clínica de $40M, sumidos bajo una alarmante disonancia cognitiva, ciegos a que actualmente tus propios superintendentes laboran con las capacidades rebasadas. Si no ostentas la superioridad de recursos para cazar agresivamente personal capacitado a una velocidad superior a la competencia, cada licitación aprobada representa un pasivo mortal tóxico sobre los hombros del balance general.
            </p>

            <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
             <Image
                src="/images/blogs/employer-branding-ca/deficit.png"
                alt="Formulario de empleo anticuado impreso sobre escritorio con un casco agrietado barato simbolizando la decadencia de recursos humanos"
                title="La Muerte De RH Anticuados"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-12 mb-6 uppercase tracking-wide">
              La Defunción de los Rótulos &quot;Estamos Contratando&quot;
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              Si tu departamento de captación asume que subir tediosas páginas saturadas de descripciones vagas al portal de Indeed, o amarrar pasajes plásticos decolorados con la inscripción rudimentaria &quot;Solicitamos Supervisores&quot; funcionará, permíteme aclararlo: Estás saboteando el prestigio absoluto de la firma. 
            </p>

            <p>
              Simulas decadencia extrema, proyectas pura desesperación al público. El activo dominante real—los líderes alfa que transitan junto a su propia flotilla élite indomable de cinco hombres bajo su tutela—ignoran los portales ordinarios de la base inferior. Ellos portan empleos vigentes, gozando sueldos titánicos en la constructora enemiga de la esquina. Reclutarlos exige ingeniar atmósferas envolventes de hostil impacto estético capaz de hacer lucir la empresa donde actualmente laboran como una piragua moribunda hundiéndose hacia un final sin remedio.
            </p>

            <div className="bg-[#fff9e6] border-l-[5px] border-[#FED52B] p-[25px] rounded-r-[12px] mb-[40px] shadow-sm">
                <div className="flex items-start gap-[15px]">
                <div className="bg-[#FED52B]/20 p-[10px] rounded-full mt-1">
                  <Cpu className="text-[#d4ad00] text-[1.2rem]" />
                </div>
                <div>
                  <h4 className="text-[#1E3A1A] font-bold text-[1.1rem] m-0 mb-[5px]">La Dominancia Visual es Moneda de Cambio</h4>
                   <p className="m-0 text-[#555] text-[0.95rem] leading-[1.6]">
                    Todo material algorítmico, y huella cinemática con rango súper premium persuade indiscutiblemente al capataz veterano de veinte años en asumir y asimilar tu constructora como el innegable e inevitable salto evolutivo en el sector de la ciudad.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-12 mb-6 uppercase tracking-wide">
              El Sistema Inquebrantable de Reclutamiento Bilingüe Sin Fricción
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              La savia viviente que irriga el corazón motor del mercado constructivo en California recae inexorablemente en la cuadrilla Hispana operativa. Ignorar este dato te anula. Lamentablemente el 90% de la casta industrial empuja estúpidamente a su personal hacia infames procesos herméticos englobados en archivos obsoletos en formato PDF de nula interconectividad celular codificados exclusivamente en habla sajona antigua carente de semántica.
            </p>

            <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
             <Image
                src="/images/blogs/employer-branding-ca/attraction.png"
                alt="Portal corporativo de captación tecnológica visto en tablet moderna operada por especialista en el sitio"
                title="Captura Técnica Cero Fricción"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

            <p>
              Estás lapidando las virtudes biológicas superiores que ofrece el estado simplemente porque consientes operar atado a un software deficiente. Desde Lemonade Ideas exterminamos estos muros transaccionales logísticos de golpe de tajo. Arquitecturamos localizados espacios innegablemente inmutables sobre el armazón implacable que ofrece el formato Next.js facultando la incorporación orgánica directa y bilingüe ultra fluida facilitando que un capataz transmita la data desde sus unidades móviles bajo cero cuellos de botella de renderizado.
            </p>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-12 mb-6 uppercase tracking-wide">
               El Manifiesto de Cultura Corporativa Sentry
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              Implementamos sobre tu matriz institucional la logística y blindaje &quot;Sentry.&quot; Destripamos tu portal web obsoleto extirpando cualquier basura visual. Erradicamos imágenes gratuitas e infames de ejecutivos figurativos sonriendo junto a planos vacíos. Disparamos material propio inexpugnable, glorificando la figura del personal con capturas cinemáticas que dominan el entorno arquitectónico de tus proyectos urbanos logrados.
            </p>

            <ul>
               <li>
                 <Check className="text-[#3AAB43] absolute left-0 top-[6px]" />
                 <strong>Dominancia Óptica Dictatorial:</strong> Retratos majestuosos súper definidos exaltando las figuras rectoras del proyecto inyectando poder, autoridad y disciplina marcial corporativa total a tu nombre.
              </li>
              <li>
                 <Check className="text-[#3AAB43] absolute left-0 top-[6px]" />
                  <strong>Reclutamiento Algorítmico Cero Latencia:</strong> Las interfaces de captura se anclan desde teléfonos operarios rebotando datos con tiempos marginales milimétricos calibrados óptimamente hacia portales RH bilingües.
              </li>
               <li>
                 <Check className="text-[#3AAB43] absolute left-0 top-[6px]" />
                  <strong>Hostilidad y Guerra Psicológica Táctica:</strong> Rediseñamos tu ciberespacio hacia confines del perfeccionismo provocando pánico absoluto a tus contadores competidores ante la migración agresiva inevitable en tránsito inminente a suceder.
              </li>
            </ul>

            <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
             <Image
                src="/images/blogs/employer-branding-ca/culture.png"
                alt="Fotografía seria de capataz experto controlando rascacielos al fondo destilando supremacía de construcción"
                title="El Código Cultural Sentry"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-12 mb-6 uppercase tracking-wide">
              El Decreto &quot;Sentry&quot;: Ingeniera El Monopolio Perfecto
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              Deja incondicionalmente de administrar departamentos frágiles de recursos humanos. Dedícate frontalmente al genocidio corporativo al ingeniar e implementar monolitos hegemónicos sobre el factor humano elite territorial. En terrenos colapsados de tanta restricción física operativa local, gozará de superioridad infinita y dominará férreamente aquel bando que posea a las mentes dominantes empuñando grúas. Disuelve en fuego todos esos abismos e inútiles folletos RH al vacío. Requieres un macro sistema de alto octanaje capturando sin cesar al recurso. Asegura cada pieza, sepulta a los rezagados y domina.
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
             Orquesta Tu Máquina Dominante de Caza Talento
            </h4>
             <p className="text-[#555] text-[1.1rem] mb-[30px] max-w-[600px] leading-[1.6]">
               Lemonade Ideas implementa sólidas y exclusivas plataformas digitales de rápida injerencia y codificación bilingüe nativa para mutar pasivos e inestables servidores institucionales en colosales máquinas de retención adictiva corporativa gravitacional.
            </p>
            
            <Link
              href="/es/contact"
              className="inline-block bg-[#FED52B] text-[#1E3A1A] font-bold text-[1.1rem] px-[40px] py-[18px] rounded-[50px] uppercase tracking-[1px] shadow-[0_10px_20px_rgba(254,213,43,0.3)] hover:shadow-[0_15px_25px_rgba(254,213,43,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
              Dominar el Reclutamiento de Élite <ArrowRight className="ml-2" />
            </Link>

            <div className="flex gap-[15px] mt-[40px]">
              <a href="#" className="w-[45px] h-[45px] rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#666] hover:bg-[#1E3A1A] hover:text-white hover:border-[#1E3A1A] transition-colors"><Facebook /></a>
              <a href="#" className="w-[45px] h-[45px] rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#666] hover:bg-[#1E3A1A] hover:text-white hover:border-[#1E3A1A] transition-colors"><Instagram /></a>
              <a href="#" className="w-[45px] h-[45px] rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#666] hover:bg-[#ff0000] hover:text-white hover:border-[#ff0000] transition-colors"><Youtube /></a>
              <a href="#" className="w-[45px] h-[45px] rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#666] hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-colors"><Linkedin /></a>
            </div>
          </div>

        </article>
      </main>

      {/* DYNAMIC BLOG NAVIGATION */}
      <BlogNavigation currentSlug="employer-branding-ca" />

      <CTASection />
    </div>
  );
}
