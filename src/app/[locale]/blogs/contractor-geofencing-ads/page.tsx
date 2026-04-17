import { useLocale } from 'next-intl';
import EnBlog from './en';
import EsBlog from './es';


import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const metadataMap: Record<string, { title: string, description: string }> = {
    en: {
      title: "Contractor Geofencing Ads: Hijack Your Competitor's Commercial Leads",
      description: "Discover the ultimate B2B construction marketing weapon. Learn how to deploy hyper-targeted Contractor Geofencing Ads to capture leads directly from competitor jobsites.",
    },
    es: {
      title: "Anuncios de Geocercado para Contratistas: Secuestre los Clientes Comerciales de su Competencia",
      description: "Descubra el arma definitiva de marketing de construcción B2B. Aprenda a desplegar anuncios de Geocercado hiper-segmentados para capturar clientes potenciales directamente de las obras de la competencia.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/contractor-geofencing-ads`,
      languages: {
        en: `/en/blogs/contractor-geofencing-ads`,
        es: `/es/blogs/contractor-geofencing-ads`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://www.lemonadeideas.com/${locale}/blogs/contractor-geofencing-ads`,
      siteName: 'Lemonade Ideas',
      images: [
        {
          url: 'https://www.lemonadeideas.com/images/blogs/contractor-geofencing-ads/hero.webp',
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
      images: ['https://www.lemonadeideas.com/images/blogs/contractor-geofencing-ads/hero.webp'],
    },
  };
}


export default function BlogPostPage() {
  const locale = useLocale();
  return locale === 'es' ? <EsBlog /> : <EnBlog />;
}
