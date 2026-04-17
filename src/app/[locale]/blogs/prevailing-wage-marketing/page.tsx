import { useLocale } from 'next-intl';
import EnBlog from './en';
import EsBlog from './es';

import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const metadataMap: Record<string, { title: string, description: string }> = {
    en: {
      title: "Prevailing Wage Marketing: Winning Highly-Lucrative Municipal Construction Contracts",
      description: "Discover the tactical approach to Prevailing Wage Marketing for construction firms. Learn how to target municipalities, navigate compliance, and aggressively capture massive public works projects.",
    },
    es: {
      title: "Marketing de Obras Públicas y Salario Prevaleciente: Ganando Contratos Municipales Altamente Lucrativos",
      description: "Descubra el enfoque táctico para el marketing de obras públicas para empresas constructoras. Aprenda cómo apuntar a los municipios y capturar agresivamente proyectos masivos.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/prevailing-wage-marketing`,
      languages: {
        en: `/en/blogs/prevailing-wage-marketing`,
        es: `/es/blogs/prevailing-wage-marketing`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://www.lemonadeideas.com/${locale}/blogs/prevailing-wage-marketing`,
      siteName: 'Lemonade Ideas',
      images: [
        {
          url: 'https://www.lemonadeideas.com/images/blogs/prevailing-wage-marketing/hero.png',
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
      images: ['https://www.lemonadeideas.com/images/blogs/prevailing-wage-marketing/hero.png'],
    },
  };
}

export default function BlogPostPage() {
  const locale = useLocale();
  return locale === 'es' ? <EsBlog /> : <EnBlog />;
}
