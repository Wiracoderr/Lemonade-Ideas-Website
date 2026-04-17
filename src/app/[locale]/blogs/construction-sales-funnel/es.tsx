import React from "react";
import CTASection from "@/components/seo/CTASection";
import Link from "next/link";
import Image from "next/image";
import BlogNavigation from "@/components/blog/BlogNavigation";
import RelatedArticles from "@/components/blog/RelatedArticles";
import { Shield, Check, ArrowRight, AlertTriangle, Key, Facebook, Instagram, Youtube, Linkedin, Activity, Database, Target, TrendingUp, BarChart3, Zap } from 'lucide-react';

export default function BlogPost() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-['Poppins',sans-serif]">
      
      {/* 1. Hero Section */}
      <section className="bg-[#1A1A1A] relative pt-[120px] pb-[80px] md:pt-[160px] md:pb-[100px] text-center px-4 md:px-[20px] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[150%] bg-[#3AAB43] blur-[120px] rounded-full rotate-45"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[120%] bg-[#FED52B] blur-[150px] rounded-full"></div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1000px]">
          <div className="inline-block mb-[20px] px-[15px] py-[6px] bg-[#3AAB43]/20 border border-[#3AAB43]/30 rounded-full">
            <span className="text-[#3AAB43] font-bold text-[0.85rem] tracking-[1px] uppercase flex items-center gap-2">
              <Target className="w-4 h-4" /> Arquitectura de Ingresos
            </span>
          </div>
          <h1 className="text-[2.2rem] md:text-[3.5rem] font-[Oswald] font-extrabold uppercase leading-[1.15] tracking-[0.5px] mb-[30px] text-[#ffffff] drop-shadow-lg">
            Embudo de Ventas en Construcción: La Máquina de 5 Etapas que Convierte Prospectos Fríos en Contratos Firmados de $5M
          </h1>
          <div className="flex items-center justify-center gap-[20px] text-[0.95rem] font-medium text-[#c0c0c0]">
             <span className="flex items-center gap-[6px]">
              <Shield className="text-[#FED52B] text-[0.85rem]" />
              <span className="text-white font-semibold">Lemonade Ideas</span>
            </span>
            <span className="text-[#666]">|</span>
            <span className="flex items-center gap-[8px]">
              <Database className="text-[1.1em] text-[#FED52B]" />
              <span className="text-white">16 de Abril, 2026</span>
            </span>
            <span className="text-[#666] hidden md:inline">|</span>
            <span className="hidden md:flex items-center gap-[8px]">
              <Activity className="text-[1.1em] text-[#FED52B]" />
              <span className="text-white">20 min de lectura</span>
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
              No tienes un problema de ventas. Tienes un problema de arquitectura. El contratista general promedio recibe una consulta entrante — ya sea por búsqueda en Google, un referido o un RFP frío — y luego procede a improvisar. Quizás envían un deck de capacidades genérico. Quizás programan una llamada que divaga por 45 minutos sin estructura. Quizás envían un presupuesto y luego esperan en silencio tres semanas, esperando que el prospecto vuelva a llamar. Esto no es un proceso de ventas. Es una oración. Y la oración no genera backlogs anuales de $50M. Un embudo de ventas sistemáticamente diseñado sí. Las firmas que consistentemente cierran contratos comerciales de $5M+ no son mejores constructores — son mejores arquitectos del viaje de decisión del comprador. Han mapeado cada etapa psicológica que atraviesa un director de adquisiciones, desde la conciencia inicial hasta el contrato firmado, y han colocado mecanismos de conversión diseñados con precisión en cada punto de transición.
            </p>
          </div>

          <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
             <Image
                src="/images/blogs/construction-sales-funnel/hero.png"
                alt="Una sala de guerra corporativa con paredes de vidrio por la noche con un dashboard digital de piso a techo mostrando una visualización sofisticada de embudo de ventas de múltiples etapas brillando en verde y dorado."
                title="El Centro de Comando de Arquitectura de Ingresos"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

          <div className="prose prose-lg max-w-none text-[#444] text-justify prose-headings:font-['Oswald',sans-serif] prose-p:text-[1.1rem] prose-p:leading-[1.8] prose-p:mb-[30px] prose-a:text-[#3AAB43] hover:prose-a:text-[#1E3A1A] prose-strong:text-[#1E3A1A] prose-strong:font-bold prose-ul:list-none prose-ul:pl-0 prose-li:relative prose-li:pl-[28px] prose-li:mb-[15px]">
            
            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-8 mb-6 uppercase tracking-wide">
              Por Qué la Mayoría de Contratistas No Tienen un Embudo
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              La industria de la construcción ha operado con acuerdos de apretón de manos, referidos de boca en boca y ventas basadas en relaciones durante más de un siglo. Y honestamente, eso funcionaba — cuando el panorama competitivo consistía en quince firmas locales y cada desarrollador ya conocía a tu superintendente por su nombre. Pero el mercado ha cambiado estructuralmente. El capital privado ha entrado en la construcción comercial. Las firmas nacionales están licitando en proyectos regionales a través de plataformas digitales de pre-calificación. Las adquisiciones se han formalizado, son impulsadas por datos y orientadas a procesos. El desarrollador que te contrataba porque sus padres jugaban golf juntos ha sido reemplazado por un VP de Proyectos de Capital que administra un portafolio de $400M y evalúa proveedores a través de matrices de puntuación ponderada.
            </p>

            <p>
              En este entorno, el contratista sin un embudo sistemático está llevando un apretón de manos a una pelea de datos. Estás compitiendo contra firmas que han mapeado todo su viaje de comprador, han instrumentado cada punto de contacto con seguimiento de conversiones, y pueden decirte — con precisión matemática — que su prospecto promedio requiere 7.3 puntos de contacto a lo largo de 42 días antes de solicitar una propuesta formal. Estas firmas no "esperan" negocios. Los ingeniería.
            </p>

            <p>
              Un embudo de ventas de construcción no es un truco de marketing prestado de Silicon Valley. Es la formalización de algo que todo contratista exitoso ya hace intuitivamente — guiar a un prospecto de "nunca he escuchado de ustedes" a "aquí está un contrato firmado de $5M" a través de una secuencia deliberada de interacciones que construyen confianza. La diferencia es que el enfoque intuitivo es inconsistente, inmedible y completamente dependiente de la personalidad de quien contesta el teléfono. Un embudo formal es consistente, medible y escalable a través de todo tu equipo de desarrollo de negocios.
            </p>

            <div className="bg-[#fff5f5] p-[30px] rounded-[16px] mb-[40px] relative overflow-hidden group border border-[#ffebeb]">
               <AlertTriangle className="absolute top-[-20%] right-[-10%] text-[10rem] text-[#ff0000] opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500" />
               <h4 className="text-[#d32f2f] font-bold mb-[15px] relative z-10 flex items-center gap-3 text-xl">
                 <Shield /> La Espiral de Muerte del "Presupuesta y Reza"
               </h4>
                <p className="relative z-10 m-0 text-[#555]">
                 El patrón más destructivo en las ventas de construcción comercial es lo que llamamos el ciclo de "Presupuesta y Reza." Un prospecto solicita una licitación. Tú pasas más de 40 horas ensamblando un take-off detallado, cotizaciones de subcontratistas y cronograma. Envías una propuesta de $3.2M — y luego esperas. Sin secuencia de seguimiento. Sin campaña de nurturing. Sin re-engagement estratégico. Solo silencio. Mientras tanto, el prospecto está comparando activamente tu oferta con otros cuatro contratistas que SÍ están dando seguimiento sistemáticamente. Tres semanas después, te enteras de que perdiste el proyecto. No porque tu precio estuviera mal, sino porque el contratista ganador mantuvo proximidad psicológica durante toda la ventana de decisión mientras tú desaparecías en el vacío digital.
               </p>
            </div>

            <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
             <Image
                src="/images/blogs/construction-sales-funnel/image-1.png"
                alt="Un escritorio ejecutivo con un plano arquitectónico parcialmente desenrollado junto a una laptop mostrando un pipeline de CRM con etapas de negocio y valores en dólares."
                title="Inteligencia de Pipeline"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-12 mb-6 uppercase tracking-wide">
              Etapa 1: Conciencia — El Primer Apretón de Manos Digital
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              La parte superior de tu embudo es donde los prospectos fríos encuentran tu marca por primera vez. En 2026, esto ocurre casi exclusivamente a través de canales digitales: resultados de búsqueda de Google, contenido de LinkedIn, publicaciones de la industria y ocasionalmente publicidad pagada. El objetivo en esta etapa es singular — capturar atención y establecer credibilidad inicial. No estás vendiendo nada todavía. Simplemente estás haciendo que el prospecto sea consciente de que tu firma existe y que posees un nivel de expertise que vale la pena investigar más a fondo.
            </p>

            <p>
              La etapa de conciencia requiere dos categorías de activos. Primero, necesitas contenido descubrible — artículos de blog, casos de estudio y piezas de liderazgo de pensamiento que rankeen en resultados de búsqueda para los términos que buscan tus prospectos ideales. Segundo, necesitas activos de prueba social — fotografía de proyectos, testimonios en video y certificaciones de la industria prominentemente mostrados en tu sitio web — que inmediatamente validen las capacidades de tu firma en el momento en que un prospecto aterriza en cualquier página.
            </p>

            <p>
              El KPI crítico en esta etapa es la calidad de la impresión de marca, no el volumen. Diez mil visitantes del sitio web de búsquedas irrelevantes valen menos que cincuenta visitantes de profesionales de adquisiciones investigando activamente contratistas para un proyecto específico. Tu contenido de conciencia debe estar enfocado con precisión para atraer solo el calibre de prospecto para el que tu firma está diseñada para servir. Esto significa escribir contenido que hable en el lenguaje de las adquisiciones institucionales — discutiendo contratos GMP, métodos de entrega design-build, ingeniería de valor en pre-construcción y capacidad de fianza — no listicles de "5 cosas que buscar en un contratista" dirigidos a propietarios de viviendas.
            </p>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-12 mb-6 uppercase tracking-wide">
              Etapa 2: Interés — El Motor de Aceleración de Confianza
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              Una vez que un prospecto es consciente de tu firma, el trabajo del embudo es convertir la conciencia pasiva en interés activo. Aquí es donde la mayoría de los contratistas fallan completamente. Tienen un sitio web que proporciona información básica de la empresa — una página de "Acerca de", una de "Servicios" y un formulario de contacto — y luego esperan a que el prospecto haga el primer movimiento. Eso es como construir una sala de exhibición sin vendedores y esperar que los clientes escriban sus propias órdenes de compra.
            </p>

            <p>
              La etapa de interés requiere lo que llamamos "activos de aceleración de confianza." Estos son recursos de alto valor que un prospecto puede consumir para profundizar su comprensión de las capacidades y enfoque de tu firma. Los aceleradores de confianza más efectivos para contratistas comerciales incluyen: casos de estudio detallados con resultados cuantificados, declaraciones de capacidad descargables formateadas para revisión institucional, recorridos en video de proyectos activos o recientemente completados narrados por tu ejecutivo de proyecto, y un blog regularmente actualizado demostrando profunda experiencia en la industria.
            </p>

            <div className="bg-[#f0f9ff] border-l-[5px] border-[#0077b5] p-[30px] rounded-r-[12px] mb-[40px] shadow-sm">
                <div className="flex items-start gap-[15px]">
                <div className="bg-[#0077b5]/20 p-[10px] rounded-full mt-1">
                  <Key className="text-[#005582] text-[1.2rem]" />
                </div>
                <div>
                  <h4 className="text-[#1E3A1A] font-bold text-[1.2rem] m-0 mb-[5px]">El Mecanismo del Lead Magnet</h4>
                   <p className="m-0 text-[#555] text-[1rem] leading-[1.6]">
                    La transición de conciencia a interés debe incluir un mecanismo de captura de leads. Para la construcción comercial, los lead magnets de mayor conversión son específicos de proyecto — una calculadora de "Estimador de Costos de Mejora de Inquilinos Comerciales," un descargable "Checklist de Planificación Pre-Construcción para Desarrolladores de Propiedades," o una invitación a un webinar trimestral de "Briefing de Condiciones del Mercado." Estos activos proporcionan valor genuino mientras simultáneamente capturan información de contacto que alimenta tu pipeline CRM. El prospecto recibe inteligencia accionable; tú recibes un lead calificado con señales explícitas de intención.
                  </p>
                </div>
              </div>
            </div>

            <p>
              Cada activo de aceleración de confianza debe incluir un próximo paso claro. Un caso de estudio debe terminar con una invitación a discutir un proyecto similar. Una declaración de capacidad debe incluir un enlace directo para programar una consulta de pre-construcción. Un artículo de blog debe enlazar a páginas de servicios relacionados que muevan al prospecto más profundo en el embudo. Los callejones sin salida matan el impulso. Cada pieza de contenido es un escalón, y cada escalón debe apuntar hacia el siguiente.
            </p>

            <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
             <Image
                src="/images/blogs/construction-sales-funnel/image-2.png"
                alt="Una reunión corporativa de alto nivel entre un ejecutivo de construcción y un desarrollador de propiedades a través de una pared de vidrio de sala de conferencias."
                title="La Sesión de Engagement Estratégico"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-12 mb-6 uppercase tracking-wide">
              Etapa 3: Evaluación — La Ronda de Eliminación Competitiva
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              Esta es la etapa donde tu prospecto te está comparando activamente contra dos a cuatro otros contratistas generales. Han reducido su lista corta y ahora están conduciendo una debida diligencia profunda. Cada interacción durante la etapa de evaluación es una audición de alto riesgo. El prospecto está evaluando no solo tu precio y capacidades, sino tu capacidad de respuesta, profesionalismo, calidad de comunicación y ajuste cultural.
            </p>

            <p>
              La estrategia ganadora durante la etapa de evaluación es lo que llamamos "ventaja de información asimétrica." Mientras tus competidores envían propuestas genéricas y esperan llamadas telefónicas, tú deberías estar entregando proactivamente valor que demuestre exactamente cómo te desempeñarías durante el proyecto real. Esto incluye: un análisis preliminar de cronograma mostrando que ya has pensado en la ruta crítica del proyecto, una evaluación de riesgos de pre-construcción identificando amenazas potenciales de costo o cronograma que el prospecto no ha considerado, referencias de clientes en el mismo vertical de la industria, y una estructura de honorarios transparente que demuestre la sofisticación financiera de tu firma.
            </p>

            <ul>
               <li>
                 <Check className="text-[#3AAB43] absolute left-0 top-[6px]" />
                 <strong>Protocolo de Tiempo de Respuesta:</strong> Durante la etapa de evaluación, el tiempo de respuesta es un proxy de la calidad de ejecución del proyecto. Si un prospecto envía una pregunta de seguimiento y recibe respuesta en 4 horas versus 48 horas, extrapolan esa capacidad de respuesta a cómo tu equipo manejaría RFIs durante la construcción. Implementamos disparadores automáticos de CRM que alertan a tu equipo de BD dentro de 15 minutos de cualquier engagement del prospecto.
              </li>
              <li>
                 <Check className="text-[#3AAB43] absolute left-0 top-[6px]" />
                  <strong>Framework de Diferenciación Competitiva:</strong> Cada propuesta debe responder la pregunta no formulada del prospecto: "¿Por qué debería elegirte a ti sobre los otros tres contratistas que enviaron números similares?" Tu diferenciación debe ser específica y cuantificable — no "proporcionamos un gran servicio" sino "nuestros proyectos han promediado 4.2% por debajo del GMP en 23 proyectos completados en los últimos 36 meses, con cero reclamos de daños liquidados."
              </li>
               <li>
                 <Check className="text-[#3AAB43] absolute left-0 top-[6px]" />
                  <strong>Mapeo de Stakeholders:</strong> En negocios de construcción comercial, la persona a la que le estás presentando rara vez es el único tomador de decisiones. Típicamente hay un socio de desarrollo, un representante del prestamista, un arquitecto, y a veces un consejero legal — todos con poder de veto. Tu embudo debe identificar y abordar las preocupaciones específicas de cada stakeholder.
              </li>
            </ul>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-12 mb-6 uppercase tracking-wide">
              Etapa 4: Decisión — Ingeniería del Cierre
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              La etapa de decisión es donde los negocios se ganan o se pierden — y es donde la ausencia de un embudo formal es más catastrófica. El prospecto ha evaluado todas sus opciones. Tienen dos o tres contratistas "aceptables" en su lista corta. La decisión final frecuentemente se reduce a factores que no tienen nada que ver con el precio: riesgo percibido, rapport personal con el equipo del proyecto, claridad del plan de ejecución propuesto y confianza en que el contratista realmente entregará lo que ha prometido.
            </p>

            <p>
              Tu estrategia en la etapa de decisión debe eliminar el riesgo percibido. Los clientes de construcción comercial están haciendo compromisos de $2M a $50M+ con un contratista que han conocido por semanas o meses — no años. Ese es un enorme acto de fe. Tu trabajo es reducir el tamaño de ese salto a través de activos sistemáticos de mitigación de riesgos: un playbook de pre-construcción detallado mostrando exactamente cómo manejarás los primeros 90 días, un cronograma preliminar propuesto cruzado con tu carga de trabajo actual para demostrar capacidad disponible, documentación de seguros y fianzas pre-ensamblada para revisión de sus prestamistas, y una presentación del equipo real del proyecto que sería asignado.
            </p>

            <p>
              El mecanismo de cierre más poderoso en la construcción comercial es lo que llamamos la "Garantía de Riesgo Inverso." En lugar de pedirle al prospecto que confíe en que rendirás, proactivamente identificas los tres mayores riesgos para su proyecto y presentas una estrategia de mitigación documentada para cada uno. "Basados en nuestro análisis, los tres riesgos para el cronograma de este proyecto son retrasos de permisos con el municipio, tiempos de entrega de adquisición de acero e impacto climático durante la fase de cimentación. Aquí está nuestro protocolo específico para manejar cada uno." Esto transforma la conversación de "¿Deberíamos contratar a este constructor?" a "Este contratista ya ha comenzado a resolver nuestros problemas."
            </p>

            <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
             <Image
                src="/images/blogs/construction-sales-funnel/image-3.png"
                alt="Una fotografía cenital de un escritorio ejecutivo oscuro con una carpeta de propuesta negra mate, una pluma de alto nivel, un smartphone mostrando una notificación de correo y tarjetas de presentación."
                title="El Cierre — Ejecución del Contrato"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-12 mb-6 uppercase tracking-wide">
              Etapa 5: Retención — El Multiplicador de Ingresos Oculto
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              La mayoría de los contratistas tratan un contrato firmado como el fin del proceso de ventas. Las firmas élite lo tratan como el comienzo del embudo de retención — un enfoque sistematizado para transformar clientes de un solo proyecto en relaciones comerciales de por vida que generan negocios repetidos, referidos y contenido de casos de estudio. El costo de adquirir un nuevo cliente comercial a través de todo tu embudo es sustancial — estimado entre $15,000 y $45,000 en inversión total de ventas y marketing por negocio cerrado. ¿El costo de retener un cliente existente que ya confía en tu firma? Prácticamente cero.
            </p>

            <p>
              Tu embudo de retención debería incluir: una revisión estructurada post-ocupación conducida 6 meses después de la finalización del proyecto, actualizaciones trimestrales de "condiciones del mercado" enviadas a tu base de datos de clientes que posicionan a tu firma como un recurso continuo, y celebraciones de aniversario de proyecto que refuerzan la relación y crean oportunidades de contenido para redes sociales. Cada proyecto completado debería generar al menos tres entregables para tu embudo: un caso de estudio detallado con métricas de rendimiento, un testimonio en video del cliente y un compromiso de referencia para futuras conversaciones con prospectos.
            </p>

            <p>
              La matemática de la retención es brutal en su simplicidad. Si tu firma cierra 8 nuevos clientes comerciales por año con un valor promedio de contrato de $4M, eso son $32M en ingresos anuales. Si tu tasa de retención es del 40% (significando que el 40% de esos clientes te contratan nuevamente dentro de 3 años), eso son $12.8M adicionales en ingresos que requirieron casi cero inversión en ventas. Si tu tasa de retención es del 75% — lo cual es alcanzable con un embudo de retención sistemático — eso son $24M en ingresos por negocios repetidos. La diferencia entre una tasa de retención del 40% y del 75% es $11.2M en ingresos anuales generados enteramente a través de gestión de relaciones post-cierre que cuesta menos que un solo salario de BD.
            </p>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-12 mb-6 uppercase tracking-wide">
              El Estándar Lemonade: Ingresos por Diseño
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              No construimos campañas de marketing. Arquitectamos sistemas de ingresos. El embudo de ventas de construcción que diseñamos para contratistas élite no es un diagrama de PowerPoint — es una máquina viva, instrumentada y continuamente optimizada que opera a través de tu sitio web, CRM, secuencias de email, biblioteca de contenido y equipo de desarrollo de negocios. Cada etapa se mide. Cada punto de conversión se rastrea. Cada fuga se identifica y repara. El resultado es un pipeline predecible y escalable que elimina el caos del desarrollo de negocios y lo reemplaza con certeza matemática.
            </p>

            <p>
              Los contratistas que se asocian con Lemonade Ideas no se preguntan de dónde vendrá su próximo proyecto. Pueden mirar su dashboard de CRM y ver exactamente cuántos prospectos están en cada etapa del embudo, cuál es el valor agregado del pipeline, cuál es la tasa de cierre proyectada basada en datos históricos y cuándo se espera que se convierta cada negocio. Eso no son ventas. Es ingeniería. Y la ingeniería es lo que tu firma hace mejor — así que apliquemos esa misma disciplina a cómo adquieres ingresos.
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
             Arquitecta Tu Máquina de Ingresos
            </h4>
             <p className="text-[#555] text-[1.1rem] mb-[30px] max-w-[600px] leading-[1.6]">
               Deja de improvisar tu proceso de ventas. Diseña un pipeline sistemático que convierte prospectos fríos en contratos firmados. Agenda tu sesión estratégica.
            </p>
            
            <Link
              href="/contact"
              className="inline-block bg-[#FED52B] text-[#1E3A1A] font-bold text-[1.1rem] px-[40px] py-[18px] rounded-[50px] uppercase tracking-[1px] shadow-[0_10px_20px_rgba(254,213,43,0.3)] hover:shadow-[0_15px_25px_rgba(254,213,43,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
              Construye Tu Embudo <ArrowRight className="ml-2 inline" />
            </Link>

            <div className="flex gap-[15px] mt-[40px]">
              <a href="https://facebook.com" className="w-[45px] h-[45px] rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#666] hover:bg-[#1E3A1A] hover:text-white hover:border-[#1E3A1A] transition-colors"><Facebook /></a>
              <a href="https://instagram.com" className="w-[45px] h-[45px] rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#666] hover:bg-[#1E3A1A] hover:text-white hover:border-[#1E3A1A] transition-colors"><Instagram /></a>
              <a href="https://youtube.com" className="w-[45px] h-[45px] rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#666] hover:bg-[#ff0000] hover:text-white hover:border-[#ff0000] transition-colors"><Youtube /></a>
              <a href="https://linkedin.com" className="w-[45px] h-[45px] rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#666] hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-colors"><Linkedin /></a>
            </div>
          </div>

          <RelatedArticles
            currentSlug="construction-sales-funnel"
            relatedSlugs={[
              "pipeline-velocity-builders",
              "high-ticket-closing",
              "lead-qualification-process",
              "construction-crm-setup"
            ]}
          />

        </article>
      </main>
      <BlogNavigation currentSlug="construction-sales-funnel" />
      <CTASection />
    </div>
  );
}
