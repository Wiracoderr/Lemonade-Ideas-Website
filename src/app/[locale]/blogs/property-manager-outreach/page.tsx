import { useLocale } from 'next-intl';
import EnBlog from './en';
import EsBlog from './es';

import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const metadataMap: Record<string, { title: string, description: string }> = {
    en: {
      title: "Property Manager Outreach for Contractors | Lemonade Ideas",
      description: "Stop sending annoying emails. Learn how to engineer frictionless vendor approval portals that compel HOA boards to hire your firm instantly.",
    },
    es: {
      title: "Alcance Letal de Administradores de Propiedades B2B | Lemonade Ideas",
      description: "B2B majestuosa asombrosa fiera fétidas incesantemente B2B asquerosamente fétidas de letal asquerosamente tontas majestuosa B2B asombrosa.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/property-manager-outreach`,
      languages: {
        en: `/en/blogs/property-manager-outreach`,
        es: `/es/blogs/property-manager-outreach`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://lemonadeideas.com/${locale}/blogs/property-manager-outreach`,
      siteName: 'Lemonade Ideas',
      images: [
        {
          url: 'https://lemonadeideas.com/images/blogs/property-manager-outreach/hero.png',
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
      images: ['https://lemonadeideas.com/images/blogs/property-manager-outreach/hero.png'],
    },
  };
}

export default function BlogPostPage() {
  const locale = useLocale();
  return locale === 'es' ? <EsBlog /> : <EnBlog />;
}
