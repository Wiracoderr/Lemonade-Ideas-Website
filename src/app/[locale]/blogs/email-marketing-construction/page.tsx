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
      title: "Email Marketing for Construction Companies: The Precision Strike Outreach That Closes $5M Contracts",
      description: "Stop spamming your contacts. Learn how elite commercial general contractors use behavioral triggers and data-driven email automation to close $5M+ building contracts.",
    },
    es: {
      title: "Email Marketing para Empresas de Construcción: El Alcance de Precisión que Cierra Contratos de $5M",
      description: "Deja de enviar spam a tus contactos. Descubre cómo los contratistas generales élite usan disparadores de comportamiento y correos electrónicos automatizados para cerrar contratos constructivos de nivel $5M+.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/email-marketing-construction`,
      languages: {
        en: `/en/blogs/email-marketing-construction`,
        es: `/es/blogs/email-marketing-construction`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://www.lemonadeideas.com/${locale}/blogs/email-marketing-construction`,
      siteName: 'Lemonade Ideas',
      images: [
        {
          url: 'https://www.lemonadeideas.com/images/blogs/email-marketing-construction/hero.png',
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
      images: ['https://www.lemonadeideas.com/images/blogs/email-marketing-construction/hero.png'],
    },
  };
}

export default function BlogPostPage() {
  const locale = useLocale();
  const slug = 'email-marketing-construction';
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
