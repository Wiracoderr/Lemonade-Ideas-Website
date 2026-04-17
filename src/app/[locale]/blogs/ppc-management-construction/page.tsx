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
      title: "PPC Management for Construction Companies: Stop Burning $50K/Year on Google Ads",
      description: "Why 91% of contractors waste their Google Ads budget on residential noise and zero commercial contracts. Learn surgical PPC management strategies for 8-figure construction pipelines.",
    },
    es: {
      title: "Gestión PPC para Empresas de Construcción: Deje de Quemar $50K/Año en Google Ads",
      description: "Por qué el 91% de los contratistas desperdician su presupuesto de Google Ads en ruido residencial y cero contratos comerciales. Aprenda estrategias quirúrgicas de gestión PPC.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/ppc-management-construction`,
      languages: {
        en: `/en/blogs/ppc-management-construction`,
        es: `/es/blogs/ppc-management-construction`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://www.lemonadeideas.com/${locale}/blogs/ppc-management-construction`,
      siteName: 'Lemonade Ideas',
      images: [
        {
          url: 'https://www.lemonadeideas.com/images/blogs/ppc-management-construction/hero.png',
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
      images: ['https://www.lemonadeideas.com/images/blogs/ppc-management-construction/hero.png'],
    },
  };
}

export default function BlogPostPage() {
  const locale = useLocale();
  const slug = 'ppc-management-construction';
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
