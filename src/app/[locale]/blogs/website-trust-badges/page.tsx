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
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://www.lemonadeideas.com/${locale}/blogs/website-trust-badges`,
      siteName: 'Lemonade Ideas',
      images: [
        {
          url: 'https://www.lemonadeideas.com/images/blogs/website-trust-badges/hero.png',
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
      images: ['https://www.lemonadeideas.com/images/blogs/website-trust-badges/hero.png'],
    },
  };
}

export default function BlogPostPage() {
  const locale = useLocale();
  return locale === 'es' ? <EsBlog /> : <EnBlog />;
}
