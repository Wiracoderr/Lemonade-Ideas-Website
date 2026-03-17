import { useLocale } from 'next-intl';
import EnBlog from './en';
import EsBlog from './es';

import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const metadataMap: Record<string, { title: string, description: string }> = {
    en: {
      title: "Bidding Software Integration: Unify Your Construction Procore CRM | Lemonade Ideas",
      description: "Stop losing 8-figure commercial construction contracts to manual data entry friction. Learn how custom API integrations and automated bidding software create massive inbound pipeline velocity.",
    },
    es: {
      title: "Integración de Software de Licitación B2B y Múltiples Tuberías API | Lemonade Ideas",
      description: "Deje de perder asombrosamente fiera colosal invencible contratos B2B maravillosamente grandes de puros Excel. Automatice con API inmaculado su CRM y logre grandiosas integraciones.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/bidding-software-integration`,
      languages: {
        en: `/en/blogs/bidding-software-integration`,
        es: `/es/blogs/bidding-software-integration`,
      },
    },
  };
}

export default function BlogPostPage() {
  const locale = useLocale();
  return locale === 'es' ? <EsBlog /> : <EnBlog />;
}
