import { useLocale } from 'next-intl';
import EnBlog from './en';
import EsBlog from './es';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const metadataMap: Record<string, { title: string, description: string }> = {
    en: {
      title: "Fractional CMO for Construction: Executive Growth Without the $250k Salary",
      description: "Discover why elite 8-figure construction firms deploy the Fractional CMO model to build lethal pipelines and dominate their commercial market share agilely.",
    },
    es: {
      title: "CMO Fraccional para Construcción: Crecimiento Ejecutivo Sin el Salario de $250k",
      description: "Descubra por qué las firmas de construcción de élite de 8 cifras utilizan el modelo de CMO Fraccional para construir embudos letales y dominar ágilmente su cuota de mercado.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/fractional-cmo-construction`,
      languages: {
        en: `/en/blogs/fractional-cmo-construction`,
        es: `/es/blogs/fractional-cmo-construction`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://www.lemonadeideas.com/${locale}/blogs/fractional-cmo-construction`,
      siteName: 'Lemonade Ideas',
      images: [
        {
          url: 'https://www.lemonadeideas.com/images/blogs/fractional-cmo-construction/hero.png',
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
      images: ['https://www.lemonadeideas.com/images/blogs/fractional-cmo-construction/hero.png'],
    },
  };
}

export default function BlogPostPage() {
  const locale = useLocale();
  return locale === 'es' ? <EsBlog /> : <EnBlog />;
}
