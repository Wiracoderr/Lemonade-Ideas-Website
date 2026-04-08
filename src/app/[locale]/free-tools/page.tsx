import { getTranslations, setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import { Link } from "@/i18n/routing";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" });
  
  return {
    title: locale === 'es' ? "Herramientas Gratuitas | Lemonade Ideas" : "Tools Hub | Lemonade Ideas",
    description: locale === 'es' ? "Herramientas de marketing para negocios de construcción." : "Marketing tools for construction businesses.",
  };
}

export default async function FreeToolsHub({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);

  return (
    <div className="bg-[#f4f7f6] min-h-screen py-16 px-4">
      <div className="max-w-[1400px] mx-auto mb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-black text-[#1E3A1A] mb-6 uppercase font-oswald tracking-tight">
          {locale === 'es' ? "Herramientas Gratuitas" : "Tools Hub"}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
          {locale === 'es' 
            ? "Explora nuestra suite de herramientas interactivas diseñadas exclusivamente para ayudar a contratistas y empresas de construcción a escalar y dominar su mercado."
            : "Explore our suite of interactive tools exclusively designed to help contractors and construction companies scale and dominate their market."}
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        
        {/* Tool 1: Leads Calculator */}
        <Link href="/free-tools/leads" className="group flex flex-col bg-white rounded-2xl shadow-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 border-2 border-transparent hover:border-[#FED52B]">
          <div className="h-40 bg-[#1E3A1A] flex items-center justify-center relative overflow-hidden">
            <svg className="w-16 h-16 text-[#FED52B] opacity-90 z-10 drop-shadow-md group-hover:scale-110 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1.99 6H7V7h10.01v2zm-8.26 3H7v-2h1.75v2zm0 3H7v-2h1.75v2zm0 3H7v-2h1.75v2zm3.5-6h-1.75v-2h1.75v2zm0 3h-1.75v-2h1.75v2zm0 3h-1.75v-2h1.75v2zm4.75 0H13v-6h4.01v6z"/></svg>
            <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10 bg-repeat"></div>
          </div>
          <div className="p-8 flex-1 flex flex-col">
            <h2 className="text-2xl font-black text-[#1E3A1A] mb-3 uppercase tracking-wide">
              {locale === 'es' ? "Calculadora de Leads y Presupuesto" : "Leads & Budget Calculator"}
            </h2>
            <p className="text-gray-600 font-medium mb-6 flex-1">
              {locale === 'es' 
                ? "Simula de forma interactiva tu presupuesto de marketing mensual. Descubre cuántas Impresiones, Clics, Leads y Clientes Exactos puedes obtener considerando los costos de California."
                : "Interactively simulate your monthly marketing budget. Discover how many Impressions, Clicks, Leads, and Exact Clients you can obtain considering California market costs."}
            </p>
            <span className="inline-block mt-auto bg-[#FED52B] text-[#1E3A1A] font-black uppercase text-sm py-3 px-6 rounded-lg text-center group-hover:bg-[#ffe16b] shadow-sm">
              {locale === 'es' ? "Abrir Herramienta" : "Open Tool"}
            </span>
          </div>
        </Link>

        {/* Tool 2: SEO Report */}
        <Link href="/free-tools/seo-report" className="group flex flex-col bg-white rounded-2xl shadow-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 border-2 border-transparent hover:border-[#FED52B]">
          <div className="h-40 bg-[#1E3A1A] flex items-center justify-center relative overflow-hidden">
            <svg className="w-16 h-16 text-[#FED52B] opacity-90 z-10 drop-shadow-md group-hover:scale-110 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24"><path d="M3 3v18h18V3H3zm14 14h-2v-4h2v4zm-4 0h-2v-8h2v8zm-4 0H7v-6h2v6z"/></svg>
            <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10 bg-repeat"></div>
          </div>
          <div className="p-8 flex-1 flex flex-col">
            <h2 className="text-2xl font-black text-[#1E3A1A] mb-3 uppercase tracking-wide">
              {locale === 'es' ? "Auditoría SEO de Contratistas" : "Contractor SEO Audit"}
            </h2>
            <p className="text-gray-600 font-medium mb-6 flex-1">
              {locale === 'es' 
                ? "Analiza tu sitio web actual y descubre por qué estás perdiendo posiciones críticas en Google contra tu competencia más fuerte."
                : "Analyze your current website and discover why you're losing critical Google rankings against your strongest competitors."}
            </p>
            <span className="inline-block mt-auto bg-[#FED52B] text-[#1E3A1A] font-black uppercase text-sm py-3 px-6 rounded-lg text-center group-hover:bg-[#ffe16b] shadow-sm">
              {locale === 'es' ? "Abrir Herramienta" : "Open Tool"}
            </span>
          </div>
        </Link>
        
      </div>
    </div>
  );
}
