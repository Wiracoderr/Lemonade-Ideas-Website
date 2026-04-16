import { useLocale } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import ENPost from './en';
import ESPost from './es';
import { Metadata } from 'next';

const titleEn = "Facebook Ads for Remodeling: Destroying the Boost Post Fallacy | Lemonade";
const descriptionEn = "Stop clicking 'Boost Post' and collecting empty likes. Learn how elite remodeling contractors use Meta Pixel and direct-response funnels to acquire high-net-worth clients.";

const titleEs = "Facebook Ads para Remodelación: Destruyendo la Falacia de Promocionar | Lemonade";
const descriptionEs = "Deja de hacer clic en 'Promocionar' para coleccionar likes vacíos. Aprende cómo la élite usa el Pixel de Meta para adquirir clientes de alto poder adquisitivo.";

export function generateMetadata({ params: { locale } }: { params: { locale: string } }): Metadata {
  const isEn = locale === 'en';
  return {
    title: isEn ? titleEn : titleEs,
    description: isEn ? descriptionEn : descriptionEs,
    alternates: {
      canonical: `https://www.lemonadeideas.com/${locale}/blogs/facebook-ads-remodeling-contractors`,
      languages: {
        'en': 'https://www.lemonadeideas.com/en/blogs/facebook-ads-remodeling-contractors',
        'es': 'https://www.lemonadeideas.com/es/blogs/facebook-ads-remodeling-contractors',
      },
    },
    openGraph: {
      title: isEn ? titleEn : titleEs,
      description: isEn ? descriptionEn : descriptionEs,
      url: `https://www.lemonadeideas.com/${locale}/blogs/facebook-ads-remodeling-contractors`,
      type: 'article',
      images: [
        {
          url: 'https://www.lemonadeideas.com/images/blogs/facebook-ads-remodeling-contractors/hero.png',
          width: 1200,
          height: 630,
          alt: isEn ? 'Meta Ads ROAS Command Center' : 'Centro de Comando Meta Ads ROAS',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: isEn ? titleEn : titleEs,
      description: isEn ? descriptionEn : descriptionEs,
      images: ['https://www.lemonadeideas.com/images/blogs/facebook-ads-remodeling-contractors/hero.png'],
    },
  };
}

export default function BlogRoute({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  if (locale === 'es') {
    return <ESPost />;
  }

  return <ENPost />;
}
