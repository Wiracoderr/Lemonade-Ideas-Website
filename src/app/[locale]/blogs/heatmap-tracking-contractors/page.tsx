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
      canonical: `https://lemonadeideas.com/${locale}/blogs/heatmap-tracking-contractors`,
      languages: {
        'en': 'https://lemonadeideas.com/en/blogs/heatmap-tracking-contractors',
        'es': 'https://lemonadeideas.com/es/blogs/heatmap-tracking-contractors',
      },
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
