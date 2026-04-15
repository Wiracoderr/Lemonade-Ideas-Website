import { useLocale } from 'next-intl';
import EnBlog from './en';
import EsBlog from './es';


import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const metadataMap: Record<string, { title: string, description: string }> = {
    en: {
      title: "Fast Loading Sites: The Mandatory Digital Speed Required to Close Elite Construction Bids",
      description: "Discover why wealthy B2B commercial developers instantly bounce from slow contractor websites and how Core Web Vitals optimization protects your firm's professional authority.",
    },
    es: {
      title: "Sitios Web Rápidos: La Velocidad Digital Obligatoria Requerida para Cerrar Licitaciones de Alta Construcción",
      description: "Descubra por qué los desarrolladores comerciales multimillonarios B2B rebotan instantáneamente de sitios web de contratistas lentos y cómo la optimización de Core Web Vitals protege la autoridad profesional de su firma.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/fast-loading-sites`,
      languages: {
        en: `/en/blogs/fast-loading-sites`,
        es: `/es/blogs/fast-loading-sites`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://lemonadeideas.com/${locale}/blogs/fast-loading-sites`,
      siteName: 'Lemonade Ideas',
      images: [
        {
          url: 'https://lemonadeideas.com/images/blogs/fast-loading-sites/hero.png',
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
      images: ['https://lemonadeideas.com/images/blogs/fast-loading-sites/hero.png'],
    },
  };
}


export default function BlogPostPage() {
  const locale = useLocale();
  return locale === 'es' ? <EsBlog /> : <EnBlog />;
}
