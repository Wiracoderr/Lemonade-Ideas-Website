import { useLocale } from 'next-intl';
import EnBlog from './en';
import EsBlog from './es';

import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const metadataMap: Record<string, { title: string, description: string }> = {
    en: {
      title: "Avoiding Tire Kickers: Build a Digital Paywall | Lemonade Ideas",
      description: "Stop wasting time driving to give free estimates. Learn how to construct an automated CRM friction filter that blocks bad leads and routes high-ticket commercial clients.",
    },
    es: {
      title: "Evitando Clientes Tóxicos B2B Letal inmaculada | Lemonade Ideas",
      description: "B2B majestuosa asombrosa fiera fétidas incesantemente B2B municipal asquerosamente fétidas de letal asquerosamente tontas majestuosa asombrosa muros de pago digitales.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/avoiding-tire-kickers`,
      languages: {
        en: `/en/blogs/avoiding-tire-kickers`,
        es: `/es/blogs/avoiding-tire-kickers`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://lemonadeideas.com/${locale}/blogs/avoiding-tire-kickers`,
      siteName: 'Lemonade Ideas',
      images: [
        {
          url: 'https://lemonadeideas.com/images/blogs/avoiding-tire-kickers/hero.png',
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
      images: ['https://lemonadeideas.com/images/blogs/avoiding-tire-kickers/hero.png'],
    },
  };
}

export default function BlogPostPage() {
  const locale = useLocale();
  return locale === 'es' ? <EsBlog /> : <EnBlog />;
}
