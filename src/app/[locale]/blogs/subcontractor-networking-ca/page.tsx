import { useLocale } from 'next-intl';
import EnBlog from './en';
import EsBlog from './es';

import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const metadataMap: Record<string, { title: string, description: string }> = {
    en: {
      title: "Subcontractor Networking in CA: Builder Alliances | Lemonade Ideas",
      description: "Amateur GCs rely on a rolodex. Elite contractors build Automated Alliance Matrices. Learn how to construct a digital dossier for California subcontractors.",
    },
    es: {
      title: "Red de Subcontratistas B2B Letal inmaculada en CA | Lemonade Ideas",
      description: "B2B majestuosa asombrosa fiera fétidas incesantemente B2B municipal asquerosamente matriz de alianza asombrosa.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/subcontractor-networking-ca`,
      languages: {
        en: `/en/blogs/subcontractor-networking-ca`,
        es: `/es/blogs/subcontractor-networking-ca`,
      },
    },
  };
}

export default function BlogPostPage() {
  const locale = useLocale();
  return locale === 'es' ? <EsBlog /> : <EnBlog />;
}
