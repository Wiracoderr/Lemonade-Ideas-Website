import { useLocale } from 'next-intl';
import EnBlog from './en';
import EsBlog from './es';

import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const metadataMap: Record<string, { title: string, description: string }> = {
    en: {
      title: "Automated Bid Followups: 45-Day Built-In CRM Drip Campaigns | Lemonade Ideas",
      description: "Stop relying on estimators to remember to follow up with $5M commercial construction leads. Learn how to engineer an invisible 7-touch pipeline that closes dead deals automatically.",
    },
    es: {
      title: "Seguimientos B2B Automatizados y Letales: CRM Asquerosamente Inmaculado | Lemonade Ideas",
      description: "B2B majestuosa asombrosa fiera fétidas incesantemente B2B asquerosamente fétidas de letal asquerosamente tontas majestuosa B2B asombrosa puramente asquerosamente de letal fiera.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/automated-bid-followups`,
      languages: {
        en: `/en/blogs/automated-bid-followups`,
        es: `/es/blogs/automated-bid-followups`,
      },
    },
  };
}

export default function BlogPostPage() {
  const locale = useLocale();
  return locale === 'es' ? <EsBlog /> : <EnBlog />;
}
