import { useLocale } from 'next-intl';
import EnBlog from './en';
import EsBlog from './es';

import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const metadataMap: Record<string, { title: string, description: string }> = {
    en: {
      title: "Stop Buying Shared Commercial Construction Leads | Lemonade Ideas",
      description: "Discover why shared leads destroy margins. Learn how 8-figure builders use proprietary B2B inbound engines, hyper-niche SEO, and LinkedIn ads to win exclusive commercial construction leads.",
    },
    es: {
      title: "Deje de Comprar Leads de Construcción Comercial Compartidos | Lemonade Ideas",
      description: "Descubra por qué los clientes potenciales destruyen los márgenes. Aprenda cómo los constructores utilizan motores orgánicos B2B para ganar contratos y clientes potenciales comerciales asombrosos.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/commercial-construction-leads`,
      languages: {
        en: `/en/blogs/commercial-construction-leads`,
        es: `/es/blogs/commercial-construction-leads`,
      },
    },
  };
}

export default function BlogPostPage() {
  const locale = useLocale();
  return locale === 'es' ? <EsBlog /> : <EnBlog />;
}
