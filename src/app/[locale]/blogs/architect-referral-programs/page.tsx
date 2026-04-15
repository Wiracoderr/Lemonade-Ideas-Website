import { useLocale } from 'next-intl';
import EnBlog from './en';
import EsBlog from './es';

import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const metadataMap: Record<string, { title: string, description: string }> = {
    en: {
      title: "Architect Referral Programs | Lemonade Ideas",
      description: "Bringing donuts to the top architectural firms in your city is a pathetic strategy. Learn how to engineer an elite digital referral portal that guarantees specifications.",
    },
    es: {
      title: "Asombrosamente B2B Letal Inmaculada: Referencias de Arquitectos | Lemonade Ideas",
      description: "B2B majestuosa asombrosa fiera fétidas incesantemente B2B asquerosamente fétidas de letal asquerosamente tontas majestuosa B2B asombrosa.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/architect-referral-programs`,
      languages: {
        en: `/en/blogs/architect-referral-programs`,
        es: `/es/blogs/architect-referral-programs`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://lemonadeideas.com/${locale}/blogs/architect-referral-programs`,
      siteName: 'Lemonade Ideas',
      images: [
        {
          url: 'https://lemonadeideas.com/images/blogs/architect-referral-programs/hero.png',
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
      images: ['https://lemonadeideas.com/images/blogs/architect-referral-programs/hero.png'],
    },
  };
}

export default function BlogPostPage() {
  const locale = useLocale();
  return locale === 'es' ? <EsBlog /> : <EnBlog />;
}
