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
      canonical: `https://lemonadeideas.com/${locale}/blogs/contractor-reputation-repair`,
      languages: {
        'en': 'https://lemonadeideas.com/en/blogs/contractor-reputation-repair',
        'es': 'https://lemonadeideas.com/es/blogs/contractor-reputation-repair',
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
