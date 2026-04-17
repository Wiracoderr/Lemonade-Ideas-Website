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
      title: "Construction Sales Funnel: The 5-Stage Revenue Machine That Converts Cold Prospects Into $5M Contracts",
      description: "Stop improvising your sales process. Learn the 5-stage systematic funnel that elite GCs use to convert cold prospects into signed $5M+ commercial construction contracts.",
    },
    es: {
      title: "Embudo de Ventas en Construcción: La Máquina de 5 Etapas que Convierte Prospectos Fríos en Contratos de $5M",
      description: "Deja de improvisar tu proceso de ventas. Aprende el embudo sistemático de 5 etapas que los contratistas élite usan para cerrar contratos comerciales de $5M+.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/construction-sales-funnel`,
      languages: {
        en: `/en/blogs/construction-sales-funnel`,
        es: `/es/blogs/construction-sales-funnel`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://www.lemonadeideas.com/${locale}/blogs/construction-sales-funnel`,
      siteName: 'Lemonade Ideas',
      images: [
        {
          url: 'https://www.lemonadeideas.com/images/blogs/construction-sales-funnel/hero.png',
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
      images: ['https://www.lemonadeideas.com/images/blogs/construction-sales-funnel/hero.png'],
    },
  };
}

export default function BlogPostPage() {
  const locale = useLocale();
  const slug = 'construction-sales-funnel';
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
