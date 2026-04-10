import { getTranslations, setRequestLocale } from 'next-intl/server';
import EnglishContent from './en';
import SpanishContent from './es';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale });
  return {
    title: locale === 'es' ? 'Dominancia en Map Pack | Lemonade Ideas' : 'Map Pack Geographic Dominance | Lemonade Ideas',
    description: locale === 'es' 
      ? 'Por qué tu constructora comercial necesita monopolizar el Google Local 3-Pack para contratos de $50M+.' 
      : 'Why your commercial construction firm must monopolize the Google Local 3-Pack to win $50M+ contracts.',
    alternates: {
      canonical: `https://lemonadeideas.com/${locale}/blogs/map-pack-ranking`,
      languages: {
        'en': 'https://lemonadeideas.com/en/blogs/map-pack-ranking',
        'es': 'https://lemonadeideas.com/es/blogs/map-pack-ranking',
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
