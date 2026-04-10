import { useLocale } from 'next-intl';
import EnBlog from './en';
import EsBlog from './es';

import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const metadataMap: Record<string, { title: string, description: string }> = {
    en: {
      title: "The Monolingual Bottleneck: Missing Elite Subcontractors and Municipal Bids in CA",
      description: "Scaling $10M+ commercial developers in California are bleeding elite bilingual pipeline and forfeiting lucrative municipal public works RFPs entirely due to archaic, english-only corporate digital infrastructure.",
    },
    es: {
      title: "El Cuello de Botella Monolingüe: Perdiendo Subcontratistas y Obras Públicas en California",
      description: "Las desarrolladoras comerciales de $10M+ en California están perdiendo contratos municipales y recursos élites bilingües simplemente debido a una infraestructura digital corporativa anticuada, monolingüe y sin Next.js.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/multilingual-construction-sites`,
      languages: {
        en: `/en/blogs/multilingual-construction-sites`,
        es: `/es/blogs/multilingual-construction-sites`,
      },
    },
  };
}

export default function BlogPostPage() {
  const locale = useLocale();
  return locale === 'es' ? <EsBlog /> : <EnBlog />;
}
