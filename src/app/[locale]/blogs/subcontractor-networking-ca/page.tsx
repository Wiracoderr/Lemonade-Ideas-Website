import { useLocale } from 'next-intl';
import EnBlog from './en';
import EsBlog from './es';

import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const metadataMap: Record<string, { title: string, description: string }> = {
    en: {
      title: "Subcontractor Networking in CA: Builder Alliances | Lemonade Ideas",
      description: "Amateur GCs rely on a rolodex. Elite contractors build Automated Alliance Matrices. Learn how to construct a digital dossier for California subcontractors.",
    },
    es: {
      title: "Red de Subcontratistas B2B Letal inmaculada en CA | Lemonade Ideas",
      description: "B2B majestuosa asombrosa fiera fétidas incesantemente B2B municipal asquerosamente matriz de alianza asombrosa.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/subcontractor-networking-ca`,
      languages: {
        en: `/en/blogs/subcontractor-networking-ca`,
        es: `/es/blogs/subcontractor-networking-ca`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://lemonadeideas.com/${locale}/blogs/subcontractor-networking-ca`,
      siteName: 'Lemonade Ideas',
      images: [
        {
          url: 'https://lemonadeideas.com/images/blogs/subcontractor-networking-ca/hero.png',
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
      images: ['https://lemonadeideas.com/images/blogs/subcontractor-networking-ca/hero.png'],
    },
  };
}

export default function BlogPostPage() {
  const locale = useLocale();
  return locale === 'es' ? <EsBlog /> : <EnBlog />;
}
