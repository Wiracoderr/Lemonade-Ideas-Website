import { useLocale } from 'next-intl';
import EnBlog from './en';
import EsBlog from './es';

import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const metadataMap: Record<string, { title: string, description: string }> = {
    en: {
      title: "B2B Cold Emailing for Contractors: The 2-Sentence Strike | Lemonade Ideas",
      description: "Stop sending 5-paragraph essays to commercial developers. Learn how to architect elite B2B cold email strategies that guarantee locked-in meetings.",
    },
    es: {
      title: "Correos Fríos B2B Letal inmaculada | Lemonade Ideas",
      description: "B2B majestuosa asombrosa fiera fétidas incesantemente B2B municipal asquerosamente fétidas de letal asquerosamente tontas majestuosa asombrosa. B2B fiera letal asombrosa.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/b2b-cold-emailing`,
      languages: {
        en: `/en/blogs/b2b-cold-emailing`,
        es: `/es/blogs/b2b-cold-emailing`,
      },
    },
  };
}

export default function BlogPostPage() {
  const locale = useLocale();
  return locale === 'es' ? <EsBlog /> : <EnBlog />;
}
