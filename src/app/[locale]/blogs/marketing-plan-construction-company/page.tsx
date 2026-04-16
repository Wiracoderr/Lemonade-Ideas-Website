import { useLocale } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import ENPost from './en';
import ESPost from './es';
import { Metadata } from 'next';

const titleEn = "Marketing Plan for Construction Company: Beyond Word-of-Mouth | Lemonade";
const descriptionEn = "If your construction firm relies solely on referrals, you are fundamentally unscalable. Learn how $20M+ elite builders architect rigid, mathematical B2B marketing pipelines to dominate tier-1 institutional bids.";

const titleEs = "Plan de Marketing para Constructora: Más Allá del Boca a Boca | Lemonade";
const descriptionEs = "Si tu constructora depende de las recomendaciones, no es escalable. Descubre cómo los constructores de élite de $20M+ diseñan arquitecturas de marketing B2B para dominar licitaciones institucionales.";

export function generateMetadata({ params: { locale } }: { params: { locale: string } }): Metadata {
  const isEn = locale === 'en';
  return {
    title: isEn ? titleEn : titleEs,
    description: isEn ? descriptionEn : descriptionEs,
    alternates: {
      canonical: `https://www.lemonadeideas.com/${locale}/blogs/marketing-plan-construction-company`,
      languages: {
        'en': 'https://www.lemonadeideas.com/en/blogs/marketing-plan-construction-company',
        'es': 'https://www.lemonadeideas.com/es/blogs/marketing-plan-construction-company',
      },
    },
    openGraph: {
      title: isEn ? titleEn : titleEs,
      description: isEn ? descriptionEn : descriptionEs,
      url: `https://www.lemonadeideas.com/${locale}/blogs/marketing-plan-construction-company`,
      type: 'article',
      images: [
        {
          url: 'https://www.lemonadeideas.com/images/blogs/marketing-plan-construction-company/hero.png',
          width: 1200,
          height: 630,
          alt: isEn ? 'Construction executive reviewing an aggressive marketing plan in a boardroom' : 'Ejecutivo de construcción revisando un fuerte plan de marketing en junta directiva',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: isEn ? titleEn : titleEs,
      description: isEn ? descriptionEn : descriptionEs,
      images: ['https://www.lemonadeideas.com/images/blogs/marketing-plan-construction-company/hero.png'],
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
