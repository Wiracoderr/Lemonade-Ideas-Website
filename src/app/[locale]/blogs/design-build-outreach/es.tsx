import React from "react";
import CTASection from "@/components/seo/CTASection";
import Link from "next/link";
import Image from "next/image";
import BlogNavigation from "@/components/blog/BlogNavigation";

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
              Estrategia Corporativa B2B
            </span>
          </div>
          <h1 className="text-[2.2rem] md:text-[3.5rem] font-[Oswald] font-extrabold uppercase leading-[1.15] tracking-[0.5px] mb-[30px] text-[#ffffff] drop-shadow-lg">
            Alcance Design-Build: Deje de Vender Planos y Empiece a Vender Ejecución Unificada de Élite
          </h1>
          <div className="flex items-center justify-center gap-[20px] text-[0.95rem] font-medium text-[#c0c0c0]">
             <span className="flex items-center gap-[6px]">
              <i className="fas fa-bolt text-[#FED52B] text-[0.85rem]"></i>
              <span className="text-white font-semibold">Lemonade Ideas</span>
            </span>
            <span className="text-[#666]">|</span>
            <span className="flex items-center gap-[8px]">
              <i className="far fa-calendar-alt text-[1.1em] text-[#FED52B]"></i>
              <span className="text-white">18 de Marzo, 2026</span>
            </span>
            <span className="text-[#666] hidden md:inline">|</span>
            <span className="hidden md:flex items-center gap-[8px]">
              <i className="far fa-clock text-[1.1em] text-[#FED52B]"></i>
              <span className="text-white">20 min lectura</span>
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
              Existe un punto de fricción catastrófico y sistémico integrado en el ADN mismo de la construcción comercial: la desconexión hostil entre el arquitecto que dibuja los planos y el contratista general que tiene que construirlos de alguna manera sin declararse en bancarrota. Durante décadas, los desarrolladores inmobiliarios han sufrido a través de la agonizante trituradora de carne del "Diseño-Licitación-Construcción" (Design-Bid-Build)—un proceso marcado por interminables órdenes de cambio, acusaciones tóxicas y presupuestos completamente destrozados antes de que la primera pieza de acero toque la tierra. Si usted dirige una firma de Design-Build de alto nivel, su marketing no debe ser una galería suave y pretenciosa de "arquitectura hermosa". Esa es una mentalidad de boutique de lujo que fracasa rotundamente en el sector de la logística B2B. Su marketing debe atacar agresiva y violentamente el costo de esta fricción. Usted no vende planos. Usted vende ejecución unificada. Usted vende reducción de riesgos como responsable único. Este es el esquema exacto para comunicar esa autoridad de élite a los desarrolladores de bienes raíces.
            </p>
          </div>

          <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
             <Image
                src="/images/blogs/design-build-outreach/hero.png"
                alt="Espacio de trabajo minimalista y elegante de arquitecto con planos que se fusionan en un render 3D"
                title="La Mente Arquitectónica Integrada"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

          <div className="prose prose-lg max-w-none text-[#444] text-justify prose-headings:font-['Oswald',sans-serif] prose-p:text-[1.1rem] prose-p:leading-[1.8] prose-p:mb-[30px] prose-a:text-[#3AAB43] hover:prose-a:text-[#1E3A1A] prose-strong:text-[#1E3A1A] prose-strong:font-bold prose-ul:list-none prose-ul:pl-0 prose-li:relative prose-li:pl-[28px] prose-li:mb-[15px]">
            
            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-2xl mt-8 mb-6">
              La Toxicidad de la Comunicación "Diseño-Licitación-Construcción"
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              Para entender cómo comercializar el Design-Build, primero debe comprender profundamente qué detestan exactamente sus clientes acerca del modelo tradicional. En un escenario estándar, un Fideicomiso de Inversión en Bienes Raíces (REIT) masivo contrata a un arquitecto. El arquitecto dibuja un concepto geométrico deslumbrante. Se ve hermoso en papel. Luego, se somete a licitación. Los contratistas generales observan los planos y se dan cuenta al instante de que las luces de acero estructural son económicamente inviables.
            </p>

            <p>
              Ahora empieza la guerra. El contratista presenta una oferta inflada brutalmente para cubrir el riesgo. El arquitecto se pone a la defensiva. El desarrollador recibe órdenes de cambio masivas (RFI's) porque los planes chocan con la realidad. El cronograma del proyecto detona.
            </p>
            
            <p>
              Al comercializar su firma de Design-Build, usted denuncia explícitamente esta dinámica tóxica. Su mensaje debe comunicar de forma letal: "Cuando nos contrata, el arquitecto, el ingeniero estructural y el gerente de proyecto se sientan en la misma mesa, trabajan para la misma empresa y operan bajo las mismas restricciones presupuestarias exactas desde el Día 1". Usted elimina el juego de culpas. Toda su huella digital debe irradiar este concepto singular de responsabilidad civil integrada.
            </p>

            <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
             <Image
                src="/images/blogs/design-build-outreach/review.png"
                alt="Dos profesionales de alto nivel revisando críticamente planos de construcción"
                title="Erradicando la Fricción Antes de que Exista"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-2xl mt-12 mb-6">
              El Giro Central: Vendiendo Velocidad de Preconstrucción
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              La mayoría de las firmas de arquitectura y diseño se comercializan llenando sus sitios web de fotografías hiperestilizadas y minimalistas de escaleras y sombras. Esto es absolutamente inútil para un desarrollador comercial que necesita construir una plaza médica de $40 Millones. A ese desarrollador no le importa su visión artística; le importan las tasas de capitalización, el rendimiento sobre el costo y el tiempo de comercialización.
            </p>

            <div className="bg-[#fff5f5] p-[30px] rounded-[16px] mb-[40px] relative overflow-hidden group border border-[#ffebeb]">
              <i className="fas fa-times-circle absolute top-[-20%] right-[-10%] text-[10rem] text-[#ff0000] opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500"></i>
              <h4 className="text-[#d32f2f] font-bold mb-[15px] relative z-10 flex items-center gap-3">
                <i className="fas fa-exclamation-triangle"></i> La Trampa Estética
              </h4>
               <p className="relative z-10 m-0 text-[#555]">
                Si el titular principal de su sitio web es "Diseñamos Espacios Hermosos", ya ha perdido los contratos B2B de más de $10 millones frente a sus competidores pesados. Un desarrollador lee "Espacios Hermosos" y lo traduce inmediatamente como "Caro, lento y demasiado emocional con los colores de la pintura". Su titular debe ser despiadado. Debe decir: "Aceleramiento de Entregas de Proyectos Comerciales de $20M a Través de Integración y de Ingeniería Arquitectónica y Constructiva Unificada".
              </p>
            </div>

            <p>
              Su estrategia de marketing debe desviarse radicalmente de la venta del *diseño* hacia la venta agresiva de *Velocidad de Pre-construcción*. Desarrolladores corporativos sangran capital financiero cada día que su proyecto está estancado en permisos y pre-construcción. Usted comercializa el hecho de que, gracias a que su firma controla tanto los dibujos CAD como las máquinas excavadoras, se puede iniciar la preparación del sitio mientras las fases de diseño de interiores continúan desarrollándose. Ese es un armamento financiero altamente publicitable.
            </p>


            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-2xl mt-12 mb-6">
              Estructurando el Sitio Web Design-Build de Elite
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
               Su presencia digital debe probar la integración. Para hacer esto de manera efectiva, no puede tener una simple página de "Acerca de Nosotros". Necesita una matriz corporativa.
            </p>

            <h4 className="bg-[#f4fbf4] rounded-[10px] border border-[#e2efe2] p-[15px] flex items-center mb-4 text-[#1E3A1A] font-bold">
               <span className="w-8 h-8 rounded-full bg-[#3AAB43] text-white flex items-center justify-center mr-3 flex-shrink-0">1</span>
               El Centro de Transparencia de "Value Engineering"
            </h4>
            
            <p className="mb-8">
               Cree una página dedicada a explicar la "Ingeniería de Valor" en el contexto del Design-Build. Detalle específicamente cómo sus estimadores financieros revisan los trazados de su propio arquitecto en tiempo real. Muestre un ejemplo salvaje: "En el Proyecto Alfa, nuestros estimadores internos se dieron cuenta de que el enrutamiento HVAC especificado agregaría $450k en refuerzos de acero al proyecto. En solo 4 horas, nuestro arquitecto rediseñó el espacio del pleno, eliminando el coste del acero y ahorrando al cliente medio millón de dólares antes de tirar la primera piedra." Esto crea un anclaje psicológico indeleble en la mente del cliente.
            </p>

             <h4 className="bg-[#f4fbf4] rounded-[10px] border border-[#e2efe2] p-[15px] flex items-center mb-4 text-[#1E3A1A] font-bold">
               <span className="w-8 h-8 rounded-full bg-[#3AAB43] text-white flex items-center justify-center mr-3 flex-shrink-0">2</span>
               El Argumento de Transferencia del Riesgo Financiero
            </h4>
            
            <p className="mb-8">
              La ejecución corporativa B2B se trata de la transferencia de riesgos. Cuando un constructor contrata un arquitecto y un GC separados, el propietario del proyecto mantiene el "Riesgo de Diferencia de Diseño". Si los dibujos son defectuosos, él paga por los choques y problemas técnicos. En Design-Build, su empresa carga con esa responsabilidad técnica. Construya una página abordando esto directamente: "Responsabilidad de Contrato Único: Nosotros asumimos y erradicamos los costos catastróficos de nuestros propios errores arquitectónicos". Esta es una técnica final y poderosa.
            </p>

            <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
             <Image
                src="/images/blogs/design-build-outreach/abstract.png"
                alt="Representación abstracta brillante de las cadenas integradas de suministros"
                title="La Cadena de Suministro Integrada"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-2xl mt-12 mb-6">
              El Ataque de Correos Fríos y LinkedIn
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <p>
              Una vez que se haya construido su sede digital letal con estos mensajes altamente potentes, usted frena el SEO simple y genérico, y comienza el ataque dirigido con sus fuerzas especiales utilizando correos focalizados por cuenta (Account-Based Marketing).
            </p>

            <p>
              Localiza al VP de Bienes Raíces de una red de hospitales de primer nivel. No le envía un correo electrónico presentándose con un simple: "Hola, somos la mejor y asombrosa empresa de diseño e infraestructura, danos contratitos". Le envías un mensaje en frío agresivo y dirigido: "Casi puedo prometerle que la junta directiva le está presionando de manera salvaje para ejecutar el nuevo ala de cardiología sin superar los límites de presupuesto de los bonos federales de $18 millones. Los tediosos procesos de oferta generarán órdenes de cambio por aproximadamente un 15% más caro de la nada. Nuestra matriz de operación directa Design-Build restringe la desviación al mínimo y nosotros asumimos los retrasos. Echa un vistazo a los datos masivos aquí". 
            </p>

             <div className="bg-[#fff9e6] border-l-[5px] border-[#FED52B] p-[25px] rounded-r-[12px] mb-[40px] shadow-sm">
                <div className="flex items-start gap-[15px]">
                <div className="bg-[#FED52B]/20 p-[10px] rounded-full mt-1">
                  <i className="fas fa-lightbulb text-[#d4ad00] text-[1.2rem]"></i>
                </div>
                <div>
                  <h4 className="text-[#1E3A1A] font-bold text-[1.1rem] m-0 mb-[5px]">El Formato de Contenido de "Autopsias" Clínicas</h4>
                   <p className="m-0 text-[#555] text-[0.95rem] leading-[1.6]">
                    El activo estratégico más fuerte en marketing de constructores que puedes publicar es una 'Autopsia Financiera de la Construcción'. Describe a detalle por qué en otra empresa que ni debes mencionar por el nombre... perdieron su viabilidad financiera inicial y cayeron a merced del lodo gracias a fallos por mala transmisión de planos entre múltiples equipos dispersos. Expóngalos, luego póngase en el estrado del control directo sin fallas mediante in-house BIM.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="font-bold text-[#1E3A1A] relative inline-block text-2xl mt-12 mb-6">
              El Cierre de Ventas Supremo
              <span className="absolute bottom-[-4px] left-0 w-1/2 h-[4px] bg-[#FED52B] rounded-full"></span>
            </h3>

            <div className="relative w-full h-[300px] md:h-[450px] mb-[60px] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] group bg-gray-100 flex items-center justify-center">
             <Image
                src="/images/blogs/design-build-outreach/building.png"
                alt="Enorme edificio comercial en el anochecer que se acaba de finalizar"
                title="El Pináculo de la Ejecución Unificada"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[20px]"></div>
          </div>

            <p className="mb-10">
              Usted debe darse a conocer y mostrar el comando total y estricto bajo el paraguas total Design-Build que ejecuta a la perfección la reducción y muerte definitiva de riesgos. Tu marca será vista como la más agresiva bestia paramilitar especializada de la construcción, haciendo puré toda fricción interdepartamental. Tus promotores y dueños de capital corporativo le pagarán más para evitar dolores de cabeza paralizantes a largo plazo porque usted no cobra por hacer planos. Usted cobra el costo total por tranquilidad garantizada en los cimientos y pilares.
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
              Deje de Vender Planos. Preste un Ejército Paramilitar Elite Design-Build.
            </h4>
             <p className="text-[#555] text-[1.1rem] mb-[30px] max-w-[600px] leading-[1.6]">
               ¿Están sus esfuerzos perdiendo el respeto que le corresponde ante prospectos masivos gracias al blando y delicado portal "sobre nosotros" con los pajarillos que usa hoy en lugar de portar un escudo inquebrantable de infraestructura ejecutiva de poder logístico con datos aulladores?
            </p>
            
            <Link
              href="/es/contact"
              className="inline-block bg-[#FED52B] text-[#1E3A1A] font-bold text-[1.1rem] px-[40px] py-[18px] rounded-[50px] uppercase tracking-[1px] shadow-[0_10px_20px_rgba(254,213,43,0.3)] hover:shadow-[0_15px_25px_rgba(254,213,43,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
              Forja Tu Arsenal De Marca Elite Directamente <i className="fas fa-arrow-right ml-2"></i>
            </Link>

            <div className="flex gap-[15px] mt-[40px]">
              <a href="#" className="w-[45px] h-[45px] rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#666] hover:bg-[#1E3A1A] hover:text-white hover:border-[#1E3A1A] transition-colors"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="w-[45px] h-[45px] rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#666] hover:bg-[#1E3A1A] hover:text-white hover:border-[#1E3A1A] transition-colors"><i className="fab fa-instagram"></i></a>
              <a href="#" className="w-[45px] h-[45px] rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#666] hover:bg-[#ff0000] hover:text-white hover:border-[#ff0000] transition-colors"><i className="fab fa-youtube"></i></a>
              <a href="#" className="w-[45px] h-[45px] rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#666] hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-colors"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

        </article>
      </main>

      {/* DYNAMIC BLOG NAVIGATION */}
      <BlogNavigation currentSlug="design-build-outreach" />

      <CTASection />
    </div>
  );
}
