import { setRequestLocale } from 'next-intl/server';
import EnglishContent from './en';
import SpanishContent from './es';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return {
    title: locale === 'es'
      ? 'Reparación de Reputación de Contratistas: El Manual de Grado Institucional | Lemonade Ideas'
      : 'Contractor Reputation Repair: The Institutional-Grade Playbook for Rebuilding Digital Authority | Lemonade Ideas',
    description: locale === 'es'
      ? 'Descubra el sistema de 4 fases que los contratistas comerciales de élite usan para reconstruir su autoridad digital después de una crisis reputacional catastrófica.'
      : 'Discover the 4-phase system elite commercial contractors use to rebuild digital authority after a catastrophic reputational crisis.',
    alternates: {
      canonical: `https://www.lemonadeideas.com/${locale}/blogs/contractor-reputation-repair`,
      languages: {
        'en': 'https://www.lemonadeideas.com/en/blogs/contractor-reputation-repair',
        'es': 'https://www.lemonadeideas.com/es/blogs/contractor-reputation-repair',
      },
    },
    openGraph: {
      title: locale === 'es'
        ? 'Reparación de Reputación de Contratistas: El Manual de Grado Instituci'
        : 'Contractor Reputation Repair: The Institutional-Grade Playbook for Reb',
      description: locale === 'es'
        ? 'Descubra el sistema de 4 fases que los contratistas comerciales de élite usan para reconstruir su autoridad digital desp'
        : 'Discover the 4-phase system elite commercial contractors use to rebuild digital authority after a catastrophic reputatio',
      url: `https://www.lemonadeideas.com/${locale}/blogs/contractor-reputation-repair`,
      siteName: 'Lemonade Ideas',
      images: [
        {
          url: 'https://www.lemonadeideas.com/images/blogs/contractor-reputation-repair/hero.png',
          width: 1200,
          height: 630,
          alt: 'Contractor Reputation Repair: The Institutional-Gr',
        },
      ],
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: locale === 'es'
        ? 'Reparación de Reputación de Contratistas: El Manual de Grado Instituci'
        : 'Contractor Reputation Repair: The Institutional-Grade Playbook for Reb',
      description: locale === 'es'
        ? 'Descubra el sistema de 4 fases que los contratistas comerciales de élite usan para reconstruir su autoridad digital desp'
        : 'Discover the 4-phase system elite commercial contractors use to rebuild digital authority after a catastrophic reputatio',
      images: ['https://www.lemonadeideas.com/images/blogs/contractor-reputation-repair/hero.png'],
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
