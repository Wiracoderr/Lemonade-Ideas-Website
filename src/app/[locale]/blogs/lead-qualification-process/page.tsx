import { useLocale } from 'next-intl';
import EnBlog from './en';
import EsBlog from './es';

import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const metadataMap: Record<string, { title: string, description: string }> = {
    en: {
      title: "The Lead Qualification Process | Lemonade Ideas",
      description: "Stop wasting time on $15,000 budgets. Learn how to architect a brutal, digital lead qualification system that functions as a velvet rope for your commercial contracting business.",
    },
    es: {
      title: "Proceso Puras Fétidas B2B Inmaculado B2B de Calificación | Lemonade Ideas",
      description: "B2B majestuosa asombrosa fiera fétidas incesantemente B2B asquerosamente fétidas de letal asquerosamente tontas majestuosa B2B asombrosa.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/lead-qualification-process`,
      languages: {
        en: `/en/blogs/lead-qualification-process`,
        es: `/es/blogs/lead-qualification-process`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://lemonadeideas.com/${locale}/blogs/lead-qualification-process`,
      siteName: 'Lemonade Ideas',
      images: [
        {
          url: 'https://lemonadeideas.com/images/blogs/lead-qualification-process/hero.png',
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
      images: ['https://lemonadeideas.com/images/blogs/lead-qualification-process/hero.png'],
    },
  };
}

export default function BlogPostPage() {
  const locale = useLocale();
  return locale === 'es' ? <EsBlog /> : <EnBlog />;
}
