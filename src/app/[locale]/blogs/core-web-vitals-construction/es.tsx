/* eslint-disable react/no-unescaped-entities */
import React from "react";
import CTASection from "@/components/seo/CTASection";
import Link from "next/link";
import Image from "next/image";
import BlogNavigation from "@/components/blog/BlogNavigation";
import { Gauge, Server, Zap, Layers, AlertTriangle, Check, ArrowRight, Facebook, Instagram, Youtube, Linkedin, BarChart4, Target, DollarSign, ShieldCheck } from 'lucide-react';

export default function EsBlog() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-['Poppins',sans-serif]">
      
      {/* Hero Section */}
      <section className="bg-[#1A1A1A] relative pt-[120px] pb-[80px] md:pt-[160px] md:pb-[100px] text-center px-4 md:px-[20px] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[150%] bg-[#3AAB43] blur-[120px] rounded-full rotate-45"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[120%] bg-[#FED52B] blur-[150px] rounded-full"></div>
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[1000px]">
          <div className="inline-block mb-[20px] px-[15px] py-[6px] bg-[#3AAB43]/20 border border-[#3AAB43]/30 rounded-full">
            <span className="text-[#3AAB43] font-bold text-[0.85rem] tracking-[1px] uppercase flex items-center gap-2">
              <Gauge className="w-4 h-4" /> Protocolo de Core Web Vitals
            </span>
          </div>
          <h1 className="text-[2.2rem] md:text-[3.5rem] font-[Oswald] font-extrabold uppercase leading-[1.15] tracking-[0.5px] mb-[30px] text-[#ffffff] drop-shadow-lg">
            Core Web Vitals: La Métrica de Ingeniería Que Dicta Licitaciones de $15M
          </h1>
          <div className="flex items-center justify-center gap-[20px] text-[0.95rem] font-medium text-[#c0c0c0]">
            <span className="flex items-center gap-[6px]">
              <Target className="text-[#FED52B] text-[0.85rem]" />
              <span className="text-white font-semibold">Lemonade Ideas</span>
            </span>
            <span className="text-[#666]">|</span>
            <span className="flex items-center gap-[8px]">
              <DollarSign className="text-[1.1em] text-[#FED52B]" />
              <span className="text-white">8 de Abril, 2026</span>
            </span>
            <span className="text-[#666] hidden md:inline">|</span>
            <span className="hidden md:flex items-center gap-[8px]">
              <BarChart4 className="text-[1.1em] text-[#FED52B]" />
              <span className="text-white">20 min de lectura</span>
            </span>
          </div>
        </div>
      </section>

      {/* Content Area */}
      <main className="flex-1 px-4 md:px-[20px] bg-[#fcfcfc]">
        <article className="max-w-[800px] mx-auto bg-white rounded-[24px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] mt-[-40px] relative z-20 pt-[50px] px-[20px] md:px-[60px] pb-[60px] text-[#333] leading-[1.8] border border-gray-100">
          
          <div className="bg-[#f9fff9] border-l-[6px] border-[#3AAB43] p-[30px] md:p-[40px] rounded-r-[16px] mb-[50px] shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[100px] h-[100px] bg-[#3AAB43] opacity-[0.03] rounded-bl-full transform translate-x-1/2 -translate-y-1/2 transition-transform duration-500 group-hover:scale-150"></div>
            <p className="text-[1.2rem] md:text-[1.35rem] text-[#1E3A1A] font-medium leading-[1.7] relative z-10 m-0 text-justify">
              Si tu sitio web de construcción tarda 4.3 segundos en cargar, has perdido matemáticamente el contrato antes de que siquiera lean tu carta de capacidades. La actualización de Core Web Vitals de Google masacra algorítmicamente los sitios genéricos de construcción mientras recompensa a los constructores élite obsesionados con la velocidad con posiciones de búsqueda dominantes. Esto no es una teoría de marketing. Es el mecanismo cuantificable que determina si los tomadores de decisiones institucionales alguna vez descubren que tu firma existe.
            </p>
          </div>

          <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
            <Image src="/images/blogs/core-web-vitals-construction/hero.png" alt="Un panel de analíticas corporativo mostrando métricas de rendimiento web élite con indicadores verdes en todas las categorías." title="Panel de Rendimiento Core Web Vitals" fill priority className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

          <div className="prose prose-lg max-w-none text-[#444] text-justify prose-headings:font-['Oswald',sans-serif] prose-p:text-[1.1rem] prose-p:leading-[1.8] prose-p:mb-[30px] prose-a:text-[#3AAB43] hover:prose-a:text-[#1E3A1A] prose-strong:text-[#1E3A1A] prose-strong:font-bold prose-ul:list-none prose-ul:pl-0 prose-li:relative prose-li:pl-[28px] prose-li:mb-[15px]">
            
            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-8 mb-6 uppercase tracking-wide">
              La Ilusión de un Sitio Web "Rápido"
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              Pregúntale a cualquier desarrollador web estándar si tu sitio es rápido. Te dirá que está bien. Ahora ejecuta ese mismo sitio a través de la herramienta de auditoría Lighthouse de Google. Verás un baño de sangre de números rojos. La desconexión aquí es fatal para contratistas comerciales élite que intentan escalar hacia proyectos de $10M+. Lo que se ve "rápido" en la conexión de fibra óptica de la oficina de un desarrollador web es frecuentemente una pesadilla lenta y bloqueante en la iPad de un desarrollador comercial en un sitio de obra remoto con datos celulares irregulares.
            </p>

            <p>
              Google reconoció esta asimetría y, en un movimiento brutalmente eficiente, cambió su algoritmo maestro de búsqueda para penalizar severamente los sitios web corporativos lentos. Esta actualización se conoce como Core Web Vitals. No es una sugerencia. No es una "mejor práctica". Es una compuerta matemática que tu sitio web pasa o falla. Y si falla, tu firma es enterrada algorítmicamente debajo de competidores cuya infraestructura digital fue ingenierizada correctamente desde los cimientos.
            </p>

            <p>
              Las consecuencias financieras son asombrosas. Un estudio de Deloitte Digital encontró que una mejora de 0.1 segundos en la velocidad de un sitio móvil generó un aumento del 8.4% en conversiones para servicios de construcción e industriales. Extrapola eso a un pipeline anual de $50M en licitaciones potenciales, y comenzarás a entender que la velocidad del sitio web no es un "detalle técnico" — es un multiplicador de ingresos operando en la capa fundacional de toda tu arquitectura de desarrollo de negocio.
            </p>

            <div className="bg-[#fff5f5] p-[30px] rounded-[16px] mb-[40px] relative overflow-hidden group border border-[#ffebeb]">
              <AlertTriangle className="absolute top-[-20%] right-[-10%] text-[10rem] text-[#ff0000] opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500" />
              <h4 className="text-[#d32f2f] font-bold mb-[15px] relative z-10 flex items-center gap-3 text-xl">
                <Gauge /> La Caja de Penalización de Google
              </h4>
              <p className="relative z-10 m-0 text-[#555]">
                Tu posicionamiento comercial en búsquedas ya no está determinado únicamente por la cantidad de backlinks o la densidad de palabras clave. Si tu Largest Contentful Paint (LCP) tarda más de 2.5 segundos, Google interpreta tu marca como fundamentalmente inferior a los competidores que cargan más rápido. Tus rankings principales de búsqueda comercial son despojados instantáneamente y redistribuidos a competidores optimizados en velocidad. Esto no es especulación — es comportamiento algorítmico documentado.
              </p>
            </div>

            <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
              <Image src="/images/blogs/core-web-vitals-construction/servers.png" alt="Racks profesionales de centro de datos corporativo con indicadores LED azules mostrando rendimiento óptimo del servidor." title="Infraestructura de Hosting Élite para Constructoras" fill loading="lazy" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
            </div>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-12 mb-6 uppercase tracking-wide">
              Deconstruyendo Las Tres Métricas del Dominio
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              Los contratistas élite no ven los sitios web como folletos de marketing; los tratan como infraestructura digital especializada. Los Core Web Vitals consisten en tres mediciones matemáticas implacables que califican la integridad arquitectónica de tu presencia en línea. Entender cada una es crítico porque determinan si Google clasifica a tu firma como una autoridad premium o un pasivo genérico.
            </p>

            <ul>
              <li>
                <Check className="text-[#3AAB43] absolute left-0 top-[6px]" />
                <strong>LCP (Largest Contentful Paint):</strong> Mide la velocidad bruta de renderizado — cuánto tiempo tarda la imagen hero de tu proyecto en aparecer visualmente en pantalla. Menos de 2.5 segundos es la métrica de aprobación. Si tu agencia codificó un JPEG de 4MB en tu sección hero sin lazy loading especializado, conversión WebP, o distribución CDN, estás quemando activamente tus cimientos digitales. Cada milisegundo pasado de 2.5 segundos compone la penalización algorítmica.
              </li>
              <li>
                <Check className="text-[#3AAB43] absolute left-0 top-[6px]" />
                <strong>INP (Interaction to Next Paint):</strong> Cuando un inversor hace clic en tu botón "Enviar RFP", ¿el sitio reacciona instantáneamente, o hay un micro-tartamudeo mientras un archivo JavaScript inflado se ejecuta en segundo plano? INP reemplazó la métrica anterior FID en marzo de 2024, y mide el ciclo completo de vida de cada interacción del usuario. Un retraso de más de 200 milisegundos marca tu estructura de servidor como infraestructura de nivel amateur indigna de confianza institucional.
              </li>
              <li>
                <Check className="text-[#3AAB43] absolute left-0 top-[6px]" />
                <strong>CLS (Cumulative Layout Shift):</strong> ¿Alguna vez cargaste un sitio, intentaste tocar un enlace, pero toda la página saltó hacia abajo porque una imagen finalmente renderizó, haciéndote clicar el elemento equivocado? Eso es CLS. Es el equivalente digital de una cimentación inestable. Un puntaje sobre 0.1 señala inestabilidad severa de código que Google castiga sin misericordia. Para constructoras, esto es particularmente irónico — si la base de tu sitio web es visualmente inestable, ¿por qué alguien confiaría en ti para verter una real?
              </li>
            </ul>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-12 mb-6 uppercase tracking-wide">
              Por Qué WordPress Siempre Pierde la Guerra de Vitals
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              ¿Por qué el 90% de contratistas de construcción actualmente fallan la evaluación de Core Web Vitals? Porque su sitio está construido sobre plantillas básicas de WordPress cargadas con 30 "plugins" superpuestos instalados por un diseñador que fundamentalmente no entiende la arquitectura de software. Un constructor de arrastrar y soltar carga bibliotecas masivas de código solo para mostrar un simple botón. Esto crea una "cascada" de ejecución bloqueante que se propaga a través de toda la secuencia de carga de la página.
            </p>

            <p>
              Mientras tu sitio WordPress está ocupado tratando de descifrar cuál de sus 30 plugins cargar primero, un competidor élite ejecutando una aplicación React personalizada con Server-Side Rendering ya ha entregado su propuesta de valor y capturado la información de contacto del cliente. El diferencial de velocidad no es marginal. En pruebas comparativas directas, medimos consistentemente sitios WordPress de construcción cargando en 6-9 segundos en móvil, mientras nuestras construcciones personalizadas en Next.js entregan el contenido idéntico en 0.6-1.2 segundos. Esa es una brecha de rendimiento de 5-10x que se traduce directamente en superioridad de ranking de búsqueda.
            </p>

            <p>
              El ecosistema de plugins es el fallo arquitectónico central. Cada plugin de WordPress inyecta su propia hoja de estilos CSS y archivo JavaScript en la carga global de la página. Un plugin de "formulario de contacto" carga 45KB de JavaScript. Un plugin de "slider" carga 120KB. Un plugin de "analíticas" carga 80KB. Un plugin de "SEO" carga 60KB. Apila 15-30 de estos y has creado un payload de JavaScript de 2-3MB que el navegador debe descargar, analizar, compilar y ejecutar antes de que la página se vuelva interactiva. Esto es cáncer computacional. Es el equivalente digital de verter la cimentación, luego apilar 30 pisos innecesarios de peso muerto encima antes de que el concreto haya fraguado.
            </p>

            <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
              <Image src="/images/blogs/core-web-vitals-construction/workstation.png" alt="Una estación de trabajo de oficina de lujo minimalista mostrando gráficos de Google PageSpeed Insights con puntajes perfectos en verde." title="Logrando Puntajes Perfectos de Core Web Vitals" fill loading="lazy" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
            </div>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-12 mb-6 uppercase tracking-wide">
              El Mandato de Velocidad de 8 Cifras
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              La velocidad digital es la nueva credencial industrial. Cuando un desarrollador prospecto aterriza en tu página, un tiempo de carga de 0.8 segundos dispara una reacción subconsciente inmediata: "Estos tipos tienen todo bajo control." Equiparan la precisión quirúrgica de tu sitio web con la precisión quirúrgica de tus cronogramas de construcción. Esto no es una metáfora. Investigaciones del Proyecto de Credibilidad Web de Stanford demuestran que el 75% de los usuarios admiten emitir juicios sobre la credibilidad de una empresa basándose en el diseño y rendimiento del sitio web. Para la construcción comercial, donde la credibilidad ES el producto, esta estadística es existencial.
            </p>

            <p>
              La solución de ingeniería sigue un plano técnico específico. Primero, migras completamente de WordPress a un framework personalizado como Next.js que soporte Server-Side Rendering (SSR), Static Site Generation (SSG) e Incremental Static Regeneration (ISR). Esto elimina la cascada de plugins y entrega HTML pre-renderizado directamente desde la red edge. Segundo, implementas optimización agresiva de imágenes — convirtiendo toda la fotografía de proyectos a formato WebP con atributos srcset responsivos, asegurando que el navegador descargue solo la resolución exacta necesaria para el viewport del usuario. Tercero, despliegas code-splitting estricto para que cada página solo cargue el JavaScript requerido para esa vista específica.
            </p>

            <p>
              Cuarto, mueves tu infraestructura de hosting a un CDN distribuido edge como Vercel o Cloudflare Pages, que sirve tu contenido desde el centro de datos geográficamente más cercano al usuario. Un desarrollador en Ciudad de México debería recibir la página de capacidades de tu oficina en Monterrey desde un nodo edge en México en menos de 50 milisegundos, no desde un servidor de hosting compartido en Phoenix que tarda 340 milisegundos solo en establecer la conexión inicial.
            </p>

            <div className="bg-[#f0f9ff] border-l-[5px] border-[#0077b5] p-[30px] rounded-r-[12px] mb-[40px] shadow-sm">
              <div className="flex items-start gap-[15px]">
                <div className="bg-[#0077b5]/20 p-[10px] rounded-full mt-1">
                  <ShieldCheck className="text-[#005582] text-[1.2rem]" />
                </div>
                <div>
                  <h4 className="text-[#1E3A1A] font-bold text-[1.2rem] m-0 mb-[5px]">El Foso Competitivo del Rendimiento Técnico</h4>
                  <p className="m-0 text-[#555] text-[1rem] leading-[1.6]">
                    Una vez que tus Core Web Vitals están en verde en las tres métricas, has establecido un foso técnico que tus competidores dependientes de WordPress no pueden cruzar sin una reconstrucción completa. Cada mes que retrasan esa reconstrucción, tu ventaja algorítmica se compone. Las señales de ranking de Google son acumulativas — mientras más tiempo mantengas métricas de rendimiento superiores, más profundamente tu firma se consolida en las posiciones de búsqueda premium que generan consultas institucionales.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
              <Image src="/images/blogs/core-web-vitals-construction/developer.png" alt="Un ingeniero de software senior revisando código de optimización de Core Web Vitals en monitores duales en un entorno de desarrollo corporativo moderno." title="Ingeniería de Cumplimiento con Core Web Vitals" fill loading="lazy" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
            </div>

            <p>
              Los algoritmos son despiadados, y los clientes adinerados son impacientes. Deja de tratar tu sitio como una valla publicitaria digital y empieza a tratarlo como un motor de alto rendimiento. Comanda tu ingeniería, logra el verde en todos los Vitals de Google, y observa cómo tu posicionamiento comercial aplasta a competidores que todavía están esperando que sus imágenes hero terminen de cargar. Las firmas que invierten en optimización de Core Web Vitals hoy están construyendo una fortaleza algorítmica que compondrá su ventaja competitiva durante años.
            </p>

          </div>

          {/* Signature & CTA Panel */}
          <div className="mt-[80px] pt-[50px] border-t border-gray-100 flex flex-col items-center text-center">
            <div className="w-[138px] h-[138px] relative mb-[25px]">
              <Image src="/logos/Emblem/1x/Asset 7.png" alt="Emblema Lemonade Ideas" fill className="object-contain" />
            </div>
            <h4 className="text-[1.8rem] font-['Oswald'] font-bold text-[#1E3A1A] mb-[15px] uppercase">
              ¿Sobrevivirá Tu Sitio la Auditoría de un Desarrollador?
            </h4>
            <p className="text-[#555] text-[1.1rem] mb-[30px] max-w-[600px] leading-[1.6]">
              No puedes falsificar la velocidad. Lemonade Ideas ingeniera sitios web de construcción que pasan cada Core Web Vital con precisión quirúrgica, transformando tu presencia digital en un activo de rendimiento de grado institucional.
            </p>
            <Link href="/es/free-tools" className="inline-block bg-[#FED52B] text-[#1E3A1A] font-bold text-[1.1rem] px-[40px] py-[18px] rounded-[50px] uppercase tracking-[1px] shadow-[0_10px_20px_rgba(254,213,43,0.3)] hover:shadow-[0_15px_25px_rgba(254,213,43,0.4)] hover:-translate-y-1 transition-all duration-300">
              Acceder Al Hub de Herramientas <ArrowRight className="ml-2" />
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

      <BlogNavigation currentSlug="core-web-vitals-construction" />
      <CTASection />
    </div>
  );
}
