import { setRequestLocale } from 'next-intl/server';
import EnglishContent from './en';
import SpanishContent from './es';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return {
    title: locale === 'es'
      ? 'Manejo de Reseñas Negativas: Cómo los Contratistas de Élite Convierten las Críticas en Autoridad | Lemonade Ideas'
      : 'Handling Negative Reviews: How Elite Contractors Weaponize Criticism Into Algorithmic Authority | Lemonade Ideas',
    description: locale === 'es'
      ? 'Descubra el protocolo de 4 principios que los contratistas comerciales de élite usan para convertir reseñas negativas en demostraciones de competencia institucional y autoridad algorítmica.'
      : 'Discover the 4-principle response protocol elite commercial contractors use to transform negative reviews into demonstrations of institutional competence and algorithmic authority.',
    alternates: {
      canonical: `https://lemonadeideas.com/${locale}/blogs/handling-negative-reviews`,
      languages: {
        'en': 'https://lemonadeideas.com/en/blogs/handling-negative-reviews',
        'es': 'https://lemonadeideas.com/es/blogs/handling-negative-reviews',
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
