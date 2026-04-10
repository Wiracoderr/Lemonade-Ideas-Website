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
      title: "Construction Lead Magnets: Weaponizing Intelligence for Exteme B2B Execution",
      description: "Why generic newsletters instantly annihilate your institutional credibility, and how to mandate verified corporate data for your firm's structural blueprints.",
    },
    es: {
      title: "Lead Magnets de Construcción: Perímetros Implacables Para Inversión",
      description: "Por qué las corporaciones que reparten guías y correos masivos vacían los fondos de reputación directiva. Domina los correos y perimetraliza en gran asedio corporativo élitista.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/construction-lead-magnets`,
      languages: {
        en: `/en/blogs/construction-lead-magnets`,
        es: `/es/blogs/construction-lead-magnets`,
      },
    },
  };
}

export default function BlogPostPage() {
  const locale = useLocale();
  const slug = 'construction-lead-magnets';
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
