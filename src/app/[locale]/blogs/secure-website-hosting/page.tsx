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
      title: "Secure Website Hosting: The $20M Trust Baseline for Elite Contractors",
      description: "Why elite commercial construction firms are bleeding massive capital bids because of 'Not Secure' browser warnings and cheap shared website hosting.",
    },
    es: {
      title: "Alojamiento Web Seguro: La Base de $20M de Confianza para Contratistas Élite",
      description: "Por qué las grandes firmas constructoras están perdiendo millones al mostrar advertencias de conexiones no seguras a inversores institucionales y clientes B2B.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/secure-website-hosting`,
      languages: {
        en: `/en/blogs/secure-website-hosting`,
        es: `/es/blogs/secure-website-hosting`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://lemonadeideas.com/${locale}/blogs/secure-website-hosting`,
      siteName: 'Lemonade Ideas',
      images: [
        {
          url: 'https://lemonadeideas.com/images/blogs/secure-website-hosting/hero.png',
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
      images: ['https://lemonadeideas.com/images/blogs/secure-website-hosting/hero.png'],
    },
  };
}

export default function BlogPostPage() {
  const locale = useLocale();
  const slug = 'secure-website-hosting';
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
