import { useLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import ENPost from './en';
import ESPost from './es';
import { Metadata } from 'next';

const titleEn = "HVAC Marketing Strategies: B2B Commercial Dominance | Lemonade";
const descriptionEn = "Stop relying on residential summer heatwaves. Learn how elite HVAC contractors architect B2B monopolies and secure multi-year commercial SLAs.";

const titleEs = "Estrategias de Marketing HVAC: Dominio Comercial B2B | Lemonade";
const descriptionEs = "Deja de depender de las olas de calor. Aprende cómo los contratistas élite de HVAC construyen monopolios B2B y aseguran contratos corporativos masivos.";

export function generateMetadata({ params: { locale } }: { params: { locale: string } }): Metadata {
  const isEn = locale === 'en';
  return {
    title: isEn ? titleEn : titleEs,
    description: isEn ? descriptionEn : descriptionEs,
    alternates: {
      canonical: `https://www.lemonadeideas.com/${locale}/blogs/hvac-marketing-strategies`,
      languages: {
        'en': 'https://www.lemonadeideas.com/en/blogs/hvac-marketing-strategies',
        'es': 'https://www.lemonadeideas.com/es/blogs/hvac-marketing-strategies',
      },
    },
    openGraph: {
      title: isEn ? titleEn : titleEs,
      description: isEn ? descriptionEn : descriptionEs,
      url: `https://www.lemonadeideas.com/${locale}/blogs/hvac-marketing-strategies`,
      type: 'article',
      images: [
        {
          url: 'https://www.lemonadeideas.com/images/blogs/hvac-marketing-strategies/hero.png',
          width: 1200,
          height: 630,
          alt: isEn ? 'Industrial HVAC Rooftop Unit at Night' : 'Unidad industrial de HVAC nocturna',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: isEn ? titleEn : titleEs,
      description: isEn ? descriptionEn : descriptionEs,
      images: ['https://www.lemonadeideas.com/images/blogs/hvac-marketing-strategies/hero.png'],
    },
  };
}

export default function BlogRoute({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);

  if (locale === 'es') {
    return <ESPost />;
  }

  return <ENPost />;
}
