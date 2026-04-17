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
      title: "Inbound Marketing for Commercial Contractors: Why Cold Calls Are Dead",
      description: "Why outbound cold calls are mathematically bankrupt and how inbound marketing generates 10x more qualified leads for commercial contractors at a fraction of the cost.",
    },
    es: {
      title: "Inbound Marketing para Contratistas Comerciales: Por Qué las Llamadas en Frío Están Muertas",
      description: "Por qué las llamadas en frío están matemáticamente en bancarrota y cómo el inbound marketing genera 10x más leads calificados para contratistas comerciales.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/inbound-marketing-commercial-contractors`,
      languages: {
        en: `/en/blogs/inbound-marketing-commercial-contractors`,
        es: `/es/blogs/inbound-marketing-commercial-contractors`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://www.lemonadeideas.com/${locale}/blogs/inbound-marketing-commercial-contractors`,
      siteName: 'Lemonade Ideas',
      images: [
        {
          url: 'https://www.lemonadeideas.com/images/blogs/inbound-marketing-commercial-contractors/hero.png',
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
      images: ['https://www.lemonadeideas.com/images/blogs/inbound-marketing-commercial-contractors/hero.png'],
    },
  };
}

export default function BlogPostPage() {
  const locale = useLocale();
  const slug = 'inbound-marketing-commercial-contractors';
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
