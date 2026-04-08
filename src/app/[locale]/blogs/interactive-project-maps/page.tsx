import { useLocale } from 'next-intl';
import EnBlog from './en';
import EsBlog from './es';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const metadataMap: Record<string, { title: string, description: string }> = {
    en: {
      title: "Interactive Project Maps: Validate $50M Capabilities Without Saying a Word",
      description: "Client trust isn’t built on promises; it is built on verifiable geographic dominance. Learn how integrating real-time project mapping destroys competitor credibility.",
    },
    es: {
      title: "Mapas de Proyectos Interactivos: Validan Capacidades de $50M Sin Decir una Palabra",
      description: "La confianza del cliente no se basa en promesas. Aprenda cómo la integración de mapeo geográfico de proyectos en tiempo real destruye absolutamente la credibilidad de sus competidores.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/interactive-project-maps`,
      languages: {
        en: `/en/blogs/interactive-project-maps`,
        es: `/es/blogs/interactive-project-maps`,
      },
    },
  };
}

export default function BlogPostPage() {
  const locale = useLocale();
  return locale === 'es' ? <EsBlog /> : <EnBlog />;
}
