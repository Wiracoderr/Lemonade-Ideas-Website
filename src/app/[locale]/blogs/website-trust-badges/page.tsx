import { useLocale } from 'next-intl';
import EnBlog from './en';
import EsBlog from './es';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const metadataMap: Record<string, { title: string, description: string }> = {
    en: {
      title: "Website Trust Badges: Persuasion Tools That Win Capital Bids",
      description: "When corporate investors audit your firm, they look for verifiable risk-mitigation. Fix your conversion rates with strategic website trust badges.",
    },
    es: {
      title: "Insignias de Confianza Web: Gane Licitaciones Multimillonarias",
      description: "Cuando los inversionistas corporativos lo auditan, buscan mitigación de riesgos. Asegure la conversión con insignias de confianza web y sellos de seguridad.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/website-trust-badges`,
      languages: {
        en: `/en/blogs/website-trust-badges`,
        es: `/es/blogs/website-trust-badges`,
      },
    },
  };
}

export default function BlogPostPage() {
  const locale = useLocale();
  return locale === 'es' ? <EsBlog /> : <EnBlog />;
}
