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
      title: "SEO for General Contractors: The Algorithmic Blueprint for Permanent Market Supremacy",
      description: "Why 87% of commercial buyers discover GCs through Google search. Master technical SEO, keyword intelligence, authority content, and local dominance to own your market.",
    },
    es: {
      title: "SEO para Contratistas Generales: El Plano Algorítmico para la Supremacía Permanente del Mercado",
      description: "Por qué el 87% de los compradores comerciales descubren contratistas a través de búsquedas en Google. Domina el SEO técnico, inteligencia de palabras clave y autoridad local.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/seo-general-contractors`,
      languages: {
        en: `/en/blogs/seo-general-contractors`,
        es: `/es/blogs/seo-general-contractors`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://www.lemonadeideas.com/${locale}/blogs/seo-general-contractors`,
      siteName: 'Lemonade Ideas',
      images: [
        {
          url: 'https://www.lemonadeideas.com/images/blogs/seo-general-contractors/hero.png',
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
      images: ['https://www.lemonadeideas.com/images/blogs/seo-general-contractors/hero.png'],
    },
  };
}

export default function BlogPostPage() {
  const locale = useLocale();
  const slug = 'seo-general-contractors';
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
