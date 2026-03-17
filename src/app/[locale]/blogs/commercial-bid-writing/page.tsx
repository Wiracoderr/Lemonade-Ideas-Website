import { useLocale } from 'next-intl';
import EnBlog from './en';
import EsBlog from './es';


import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const metadataMap: Record<string, { title: string, description: string }> = {
    en: {
      title: "Commercial Bid Writing: The Elite Strategy to Stop Losing $15M Projects to Inferior Competiors",
      description: "Discover why highly competent construction firms lose massive commercial bids to inferior companies simply because they submit mathematically weak, aesthetically pathetic proposals to ruthless REIT managers.",
    },
    es: {
      title: "Redacción de Licitaciones B2B: La Estrategia de Élite para Dejar de Perder Proyectos de $15M ante Competidores Inferiores",
      description: "Descubra por qué empresas de construcción altamente competentes pierden masivas licitaciones comerciales ante compañías infames simplemente porque presentan matemáticas débiles y propuestas estéticamente patéticas a los despiadados gerentes de REIT.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/commercial-bid-writing`,
      languages: {
        en: `/en/blogs/commercial-bid-writing`,
        es: `/es/blogs/commercial-bid-writing`,
      },
    },
  };
}


export default function BlogPostPage() {
  const locale = useLocale();
  return locale === 'es' ? <EsBlog /> : <EnBlog />;
}
