/* eslint-disable react/no-unescaped-entities */
import React from "react";
import CTASection from "@/components/seo/CTASection";
import Link from "next/link";
import Image from "next/image";
import BlogNavigation from "@/components/blog/BlogNavigation";
import { Smartphone, Target, AlertTriangle, Check, ArrowRight, Facebook, Instagram, Youtube, Linkedin, BarChart4, DollarSign, ShieldCheck, Gauge, MonitorSmartphone } from 'lucide-react';

export default function EsBlog() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-['Poppins',sans-serif]">
      
      <section className="bg-[#1A1A1A] relative pt-[120px] pb-[80px] md:pt-[160px] md:pb-[100px] text-center px-4 md:px-[20px] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[150%] bg-[#3AAB43] blur-[120px] rounded-full rotate-45"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[120%] bg-[#FED52B] blur-[150px] rounded-full"></div>
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[1000px]">
          <div className="inline-block mb-[20px] px-[15px] py-[6px] bg-[#3AAB43]/20 border border-[#3AAB43]/30 rounded-full">
            <span className="text-[#3AAB43] font-bold text-[0.85rem] tracking-[1px] uppercase flex items-center gap-2">
              <Smartphone className="w-4 h-4" /> Guía Mobile First para Contratistas
            </span>
          </div>
          <h1 className="text-[2.2rem] md:text-[3.5rem] font-[Oswald] font-extrabold uppercase leading-[1.15] tracking-[0.5px] mb-[30px] text-[#ffffff] drop-shadow-lg">
            Contratistas Mobile First: La Prueba Aprobado/Reprobado No Dicha para Licitaciones de $10M+
          </h1>
          <div className="flex items-center justify-center gap-[20px] text-[0.95rem] font-medium text-[#c0c0c0]">
            <span className="flex items-center gap-[6px]"><Target className="text-[#FED52B] text-[0.85rem]" /><span className="text-white font-semibold">Lemonade Ideas</span></span>
            <span className="text-[#666]">|</span>
            <span className="flex items-center gap-[8px]"><DollarSign className="text-[1.1em] text-[#FED52B]" /><span className="text-white">8 de Abril, 2026</span></span>
            <span className="text-[#666] hidden md:inline">|</span>
            <span className="hidden md:flex items-center gap-[8px]"><BarChart4 className="text-[1.1em] text-[#FED52B]" /><span className="text-white">20 min de lectura</span></span>
          </div>
        </div>
      </section>

      <main className="flex-1 px-4 md:px-[20px] bg-[#fcfcfc]">
        <article className="max-w-[800px] mx-auto bg-white rounded-[24px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] mt-[-40px] relative z-20 pt-[50px] px-[20px] md:px-[60px] pb-[60px] text-[#333] leading-[1.8] border border-gray-100">
          
          <div className="bg-[#f9fff9] border-l-[6px] border-[#3AAB43] p-[30px] md:p-[40px] rounded-r-[16px] mb-[50px] shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[100px] h-[100px] bg-[#3AAB43] opacity-[0.03] rounded-bl-full transform translate-x-1/2 -translate-y-1/2 transition-transform duration-500 group-hover:scale-150"></div>
            <p className="text-[1.2rem] md:text-[1.35rem] text-[#1E3A1A] font-medium leading-[1.7] relative z-10 m-0 text-justify">
              Los desarrolladores de alto patrimonio neto no se sientan en computadoras de escritorio para investigar constructoras. Están en tránsito — en la parte trasera de autos ejecutivos de lujo, caminando sitios de obra activos con botas de acero, o escaneando propuestas en salas VIP de aeropuertos. Si tu sitio web se rompe en un iPhone 15 Pro, estás instantáneamente descalificado de contratos comerciales élite. Una arquitectura mobile-first ya no es una táctica de marketing; es la prueba psicológica definitiva de excelencia operacional.
            </p>
          </div>

          <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
            <Image src="/images/blogs/mobile-first-contractors-guide/hero.png" alt="Un desarrollador comercial adinerado sosteniendo un dispositivo móvil mostrando un sitio web de construcción premium con UX móvil impecable." title="Arquitectura Mobile First para Contratistas Comerciales Élite" fill priority className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

          <div className="prose prose-lg max-w-none text-[#444] text-justify prose-headings:font-['Oswald',sans-serif] prose-p:text-[1.1rem] prose-p:leading-[1.8] prose-p:mb-[30px] prose-a:text-[#3AAB43] hover:prose-a:text-[#1E3A1A] prose-strong:text-[#1E3A1A] prose-strong:font-bold prose-ul:list-none prose-ul:pl-0 prose-li:relative prose-li:pl-[28px] prose-li:mb-[15px]">
            
            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-8 mb-6 uppercase tracking-wide">
              La Realidad Brutal de los Tomadores de Decisiones Élite
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              Abordemos una certeza matemática que el 90% de los contratistas generales se niegan a reconocer: los desarrolladores comerciales, arquitectos, y compradores de casas personalizadas de alto patrimonio neto no se sientan en escritorios de roble para investigar tu empresa. El dispositivo que valida tu capacidad multimillonaria es un panel de vidrio de 6 pulgadas. Los propios datos de Google confirman que más del 68% de toda la investigación B2B comienza en un dispositivo móvil. En la vertical de construcción comercial específicamente, el tráfico móvil a sitios web de contratistas ha superado el 72% a partir del Q1 2026.
            </p>

            <p>
              Un sitio web "mobile-friendly" es un concepto arcaico de hace una década. Implica que tu sitio de escritorio se encoge de mala gana, aplastando layouts cuidadosamente diseñados en columnas ilegibles, elementos de navegación superpuestos, e imágenes que se desbordan fuera de pantalla. Las firmas contratistas élite orquestan una Arquitectura Mobile-First — una filosofía de ingeniería fundamentalmente diferente donde la experiencia digital se diseña específicamente desde cero para apuntar agresivamente al comportamiento del viewport móvil, explotando zonas de alcance del pulgar, tipografía de alto contraste, y tiempos de carga instantáneos sobre conexiones 5G estándar.
            </p>

            <p>
              La distinción entre "mobile-friendly" y "mobile-first" no es semántica — es arquitectónica. Un sitio mobile-friendly es un sitio de escritorio que ha sido retrofiteado para no romperse en pantallas más pequeñas. Un sitio mobile-first es una experiencia que nació en un viewport de 390px y luego fue progresivamente mejorada para pantallas más grandes. Las prioridades de ingeniería están completamente invertidas: rendimiento, interacción táctil, y accesibilidad de zona del pulgar son las restricciones fundacionales, no pensamientos tardíos.
            </p>

            <div className="bg-[#fff5f5] p-[30px] rounded-[16px] mb-[40px] relative overflow-hidden group border border-[#ffebeb]">
              <AlertTriangle className="absolute top-[-20%] right-[-10%] text-[10rem] text-[#ff0000] opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500" />
              <h4 className="text-[#d32f2f] font-bold mb-[15px] relative z-10 flex items-center gap-3 text-xl">
                <AlertTriangle /> El Protocolo de Descalificación de 3 Segundos
              </h4>
              <p className="relative z-10 m-0 text-[#555]">
                Si un desarrollador toca tu enlace en un iPhone y tiene que pellizcar para hacer zoom para leer tu declaración de capacidades, no solo has perdido su paciencia — has probado matemáticamente que tus estándares operativos son fundamentalmente inferiores. Los datos de Core Web Vitals de Google muestran que el 53% de los usuarios móviles abandonan un sitio que tarda más de 3 segundos en cargar. En construcción comercial, donde un solo visitante perdido podría representar una oportunidad de contrato de $15M, cada milisegundo de tiempo de carga es un riesgo de ingresos.
              </p>
            </div>

            <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
              <Image src="/images/blogs/mobile-first-contractors-guide/executive.png" alt="Un desarrollador comercial adinerado en un auto corporativo de lujo usando un iPhone para revisar el portafolio de una firma constructora." title="Desarrolladores Élite Revisan Portafolios en Tránsito" fill loading="lazy" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
            </div>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-12 mb-6 uppercase tracking-wide">
              Anatomía de un Foso Móvil de 7 Cifras
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              ¿Qué separa una plantilla genérica de contratista de un motor de cierre de alto valor? Se reduce a la fricción. La psicología de las compras B2B de lujo dicta que la competencia operativa se juzga por la competencia digital. Cuando un cliente potencial interactúa con tu sitio móvil, su subconsciente está mapeando tu fricción de UX directamente a cómo gestionarás su sitio de obra de $10M. Una experiencia móvil torpe comunica gestión de proyectos torpe. Una experiencia móvil impecable comunica precisión institucional.
            </p>

            <ul>
              <li>
                <Check className="text-[#3AAB43] absolute left-0 top-[6px]" />
                <strong>Jerarquía de Acción en Zona del Pulgar:</strong> Los botones "Obtener Presupuesto" o "Enviar RFP" no pueden estar ocultos dentro de un menú hamburguesa. Los sitios élite utilizan barras CTA inferiores fijas y persistentes posicionadas dentro de la zona natural de alcance del pulgar. Estudios en UX móvil demuestran que CTAs posicionados en la parte inferior reciben tasas de toque 22% más altas que los posicionados arriba.
              </li>
              <li>
                <Check className="text-[#3AAB43] absolute left-0 top-[6px]" />
                <strong>Escalado Tipográfico Brutalista:</strong> Los párrafos de escritorio son muros ilegibles de texto en móvil. Los sitios móviles de alta conversión reducen la longitud de los párrafos en 40%, inyectan encabezados masivos en negrita usando fuentes sans-serif modernas a valores rem altos (16px base mínimo), y aseguran cero fatiga ocular bajo luz solar intensa en sitios de obra activos.
              </li>
              <li>
                <Check className="text-[#3AAB43] absolute left-0 top-[6px]" />
                <strong>Carga de Fachada de Medios:</strong> Debes exhibir tu metraje de drones 4K de la más alta calidad y fotografía de proyectos. Sin embargo, renderizar un video de 20MB en una conexión 4G es suicidio digital. La ingeniería mobile-first intercepta esto utilizando fachadas de imagen WebP — imágenes comprimidas livianas de previsualización que activan la reproducción completa de video solo tras intención explícita del usuario.
              </li>
              <li>
                <Check className="text-[#3AAB43] absolute left-0 top-[6px]" />
                <strong>Optimización de Tipo de Input:</strong> Los formularios de contacto deben usar tipos de input HTML5 apropiados — `type="tel"` para campos telefónicos activando el teclado numérico, `type="email"` para campos de correo activando el teclado con @, e `inputmode="numeric"` para campos de presupuesto. Este único detalle de ingeniería elimina la fricción microscópica que causa millones en envíos de RFP abandonados anualmente.
              </li>
            </ul>

            <div className="bg-[#f0f9ff] border-l-[5px] border-[#0077b5] p-[30px] rounded-r-[12px] mb-[40px] shadow-sm">
              <div className="flex items-start gap-[15px]">
                <div className="bg-[#0077b5]/20 p-[10px] rounded-full mt-1">
                  <Gauge className="text-[#005582] text-[1.2rem]" />
                </div>
                <div>
                  <h4 className="text-[#1E3A1A] font-bold text-[1.2rem] m-0 mb-[5px]">Core Web Vitals: La Base Técnica</h4>
                  <p className="m-0 text-[#555] text-[1rem] leading-[1.6]">
                    Los Core Web Vitals de Google son las tres métricas de rendimiento medibles que determinan tu ranking móvil: LCP (Largest Contentful Paint) debe ser menor a 2.5 segundos, FID (First Input Delay) debe ser menor a 100ms, y CLS (Cumulative Layout Shift) debe ser menor a 0.1. Los sitios que fallan estos umbrales son algorítmicamente suprimidos en resultados de búsqueda móvil — significando que tus competidores que pasan estas pruebas aparecen encima de ti para cada búsqueda de "constructora comercial cerca de mí".
                  </p>
                </div>
              </div>
            </div>

            <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
              <Image src="/images/blogs/mobile-first-contractors-guide/tablet.png" alt="Un trabajador de construcción sosteniendo una tablet rugosa mostrando un dashboard digital de proyecto en un sitio de obra comercial activo." title="UX Mobile-First en Sitios de Obra Activos" fill loading="lazy" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
            </div>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-12 mb-6 uppercase tracking-wide">
              La Autopsia de un Sitio "Responsivo" Fallido
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              La mayoría de las empresas constructoras contratan una agencia que diseña un sitio web de escritorio hermoso, y luego hace clic en un botón en WordPress o Squarespace para "auto-escalarlo" para móvil. Esto es catastrófico. Los elementos simplemente se aplastan juntos como un colapso estructural. Los márgenes desaparecen. El texto se arrastra sobre las imágenes de fondo haciéndolo completamente ilegible. Los elementos de navegación se superponen.
            </p>

            <p>
              Peor aún, los formularios de contacto permanecen ingeniados para teclados de escritorio. Cuando un usuario intenta escribir su número de teléfono, aparece el teclado alfanumérico estándar en lugar del teclado numérico digital. Estas son líneas individuales de código HTML faltante que crean fricción microscópica. Colectivamente, durante un año de tráfico móvil, esta fricción invisible te cuesta millones en envíos de RFP abandonados de desarrolladores que silenciosamente se movieron al siguiente contratista en su pestaña del navegador.
            </p>

            <p>
              El problema de optimización de imágenes es igualmente devastador. Imágenes de resolución de escritorio (2000px+ de ancho, 2-5MB cada una) que se ven impresionantes en un display Retina se convierten en anclas de rendimiento en conexiones móviles. Una homepage con 6 imágenes no optimizadas puede tardar 15-20 segundos en renderizarse completamente en una conexión 4G estándar. Para ese momento, el desarrollador ya ha cerrado tu pestaña y está revisando el sitio de tu competidor, que cargó en 1.8 segundos porque invirtieron en compresión WebP, srcsets de imágenes responsivas, y lazy loading.
            </p>

            <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
              <Image src="/images/blogs/mobile-first-contractors-guide/boardroom.png" alt="Una reunión de sala de juntas de construcción comercial premium con ejecutivos revisando analíticas móviles en una pantalla grande." title="Revisión de Analíticas de Rendimiento Móvil" fill loading="lazy" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
            </div>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-12 mb-6 uppercase tracking-wide">
              La Velocidad Móvil es Prueba Operacional
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              Cuando un proyecto de expansión comercial de $15M está en juego, el ganador de la licitación raramente es el contratista más barato. Es la firma que exuda competencia estructural completa a través de cada punto de contacto. Una experiencia móvil ingeniada impecablemente comunica, sin una sola palabra dicha: "Comandamos los detalles, eliminamos la fricción, y nuestra infraestructura es moderna."
            </p>

            <p>
              Rehúsa dejar que tus competidores superen la ingeniería de tu presencia digital. Termina las plantillas amateurs "responsivas" que nunca fueron diseñadas para la vertical de construcción. Despliega una arquitectura mobile-first agresiva construida sobre principios de ingeniería performance-first: tiempos de carga sub-2-segundos, diseño de interacción optimizado para zona del pulgar, carga progresiva de imágenes, e ingeniería de formularios enfocada en conversión. Las firmas que dominan el rendimiento móvil hoy dominarán el panorama de búsqueda comercial durante años porque el algoritmo de Google recompensa cada vez más la calidad de la experiencia móvil como la señal de ranking primaria.
            </p>

          </div>

          <div className="mt-[80px] pt-[50px] border-t border-gray-100 flex flex-col items-center text-center">
            <div className="w-[138px] h-[138px] relative mb-[25px]">
              <Image src="/logos/Emblem/1x/Asset 7.png" alt="Emblema Lemonade Ideas" fill className="object-contain" />
            </div>
            <h4 className="text-[1.8rem] font-['Oswald'] font-bold text-[#1E3A1A] mb-[15px] uppercase">
              Deja de Perder Leads Móviles
            </h4>
            <p className="text-[#555] text-[1.1rem] mb-[30px] max-w-[600px] leading-[1.6]">
              Si tu sitio web no ha sido codificado estrictamente para rendimiento móvil élite, estás perdiendo licitaciones de 8 cifras ante competidores con infraestructura digital más afilada. Lemonade Ideas ingeniera arquitecturas mobile-first para contratistas élite de California.
            </p>
            <Link href="/es/contact" className="inline-block bg-[#FED52B] text-[#1E3A1A] font-bold text-[1.1rem] px-[40px] py-[18px] rounded-[50px] uppercase tracking-[1px] shadow-[0_10px_20px_rgba(254,213,43,0.3)] hover:shadow-[0_15px_25px_rgba(254,213,43,0.4)] hover:-translate-y-1 transition-all duration-300">
              Auditar Mi Arquitectura Móvil <ArrowRight className="ml-2" />
            </Link>
            <div className="flex gap-[15px] mt-[40px]">
              <div className="w-[45px] h-[45px] rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#666] hover:bg-[#1E3A1A] hover:text-white hover:border-[#1E3A1A] transition-colors"><Facebook /></div>
              <div className="w-[45px] h-[45px] rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#666] hover:bg-[#1E3A1A] hover:text-white hover:border-[#1E3A1A] transition-colors"><Instagram /></div>
              <div className="w-[45px] h-[45px] rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#666] hover:bg-[#ff0000] hover:text-white hover:border-[#ff0000] transition-colors"><Youtube /></div>
              <div className="w-[45px] h-[45px] rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#666] hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-colors"><Linkedin /></div>
            </div>
          </div>

        </article>
      </main>

      <BlogNavigation currentSlug="mobile-first-contractors-guide" />
      <CTASection />
    </div>
  );
}
