import { getTranslations, setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import MarketingCalculator from "@/components/free-tools/MarketingCalculator";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" });
  
  return {
    title: locale === 'es' ? "Calculadora de Leads | Lemonade Ideas" : "Leads Calculator | Lemonade Ideas",
    description: locale === 'es' ? "Calculadora de presupuesto de marketing para leads." : "Marketing budget calculator for leads.",
  };
}

export default async function LeadsToolPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);

  return (
    <div className="bg-[#f4f7f6] min-h-screen py-16 px-4">
      <div className="max-w-[1400px] mx-auto mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-[#1E3A1A] mb-4 uppercase font-oswald tracking-tight">
          {locale === 'es' ? "Calculadora de Inversión y Leads" : "Marketing Leads Calculator"}
        </h1>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto font-medium mb-10">
          {locale === 'es' 
            ? "Mide tu costo de adquisición exacto basado en el mercado de la construcción de California."
            : "Measure your exact acquisition cost based on the California construction market."}
        </p>
      </div>

      <MarketingCalculator />
    </div>
  );
}
