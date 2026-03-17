import { useLocale } from 'next-intl';
import EnBlog from './en';
import EsBlog from './es';


import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const metadataMap: Record<string, { title: string, description: string }> = {
    en: {
      title: "Schema Markup for Builders: The Invisible Code That Dominates High-Ticket Commercial Search",
      description: "Discover how elite commercial contractors deploy advanced JSON-LD Schema data architecture to violently overpower competitors in Google's Knowledge Graph.",
    },
    es: {
      title: "Schema Markup para Constructores: El Código Invisible Que Domina Búsquedas Comerciales de Lujo",
      description: "Descubra cómo los contratistas comerciales de élite implementan una arquitectura avanzada de datos Schema JSON-LD para dominar a los competidores en el Knowledge Graph de Google.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/schema-markup-builders`,
      languages: {
        en: `/en/blogs/schema-markup-builders`,
        es: `/es/blogs/schema-markup-builders`,
      },
    },
  };
}


export default function BlogPostPage() {
  const locale = useLocale();
  return locale === 'es' ? <EsBlog /> : <EnBlog />;
}
