import { useLocale } from 'next-intl';
import EnBlog from './en';
import EsBlog from './es';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const metadataMap: Record<string, { title: string, description: string }> = {
    en: {
      title: "Mobile First Contractors Guide: Winning Digital Infrastructure for $10M+ Bids",
      description: "Learn why a mobile-first website architecture acts as the ultimate psychological credibility test for commercial developers assigning $10M+ construction projects.",
    },
    es: {
      title: "Guía Mobile First para Contratistas: Infraestructura Digital Ganadora para Licitaciones de $10M+",
      description: "Descubra por qué una arquitectura web mobile-first actúa como la prueba de credibilidad psicológica definitiva para desarrolladores comerciales que asignan proyectos de $10M+.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/mobile-first-contractors-guide`,
      languages: {
        en: `/en/blogs/mobile-first-contractors-guide`,
        es: `/es/blogs/mobile-first-contractors-guide`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://lemonadeideas.com/${locale}/blogs/mobile-first-contractors-guide`,
      siteName: 'Lemonade Ideas',
      images: [
        {
          url: 'https://lemonadeideas.com/images/blogs/mobile-first-contractors-guide/hero.png',
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
      images: ['https://lemonadeideas.com/images/blogs/mobile-first-contractors-guide/hero.png'],
    },
  };
}

export default function BlogPostPage() {
  const locale = useLocale();
  return locale === 'es' ? <EsBlog /> : <EnBlog />;
}
