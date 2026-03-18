import { useLocale } from 'next-intl';
import EnBlog from './en';
import EsBlog from './es';

import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const metadataMap: Record<string, { title: string, description: string }> = {
    en: {
      title: "Trade Show Marketing: Why 90% of Contractors Burn Cash (And How to Actually ROI)",
      description: "Stop handing out pens. Learn the elite B2B trade show strategy including pre-show CRM integration, geo-fenced ads, and automated post-show pipelines.",
    },
    es: {
      title: "Marketing en Ferias Comerciales: Por Qué el 90% de los Contratistas Queman Efectivo (Y Cómo Obtener ROI Real)",
      description: "Descubra la estrategia de ferias comerciales B2B de élite. Integración de CRM, geocercas y embudos agresivos automatizados posteriores al evento.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/trade-show-marketing`,
      languages: {
        en: `/en/blogs/trade-show-marketing`,
        es: `/es/blogs/trade-show-marketing`,
      },
    },
  };
}

export default function BlogPostPage() {
  const locale = useLocale();
  return locale === 'es' ? <EsBlog /> : <EnBlog />;
}
