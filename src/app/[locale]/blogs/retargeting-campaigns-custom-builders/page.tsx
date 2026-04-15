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
      title: "Retargeting Campaigns for Custom Builders: The $3M Invisible Pipeline",
      description: "Why 96% of custom builder website visitors leave without converting and how precision retargeting campaigns recover abandoned prospects into signed multi-million dollar construction contracts.",
    },
    es: {
      title: "Campañas de Retargeting para Constructores Personalizados: El Pipeline Invisible de $3M",
      description: "Por qué el 96% de los visitantes de sitios web de constructores se van sin convertir y cómo las campañas de retargeting de precisión recuperan prospectos abandonados en contratos firmados.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/retargeting-campaigns-custom-builders`,
      languages: {
        en: `/en/blogs/retargeting-campaigns-custom-builders`,
        es: `/es/blogs/retargeting-campaigns-custom-builders`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://lemonadeideas.com/${locale}/blogs/retargeting-campaigns-custom-builders`,
      siteName: 'Lemonade Ideas',
      images: [
        {
          url: 'https://lemonadeideas.com/images/blogs/retargeting-campaigns-custom-builders/hero.png',
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
      images: ['https://lemonadeideas.com/images/blogs/retargeting-campaigns-custom-builders/hero.png'],
    },
  };
}

export default function BlogPostPage() {
  const locale = useLocale();
  const slug = 'retargeting-campaigns-custom-builders';
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
