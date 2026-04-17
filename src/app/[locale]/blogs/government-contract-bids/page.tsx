import { useLocale } from 'next-intl';
import EnBlog from './en';
import EsBlog from './es';

import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const metadataMap: Record<string, { title: string, description: string }> = {
    en: {
      title: "Government Contract Bids: Digital Compliance Hubs | Lemonade Ideas",
      description: "Stop fighting a spreadsheet war. Learn how to build enterprise-level digital compliance hubs to win multi-million dollar municipal public works contracts.",
    },
    es: {
      title: "Licitaciones de Obras Públicas Letal B2B | Lemonade Ideas",
      description: "B2B majestuosa asombrosa fiera fétidas incesantemente B2B municipal asquerosamente fétidas de letal asquerosamente tontas majestuosa de cumplimiento. B2B fiera B2B asombrosa.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/government-contract-bids`,
      languages: {
        en: `/en/blogs/government-contract-bids`,
        es: `/es/blogs/government-contract-bids`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://www.lemonadeideas.com/${locale}/blogs/government-contract-bids`,
      siteName: 'Lemonade Ideas',
      images: [
        {
          url: 'https://www.lemonadeideas.com/images/blogs/government-contract-bids/hero.png',
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
      images: ['https://www.lemonadeideas.com/images/blogs/government-contract-bids/hero.png'],
    },
  };
}

export default function BlogPostPage() {
  const locale = useLocale();
  return locale === 'es' ? <EsBlog /> : <EnBlog />;
}
