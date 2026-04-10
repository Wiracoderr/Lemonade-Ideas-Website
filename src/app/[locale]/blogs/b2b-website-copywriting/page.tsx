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
      title: "B2B Website Copywriting: The Sentry Tone for General Contractors",
      description: "Why your generic, family-owned website copy is aggressively destroying your chances at winning heavy commercial $30M construction projects.",
    },
    es: {
      title: "Copywriting B2B: El Tono Institucional Letal para Contratistas Generales",
      description: "Por qué los discursos amigables sobre 'valores y calidez' de su constructora están liquidando instantáneamente licitaciones de $30 millones.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/b2b-website-copywriting`,
      languages: {
        en: `/en/blogs/b2b-website-copywriting`,
        es: `/es/blogs/b2b-website-copywriting`,
      },
    },
  };
}

export default function BlogPostPage() {
  const locale = useLocale();
  const slug = 'b2b-website-copywriting';
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
