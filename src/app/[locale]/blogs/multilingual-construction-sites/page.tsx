import { useLocale } from 'next-intl';
import EnBlog from './en';
import EsBlog from './es';

import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const metadataMap: Record<string, { title: string, description: string }> = {
    en: {
      title: "The Monolingual Bottleneck: Missing Elite Subcontractors and Municipal Bids in CA",
      description: "Scaling $10M+ commercial developers in California are bleeding elite bilingual pipeline and forfeiting lucrative municipal public works RFPs entirely due to archaic, english-only corporate digital infrastructure.",
    },
    es: {
      title: "El Cuello de Botella Monolingüe: Perdiendo Subcontratistas y Obras Públicas en California",
      description: "Las desarrolladoras comerciales de $10M+ en California están perdiendo contratos municipales y recursos élites bilingües simplemente debido a una infraestructura digital corporativa anticuada, monolingüe y sin Next.js.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/multilingual-construction-sites`,
      languages: {
        en: `/en/blogs/multilingual-construction-sites`,
        es: `/es/blogs/multilingual-construction-sites`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://lemonadeideas.com/${locale}/blogs/multilingual-construction-sites`,
      siteName: 'Lemonade Ideas',
      images: [
        {
          url: 'https://lemonadeideas.com/images/blogs/multilingual-construction-sites/hero.png',
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
      images: ['https://lemonadeideas.com/images/blogs/multilingual-construction-sites/hero.png'],
    },
  };
}

export default function BlogPostPage() {
  const locale = useLocale();
  return locale === 'es' ? <EsBlog /> : <EnBlog />;
}
