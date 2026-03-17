import { useLocale } from 'next-intl';
import EnBlog from './en';
import EsBlog from './es';


import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const metadataMap: Record<string, { title: string, description: string }> = {
    en: {
      title: "B2B LinkedIn Ads for Construction: Stop Advertising to Tire Kickers, Start Targeting REIT Managers",
      description: "Discover the elite algorithmic system for leveraging B2B LinkedIn Ads to bypass receptionists and place your commercial construction capabilities directly in front of highly qualified, high-net-worth real estate developers and architects.",
    },
    es: {
      title: "Anuncios B2B en LinkedIn para Construcción: Deje de Anunciarse a Oportunistas Baratos y Comience a Dirigirse a Gerentes de REITs",
      description: "Descubra el sistema algorítmico de élite corporativa para aprovechar ferozmente los Anuncios B2B en LinkedIn para eludir a las inútiles recepcionistas y colocar sus astutas y rudas capacidades directamente.",
    }
  };

  const meta = metadataMap[locale] || metadataMap.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/blogs/b2b-linkedin-ads`,
      languages: {
        en: `/en/blogs/b2b-linkedin-ads`,
        es: `/es/blogs/b2b-linkedin-ads`,
      },
    },
  };
}


export default function BlogPostPage() {
  const locale = useLocale();
  return locale === 'es' ? <EsBlog /> : <EnBlog />;
}
