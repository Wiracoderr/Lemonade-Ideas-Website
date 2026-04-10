import { setRequestLocale } from 'next-intl/server';
import EnglishContent from './en';
import SpanishContent from './es';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return {
    title: locale === 'es'
      ? 'Monopolio Algorítmico: Arma Tu Perfil de Negocio de Google | Lemonade Ideas'
      : 'Algorithmic Monopoly: Weaponizing Your Google Business Profile | Lemonade Ideas',
    description: locale === 'es'
      ? 'Cómo los contratistas comerciales de élite de 8 cifras diseñan monopolios digitales convirtiendo su Perfil de Negocio de Google en un arma algorítmica.'
      : 'How elite 8-figure commercial contractors engineer digital monopolies by turning their Google Business Profile into a search algorithm weapon.',
    alternates: {
      canonical: `https://lemonadeideas.com/${locale}/blogs/google-business-profile`,
      languages: {
        'en': 'https://lemonadeideas.com/en/blogs/google-business-profile',
        'es': 'https://lemonadeideas.com/es/blogs/google-business-profile',
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
