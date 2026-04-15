import { useLocale } from 'next-intl';
import EnBlog from './en';
import EsBlog from './es';


import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const metadataMap: Record<string, { title: string, description: string }> = {
    en: {
      title: "ADA Compliant Construction Websites: Exposing the Predatory $50k Title III Lawsuit Crisis",
      description: "Commercial contractors are bleeding horrifying sums of raw capital to predatory legal firms exploiting non-compliant, archaic construction websites lacking strict WCAG 2.1 AA digital architecture.",
    },
    es: {
      title: "Sitios Web de Construcción que Cumplen con la ADA: Exponiendo la Crisis de Demandas Predadoras de $50k del Título III",
      description: "Los contratistas comerciales están perdiendo sumas horripilantes de capital puro ante firmas legales predadoras que explotan sitios web arcaicos que carecen de la estricta arquitectura digital WCAG 2.1 AA.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/ada-compliant-websites`,
      languages: {
        en: `/en/blogs/ada-compliant-websites`,
        es: `/es/blogs/ada-compliant-websites`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://lemonadeideas.com/${locale}/blogs/ada-compliant-websites`,
      siteName: 'Lemonade Ideas',
      images: [
        {
          url: 'https://lemonadeideas.com/images/blogs/ada-compliant-websites/hero.png',
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
      images: ['https://lemonadeideas.com/images/blogs/ada-compliant-websites/hero.png'],
    },
  };
}


export default function BlogPostPage() {
  const locale = useLocale();
  return locale === 'es' ? <EsBlog /> : <EnBlog />;
}
