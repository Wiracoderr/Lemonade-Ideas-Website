import { useLocale } from 'next-intl';
import EnBlog from './en';
import EsBlog from './es';

import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const metadataMap: Record<string, { title: string, description: string }> = {
    en: {
      title: "Design-Build Outreach: Stop Selling Blueprints and Start Selling Unified Elite Execution",
      description: "Discover why the traditional design-bid-build model is a massive liability. Learn how to aggressively market your Design-Build firm to high-ticket B2B developers.",
    },
    es: {
      title: "Alcance Design-Build: Deje de Vender Planos y Empiece a Vender Ejecución Unificada de Élite",
      description: "Aprenda por qué el modelo tradicional de diseño-licitación-construcción es un riesgo masivo y cómo comercializar su empresa de diseño y construcción.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/design-build-outreach`,
      languages: {
        en: `/en/blogs/design-build-outreach`,
        es: `/es/blogs/design-build-outreach`,
      },
    },
  };
}

export default function BlogPostPage() {
  const locale = useLocale();
  return locale === 'es' ? <EsBlog /> : <EnBlog />;
}
