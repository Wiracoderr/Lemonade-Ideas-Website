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
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://lemonadeideas.com/${locale}/blogs/construction-lead-magnets`,
      siteName: 'Lemonade Ideas',
      images: [
        {
          url: 'https://lemonadeideas.com/images/blogs/construction-lead-magnets/hero.png',
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
      images: ['https://lemonadeideas.com/images/blogs/construction-lead-magnets/hero.png'],
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
