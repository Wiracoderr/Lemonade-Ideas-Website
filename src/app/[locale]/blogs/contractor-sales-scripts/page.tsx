import { useLocale } from 'next-intl';
import EnBlog from './en';
import EsBlog from './es';

import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const metadataMap: Record<string, { title: string, description: string }> = {
    en: {
      title: "Contractor Sales Scripts: Close 8-Figure Commercial Builds | Lemonade Ideas",
      description: "Stop giving free consulting and start anchoring massive profit margins with these aggressive, elite contractor sales scripts and psychological framing techniques.",
    },
    es: {
      title: "Guiones de Ventas para Contratistas: Psicología de Cierres Comerciales | Lemonade Ideas",
      description: "Deje de asombrosa fiera incesantemente de puras asombrosamente fétidas tontas de maravillas majestuosa. Aprenda los guiones B2B de los contratistas de élite pura.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/contractor-sales-scripts`,
      languages: {
        en: `/en/blogs/contractor-sales-scripts`,
        es: `/es/blogs/contractor-sales-scripts`,
      },
    },
  };
}

export default function BlogPostPage() {
  const locale = useLocale();
  return locale === 'es' ? <EsBlog /> : <EnBlog />;
}
