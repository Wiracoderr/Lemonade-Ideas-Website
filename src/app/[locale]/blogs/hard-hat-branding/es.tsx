/* eslint-disable react/no-unescaped-entities */
import React from "react";
import CTASection from "@/components/seo/CTASection";
import Link from "next/link";
import Image from "next/image";
import BlogNavigation from "@/components/blog/BlogNavigation";
import { HardHat, Target, AlertTriangle, Check, ArrowRight, Facebook, Instagram, Youtube, Linkedin, BarChart4, DollarSign, ShieldCheck, Eye, Fence } from 'lucide-react';

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
              <HardHat className="w-4 h-4" /> Branding del Casco Duro
            </span>
          </div>
          <h1 className="text-[2.2rem] md:text-[3.5rem] font-[Oswald] font-extrabold uppercase leading-[1.15] tracking-[0.5px] mb-[30px] text-[#ffffff] drop-shadow-lg">
            Branding del Casco: El Foso Psicológico del Sitio de Obra Inmutable
          </h1>
          <div className="flex items-center justify-center gap-[20px] text-[0.95rem] font-medium text-[#c0c0c0]">
            <span className="flex items-center gap-[6px]"><Target className="text-[#FED52B] text-[0.85rem]" /><span className="text-white font-semibold">Lemonade Ideas</span></span>
            <span className="text-[#666]">|</span>
            <span className="flex items-center gap-[8px]"><DollarSign className="text-[1.1em] text-[#FED52B]" /><span className="text-white">8 de Abril, 2026</span></span>
            <span className="text-[#666] hidden md:inline">|</span>
            <span className="hidden md:flex items-center gap-[8px]"><BarChart4 className="text-[1.1em] text-[#FED52B]" /><span className="text-white">18 min de lectura</span></span>
          </div>
        </div>
      </section>

      <main className="flex-1 px-4 md:px-[20px] bg-[#fcfcfc]">
        <article className="max-w-[800px] mx-auto bg-white rounded-[24px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] mt-[-40px] relative z-20 pt-[50px] px-[20px] md:px-[60px] pb-[60px] text-[#333] leading-[1.8] border border-gray-100">
          
          <div className="bg-[#f9fff9] border-l-[6px] border-[#3AAB43] p-[30px] md:p-[40px] rounded-r-[16px] mb-[50px] shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[100px] h-[100px] bg-[#3AAB43] opacity-[0.03] rounded-bl-full transform translate-x-1/2 -translate-y-1/2 transition-transform duration-500 group-hover:scale-150"></div>
            <p className="text-[1.2rem] md:text-[1.35rem] text-[#1E3A1A] font-medium leading-[1.7] relative z-10 m-0 text-justify">
              Tu sitio de obra no es simplemente un lugar de trabajo — es una valla publicitaria viva operando 24 horas al día, 7 días a la semana, visible para cada desarrollador, inversor, funcionario municipal y miembro de la comunidad que pasa junto a él. El branding físico inquebrantable en el sitio de obra es el mecanismo más económico y psicológicamente potente para imponer autoridad de mercado absoluta sin gastar un solo dólar en publicidad digital.
            </p>
          </div>

          <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
            <Image src="/images/blogs/hard-hat-branding/hero.png" alt="Un casco de construcción blanco prístino de alta calidad colocado sobre planos arquitectónicos limpios en un entorno corporativo profesional." title="Autoridad del Branding del Casco" fill priority className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

          <div className="prose prose-lg max-w-none text-[#444] text-justify prose-headings:font-['Oswald',sans-serif] prose-p:text-[1.1rem] prose-p:leading-[1.8] prose-p:mb-[30px] prose-a:text-[#3AAB43] hover:prose-a:text-[#1E3A1A] prose-strong:text-[#1E3A1A] prose-strong:font-bold prose-ul:list-none prose-ul:pl-0 prose-li:relative prose-li:pl-[28px] prose-li:mb-[15px]">
            
            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-8 mb-6 uppercase tracking-wide">
              El Costo del Anonimato en Campo
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              Cuando caminas hacia un sitio de construcción multimillonario, el anonimato es el enemigo definitivo de la autoridad. Si tus superintendentes, gerentes de proyecto y subcontratistas visten una mezcla desorganizada de chalecos de neón genéricos, cascos sin marca rayados y camisetas desteñidas de tres proveedores diferentes, estás activamente desangrando confianza corporativa con cada visita de un stake-holder al sitio.
            </p>

            <p>
              Los desarrolladores inmobiliarios y los stakeholders empresariales visitan los sitios de obra para verificar la seguridad de su inversión de capital. No solo están verificando el progreso estructural; están evaluando subconscientemente la competencia operativa a través de cada señal visual disponible. Un sitio visualmente caótico — donde los trabajadores visten equipo disparejo, la señalización es inconsistente, y no hay identidad organizacional discernible — comunica caos operativo. Si ni siquiera puedes coordinar el color de tus cascos, ¿cómo van a confiar en ti para coordinar un programa de edificación de $25M con 40 trades de subcontratistas?
            </p>

            <p>
              Por otro lado, un ambiente idéntico a una operación militar sincronizada — donde cada casco, chaleco de alta visibilidad, imán vehicular y cerca perimetral porta una insignia corporativa unificada e imponente con tipografía y color consistentes — proyecta control absoluto. El desarrollador camina hacia tu sitio y su cerebro límbico registra una señal única y abrumadora: "Esta gente tiene su operación bajo total control." Este es el foso psicológico del Branding del Casco, y influencia las decisiones de contratos mucho más poderosamente de lo que la mayoría de los contratistas imaginan.
            </p>

            <div className="bg-[#fff5f5] p-[30px] rounded-[16px] mb-[40px] relative overflow-hidden group border border-[#ffebeb]">
              <AlertTriangle className="absolute top-[-20%] right-[-10%] text-[10rem] text-[#ff0000] opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500" />
              <h4 className="text-[#d32f2f] font-bold mb-[15px] relative z-10 flex items-center gap-3 text-xl">
                <AlertTriangle /> El Asesino Silencioso de Ingresos
              </h4>
              <p className="relative z-10 m-0 text-[#555]">
                Un estudio de investigación de Stanford sobre sesgo cognitivo encontró que los humanos forman juicios de credibilidad dentro de 50 milisegundos de exposición visual. Cuando un desarrollador visita tu sitio de obra, ese juicio se forma antes de que se pronuncie una sola palabra. Branding disparejo, equipo genérico y desorden visual disparan una clasificación automática de "baja credibilidad" que ninguna cantidad de garantías verbales puede superar completamente. Estás perdiendo contratos que ni siquiera sabías que estaban en juego.
              </p>
            </div>

            <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
              <Image src="/images/blogs/hard-hat-branding/body1.png" alt="Tres trabajadores de construcción comercial de lujo vistiendo equipo de seguridad inmaculadamente brandeado, de pie con confianza en un sitio de obra limpio y activo." title="Autoridad de Branding Unificado en el Sitio de Obra" fill loading="lazy" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
            </div>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-12 mb-6 uppercase tracking-wide">
              Construyendo Autoridad Antes de que el Concreto se Vierta
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              El branding en la construcción comercial no se trata de estética; se trata de mitigación de riesgos en la mente del desplegador de capital. Un desarrollador adjudicando un contrato de $20M quiere saber que ha reclutado una institución, no una colección loosamente asociada de artesanos que casualmente comparten un número de licencia de contratista general. La evidencia visual de orden institucional debe ser abrumadora e ineludible desde el momento en que entran por el camino de acceso a la construcción.
            </p>

            <p>
              Al desplegar equipo de seguridad premium y estandarizado a través de todo tu pipeline de fuerza laboral — independientemente de si son empleados directos W-2 o subcontratistas 1099 — impones una jerarquía visual que comunica disciplina corporativa. El casco brandeado se convierte en un ancla psicológica. Le dice a los miembros de la comunidad que conducen por la autopista, a los inversores revisando fotos de progreso del sitio, y a las firmas competidoras monitoreando tu actividad exactamente quién es dueño de esa cuadra. Cada persona en tu sitio se convierte en un embajador de marca caminante, lo sepan o no.
            </p>

            <p>
              La inversión requerida es sorprendentemente modesta relativa al ROI que genera. Cascos personalizados premium con tu logo corporativo cuestan aproximadamente $15-25 por unidad. Chalecos de alta visibilidad brandeados cuestan $20-35 cada uno. Imanes vehiculares personalizados para tu flota cuestan $50-100 por camión. Para una empresa operando 3 sitios de obra activos con 60 personas combinadas, la inversión total en branding es menor a $5,000. Compara eso con las implicaciones de ingresos de ganar una sola licitación adicional de $5M porque un desarrollador quedó psicológicamente preparado por la apariencia profesional de tu operación durante su visita al sitio.
            </p>

            <div className="bg-[#f0f9ff] border-l-[5px] border-[#0077b5] p-[30px] rounded-r-[12px] mb-[40px] shadow-sm">
              <div className="flex items-start gap-[15px]">
                <div className="bg-[#0077b5]/20 p-[10px] rounded-full mt-1">
                  <Eye className="text-[#005582] text-[1.2rem]" />
                </div>
                <div>
                  <h4 className="text-[#1E3A1A] font-bold text-[1.2rem] m-0 mb-[5px]">Dominio Perimetral: El Lienzo de la Cerca</h4>
                  <p className="m-0 text-[#555] text-[1rem] leading-[1.6]">
                    El perímetro de tu sitio de obra es el espacio publicitario gratuito más valioso de tu ciudad. Las mallas estándar son una oportunidad perdida catastrófica. Las firmas élite ven la cerca como un activo inmobiliario de primera. Señalización de alta resolución, diseñada profesionalmente, mostrando renders arquitectónicos, códigos QR dirigiendo tráfico a mapas interactivos del proyecto, y tipografía audaz declarando la identidad de tu firma hace la venta de desarrollo de negocio por ti — 24/7 — a cero costo incremental después de la instalación inicial.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
              <Image src="/images/blogs/hard-hat-branding/body2.png" alt="Un letrero de construcción premium adherido a una cerca de eslabones en un sitio de construcción comercial de lujo con renders arquitectónicos y branding corporativo audaz." title="Dominio de Branding Perimetral" fill loading="lazy" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
            </div>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-12 mb-6 uppercase tracking-wide">
              El Efecto Halo de las Interacciones Profesionales
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              Cuando un gerente de proyecto interactúa con un cliente, inspector municipal, o arquitecto visitante, el branding que viste establece el tono psicológico de toda la conversación antes de que un solo detalle técnico sea discutido. La investigación en psicología social demuestra consistentemente que la presentación visual crea un "marco" a través del cual toda la información subsecuente es interpretada. Un inspector es estadísticamente menos propenso a escrutar severamente un sitio de obra que aparenta estar inmaculadamente mantenido y operado por una entidad corporativa visualmente cohesiva con claro orgullo organizacional.
            </p>

            <p>
              Además, equipar a tus gerentes de proyecto con tecnología rugosa de alta gama brandeada — tablets con logo personalizado en casos protectores, portapapeles brandeados con carpetas profesionales, kits de EPP con logo para uso de visitantes — refuerza la narrativa de que tu firma opera con precisión de ejecución total. El "Efecto Halo" es un sesgo cognitivo bien documentado: la excelencia en un área visible (branding, calidad del equipo, limpieza del sitio) automáticamente señala excelencia en todas las áreas invisibles (calidad de ingeniería estructural, gestión financiera, adherencia al cronograma).
            </p>

            <p>
              Considera también la dimensión de la flota. Tus camiones, remolques y equipo son plataformas de branding móviles que recorren tu mercado geográfico cada día. Una flota de 15 camiones haciendo viajes diarios a través de un área metropolitana genera aproximadamente 30,000-50,000 impresiones visuales por mes. Si esos camiones portan branding limpio, profesional y consistente con el nombre de tu empresa, logo, y una URL simple de llamada a la acción, esencialmente estás operando una campaña publicitaria exterior gratuita que costaría $15,000-$25,000 por mes si se comprara a través de canales tradicionales de vallas publicitarias.
            </p>

            <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
              <Image src="/images/blogs/hard-hat-branding/body3.png" alt="Un gerente de proyecto comercial en equipo brandeado entregando una tablet con logo personalizado a un cliente al aire libre bajo luz natural en un sitio de obra premium activo." title="Punto de Contacto de Marca Profesional en el Sitio de Obra" fill loading="lazy" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
            </div>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-[2rem] mt-12 mb-6 uppercase tracking-wide">
              Estandarizar para Escalar
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              No puedes escalar una firma constructora de 8 cifras luciendo como una operación local de manitas. Debes operar, vestir y comandar tus sitios como una máquina empresarial. Cada punto de contacto — desde el casco en la cabeza de tu nuevo trabajador hasta el letrero magnético en tu camioneta más antigua — debe comunicar el mismo mensaje inquebrantable de autoridad institucional, precisión operativa y excelencia profesional.
            </p>

            <ul>
              <li>
                <Check className="text-[#3AAB43] absolute left-0 top-[6px]" />
                <strong>Programa Unificado de EPP:</strong> Cascos personalizados, chalecos de alta visibilidad brandeados, y lentes de seguridad con logo para cada persona que entre a tu sitio de obra, incluyendo visitantes y personal subcontratista.
              </li>
              <li>
                <Check className="text-[#3AAB43] absolute left-0 top-[6px]" />
                <strong>Sistema de Señalización Perimetral:</strong> Banners de cerca de grado profesional con renders arquitectónicos, detalles del proyecto, información de contacto y códigos QR enlazando a tu portafolio digital de proyectos.
              </li>
              <li>
                <Check className="text-[#3AAB43] absolute left-0 top-[6px]" />
                <strong>Branding de Flota:</strong> Wraps vehiculares consistentes o letreros magnéticos en todos los camiones, remolques y equipo generando decenas de miles de impresiones mensuales gratuitas.
              </li>
              <li>
                <Check className="text-[#3AAB43] absolute left-0 top-[6px]" />
                <strong>Integración Digital-Física:</strong> Códigos QR en señalización física dirigiendo tráfico a las páginas de proyectos de tu sitio web, creando un puente fluido entre la visibilidad en el sitio de obra y la captura digital de leads.
              </li>
            </ul>

            <p>
              El branding inmutable del sitio de obra es el mecanismo más económico y efectivo para asegurar autoridad de mercado absoluta. Las firmas que estandarizan su presencia de marca física a través de cada sitio de obra, cada vehículo y cada pieza de equipo de seguridad son las firmas que los desarrolladores recuerdan cuando la próxima RFP de $15M llega a su escritorio. O eres la firma que luce como una institución, o eres la firma que se pasa por alto porque lucías como todos los demás.
            </p>

          </div>

          <div className="mt-[80px] pt-[50px] border-t border-gray-100 flex flex-col items-center text-center">
            <div className="w-[138px] h-[138px] relative mb-[25px]">
              <Image src="/logos/Emblem/1x/Asset 7.png" alt="Emblema Lemonade Ideas" fill className="object-contain" />
            </div>
            <h4 className="text-[1.8rem] font-['Oswald'] font-bold text-[#1E3A1A] mb-[15px] uppercase">
              Comanda Tu Sitio de Obra con Lemonade Ideas
            </h4>
            <p className="text-[#555] text-[1.1rem] mb-[30px] max-w-[600px] leading-[1.6]">
              El marketing de construcción élite no se trata solo de sitios web — se trata de la proyección física del poder. Lemonade Ideas ingeniera identidades de marca unificadas que transforman tus sitios de obra activos en prueba verificable de tu supremacía técnica.
            </p>
            <Link href="/es/contact" className="inline-block bg-[#FED52B] text-[#1E3A1A] font-bold text-[1.1rem] px-[40px] py-[18px] rounded-[50px] uppercase tracking-[1px] shadow-[0_10px_20px_rgba(254,213,43,0.3)] hover:shadow-[0_15px_25px_rgba(254,213,43,0.4)] hover:-translate-y-1 transition-all duration-300">
              Construir Mi Autoridad de Marca <ArrowRight className="ml-2" />
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

      <BlogNavigation currentSlug="hard-hat-branding" />
      <CTASection />
    </div>
  );
}
