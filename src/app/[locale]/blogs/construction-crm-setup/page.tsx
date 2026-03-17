import { useLocale } from 'next-intl';
import EnBlog from './en';
import EsBlog from './es';


import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const metadataMap: Record<string, { title: string, description: string }> = {
    en: {
      title: "The 8-Figure Contractor's Blueprint for Construction CRM Setup & Pipeline Velocity",
      description: "Stop leaking high-ticket commercial leads. Discover exactly how to architect a modern Construction CRM that automates follow-ups, integrates with estimating software, and dramatically increases your close rate.",
    },
    es: {
      title: "El Plano del Contratista de 8 Cifras para Configurar su CRM de Construcción y Acelerar su Embudo",
      description: "Deje de perder prospectos comerciales de alto valor. Descubra exactamente cómo diseñar un CRM de Construcción moderno que automatice seguimientos, se integre con software de estimación y aumente drásticamente su tasa de cierre.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/construction-crm-setup`,
      languages: {
        en: `/en/blogs/construction-crm-setup`,
        es: `/es/blogs/construction-crm-setup`,
      },
    },
  };
}


export default function BlogPostPage() {
  const locale = useLocale();
  return locale === 'es' ? <EsBlog /> : <EnBlog />;
}
