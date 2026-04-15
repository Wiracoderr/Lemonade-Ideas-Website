import { useLocale } from 'next-intl';
import EnBlog from './en';
import EsBlog from './es';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const metadataMap: Record<string, { title: string, description: string }> = {
    en: {
      title: "Pipeline Velocity for Builders: How 8-Figure Contractors Compress 6-Month Sales Cycles into 30 Days",
      description: "Traditional commercial builders bleed capital waiting on slow decisions. Learn how elite contractors engineer pipeline velocity to force multimillion-dollar contracts to a brutal, efficient conclusion.",
    },
    es: {
      title: "Velocidad de Pipeline para Constructores: Cómo Contratistas de 8 Cifras Comprimen Ciclos de Ventas de 6 Meses a 30 Días",
      description: "Los constructores comerciales tradicionales sangran capital esperando decisiones lentas. Aprenda cómo los contratistas de élite ingenian la velocidad del embudo para forzar contratos multimillonarios a una rápida conclusión.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/pipeline-velocity-builders`,
      languages: {
        en: `/en/blogs/pipeline-velocity-builders`,
        es: `/es/blogs/pipeline-velocity-builders`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://lemonadeideas.com/${locale}/blogs/pipeline-velocity-builders`,
      siteName: 'Lemonade Ideas',
      images: [
        {
          url: 'https://lemonadeideas.com/images/blogs/pipeline-velocity-builders/hero.png',
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: ['https://lemonadeideas.com/images/blogs/pipeline-velocity-builders/hero.png'],
    },
  };
}

export default function BlogPostPage() {
  const locale = useLocale();
  return locale === 'es' ? <EsBlog /> : <EnBlog />;
}
