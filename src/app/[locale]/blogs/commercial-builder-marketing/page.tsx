import { useLocale } from 'next-intl';
import EnBlog from './en';
import EsBlog from './es';

import { Metadata } from 'next';
import ArticleSchema from '@/components/seo/ArticleSchema';
import blogsData from '@/data/blogs.json';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const metadataMap: Record<string, { title: string, description: string }> = {
    en: {
      title: "Commercial Builder Marketing: The Blueprint for $10M+ Contracts",
      description: "Why elite commercial construction firms bleed multi-million dollar contracts due to completely ignoring authoritative commercial builder marketing strategies.",
    },
    es: {
      title: "Marketing para Constructoras Comerciales: La Base para Contratos de $10M+",
      description: "Por qué las grandes firmas comerciales pierden millones en contratos al ignorar la autoridad del marketing para constructoras comerciales.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/commercial-builder-marketing`,
      languages: {
        en: `/en/blogs/commercial-builder-marketing`,
        es: `/es/blogs/commercial-builder-marketing`,
      },
    },
  };
}

export default function BlogPostPage() {
  const locale = useLocale();
  const slug = 'commercial-builder-marketing';
  const meta = blogsData.find(b => b.slug === slug);

  return (
    <>
      <ArticleSchema 
        title={meta?.title || ""}
        description={meta?.title || ""}
        publishDate={meta?.date || ""}
        slug={slug}
      />
      {locale === 'es' ? <EsBlog /> : <EnBlog />}
    </>
  );
}
