import { useLocale } from 'next-intl';
import EnBlog from './en';
import EsBlog from './es';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const metadataMap: Record<string, { title: string, description: string }> = {
    en: {
      title: "Hard Hat Branding: The Psychological Moat of the Construction Jobsite",
      description: "Discover why uncompromising physical branding and standardized safety gear commands market authority and secures $50M enterprise-level commercial bids.",
    },
    es: {
      title: "Hard Hat Branding: El Foso Psicológico del Sitio de Obra de Construcción",
      description: "Descubra por qué una identidad visual implacable impone autoridad en el mercado de la construcción comercial y asegura licitaciones de grado empresarial invencibles.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/hard-hat-branding`,
      languages: {
        en: `/en/blogs/hard-hat-branding`,
        es: `/es/blogs/hard-hat-branding`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://lemonadeideas.com/${locale}/blogs/hard-hat-branding`,
      siteName: 'Lemonade Ideas',
      images: [
        {
          url: 'https://lemonadeideas.com/images/blogs/hard-hat-branding/hero.png',
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
      images: ['https://lemonadeideas.com/images/blogs/hard-hat-branding/hero.png'],
    },
  };
}

export default function BlogPostPage() {
  const locale = useLocale();
  return locale === 'es' ? <EsBlog /> : <EnBlog />;
}
