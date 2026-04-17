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
      title: "Blueprint Web Design: The Next.js Structural Standard for Contractors",
      description: "Why a $50M commercial construction firm cannot afford to run their brand on a bloated $500 Wordpress template, and how Next.js engineers digital supremacy.",
    },
    es: {
      title: "Blueprint Web Design: El Estándar Estructural Next.js para Contratistas",
      description: "Por qué las firmas comerciales de California están destruyendo su reputación corporativa usando plantillas anticuadas de WordPress en lugar de infraestructura UI/UX impecable.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/blueprint-web-design`,
      languages: {
        en: `/en/blogs/blueprint-web-design`,
        es: `/es/blogs/blueprint-web-design`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://www.lemonadeideas.com/${locale}/blogs/blueprint-web-design`,
      siteName: 'Lemonade Ideas',
      images: [
        {
          url: 'https://www.lemonadeideas.com/images/blogs/blueprint-web-design/hero.png',
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
      images: ['https://www.lemonadeideas.com/images/blogs/blueprint-web-design/hero.png'],
    },
  };
}

export default function BlogPostPage() {
  const locale = useLocale();
  const slug = 'blueprint-web-design';
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
