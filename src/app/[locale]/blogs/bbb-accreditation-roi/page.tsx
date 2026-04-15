import { setRequestLocale } from 'next-intl/server';
import EnglishContent from './en';
import SpanishContent from './es';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return {
    title: locale === 'es'
      ? 'ROI de Acreditación BBB: Por Qué los Contratistas de Élite Invierten en el Better Business Bureau | Lemonade Ideas'
      : 'BBB Accreditation ROI: Why Elite Contractors Treat BBB as a $500K Trust Signal Investment | Lemonade Ideas',
    description: locale === 'es'
      ? 'Descubra cómo la acreditación del BBB genera retorno de inversión algorítmico, calificación de adquisiciones e infraestructura de resolución de disputas para contratistas comerciales de élite.'
      : 'Discover how BBB accreditation generates algorithmic ROI, procurement qualification, and dispute resolution infrastructure for elite commercial contractors.',
    alternates: {
      canonical: `https://lemonadeideas.com/${locale}/blogs/bbb-accreditation-roi`,
      languages: {
        'en': 'https://lemonadeideas.com/en/blogs/bbb-accreditation-roi',
        'es': 'https://lemonadeideas.com/es/blogs/bbb-accreditation-roi',
      },
    },
    openGraph: {
      title: locale === 'es'
        ? 'ROI de Acreditación BBB: Por Qué los Contratistas de Élite Invierten e'
        : 'BBB Accreditation ROI: Why Elite Contractors Treat BBB as a $500K Trus',
      description: locale === 'es'
        ? 'Descubra cómo la acreditación del BBB genera retorno de inversión algorítmico, calificación de adquisiciones e infraestr'
        : 'Discover how BBB accreditation generates algorithmic ROI, procurement qualification, and dispute resolution infrastructu',
      url: `https://lemonadeideas.com/${locale}/blogs/bbb-accreditation-roi`,
      siteName: 'Lemonade Ideas',
      images: [
        {
          url: 'https://lemonadeideas.com/images/blogs/bbb-accreditation-roi/hero.png',
          width: 1200,
          height: 630,
          alt: 'BBB Accreditation ROI: Why Elite Contractors Treat',
        },
      ],
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: locale === 'es'
        ? 'ROI de Acreditación BBB: Por Qué los Contratistas de Élite Invierten e'
        : 'BBB Accreditation ROI: Why Elite Contractors Treat BBB as a $500K Trus',
      description: locale === 'es'
        ? 'Descubra cómo la acreditación del BBB genera retorno de inversión algorítmico, calificación de adquisiciones e infraestr'
        : 'Discover how BBB accreditation generates algorithmic ROI, procurement qualification, and dispute resolution infrastructu',
      images: ['https://lemonadeideas.com/images/blogs/bbb-accreditation-roi/hero.png'],
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
