import { getTranslations, setRequestLocale } from 'next-intl/server';
import EnglishContent from './en';
import SpanishContent from './es';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale });
  return {
    title: locale === 'es' ? 'Mapas de Calor en Construcción Comercial | Lemonade Ideas' : 'Heatmap Tracking for Commercial Contractors | Lemonade Ideas',
    description: locale === 'es' 
      ? 'Descubra cómo los mapas de calor exponen fugas de $20M+ y optimizan el embudo de conversión para servicios de construcción comercial B2B.' 
      : 'Discover how heatmap tracking exposes $20M+ pipeline leaks and optimizes the conversion funnel for B2B commercial construction services.',
    alternates: {
      canonical: `https://www.lemonadeideas.com/${locale}/blogs/heatmap-tracking-contractors`,
      languages: {
        'en': 'https://www.lemonadeideas.com/en/blogs/heatmap-tracking-contractors',
        'es': 'https://www.lemonadeideas.com/es/blogs/heatmap-tracking-contractors',
      },
    },
    openGraph: {
      title: locale === 'es'
        ? 'es'
        : 'Descubra cómo los mapas de calor exponen fugas de $20M+ y optimizan el',
      description: locale === 'es'
        ? 'Descubra cómo los mapas de calor exponen fugas de $20M+ y optimizan el embudo de conversión para servicios de construcci'
        : 'Discover how heatmap tracking exposes $20M+ pipeline leaks and optimizes the conversion funnel for B2B commercial constr',
      url: `https://www.lemonadeideas.com/${locale}/blogs/heatmap-tracking-contractors`,
      siteName: 'Lemonade Ideas',
      images: [
        {
          url: 'https://www.lemonadeideas.com/images/blogs/heatmap-tracking-contractors/hero.png',
          width: 1200,
          height: 630,
          alt: 'Descubra cómo los mapas de calor exponen fugas de ',
        },
      ],
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: locale === 'es'
        ? 'es'
        : 'Descubra cómo los mapas de calor exponen fugas de $20M+ y optimizan el',
      description: locale === 'es'
        ? 'Descubra cómo los mapas de calor exponen fugas de $20M+ y optimizan el embudo de conversión para servicios de construcci'
        : 'Discover how heatmap tracking exposes $20M+ pipeline leaks and optimizes the conversion funnel for B2B commercial constr',
      images: ['https://www.lemonadeideas.com/images/blogs/heatmap-tracking-contractors/hero.png'],
    },
  };
}

export default function BlogRoute({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);

  if (locale === 'es') {
    return <SpanishContent />;
  }
  
  return <EnglishContent />;
}
