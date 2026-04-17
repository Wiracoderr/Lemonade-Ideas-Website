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
      canonical: `https://www.lemonadeideas.com/${locale}/blogs/handling-negative-reviews`,
      languages: {
        'en': 'https://www.lemonadeideas.com/en/blogs/handling-negative-reviews',
        'es': 'https://www.lemonadeideas.com/es/blogs/handling-negative-reviews',
      },
    },
    openGraph: {
      title: locale === 'es'
        ? 'Manejo de Reseñas Negativas: Cómo los Contratistas de Élite Convierten'
        : 'Handling Negative Reviews: How Elite Contractors Weaponize Criticism I',
      description: locale === 'es'
        ? 'Descubra el protocolo de 4 principios que los contratistas comerciales de élite usan para convertir reseñas negativas en'
        : 'Discover the 4-principle response protocol elite commercial contractors use to transform negative reviews into demonstra',
      url: `https://www.lemonadeideas.com/${locale}/blogs/handling-negative-reviews`,
      siteName: 'Lemonade Ideas',
      images: [
        {
          url: 'https://www.lemonadeideas.com/images/blogs/handling-negative-reviews/hero.png',
          width: 1200,
          height: 630,
          alt: 'Handling Negative Reviews: How Elite Contractors W',
        },
      ],
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: locale === 'es'
        ? 'Manejo de Reseñas Negativas: Cómo los Contratistas de Élite Convierten'
        : 'Handling Negative Reviews: How Elite Contractors Weaponize Criticism I',
      description: locale === 'es'
        ? 'Descubra el protocolo de 4 principios que los contratistas comerciales de élite usan para convertir reseñas negativas en'
        : 'Discover the 4-principle response protocol elite commercial contractors use to transform negative reviews into demonstra',
      images: ['https://www.lemonadeideas.com/images/blogs/handling-negative-reviews/hero.png'],
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
