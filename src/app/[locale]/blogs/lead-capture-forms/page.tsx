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
      title: "Construction Lead Capture Forms: Why Generic Forms Kill Your $50M Pipeline",
      description: "Asking for less information doesn't generate more quality leads; it generates garbage. Learn how elite commercial contractors build strict digital checkpoints.",
    },
    es: {
      title: "Formularios de Lead Capture en Construcción: Destruyendo el Tráfico Basura",
      description: "Por qué solicitar los presupuestos iniciales mediante condicionamiento Next.js salva cientos de horas a sus agentes y asegura licitaciones titánicas en California.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/lead-capture-forms`,
      languages: {
        en: `/en/blogs/lead-capture-forms`,
        es: `/es/blogs/lead-capture-forms`,
      },
    },
  };
}

export default function BlogPostPage() {
  const locale = useLocale();
  const slug = 'lead-capture-forms';
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
