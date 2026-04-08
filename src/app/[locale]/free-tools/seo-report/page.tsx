import { getTranslations, setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import SeoReportTool from "@/components/free-tools/SeoReportTool";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" });
  
  return {
    title: locale === 'es' ? "Auditoría SEO | Lemonade Ideas" : "SEO Audit | Lemonade Ideas",
    description: locale === 'es' ? "Reporte de auditoría SEO gratuito." : "Free SEO audit report.",
  };
}

export default async function SeoReportPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);

  return (
    <div className="bg-[#f4f7f6] min-h-screen py-16 px-4">
      <div className="max-w-[1400px] mx-auto mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-[#1E3A1A] mb-4 uppercase font-oswald tracking-tight">
          {locale === 'es' ? "Auditoría SEO Gratuita" : "Free SEO Audit"}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium mb-10">
          {locale === 'es' 
            ? "Descubre exactamente qué detiene a tu sitio web de dominar los resultados de Google."
            : "Discover exactly what is stopping your website from dominating Google's search results."}
        </p>
      </div>

      <SeoReportTool />
    </div>
  );
}
